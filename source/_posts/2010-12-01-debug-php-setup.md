---
layout: post
title: 'Debug PHP: Setup'
categories: Technical
tags:
  - eclipse
  - php
  - phpeclipse
  - setup
  - xdebug

---

Okay! I forgot how to set up debug for my PHP, so I had trouble today trying to set it up today and had to spend about an hour to do so... So, I decided I should note it down for future reference and hence I'm here now!

Tools: PHPEclipse, PHP 5.3.3, XDebug

1. Make a PHP file with content as `<?php echo phpinfo(); ?>` and browse the page on localhost.
2. Copy the source of the above page from the browser and paste it in <a href="http://xdebug.org/find-binary.php">http://xdebug.org/find-binary.php</a> and click "Analyze my phpinfo() output". This step will give you tailored instructions on how to setup, especially points to the right DLL to use.
3. Be careful with the editing `php.ini` file. Prefer to add the zend_extension line at the top of the file (It doesn't work if its the last line).
4. And start debugging from the Eclipse IDE !!
