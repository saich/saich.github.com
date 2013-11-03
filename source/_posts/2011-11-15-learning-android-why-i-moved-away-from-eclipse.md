---
layout: post
title: 'Learning Android : Why I moved away from Eclipse'
categories: Technical
tags:
  - android
  - eclipse
  - ide
  - intellij-idea

---

So, after a very long break, I started back with getting familiar with Android development... Felt happy seeing that Google has made a lot of improvements / features in the ADT. But, everything evaporated when I tried to debug an app on my machine, and got this error: "Android Packaging Problem: resources.ap_ does not exist". I tried cleaning the project, restarted Eclipse, and re-creating the Eclipse project and this error didn't go away... Googling it also didn't help much... Then, I went to sleep....

The next day, to my surprise, there was no error and I was able to debug my app, at last... But, it didn't last long... After 3 hours, the same error is back.... It looked like this ADT solves everything else (Resource Editors, WYSIWYG Editor etc.) but the basic task it is supposed to do (Basic compiling / packaging / debugging)...

Now that perfect mood is set to go hunting for a new and *reliable* IDE, I searched in <a href="http://www.stackoverflow.com" target="_blank">stackoverflow.com</a> for answers... Found some thread saying <a href="http://www.jetbrains.com/idea/features/google_android.html" target="_blank">IntelliJ IDEA</a> is good.... So, downloaded it, downloaded its dependencies (JSDK 1.6) and installed them... And there is no turning back... I don't miss the resource.ap_ error at all...

<strong>The Pros of IDEA:</strong>
<ol>
	<li><strong></strong>Reliable (unlike ADT for Eclipse) at compiling and packaging...</li>
	<li>Supports the Android "Library" projects also... (Tried it with <a href="https://github.com/cyrilmottier/GreenDroid" target="_blank">GreenDroid</a>, and worked without a glitch)</li>
	<li>Import Eclipse projects directly...</li>
	<li>Integrated github support (and a few more Version Controls)</li>
	<li>Decent enough features, for Refactoring, Imports optimization, Code completion etc.</li>
</ol>
<strong>The Cons:</strong>

This could become a big list, but the reliability when compared to Eclipse beats everything in the below list combined..at least for me...
<ol>
	<li>Page Scrolling - Cannot use the Mouse Scroll.. Need to click on scrollbar and scroll it down.. :(</li>
	<li>Logcat sucks!! The one in Eclipse is hell lot better.. Seriously needs Filter by Application, Colored text based on log level, and saved searches.. A simple textarea doesn't justify such an important feature..</li>
	<li>The keyboard shortcuts are completely different from Eclipse.. Why doesn't IDEs come with keyboard binding set of other IDEs that user can choose to use? :(</li>
	<li>Memory hogger, seems to be more than Eclipse.. Could it be because of Swing &amp; Java?</li>
	<li>Basic XML Editor - There are no Android Resource Editors.... I prefer to write XML files by hand, though...</li>
	<li>Some code warnings may misguide you.. It keeps telling me that <a href="http://developer.android.com/reference/android/database/Cursor.html" target="_blank">Cursor</a> cannot be NULL, though I have personally seen cases where it will be...</li>
</ol>
In simpler words, IDEA may not be as good as Eclipse in general, but for Android development, it is certainly a better choice... at least for now..

Atleast, you'll know you are frustrated not because of IDE... (Trust me, frustration because of an IDE, instead of logic/code isn't even worth trying to know.. )
