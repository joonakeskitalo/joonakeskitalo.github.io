---
layout: post
title: "App & script launcher with Hammerspoon"
featured: false
image: "/images/posts/2023-07-17_app_launcher.png"
---

Recently had a need for a quick and handy way for opening applications and folders. While Spotlight on macOS is good, it can sometimes query from too large of a data set and not produce wanted results or that the wanted result wouldn't exist in the results in the first place (ie. "run this command or script" type of use-case).

With the `chooser` interactive tool in Hammerspoon, you can search and choose from a predetermined or dynamically generated list of options. Since it's querying from a small set of data instead from a possible index of terabytes of files, it is extremely fast.

- Mandatory:
  - `text` - A string or hs.styledtext object that will be shown as the main text of the choice
- Optional keys:
  - `subText` - A string or hs.styledtext object that will be shown underneath the main text of the choice
  - `image` - An hs.image image object that will be displayed next to the choice
  - `valid` - A boolean that defaults to true, if set to false selecting the choice will invoke the invalidCallback method instead of dismissing the chooser
  - Any other keys that will be passed to the completion callback.

Example implementation:

```{% raw %}
hs.hotkey.bind({"rightalt"}, "-", function()
    local choices = {{
        text = "System Settings",
        subText = "System preferences",
        appName = "System Settings"
    }, {
        text = "Writer",
        appName = "Writer"
    }, {
        text = "Google Chrome",
        appName = "Google Chrome"
    }, {
        text = "Firefox",
        appName = "Firefox"
    },  {
        text = "Visual Studio Code",
        subText = "vscode",
        appName = "Visual Studio Code"
    }, {
        text = "FSNotes",
        appName = "FSNotes"
    }, {
        text = "Reminders",
        appName = "Reminders"
    }, {
        text = "Calendar",
        appName = "Calendar"
    }, {
        text = "Finder: Library",
        shellCommand = "Open ~/Library"
    }, {
        text = "Finder: Documents",
        shellCommand = "Open ~/Documents"
    }, {
        text = "Finder: FSNotes",
        shellCommand = "Open ~/Documents/FSNotes"
    }, {
        text = "Finder: Downloads",
        shellCommand = "Open ~/Downloads"
    },
    {
        text = "System settings: sound",
        shellCommand = "open -b com.apple.systempreferences /System/Library/PreferencePanes/Sound.prefPane"
    }}

    local chooser = hs.chooser.new(function(choice)
        if choice ~= nil then
            if choice.appName ~= nil then
                hs.application.launchOrFocus(choice.appName)
            end

            if choice.shellCommand ~= nil then
                hs.execute(choice.shellCommand)
            end

            chooser:hide()
        end
    end)

    chooser:width(25)
    chooser:placeholderText("Choose app"):searchSubText(true):choices(choices):show()
end)
{% endraw %}```

Since the `chooser` only supports basic Lua types, I had to just name the keys and act on them with if/else the callback function. Would be nice to be able to pass a function, but if the list is not too large, it's fine and works.

<br />

This can also be used for other custom functions, such as menu items of an application. My common usecase is to list and show all browser profiles I have (work, clients, personal etc.) and it's really convenient to open/change browser window to specific profile just by pressing F1 and typing 1-3 letters of the profile name.

```{% raw %}
local chromeProfileChoices = {
    { text = "Profile: Browse", menuItem =  {"Profiles", "Browse"} },
    { text = "Profile: Personal", menuItem = {"Profiles", "Personal"} },
    { text = "Profile: Social", menuItem = {"Profiles", "Social"} },
    { text = "Profile: Work", menuItem = {"Profiles", "Work"} },
    { text = "Profile: Client A", menuItem = {"Profiles", "Client A"} },
    { text = "Profile: Client B", menuItem = {"Profiles", "Client B"} },
}

local chromeProfileChooser = hs.chooser.new(function(choice)
    if choice ~= nil then
        if choice.menuItem ~= nil then
            local activeApp = hs.appfinder.appFromName("Google Chrome")
            activeApp:selectMenuItem(choice.menuItem)
        end
    end
end)

chromeProfileChooser:width(25)
chromeProfileChooser:rows(15)
chromeProfileChooser:placeholderText("Choose profile")
    :searchSubText(true)
    :choices(chromeProfileChoices)

chromeHotkeys:bind({}, "F1", function()
    chromeProfileChooser:query("")
    chromeProfileChooser:show()
end)
{% endraw %}```

<br />
**Links:**

- [Hammerspoon](https://www.hammerspoon.org/)
- [Hammerspoon docs](https://www.hammerspoon.org/docs/index.html)
- [Hammerspoon docs: hs.chooser](https://www.hammerspoon.org/docs/hs.chooser.html)
