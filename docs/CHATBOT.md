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

## 配置步骤

### 1. 获取 OpenAI API Key

1. 访问 [OpenAI Platform](https://platform.openai.com/api-keys)
2. 登录或注册账户
3. 创建新的 API Key
4. 复制生成的 API Key

### 2. 环境变量配置

1. 复制 `.env.example` 文件为 `.env`：

   ```bash
   cp .env.example .env
   ```

2. 在 `.env` 文件中配置你的 OpenAI API Key：
   ```env
   VITE_OPENAI_API_KEY=your-actual-openai-api-key-here
   ```

### 3. 启动应用

```bash
yarn dev
```

## 使用方法

1. 打开应用后，你会在右下角看到一个蓝色的聊天按钮
2. 点击按钮打开聊天窗口
3. 在输入框中输入你的问题
4. 按 Enter 键或点击发送按钮发送消息
5. AI 助手会实时回复你的问题

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

## 自定义配置

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

## 安全注意事项

1. **API Key 保护**：
   - 永远不要在代码中硬编码 API Key
   - 使用环境变量管理敏感信息
   - 不要将 `.env` 文件提交到版本控制

2. **使用限制**：
   - 监控 API 使用量和费用
   - 设置合理的请求频率限制
   - 考虑添加用户认证

3. **内容过滤**：
   - 实施输入验证
   - 考虑添加内容审核
   - 处理不当内容的响应

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
