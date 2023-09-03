---
layout: post
title: "Screen resolution dependent hotkey in Hammerspoon"
featured: false
---

Hotkey bind to set window to a specific size is easy & convenient to make with [Hammerspoon](https://www.hammerspoon.org/) and works nicely if you only need few sizes and use similar resolution screens, but is not ideal when constantly switching between desktop and laptop screens with different sizes & resolutions. Luckily Hammerspoon has access to the display resolutions so the script can have different settings depending on the used screen.

Example script:

```lua
function setWindowSize(w, h)
    hs.window.setFrameCorrectness = true;
    local win = hs.window.focusedWindow()
    hs.window.animationDuration = 0
    local f = win:frame()
    f.h = h
    f.w = w
    win:setFrame(f)
end

hs.hotkey.bind({"alt"}, "d", function()
    local screen = hs.screen.mainScreen()
    local screenMode = screen:currentMode()
    local screenWidth = screenMode.w

    local win = hs.window.focusedWindow()
    local f = win:frame()

    local initialWidth = screenWidth == 3840 and 1500 or 1200
    local initialHeight = screenWidth == 3840 and 1300 or 1000

    local secondWidth = screenWidth == 3840 and 1600 or 1350
    local secondHeight = screenWidth == 3840 and 1900 or 1050

    if (f.w == initialWidth and f.h == initialHeight) then
        setWindowSize(secondWidth, secondHeight)
    else
        setWindowSize(initialWidth, initialHeight)
    end
end)
```

<br/>

The hotkey bound to `alt+d` toggles between two window sizes and uses the secondary size if the screen's width is not 3840 pixels. The `if … else` around calling `setWindowSize` function is not necessary, but it's just used to have multiple sizes bound to one hotkey. Lua lacks a standard looking [ternary operator](http://lua-users.org/wiki/TernaryOperator), but uses the `a == b and x or y` syntax.
