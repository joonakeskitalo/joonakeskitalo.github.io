---
layout: post
title: "Small tools"
featured: false
image: "/images/posts/IMG_2024-06-10_small_tools.jpg"
---

I like creating small purpose built tools if there is no clear alternative with the same feature set. Some of the tools I've made:

<br/>

#### [Markdown to RTF](https://joonakeskitalo.github.io/markdown-to-rtf)

Convert Markdown to RTF to be used with tools that don't have Markdown support out of the box, such as Confluence, Jira, Teams, Email and so on.

- Tool: [Markdown to RTF](https://joonakeskitalo.github.io/markdown-to-rtf)
- [Github repository](https://github.com/joonakeskitalo/markdown-to-rtf)
- [Previous post](https://joonakeskitalo.github.io/2023/09/06/markdown-to-rtf-for-use-in-slack-teams-confluence/)

<br/><br/>

#### [Daily meeting notes template generator](https://joonakeskitalo.github.io/daily/)

Creates a daily template with current date, each team members name in a randomised order and allows you to copy the written Markdown text as formatted rich text.

Example:

```
### 2025-10-06 daily

**Elias**
-

**Aino**
-

**Olivia**
-
```

<br/><br/>

#### [JS Eval scriptpad](https://joonakeskitalo.github.io/eval-pad)

Write small snippets of JS and instantly run them with ctrl+space hotkey. Allows for text input and output, so you can quickly reformat JSON, parse CSV etc.

- Tool: [eval-pad](https://joonakeskitalo.github.io/eval-pad)
- [Github repository](https://github.com/joonakeskitalo/eval-pad)

<br/><br/>

#### [Bulk QR and EAN-13 code generator](https://joonakeskitalo.github.io/ean-qr-generator)

Generate 1D or 2D barcodes in bulk. Runs locally, uses [bwip-js](http://metafloor.github.io/bwip-js) for generating barcodes and codes are only shown when mousing over the it to make it easier to read the correct code with a device.

- Tool: [ean-qr-generator](https://joonakeskitalo.github.io/ean-qr-generator)
- [Github repository](https://github.com/joonakeskitalo/ean-qr-generator)

<br/><br/>

#### [WiFi QR code login generator](https://joonakeskitalo.github.io/wifi-qr-code/)

Tool to automatically create a QR code that can be used for WiFi login.

Generates a code with a following format:

```
WIFI:T:WPA;S:ssidExample;P:passwordExample;H:;;
```

<br/><br/>

#### [Timer & alarm](https://github.com/joonakeskitalo/timer)

Timer app that supports setting a specific time for alarm and timer functionality. Useful for pomodoro or just as a reminder that you need to start moving 5 minutes before a meeting etc. Made as a `index.html` web app and wrapped to a small desktop application with Tauri.

Features.
- Set alarm x minutes and hours from now
- Set alarm to specific time
- Audible and visual cue for alarm ending
- Quick buttons for starting 2,5,10,15… minute timer
- Text input for a note (what meeting is starting for example)
- Large and mini window size
- Keep window always on top