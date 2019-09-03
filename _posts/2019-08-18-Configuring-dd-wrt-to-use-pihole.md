---
layout: post
title: "Configuring DD-WRT to use Pi-Hole"
featured: false
image: '/images/posts/7EUXR7bhC9AY.svg'
---

In DD-WRT settings: Services -> Services -> Dnsmasq and in the additional options write the following:

```
dhcp-option=br0,6,192.168.x.x
```

<br/>
`br0` is the interface you want to configre it for, `6` means you're configuring the DNS server and it's followed by the IP address of the DNS server(s). You can use multiple servers just by adding another address separated by a comma. You can find all the DHCP options from IANA's [website](https://www.iana.org/assignments/bootp-dhcp-parameters) and in [RFC 2132](https://tools.ietf.org/html/rfc2132).

For example, I have the Pi-Hole configured as the first server, CloudFlare as a secondary and also CloudFlare is set as the server for the guest WiFi VLAN. 

```
dhcp-option=br0,6,192.168.1.3
dhcp-option=wl1.1,6,1.1.1.1,1.0.0.1,8.8.8.8
```

<br/>
*Remember to replace the IP address with the address of the device where Pi-Hole is running.*

___

If you want Pi-Hole to show the names of the devices  and not only IP addresses, you can go to Settings -> DNS -> Advanced DNS settings -> Conditional formatting and enable conditional formatting, set the IP of the router and domain name to the one you have set (by default it is `local`).