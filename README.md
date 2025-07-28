# 个人简历网站

这是一个使用现代前端技术栈构建的个人简历网站，展示了前端开发技能、项目经验和联系方式。
100% vibe coding。

## 技术栈

- **React 18** - 用于构建用户界面的JavaScript库
- **TypeScript** - 添加静态类型检查的JavaScript超集
- **Vite** - 现代前端构建工具，提供极速的开发体验
- **Tailwind CSS** - 实用优先的CSS框架
- **Framer Motion** - 强大的React动画库

## 功能特点

- 响应式设计，适配各种屏幕尺寸
- 平滑的页面过渡和组件动画
- 模块化组件结构，易于维护和扩展
- 优化的性能和加载速度
- 暗色主题设计，现代感强

## 项目结构

```
src/
├── components/         # 组件目录
│   ├── layout/         # 布局组件（导航栏、页脚等）
│   └── sections/       # 页面主要部分组件
├── App.tsx            # 主应用组件
├── index.css          # 全局样式和Tailwind配置
└── main.tsx           # 应用入口点
```

## 运行项目

### 前提条件

- Node.js (推荐v16+)
- Yarn包管理器

### 安装依赖

```bash
cd resume
yarn install
```

### 开发模式运行

```bash
yarn dev
```

### 构建生产版本

```bash
yarn build
```

### 预览生产构建

```bash
yarn preview
```

## 性能优化

- 使用React.lazy和Suspense实现组件懒加载
- 图片优化和延迟加载
- 使用Tailwind CSS减少未使用的CSS
- 动画使用GPU加速
- 使用Vite进行快速构建和热模块替换

## 自定义

可以通过修改以下文件来自定义网站：

- `src/components/sections/` - 更新各部分内容
- `tailwind.config.js` - 自定义颜色、字体和其他主题设置
- `src/index.css` - 添加自定义全局样式

## 许可

MIT
