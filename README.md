# ZCST-OpenCS-Source

## 👨‍💻 简介

ZCST-OpenCS-Source 是珠科 22 届学生踩坑多年后，决定开源的 CS 学习资料，旨在帮助更多同学少走弯路。

## 📖 欢迎参与

如果你有可供分享的资料，欢迎创建 Pull Request 为对应课程的仓库增加新内容；如果对仓库中的内容有疑问或建议，可以通过创建 Issue 的方式提出。

## 前置准备

Node.js 18 及以上版本。

建议使用 **pnpm** 进行包管理。

```bash
npm install --global pnpm
```

把本仓库 fork 到自己的 GitHub 账号下，然后 clone 到本地。

```bash
git clone https://github.com/your-username/ZCST-OpenCS-Source.git
cd ZCST-OpenCS-Source
pnpm add -D vitepress
pnpm vitepress dev docs # 在localhost:5173上预览
```
