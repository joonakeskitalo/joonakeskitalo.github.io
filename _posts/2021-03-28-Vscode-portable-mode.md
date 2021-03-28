---
layout: post
title: "Tip: Visual Studio Code Portable mode"
featured: false
---

If you use vscode on multiple systems, can't install the application system wide, want to have multiple versions or to have a default starting point for extensions & settings, [portable](https://code.visualstudio.com/docs/editor/portable) mode can be useful.

Download the version suitable for your system, create the user directory (`data` on Windows & Linux, `code-portable-data` on macOS) next the executable and it's ready for use. You might need to disable macOS quarantine mode for portable mode to work with the following command: `xattr -dr com.apple.quarantine Visual\ Studio\ Code.app`

```
On Windows & Linux:
|- VSCode-win32-x64-1.25.0-insider
|   |- Code.exe (or code executable)
|   |- data
|   |- ...

On macOS:
|- Visual Studio Code.app
|- code-portable-data
```