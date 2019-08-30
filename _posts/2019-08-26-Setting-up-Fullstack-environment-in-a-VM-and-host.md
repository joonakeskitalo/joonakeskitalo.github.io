---
layout: post
title: Setting up fullstack environment in a VM and editing on host
featured: false
tags: [Fullstack]
---



**Note:** There is already a pre-made professionally used tool for this called [Vagrant](https://www.vagrantup.com). I suggest you use that, but here is how I originally setup my development environment.

<!--more-->
____

**Plan**  
The main idea of this is to setup all the server side software & configuration on the VM and then mounting the source folder to the host machine via SSHFS. 

___

**Pros and Cons**


- **Virtual machine pros**  
	- Easy to backup and restore  
	- Can be deployed to multiple users  
	- Same environment and versions  
	- VM can be stored on an external drive and moved between machines  
- **Virtual machine cons**  
	- Slower than native
	- Keyboard layout may be different
- **Native host pros**  
	- Fast  
	- User Configured  
- **Native host cons**  
	- Host software may interfere  
	- Not easy to backup, restore or rebuild

<br/>

**VM Setup script**

```
#!/bin/bash
# Ubuntu Server setup script

apt update
apt upgrade -y
apt install -y openssh-server gcc build-essential curl git

# Install Node and npm
curl -sL https://deb.nodesource.com/setup_10.x | bash -
apt install -y nodejs

# Reboot
shutdown -r now
```

<br/>

One line version:

```
apt update && apt upgrade -y && apt install -y openssh-server gcc build-essential curl git && curl -sL https://deb.nodesource.com/setup_10.x | bash - && apt install -y nodejs && shutdown -r now
```

<br/>

Mounting the VM filesystem to the host via SSHFS:

```
sudo mkdir /Volumes/vmShare
sudo sshfs -o allow_other,defer_permissions user@xxx.xxx.xxx.xxx:/home/user /Volumes/vmShare
```

<br/>
___

**Links**:

- [SSHFS](https://github.com/libfuse/sshfs)
- [DigitalOcean: How To Use SSHFS to Mount Remote File Systems Over SSH](https://www.digitalocean.com/community/tutorials/how-to-use-sshfs-to-mount-remote-file-systems-over-ssh)
- Hypervisor: [VMware Fusion](https://www.vmware.com/fi/products/fusion.html), [Oracle VM VirtualBox](https://www.virtualbox.org/), [Linux KVM](https://www.linux-kvm.org/page/Main_Page), [QEMU](https://www.qemu.org/)
- Linux distro of choice ([Ubuntu Server](https://ubuntu.com/download/server) for example)