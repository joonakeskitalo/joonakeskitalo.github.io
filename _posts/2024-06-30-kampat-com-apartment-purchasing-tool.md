---
layout: post
title: "Kämpät.com - apartment purchasing tool"
featured: false
---
This year my partner and I have been looking into buying an apartment and we quickly realised that the tools to help that process were severly lacking.

<br/>

### Problems and issues when buying apartments

**Problem 1: which area to look into**<br/>
We're quite new to the Helsinki region, so we didn't have much understanding of the areas, their costs, what kind of houses does the area have, when they were built (*to avoid immediate plumbing renovation*), pros and cons etc.

I made a bookmarklet to scrape the basic listing details from Tori.fi (this was when they still had apartments) and a simple `index.html` web app to display, filter and look into the data. This allowed for quick exploration of the data and understand the market better.

![Screenshot of the apartment data exploration tool](/images/posts/IMG_2024-06-30_001.png)

I've yet to release the tool and maybe won't at all, since scraping the data is still manual and somewhat tedious.

<br/>

**Problem 2: keeping track of apartments and related details**<br/>
The WhatsApp chat we had for apartment details quickly turned into a mess and was hard to follow comments and thoughts of different apartments. We also tried Google Docs, but that didn't get updated often enough and adding details there was a chore. Solving this issue turned into a quite clear specification list:

- Keeping track of what apartment has been viewed, notes and thoughts from apartments, contact details of realtors etc,
- Sharing the list with partner so that both can participate equally
- Estimates of monthly costs with housing company maintenance fee and loan costs
    - Recalculate costs with your own offer price
- See and compare the price to the average sale price of the area
- Show relevant details of the apartment

<br/><br/>

Good friend of mine, Jakub, also got interested in solving this issue, so we worked together to make this tool in cafe's and in the *interesting* corners of Oodi during weekends.

> *As software developers & designers, we made it into an app.*

<br/><br/>

### Features

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

<br/>

![Screenshot of Kämpät.com tool](/images/posts/IMG_2024-06-30_002.png)

Rest of the details can be expanded:
![Screenshot of Kämpät.com tool](/images/posts/IMG_2024-06-30_003.png)

<br/>

### Tech

- Next.js web app with [Bun](https://bun.sh/) & [Elysia](https://elysiajs.com/) based backend. [Drizzle ORM](https://orm.drizzle.team/) was enough to implement the database queries.
- SQLite database to keep things simple & light
- Running cost of ~4-5€ per month for a VPS, ~35€ one time purchase for domain.

<br/>

### Available for free at [kämpät.com](https://kämpät.com/)

Feedback and feature requests are highly welcome! You can send them via [email](mailto:joona.keskitalo@gmail.com?subject=Kämpät.com feedback) or through the social media of your choice to @Joonikko

<br/><br/>