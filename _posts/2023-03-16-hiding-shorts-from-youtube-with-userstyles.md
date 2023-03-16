---
layout: post
title: "Hiding Shorts from YouTube with user styles"
featured: false
---

Shorts can be hidden from YouTube with the following CSS and the
Stylus browser extension ([Firefox](https://addons.mozilla.org/en-US/firefox/addon/styl-us/), [Chrome](https://chrome.google.com/webstore/detail/stylus/clngdbkpkpeebahjckkjfobafhncgmne?hl=en)). You can still access shorts on the channel page, but they will be hidden from subscriptions & home pages.

```css
/* Shorts in subscription feed */
#items.ytd-grid-renderer
  > ytd-grid-video-renderer.ytd-grid-renderer:has([href*="/shorts/"]) {
  display: none;
}

/* Sidebar link to shorts */
[title*="Shorts"] {
  display: none !important;
}

/* Dismissable shorts section on home page */
[is-shorts] {
  display: none;
}
```
