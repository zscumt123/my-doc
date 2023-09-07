import{_ as a,o as s,c as e,Q as n}from"./chunks/framework.38a59c20.js";const m=JSON.parse('{"title":"数据库锁","description":"","frontmatter":{},"headers":[],"relativePath":"mysql/lock.md","filePath":"mysql/lock.md","lastUpdated":1694070681000}'),l={name:"mysql/lock.md"},o=n(`<h1 id="数据库锁" tabindex="-1">数据库锁 <a class="header-anchor" href="#数据库锁" aria-label="Permalink to &quot;数据库锁&quot;">​</a></h1><h2 id="全局锁" tabindex="-1">全局锁 <a class="header-anchor" href="#全局锁" aria-label="Permalink to &quot;全局锁&quot;">​</a></h2><blockquote><p>对整个数据库加锁</p></blockquote><div class="language-sql vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">-- 让整个数据库处于只读的状态</span></span>
<span class="line"><span style="color:#E1E4E8;">FLUSH TABLES </span><span style="color:#F97583;">WITH</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">READ</span><span style="color:#E1E4E8;"> LOCK ;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">-- 让整个数据库处于只读的状态</span></span>
<span class="line"><span style="color:#24292E;">FLUSH TABLES </span><span style="color:#D73A49;">WITH</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">READ</span><span style="color:#24292E;"> LOCK ;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="表锁" tabindex="-1">表锁 <a class="header-anchor" href="#表锁" aria-label="Permalink to &quot;表锁&quot;">​</a></h2>`,5),t=[o];function p(c,r,i,d,h,_){return s(),e("div",null,t)}const b=a(l,[["render",p]]);export{m as __pageData,b as default};