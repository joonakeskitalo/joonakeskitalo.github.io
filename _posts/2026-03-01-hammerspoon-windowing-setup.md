---
layout: post
title: "Hammerspoon windowing setup"
featured: false
---


## SkyRocket & HammerDrag


I've been using [SkyRocket](https://github.com/dbalatero/SkyRocket.spoon) by [David Balatero](https://github.com/dbalatero) for years and it has been serving me very well. After starting to use `hs.grid` more, I wanted to add grid support to SkyRocket, but luckily [Justin Wyne](https://github.com/wyne) had already implemented the functionality and made a [pull request](https://github.com/dbalatero/SkyRocket.spoon/pull/13) to SkyRocket. It hasn't been merged, but his branch's versin can be copied to Hammerspoon config. Justin also had renamed the spoon to *HammerDrag*.

HammerDrag/SkyRocket can be installed by copying the init.lua to ~/.hammerspoon/spoons


```
└── Spoons
    └── HammerDrag.spoon
        └── init.lua
```


<br/>


After which it can be taken into use in your own Hammerspoon config:


```
local HammerDrag = hs.loadSpoon("HammerDrag")
HammerDrag:new({
    enabled = true,
    preview = true,
    opacity = 0.25,
    grid = hs.grid,
    focusOnClick = false,

    moveGridMouseButton = "left",
    moveGridModifiers = { "alt", "ctrl" },
    resizeGridMouseButton = "right",
    resizeGridModifiers = { "alt", "ctrl" },

    moveMouseButton = 'left',
    moveModifiers = { 'alt' },
    resizeMouseButton = 'right',
    resizeModifiers = { 'alt' },
    disabledApps = { "Pixelmator Pro", "Affinity Designer", "System Preferences", "Teams", "Microsoft Teams" },
})
```


<br/>


With this `alt+click` maintains the original SkyRocket configuration and `ctrl+alt+click` has the new grid support.

---


## Using Hammerspoon's hs.grid



**Configuration:**



```
hs.window.animationDuration = 0
hs.grid.MARGINX = 8
hs.grid.MARGINY = 8
hs.grid.setGrid("12x6", "3840x2160")
hs.grid.setGrid("6x5")
```


<br/>



### Snapping window under cursor to grid



```
local function get_window_under_mouse()
    local _ = hs.application

    local my_pos = hs.geometry.new(hs.mouse.getAbsolutePosition())
    local my_screen = hs.mouse.getCurrentScreen()

    return hs.fnutils.find(hs.window.orderedWindows(), function(w)
        return my_screen == w:screen() and my_pos:inside(w:frame())
    end)
end

hs.hotkey.bind({ "alt" }, "q", function()
    local win = get_window_under_mouse()
    if win then
        hs.grid.snap(win)
    end
end)
```


<br/>



### Resizing windows in grid with hotkeys


These hotkeys use bottom right as reference:
```
hs.hotkey.bind({ "cmd", "ctrl" }, "right", function()
    local win = hs.window.focusedWindow()
    if win then
        local cell = hs.grid.get(win)
        cell.w = cell.w + 1
        hs.grid.set(win, cell)
    end
end)

hs.hotkey.bind({ "cmd", "ctrl" }, "left", function()
    local win = hs.window.focusedWindow()
    if win then
        local cell = hs.grid.get(win)
        cell.w = cell.w - 1
        hs.grid.set(win, cell)
    end
end)

hs.hotkey.bind({ "cmd", "ctrl" }, "up", function()
    local win = hs.window.focusedWindow()
    if win then
        local cell = hs.grid.get(win)
        cell.h = cell.h - 1
        hs.grid.set(win, cell)
    end
end)

hs.hotkey.bind({ "cmd", "ctrl" }, "down", function()
    local win = hs.window.focusedWindow()
    if win then
        local cell = hs.grid.get(win)
        cell.h = cell.h + 1
        hs.grid.set(win, cell)
    end
end)
```


<br/>



**Top left as reference:**



```
hs.hotkey.bind({ "cmd", "ctrl", "alt" }, "right", function()
    local win = hs.window.focusedWindow()
    if win then
        local cell = hs.grid.get(win)
        cell.w = cell.w - 1
        cell.x = cell.x + 1
        hs.grid.set(win, cell)
    end
end)

hs.hotkey.bind({ "cmd", "ctrl", "alt" }, "left", function()
    local win = hs.window.focusedWindow()
    if win then
        local cell = hs.grid.get(win)
        cell.w = cell.w + 1
        cell.x = cell.x - 1
        hs.grid.set(win, cell)
    end
end)

hs.hotkey.bind({ "cmd", "ctrl", "alt" }, "up", function()
    local win = hs.window.focusedWindow()
    if win then
        local cell = hs.grid.get(win)
        cell.h = cell.h + 1
        cell.y = cell.y - 1
        hs.grid.set(win, cell)
    end
end)

hs.hotkey.bind({ "cmd", "ctrl", "alt" }, "down", function()
    local win = hs.window.focusedWindow()
    if win then
        local cell = hs.grid.get(win)
        cell.h = cell.h - 1
        cell.y = cell.y + 1
        hs.grid.set(win, cell)
    end
end)
```


<br/>



### Resizing to fullscreen and back to original size



**Save original window size and positions to global variables:**



```
windowPosX = 0
windowPosY = 0
windowWidth = 0
windowHeight = 0
```


<br/>



**Functions to save position, setting window to fullscreen and restoring original size:**



```
function saveWindowSizeAndPosition()
    local win = hs.window.focusedWindow()
    local f = win:frame()
    windowWidth = f.w
    windowHeight = f.h
    windowPosX = f.x
    windowPosY = f.y
end

function restoreSavedWindowSizeAndPosition()
    hs.window.animationDuration = 0
    local win = hs.window.focusedWindow()
    local f = win:frame()
    f.w = windowWidth
    f.h = windowHeight
    f.x = windowPosX
    f.y = windowPosY
    win:setFrame(f, 0)
end

function setFullScreen()
    saveWindowSizeAndPosition()
    hs.window.animationDuration = 0
    local win = hs.window.focusedWindow()
    hs.grid.maximizeWindow(win)
end
```


<br/>



**Hotkeys:**



```
hs.hotkey.bind({ "alt", "ctrl" }, "Up", function()
    setFullScreen()
end)

hs.hotkey.bind({ "ctrl", "alt" }, "down", function()
    local win = hs.window.focusedWindow()
    if win then
        restoreSavedWindowSizeAndPosition()
    end
end)
```