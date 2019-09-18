---
layout: post
title: "Creating a browser start page"
featured: false
image: '/images/posts/browser_start_page_preview.png'
---


If you use and work on multiple devices with different platforms and browsers, syncing bookmarks and pages can be quite tedious. The goal of this page is to be a starting point on each device with most common pages & bookmarks. <!--more-->You can have the site files locally with a browser bookmark or homepage set to that, host it on your own server or on Github Pages.



**Features:**

- Filter bookmarks
- Search for Google (local and English versions, if you travel a lot this is useful), DuckDuckGo, Wikipedia, Hinta.fi and YouTube.
- Hotkeys for input fields (in order from 1 to 7). This functionality uses [Mousetrap](https://github.com/ccampbell/mousetrap) library.

<!---->

**Download**

- [Preview of the page can be found here](https://joonakeskitalo.github.io/browser-start-page/)
- [Repository of the demo](https://github.com/joonakeskitalo/browser-start-page)
- [Blank version to be used as your template](https://github.com/joonakeskitalo/browser-start-page/tree/blank)

___

To add your own pages, just edit the `index.html` file and add your own links. For easy copy pasting, you can use the snippet below:

```
<li><a class="button" href="UrlHere">NameHere</a></li>
```

___

**Parse Chrome's Bookmarks.html file into this template**  
Export bookmarks from Chrome into the same folder as the script below and run the script. You can also just copy, paste & run it straight in your shell client.

```
#!/usr/bin/env bash

cat bookmarks.html | \
sed -e '1,6d' | \
sed -e 's/ICON=.*"//' | \
sed -e 's/ADD_DATE=.*"//' | \
awk '{gsub("<DT>","");print}' | \
awk '{gsub("</DT>","");print}' | \
awk '{gsub("<DL>","");print}' | \
awk '{gsub("</DL>","");print}' | \
awk '{gsub("<p>","");print}' | \
awk '{gsub("<A","<li><a class=\"button\"");print}' | \
awk '{gsub("</A>","</a></li>");print}' | \
sed 's/^[[:space:]]*//' | \
awk NF > out.txt
```