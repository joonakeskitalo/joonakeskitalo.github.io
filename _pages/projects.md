---
layout: page
title: Projects
---

<br/>

## [Kämpät.com](https://kämpät.com/)

![Screenshot of Kämpät.com tool](/images/posts/IMG_2024-06-30_002.png)

Tool for easing the process of buying an apartment in Finland.

- Add apartment and house listings by pasting Oikotie.fi links
- Add your own comments, such as notes from the apartments, viewing times and realtor details
- Share list of apartments with a link
- Calculate cost estimates for loan
    - You can put your own finances & bank loan details to easily get estimates for all listings you've added
    - Default percentage or custom downpayment amount
    - Calculates the % of income spent on living costs
    - Gives a euro per square metre per month estimate that is comparable between apartments regardless of size
- Show square metre price development for the area by postal code
- Displays most relevant information such as year it was built, square metre price, property ownership, floor number and the amount of apartments in the housing company
- Listings have links to Google Maps & housing company details

**Links:**

- [Kämpät.com](https://kämpät.com/)
- [Blog post](https://joonakeskitalo.github.io/2024/06/30/kampat-com-apartment-purchasing-tool/)
- [Reddit post](https://www.reddit.com/r/Suomi/comments/1blmup6/olen_vapaaaikana_rakentanut_asunnon_ostamisen/)

<br/>

## Autot - easing the car search

![Screenshot of autot](/images/pages/autot.png)

Searching for a car can be difficult and time consuming, but it doesn't need to be. I made a small app for quickly browsing and filtering car models based on certain criteria: make, model, location of the store, battery size, year of manufacturing, different specs, kilometres driven, price range and €/kWh cost. Data was scraped from different car sales sites and Nettiauto.

<br/><br/><br/>

## UI & UX Designs

Location based recruitment application:

![]({{site.baseurl}}/images/pages/ui_example_001.png)
![]({{site.baseurl}}/images/pages/ui_example_002.png)

Game streaming service web UI we made in UI design course at University:

![]({{site.baseurl}}/images/pages/ui_example_003.png)

Chat application:

![]({{site.baseurl}}/images/pages/ui_example_004.png)

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