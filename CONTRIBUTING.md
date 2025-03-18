# 如何为本项目贡献

## 目录

1. [按课程分类写](#按课程分类写)
2. [Git Commit Message 规范](#git-commit-message-规范)
3. [同步上游仓库](#git-更新自己仓库与上游同步)
4. [VitePress 使用指南](#vitepress-使用指南)
5. [代码格式化](#代码格式化)
6. [文章底部](#文章底部)
7. [总结](#总结)
8. [注意事项](#注意事项)

## 按课程分类写

每门课程的信息需要按照以下格式编写，找到课程对应的学期文件夹（如 `junior` 或 `senior`），并以课程名称命名文件（如 `course-name.md`），保存到对应的文件夹中：

```plaintext
ZCST-OpenCS-Source/docs/collection/junior/courses/course-name.md
```

### 文件顶部组件引入

在每篇课程文档（.md）的顶部引入 `CourseInfo` 组件：

```markdown
<script setup>
import CourseInfo from "../../../.vitepress/components/CourseInfo.vue";
</script>
```

### 课程信息模板

在标题下填写对应课程的相关信息，使用 `CourseInfo` 组件：

```markdown
<CourseInfo
  :credits="学分"
  :hours="总课时"
  :year="年份"
  :breakdown="{
    '平时成绩': '占比%',
    '实验成绩': '占比%',
    '期末成绩': '占比%'
  }"
/>
```

#### 示例

```markdown
<CourseInfo
  :credits="2.5"
  :hours="48"
  :year="2024"
  :breakdown="{
    '平时成绩': '20%',
    '实验成绩': '30%',
    '期末成绩': '50%'
  }"
/>
```

### 内容要求

每篇课程文档需包含以下信息：

1. **期末考核方式**：描述考试形式（如闭卷、开卷、论文等）。
2. **学分**：该课程的学分数。
3. **成绩占比**：各部分成绩的权重（如平时成绩、实验成绩、期末成绩）。
4. **有无实验**：是否包含实验课程。
5. **教材**：推荐或指定的教材名称及作者。

## Git Commit Message 规范

为了保持提交记录的清晰和一致性，请遵循以下提交信息格式：

```plaintext
类型(文件名): 描述 (全英文写, 英文字符)
```

常见的提交类型包括：

- `docs`：文档相关
- `feat`：新功能
- `fix`：修复问题
- `style`：代码格式化
- `refactor`：代码重构

#### 示例

```plaintext
docs(math-course): add information about calculus
```

## Git 更新自己仓库与上游同步

为了确保你的 Fork 仓库与上游仓库保持同步，请按照以下步骤操作：

```bash
# 确保在 main 分支
git checkout main

# 从上游仓库拉取最新代码
git pull --rebase upstream main

# 如果在 rebase 过程中出现冲突，请按照以下步骤解决：
# 1. 手动编辑冲突文件，解决冲突。
# 2. 使用 `git add <file>` 标记冲突已解决。
# 3. 继续 rebase：
# git rebase --continue

# 强制推送到你的 Fork 仓库
git push --force
```

## VitePress 使用指南

本项目使用 [VitePress](https://vitepress.dev/) 构建文档。以下是常用的命令：

### 启动本地开发服务器

```bash
pnpm vitepress dev docs
```

访问 `http://localhost:5173` 查看文档。

### 构建文档

运行以下命令构建文档：

```bash
npm run docs:build
```

### 预览构建结果

构建完成后，可以通过以下命令在本地预览文档：

```bash
npm run docs:preview
```

如果需要自定义文档主题或组件，可以在 `.vitepress/components` 文件夹中添加 Vue 组件，并在 Markdown 文件中直接使用。

## 代码格式化

为了确保所有提交的代码风格一致，本项目使用 [Prettier](https://prettier.io/) 进行代码格式化。请在提交 PR 前运行以下命令对代码进行格式化：

### 格式化命令

```bash
pnpm run format
```

### 提交前的要求

1. 在完成修改后，务必运行 `pnpm run format` 对代码进行格式化。
2. 如果未格式化代码直接提交 PR，可能会导致 CI/CD 流程失败，维护者会要求你重新格式化后再提交。

### 检查格式化

如果你想检查代码是否已经格式化，可以运行以下命令：

```bash
pnpm run lint:check
```

如果格式化失败，请检查以下内容：

- 是否安装了正确的依赖（运行 `pnpm install`）。
- 是否有代码不符合 Prettier 规则，手动修复后再运行格式化。

---

## 文章底部

每篇文章的底部需注明作者信息，格式如下：

```markdown
> 文 / [zcst](https://github.com/zcst)
```

请将 `[zcst](https://github.com/zcst)` 替换为你自己的 GitHub 用户名和主页链接。

## 总结

感谢每一位为本项目做出贡献的同学！你的努力不仅帮助了自己，也帮助了更多正在学习的人。如果你是第一次为项目贡献，可以按照以下步骤快速开始：

1. Fork 项目到你的 GitHub 账号。
2. 克隆你的 Fork 仓库到本地。
3. 按照上述指南进行修改或添加内容。
4. 提交 Pull Request 并等待审核。

如果有任何疑问，欢迎随时联系项目维护者。

Happy Contributing! 🚀

## 注意事项

- 确保所有提交的代码都符合 Prettier 的格式化规则（运行 `pnpm run format`）。
- 提交 PR 前，请检查是否已正确填写课程信息。
- 如果有新的功能建议或问题反馈，可以在 [Issues](https://github.com/ZCST-OpenCS/ZCST-OpenCS-Source/issues) 页面提出。
