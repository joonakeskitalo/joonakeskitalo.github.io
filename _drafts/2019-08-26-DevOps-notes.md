---
layout: post
title: DevOps Notes (work in progress)
featured: false
# image: '/images/posts/ikqhM7JhtHgJ.jpg'
---

<!--more-->


### Configuration management

Configuration management is the practice of handling changes systematically so that a system maintains its integrity over time. It ensures that the current design and build state of the system is known, good and trusted. It doesn't rely on the tacit knowledge of the development team.

Available tools for CM:

- Puppet
- Chef
- Ansible
- Saltstack

How Puppet works:

1. **Facts**: Puppet node sends normalized data from itself to the Puppet Master
2. **Catalog**: Puppet master uses the facts to compile a catalog that specifies how the node should be configured.
3. **Report**: The node reports back to the Puppet Master indicating that the configuration is complete.


<!-- 
- Development
- Testing
- Production
 -->

<br/><br/>

### Containerization

**Docker**

```
┌────────────────┐ ┌────────────────┐
│  Application   │ │  Application   │
├────────────────┤ ├────────────────┤
│   Bins/Libs    │ │   Bins/Libs    │
├────────────────┴─┴────────────────┤
│           Docker Engine           │
├───────────────────────────────────┤
│              Host OS              │
└───────────────────────────────────┘
```



[Docker](https://www.docker.com/) is a containerization platform where all the project dependincies are defined into a Docker file, which is just a template for how to create the docker image and that docker image is used to create the container where the application can be ran. This image can be uploaded to the Docker Hub, which is just a repository of containers and can be used to pull the images to other servers, such as staging or production servers.


```
┌───────────┐   ┌────────────────┐    ┌──────────┐                
│Docker file│──▶│  Docker image  │───▶│Docker Hub│                
└───────────┘   └────────────────┘    └──────────┘                
                         │                  │  ┌─────────────────┐
                         ▼                  ├─▶│ Staging server  │
                ┌────────────────┐          │  └─────────────────┘
                │Docker container│          │  ┌─────────────────┐
                └────────────────┘          └─▶│Production server│
                                               └─────────────────┘
```

<br/><br/>

### Continuous Monitoring


> [Nagios](https://www.nagios.org/) Core is the monitoring and alerting engine that serves as the primary application around which hundreds of Nagios projects are built.

> Nagios Core serves as the basic event scheduler, event processor, and alert manager for elements that are monitored. It features several APIs that are used to extend its capabilities to perform additional tasks, is implemented as a daemon written in C for performance reasons, & is designed to run natively on Linux/*nix systems.


___
