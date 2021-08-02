---
layout: post
title: "Using Monitoror"
featured: false
---

![]({{site.baseurl}}/images/posts/2021-08-02_Monitoror.png)

Monitoror is an unified monitoring wallboard with support for basic HTTP requests, ICMP ping, port scanning, Azure DevOps Github, Gitlab, Jenkins and Pingdom support. With these features you could create a dashboard for monitoring everything in your development pipeline. My usecase is a bit simpler: monitoring my VPN & internet connection and some development services.

My current setup is similar to this:

- **Internet**: ping public DNS servers (CloudFlare, Google, OpenDNS etc.), HTTP GET request for Google.
- **LAN**: Ping router, Raspberry Pi & homeserver
- **Work**: private & public internal services
- **Other**: current IP via AWS check IP, ping CF DNS server and check if port 8080 is open on local machine.

With this setup I can quickly see what would be causing issues and get answers for the following troubleshooting questions:

- Does my router respond to ping?
- Does the Raspberry Pi respond to ping & HTTP GET?
- Does Google respond to HTTP GET?
- Is the recursive public DNS server up?
- Do services behind the VPN respond?

In case of issues, I can directly see the possible source for issues. For example I was looking after a friend's puppy and the dog managed to nudge the ethernet cable coming from the wall and the connection stopped working. All the non-local sources in Monitoror errored out and the culprit was instantly narrowed down to ISP issues or the cable coming to my router's WAN port.

-------------------

Example .env:

```
MO_PORT=8889
MO_ADDRESS=127.0.0.1
MO_CONFIG=./config.json
```

Example config.json:

```json
{
    "version": "2.0",
    "columns": 2,
    "tiles": [
        {
            "type": "GROUP",
            "label": "Internet",
            "tiles": [
                { "type": "PING", "label": "Google DNS 1", "params": { "hostname": "8.8.8.8" } },
                { "type": "PING", "label": "Google DNS 2", "params": { "hostname": "8.8.4.4" } },
                { "type": "PING", "label": "Cloudflare DNS 1", "params": { "hostname": "1.1.1.1" } },
                { "type": "PING", "label": "Cloudflare DNS 2", "params": { "hostname": "1.0.0.1" } },
                { "type": "PING", "label": "OpenDNS 1", "params": { "hostname": "208.67.222.222" } },
                { "type": "PING", "label": "OpenDNS 2", "params": { "hostname": "208.67.220.220" } },
                { "type": "PING", "label": "Quad9 DNS", "params": { "hostname": "9.9.9.9" } },
                { "type": "HTTP-STATUS", "params": { "url": "http://google.com/", "statusCodeMax": 299 } }
            ]
        },
        {
            "type": "GROUP",
            "label": "LAN",
            "tiles": [
                { "type": "PING", "label": "Ping Router 192.168.2.1", "params": { "hostname": "192.168.2.1" } },
                { "type": "PING", "label": "Ping Pi 192.168.2.2", "params": { "hostname": "192.168.2.2" } },
                { "type": "PORT", "label": "Port 53 Pi DNS server", "params": { "hostname": "192.168.2.2", "port": 53 } }
            ]
        },
        { "type": "PING", "label": "Cloudflare DNS 1", "params": { "hostname": "1.1.1.1" } },
        { "type": "HTTP-RAW", "label": "IP", "params": { "url": "https://checkip.amazonaws.com/" } },
        { "type": "PORT", "label": "localhost:8080", "params": { "hostname": "127.0.0.1", "port": 8080 } }
    ]
}
```

- [https://monitoror.com/](https://monitoror.com/)
- [https://github.com/monitoror/monitoror](https://github.com/monitoror/monitoror)
