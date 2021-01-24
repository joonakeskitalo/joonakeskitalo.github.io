---
layout: post
title: "Software Showcase: nnn"
featured: false
image: "https://user-images.githubusercontent.com/35720395/105626805-fd8e2f00-5e3a-11eb-99d4-1442549e5bd5.png"
---

**nnn** ([repository](https://github.com/jarun/nnn), [releases](https://github.com/jarun/nnn/releases), [wiki](https://github.com/jarun/nnn/wiki)) is a fast terminal file manager written in C and can run on pretty much every platform. While it would at first seem like terminal tools are only meant for developers, a nice file manager can be useful for everyone. Quickly sorting files and directories based on size, filetype…, filter by string or regex, open item in a specific application etc. are always useful.

For example, here are the key presses listed for me to open a repository in vscode from my git directory and leaving the shell in that directory:

```
n       open nnn
b       enter bookmark selection
g       select bookmark (in this case my git repo)
↕       up/down arrow keys to select directory
;       enter plugin selection mode (plugins can also be specific commands)
c       open selected directory in vscode (`export NNN_PLUG=';c:_code $nnn*;` in .zshrc)
→       enter directory
q       quit and cd to current directory, leaving the shell prompt in the project folder
```

___

*From readme:*

> nnn can analyze disk usage, batch rename, launch apps and pick files. The plugin repository has tons of plugins and documentation to extend the capabilities further e.g. preview, (un)mount disks, find & list, file/dir diff, upload files.

- Instantly load, sort, filter thousands of files
- Type to navigate with automatic dir selection
- List input stream and pick entries to stdout or file
- find/fd/grep/ripgrep/fzf from nnn and list in nnn
- Never lose context - start where you quit
- Mount any cloud storage service in a few keypresses
- Select files from anywhere (not just a single dir)
- Unlimited bookmarks, plugins, cmds with custom hotkeys
- Write a plugin in any language you know
- Edit and preview markdown, man page, html
- Open a file and auto-advance to the next
- Filter filtered entries, export list of visible files
- Configure the middle mouse click to do anything
- Fuzzy search subtree and open a file (or its parent dir)
- Load four dirs with custom settings at once
- Notifications on cp, mv, rm completion
- Auto-sync selection to system clipboard
- Access selection from another instance of nnn
- Open text files detached in another pane/tab/window
- Mount and modify archives
- Create files/dirs/duplicates with parents (like mkdir -p)
- Toggle hidden with ., visit HOME with ~, last dir with -
- Mark a frequently visited dir at runtime
- Sort by modification, access and inode change time
- Compile out/in features with make variables

___

**Hotkeys**:

```plain
 NAVIGATION
         Up k  Up                PgUp ^U  Scroll up
         Dn j  Down              PgDn ^D  Scroll down
         Lt h  Parent            ~ ` @ -  HOME, /, start, last
     Ret Rt l  Open                    '  First file/match
         g ^A  Top                     .  Toggle hidden
         G ^E  End                     +  Toggle auto-advance
         b ^/  Bookmark key            ,  Mark CWD
          1-4  Context 1-4       (Sh)Tab  Cycle context
          Esc  Send to FIFO           ^L  Redraw
            Q  Pick/err, quit         ^G  QuitCD
            q  Quit context      2Esc ^Q  Quit
            ?  Help, conf
 FILTER & PROMPT
            /  Filter            Alt+Esc  Clear filter & redraw
          Esc  Exit prompt            ^L  Clear prompt/last filter
           ^N  Toggle type-to-nav
 FILES
         o ^O  Open with...            n  Create new/link
         f ^F  File details            d  Detail mode toggle
           ^R  Rename/dup              r  Batch rename
            z  Archive                 e  Edit file
            *  Toggle exe              >  Export list
     Space ^J  (Un)select       m ^Space  Mark range/clear sel
            a  Select all              A  Invert sel
         p ^P  Copy sel here        w ^W  Cp/mv sel as
         v ^V  Move sel here           E  Edit sel
         x ^X  Delete
 MISC
        Alt ;  Select plugin           =  Launch app
         ! ^]  Shell                   ]  Cmd prompt
            c  Connect remote          u  Unmount remote/archive
         t ^T  Sort toggles            s  Manage session
            T  Set time type           0  Lock
```

**Program options**:

```
usage: nnn [OPTIONS] [PATH]

The missing terminal file manager for X.

positional args:
  PATH   start dir/file [default: .]

optional args:
 -a      auto NNN_FIFO
 -A      no dir auto-select
 -b key  open bookmark key (trumps -s/S)
 -c      cli-only NNN_OPENER (trumps -e)
 -C      earlier colorscheme
 -d      detail mode
 -D      dirs in context color
 -e      text in $VISUAL/$EDITOR/vi
 -E      use EDITOR for undetached edits
 -f      use readline history file
 -F      show fortune
 -g      regex filters [default: string]
 -H      show hidden files
 -J      no auto-proceed on select
 -K      detect key collision
 -l val  set scroll lines
 -n      type-to-nav mode
 -o      open files only on Enter
 -p file selection file [stdout if '-']
 -P key  run plugin key
 -Q      no quit confirmation
 -r      use advcpmv patched cp, mv
 -R      no rollover at edges
 -s name load session by name
 -S      persistent session
 -t secs timeout to lock
 -T key  sort order [a/d/e/r/s/t/v]
 -u      use selection (no prompt)
 -U      show user and group
 -V      show version
 -w      place HW cursor on hovered
 -x      notis, sel to system clipboard
 -h      show help
```

<br />

Example of my configuration in `.zshrc`:

```plain
export NNN_BMS='d:~/Desktop;g:~/GitRepos;h:~;'
export NNN_COLORS='4444'
export NNN_OPENER="Open"
export NNN_PLUG='n:-_nano $nnn*;o:_Open $nnn*;m:_mate $nnn*;c:_code $nnn*;f:_open -a Fileloupe $nnn*;e:_vim $nnn*;b:_open -a Bbedit $nnn*;p:-_less $nnn*;'
export NNN_QUOTE_ON=1
export NNN_TMPFILE='/Volumes/RAM/Caches/nnntemp'
```

*Version 3.5 was the latest version as of writing this post.*
