---
layout: post
title: 'I had a problem'
categories:
- Technical
tags:
  - c
  - files

---

<strong>Symptoms: </strong>
<ul>
	<li>Language: C++, Operating System: Windows</li>
	<li>Target Audience: Programmers</li>
	<li>Sub Area: Reading ASCII / UTF-8 files from the disk using C++ streams.</li>
	<li>Trouble: How to handle files whose file names contains non-ASCII characters?? (coz ifstream takes a ASCII file path :-( )</li>
</ul>
<strong>Solution:</strong>
<ul>
	<li>Use _wfopen_s(), the safe version of _wfopen(), which takes a wide-character file name &amp; gives a FILE pointer i.e; FILE*.</li>
	<li>Use the obtained FILE* to create a stream, like ifstream in(fp);</li>
	<li>We used wide-character file name &amp; are reading the file byte-by-byte (actually, its char). DONE !! :-)</li>
</ul>
BTW, I got help from <a href="http://bytes.com/topic/net/answers/264598-iostream-question-how-open-unicode-file-name">here</a> ! Hope this saves  time for someone out there...
