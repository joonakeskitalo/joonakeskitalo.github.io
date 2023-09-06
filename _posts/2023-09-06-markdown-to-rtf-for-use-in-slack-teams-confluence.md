---
layout: post
title: "Getting Markdown as RTF to Slack, Teams, Confluence"
featured: false
image: "/images/posts/2023-09-06_markdown_preview.png"
---

I've had a want and a need to get the rendered output of a Markdown preview copied to the clipboard so that it can directly be used in most places, such as Slack, Confluence, Teams and email. Some of thsoe service support Markdown out of the box (albeit not fully) and some don't support it at all. I've been circumventing this by manually highlighting and copying the text, but this gets quite annoying and is error prone.

Luckily I have a writing app that I develop and control, so adding features such as this is quite easy to do. I've been using [Marked.js](https://github.com/markedjs/marked) to render the preview and used the [Clipboard API](https://developer.mozilla.org/en-US/docs/Web/API/Clipboard_API) to automatically copy the rendered output to the clipboard.

<br/>

**Using Marked.js to render a rich text preview of Markdown:**

```js
const preview = document.getElementById("exampleId");

const renderMarkdown = (text) => {
  preview.innerHTML = marked.parse(text, {
    breaks: true,
    gfm: true,
  });
};
```

<br/>

**Copying the rendered HTML output to clipboard:**

```js
const copyElementToClipboard = (element) => {
  navigator.clipboard.write([
    new ClipboardItem({
      "text/plain": new Blob([element.innerText], { type: "text/plain" }),
      "text/html": new Blob([element.innerHTML], { type: "text/html" }),
    }),
  ]);
};

copyElementToClipboard(preview);
```

<br/>

Now the clipboard will contain the rich text formatted contents of the preview with no styling of the elements, so the default style of the place you're pasting the content will be used.

<br/>

**Links**

- [Marked.js Github](https://github.com/markedjs/marked)
- [Marked.js documentation](https://marked.js.org/)
- [StackOverflow: Javascript - Copy string to clipboard as text/html](https://stackoverflow.com/questions/34191780/javascript-copy-string-to-clipboard-as-text-html)
