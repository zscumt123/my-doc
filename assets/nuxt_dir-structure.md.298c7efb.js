import{_ as s,c as n,o as a,a as l}from"./app.6694acd3.js";const A=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u76EE\u5F55\u7ED3\u6784","slug":"\u76EE\u5F55\u7ED3\u6784","link":"#\u76EE\u5F55\u7ED3\u6784","children":[]},{"level":2,"title":"\u522B\u540D","slug":"\u522B\u540D","link":"#\u522B\u540D","children":[]}],"relativePath":"nuxt/dir-structure.md","lastUpdated":1666090779000}'),p={name:"nuxt/dir-structure.md"},o=l(`<h2 id="\u76EE\u5F55\u7ED3\u6784" tabindex="-1">\u76EE\u5F55\u7ED3\u6784 <a class="header-anchor" href="#\u76EE\u5F55\u7ED3\u6784" aria-hidden="true">#</a></h2><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#89DDFF;">|--</span><span style="color:#A6ACCD;"> zs_work</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">|--</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">nuxt             </span><span style="color:#676E95;">//\u5F00\u53D1\u65F6\u751F\u6210\u7684vue\u5E94\u7528</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">|--</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">output           </span><span style="color:#676E95;">//\u6253\u5305\u540E\u7684\u6587\u4EF6</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">|--</span><span style="color:#A6ACCD;"> app</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">config</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">ts     </span><span style="color:#676E95;">//\u8FD0\u884C\u65F6\u914D\u7F6E</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">|--</span><span style="color:#A6ACCD;"> app</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">vue           </span><span style="color:#676E95;">//\u5165\u53E3\u6587\u4EF6</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">|--</span><span style="color:#A6ACCD;"> nuxt</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">config</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">ts    </span><span style="color:#676E95;">//nuxt\u914D\u7F6E\u6587\u4EF6</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">|--</span><span style="color:#A6ACCD;"> package</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">json</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">|--</span><span style="color:#A6ACCD;"> tsconfig</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">json</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">|--</span><span style="color:#A6ACCD;"> assets            </span><span style="color:#676E95;">//\u8D44\u6E90(\u4F1A\u88AB\u6253\u5305\u5DE5\u5177\u5904\u7406)</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">|--</span><span style="color:#A6ACCD;"> public            </span><span style="color:#676E95;">//\u516C\u5171\u8D44\u6E90\uFF0C\u4E0D\u4F1A\u88AB\u6253\u5305\u5DE5\u5177\u5904\u7406</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">|--</span><span style="color:#A6ACCD;"> components        </span><span style="color:#676E95;">//\u7EC4\u4EF6</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">|--</span><span style="color:#A6ACCD;"> composables       </span><span style="color:#676E95;">// useXXX</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">|--</span><span style="color:#A6ACCD;"> layouts           </span><span style="color:#676E95;">//\u5E03\u5C40</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">|--</span><span style="color:#A6ACCD;"> middleware        </span><span style="color:#676E95;">//\u8DEF\u7531\u4E2D\u95F4\u4EF6</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">|--</span><span style="color:#A6ACCD;"> pages             </span><span style="color:#676E95;">//\u9875\u9762</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">|--</span><span style="color:#A6ACCD;"> plugins           </span><span style="color:#676E95;">//\u63D2\u4EF6</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">|--</span><span style="color:#A6ACCD;"> server      </span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">|--</span><span style="color:#A6ACCD;"> api</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">|--</span><span style="color:#A6ACCD;"> routes</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">|--</span><span style="color:#A6ACCD;"> middleware     </span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">|--</span><span style="color:#A6ACCD;"> plugins</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><h2 id="\u522B\u540D" tabindex="-1">\u522B\u540D <a class="header-anchor" href="#\u522B\u540D" aria-hidden="true">#</a></h2><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">~~</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">: </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">/&lt;rootDir&gt;</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">@@</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">: </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">/&lt;rootDir&gt;</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">~</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">: </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">/&lt;rootDir&gt;</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">@</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">: </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">/&lt;rootDir&gt;</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">assets</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">: </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">/&lt;rootDir&gt;/assets</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">public</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">: </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">/&lt;rootDir&gt;/public</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div>`,4),e=[o];function r(t,c,D,y,F,i){return a(),n("div",null,e)}const u=s(p,[["render",r]]);export{A as __pageData,u as default};
