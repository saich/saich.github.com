---
layout: post
comments: true
title: 'Doing things the HTML way'
categories:
- Technical
tags:
  - html

---

Hi,

Some points that come into handy while developing in HTML:
<ul>
	<li>Always use XHTML tags. meaning that, your HTML should be well-formed XML (closing  &amp; ending tags should be present). Like, for example, use &lt;br/&gt; instead of &lt;br&gt;</li>
	<li>Try to use XHTML 1.0 strict as much as possible. But, this mode doesn't support target attribute on anchor (&lt;a&gt;) links. If you need to specify 'target' on links, they you should be using XHTML 1.0 transitional doctype.</li>
	<li>Always specify the doctype of your HTML page. Also just run the validator test available at w3c.org to know where are deviating from the standards specified. And fix as much as possible to make it closer to standards.</li>
	<li>IE doesn't support *.ico [Icons] files as images in &lt;img&gt; tags. So, make sure that your images are NOT ico types.</li>
	<li>Are you developing site in non-English language? Then, knowing about<strong> Dynamic Fonts</strong> is a must before implementation. Try to find more about it from Google ( I have no experience with them to tell you :-( )</li>
	<li>A common bad practice among beginners: Uploading a large image to the server (like, 1024 * 768) &amp; then set required image &amp; height(200 * 150)  in HTML. This would cause unnecessary bandwidth waste which can be easily avoided by uploading the resized image of the desired dimensions.</li>
	<li>You should learn about 'Alternate Style-sheets' if you wanna provide multiple themes to the webuser. Basic usage of this can be found at: <a href="http://javascript.about.com/library/blswitch.htm">http://javascript.about.com/library/blswitch.htm</a></li>
	<li>One important, yet highly ignored practise, is providing a Print specific stylesheet for the page. This is possible by specifying media="print" on the stylesheet link, like <em>&lt;link type="text/css" rel="stylesheet" href="/css/print.css" media="print" /&gt;</em>. And, let all the unneccesary data be hidden in this css file (like, ads, navigational menu, header, search bar etc.). Keep the print to minimum.</li>
	<li>It would also look good if we provide the end-user a 'Print Preview' from inside our page itself. This isn't any magic, its similar to multi theming concept as said above.</li>
</ul>
Yes, I understand these are very basics, but don't we know that Basics are the building blocks of any application?

<strong>Update:</strong> The Print Preview concept is borrowed from <br /><a href="http://www.alistapart.com/d/printtopreview/example.html">http://www.alistapart.com/d/printtopreview/example.html</a>. <br />Click on 'Print this Page' on the LHS of the page &amp; see that page layout changes, giving the user the Print Preview Experience
