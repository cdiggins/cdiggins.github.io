# The Myna Static Blog Generator

Static HTML page generation is an interesting alternative to traditional dynamic content management systems (CMS).

The idea is quite simple, the content is stored offline, and HTML pages are generated/regenerated as needed using 
an offline tool and posted online. The advantage is that you don't need any kind of server side database or 
dynamic page generation technology like PHP or ASP. 

I used this approach in the early 2000's in an [online print and poster store](https://web.archive.org/web/20050210003619/http://print-and-poster.com) and found it made website much more more responsive and easier to manage. 

When I started looking for a new content manage to host my blog, I considered a static website generation tool called [Jekyll](https://jekyllrb.com/), but then I realized that if I had a Markdown parser
and a Mustache parser I could probably implement my own blog generation program quite easily using Node.JS. This was an excellent opportunity for me to test the [Myna parsing library](https://github.com/cdiggins/myna-parser) in a real-world context. 

# Source Code or It Didn't Happen

The source code to the site can be [found on this GitHub repository](https://github.com/cdiggins/cdiggins.github.io). The Myna [grammars for Mustache template and Markdown parsing can be found here](https://github.com/cdiggins/myna-parser/tree/master/grammars).