---
layout: post
title: "Tech toolkit"
featured: false
---

<!--more-->
Here are some useful things to have when working with IT equipment.

![]({{site.baseurl}}/images/posts/jAiraT7PyxkN.jpg)

### Hardware

**CompuCleaner IT Duster**  
The CompuCleaner duster has a 500W (or 550W on the Pro version) motor that blows air. The volume of air much larger  than a regular can of compressed gas dusters and it takes about 30 seconds to fully clean a regular desktop computer. It can also be used to dust other things as heating radiators, grills on the back of the fridge, vacuum cleaner filters etc. There is a good review by Cameron Grey on [YouTube](https://www.youtube.com/watch?v=hKxz8kwZjak) and discussion in Finnish on the io-[tech forum](https://bbs.io-tech.fi/threads/it-dusters-compucleaner-ilmapuhdistuslaite.157175).

**Xiaomi Wiha or similar screwdriver toolkit**  
The Xiaomi Wiha is nice for carrying around due to it's small size, but I would recommend getting a different kit for the office and preferably with a larger handle with grips (you can't get much torque with the Wiha if you have to use it for bigger screws). I have a cheap toolset from [Jakemy](https://www.jakemy.com/52-in-1-model-and-electronics-screwdriver-tool-set-jm-8150_p80.html) that costs ~15€ and has lasted years without the bits stripping or breaking.

**Magnetic disassembly tray**  
Not mandatory, but it's nice to have screws stay on their place when dissasmbling laptops with different length screws.

**USB to Ethernet adapter**  
Sometimes the OS might not have the wireless card drivers installed by default, wireless performance might be poor due to bad hardware or environmental conditions, so having an option for wired connection is nice.

___

### Software

**Live boot Linux distribution USB drive**  
For quick file recovery or diagnosing if the problem is caused by hardware or software. These can be written to the USB with dd, [Etcher](https://www.balena.io/etcher/) or [Rufus](https://rufus.ie/). You can use your distribution of choice, but generally [Ubuntu](https://ubuntu.com/download/desktop) and Ubuntu-based distributions have quite good and updated hardware support. [Lubuntu](https://lubuntu.net/) has a lighter LXQt desktop environment.

- Windows 10: You can download the media creation tool or the ISO from [Microsoft's website](https://www.microsoft.com/fi-fi/software-download/windows10)
- [Guide](https://support.apple.com/en-us/HT201372) to creating macOS install USB (or you can boot into network recovery by holding down CMD+R during boot, but this will install the version of the OS that the computer shipped with).

**Other useful boot medias:**

- [BitDefender Rescue CD](https://www.bitdefender.com/support/how-to-create-a-bitdefender-rescue-cd-627.html)
- [Hiiren's Boot CD PE](https://www.hirensbootcd.org/)

<br/>

**Chocolatey package manager**  
[Chocolatey](https://chocolatey.org/) is a package manager for Windows that allows for quick & easy install of applications, similar to apt-get or yum on Linux.

Installation from cmd.exe:

```
@"%SystemRoot%\System32\WindowsPowerShell\v1.0\powershell.exe" -NoProfile -InputFormat None -ExecutionPolicy Bypass -Command "iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))" && SET "PATH=%PATH%;%ALLUSERSPROFILE%\chocolatey\bin"
```

and from PowerShell

```
Set-ExecutionPolicy Bypass -Scope Process -Force; iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))
```

After the installation is complete, you can use it to install any software from the [packages](https://chocolatey.org/packages) list. For example:

```
choco install git.install 7zip.install notepadplusplus.install nodejs.install jdk8 curl python 3 -y
```
