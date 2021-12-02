---
layout: post
title: "WFH: Multiple computers & single set of peripherals"
featured: true
---

When I started working from home, I didn't have space for a dedicated workspace or work desk, so I had to use a single set of peripherals for both my personal & work computer.

### Requirements

- Connect two computers to the same set of peripherals with minimal amount of cable replugging
- DisplayPort v1.4 support for UHD 120Hz display

### Solution options

1. **Dock**: Thunderbolt 3 dock would work, but I only have one device that supports it. USB-C docks & adapters have maximum resolution limit (usually 3840x2160 30Hz). Requires replugging a cable between devices.
2. **KVM** would be ideal, but at the time when I was trying to solve this problem, the amount of models that support DP 1.4 were quite low, usually out of stock and quite expensive (400-600 USD).
	- [Level1Techs 1.4 Display Port KVM Switch, Dual Monitor, Two Computer](https://store.level1techs.com/products/14-kvm-switch-dual-monitor-2computer)
	- [ConnectPro UDP2-12AP-KIT](https://connectpro.com/product/udp2-12ap-kit-2port-dual-displayport-kvm/?v=7516fd43adaa)
3. Separate **display and USB switches** to toggle between inputs & outputs. Requires pressing multiple buttons, but quite foolproof, passive and expandable setup.



**My solution** <br/>
I ended up deciding to get a USB switch for peripherals, using the input selector in my display and a HDMI switch for my secondary display that only a single HDMI port. Audio is handled via USB DAC and switches with the other peripherals. Using the USB-C to DisplayPort adapter requires the device to support [DisplayPort over USB-C](https://www.displayport.org/displayport-over-usb-c/), commonly known as DP Alt Mode. Works on M1 SoC based MacBook Air, Asus G14 and HP ProBook 440 G8.

**Hardware**:

- [USB-C to DisplayPort adapter](https://www.amazon.de/-/en/gp/product/B08LGM4B3S/).
- [USB-C extension cable](https://www.amazon.de/-/en/gp/product/B08LGM4B3S/) to be able to move the adapter under the table
- [USB switch](https://www.amazon.de/-/en/Selector-Switcher-Computers-Devices-Keyboard/dp/B09996MX2X/)
- [Fuj:tech 2in1 4K HDMI switch](https://www.verkkokauppa.com/fi/product/31909/mvvkx/Fuj-tech-2in1-4K-HDMI-kytkin)
