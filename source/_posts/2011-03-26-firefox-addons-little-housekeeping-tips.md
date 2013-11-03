---
layout: post
title: 'Firefox Addons: Little Housekeeping Tips'
categories: Technical
tags:
  - addons
  - firefox
  - xpcom

---

I'm working on a Firefox addon in the last few weeks and this is my 1st experience with Firefox addons. During my tiny experience, I came across some of those little things that helps you when you're in trouble &amp; here I'm writing about those simple tips. Of course, I mixed some changes in Gecko 2.0 also along with these....

I know these are very basic, and almost everyone who worked on the addons might be knowing them, but hey, didn't I mention you that this is my first encounter with building firefox addon?

<strong>How can I be sure if a Binary XPCOM component is loaded / attempted to load from Firefox?</strong>

Close all Firefox windows and run the following from command line:

set NSPR_LOG_MODULES=all:5  
set NSPR_LOG_FILE=c:\ff.log  
C:\Program Files\Mozilla Firefox\firefox.exe  

What does it do? Line 1 sets the modules to load &amp; the log level. In the above commands, we are asking to log all modules with log level 5 (meaning all logs). Line 2 sets the path to log file. Now, just launch the Firefox from command line (so that the variables are set)

Troubleshooting Tip: Do not use quotes around the log file name, like set NSPR_LOG_FILE="C:\ff.log". I tried it the 1st time and it doesn't work.

References: <a title="MDC: Troubleshooting XPCOM components registration" href="https://developer.mozilla.org/en/Troubleshooting_XPCOM_components_registration">Troubleshooting XPCOM components registration</a>, <a title="NSPR Reference: Logging" href="http://www.mozilla.org/projects/nspr/reference/html/prlog.html">NSPR Logging</a>

<strong>How can I sure if an XPCOM component is successfully registered?</strong>

This works for both binary &amp; JS components.

Enable Chrome errors in Error Console, if you haven't done already! To enable, set <em>javascript.options.showInConsole</em> to <em>true</em> in <em>about:config</em> preferences.

Open Error Console (Ctrl+Shift+J)

Evaluate <em>Components.classes["components-contract-id"].name</em>. Use with the components' contract id.

If it gives no error, the component is successfully registered.

References:  <a href="http://kb.mozillazine.org/Javascript.options.showInConsole">javascript.options.showInConsole</a>,  <a title="MDC: Troubleshooting XPCOM components registration" href="https://developer.mozilla.org/en/Troubleshooting_XPCOM_components_registration">Troubleshooting XPCOM components registration</a>

<strong>How to log errors from the XPCOM components?</strong>

This is simple thing, and I realized a bit late about it. This is currently how I'm debugging my components (need to see if there is a better way). You can report error messages to the Error Console with:

<em>Components.utils.reportError("This is the description of the error");</em>

References: <a title="Error Console - MDC Doc Center" href="https://developer.mozilla.org/en/Error_Console">Error Console</a>

<strong>nsIConsoleService</strong>

The inconvenience with the reportError API is that it logs all messages as errors. To log at various levels (debug / warning / info), we can use the nsIConsoleService. The <em>logStringMessage()</em> function of this service looks very handy.

I haven't used it yet, so I cannot give any more information on this!

References: <a title="nsIConsoleService Documentation on MDC" href="https://developer.mozilla.org/en/XPCOM_Interface_Reference/nsIConsoleService">nsIConsoleService Reference</a>

<strong>UnPack option</strong>

If you are using binary components in the addon, you MUST set the unpack value to true in <em>install.rdf</em> file.

References: <a href="https://developer.mozilla.org/en/Install_Manifests#unpack">unpack in Install Manifests</a>

<strong>Bootstrap Addons</strong>

This feature introduced in Gecko 2.0 answers one of my long-time questions - <em>Why should I restart the browser everytime I add / update / disable / remove an addon?</em>

Though this feature is good, it looks complicated to do all the manual work<em>. </em>I've skipped trying this feature for now, but I'll look into this some other time.<em>
</em>

References: <a href="https://developer.mozilla.org/en/Extensions/Bootstrapped_extensions">Bootstrapped Extensions</a><strong>
</strong>

<strong>Gecko 2.0 XPCOM Changes</strong>

Though there are many changes, I'm listing the few which I came across.
<ul>
	<li>Javascript component must export NSGetFactory() instead of NSGetModule() function. Binary component must export NSModule() instead of NSGetModule() function. I've explained this in detail in the next section.</li>
	<li>Components in components/ folder are no longer auto-registered &amp; auto-loaded. Components registration will be done through the manifest file.</li>
	<li>Category Registrations are done through manifest file. Also, category names are modified.</li>
	<li>You'll have to use the XULRunner SDK 2.0 for Gecko 2.0</li>
</ul>
Troubleshooting Tip: Use the sample CPP file (from the references) to get started for binary components. I got a few compilation errors initially, and then I has to add <em>MOZ_NO_MOZALLOC</em> to preprocessor definitions as read somewhere, and it worked..

References: <a title="XPCOM Changes in Gecko 2.0" href="https://developer.mozilla.org/en/XPCOM/XPCOM_changes_in_Gecko_2.0">XPCOM Changes in Gecko 2.0</a>, <a href="http://mxr.mozilla.org/mozilla-central/source/xpcom/sample/nsSampleModule.cpp">nsSampleModule.cpp source code</a><strong>
</strong>

<strong>Component Registration in Firefox 4.0</strong>

All the components to be registered has to mentioned in the <em>chrome.manifest</em> file.
<ul>
	<li>All the interfaces (xpt files) are to be registered using <em>interfaces</em> command</li>
	<li>A JS component must use <em>component</em> command. It needs to mention its class id also. The contract id can be assigned to this JS component by a separate <em>contract</em> command.</li>
	<li>A binary component can be registered with <em>binary-component</em> command. A binary component registration need not specify any class-id or contract-id in the manifest file, since they are available through the exported NSModule() function.</li>
</ul>
References: <a href="https://developer.mozilla.org/en/Chrome_Registration">Chrome Registration</a>

If you have felt all the content is copied from somewhere, its ok because its true. I've learned many things from <a title="Mozilla Developer Center" href="https://developer.mozilla.org">MDC</a> itself, I'm just aggregating those things here!!

If I've got something wrong in here, please do mention them in the comments as I have to correct them in the post as well as in my mind...
<div id="_mcePaste" class="mcePaste" style="position: absolute; left: -10000px; top: 0px; width: 1px; height: 1px; overflow: hidden;"><span class="Apple-style-span" style="border-collapse: separate; color: #000000; font-family: 'Times New Roman'; font-style: normal; font-variant: normal; font-weight: normal; letter-spacing: normal; line-height: normal; orphans: 2; text-align: -webkit-auto; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; font-size: medium;"><span class="Apple-style-span" style="color: #333333; font-family: 'Lucida Grande', 'Lucida Sans Unicode', Lucida, Arial, Helvetica, sans-serif; font-size: 14px; line-height: 18px;">&nbsp;
<h1 id="title" class="first" style="margin-top: 0px; margin-right: 0px; margin-bottom: 0.8em; margin-left: 0px; font-size: 1.857em; width: 819px; padding: 0px;">Troubleshooting XPCOM components registration</h1>
&nbsp;

</span></span></div>
