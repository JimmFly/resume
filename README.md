# 🚀 个人简历网站

一个100% vibe coding 构建的交互式个人简历网站，具有沉浸式视差滚动效果和优雅的动画设计。展示前端开发技能、项目经验和专业联系方式。

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

3. **启动开发服务器**

   ```bash
   yarn dev
   # 或使用 npm
   npm run dev
   ```

   访问 [http://localhost:5173](http://localhost:5173) 查看网站

4. **构建生产版本**

   ```bash
   yarn build
   # 或使用 npm
   npm run build
   ```

5. **预览生产构建**
   ```bash
   yarn preview
   # 或使用 npm
   npm run preview
   ```

## ⚡ 性能优化

### 🔧 构建优化

- **Vite 构建系统** - 极速的开发服务器和构建过程
- **Tree Shaking** - 自动移除未使用的代码
- **代码分割** - 按需加载组件和资源
- **资源压缩** - 自动压缩 JS、CSS 和图片

### 🎨 渲染优化

- **GPU 加速动画** - 使用 transform3d 和 will-change
- **虚拟滚动** - 大列表的性能优化
- **图片懒加载** - 延迟加载非关键图片
- **CSS 优化** - Tailwind CSS 的 PurgeCSS 集成

### 📊 性能指标

- **首屏加载时间** < 2s
- **Lighthouse 评分** > 90
- **Core Web Vitals** 优化
- **包体积** < 500KB (gzipped)

## 🎨 自定义指南

### 📝 内容自定义

- **个人信息** - 修改 `src/components/sections/` 中的各个组件
- **项目展示** - 更新 `ProjectsSection.tsx` 中的项目数据
- **技能列表** - 编辑 `SkillsSection.tsx` 中的技能配置
- **联系方式** - 修改 `ContactSection.tsx` 中的邮箱和社交链接

### 🎨 样式自定义

- **主题颜色** - 编辑 `tailwind.config.js` 中的颜色配置
- **字体设置** - 在 `tailwind.config.js` 中配置字体族
- **动画效果** - 调整 `src/constants/index.ts` 中的视差配置
- **全局样式** - 修改 `src/index.css` 中的自定义样式

### ⚙️ 功能配置

- **视差效果** - 调整 `PARALLAX_CONFIG` 中的参数
- **动画时长** - 修改 Framer Motion 的动画配置
- **3D 效果** - 自定义 Three.js 场景参数

## 📸 项目截图

> 添加一些项目的截图展示不同设备上的效果

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

- 📧 Email: yangjinfei001@gmail.com
- 🐙 GitHub: [@JimmFly](https://github.com/JimmFly)
- 💼 LinkedIn: [杨晋飞](https://linkedin.com/in/yangjinfei)

---

⭐ 如果这个项目对你有帮助，请给它一个星标！
