<script lang="ts" setup>
import {
  computed
} from "vue";

// 获取当前时间
const currentTime = computed(() => new Date().toLocaleString());

// 获取 Node.js 版本信息
const nodeVersion = computed(() => (typeof process === "undefined" ? "N/A (浏览器环境)" : process.version));

// 获取工作目录
const workingDirectory = computed(() => (typeof process === "undefined" ? "N/A (浏览器环境)" : process.cwd()));

// 获取用户代理
const userAgent = computed(() => navigator.userAgent);
</script>

<template>
  <div class="debug-container">
    <h1>🚀 Storybook Vue CLI 调试信息</h1>

    <div class="section">
      <h2>📋 当前状态</h2>
      <p>✅ Storybook 已成功启动</p>
      <p>✅ CLI 工具运行正常</p>
    </div>

    <div class="section">
      <h2>🔍 可能的问题和解决方案</h2>

      <div class="problem-item">
        <h3>❌ 问题1: 环境变量未设置</h3>
        <p>如果上面显示"未设置"，说明环境变量没有正确传递。</p>
        <p><strong>解决方案:</strong></p>
        <ul>
          <li>确保在项目根目录运行 <code>mt-storybook-vue</code></li>
          <li>检查项目是否有 <code>stories/</code> 目录</li>
          <li>重新构建 CLI 工具: <code>pnpm build</code></li>
        </ul>
      </div>

      <div class="problem-item">
        <h3>❌ 问题2: Stories 文件路径错误</h3>
        <p>如果路径指向了错误的位置。</p>
        <p><strong>解决方案:</strong></p>
        <ul>
          <li>检查目标路径是否存在: <code>stories/</code></li>
          <li>确保 stories 文件格式正确: <code>*.stories.@(js|mjs|ts|vue)</code></li>
          <li>检查文件权限</li>
        </ul>
      </div>

      <div class="problem-item">
        <h3>❌ 问题3: 多个项目同时启动冲突</h3>
        <p>如果多个项目同时运行导致冲突。</p>
        <p><strong>解决方案:</strong></p>
        <ul>
          <li>每个项目使用不同的端口: <code>--port 6007</code></li>
          <li>确保每个项目都有独立的 stories 目录</li>
          <li>检查是否有其他 Storybook 进程在运行</li>
        </ul>
      </div>

      <div class="problem-item">
        <h3>❌ 问题4: 依赖问题</h3>
        <p>如果 Storybook 相关依赖缺失。</p>
        <p><strong>解决方案:</strong></p>
        <ul>
          <li>确保安装了 <code>@mt-kit/storybook-vue</code></li>
          <li>检查 <code>package.json</code> 中的依赖</li>
          <li>运行 <code>pnpm install</code> 重新安装依赖</li>
        </ul>
      </div>
    </div>

    <div class="section">
      <h2>🛠️ 调试命令</h2>
      <div class="code-block">
        <p><code># 检查 stories 文件是否存在</code></p>
        <p><code>ls -la stories/</code></p>
        <br />
        <p><code># 检查项目结构</code></p>
        <p><code>ls -la</code></p>
        <br />
        <p><code># 重新启动</code></p>
        <p><code>pkill -f storybook && mt-storybook-vue</code></p>
      </div>
    </div>

    <div class="section">
      <h2>📞 获取帮助</h2>
      <p>如果问题仍然存在，请：</p>
      <ul>
        <li>查看终端输出的完整错误信息</li>
        <li>检查浏览器控制台的错误</li>
        <li>确保项目结构符合要求</li>
      </ul>
    </div>

    <div class="footer-info">
      <p>当前时间: {{ currentTime }}</p>
      <p>Node.js 版本: {{ nodeVersion }}</p>
      <p>工作目录: {{ workingDirectory }}</p>
      <p>用户代理: {{ userAgent }}</p>
    </div>
  </div>
</template>

<style scoped>
.debug-container {
  padding: 20px;
  font-family: monospace;
}

.section {
  margin-bottom: 20px;
}

.problem-item {
  margin-bottom: 15px;
}

.code-block {
  padding: 10px;
  border-radius: 4px;
  background-color: #f5f5f5;
}

.footer-info {
  margin-top: 30px;
  font-size: 12px;
  color: #666;
}

h1 {
  margin-top: 0;
}

h2 {
  margin-bottom: 10px;
}

h3 {
  margin-bottom: 8px;
}

p {
  margin-bottom: 8px;
}

ul {
  margin-bottom: 8px;
}

li {
  margin-bottom: 4px;
}

code {
  padding: 2px 4px;
  border-radius: 2px;
  background-color: #f0f0f0;
  font-family: monospace;
}

br {
  line-height: 1.5;
}
</style>
