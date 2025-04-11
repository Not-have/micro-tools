import{_ as e,c as i,o as s,ae as l}from"./chunks/framework.tuuL-SzM.js";const g=JSON.parse('{"title":"@mt-kit/eslint-config","description":"","frontmatter":{},"headers":[],"relativePath":"src/_dev-md/eslint-config.md","filePath":"src/_dev-md/eslint-config.md"}'),a={name:"src/_dev-md/eslint-config.md"};function n(d,t,p,r,h,o){return s(),i("div",null,t[0]||(t[0]=[l(`<h1 id="mt-kit-eslint-config" tabindex="-1">@mt-kit/eslint-config <a class="header-anchor" href="#mt-kit-eslint-config" aria-label="Permalink to &quot;@mt-kit/eslint-config&quot;">​</a></h1><p><a href="https://eslint.nodejs.cn/" target="_blank" rel="noreferrer">docs</a></p><p><a href="https://eslint.style/" target="_blank" rel="noreferrer">ESLint Stylistic</a></p><h2 id="安装" tabindex="-1">安装 <a class="header-anchor" href="#安装" aria-label="Permalink to &quot;安装&quot;">​</a></h2><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -D</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> eslint</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> @mt-kit/eslint-config</span></span></code></pre></div><h2 id="使用" tabindex="-1">使用 <a class="header-anchor" href="#使用" aria-label="Permalink to &quot;使用&quot;">​</a></h2><p>新建 <code>eslint.config.js</code></p><p><code>基础</code></p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> EsLint </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;@mt-kit/eslint-config&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> default</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> EsLint;</span></span></code></pre></div><p><code>vue</code></p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> EsLint, {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  vue</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">} </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;@mt-kit/eslint-config&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> default</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  ...</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">EsLint,</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  ...</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">vue</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">];</span></span></code></pre></div><p><code>react</code></p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> EsLint, {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  react</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">} </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;@mt-kit/eslint-config&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> default</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  ...</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">EsLint,</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  ...</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">react</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">];</span></span></code></pre></div><p>注：推荐配合 <a href="https://www.npmjs.com/package/@mt-kit/prettier-config" target="_blank" rel="noreferrer">@mt-kit/prettier-config</a> 一块使用。</p><h2 id="插件" tabindex="-1">插件 <a class="header-anchor" href="#插件" aria-label="Permalink to &quot;插件&quot;">​</a></h2><table tabindex="0"><thead><tr><th style="text-align:left;">插件名</th><th style="text-align:left;">作用</th></tr></thead><tbody><tr><td style="text-align:left;">eslint</td><td style="text-align:left;">ESLint 的核心包，用于运行代码分析和检查</td></tr><tr><td style="text-align:left;">@eslint/js</td><td style="text-align:left;">为 JavaScript 项目提供基本的 ESLint 配置和规则</td></tr><tr><td style="text-align:left;">eslint-plugin-unicorn</td><td style="text-align:left;">是一个增强 ESLint 功能的插件，旨在通过一系列自定义规则优化代码质量、提升开发规范，并支持现代 JavaScript/TypeScript 的最佳实践</td></tr><tr><td style="text-align:left;">@typescript-eslint/eslint-plugin</td><td style="text-align:left;">为 TypeScript 项目提供特定的 ESLint 插件，包含 TypeScript 特有的规则</td></tr><tr><td style="text-align:left;">@typescript-eslint/parser</td><td style="text-align:left;">为 TypeScript 项目提供 ESLint 解析器，确保 ESLint 能够理解和解析 TypeScript 代码</td></tr><tr><td style="text-align:left;">@types/eslint</td><td style="text-align:left;">为 TypeScript 提供 ESLint 的类型定义，确保 TypeScript 项目能够正确使用 ESLint</td></tr><tr><td style="text-align:left;">eslint-plugin-command</td><td style="text-align:left;">用于处理项目命令规则（如脚本命名或命令约束）</td></tr><tr><td style="text-align:left;">eslint-plugin-eslint-comments</td><td style="text-align:left;">检测和优化代码中的 ESLint 注释使用情况</td></tr><tr><td style="text-align:left;">eslint-plugin-import</td><td style="text-align:left;">管理模块导入顺序、未使用的导入及模块解析</td></tr><tr><td style="text-align:left;">eslint-plugin-jsdoc</td><td style="text-align:left;">用于检查 JSDoc 注释的一致性和正确性</td></tr><tr><td style="text-align:left;">eslint-plugin-jsonc</td><td style="text-align:left;">专门用于 JSON 和 JSONC（带注释 JSON）的代码分析和格式校验</td></tr><tr><td style="text-align:left;">eslint-plugin-perfectionist</td><td style="text-align:left;">提供了一些高级的代码质量检查规则</td></tr><tr><td style="text-align:left;">eslint-plugin-prettier</td><td style="text-align:left;">结合 Prettier 代码格式化工具，确保代码风格的一致性</td></tr><tr><td style="text-align:left;">eslint-plugin-regexp</td><td style="text-align:left;">针对正则表达式的优化和错误检测</td></tr><tr><td style="text-align:left;">eslint-plugin-unused-imports</td><td style="text-align:left;">用于检测未使用的导入语句</td></tr><tr><td style="text-align:left;">@stylistic/eslint-plugin</td><td style="text-align:left;">主要用于配置 JavaScript 代码风格</td></tr><tr><td style="text-align:left;">@stylistic/eslint-plugin-ts</td><td style="text-align:left;">针对 TypeScript 项目，提供更精细的风格规则，用于控制 TypeScript 特有的语法</td></tr><tr><td style="text-align:left;"></td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">eslint-plugin-vue</td><td style="text-align:left;">专为 Vue.js 提供的 ESLint 插件，支持模板和脚本的规则分析</td></tr><tr><td style="text-align:left;">@vue/eslint-config-typescript</td><td style="text-align:left;">Vue 官方的 TypeScript 配置，为 TypeScript 项目和 Vue 代码提供支持</td></tr><tr><td style="text-align:left;"><del> @vue/eslint-config-prettier/skip-formatting</del></td><td style="text-align:left;">禁用 ESLint 和 Prettier 冲突的格式化规则</td></tr><tr><td style="text-align:left;">eslint-plugin-oxlint</td><td style="text-align:left;">Oxlint 提供的一组代码风格和质量保证的规则</td></tr><tr><td style="text-align:left;"></td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">eslint-plugin-jsx-a11y</td><td style="text-align:left;">该插件主要用于检查 JSX 代码中的可访问性</td></tr><tr><td style="text-align:left;">eslint-plugin-react-hooks</td><td style="text-align:left;">用于确保 React Hooks 的正确使用</td></tr><tr><td style="text-align:left;">eslint-plugin-react</td><td style="text-align:left;">检查 React 代码规范和最佳实践</td></tr></tbody></table><h2 id="todo-list" tabindex="-1">TODO List <a class="header-anchor" href="#todo-list" aria-label="Permalink to &quot;TODO List&quot;">​</a></h2><h3 id="事件方法名" tabindex="-1">事件方法名 <a class="header-anchor" href="#事件方法名" aria-label="Permalink to &quot;事件方法名&quot;">​</a></h3><ul><li><p>当文件中只有一个 <code>click</code>、<code>change</code> 等事件时，方法名为：<code>handleClick</code>、<code>handleChange</code></p><p>格式为：<code>handle事件名</code></p></li><li><p>当文件中有多个 <code>click</code>、<code>change</code> 等事件时，方法名为：<code>handleXxxClick</code>、<code>handleXxxChange</code></p><p>格式为：<code>handle作用事件名</code>，例如：<code>handleCreateClick</code>、<code>handleEditClick</code>、<code>handle DeleteClick</code></p></li></ul><h3 id="变量方法名" tabindex="-1">变量方法名 <a class="header-anchor" href="#变量方法名" aria-label="Permalink to &quot;变量方法名&quot;">​</a></h3><ul><li><p>读取变量，使用 <code>get</code> 开头</p><p>格式：get变量名</p><p>例：getLoading</p></li><li><p>设置变量，使用 <code>set</code> 开头</p><p>格式：set变量名</p><p>例：setLoading</p></li><li><p>处理变量，使用 <code>transform</code> 开头</p><p>格式：transform变量名</p><p>例： transformtLoading</p></li><li><p><del> 其他使用 <code>other</code> 开头 </del></p><p>格式：other变量名</p><p>例：otherLoading</p></li></ul><h3 id="处理接口返回数据" tabindex="-1">处理接口返回数据 <a class="header-anchor" href="#处理接口返回数据" aria-label="Permalink to &quot;处理接口返回数据&quot;">​</a></h3><ul><li><p>使用 <code>fixData</code> 开头</p><p>格式：fixData 接口定义的方法名</p><p>例：fixDataList</p></li></ul><h2 id="🙅-处理" tabindex="-1">🙅 处理 <a class="header-anchor" href="#🙅-处理" aria-label="Permalink to &quot;🙅 处理&quot;">​</a></h2><ul><li><p><img src="https://not-have.github.io/file/images/20250117.jpeg" alt="在  中添加 "></p><p>在 <code>package.json</code> 中添加 <code>&quot;type&quot;: &quot;module&quot;</code>。</p></li><li><p>The language client requires VS Code version ^1.89.0 but received version 1.</p><p><img src="https://not-have.github.io/file/images/20250118.jpeg" alt="The language client requires VS Code version ^1.89.0 but received version 1."></p></li></ul>`,25)]))}const k=e(a,[["render",n]]);export{g as __pageData,k as default};
