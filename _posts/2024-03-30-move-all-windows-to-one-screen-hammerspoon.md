---
layout: post
title: "Move all windows to one screen with Hammerspoon"
featured: false
---

When connecting to external displays, I commonly have the issue that windows are spread around in a unwanted order which can be annoying with large screens and projectors. I'm using the same method as in the earlier [cascading windows](https://joonakeskitalo.github.io/2023/02/28/cascading-windows-with-hammerspoon/) post, but applying it to all windows. This can be bound to a [hotkey](https://www.hammerspoon.org/docs/hs.hotkey.html) or a called via [hs.chooser](https://www.hammerspoon.org/docs/hs.chooser.html) menu.

```
function reverseArray(x)
    local n, m = #x, #x / 2
    for i = 1, m do
        x[i], x[n - i + 1] = x[n - i + 1], x[i]
    end
    return x
end

function cascadeAllWindows()
    hs.window.animationDuration = 0
    local visibleWindows = hs.window.visibleWindows()
    reverse(visibleWindows)

    local cursorScreen = hs.mouse.getCurrentScreen()
    local curPos = hs.mouse.absolutePosition()
    local x = curPos.x
    local y = curPos.y

    for i, window in ipairs(visibleWindows) do
        local f = window:frame()
        f.x = x
        f.y = y
        x = x + 30
        y = y + 30
        window:setFrame(f)
    end
end
```