---
layout: post
title: "Modal hotkeys in Hammerspoon"
featured: false
---

Recently I've been playing around with using Hammerspoon for window management in macOS and it works quite nicely & is pleasant to use. The problem I caused by myself for myself is that I'm running out of available hotkeys that don't require many modifier keys to use on the left side of the keyboard.

In Hammerspoon, hotkeys can be bound to a [modal](https://www.hammerspoon.org/docs/hs.hotkey.modal.html) environment and the enabled state of that can be toggled on and off. Since the hotkeys are only active when the modal state is enabled, they don't necessarily require modifier keys to use.

In the example below, ctrl+w enables the modal state and couple hotkeys are bound to the modal.

```lua
local editMode = hs.hotkey.modal.new()
local editModeActive = false

enterEditMode = hs.hotkey.bind({"ctrl"}, "w", function()
    if (editModeActive == true) then
        editModeActive = false
        editMode:exit()
        hs.alert.show("Edit mode DISABLED", hs.alert.defaultStyle, hs.screen.mainScreen(), 0.25)
    elseif (editModeActive == false) then
        editModeActive = true
        editMode:enter()
        hs.alert.show("Edit mode ACTIVATED", hs.alert.defaultStyle, hs.screen.mainScreen(), 0.25)
    end
end)

-- Note: replace the … with your own function
editMode:bind({}, "1", function() … end)
editMode:bind({}, "2", function() … end)
editMode:bind({}, "3", function() … end)
```
