---
layout: post
title: "Console log with styles"
featured: false
---

Console messages in the browser console can be stylised to better indicate their context and meaning of the message.

```
console.log('%c Test message', 'background: #222; color: #bada55');
```

<span style="background: #222; color: #bada55">Test message</span>

<br/><br/>

```
console.log('%c Test message', 'background: #222; color: #FDD179; padding: 6px');
console.log('%c Test message', 'background: #222; color: #F6CFD7; padding: 6px');
console.log('%c Test message', 'background: #222; color: #FAF6EC; padding: 6px');
console.log('%c Test message', 'background: #222; color: #B9D9EB; padding: 6px');
```

<span style="background: #222; color: #FDD179; padding: 6px">Test message</span> <span style="background: #222; color: #F6CFD7; padding: 6px">Test message</span> <span style="background: #222; color: #FAF6EC; padding: 6px">Test message</span> <span style="background: #222; color: #B9D9EB; padding: 6px">Test message</span>

<br/><br/>

These will not work in a terminal, but escape sequences can be used:

- Text color
  - black: `\033[30m` <span style="color:black">"example"</span>
  - red: `\033[31m` <span style="color:red">"example"</span>
  - green: `\033[32m` <span style="color:green">"example"</span>
  - yellow: `\033[33m` <span style="color:yellow">"example"</span>
  - blue: `\033[34m` <span style="color:blue">"example"</span>
  - magenta: `\033[35m` <span style="color:magenta">"example"</span>
  - cyan: `\033[36m` <span style="color:cyan">"example"</span>
  - white: `\033[37m` <span style="color:white">"example"</span>
- Background color:
  - blackBg: `\033[40m` <span style="background-color:black">"example"</span>
  - redBg: `\033[41m` <span style="background-color:red">"example"</span>
  - greenBg: `\033[42m` <span style="background-color:green">"example"</span>
  - yellowBg: `\033[43m` <span style="background-color:yellow">"example"</span>
  - blueBg: `\033[44m` <span style="background-color:blue">"example"</span>
  - magentaBg: `\033[45m` <span style="background-color:magenta">"example"</span>
  - cyanBg: `\033[46m` <span style="background-color:cyan">"example"</span>
  - whiteBg: `\033[47m` <span style="background-color:white">"example"</span>
- reset: `\033[0m`

```
console.log('\033[31m Red');
console.log('\033[0m Reset');
console.log('\033[41m Black text with red background');
```

<br/><br/>

One can also use emojis to give context for the message:

```
console.log('📕: example');
console.log('📙: example');
console.log('📗: example');
console.log('📘: example');
console.log('📓: example');
console.log('📔: example');
```

<br/><br/>

Reference:

- [https://stackoverflow.com/questions/7505623/colors-in-javascript-console](https://stackoverflow.com/questions/7505623/colors-in-javascript-console)
