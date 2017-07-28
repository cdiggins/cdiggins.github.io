# The Myna Markdown Parser

In order to demonstrate using Myna as for real-world tasks I created a Markdown parser with it which I used to build [my blog](http://cdiggins.github.io/blog.html) and the [Myna web-site](http://cdiggins.github.io/myna-parser) with it.  

The Myna parser starts with [a simple grammar to parse the Markdown](https://github.com/cdiggins/myna-parser/blob/master/grammars/grammar_markdown.js). The generated abstract syntax tree (AST) is converted to HTML by the file [`myna_markdown_to_html.js`](https://github.com/cdiggins/myna-parser/blob/master/tools/myna_markdown_to_html.js).

[This test file](https://github.com/cdiggins/myna-parser/blob/master/tests/test_markdown_to_html.js) shows the Markdown to HTML parser in action. You can run it using the command:

```
    node tests\test_markdown_to_html
```

This will generate a test file `tests\output\readme.html` from the `readme.md` source file. 

## An Invitations

The converter is far from beging as full featured as other specialized JavaScript Markdown parsers. However, you may find the code easier to manage and extend than some of the other libraries which come in at over a thousand lines of code.  

While Myna is under active development, I don't plan on making any significant additions to the myna Markdown parser, as it is sufficient for my needs, and it was intended as a demo of Myna. However, I'd love to hear if you fork the code or make any changes. 

## Other Markdown Parsers in JavaScript

In the interest of completeness here is a short list of various Markdown parsers written in JavaScript if you want to compare, or find something more specialized. 

- [Marked](https://github.com/chjj/marked) - 13,470 stars
- [Markdown-js](https://github.com/evilstreak/markdown-js) - 6,047 stars
- [Showdown](https://github.com/showdownjs/showdown) - 5,133 stars
- [Markdown-It](https://github.com/markdown-it/markdown-it) - 3,803 stars
- [Remarkable](https://github.com/jonschlinkert/remarkable) - 3,362 stars
- [Strapdown](https://github.com/arturadib/strapdown) - 1,696 stars 
- [Remark-js](https://github.com/wooorm/remark) - 998 stars
- [Marky-markdown](https://github.com/npm/marky-markdown) - 303 stars
- [Simple Markdown](https://github.com/Khan/simple-markdown/blob/master/simple-markdown.js) - 166 stars
- [Micromarkdown](https://github.com/SimonWaldherr/micromarkdown.js) - 142 stars
- [Textile-js](https://github.com/borgar/textile-js) - 135 stars
- [Pagedown](https://github.com/StackExchange/pagedown) - 93 stars

