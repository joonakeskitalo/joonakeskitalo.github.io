---
layout: post
title: "Resizing images from clipboard with macOS Shortcuts"
featured: false
---

I needed to have multiple mobile device screenshots in the same image to show the user flow in an interface and the device screenshots can be quite large, which results in needing to have an unnecessarily large canvas in an image editor.

Learned that the macOS Shortcuts can be used to resize images in the clipboard without needing to first save, resize and then re-save the image. Even with scripts, this can be a bit tedious.

With the following shortcut, the image in the clipboard gets resized and saved back to the clipboard without any other interaction. The shortcuts can be bound to hotkeys and I have it set to `ctrl+shift+m`.

![Screenshot of macOS Shortcuts app](/images/posts/2025-06-18_macOS-shortcuts-image-resize.png)

- Shortcut flow:
    - Get clipboard
    - Resize clipboard by percentage x%
    - Copy resized image to clipboard

Setting the hotkey: open sidebar from the info icon -> details -> use as quick action -> services menu & set the hotkey in the "*Run with*" option.