---
layout: post
title: "Windowing on Microsoft Windows and macOS"
featured: false
---

If you've never used any other operating system than Windows, then it might feel weird or confusing when closing a window on macOS doesn't close the application. This is because how  fundamentally different windowing, window- & process management is between the operating systems.

On Windows, a non-background application needs somewhere to exist, usually as a window or an icon in the notification area. Most commonly the window of the application is a presentation of the application being run, so when you close the window, the application is also closed. This seems like a clear, sensbile & obvious solution until you think about multi windowing.

### Windows: From SDI to MDI and back

[SDI and MDI](https://docs.microsoft.com/en-us/cpp/mfc/sdi-and-mdi?view=vs-2019) are ways of describing how a document interface looks and behaves.

> *SDI applications allow only one open document frame window at a time. MDI applications allow multiple document frame windows to be open in the same instance of an application. An MDI application has a window within which multiple MDI child windows, which are frame windows themselves, can be opened, each containing a separate document.*

![]({{site.baseurl}}/images/posts/windowing_001.svg)

Lets use Microsoft Office as the application to compare MDI & SDI.

Quote from Microsoft on[ Comparing SDI & MDI between Excel 2010 & 2013](https://docs.microsoft.com/en-gb/office/vba/excel/Concepts/programming-for-the-single-document-interface-in-excel):

> *A new feature in Excel 2013 is the single document interface (SDI). SDI is a method of organizing graphical user interface applications into individual windows that the operating system window manager handles separately. In Excel 2013, each Excel window can contain only one workbook, and each has its own ribbon UI. By default when you open a new workbook, it will be displayed in another Excel window, even though it is the same Excel instance.*

‌In Office 2010, Microsoft tried to display the MDI windows as SDI windows to the system, but this implementation had weird quirks, such as not having previews in alt-tab or in the taskbar.

In Office 2013 and later you can now open multiple documents, which are displayed in SDI windows, but still running on the same instance which gets closed when the last remaining window is closed.

![]({{site.baseurl}}/images/posts/windowing_002.svg)

<br/><br/>

### macOS: Document based windowing

On macOS, a window rerpesents a document, not the application. This is why closing all the windows doesn't close the application. This allows for coherent multi-windowing that is the same for almost all applications, the exceptions being single window applications that have no documents to display, such as the System Preferences.

![]({{site.baseurl}}/images/posts/windowing_003.svg)

<br/>

*Note: some applications on Windows have adopted macOS like behavior, where the application doesn't quit when the window is closed (Google Chrome for example).*

**Sources**

- [Ars Technica: Paradigms lost: The Windows 7 Taskbar versus OS X Dock](https://arstechnica.com/information-technology/2009/01/dock-and-windows-7-taskbar/)
- [https://diffzi.com/mdi-vs-sdi/](https://diffzi.com/mdi-vs-sdi/)
- [https://docs.roguewave.com/stingray/11/html/otug/10-2.html](https://docs.roguewave.com/stingray/11/html/otug/10-2.html)
- [https://en.wikipedia.org/wiki/Multiple_document_interface](https://en.wikipedia.org/wiki/Multiple_document_interface)
- [https://docs.microsoft.com/en-gb/office/vba/excel/Concepts/programming-for-the-single-document-interface-in-excel](https://docs.microsoft.com/en-gb/office/vba/excel/Concepts/programming-for-the-single-document-interface-in-excel)