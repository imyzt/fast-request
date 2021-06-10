package io.github.kings1990.plugin.fastrequest.parse;

import cn.hutool.core.util.RandomUtil;
import cn.hutool.core.util.URLUtil;
import cn.hutool.json.JSONUtil;
import com.alibaba.fastjson.JSON;
import io.github.kings1990.plugin.fastrequest.model.DataMapping;
import io.github.kings1990.plugin.fastrequest.model.FastRequestConfiguration;
import io.github.kings1990.plugin.fastrequest.model.ParamKeyValue;
import io.github.kings1990.plugin.fastrequest.model.ParamNameType;
import io.github.kings1990.plugin.fastrequest.util.KV;
import io.github.kings1990.plugin.fastrequest.util.TypeUtil;

import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

public class RequestParamParse extends AbstractParamParse {
    @Override
    public LinkedHashMap<String, Object> parseParam(FastRequestConfiguration config, List<ParamNameType> paramNameTypeList) {
        List<DataMapping> customDataMappingList = config.getCustomDataMappingList();
        List<DataMapping> defaultDataMappingList = config.getDefaultDataMappingList();

        List<ParamNameType> requestParamList = paramNameTypeList.stream().filter(q -> q.getParseType() == 2).collect(Collectors.toList());
        LinkedHashMap<String, Object> nameValueMap = new LinkedHashMap<>();
        int randomStringLength = config.getRandomStringLength();
        for (ParamNameType paramNameType : requestParamList) {
            String type = paramNameType.getType();
            String name = paramNameType.getName();
            if ("java.lang.String".equals(type)) {
                nameValueMap.put(name, new ParamKeyValue(name, RandomUtil.randomString(randomStringLength), 2, TypeUtil.Type.String.name()));
                continue;
            }
            DataMapping dataMapping = customDataMappingList.stream().filter(q -> type.equals(q.getType())).findFirst().orElse(null);
            if (dataMapping != null) {
                Object value = dataMapping.getValue();
                if (JSONUtil.isJson(value.toString())) {
                    Map<String, Object> parse = JSON.parseObject(value.toString(), Map.class);
                    for (Map.Entry<String, Object> entry : parse.entrySet()) {
                        String k = entry.getKey();
                        Object v = entry.getValue();
                        String calcType = TypeUtil.calcTypeByValue(v);
                        nameValueMap.put(k, new ParamKeyValue(k, v, 2, calcType));
                    }
                }
                continue;
            }
            //默认的数据映射解析参数
            dataMapping = defaultDataMappingList.stream().filter(q -> type.equals(q.getType())).findFirst().orElse(null);
            if (dataMapping != null) {
                Object value = dataMapping.getValue();
                String calcType = TypeUtil.calcType(type);
                nameValueMap.put(name, new ParamKeyValue(name, value, 2, calcType));
                continue;
            }
            //json解析
            KV kv = KV.getFields(paramNameType.getPsiClass());
            String json = kv.toPrettyJson();
            Map parse = JSON.parseObject(json, Map.class);
            String queryParam = URLUtil.buildQuery(parse, null);
            nameValueMap.put(name, new ParamKeyValue(name, kv, 1,TypeUtil.Type.Object.name()));

        }

        return nameValueMap;
    }
}
