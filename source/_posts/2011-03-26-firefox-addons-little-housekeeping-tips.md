---
layout: post
comments: true
title: 'Firefox Addons: Little Housekeeping Tips'
categories: Technical
tags:
  - addons
  - firefox
  - xpcom

---

I'm working on a Firefox addon in the last few weeks and this is my 1st experience with Firefox addons. During my tiny experience, I came across some of those little things that helps you when you're in trouble & here I'm writing about those simple tips. Of course, I mixed some changes in Gecko 2.0 also along with these....

I know these are very basic, and almost everyone who worked on the addons might be knowing them, but hey, didn't I mention you that this is my first encounter with building firefox addon?

### How can I be sure if a Binary XPCOM component is loaded / attempted to load from Firefox?

Close all Firefox windows and run the following from command line:
```
set NSPR_LOG_MODULES=all:5  
set NSPR_LOG_FILE=c:\ff.log  
C:\Program Files\Mozilla Firefox\firefox.exe  
```

What does it do? Line 1 sets the modules to load & the log level. In the above commands, we are asking to log all modules with log level 5 (meaning all logs). Line 2 sets the path to log file. Now, just launch the Firefox from command line (so that the variables are set)

Troubleshooting Tip: Do not use quotes around the log file name, like `set NSPR_LOG_FILE="C:\ff.log"`. I tried it the 1st time and it doesn't work.

References: <a title="MDC: Troubleshooting XPCOM components registration" href="https://developer.mozilla.org/en/Troubleshooting_XPCOM_components_registration">Troubleshooting XPCOM components registration</a>, <a title="NSPR Reference: Logging" href="http://www.mozilla.org/projects/nspr/reference/html/prlog.html">NSPR Logging</a>

### How can I sure if an XPCOM component is successfully registered?

This works for both binary & JS components.

Enable Chrome errors in Error Console, if you haven't done already! To enable, set `javascript.options.showInConsole` to `true` in `about:config` preferences.

Open Error Console (Ctrl+Shift+J)

Evaluate `Components.classes["components-contract-id"].name`. Use with the components' contract id.

If it gives no error, the component is successfully registered.

References:  <a href="http://kb.mozillazine.org/Javascript.options.showInConsole">javascript.options.showInConsole</a>,  <a title="MDC: Troubleshooting XPCOM components registration" href="https://developer.mozilla.org/en/Troubleshooting_XPCOM_components_registration">Troubleshooting XPCOM components registration</a>

### How to log errors from the XPCOM components?

This is simple thing, and I realized a bit late about it. This is currently how I'm debugging my components (need to see if there is a better way). You can report error messages to the Error Console with:

```
    Components.utils.reportError("This is the description of the error");
```

References: <a title="Error Console - MDC Doc Center" href="https://developer.mozilla.org/en/Error_Console">Error Console</a>

### nsIConsoleService

The inconvenience with the reportError API is that it logs all messages as errors. To log at various levels (debug / warning / info), we can use the `nsIConsoleService`. The `logStringMessage()` function of this service looks very handy.

I haven't used it yet, so I cannot give any more information on this!

References: <a title="nsIConsoleService Documentation on MDC" href="https://developer.mozilla.org/en/XPCOM_Interface_Reference/nsIConsoleService">nsIConsoleService Reference</a>

### UnPack option

If you are using binary components in the addon, you MUST set the unpack value to true in `install.rdf` file.

References: <a href="https://developer.mozilla.org/en/Install_Manifests#unpack">unpack in Install Manifests</a>

### Bootstrap Addons

This feature introduced in Gecko 2.0 answers one of my long-time questions - <em>Why should I restart the browser everytime I add / update / disable / remove an addon?</em>

Though this feature is good, it looks complicated to do all the manual work. I've skipped trying this feature for now, but I'll look into this some other time.

References: <a href="https://developer.mozilla.org/en/Extensions/Bootstrapped_extensions">Bootstrapped Extensions</a>

### Gecko 2.0 XPCOM Changes

Though there are many changes, I'm listing the few which I came across.

- Javascript component must export `NSGetFactory()` instead of `NSGetModule()` function. Binary component must export `NSModule()` instead of `NSGetModule()` function. I've explained this in detail in the next section.
- Components in components/ folder are no longer auto-registered & auto-loaded.Components registration will be done through the manifest file.
- Category Registrations are done through manifest file. Also, category names are modified.
- You'll have to use the XULRunner SDK 2.0 for Gecko 2.0

Troubleshooting Tip: Use the sample CPP file (from the references) to get started for binary components. I got a few compilation errors initially, and then I has to add `MOZ_NO_MOZALLOC` to preprocessor definitions as read somewhere, and it worked..

References: <a title="XPCOM Changes in Gecko 2.0" href="https://developer.mozilla.org/en/XPCOM/XPCOM_changes_in_Gecko_2.0">XPCOM Changes in Gecko 2.0</a>, <a href="http://mxr.mozilla.org/mozilla-central/source/xpcom/sample/nsSampleModule.cpp">nsSampleModule.cpp source code</a>

### Component Registration in Firefox 4.0

All the components to be registered has to mentioned in the `chrome.manifest` file.

- All the interfaces (xpt files) are to be registered using `interfaces` command.
- A JS component must use `component` command. It needs to mention its class id also. The contract id can be assigned to this JS component by a separate `contract` command.
- A binary component can be registered with `binary-component` command. A binary component registration need not specify any class-id or contract-id in the manifest file, since they are available through the exported `NSModule()` function.

References: <a href="https://developer.mozilla.org/en/Chrome_Registration">Chrome Registration</a>

If you have felt all the content is copied from somewhere, its ok because its true. I've learned many things from <a title="Mozilla Developer Center" href="https://developer.mozilla.org">MDC</a> itself, I'm just aggregating those things here!!

If I've got something wrong in here, please do mention them in the comments as I have to correct them in the post as well as in my mind...