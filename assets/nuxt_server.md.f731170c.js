import{_ as s,c as n,o as a,a as l}from"./app.6694acd3.js";const F=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[{"level":2,"title":"server","slug":"server","link":"#server","children":[{"level":3,"title":"\u6570\u636E\u8BF7\u6C42","slug":"\u6570\u636E\u8BF7\u6C42","link":"#\u6570\u636E\u8BF7\u6C42","children":[]},{"level":3,"title":"\u53C2\u6570\u8BF7\u6C42","slug":"\u53C2\u6570\u8BF7\u6C42","link":"#\u53C2\u6570\u8BF7\u6C42","children":[]},{"level":3,"title":"\u5339\u914D\u8BF7\u6C42\u65B9\u6CD5","slug":"\u5339\u914D\u8BF7\u6C42\u65B9\u6CD5","link":"#\u5339\u914D\u8BF7\u6C42\u65B9\u6CD5","children":[]},{"level":3,"title":"\u4E0D\u9700\u8981api\u524D\u7F00","slug":"\u4E0D\u9700\u8981api\u524D\u7F00","link":"#\u4E0D\u9700\u8981api\u524D\u7F00","children":[]},{"level":3,"title":"server\u7AEF\u4E2D\u95F4\u4EF6","slug":"server\u7AEF\u4E2D\u95F4\u4EF6","link":"#server\u7AEF\u4E2D\u95F4\u4EF6","children":[]}]}],"relativePath":"nuxt/server.md","lastUpdated":1666090779000}'),p={name:"nuxt/server.md"},e=l(`<h2 id="server" tabindex="-1">server <a class="header-anchor" href="#server" aria-hidden="true">#</a></h2><blockquote><p>server\u6587\u4EF6\u5939\uFF0C\u5305\u62EC\u8BF7\u6C42api\uFF0Croutes\uFF0Cmiddleware\uFF0Cplugins</p></blockquote><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">|-- server      </span></span>
<span class="line"><span style="color:#A6ACCD;">    |-- api</span></span>
<span class="line"><span style="color:#A6ACCD;">    |-- routes</span></span>
<span class="line"><span style="color:#A6ACCD;">    |-- middleware     </span></span>
<span class="line"><span style="color:#A6ACCD;">    |-- plugins</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h3 id="\u6570\u636E\u8BF7\u6C42" tabindex="-1">\u6570\u636E\u8BF7\u6C42 <a class="header-anchor" href="#\u6570\u636E\u8BF7\u6C42" aria-hidden="true">#</a></h3><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">|-- server      </span></span>
<span class="line"><span style="color:#A6ACCD;">    |-- api</span></span>
<span class="line"><span style="color:#A6ACCD;">        |-- count.ts</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#676E95;">//\u5B9A\u4E49\u4E00\u4E2A\u63A5\u53E3</span></span>
<span class="line"><span style="color:#89DDFF;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">default</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">defineEventHandler</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">event</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    count</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">1</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><div class="language-html line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">setup</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">data</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> count </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">await</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">useFetch</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">/api/count</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  Page visits: {{ count }}</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h3 id="\u53C2\u6570\u8BF7\u6C42" tabindex="-1">\u53C2\u6570\u8BF7\u6C42 <a class="header-anchor" href="#\u53C2\u6570\u8BF7\u6C42" aria-hidden="true">#</a></h3><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">    |-- api</span></span>
<span class="line"><span style="color:#A6ACCD;">        |-- user</span></span>
<span class="line"><span style="color:#A6ACCD;">            |-- [id].ts</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#676E95;">//\u5B9A\u4E49\u4E00\u4E2A\u63A5\u53E3</span></span>
<span class="line"><span style="color:#89DDFF;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">default</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">defineEventHandler</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">event</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">id</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">event</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">context</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">params</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">id</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">id</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h3 id="\u5339\u914D\u8BF7\u6C42\u65B9\u6CD5" tabindex="-1">\u5339\u914D\u8BF7\u6C42\u65B9\u6CD5 <a class="header-anchor" href="#\u5339\u914D\u8BF7\u6C42\u65B9\u6CD5" aria-hidden="true">#</a></h3><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#676E95;">//\u53EA\u80FD\u4F7F\u7528get\u65B9\u6CD5\u8BF7\u6C42</span></span>
<span class="line"><span style="color:#89DDFF;">|--</span><span style="color:#A6ACCD;"> server      </span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">|--</span><span style="color:#A6ACCD;"> api</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">|--</span><span style="color:#A6ACCD;"> count</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">get</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">ts</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h3 id="\u4E0D\u9700\u8981api\u524D\u7F00" tabindex="-1">\u4E0D\u9700\u8981<code>api</code>\u524D\u7F00 <a class="header-anchor" href="#\u4E0D\u9700\u8981api\u524D\u7F00" aria-hidden="true">#</a></h3><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">|-- server      </span></span>
<span class="line"><span style="color:#A6ACCD;">    |-- routes</span></span>
<span class="line"><span style="color:#A6ACCD;">        |-- count.ts</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">data</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> count </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">await</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">useFetch</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">/count</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><h3 id="server\u7AEF\u4E2D\u95F4\u4EF6" tabindex="-1">server\u7AEF\u4E2D\u95F4\u4EF6 <a class="header-anchor" href="#server\u7AEF\u4E2D\u95F4\u4EF6" aria-hidden="true">#</a></h3><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">|-- server      </span></span>
<span class="line"><span style="color:#A6ACCD;">    |-- middleware</span></span>
<span class="line"><span style="color:#A6ACCD;">        |-- log.ts</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#89DDFF;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">default</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">defineEventHandler</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">event</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">New request: </span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">+</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">event</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">req</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">url</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div>`,18),o=[e];function r(c,t,i,D,y,C){return a(),n("div",null,o)}const d=s(p,[["render",r]]);export{F as __pageData,d as default};
