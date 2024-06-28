---
layout: post
title: "Useful things"
featured: false
---

Here are some useful things for computer usage which might be too small in themselves for a separate blog post.

**Table of contents**

- [Browser profiles](#browser-profiles)
- [Browser start page](#browser-start-page)
- [Temporary pasteboard in browser](#temporary-pasteboard-in-browser)
- [Hotkeys to instantly open and hide apps](#hotkeys-to-instantly-open-and-hide-apps)
- [macOS Dock spacers](#macos-dock-spacers)
- [CLI aliases](#cli-aliases)
- [Alt-drag to resize windows](#alt-drag-to-resize-windows)
- [Hammerspoon hotkey to toggle preset window sizes](#hammerspoon-hotkey-to-toggle-preset-window-sizes)
- [Hammerspoon menu to access specific settings quickly](#hammerspoon-menu-to-access-specific-settings-quickly)
- [Other apps](#other-apps)

---

<br/>

### Browser profiles

Chrome and Safari have browser profiles and Firefox has multi-account containers. With the profiles, you can separate cookies, local storage, browser history, bookmarks, themes and extensions to separate accounts from each other.

- [Use Chrome with multiple profiles](https://support.google.com/chrome/answer/2364824)
- [Use profiles in Safari on Mac](https://support.apple.com/en-us/105100)
- [Firefox Multi-Account Containers](https://support.mozilla.org/en-US/kb/containers)
    - Firefox does have profiles, but switching is not seamless: [Profile Manager - Create, remove or switch Firefox profiles](https://support.mozilla.org/en-US/kb/profile-manager-create-remove-switch-firefox-profiles)

<br/><br/>

### Browser start page

When using multiple profiles, managing bookmarks becomes a bit of a hassle. I've mostly started to use a general *start page* that has most commonly used links, hotkeys to specific sites, and link search. The actual bookmarks between the profiles differ, but there is no need to sync the bookmarks between each other when the shareable links between profiles are added to the startpage.

- [Example page](https://joonakeskitalo.github.io/startpage/)
- [Example page's Github repoitory](https://github.com/joonakeskitalo/startpage)

<br/><br/>

### Temporary pasteboard in browser

Opening a plain `contenteditable` in a tab in a browser can act as a temporary place to paste things. Also works for images. You can bookmark this [Scratchpad](data:text/html, <html contenteditable>) to use it.

```
data:text/html, <html contenteditable>
```

<br/><br/>

### Hotkeys to instantly open and hide apps

Originally I used [Apptivate](http://www.apptivateapp.com/), but it hasn't been updated in a while, so I've made a [Hammerspoon](https://www.hammerspoon.org/) implementation. A hotkey or a chord of keystrokes is used to instantly open or hide (if active) application. It becomes second nature and one doesn't need to even think about cmd-tab, finding specific icons or windows to activate the app they need.

```
function launchOrHideBundle(bundleName)
    local currentlyActive = hs.application.frontmostApplication()
    local bundle = currentlyActive:bundleID()

    if (bundle == bundleName) then
        currentlyActive:hide()
    else
        hs.application.launchOrFocusByBundleID(bundleName)
    end
end

function launchOrHide(appname)
    local currentlyActive = hs.application.frontmostApplication()
    local name = currentlyActive:name()

    if (name == appname) then
        currentlyActive:hide()
    else
        hs.application.launchOrFocus(appname)
        local c = hs.application.get(appname)
        c:activate(true)
    end
end
```

```
hotkeys = hs.hotkey.modal.new()

hotkeys:bind({ "ctrl" }, "c", function()
    launchOrHideBundle("com.google.Chrome")
end)

hotkeys:bind({ "ctrl" }, "f", function()
    launchOrHideBundle("com.apple.finder")
end)

hotkeys:bind({ "ctrl" }, "t", function()
    launchOrHideBundle("com.googlecode.iterm2")
end)

hotkeys:bind({ "ctrl" }, "v", function()
    launchOrHideBundle("com.microsoft.VSCode")
end)

hotkeys:bind({ "ctrl" }, "§", function()
    launchOrHide("Writer")
end)

hotkeys:bind({ "ctrl" }, "l", function()
    launchOrHide("VSCodium")
end)

hotkeys:enter()
```

<br/><br/>

### macOS Dock spacers

Not every app needs a hotkey, but is useful to have in the Dock all the time, which can lead to a messy and unorganised look. macOS supports spacers in the Dock, but there is no GUI to add them. [Chris Pennington](https://chrispennington.blog/blog/add-spacer-in-macos-dock/) has a nice blog post how to add them.

<br/><br/>

### CLI aliases

Making a short alias even for a short & simple command can make the terminal experience much nicer. Some examples that I have:

```
alias "c"="code"
alias "co"="codium"
alias "cdd"="cd ~/Dev"
alias "cdh"="cd ~/.hammerspoon"
alias "l"="lazygit"
alias "ll"="ls -1alh"
alias "oo"="Open ."
alias "tree"="tree -N -I node_modules"
alias "zreload"="source ~/.zshrc"
alias "cleardns"="sudo dscacheutil -flushcache; sudo killall -HUP mDNSResponder"
```

<br/><br/>

### Alt-drag to resize windows

Feature which allows moving and resizing windows just by holding down alt (or other keys) and using left/right click for actions instead of needing to select the tiny window borders.

- **macOS:**
    - [SkyRocket](https://github.com/dbalatero/SkyRocket.spoon) Hammerspoon Spoon
    - [Easy Move-resize](https://github.com/dmarcotte/easy-move-resize)
- **Windows:**
    - [AltDrag](https://stefansundin.github.io/altdrag)
    - [AltSnap](https://github.com/RamonUnch/AltSnap)
- **Linux:** usually supported out of the box. Check your distros settings.

<br/><br/>

### Hammerspoon hotkey to toggle preset window sizes

```
hs.hotkey.bind({ "alt" }, "s", function()
    local win = hs.window.focusedWindow()
    local f = win:frame()
    local first = { w = 1300, h = 1700 }
    local second = { w = 1600, h = 1900 }

    if (f.w == first.w and f.h == first.h) then
        setWindowSize(second.w, second.h)
    else
        setWindowSize(first.w, first.h)
    end
end)
```

If you want to them to be conditional to the screen resolution, you can check the screen width for example:

```
hs.hotkey.bind({ "alt" }, "x", function()
    local screenWidth = hs.screen.mainScreen():currentMode().w
    local win = hs.window.focusedWindow()
    local f = win:frame()

    local first = {
        w = screenWidth == 3840 and 1000 or 900,
        h = screenWidth == 3840 and 1100 or 900
    }
    local second = {
        w = screenWidth == 3840 and 700 or 700,
        h = screenWidth == 3840 and 800 or 800
    }

    if (f.w == first.w and f.h == first.h) then
        setWindowSize(second.w, first.h)
    else
        setWindowSize(first.w, first.h)
    end
end)
```

<br/><br/>

### Hammerspoon menu to access specific settings quickly

If you're using multiple displays at different places and sound setups in meeting rooms, it's useful to be able to instantly access a specific setting in system preferences. They can be opened with a CLI command and Hammerspoon can run those. Example script below and it's a continuation from a previous Hammerspoon [app launcher menu post](https://joonakeskitalo.github.io/2023/07/17/custom-app-launcher-with-hammerspoon/).

```
local choices = {
    {
        text = "System Settings",
        subText = "Preferences", appName = "System Settings",
        image = hs.image.imageFromAppBundle("com.apple.systempreferences")
    },
    {   text = "System settings: sound",
        shellCommand = "open -b com.apple.systempreferences /System/Library/PreferencePanes/Sound.prefPane",
        image = hs.image.imageFromAppBundle("com.apple.systempreferences")
    },
    {   text = "System settings: network",
        shellCommand = "open -b com.apple.systempreferences /System/Library/PreferencePanes/Network.prefPane",
        image = hs.image.imageFromAppBundle("com.apple.systempreferences")
    },
    {   text = "System settings: trackpad",
        shellCommand = "open -b com.apple.systempreferences /System/Library/PreferencePanes/Trackpad.prefPane",
        image = hs.image.imageFromAppBundle("com.apple.systempreferences")
    },
    {   text = "System settings: display",
        shellCommand = "open -b com.apple.systempreferences /System/Library/PreferencePanes/Displays.prefPane",
        image = hs.image.imageFromAppBundle("com.apple.systempreferences")
    },
    {   text = "System settings: Bluetooth",
        shellCommand = "open -b com.apple.systempreferences /System/Library/PreferencePanes/Bluetooth.prefPane",
        image = hs.image.imageFromAppBundle("com.apple.systempreferences")
    },
    {   text = "System settings: Keyboard",
        shellCommand = "open -b com.apple.systempreferences /System/Library/PreferencePanes/Keyboard.prefPane",
        image = hs.image.imageFromAppBundle("com.apple.systempreferences")
    },
    {   text = "System settings: Mouse",
        shellCommand = "open -b com.apple.systempreferences /System/Library/PreferencePanes/Mouse.prefPane",
        image = hs.image.imageFromAppBundle("com.apple.systempreferences")
    },
}

local customChooser = hs.chooser.new(function(choice)
    if choice ~= nil then
        if choice.shellCommand ~= nil then
            hs.execute(choice.shellCommand)
        end
        chooser:hide()
    end
end)

local currentScreen = hs.mouse.getCurrentScreen()
local fullFrame = currentScreen and currentScreen:fullFrame()
local width = (500 / fullFrame.w) * 100

customChooser:width(width)
customChooser:rows(18)
customChooser:placeholderText("Choose app"):searchSubText(true):choices(choices)
```

<br/><br/>

### Other apps

- [Darktable](https://www.darktable.org/): image processing app and Lightroom alternative
- [DeskPad](https://github.com/Stengo/DeskPad): virtual monitor that is useful for screensharing
- [Espanso](https://espanso.org/): text expansion
- [FSNotes](https://fsnot.es/): good note taking app that saves files as plain text files, has folder, tag & Git support
- [IINA](https://iina.io/): mpv with nice GUI for macOS
- [Karabiner elements](https://karabiner-elements.pqrs.org/): keyboard customization
- [Keka](https://www.keka.io/en/): create and extract archive files, inlcuding 7z
- [MonitorControl](https://github.com/MonitorControl/MonitorControl): adjust non-Apple monitor display brightness & contrast via hotkeys & GUI
- [Monodraw](https://monodraw.helftone.com/): ASCII diagramming tool
- [NameChanger](https://mrrsoftware.com/namechanger/): bulk file & folder renamer
- [OBS](https://obsproject.com/): streaming and recording software. Has a virtual webcam feature and is useful if you need to present something. See previous [*demoing mobile apps*](https://joonakeskitalo.github.io/2024/06/08/demoing-mobile-apps/) -post
- [Phoenix Slides](https://blyt.net/phxslides/): folder based image browser
- [Radio Silence](https://radiosilenceapp.com/): block network traffic for specific apps. Not as configurable as Little Snitch or LULU, but easy to use & cheap
- [Stats](https://github.com/exelban/stats): show system usage statistics in the menubar
- [Tiny Player](https://www.catnapgames.com/tiny-player-for-mac/): simple audio player
- **CLI**
    - [nnn](https://github.com/jarun/nnn): file browser & manager, which has completely replaced usage of `cd` for me. The [wiki](https://github.com/jarun/nnn/wiki) is quite extensive and remember to configure [cd-on-quit](https://github.com/jarun/nnn/wiki/Basic-use-cases#configure-cd-on-quit).
    - [lazygit](https://github.com/jesseduffield/lazygit) terminal Git client, with really good UI. Has made using Git actually comfortable and fast for me.