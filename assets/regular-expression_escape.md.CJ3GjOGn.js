import{_ as e,c as o,o as a,a2 as c}from"./chunks/framework.3T3Bq219.js";const m=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"regular-expression/escape.md","filePath":"regular-expression/escape.md","lastUpdated":1710470006000}'),d={name:"regular-expression/escape.md"},t=c('<h2 id="转义" tabindex="-1">转义 <a class="header-anchor" href="#转义" aria-label="Permalink to &quot;转义&quot;">​</a></h2><h3 id="转义字符" tabindex="-1">转义字符 <a class="header-anchor" href="#转义字符" aria-label="Permalink to &quot;转义字符&quot;">​</a></h3><blockquote><p>含义：对它后续的几个字符进行替代并解释 功能： 编码无法用字母表直接表示的特殊数据，无法直接用键盘录入的字符，</p></blockquote><h3 id="元字符的转义" tabindex="-1">元字符的转义 <a class="header-anchor" href="#元字符的转义" aria-label="Permalink to &quot;元字符的转义&quot;">​</a></h3><ul><li>量词 <code>*</code>或<code>?</code>或<code>+</code>或<code>-</code>或<code>^</code>或<code>$</code>或<code>|</code>等，直接在前面加上反斜杠<code>\\</code></li><li>括号<code>[]</code>和<code>{}</code>只需要转义开括号，但是<code>()</code>两个都要转义</li></ul><h3 id="字符组的转义" tabindex="-1">字符组的转义 <a class="header-anchor" href="#字符组的转义" aria-label="Permalink to &quot;字符组的转义&quot;">​</a></h3><ul><li><code>^</code>字符在中括号<code>[]</code>中，且在第一个位置时候</li><li><code>|</code>在中括号<code>[]</code>中，且不在首位位置</li><li>右中括号<code>]</code>在中括号<code>[]</code>中，且不在首位</li><li>其他单个长度的元字符在中括号<code>[]</code>中，一般不需要转义</li></ul>',7),r=[t];function l(i,s,n,_,h,u){return a(),o("div",null,r)}const f=e(d,[["render",l]]);export{m as __pageData,f as default};
