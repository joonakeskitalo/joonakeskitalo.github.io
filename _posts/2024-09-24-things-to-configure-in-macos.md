---
layout: post
title: "Things to configure in macOS"
featured: false
---

### *Almost* mandatory apps to have

- [Hammerspoon](https://www.hammerspoon.org/)
- [Mac Mouse Fix](https://github.com/noah-nuebling/mac-mouse-fix)
- [Stats](https://github.com/exelban/stats)

<br/>

### Finder

- Settings -> Advanced -> Show all filename extensions
- Settings -> Advanced -> *When performing a search: search the current folder*
- Settings -> Sidebar -> Add user and external disks to the sidebar
- View -> Show path bar
- View -> Show status bar

<br/>

### Settings

- Network -> Firewall -> enable
- Keyboard -> *Key repeat rate* to fast
- Keyboard -> *Delay until repeat* to short
- Keyboard -> Keyboard shortcuts -> Function keys -> *Use F1, F2, etc. keys as standard function keys*
- Keyboard -> Keyboard shortcuts -> Keyboard -> Update the *Move focus to next window* -hotkey since it's hard to access on ISO nordic layout by default
- Keyboard -> Keyboard shortcuts -> Mission control -> *Mission control* to `opt+tab`
Keyboard -> Keyboard shortcuts -> Mission control -> *Application windows* to `shift+opt+tab`
- Mouse -> Tracking speed to slowest and adjust mouse DPI. This seems to have none or at least very little mouse acceleration

<br/>

### Other

**[Remove delay from Dock autohide](https://macos-defaults.com/dock/autohide-delay.html)**

```
defaults write com.apple.dock "autohide-delay" -float "0" && killall Dock
```

Reset to default:

```
defaults delete com.apple.dock "autohide-delay" && killall Dock
```

<br/>

**[Set the menubar item spacing](https://apple.stackexchange.com/questions/406316/can-the-spacing-of-menu-bar-apps-be-modified-in-macos-big-sur-and-later/465674#465674)**

```
defaults -currentHost write -globalDomain NSStatusItemSpacing -int 6
defaults -currentHost write -globalDomain NSStatusItemSelectionPadding -int 12
```

Reset back to defaults:
```
defaults -currentHost delete -globalDomain NSStatusItemSelectionPadding
defaults -currentHost delete -globalDomain NSStatusItemSpacing
```

<br/>

**Add Spacers in the macOS Dock**<br/>
https://chrispennington.blog/blog/add-spacer-in-macos-dock/