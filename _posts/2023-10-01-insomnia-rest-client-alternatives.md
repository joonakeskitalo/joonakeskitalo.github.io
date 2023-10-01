---
layout: post
title: "Insomnia REST client alternatives"
featured: false
---

Recently [Insomnia](https://insomnia.rest/) went from supporting storing data locally and using the application without an account into a cloud only<sup>1</sup>, requiring an account, migrating user's local collections to cloud. If the user didn't agree to syncing their collections to Kong's cloud, their data would be inaccessible<sup>2</sup>.

<div style="font-size: 11pt;">
<sup>1</sup>: Local scratch pad is supported, but with limited features, such as only one collection.<br/>
<sup>2</sup>: Requests were not deleted, but inaccessible to the user unless the downgraded to 2023.5.8, exported their collection, updating to v8 and importing
</div>

<br/>

After this change, users were not understandably happy, but who is when you remove and limit the feature set with new requirements, disrupt their ability to work and possibly completely make the app unusable for some organisations due to cloud syncing requirements. Kong says that the data is end-to-end encrypted, but if your workplace hasn't explicitly allowed the use of specific cloud services and has mandated local-only storing of data such as API keys, the app cannot be used.

<br/>

Messages by Marco Palladino ([@subnetmarco](https://github.com/subnetmarco)), the CTO of Kong, from the  ["enshittification / needing an account #6577"](https://github.com/Kong/insomnia/issues/6577) -discussion and elsewhere seem to indicate that Kong is heading the way Postman went, which is sad because the cloud-only stunt of Postman was one of the main reasons driving people from Postman towards Insomnia.

> With Insomnia 8.0 we are doing two new things:
> 1. After downloading the new binary (either manually or via the auto-update) we show an onboarding wizard that communicates that your data (collections, tests, etc) will be synchronized to the cloud after the user creates an account or signs in. There is an option to export the data, and the data is not actually synchronized until either an account is being created, or a login is being performed.
> 2. We are also introducing a new Scratch Pad mode that is always local and never synchronized to the cloud, and doesn't require an account with Insomnia.

> The data can be optionally exported before continuing with the cloud synchronization. The data can also be exported after logging in.
> The data is fully end-to-end encrypted (E2EE) in the cloud for all users, nobody but you can access it, which is why we request a passphrase and why losing the passphrase will cause the data to be lost.<br/>
> With Git sync the data never goes to the cloud but stays in the Git repository.<br/>
> The challenge is that we cannot continue to offer a great product with all these capabilities while working on an abstraction layer that supports two different storage backends for all data in Insomnia, adds too much complexity to the whole product. Unlike Postman, the data is end to end encrypted, so there is data sharing concern with Insomnia.

> For anybody where this is a problem: you can download an old version of Insomnia and also export the data from there. The data is not lost. ([source](https://github.com/Kong/insomnia/issues/6577#issuecomment-1737992284))

[!["Innovating, looks like this" - Marco Palladino](/images/posts/IMG_2023-10-01_1846.png)](https://twitter.com/subnetmarco/status/1706519398410846271)

<br/><br/><br/>

## Alternatives

Since the GQL introspection support in Insomnia is quite nice and I didn't yet find another client with same feature and my work stuff is already in Insomnia, I made a fork of it before v8 release, updated Electron version to patch libwebp vulnerability and removed Sentry analytics tracking. For anything non-GraphQL I use vscode-restclient plugin. Bruno looks promising due to it's developer experience first implementation (ie. saving everything to files to be Git friendly), but is still in the early stages of development.

**Alternative applications:**

- [bruno](https://www.usebruno.com/)
- [RapidAPI](https://paw.cloud/)
- [firecamp](https://github.com/firecamp-dev/firecamp)
- [mkkhedawat/rest.ground](https://github.com/mkkhedawat/rest.ground)
- [hurl](https://hurl.dev/)
- [hoppscotch](https://github.com/hoppscotch/hoppscotch)
- [curlie](https://github.com/rs/curlie)
- [Restfox](https://github.com/flawiddsouza/Restfox)
- [httpie.io](https://httpie.io/)
- [httptoolkit.com](https://httptoolkit.com/)
- [stepci](https://github.com/stepci/stepci)
- Visual Studio Code plugins:
    - [vscode-restclient](https://github.com/Huachao/vscode-restclient)
    - [Thunder Client](https://www.thunderclient.com/)

<br/>

**[vscode-restclient](https://github.com/Huachao/vscode-restclient)**<br/>
Stores all the data in a plain text format, which is easy to edit, store & collaborate on. Multiple requests can be separated with `###` and saved to the same file, global and file specific variables are supported etc.

Example of the HTTP request with restclient:

```
POST https://example.com/comments HTTP/1.1
content-type: application/json

{
    "name": "sample",
    "time": "Wed, 21 Oct 2015 18:27:50 GMT"
}
```

If you need a basic REST client that'll do the sending requests part well without getting on the way and allows easy sharing via files stored in Git, give it a go.

<br/><br/>

## Links

- [enshittification / needing an account · Issue #6577](https://github.com/Kong/insomnia/issues/6577)
    - converted to discussion: [Changes in Insomnia 8.0+ regarding needing an account and local/cloud data migration.](https://github.com/Kong/insomnia/discussions/6590). Was locked due to spam.
- [HN: Insomnia REST client now requires an account](https://news.ycombinator.com/item?id=37680126)
- [Reddit: Warning: apparently Insomnia API testing tool is following the Postman way of having an account needed : r/softwaretesting](https://www.reddit.com/r/softwaretesting/comments/16u9qd5/warning_apparently_insomnia_api_testing_tool_is/)