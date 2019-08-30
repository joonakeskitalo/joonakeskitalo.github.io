---
layout: page
title: Projects
---

<br/>

## Raspberry Pi based thermal sensor

During 2018 I made a Raspberry Pi based thermal sensor for logging solar panel & ambient air temperature for research if the temperature absorbed by the panels could be used for other uses, such as heating water by connecting a water loop to the backside of the panel. The panels were ~20°C above ambient during the day and -2°C during the night.

![Measurement data]({{site.baseurl}}/images/pages/raspi_thermal_data.jpeg) *Measurement data*

The sensors used were basic contact based DS18B20 and couple IR based thermal sensors that measured in the front of the sensor and the ambient temperature around the sensor.

![Last minute change]({{site.baseurl}}/images/pages/raspi_change.jpg) *Last minute changes*


<br/>

## Panel.ahk

During my summer job, I commonly repaired, reinstalled etc. a lot of client computers that couldn't be centrally managed with AD and there wasn't a tool that fit the job or that I also liked.

The control panel & settings in every different release of Windows was different and it can be quite difficult & annoying trying to find the same setting when it can be in x amount of locations depending on the version, so this application has static buttons that directly go to the endpoint defined by Microsoft. If I click display on Windows 7, it goes to the control panel. If I click the same button on Windows 10, it goes the new Settings GUI.

Later I added a [Ninite](https://ninite.com/)-like installation GUI for running [Chocolatey](https://chocolatey.org/) package manager commands, which would automatically download & install the latest version of the application from the Chocolatey repository. This allowed me to do more work and more importantly drink more coffee.

It may not be pretty or win design awards, but it works.

![](https://user-images.githubusercontent.com/5886751/43706495-24890a24-996e-11e8-9ea9-0341e6ab4061.png)

![](https://user-images.githubusercontent.com/5886751/43706494-246a8cde-996e-11e8-9c26-56f87ed6bc94.png)

**Features**

- GUI with buttons to quickly access settings, folders etc.
- *Ninite-style* GUI for installing applications via [Chocolatey](https://chocolatey.org/)
- KDE-style alt+drag window moving and resizing. Original script by [Jonny](https://autohotkey.com/docs/scripts/EasyWindowDrag_(KDE).htm) from [Autohotkey script showcase](https://autohotkey.com/docs/scripts/)
- Floating panel to quickly open common folders
- CPU usage graph with [XGraph](https://autohotkey.com/boards/viewtopic.php?t=3492) library

<!--  -->

- Source: [https://github.com/joonikko/panel](https://github.com/joonikko/panel)
- Releases: [https://github.com/Joonikko/Panel/releases](https://github.com/Joonikko/Panel/releases)

___

### Other projects:

*   [https://joonakeskitalo.github.io/oamk-animation/](https://joonakeskitalo.github.io/oamk-animation/) ([source](https://github.com/joonakeskitalo/oamk-animation))
*   [https://joonakeskitalo.github.io/oamk-interactive-labs/](https://joonakeskitalo.github.io/oamk-interactive-labs/) ([source](https://github.com/joonakeskitalo/oamk-interactive-labs))
*   [https://joonakeskitalo.github.io/oamk-ui-design/index.html](https://joonakeskitalo.github.io/oamk-ui-design/index.html) ([source](https://github.com/joonakeskitalo/oamk-ui-design))
*   [https://github.com/joonakeskitalo/oamk-php-ex1](https://github.com/joonakeskitalo/oamk-php-ex1)
*   [https://github.com/joonakeskitalo/oamk-mip-ex1](https://github.com/joonakeskitalo/oamk-mip-ex1)
