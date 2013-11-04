---
layout: post
comments: true
title: 'I had a problem'
categories:
- Technical
tags:
  - c
  - files

---

## Symptoms:
- Language: C++
- Operating System: Windows
- Target Audience: Programmers
- Sub Area: Reading ASCII / UTF-8 files from the disk using C++ streams.
- Trouble: How to handle files whose file names contains non-ASCII characters?? (coz ifstream takes a ASCII file path :-( )

## Solution:

- Use `_wfopen_s()`, the safe version of `_wfopen()`, which takes a wide-character file name & gives a `FILE` pointer i.e; `FILE*`.
- Use the obtained `FILE*` to create a stream, like `ifstream in(fp);`
- We used wide-character file name & are reading the file byte-by-byte (actually, its char). DONE !! :-)


BTW, I got help from [here](http://bytes.com/topic/net/answers/264598-iostream-question-how-open-unicode-file-name)! Hope this saves  time for someone out there...
