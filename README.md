# ZCST-OpenCS-Source

## 👨‍💻 简介

ZCST-OpenCS-Source 是珠科 22 届学生踩坑多年后，决定写一个博客，打破信息差，分享课程资料、学习方法，尽可能减少学习弯路。也算是留下一点自己的痕迹吧。

## 📖 欢迎参与

如果你有想分享的内容和可供分享的资料，欢迎创建 Pull Request 分享你的经验和为对应课程的仓库增加新内容；如果对仓库中的内容有疑问或建议，可以通过创建 Issue 的方式提出。

👉 **[查看详细贡献指南](CONTRIBUTING.md)**

我们非常期待你的参与！无论是添加新课程信息、修复错误，还是改进文档，你的每一份努力都会让这个项目变得更好。

---

## 写作和参与前置准备

### 技术要求

1. 掌握 **Markdown** 语法。
2. 安装 **Node.js** 18 及以上版本。
3. 建议使用 **pnpm** 进行包管理。

安装 pnpm：

```bash
npm install --global pnpm
```

### 克隆和运行项目

1. 把本仓库 fork 到自己的 GitHub 账号下。
2. 将仓库克隆到本地：

   ```bash
   git clone https://github.com/your-username/ZCST-OpenCS-Source.git
   cd ZCST-OpenCS-Source
   ```

3. 安装依赖并启动开发服务器：

   ```bash
   pnpm add -D vitepress
   pnpm vitepress dev docs # 在 localhost:5173 上预览
   ```

---

## 项目结构

- **docs/**: 存放所有文档内容。
- **CONTRIBUTING.md**: 贡献指南，详细说明如何参与项目。
- **docs/.vitepress/**: VitePress 配置文件。

---

## 如何贡献

1. **阅读贡献指南**: 在提交 PR 前，请务必阅读 **[贡献指南](CONTRIBUTING.md)**，了解项目的格式化要求和提交规范。
2. **格式化代码**: 使用以下命令确保代码符合 Prettier 格式化规范：

   ```bash
   pnpm run format
   ```

3. **提交 PR**: 创建 Pull Request 提交你的更改，并在 PR 中简要描述你的修改内容。

---

## 资源链接

- [VitePress 官方文档](https://vitepress.dev/)
- [Prettier 官方文档](https://prettier.io/)
- [Markdown 语法指南](https://www.markdownguide.org/)

## License

[![CC BY-NC-SA 4.0](https://licensebuttons.net/l/by-nc-sa/4.0/88x31.png)](https://creativecommons.org/licenses/by-nc-sa/4.0/)
