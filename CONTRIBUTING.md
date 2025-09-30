# 贡献指南

感谢您对这个项目的兴趣！我们欢迎各种形式的贡献。

## 🚀 快速开始

1. **Fork 项目**

   ```bash
   git clone https://github.com/your-username/resume.git
   cd resume
   ```

2. **安装依赖**

   ```bash
   yarn install
   ```

3. **启动开发服务器**
   ```bash
   yarn dev
   ```

## 📝 贡献类型

### 🐛 Bug 报告

- 使用 GitHub Issues 报告 bug
- 提供详细的重现步骤
- 包含环境信息（浏览器、操作系统等）

### ✨ 功能请求

- 在 Issues 中描述新功能
- 解释功能的用途和价值
- 提供可能的实现方案

### 🔧 代码贡献

- 创建功能分支：`git checkout -b feature/amazing-feature`
- 遵循代码规范和最佳实践
- 添加必要的测试
- 更新相关文档

## 📋 开发规范

### 代码风格

- 使用 ESLint 和 Prettier 进行代码格式化
- 运行 `yarn lint` 检查代码质量
- 运行 `yarn lint:fix` 自动修复问题

### 提交规范

使用 [Conventional Commits](https://www.conventionalcommits.org/) 规范：

```
type(scope): description

[optional body]

[optional footer]
```

**类型 (type):**

- `feat`: 新功能
- `fix`: Bug 修复
- `docs`: 文档更新
- `style`: 代码格式化
- `refactor`: 代码重构
- `perf`: 性能优化
- `test`: 测试相关
- `chore`: 构建过程或辅助工具的变动

**示例:**

```
feat(parallax): add multi-layer parallax scrolling effect

Implement a new parallax system with configurable layers
and smooth scrolling animations for better user experience.

Closes #123
```

### 分支命名

- `feature/feature-name` - 新功能
- `fix/bug-description` - Bug 修复
- `docs/update-readme` - 文档更新
- `refactor/component-name` - 代码重构

## 🧪 测试

- 确保所有现有测试通过
- 为新功能添加测试
- 运行 `yarn type-check` 检查类型

## 📚 文档

- 更新 README.md（如果需要）
- 添加代码注释
- 更新 TypeScript 类型定义

## 🔍 代码审查

所有的 Pull Request 都需要经过代码审查：

1. **自我检查**
   - 代码是否遵循项目规范
   - 是否有充分的测试覆盖
   - 文档是否更新

2. **提交 PR**
   - 提供清晰的 PR 描述
   - 链接相关的 Issues
   - 添加截图（如果是 UI 变更）

3. **响应反馈**
   - 及时回应审查意见
   - 进行必要的修改
   - 保持讨论的专业性

## 🎯 优先级

当前项目的重点领域：

1. **性能优化** - 提升加载速度和运行性能
2. **可访问性** - 改善无障碍访问体验
3. **移动端优化** - 提升移动设备体验
4. **SEO 优化** - 改善搜索引擎优化
5. **国际化** - 添加多语言支持

## 📞 联系方式

如果您有任何问题，可以通过以下方式联系：

- 📧 Email: jimmflyyang@gmail.com
- 🐙 GitHub: [@JimmFly](https://github.com/JimmFly)
- 💼 LinkedIn: [杨晋飞](https://linkedin.com/in/yangjinfei)

## 📄 许可证

通过贡献代码，您同意您的贡献将在 [MIT License](LICENSE) 下授权。

---

再次感谢您的贡献！🎉
