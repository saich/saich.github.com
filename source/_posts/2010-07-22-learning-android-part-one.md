---
layout: post
title: 'Learning Android: Part I'
categories: Technical
tags:
  - android

---

I will use this post to talk about my 'Getting familiar with Android' learning. As announced in the last post, I've started learning Android, but not even at half-pace as I wanted to.

Anyways, let me tell what I'm doing in learning. I'm using ADT on Eclipse Helios and using the Emulator for testing purposes. Currently focusing on the samples present along with Android SDK. Gone through the Application Fundamentals available along with the SDK.

Interesting Things:
<ul>
	<li>Most importantly, its good to see myself learning the things I'm interested in from the start (FYI, I always have that thing for Web &amp; Mobile Development)</li>
	<li>Very clear &amp; highly helpful documentation (and, also downloadable). And the docs are developer-focused &amp; also lays emphasis on good practices at every step, like i18n, using resources instead of hard-coded strings etc. etc..</li>
	<li>Separation of layout of the app and the application logic (supports XML files for layout). I get the feeling this is inspired from Flex (mxml &amp; as), but I don't know.</li>
	<li>Provides a very good mechanisms for interoperability between various applications. Simply said, I can use the capabilities of other applications installed, and also I can expose my app's capabilities to other apps. Also, Android search also integrates good with any application's search.</li>
	<li>Application Development is done in Java, which is said to be a very developer-friendly. I can utilize this to brush my skills in java, as I have other plans to work in Java in some not-so-far future.</li>
</ul>
Annoying Things:
<ul>
	<li>Tabs are NOT simple to use. I'd prefer a way to declare tabs and its contents in the XML itself.</li>
	<li>In TabHost, mandatory referencing of elements to' tabs' &amp; 'tabcontent' doesn't look like a good programming feature.</li>
	<li>Missing the tabs &amp; tabcontent id referencing in the TabHost would give no error / warning by Compiler, but fails at Runtime, without any proper information (even while debugging)</li>
	<li>Emulator takes very long time to start. So, its preferred not to close the emulator after every run. (start along with eclipse and close it before closing eclipse)</li>
	<li>Emulator keyboard shortcuts - Not too easy to remember (like, Ctrl + F12 for Toggle Portrait / Landscape modes). I'd have preferred if the emulator itself has a help button, to show the shortcuts.</li>
	<li>Nothing to do with Android, but the bug in Helios (Eclipse Web tools plug-in) has become a pain, forcing me not to us any features while editing resources. Bug - https://bugs.eclipse.org/bugs/show-bug.cgi?id=318108</li>
	<li>Again, may not be related to ADT (frankly, I don't know), but the auto-complete context is very slow, taking 30-60 seconds (which is tooooo long, btw). Here again, I'm forced to disable Auto-Activation of context Assist at 'Window -&gt; Preferences -&gt; Java -&gt; Editor -&gt; Context Assist -&gt; Enable Auto Activation'</li>
	<li>I  can't run the application when my focus is on layout files (on resource files, for that matter). I always need to switch to a java file, to run (Ctrl + F11) the application</li>
	<li>The layout filenames cannot contain uppercase letters. If it contains, the error shown doesn't help in identifying it</li>
</ul>
Unclear points for me:
<ul>
	<li>In Android XML, for TabHost, @android:id/tabhost works ( i.e; referencing other element with tabhost id ). How can access this element from my Activity class? (since, no reference is created in R.id )</li>
	<li>Is XML compiled ? Or interpreted at Runtime? If compiled, how can I see the generated Java (?) files? (something similar to -keep compiler option in Flash Builder)</li>
	<li>And many other things (like, working of Intent, i18n, logging), but these are somethings I need to learn as I dive further in android..</li>
</ul>
Tasks for coming days:
<ul>
	<li>Finish the Tutorials in the resources, and then go to the samples folder available with the SDK.</li>
	<li>Try to make a couple of simple *usable* apps, so that I get enough practice with the SDK APIs</li>
</ul>
Also, attaching the projects <a title="HelloAndroid.zip" href="/assets/HelloAndroid.zip">HelloAndroid.zip</a> and <a title="HelloViews.zip" href="/assets/HelloViews.zip">HelloViews.zip</a> I made during my learning.

Wish me that I gain pace in learning Android over the next few weeks...
