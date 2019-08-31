---
layout: post
title: "Raspberry Pi 3B and 3B+ benchmarks & power usage"
featured: false
tags: Raspberry Pi
---


*Excerpt from the [full post]({% post_url 2019-08-27-Raspberry-Pi-Media-PC %}) which is in finnish*
<!--more-->

Results from CPU stress test and video playback tests on the Raspberry Pi. The command listed below was used for the stress test, Kodi for video playback and a power meter connected between the wall socket and PSU was used to measure power usage.

```
while true; do vcgencmd measure_clock arm; vcgencmd measure_temp; sleep 10; done& stress -c 4 -t 600s
```

|  | 3B CPU °C | 3B W | 3B+ CPU °C | 3B+ W |
|:--|:--|:--|:--|:--|
| Lepotila | 41,9 | 2,0 | 45,1 | 2,6 |
| CPU Stressitesti | 71,4 | 4,3 | 63,4 | 5,9 |
| H264 1080p 5 mbps | 44 | 2,1 | 46,2 | 2,8 |
| H264 1080p 55 mbps | 48,3 | 2.3 | 47,2 | 3,2 |
| H265 1080p 3 mbps | 54,2 | 3,5 | 52,6 | 4,7 |
| H265 1080p 5 mbps | 61,2 | 3,8 | 56,9 | 4,9 |