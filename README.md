# 🚀 个人简历网站

**中文** | [English](README.en.md) | [日本語](README.ja.md)

一个100% vibe coding 构建的交互式个人 AI 原生简历网站，具有沉浸式视差滚动效果和优雅的动画设计。展示前端开发技能、项目经验和专业联系方式。

## 🔗 在线预览

**[🚀 立即访问 GitHub Pages 部署版本](https://jimmfly.github.io/resume/)**

[![Live Demo](https://img.shields.io/badge/Live-Demo-brightgreen)](https://jimmfly.github.io/resume/)
[![GitHub](https://img.shields.io/badge/GitHub-Repository-blue)](https://github.com/JimmFly/resume)
[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

## ✨ 特色功能

- 🎨 **沉浸式视差滚动** - 多层背景视差效果，提供流畅的滚动体验
- 🌟 **3D 交互元素** - Three.js 驱动的 3D 地球和粒子系统
- 📧 **智能邮件发送** - 一键打开邮件客户端，预填充联系信息
- 🎭 **流畅动画效果** - Framer Motion 驱动的页面过渡和组件动画
- 📱 **完全响应式** - 适配所有设备尺寸，从手机到桌面
- 🌙 **现代暗色主题** - 优雅的深色设计，减少眼部疲劳
- ⚡ **极速加载** - Vite 构建，优化的性能和加载速度
- 🤖 **AI 聊天助手** - 基于 LangChain.js 和 OpenAI GPT 的智能对话功能

## 🛠️ 技术栈

### 核心框架

- **React 18** - 现代化的用户界面构建库
- **TypeScript** - 类型安全的 JavaScript 超集
- **Vite** - 下一代前端构建工具

### 样式与动画

- **Tailwind CSS** - 实用优先的 CSS 框架
- **Framer Motion** - 强大的 React 动画库
- **CSS3** - 现代 CSS 特性和动画

### 3D 与交互

- **Three.js** - 3D 图形库
- **React Three Fiber** - React 的 Three.js 渲染器

### AI 与聊天

- **LangChain.js** - AI 应用开发框架
- **OpenAI GPT** - 智能对话模型
- **Lucide React** - 现代图标库

### 开发工具

- **Trae** - AI IDE
- **ESLint** - 代码质量检查
- **PostCSS** - CSS 后处理器
- **Git** - 版本控制

## 🎯 核心功能

### 🎨 视觉体验

- **多层视差滚动** - 背景元素以不同速度移动，创造深度感
- **3D 交互地球** - 可旋转的 3D 地球模型，展示技术实力
- **粒子动画系统** - 动态粒子效果，增强视觉吸引力
- **流畅页面过渡** - 组件间的平滑动画过渡

### 📱 用户体验

- **响应式设计** - 完美适配手机、平板、桌面设备
- **智能导航** - 平滑滚动到指定章节
- **交互反馈** - 悬停效果和点击动画
- **加载优化** - 懒加载和性能优化

### 📧 联系功能

- **邮件集成** - 自动打开邮件客户端
- **表单验证** - 实时输入验证和错误提示
- **社交链接** - 快速访问社交媒体档案

### 🤖 AI 聊天助手

- **智能对话** - 基于 OpenAI GPT-3.5-turbo 的实时对话
- **会话记忆** - 保持对话上下文和历史记录
- **现代 UI** - 优雅的聊天界面设计
- **安全配置** - 环境变量管理 API 密钥

## 📁 项目结构

```
src/
├── components/              # 组件目录
│   ├── common/             # 通用组件
│   │   ├── ParallaxContainer.tsx  # 视差容器组件
│   │   └── ...
│   ├── layout/             # 布局组件
│   │   ├── Header.tsx      # 导航栏
│   │   └── Footer.tsx      # 页脚
│   ├── ChatBot/            # AI 聊天组件
│   │   ├── ChatBot.tsx     # 聊天机器人主组件
│   │   └── index.ts        # 导出文件
│   └── sections/           # 页面主要部分
│       ├── HeroSection.tsx      # 首页英雄区域
│       ├── AboutSection.tsx     # 关于我
│       ├── SkillsSection.tsx    # 技能展示
│       ├── ProjectsSection.tsx  # 项目展示
│       └── ContactSection.tsx   # 联系方式
├── hooks/                  # 自定义 Hooks
│   ├── useParallax.ts     # 视差滚动 Hook
│   ├── useScrollProgress.ts # 滚动进度 Hook
│   └── useInView.ts       # 视图检测 Hook
├── constants/              # 常量配置
│   └── index.ts           # 视差配置等
├── types/                  # TypeScript 类型定义
├── utils/                  # 工具函数
├── shaders/               # GLSL 着色器文件
├── App.tsx                # 主应用组件
├── index.css             # 全局样式
└── main.tsx              # 应用入口点
```

## 🚀 快速开始

### 📋 前提条件

确保你的开发环境已安装以下工具：

- **Node.js** (v16.0.0 或更高版本)
- **Yarn** 包管理器 (推荐) 或 **npm**
- **Git** 版本控制工具

### 📦 安装与运行

1. **克隆项目**

   ```bash
   git clone https://github.com/JimmFly/resume.git
   cd resume
   ```

2. **安装依赖**

   ```bash
   yarn install
   # 或使用 npm
   npm install
   ```

3. **配置环境变量 (可选)**

   如果你想启用 AI 聊天助手功能：

   ```bash
   # 复制环境变量模板
   cp .env.example .env

   # 编辑 .env 文件，添加你的 OpenAI API Key
   VITE_OPENAI_API_KEY=your-openai-api-key-here
   ```

   > 💡 **提示**: 你可以从 [OpenAI Platform](https://platform.openai.com/api-keys) 获取 API Key

4. **启动开发服务器**

   ```bash
   yarn dev
   # 或使用 npm
   npm run dev
   ```

   访问 [http://localhost:5173](http://localhost:5173) 查看网站

5. **构建生产版本**

   ```bash
   yarn build
   # 或使用 npm
   npm run build
   ```

6. **预览生产构建**
   ```bash
   yarn preview
   # 或使用 npm
   npm run preview
   ```

### 🤖 ChatBot 功能说明

项目集成了基于 LangChain.js 和 OpenAI GPT 的智能聊天助手：

- **位置**: 右下角的蓝色聊天按钮
- **功能**: 实时 AI 对话，支持上下文记忆
- **安全保护**: 内置多重安全限制，防止 API 滥用
- **配置**: 需要在 `.env` 文件中设置 `VITE_OPENAI_API_KEY`
- **文档**: 详细配置请参考 [ChatBot 集成指南](docs/CHATBOT.md)

**安全特性**：

- 每个会话最多 5 条消息
- 请求间隔至少 5 秒
- 会话时长限制 15 分钟
- 自动检测和处理 API 限制
- 实时显示使用状态

## ⚡ 性能优化

### 🔧 构建优化

- **Vite 构建系统** - 极速的开发服务器和构建过程
- **Tree Shaking** - 自动移除未使用的代码
- **代码分割** - 按需加载组件和资源，React.lazy + Suspense
- **资源压缩** - 自动压缩 JS、CSS 和图片
- **Bundle 分析** - 使用 `yarn analyze` 分析包体积

### 🎨 渲染优化

- **GPU 加速动画** - 使用 transform3d 和 will-change
- **React.memo** - 防止不必要的组件重渲染
- **图片懒加载** - 延迟加载非关键图片
- **CSS 优化** - Tailwind CSS 的 PurgeCSS 集成
- **3D 渲染优化** - Three.js 性能优化和LOD管理

### 📊 性能指标

- **首屏加载时间** < 2s
- **Lighthouse 评分** > 90
- **Core Web Vitals** 优化
- **包体积** < 500KB (gzipped)
- **FPS** 保持在 60fps

### 🚀 进一步优化建议

1. **图片优化**

   ```bash
   # 使用 WebP 格式
   # 实现响应式图片
   # 添加图片压缩
   ```

2. **缓存策略**

   ```bash
   # 配置 Service Worker
   # 实现离线缓存
   # 优化浏览器缓存
   ```

3. **性能监控**
   ```bash
   # 集成 Web Vitals
   # 添加性能分析
   # 监控用户体验指标
   ```

## 🛠️ 开发指南

### 📋 开发环境设置

1. **推荐的 IDE 配置**

   ```bash
   # VS Code 扩展推荐
   - ES7+ React/Redux/React-Native snippets
   - Tailwind CSS IntelliSense
   - TypeScript Importer
   - Prettier - Code formatter
   - ESLint
   ```

2. **代码规范**

   ```bash
   # 运行代码检查
   yarn lint

   # 自动修复代码格式
   yarn lint:fix

   # 类型检查
   yarn type-check
   ```

3. **Git Hooks**
   ```bash
   # 提交前自动运行 lint 和格式化
   # 已配置 husky 和 lint-staged
   ```

### 🧪 测试

```bash
# 运行单元测试
yarn test

# 运行测试覆盖率
yarn test:coverage

# 运行 E2E 测试
yarn test:e2e
```

### 📊 性能分析

```bash
# 分析 Bundle 大小
yarn analyze

# 性能审计
yarn audit

# 安全审计
yarn audit:security
```

## 🎨 自定义指南

### 📝 内容自定化

1. **个人信息修改**

   ```typescript
   // src/constants/index.ts
   export const HERO_CONTENT = {
     greeting: '你好，我是',
     name: '你的姓名',
     title: '你的职位',
     description: '你的简介',
   }
   ```

2. **项目数据更新**

   ```typescript
   // src/components/sections/ProjectsSection.tsx
   const projects = [
     {
       title: '项目名称',
       description: '项目描述',
       technologies: ['React', 'TypeScript'],
       github: 'https://github.com/username/repo',
       demo: 'https://demo-url.com',
     },
   ]
   ```

3. **技能配置**
   ```typescript
   // src/constants/index.ts
   export const SKILLS_DATA = {
     frontend: ['React', 'TypeScript', 'Tailwind CSS'],
     backend: ['Node.js', 'Python', 'PostgreSQL'],
     tools: ['Git', 'Docker', 'AWS'],
   }
   ```

### 🎨 样式自定义

1. **主题颜色**

   ```javascript
   // tailwind.config.js
   module.exports = {
     theme: {
       extend: {
         colors: {
           primary: '#your-primary-color',
           secondary: '#your-secondary-color',
         },
       },
     },
   }
   ```

2. **动画配置**

   ```typescript
   // src/constants/index.ts
   export const ANIMATION_CONFIG = {
     duration: 0.6,
     ease: 'easeOut',
     stagger: 0.1,
   }
   ```

3. **视差效果调整**
   ```typescript
   // src/constants/index.ts
   export const PARALLAX_CONFIG = {
     layers: {
       hero: [
         { speed: 0.2, offset: 0 },
         { speed: 0.5, offset: 0 },
         { speed: 0.8, offset: 0 },
       ],
     },
   }
   ```

### ⚙️ 功能配置

1. **ChatBot 配置**

   ```typescript
   // src/App.tsx
   <ChatBot
     apiKey={import.meta.env.VITE_OPENAI_API_KEY}
     maxMessagesPerSession={5}
     rateLimitMs={5000}
     maxSessionDuration={15}
   />
   ```

2. **3D 效果参数**
   ```typescript
   // src/constants/index.ts
   export const GLOBE_CONFIG = {
     position: [0, 0, 0],
     scale: [1, 1, 1],
     rotation: [0, 0, 0],
   }
   ```

## 🔧 故障排除

### 常见问题

1. **ChatBot 不工作**

   ```bash
   # 检查环境变量
   echo $VITE_OPENAI_API_KEY

   # 确保 API Key 有效
   # 检查网络连接
   # 查看浏览器控制台错误
   ```

2. **3D 模型不显示**

   ```bash
   # 检查 WebGL 支持
   # 更新显卡驱动
   # 尝试不同浏览器
   ```

3. **构建失败**

   ```bash
   # 清理缓存
   yarn clean

   # 重新安装依赖
   rm -rf node_modules yarn.lock
   yarn install

   # 检查 Node.js 版本
   node --version
   ```

4. **性能问题**

   ```bash
   # 检查 Bundle 大小
   yarn analyze

   # 优化图片资源
   # 减少动画复杂度
   # 启用生产模式构建
   ```

### 调试技巧

1. **开发工具**

   ```bash
   # React Developer Tools
   # Three.js Inspector
   # Performance Monitor
   ```

2. **日志记录**

   ```typescript
   // 启用详细日志
   console.log('Debug info:', data)

   // 性能监控
   console.time('Operation')
   // ... 代码
   console.timeEnd('Operation')
   ```

## 📚 最佳实践

### 🏗️ 代码组织

1. **组件设计原则**
   - 单一职责原则
   - 可复用性
   - 类型安全
   - 性能优化

2. **文件命名规范**

   ```
   components/     # PascalCase
   hooks/         # camelCase with 'use' prefix
   utils/         # camelCase
   constants/     # UPPER_SNAKE_CASE
   ```

3. **导入顺序**

   ```typescript
   // 1. React 相关
   import React from 'react'

   // 2. 第三方库
   import { motion } from 'framer-motion'

   // 3. 内部组件
   import { Button } from './Button'

   // 4. 类型定义
   import type { Props } from './types'
   ```

### 🚀 性能最佳实践

1. **组件优化**

   ```typescript
   // 使用 React.memo
   export const Component = React.memo(() => {
     // 组件逻辑
   })

   // 使用 useMemo 和 useCallback
   const memoizedValue = useMemo(() => computation, [deps])
   const memoizedCallback = useCallback(() => {}, [deps])
   ```

2. **懒加载**

   ```typescript
   // 组件懒加载
   const LazyComponent = React.lazy(() => import('./Component'))

   // 路由懒加载
   const LazyPage = React.lazy(() => import('./pages/Page'))
   ```

3. **资源优化**

   ```typescript
   // 图片懒加载
   <img loading="lazy" src="image.jpg" alt="description" />

   // 预加载关键资源
   <link rel="preload" href="critical.css" as="style" />
   ```

### 🔒 安全最佳实践

1. **环境变量管理**

   ```bash
   # 永远不要提交敏感信息到代码库
   # 使用 .env 文件管理配置
   # 在生产环境中使用安全的密钥管理
   ```

2. **API 安全**
   ```typescript
   // 验证用户输入
   // 实现速率限制
   // 使用 HTTPS
   // 处理错误时不暴露敏感信息
   ```

## 🏗️ 项目架构

### 📊 架构图

```
┌─────────────────────────────────────────────────────────────┐
│                        用户界面层                              │
├─────────────────────────────────────────────────────────────┤
│  HeroSection  │  AboutSection  │  SkillsSection  │  Projects │
├─────────────────────────────────────────────────────────────┤
│                      组件层                                   │
├─────────────────────────────────────────────────────────────┤
│  ParallaxContainer  │  ChatBot  │  3D Components  │  UI     │
├─────────────────────────────────────────────────────────────┤
│                      Hooks 层                                │
├─────────────────────────────────────────────────────────────┤
│  useParallax  │  useAnimation  │  useInView  │  useScroll   │
├─────────────────────────────────────────────────────────────┤
│                      服务层                                   │
├─────────────────────────────────────────────────────────────┤
│  LangChain.js  │  OpenAI API  │  Three.js  │  Framer Motion │
├─────────────────────────────────────────────────────────────┤
│                      构建层                                   │
├─────────────────────────────────────────────────────────────┤
│  Vite  │  TypeScript  │  Tailwind CSS  │  ESLint  │  Yarn   │
└─────────────────────────────────────────────────────────────┘
```

### 🔧 技术决策

#### 为什么选择这些技术？

1. **React 18 + TypeScript**
   - ✅ 强类型支持，减少运行时错误
   - ✅ 现代 React 特性（Concurrent Features）
   - ✅ 优秀的开发体验和生态系统

2. **Vite 构建工具**
   - ✅ 极速的开发服务器启动
   - ✅ 原生 ES 模块支持
   - ✅ 优化的生产构建

3. **Tailwind CSS**
   - ✅ 实用优先的设计理念
   - ✅ 高度可定制
   - ✅ 优秀的性能（PurgeCSS）

4. **Framer Motion**
   - ✅ 声明式动画 API
   - ✅ 优秀的性能
   - ✅ 丰富的动画特性

5. **Three.js + React Three Fiber**
   - ✅ 强大的 3D 渲染能力
   - ✅ React 生态系统集成
   - ✅ 活跃的社区支持

6. **LangChain.js + OpenAI**
   - ✅ 现代 AI 应用开发框架
   - ✅ 流式响应支持
   - ✅ 灵活的配置选项

### 📁 详细目录结构

```
src/
├── components/                 # 组件目录
│   ├── 3d/                    # 3D 相关组件
│   │   ├── GlobeDemo.tsx      # 3D 地球组件
│   │   └── RealisticGlobe.tsx # 真实地球模型
│   ├── ChatBot/               # AI 聊天组件
│   │   ├── ChatBot.tsx        # 主聊天组件
│   │   └── index.ts           # 导出文件
│   ├── sections/              # 页面区域组件
│   │   ├── HeroSection.tsx    # 英雄区域
│   │   ├── AboutSection.tsx   # 关于我
│   │   ├── SkillsSection.tsx  # 技能展示
│   │   ├── ProjectsSection.tsx # 项目展示
│   │   ├── ExperienceSection.tsx # 工作经验
│   │   └── ContactSection.tsx # 联系方式
│   └── ui/                    # UI 组件
│       ├── ParallaxContainer.tsx # 视差容器
│       ├── ErrorBoundary.tsx  # 错误边界
│       └── withErrorBoundary.tsx # HOC
├── hooks/                     # 自定义 Hooks
│   ├── useParallax.ts        # 视差滚动
│   ├── useAnimation.ts       # 动画效果
│   └── useInView.ts          # 视图检测
├── constants/                 # 常量配置
│   └── index.ts              # 全局常量
├── i18n/                     # 国际化
│   ├── index.ts              # i18n 配置
│   └── locales/              # 语言文件
│       ├── en.json           # 英文
│       ├── zh.json           # 中文
│       └── ja.json           # 日文
├── types/                    # 类型定义
│   └── index.ts              # 全局类型
├── utils/                    # 工具函数
│   └── index.ts              # 工具方法
├── assets/                   # 静态资源
│   ├── models/               # 3D 模型
│   └── textures/             # 纹理贴图
├── App.tsx                   # 主应用组件
├── main.tsx                  # 应用入口
└── index.css                 # 全局样式
```

### 🔄 数据流

```
用户交互 → 组件状态更新 → Hooks 处理 → UI 重新渲染
    ↓
视差滚动 → useParallax → 计算偏移量 → 应用变换
    ↓
3D 交互 → Three.js → 渲染循环 → Canvas 更新
    ↓
AI 对话 → LangChain → OpenAI API → 流式响应
```

## 📸 项目截图

### 🖥️ 桌面端展示

> 建议添加以下截图：
>
> - 首页 Hero 区域（展示 3D 地球和视差效果）
> - 技能展示区域（展示动画效果）
> - 项目展示区域（展示卡片布局）
> - ChatBot 对话界面（展示 AI 功能）

### 📱 移动端展示

> 建议添加以下截图：
>
> - 移动端首页适配
> - 响应式导航菜单
> - 移动端聊天界面
> - 触摸交互效果

## 🌐 部署

### GitHub Pages

```bash
yarn build
# 将 dist 文件夹部署到 GitHub Pages
```

### Vercel

1. 连接 GitHub 仓库
2. 自动部署，无需额外配置

### Netlify

1. 拖拽 `dist` 文件夹到 Netlify
2. 或连接 Git 仓库自动部署

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！

1. Fork 项目
2. 创建功能分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 打开 Pull Request

## 📄 更新日志

### v2.0.0 (2024-01-XX)

- ✨ 新增视差滚动效果系统
- 📧 添加邮件发送功能
- 🎨 优化 UI 设计和动画效果
- 🔧 重构组件架构

### v1.0.0 (2024-01-XX)

- 🎉 初始版本发布
- 📱 响应式设计
- 🎭 基础动画效果

## 📜 许可证

本项目基于 [MIT License](LICENSE) 开源协议。

## 👨‍💻 作者

**杨晋飞 (JimmFly)**

- 📧 Email: jimmflyyang@gmail.com
- 🐙 GitHub: [@JimmFly](https://github.com/JimmFly)
- 💼 LinkedIn: [杨晋飞](https://linkedin.com/in/yangjinfei)

---

⭐ 如果这个项目对你有帮助，请给它一个星标！
