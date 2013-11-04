---
layout: post
comments: true
title: 'Installing Android !!!'
categories: 
- Technical
- Tutorial
tags:
  - android

---

Few steps for setting up things before developing applications for Android....
<ul>
	<li>Download &amp; Install JRE from<a href="http://www.java.com/en/download/manual.jsp"> http://www.java.com/en/download/manual.jsp</a></li>
	<li>Download &amp;  Extract Eclipse IDE for Java Developers from <a href="http://www.eclipse.org/downloads/">http://www.eclipse.org/downloads/</a></li>
	<li>Download the latest version of Android SDK from<a href="http://developer.android.com/sdk/"> http://developer.android.com/sdk/</a></li>
	<li>Download ADT (Android Development Tools) from<a href="http://developer.android.com/sdk/adt_download.html"> http://developer.android.com/sdk/adt_download.html</a></li>
	<li>Start Eclipse, then select <strong>Help</strong> &gt; <strong>Software Updates</strong> &gt; <strong>Find and Install...</strong>.</li>
	<li>Select <span style="font-weight: bold;">Archive</span> and then browse to the downloaded ADT Zip file.</li>
	<li> You should see the plugin listed by the URL,     with "Developer Tools" nested within it. Select the checkbox next to        Developer Tools and click <strong>Install...</strong></li>
	<li>On the subsequent Install window, "Android DDMS" and "Android Developer Tools"     should both be checked. Click <strong>Next</strong>, then <span style="font-weight: bold;">Finish. </span>Restart Eclipse.</li>
	<li>Select <strong>Window</strong> &gt; <strong>Preferences...</strong> to open the Preferences         panel (Mac: <strong>Eclipse</strong> &gt; <strong>Preferences</strong>).</li>
	<li>Select <strong>Android</strong> from the left panel.</li>
	<li>For the <em>SDK Location</em> in the main panel, click <strong>Browse...</strong> and  locate your downloaded SDK directory. Click <strong>Apply</strong>, then <strong>OK</strong>.</li>
	<li>Now, lets install an AVD (Android Virtual Device). Navigate to /tools in a command line and execute:
<pre>android create avd --name  #your_avd_name# --target #targetid#</pre>
</li>
	<li>Just press <span style="font-weight: bold;">Enter</span> when asked to create an hardware profile.</li>
</ul>
Now you are done with setup....... Happy developing with Android !!!   
Start with<span style="font-style: italic;"> Hello, World</span> program in the documentation.

--  
Sai Prasad
