---
layout: post
title: "Modifying text selection from HTML textarea with JavaScript"
featured: false
---

Recently I've been writing my own plain text & Markdown writing application and have had the need to apply certain edits to the text. These include Markdown formatting, sorting lines, removing empty lines and using the selected text as a link label and pasting the link from clipboard and so on.

The code handling the getting the selected text, modifying it and inserting it back is the same, so we'll pass the text modifying function as an argument to the text selection function. This way we'll only need to create the function that'll modify the text which it'll accept as argument and return the modified text.

```js
const getEol = (arg) => (arg.match(/\r\n/gm) ? "\r\n" : "\n");

const wa = document.getElementById("your-write-area-id");

const handleSelectionEdits = (fn) => {
  let [startIndex, endIndex, text] = [
    wa.selectionStart,
    wa.selectionEnd,
    wa.value,
  ];
  const start = text.substring(0, startIndex);
  const end = text.substring(endIndex, text.length);

  let selection = text.substring(startIndex, endIndex);
  const modified = fn(selection);

  const res = `${start}${modified}${end}`;
  wa.value = res;
  wa.focus();
  wa.setSelectionRange(startIndex, modified.length);
};

const eol = getEol(arg);

const textFunctions = {
  sortLines: (s) => s.split(eol).sort().join(eol),
  removeTabs: (s) => s.replaceAll("\t", ""),
  prependDash: (s) =>
    s
      .split(eol)
      .map((r) => `- ${r}`)
      .join(eol),
  removeEmptyLines: (s) =>
    s
      .split(eol)
      .filter((line) => line)
      .join(eol),
};
```

After this the `handleSelectionEdits` can be used in the following way:

```
handleSelectionEdits(textFunctions.sortLines);
```

This can then be bound to hotkey, menu item or wherever you'll be using it.