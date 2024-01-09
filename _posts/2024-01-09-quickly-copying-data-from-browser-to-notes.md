---
layout: post
title: "Rude Goldberg machine of quickly copying data from browser to notes"
featured: false
---

For some time I've had a bookmarklet that copies the title of the webpage and it's URL to the clipboard to store more details about the link in notes, since a Hacker News link with an ID doesn't tell anything about it's content:

```
https://news.ycombinator.com/item?id=38890692
vs
The best way to get unstuck | Hacker News - https://news.ycombinator.com/item?id=38890692
```

<br/>

**TLDR how this will work:**

1. Hammerspoon calls bookmarklet by it's macOS menu item name
2. Browser executes bookmarklet, which copies wanted data to clipboard
3. Hammerspoon activates notes app
4. Hammerspoon pastes text
5. Hammerspoon re-activates browser

<br/>

**Hammerspoon Lua function**

The `{"Bookmarks", "copy"}` is the path from the macOS menu to the bookmarklet you want to execute, so change it to the one you've made and named:

```
chromeHotkeys:bind({}, "F4", function()
    hs.application.launchOrFocusByBundleID("com.google.Chrome")

    local activeApp = hs.appfinder.appFromName("Google Chrome")
    local str_default = {"Bookmarks", "copy"}
    activeApp:selectMenuItem(str_default)
    hs.timer.usleep(20000)

    hs.application.launchOrFocus("Notes")
    hs.timer.usleep(20000)
    hs.eventtap.keyStroke({}, "return", 100)
    hs.eventtap.keyStroke({"cmd"}, "v", 100)
    hs.eventtap.keyStroke({}, "return", 100)
    hs.timer.usleep(20000)

    hs.application.launchOrFocusByBundleID("com.google.Chrome")
end)
```
<br/>
`hs.timer.usleep` is used to have enough time for the application to be active and ready to use.

<br/>

**Example bookmarklet to copy page URL and title**

```
(() => {
  const copy = (text) => {
    const textArea = document.createElement("textarea");
    textArea.value = text;
    textArea.style.top = "0";
    textArea.style.left = "0";
    textArea.style.position = "fixed";
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    try {
      document.execCommand("copy");
    } catch (err) {
      console.error("Copying err", err);
    }

    document.body.removeChild(textArea);
  };

  copy(`${window.location.href} - ${document.title}`);
})();
```
<br/>
A nice [bookmarklet maker](https://caiorss.github.io/bookmarklet-maker/) by Caio Rordrigues can be used to automatically URI encode and wrap the function into an IIFE. You can make more useful bookmarklets to copy more data from the page, such as post or listing details etc.
