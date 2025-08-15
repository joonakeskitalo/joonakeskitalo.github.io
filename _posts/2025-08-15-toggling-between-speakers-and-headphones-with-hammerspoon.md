---
layout: post
title: "Toggling between speakers and headphones with Hammerspoon"
featured: false
---

I tend to switch between using headphones and speakers often, so I made myself a function to instantly toggle the system audio output device.


```
function toggleSpeakersAndHeadphones()
    local speakerName = "MacBook Pro Speakers"
    local headphonesName = "USB-C to 3.5mm Headphone Jack Adapter"
    local currentDevice = hs.audiodevice.defaultOutputDevice()
    local currentName = currentDevice:name()
    local isSpeakers = currentName == speakerName

    if (isSpeakers) then
        local headphones = hs.audiodevice.findDeviceByName(headphonesName)
        headphones:setDefaultOutputDevice()
    else
        local speakers = hs.audiodevice.findDeviceByName(speakerName)
        speakers:setDefaultOutputDevice()
    end
end
```

Change the speaker and headphone name to match your devices. Also refer to the [hs.audiodevice](https://www.hammerspoon.org/docs/hs.audiodevice.html) docs.

You can bind the function to a hotkey or use [hs.chooser](https://www.hammerspoon.org/docs/hs.chooser.html) to have GUI selector for functions. I have mine in my custom [chooser](https://joonakeskitalo.github.io/2023/07/17/custom-app-launcher-with-hammerspoon/) with most commonly used applications & scripts.