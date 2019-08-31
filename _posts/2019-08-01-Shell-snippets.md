---
layout: post
title: Shell snippets
featured: false
tags: shell
---

<!--more-->

Watch Raspberry Pi temperature

```sh
watch -n 1 /opt/vc/bin/vcgencmd measure_temp
```

<br/>

Remove duplicates with AWK

```sh
awk '{$1=$1}1'  | awk ' !x[$0]++'
```

<br/>

Display amount of files in folders and sort from highest to lowest

```sh
du -a | cut -d/ -f2 | sort | uniq -c | sort -nr
```

<br/>

Prepend to a file

```sh
awk '{print "TEXTHERE" $0}' file
```

<br/>

Exiftool: erase all metadata from images

```sh
exiftool -r -all=  -overwrite_original *
```

<br/>
checkExtension

```sh
checkExtension(){
# Fixes wrong image extension for files

find . -type f -iname '*.gif' -print0 -o -iname '*.jpg' -print0 -o -iname '*.jpeg' -print0 -o -iname '*.png' -print0 | while IFS= read -r -d $'\0' f; do
checkFile=$(file -b --mime-type "$f")

  if [[ $checkFile == image/gif && "${f}" != "${f%.*}.gif" ]]; then
    mv -v -- "${f}" "${f%.*}.gif"
  fi

  if [[ $checkFile == image/png && "${f}" != "${f%.*}.png" ]]; then
    mv -v -- "${f}" "${f%.*}.png"
  fi

  if [[ $checkFile == image/jpeg && "${f}" != "${f%.*}.jpg" ]]; then
    mv -v -- "${f}" "${f%.*}.jpg"
  fi
done
}
```
<br/>

Set iTerm2 tab name

```sh
function t {
    echo -ne "\033]0;"$*"\007"
}
```

<br/>
Aliases

```sh
alias b="bbedit"
alias oo="Open ."
alias python='python3'
alias gotop='~/.joona/gotop'
alias "ll"="ls -1alh"
alias "t2"="tree -L 2"
alias "tf"="tree -f"
alias "nnn"="~/.joona/nnn"
alias "nnnvi"="~/.joona/nnnvi"
alias brewup='brew update; brew upgrade; brew cleanup; brew doctor'
alias ce="cat > /dev/null"
```
<br/>
from .zshrc

```sh
# Fzy open

cdf() {
  cd "$(find . -type d | fzy)"
}

ff() {
	open "$(find . -type f | fzy)"
}

fd() {
	open "$(find . -type d | fzy)"
}

fb() {
	bbedit "$(find . -type d | fzy)"
}

n()
{
    export NNN_TMPFILE=${XDG_CONFIG_HOME:-$HOME/.config}/nnn/.lastd

    nnn -d "$@"

    if [ -f $NNN_TMPFILE ]; then
            . $NNN_TMPFILE
            rm $NNN_TMPFILE
    fi
}

# Delete .DS_Store files
rmd() {
	find . -name ".DS_Store" -depth
}

rmds() {
	find . -name ".DS_Store" -depth -exec rm {} \;
}

gen() {
	a=$(pwgen -Bs "$1" 1)
	printf $a|pbcopy
    	printf "$a - Copied to clipboard"
}

jc() {
	a=$(md5 -q "$1")
	b=$(shasum -a 1 $1 | cut -d ' ' -f 1)
	c=$(shasum -a 256 $1 | cut -d ' ' -f 1)
	e=$(file $1)
	f=$(ls -lh $1)
	echo '\t' $1
	echo '\t' $f
	echo md5 '\t' $a
	echo SHA1 '\t' $b
	echo SHA256 '\t' $c
	echo FILE '\t' $e
}

f() {
	data="$(find . -type f)"
	folders="$(find . -type d | wc -l)"

	files=$(echo $data | wc -l)
	jpg=$(echo $data | grep .jpg | wc -l)
	png=$(echo $data | grep .png | wc -l)
	gif=$(echo $data | grep .gif | wc -l)
	mp4=$(echo $data | grep .mp4 | wc -l)
	webm=$(echo $data | grep .webm | wc -l)
	mkv=$(echo $data | grep .mkv | wc -l)

	echo Files '\t' $files
	echo Dir '\t' $folders
	echo jpg '\t' $jpg
	echo png '\t' $png
	echo gif '\t' $gif
	echo mp4 '\t' $mp4
	echo webm '\t' $webm
	echo mkv '\t' $mkv
}

```
<br/>
Convert gifs to h264 mp4

```sh
find . -type f -iname "*.gif" -exec ffmpeg -i {} -pix_fmt yuv420p -vf "pad=ceil(iw/2)*2:ceil(ih/2)*2" {}.mp4 \;
```

<br/>
Install tools for macOS

```sh
xcode-select -install

/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"

brew install wget curl ripgrep tree nmap watch exiftool imagemagick bash fzy cheat detox fdupes iperf3 pwgen python rust sqlite ffmpeg youtube-dl tvnamer
```