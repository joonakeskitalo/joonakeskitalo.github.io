---
layout: post
title: "Resizing images via CLI on macOS"
featured: false
---

macOS has a built-in scriptable image processing system ([sips](https://ss64.com/osx/sips.html)), which can be used to query and modify raster images.  I made a small shell function that takes the filename, wanted long edge length in pixels and compression quality percentage as arguments.  It will save a file with the long edge length and quality percentage appended to the original name.

```sh
# imgresize [file] [longEdgeInPixels] [qualityPercentage]
function imgresize() {
    sips -Z ${2} -s format jpeg --setProperty formatOptions ${3} ${1} --out "${1%.*}_${2}x_q${3}.jpg"
}
```

<br/>

```sh
# Example

# Resize single image with long edge of 2500px and compression quality of 95%
imgresize example.jpg 2500 95

# Bulk resize all JPG images in a directory
for file in *.jpg; do imgresize $file 2500 95; done
```

<br/>

```sh
# sips examples

# Convert a jpeg image into a .png image
$ sips -s format png oldpic.jpg --out newpic.png

# Convert a folder filled with jpgs to pngs:
$ for file in *.jpg; do sips -s format png $file --out $file.png

# Resize an image to 600 pixels wide by 300 pixels tall
$ sips original.jpg -z 300 600 --out new.jpg

# Get the size of an image (dots per inch)
$ sips -g dpiHeight -g dpiWidth mini.jpg
/Users/simon/Pictures/mini.jpg
dpiHeight: 72.000
dpiWidth: 72.000
```