---
layout: post
title: 'Subdomains on localhost'
categories:
- Technical
- Tutorial
tags:
  - webdev
  - xampp

---

<span style="font-size:onload;">Intro</span>
Developing websites on localhost may sometimes need making of sub domains. Installing and running another server for this purpose is useless, consumes more resources etc. So here is the technique to make sub domains on localhost.

You can also use this to host more than one site on localhost. i.e, you can host multiple sites situated on different folders.

<span style="font-weight: bold;">PS</span>: This is for Apache configuration.

<span style="font-size:130%;">Steps</span>

First decide on the subdomain names...
for eg: sub.localhost, sub2.localhost, alt.localhost , images.localhost etc..
You can also name www.name.com. (Please note that if there is a site with that name on the net, you wont be able to access that site on the internet.)

Second making these sites to point to 127.0.0.1, for this you can edit the HOSTS file on windows. The HOSTS file found on Windows (and linux too) is like a local DNS (domain name server). When you type a url on the browsers address bar, the domain name is converted to the IP of the server by a DNS lookup by the browser. Now here is the catch ... Windows first looks at the HOSTS file before doing any DNS lookup. So we can block certain sites by editing the HOSTS file.

HOSTS file is found typically here ...

Windows XP    : C:\WINDOWS\SYSTEM32\DRIVERS\ETC
Windows 2K    : C:\WINNT\SYSTEM32\DRIVERS\ETC
Windows 98/ME : C:\WINDOWS

Linux  : /etc/

The Lines followed by a # are comments and explains how to use the HOSTS file.127.0.0.1 is the IP address that is used to loopback to your computer itself.

Now add to HOSTS line
127.0.0.1 &lt;hostname&gt;
Egs:
127.0.0.1 sub.localhost
127.0.0.1 sub1.localhost
127.0.0.1 sub2.localhost
127.0.0.1 images.localhost
127.0.0.1 mysiteonmycomp.com
127.0.0.1 images.mysiteonmycomp.com

Next we have to assign each of these different URL's to different folders.
This is done on the apache conf file. (httpd.conf file situated in apache\conf\ directory).
Note that if you are using XAMPP, the virtual hosts file is at apache\conf\extra\httpd-vhosts.conf

Scroll all the way down the httpd.conf file until you reach about Virtual Hosts.
Add for each domain (or subdomain)

NameVirtualHost &lt;sitename&gt;:80

&lt;virtualhost &lt;sitename&gt;:80&gt;
ServerName &lt;sitename&gt;
DocumentRoot DocumentRoot-see example
DirectoryIndex index.php index.html index.html index.htm index.shtml
&lt;/VirtualHost&gt;
You can also any valid extra parameters also (like ServerAdmin, ServerAlias etc.)

<span style="font-weight: bold;">eg:</span>

NameVirtualHost saiprasad.com:80
&lt;virtualhost saiprasad.com:80&gt;
ServerAdmin webmaster@localhost
DocumentRoot "C:/xampp/htdocs/www"
ServerName saiprasad.com
ServerAlias www.saiprasad.com
&lt;/virtualhost&gt;

NameVirtualHost test.saiprasad.com:80
&lt;virtualhost test.saiprasad.com:80&gt;
ServerAdmin webmaster@myjoomlasite.com
DocumentRoot "C:/xampp/htdocs/test"
ServerName test.saiprasad.com
&lt;/virtualhost&gt;

NOTE : All the DocumentRoots must be under the DocumentRoot (i.e; must be a sub-directory) specified in httpd.confd.
For example, in XAMPP, the default DocumentRoot is "C:/xampp/htdocs". Therefore, the DocumentRoot of any virtual host cannot be given as : "C:/xampp/test". The folder must be under "C:/xampp/htdocs".
