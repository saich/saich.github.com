---
layout: post
title: 'GTalk: Display Images Cache'
categories:
- Technical
tags:
  - avatar
  - display-image
  - gtalk
  - im

---

In my <a title="Display Images in Instant Messengers" href="/blog/2009/08/29/display-images-in-instant-messengers/">last article</a>, I talked about the way of obtaining a user's display image in Yahoo! Messenger &amp; Google Talk, over the internet through http protocol (the browser way). In this case, it is the browser's decision about the cache to be used for those images. But, the IM client Applications(googletalk.exe, YahooMessenger.exe) are stand-alone applications. And we do not expect them to fetch the display image on the fly over the wire from the internet, whenever the image is to be displayed. The most simple, obvious but yet powerful solution is  to maintain the cache of images on the disk.

Now, my point of this article is, what is this cache location of images, so that I can easily navigate over to there and pick a friend's avatar from there..  :-) Well on Windows Systems, the display images cache directory for GTalk is:<span id="ctl00_MainContentPlaceholder_ctl01_ctl00_lblEntry"> </span>

```
    C:\Documents and Settings\<windows username>\Local Settings\Application Data\Google\Google Talk\avatars
```

<span>The images saved in there are PNG files with transparent background, so you can open them with basic image application [maybe, you need to change the application extension to .png]. Do you observe there are two images for each id  there ? One image is 32 x32 [ends with .online.avatar] and the other is 96 x 96 px image [ends with .original.avatar].</span>

You can find much more information about GTalk at <a href="http://www.customizetalk.com">http://www.customizetalk.com</a>. This site has some useful information all about the GTalk Themes Development, GTalk Bots Development and many other interesting [and not complicated at the same time] stuff.

Its fun as well as  interesting to find how simple a powerful application can be. Sticking to development basics :)

<strong>Update:</strong> Find some interesting Google Talk emoticons &amp; their string equivalents here : <a href="http://tkhere.blogspot.com/2007/12/brand-new-google-chat-emoticons-no-one.html">http://tkhere.blogspot.com/2007/12/brand-new-google-chat-emoticons-no-one.html</a>
