import{_ as s,o as a,c as n,Q as e}from"./chunks/framework.38a59c20.js";const b=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"regular-expression/greed.md","filePath":"regular-expression/greed.md","lastUpdated":1694070681000}'),l={name:"regular-expression/greed.md"},o=e(`<h2 id="贪婪与非贪婪模式" tabindex="-1">贪婪与非贪婪模式 <a class="header-anchor" href="#贪婪与非贪婪模式" aria-label="Permalink to &quot;贪婪与非贪婪模式&quot;">​</a></h2><h3 id="贪婪模式" tabindex="-1">贪婪模式 <a class="header-anchor" href="#贪婪模式" aria-label="Permalink to &quot;贪婪模式&quot;">​</a></h3><blockquote><p>在正则中，表示次数的量词默认是贪婪的,在贪婪模式下，会尝试尽可能最大长度去匹配</p></blockquote><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">//匹配结果为aaa，贪婪模式默认会匹配更多的a</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#9ECBFF;">&#39;aaabc&#39;</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">match</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">/</span><span style="color:#85E89D;font-weight:bold;">\\a</span><span style="color:#F97583;">*</span><span style="color:#9ECBFF;">/</span><span style="color:#E1E4E8;">)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">//匹配结果为aaa，贪婪模式默认会匹配更多的a</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#032F62;">&#39;aaabc&#39;</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">match</span><span style="color:#24292E;">(</span><span style="color:#032F62;">/</span><span style="color:#22863A;font-weight:bold;">\\a</span><span style="color:#D73A49;">*</span><span style="color:#032F62;">/</span><span style="color:#24292E;">)</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="非贪婪模式" tabindex="-1">非贪婪模式 <a class="header-anchor" href="#非贪婪模式" aria-label="Permalink to &quot;非贪婪模式&quot;">​</a></h3><blockquote><p>与贪婪模式相反，匹配少的，在数字元字符后边加上<code>?</code></p></blockquote><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">//匹配结果为空，因为a*最少匹配到0个a</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#9ECBFF;">&#39;aaabc&#39;</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">match</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">/</span><span style="color:#85E89D;font-weight:bold;">\\a</span><span style="color:#F97583;">*?</span><span style="color:#9ECBFF;">/</span><span style="color:#E1E4E8;">)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">//匹配结果为空，因为a*最少匹配到0个a</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#032F62;">&#39;aaabc&#39;</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">match</span><span style="color:#24292E;">(</span><span style="color:#032F62;">/</span><span style="color:#22863A;font-weight:bold;">\\a</span><span style="color:#D73A49;">*?</span><span style="color:#032F62;">/</span><span style="color:#24292E;">)</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div>`,7),p=[o];function t(r,c,i,d,y,h){return a(),n("div",null,p)}const u=s(l,[["render",t]]);export{b as __pageData,u as default};