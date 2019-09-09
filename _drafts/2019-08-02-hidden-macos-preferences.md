---
layout: post
title: "Hidden macOS preferences"
tags: macOS
---

<!--more-->


Disable Dock autohide delay:

```
defaults write com.apple.dock autohide-time-modifier -float 0.15;killall Dock

defaults write com.apple.dock autohide-delay -float 0; killall Dock
```

<br/>
Add a spacer to Dock (application side):

```
defaults write com.apple.dock persistent-apps -array-add '{tile-data={}; tile-type="spacer-tile";}'
```

<br/>
Add a spacer to Dock (document side):

```
defaults write com.apple.dock persistent-others -array-add '{tile-data={}; tile-type="spacer-tile";}'
```

<br/>
In 10.14 Mojave, only use dark mode for menubar and Dock. First set mode to light, run the commands below, log out, log back in and then set appearance to dark.

```
defaults write -g NSRequiresAquaSystemAppearance -bool Yes

defaults write com.apple.notificationcenterui NSRequiresAquaSystemAppearance -bool No
```