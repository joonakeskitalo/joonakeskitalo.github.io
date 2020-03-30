---
layout: post
title: "Improving microphone quality for VoIP"
featured: false
image: '/images/posts/2020-03-30_1.jpg'
---

Since the amount of remote work and remote meetings has increased, having good quality microphone and headphones is even more important for yourself and especially for the other people listening to you.

**Use a headset or a dedicated microphone with headphones** instead of the built-in microphone in your device. For external microphones, you can either get an XLR microphone with a dedicated audio interface or a USB-connected microphone that has everything built-in. For most people the USB microphone will be enough and simpler with a plug-&-play setup. 

Audio devices don't get old quickly, so investing into having one at any point in time is completely fine and you won't need to worry about it being obselete soon. I've personally had a [Blue Snowball](https://www.bluedesigns.com/products/snowball/) microphone for +6-7 years and it's still working perfectly even though the model was originally released in 2005.

[PC Mag](https://uk.pcmag.com/microphones/116655/the-best-usb-microphones) has a list of recommended USB microphones, but Blue Snowball or Snowball ICE for 55€ will be more than enough for VoIP usage.

<br/>

**Other things**

- Use push-to-talk when available (especially in large attendance confrence calls).
- Check the audio levels of your microphone: normal speaking volume should not clip.
- Have calls in a quiet space.
- Don't have the microphone right in the front (or inside…) of your mouth. Having it on the side should be enough and removes possible popping sounds.
- Don't use speakers.

<br/>

## Software solutions

The things listed above will most likely be enough, but if you want to have clean sound without any background noise, you can use software to filter out background noise and other unwanted frequencies.

On a macOS device, [Loopback](https://rogueamoeba.com/loopback/) from Rogue Amoeba can be used to create virtual audio interfaces and [Audio Hijack](https://rogueamoeba.com/audiohijack/) can be used to capture & process the incoming microphone and forward it to the virtual interface that is set as default input device for the system and VoIP applications.

![]({{site.baseurl}}/images/posts/2020-03-30_2.png)

For Windows, there is [Noise Blocker](https://closedlooplabs.com) and [Krisp](https://krisp.ai), but I don't have personal experience with them.
