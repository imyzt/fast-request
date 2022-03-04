import{_ as o,r,o as i,a as p,b as n,d as a,w as s,F as c,f as l,e as t}from"./app.2e148bfb.js";const d={},u={class:"table-of-contents"},h=t("Why the plugin doesn't respond"),k=t("Idea freezes after clicking the fastRequest icon"),b=t("Regeneration function"),f=l(`<h2 id="why-the-plugin-doesn-t-respond" tabindex="-1"><a class="header-anchor" href="#why-the-plugin-doesn-t-respond" aria-hidden="true">#</a> Why the plugin doesn&#39;t respond</h2><p>Answer:Please configure the relevant configuration according to the steps introduced in the first chapter first, and then click the icon.</p><h2 id="idea-freezes-after-clicking-the-fastrequest-icon" tabindex="-1"><a class="header-anchor" href="#idea-freezes-after-clicking-the-fastrequest-icon" aria-hidden="true">#</a> Idea freezes after clicking the fastRequest icon</h2><p>Answer:The entity class you designed is nested and recursive, the plugin does not support.</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">A</span><span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token class-name">B</span> b<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token keyword">int</span> xx<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">B</span><span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token class-name">A</span> a<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> xx<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>If you don&#39;t need the B property in the above case, then you can manually add a static keywords to property B when generating</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">A</span><span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token class-name">B</span> b<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token keyword">int</span> xx<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h2 id="regeneration-function" tabindex="-1"><a class="header-anchor" href="#regeneration-function" aria-hidden="true">#</a> Regeneration function</h2><p>Designed to reset generated parameters,it will clear the parameters of the previous API,but does not include the save action.<br> If your API has been saved and you want to change the parameters again, then you can click the regenerate button and remember to save again, otherwise the original parameters will be retained.<br> (It is equivalent to operating a file, emptying the content of the file but not saving it, then you will still see the original file before modification)</p>`,9);function g(m,y){const e=r("RouterLink");return i(),p(c,null,[n("nav",u,[n("ul",null,[n("li",null,[a(e,{to:"#why-the-plugin-doesn-t-respond"},{default:s(()=>[h]),_:1})]),n("li",null,[a(e,{to:"#idea-freezes-after-clicking-the-fastrequest-icon"},{default:s(()=>[k]),_:1})]),n("li",null,[a(e,{to:"#regeneration-function"},{default:s(()=>[b]),_:1})])])]),f],64)}var w=o(d,[["render",g]]);export{w as default};
