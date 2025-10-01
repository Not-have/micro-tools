import React from "react";

export default function Demo(): React.ReactElement {
  return (
    <div style={{
      padding: "20px",
      fontFamily: "monospace"
    }}>
      <h1>🚀 Storybook React CLI 调试信息</h1>

      <div style={{
        marginBottom: "20px"
      }}>
        <h2>📋 当前状态</h2>
        <p>✅ Storybook 已成功启动</p>
        <p>✅ CLI 工具运行正常</p>
      </div>

      <div style={{
        marginBottom: "20px"
      }}>
        <h2>🔍 可能的问题和解决方案</h2>

        <div style={{
          marginBottom: "15px"
        }}>
          <h3>❌ 问题1: 环境变量未设置</h3>
          <p>如果上面显示"未设置"，说明环境变量没有正确传递。</p>
          <p><strong>解决方案:</strong></p>
          <ul>
            <li>确保在项目根目录运行 <code>mt-storybook-react</code></li>
            <li>检查项目是否有 <code>stories/</code> 目录</li>
            <li>重新构建 CLI 工具: <code>pnpm build</code></li>
          </ul>
        </div>

        <div style={{
          marginBottom: "15px"
        }}>
          <h3>❌ 问题2: Stories 文件路径错误</h3>
          <p>如果路径指向了错误的位置。</p>
          <p><strong>解决方案:</strong></p>
          <ul>
            <li>检查目标路径是否存在: <code>stories/</code></li>
            <li>确保 stories 文件格式正确: <code>*.stories.@(js|jsx|mjs|ts|tsx)</code></li>
            <li>检查文件权限</li>
          </ul>
        </div>

        <div style={{
          marginBottom: "15px"
        }}>
          <h3>❌ 问题3: 多个项目同时启动冲突</h3>
          <p>如果多个项目同时运行导致冲突。</p>
          <p><strong>解决方案:</strong></p>
          <ul>
            <li>每个项目使用不同的端口: <code>--port 6007</code></li>
            <li>确保每个项目都有独立的 stories 目录</li>
            <li>检查是否有其他 Storybook 进程在运行</li>
          </ul>
        </div>

        <div style={{
          marginBottom: "15px"
        }}>
          <h3>❌ 问题4: 依赖问题</h3>
          <p>如果 Storybook 相关依赖缺失。</p>
          <p><strong>解决方案:</strong></p>
          <ul>
            <li>确保安装了 <code>@mt-kit/storybook-react</code></li>
            <li>检查 <code>package.json</code> 中的依赖</li>
            <li>运行 <code>pnpm install</code> 重新安装依赖</li>
          </ul>
        </div>
      </div>

      <div style={{
        marginBottom: "20px"
      }}>
        <h2>🛠️ 调试命令</h2>
        <div style={{
          backgroundColor: "#f5f5f5",
          padding: "10px",
          borderRadius: "4px"
        }}>
          <p><code># 检查 stories 文件是否存在</code></p>
          <p><code>ls -la stories/</code></p>
          <br/>
          <p><code># 检查项目结构</code></p>
          <p><code>ls -la</code></p>
          <br/>
          <p><code># 重新启动</code></p>
          <p><code>pkill -f storybook && mt-storybook-react</code></p>
        </div>
      </div>

      <div style={{
        marginBottom: "20px"
      }}>
        <h2>📞 获取帮助</h2>
        <p>如果问题仍然存在，请：</p>
        <ul>
          <li>查看终端输出的完整错误信息</li>
          <li>检查浏览器控制台的错误</li>
          <li>确保项目结构符合要求</li>
        </ul>
      </div>

      <div style={{
        fontSize: "12px",
        color: "#666",
        marginTop: "30px"
      }}>
        <p>当前时间: {new Date().toLocaleString()}</p>
        <p>Node.js 版本: {typeof process === "undefined" ? "N/A (浏览器环境)" : process.version}</p>
        <p>工作目录: {typeof process === "undefined" ? "N/A (浏览器环境)" : process.cwd()}</p>
        <p>用户代理: {navigator.userAgent}</p>
      </div>
    </div>
  );
}
