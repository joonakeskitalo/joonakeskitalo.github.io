---
layout: post
title: "EMUI 9.1 update benchmarks on Honor Play"
---

Here are some benchmarks on Honor Play before and after the EMUI 9.1 update.  With EMUI 9.1, Huawei changed the filesystem to their own one called EROFS, which they say increases the file performance by ~20% and my benchmarks showed it increased by 16,30%.

Here is the [whitepaper](https://www.usenix.org/system/files/atc19-gao.pdf) and [presentation slides](https://www.usenix.org/sites/default/files/conference/protected-files/atc19_slides_gao.pdf) about EROFS.

**3D Mark - Sling Shot Extreme - OpenGL ES**

| Version  | Graphics | Physics | Overall | 
|----------|----------|---------|---------| 
| EMUI 9.0 | 1502     | 2001    | 1590    | 
| EMUI 9.1 | 1687     | 2118    | 1767    | 
| Δ%       | 10,97    | 5,52    | 10,02   | 

<br/>

**3D Mark - Sling Shot Extreme - Vulkan**

| Version  | Graphics | Physics | Overall | 
|----------|----------|---------|---------| 
| EMUI 9.0 | 1627     | 2115    | 1715    | 
| EMUI 9.1 | 1669     | 2060    | 1742    | 
| Δ%       | 2,52     | -2,67   | 1,55    | 

<br/>

**PassMark**

| Test        | EMUI 9.0 | EMUI 9.1 | Δ%    | 
|-------------|----------|----------|-------| 
| System      | 9735     | 9767     | 0,33  | 
| CPU         | 174280   | 180700   | 3,55  | 
| Memory      | 8701     | 8628     | -0,85 | 
| Disk        | 62108    | 74206    | 16,30 | 
| 2D Graphics | 6605     | 6738     | 1,97  | 
| 3D Graphics | 2583     | 2564     | -0,74 | 
