---
layout: post
title: "Cascading windows with Hammerspoon"
featured: false
image: '/images/posts/2023-02-28_hammerspoon_cascading_windows.png'
---

Script that gathers all the windows of the currently active application from the screen where the cursor is located, sets them to the first window's size, moves the first window (or last depending if you reverse the array) to the cursor's coordinates and shifts each of the remaining windows by 30px horizontall and vertically creating a cascaded layout.

Useful for collecting and cleaning up all browser windows at the end of the day for example.

```lua
function reverseArray(x)
    local n, m = #x, #x / 2
    for i = 1, m do
        x[i], x[n - i + 1] = x[n - i + 1], x[i]
    end
    return x
end

local function cascadeWindows()
    hs.window.animationDuration = 0
    local initialWindow = hs.window.focusedWindow():frame()
    local width = initialWindow.w
    local height = initialWindow.h

    local cursorScreen = hs.mouse.getCurrentScreen()
    local cursorPosition = hs.mouse.getAbsolutePosition()
    local posX = cursorPosition.x
    local posY = cursorPosition.y
    local visibleWindows = reverseArray(hs.application.frontmostApplication():visibleWindows())

    for i, currentWindow in ipairs(visibleWindows) do
        if (currentWindow:screen() == cursorScreen) then
            local f = currentWindow:frame()
            f.w = width
            f.h = height
            f.x = posX
            f.y = posY
            currentWindow:setFrame(f)
            posX = posX + 30
            posY = posY + 30
        end
    end
end

hs.hotkey.bind({"option"}, "§", function()
    cascadeWindows()
end)
```
