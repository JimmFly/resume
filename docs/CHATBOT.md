# ChatBot 集成指南

本项目集成了基于 LangChain.js 和 OpenAI GPT 的智能聊天机器人功能。

## 功能特性

- 🤖 基于 OpenAI GPT-3.5-turbo 模型
- 💬 实时对话交互
- 🎨 现代化 UI 设计
- 📱 响应式布局
- 🔒 安全的 API 密钥管理
- 💾 会话历史记录
- ⚡ 快速响应

## 🔧 配置步骤

### 1. 获取 OpenAI API Key

1. 访问 [OpenAI Platform](https://platform.openai.com/)
2. 注册或登录账户
3. 前往 [API Keys](https://platform.openai.com/api-keys) 页面
4. 点击 "Create new secret key" 创建新的 API Key
5. 复制生成的 API Key（请妥善保管）

### 2. 环境变量配置

1. 在项目根目录创建 `.env.local` 文件
2. 参考 `.env.local.example` 文件内容
3. 添加以下内容：

```bash
VITE_OPENAI_API_KEY=your_openai_api_key_here
```

4. 将 `your_openai_api_key_here` 替换为您的实际 API Key
5. 重启开发服务器使配置生效

### 3. 安全设置建议

1. 在 OpenAI 控制台设置使用限额
2. 定期监控 API 使用情况
3. 不要将 API Key 分享给他人
4. 定期轮换 API Key

### 3. 启动应用

```bash
yarn dev
```

## 🎯 使用方法

1. **打开聊天窗口**：点击页面右下角的聊天图标
2. **查看使用状态**：底部显示消息计数和会话时长
3. **开始对话**：在输入框中输入您的问题
4. **发送消息**：点击发送按钮或按 Enter 键（注意频率限制）
5. **查看回复**：AI 助手会智能回复您的问题
6. **注意限制**：
   - 每个会话最多 5 条消息
   - 发送间隔至少 5 秒
   - 会话时长最多 15 分钟
   - 接近限制时会收到提醒

## 技术架构

### 核心依赖

- `@langchain/core` - LangChain 核心库
- `@langchain/openai` - OpenAI 集成
- `@langchain/community` - 社区扩展
- `langchain` - 主库
- `lucide-react` - 图标库

### 组件结构

```
src/components/ChatBot/
├── ChatBot.tsx     # 主聊天组件
└── index.ts        # 导出文件
```

### 主要功能模块

1. **消息管理**：处理用户输入和 AI 响应
2. **UI 交互**：聊天界面、动画效果
3. **API 集成**：与 OpenAI API 通信
4. **错误处理**：网络错误和 API 错误处理
5. **状态管理**：加载状态、消息历史

## 🔧 自定义配置

### 修改安全限制

```typescript
<ChatBot
  apiKey={apiKey}
  maxMessagesPerSession={5}    // 每会话最大消息数
  rateLimitMs={5000}          // 请求间隔毫秒数
  maxSessionDuration={15}     // 会话最长分钟数
  className="custom-chatbot-style"
/>
```

### 安全参数说明

- `maxMessagesPerSession`: 控制每个会话的最大消息数量
- `rateLimitMs`: 控制两次请求之间的最小间隔时间
- `maxSessionDuration`: 控制单次会话的最长持续时间

### 修改 AI 模型参数

在 `ChatBot.tsx` 中可以调整以下参数：

```typescript
chatRef.current = new ChatOpenAI({
  openAIApiKey: apiKey,
  modelName: 'gpt-3.5-turbo', // 可改为 'gpt-4' 等其他模型
  temperature: 0.7, // 控制回复的创造性 (0-1)
  maxTokens: 1000, // 最大回复长度
})
```

⚠️ **重要提醒**：修改安全限制参数时请谨慎，过于宽松的设置可能导致 API 费用激增。

### 自定义样式

聊天组件使用 Tailwind CSS 构建，可以通过修改 className 来自定义样式：

- 聊天按钮颜色
- 消息气泡样式
- 窗口大小和位置
- 动画效果

### 添加系统提示词

可以在消息历史前添加系统消息来定制 AI 的行为：

```typescript
const systemMessage = new SystemMessage('你是一个专业的前端开发助手...')
messageHistory.unshift(systemMessage)
```

## 🛡️ 安全保护措施

### 内置安全限制

- **消息限制**：每个会话最多 5 条消息
- **频率限制**：请求间隔至少 5 秒
- **会话时长**：单次会话最长 15 分钟
- **自动阻断**：检测到 API 限制时自动暂停使用
- **使用提醒**：接近限制时显示警告信息

### API Key 安全

- **环境变量**：使用 `.env.local` 文件存储敏感信息
- **版本控制**：绝不要将 API Key 提交到 Git
- **访问控制**：仅限招聘者试用，防止滥用
- **使用监控**：定期检查 OpenAI 使用情况和账单
- **配额管理**：建议在 OpenAI 控制台设置使用限额

### 错误处理

- **智能识别**：自动识别不同类型的 API 错误
- **友好提示**：为用户提供清晰的错误说明
- **自动恢复**：部分错误会自动解除限制

## 故障排除

### 常见问题

1. **聊天按钮不显示**
   - 检查组件是否正确导入
   - 确认 CSS 样式加载正常

2. **API Key 错误**
   - 验证 `.env` 文件配置
   - 确认 API Key 有效性
   - 检查 OpenAI 账户余额

3. **消息发送失败**
   - 检查网络连接
   - 查看浏览器控制台错误
   - 验证 API 配额限制

### 调试模式

在开发环境中，可以在浏览器控制台查看详细的错误信息和 API 调用日志。

## 扩展功能

### 可能的增强功能

1. **多语言支持**：添加语言切换功能
2. **语音输入**：集成语音识别 API
3. **文件上传**：支持图片和文档分析
4. **会话持久化**：保存聊天历史到本地存储
5. **主题定制**：支持深色/浅色主题切换
6. **快捷回复**：预设常用问题和回答

## 性能优化

1. **消息分页**：限制显示的消息数量
2. **请求缓存**：缓存常见问题的回答
3. **懒加载**：按需加载聊天组件
4. **防抖处理**：避免频繁的 API 调用

## 贡献指南

如果你想为 ChatBot 功能贡献代码：

1. Fork 项目仓库
2. 创建功能分支
3. 提交你的更改
4. 创建 Pull Request

请确保你的代码符合项目的编码规范和安全要求。
