
I decided it would be interesting to make a post about the Pi media PC I built this year.

![](https://i.imgur.com/o6S1I1n.png)

**Hardware**

- Raspberry Pi 3 Model B
- Raspberry Pi PSU (5V 2.5A). You could use a basic tablet/phone charger, but most of them can't do 2.5A and having a strong enough PSU is important to reduce the chance of data corruption.
- Raspberry Pi case
- Raspberry Pi heatsink (not a necessity, but the Pi can heat up to a uncomfortable level when playing codecs it can't hardware decode).
- microSD card
- externally powered HDD. I have a basic Toshiba 3TB one.
- Remote with a USB RF receiver (you can use a keyboard too, but this is nicer)

The cost of the whole setup was about 140€ with the 3TB costing 85€, Pi 29€, PSU 10€, case 4€, remote 10€ etc.

**Software**

There are multiple *just-enough-OS* distributions to run [Kodi](https://kodi.tv/) (formerly known as XMBC). Some of the most common ones are [LibreELEC](https://libreelec.tv/), OpenELEC and [OSMC](https://osmc.tv/) (Open Source Media Center).
The setup is quite simple: you burn the image file to the SD card with an image file burning software such as DD or [Etcher](https://etcher.io/).

I ended up going with LibreELEC, since OpenELEC didn't seem to get any updates and OSMC's built-in implementation of SMB didn't work that well (I could have disabled it & installed the default Debian package, but I don't really feel like tinkering with media PC). Libre- & OpenELEC are meant to run only Kodi and don't provide the ability to install extra Linux packages and applications. OSMC in the other hand is built on top of Debian and provides access to the full Linux ecosystem and tools.

After the .img file has been burned to the SD card, you simply insert the SD card to Pi and it'll boot, do the pre-installation steps and proceed to a quick setup wizard. The wizard will ask you to set the device name, connect to a network and after that it'll open Kodi.

**Setting up Kodi**

By default Kodi doesn't have any content or add-ons, but you can add local content & install add-ons from the official Kodi repository or from any other repo.

![](https://i.imgur.com/380bmRo.jpg)

In the media settings, you tell Kodi where your TV, movies and music directories are and then it'll scan the content and download the necessary metadata, artwork and descriptions for those shows. I would recommend that you name your titles and folders [correctly](http://kodi.wiki/view/Naming_video_files/TV_shows). I use [Filebot](https://www.filebot.net/) and it's great.

![](https://i.imgur.com/jRNk5MQ.jpg)

The initial scan of your content can take a while depending on how much content do you have. For example my 3TB HDD has only 100GB free and ~450 movies and ~70 TV shows and the library creation took around 15-30 minutes in total.

![](https://i.imgur.com/8yphhQ5.jpg)

**SMB and file sharing**

 You can also share the hard drive & SD card contents through SMB in your local network, so you can access the movies and other content from other computers or mobile devices. The limiting factor for the Pi in network sharing is it's slow 100 Mb/s NIC and USB 2.0 ports only, so you won't be using it for high-bandwidth demanding tasks, but it's fine & functional for the occasional video stream, file copying or backups. The configuration is super simple in LibreELEC: you setup a username & pw and thats it. It'll broadcast it's presence in the broadcast domain (LAN) and show up under the network tab on devices that support the SMB protocol, so basically on [everything](https://en.wikipedia.org/wiki/List_of_products_that_support_SMB).

**Tweaks, adjustments and addons**

The only tweaking I've done so far is to increase the amount of volume steps, changed the theme, added weather location and installed a keybind configuration addon to change some of the actions of the buttons on the remote. I also have a p2p client running on it, so I can leave this silent ~10W PC running forever instead of my main desktop that eats +300W just idling on the desktop.

A lot of other [addons](https://kodi.tv/addons) exist for Kodi: YouTube, Twitch, South Park, Viaplay, Plex client and so on, but I don't really use them for other than watching the occasional South Park episode.

**Conclusion**

Setting up this media PC has been one of things I've wanted to do for a while and it has totally fulfilled my expectations. The "set it up once and forget" model of this thing has been great. I can just sit down on the couch after a long day and watch my favourite shows and movies. No more fiddling with Chromecasts (which is still great) and apps, I can just pick up the remote and relax.

5/5 Bueno.
