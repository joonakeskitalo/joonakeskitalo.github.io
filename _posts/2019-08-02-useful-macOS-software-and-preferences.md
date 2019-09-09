---
layout: post
title: "Useful macOS software and preferences"
tags: macOS
---

<!--more-->


## Hidden preferences

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


___

## Software


- **Usability improvements**
	- [Keyboard Maestro](https://www.keyboardmaestro.com/main/) - Macros, hotkeys, GUIs etc. 
	- [Divvy](http://mizage.com/divvy/) - Window mover & resizer, customisable hotkeys and grid to set window size and location.
	- [SensibleSideButtons](https://sensible-side-buttons.archagon.net) - fix mouse 5 & 4 usage on macOS.
	- [MacsFanControl](https://www.crystalidea.com/macs-fan-control) - set a custom fan curve & temperature limits on macOS
	- [Littleipsum](http://dustinsenos.com/littleIpsum) - copy customisable amount of filler text
	- [XMenu](https://www.devontechnologies.com/apps/freeware) - add items to (apps, documents, other folders & files) menubar
	- [KeepingYouAwake](https://github.com/newmarcel/KeepingYouAwake) - prevent system sleep for a certain amount of time
	- [MenuMeters](https://github.com/yujitach/MenuMeters) - show CPU, memory & network usage in menubar
	- [Dozer](https://github.com/Mortennn/Dozer) - hide menubar icons
- **Media & graphics**
	- [Fileloupe](https://www.fileloupe.com/) - preview and browse files
	- [TinyPlayer](http://www.catnapgames.com/tiny-player-for-mac/) - tiny audio player
	- [IINA](https://github.com/lhc70000/iina) - mpv with a nice native GUI
	- [Mpeg streamclip](http://www.squared5.com/) - encode video to a different format
	- [Handbrake](https://handbrake.fr/) - encode video to a different format
- **Office**
	- [PDF Expert](https://pdfexpert.com/) - PDF viewer with markup and editing functionality (macOS' Preview.app still has blurry font rendering)
	- [iA Writer](https://ia.net/writer) - good markdown editor with library & custom template support. The templates are simple HTML & CSS files and you can embed JavaScript into them for extra features, such as code highlighting.
- **Development**
	- [iTerm2](https://www.iterm2.com/) - shell client
	- [VScode](https://code.visualstudio.com) - Text editor
	- [BBedit](https://www.barebones.com/products/bbedit/) - Text editor
	- [Sequel Pro](https://www.sequelpro.com/) - SQL client
- **Files**
	- [Keka](http://www.kekaosx.com/en/) - compress and extract common compressed files (7z, gzip, tar, zip)
	- [NameChanger](https://mrrsoftware.com/namechanger/) - batch rename items
	- [SuperDuper](http://www.shirt-pocket.com/SuperDuper/SuperDuperDescription.html) - create a full image file of a drive or a bootable backup
	- [AppCleaner](https://freemacsoft.net/appcleaner/) - remove preferences, cache etc. when deleting an application
- **Other**
	- [NetNewsWire](https://ranchero.com/netnewswire/) - open source RSS reader

___

## Screenshots

![NetNewsWire]({{site.baseurl}}/images/posts/rss_1.png) NetNewsWire

![Keyboard Maestro]({{site.baseurl}}/images/posts/scr_vFo3gRkhN3ry_005.png) Keyboard Maestro

![iA Writer]({{site.baseurl}}/images/posts/scr_vFo3gRkhN3ry_002.png) iA Writer

![LittleIpsum]({{site.baseurl}}/images/posts/scr_vFo3gRkhN3ry_001.png) LittleIpsum

![Divvy]({{site.baseurl}}/images/posts/scr_vFo3gRkhN3ry_003.png) Divvy

![MenuMeters]({{site.baseurl}}/images/posts/scr_vFo3gRkhN3ry_004.png) MenuMeters

