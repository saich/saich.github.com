---
layout: post
title: 'Display Images in Instant Messengers'
categories:
- Technical
tags:
  - avatar
  - display-image
  - google
  - gtalk
  - im
  - yahoo

---

Have you ever felt while chatting that your friend's display image is awesome ? If you ever felt so, the most obvious thing you'd try to do next is save the image [so that you can use it later on some purpose]. But, in general, the messengers do not support saving the display images [No, you can't just right-click on the menu &amp; select Save]. Well, I just explored &amp; experimented a bit with Google Talk &amp; Yahoo! Messenger to check how to access the display images through an http url? So, here are my results:
<ul>
	<li>Yahoo! Messenger: The display image of all the users are publicly available on the web. To access the avatar / display image of a user whose Y! Id is <em>yid</em>, then just navigate to:
http://img.msg.yahoo.com/avatar.php?yids=<em>yid</em><br>
Here comes a shock now !! All images are publicly available, meaning that everyone has permissions to save your image onto their disk.</li>
	<li>Google Talk: I'm not really sure where the images get loaded from on GTalk, but on the GTalk plugin available on GMail, the images are loaded from: https://mail.google.com/mail/photos/<em>username</em>@gmail.com, where the <em>username </em>is the user's Google username. On contrary to the Yahoo! Security Settings, these images are NOT publicly available. You cannot access the images of users who are not in your friends list. Also, this URL checks for your valid session, meaning that you need to be logged into GMail to access these images.</li>
</ul>
I was actually wondering if there is any tool which can list me all the data-transfers happening b/w my IMs &amp; the host sites? Wouldn't it be wonderful if we know all the endpoints of an IM server, the message formats etc. [We can probably develop our custom messenger for that IM service, if we get to  know those details :)]

Well, now girls [especially Indians, who are conservative] should give a thought before uploading their display image, if they do not want their pictures to fall into wrong / unwanted hands.

Now, its time to have fun by tricking your pals by their own display images as yours.. :D :D
