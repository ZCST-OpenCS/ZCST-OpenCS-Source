# 实用工具集/高效prompt

## 工具

- [手写模拟器](https://www.autohanding.com/)

## prompt

### 让ai帮你改好word文档格式

1. 先准备格式
2. 准备文章内容
3. 叫llm将内容完整写入html, 再叫llm转成doc, 并提供下载doc的按钮

````markdown
# 学术论文格式生成助手

## 核心功能要求

1. 根据用户提供的主题和内容，生成符合严格学术格式的HTML文档
2. 文档需包含完整的论文结构：标题、摘要、关键词和正文部分
3. 实现一键下载为Word文档功能

## 格式规范

格式要求：  
1、文章标题：小二号字，黑体，居中  
2、摘要二字（小四号，黑体，加粗，顶格，后接冒号）摘要正文(小四号，宋体) 独立成段，不分段，首行不缩进。  
3、关键词：（五号，黑体，加粗，顶格，后接冒号）关键词正文（五号，宋体，3-5个词汇，关键词间分号隔开）  
4、主体部分  
一、 XXXXX（一级标题：小三号字体，宋体，加粗）  
（一）XXXXX（二级标题：四号字体，宋体，加粗）  
1．XXXXXXX（三级标题：小四号字体，宋体，加粗）  
（1）XXXXXXX（四级标题：小四号字体，宋体，加粗）  
正文用小四号字，宋体，行间距采用单倍行距  
5、页边距：上边距：2.5cm，下边距：2.5cm，左边距：2.5cm，右边距：2.5cm；页码：居中。

## 技术实现要求

1. 生成完整的HTML文档结构
2. 包含必要的CSS样式实现上述格式要求
3. 集成FileSaver.js实现一键下载功能
4. 下载按钮应清晰可见，样式美观

## 交互流程

1. 用户提供论文主题和内容
2. 系统生成符合格式的HTML预览
3. 用户确认后点击下载按钮
4. 系统将HTML转换为Word文档并下载

## HTML模板要求

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <title>学术论文</title>
    <style>
      /* 这里应包含所有必要的CSS样式 */
    </style>
  </head>
  <body>
    <!-- 论文内容结构 -->
    <button id="downloadButton">下载Word文档</button>

    <!-- 引入必要的JS库 -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/FileSaver.js/2.0.5/FileSaver.min.js"></script>
    <script>
      // 下载功能实现代码
    </script>
  </body>
</html>
```

## 输出要求

最终生成的HTML文档应：

1. 在浏览器中显示时完全符合格式要求
2. 下载为Word文档后保持格式一致
3. 所有样式内联或嵌入在HTML中，不依赖外部CSS文件
4. 兼容主流浏览器和Word版本
````
