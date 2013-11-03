---
layout: post
title: 'C++ Quickies #I : Long live the STL'
categories: Technical
tags:
  - c
  - stl

---

Its been quite some time (16+ months) I've been out of college and started using STL. Trust me, I didn't know much about STL in college, though I used std::string & std::vector everywhere I could. Now, it seems like I couldn't (wouldn't ?) write a program without using STL at all. A few snippets that I really found useful (and simple) and I regularly use where ever possible.

To output the elements (all / subset) in a container (lets say vector), separated by a delimiter, say new line:

```
    #include <algorithm>
    std::copy(v.begin(), v.end(), std::ostream_iterator(std::cout, "\n"));
```

Want to sort an array? No problem ... :)

```
    #include <algorithm>
    std::sort(array, array + lengthOfArray);
```

Read from the standard input into a vector until the end-of-stream?

```
    #include <algorithm>
    #include <iterator>
    #include <vector>

    typedef std::istream_iterator<int> istream_iterator_int;
    std::vector<int> v;
    istream_iterator_int start (std::cin);
    istream_iterator_int end;
    std::back_insert_iterator<vector<int> > dest (v);
    std::copy (start, end, dest);

```

Count the no. of instances an object is found?

```
    #include &lt;algorithm&gt;
    size_t count = std::count(v.begin(), v.end(), 42); // Returns no. of elements in v with value 42.

```

And let me inform you... This is just a grain of what STL can do.... :)

References:

<a href="http://www.cs.brown.edu/~jak/proglang/cpp/stltut/tut.html">http://www.cs.brown.edu/~jak/proglang/cpp/stltut/tut.html</a>

<a href="http://www.cplusplus.com/reference/algorithm/">http://www.cplusplus.com/reference/algorithm/</a>
