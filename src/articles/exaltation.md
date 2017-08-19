# The Exaltation Blog Generator

Using tools built with the [Myna parsing library](http://cdiggins.github.io/myna-parser) I have released the blog generation software I used for [my personal blog](https://cdiggins.github.io) in a standalone repository called [Exaltation](http://cdiggins.github.io/exaltation).

Exaltation is designed for people with some some rudimentary programming knowledge, but who don't want to go through the effort of having to learn a bunch of web technologies and frameworks. 

### Using Myna in Practice

One of the motivations for the Exaltation project was also to demonstrate that the  [Myna library](http://cdiggins.github.io/myna-parser) is a mature and capable parsing library by using it in a real application. I used Myna sample tools to parse Mustache templates and markdown files.

### Main Features

Here are some of the features of Exaltation: 

* Blog post authoring in markdown
* Simple article management with support for drafts
* Fast static HTML page generation for faster web page serving
* Google analytics support
* RSS feed generation 
* Highly configurable from one JavaScript configuration file
* No complex system of plug-ins or templates, just edit the source
* Recursive Mustache style template expansion 
* Responsive web-sites that present well on Mobile and Desktop via Bootstrap

### Trying to Keep things Simple

I think that the biggest selling point of Exaltation is that the implementation is dead simple. It is less than 200 lines of JavaScript in a single file, and has a dependency on only the [Myna parser module](https://www.npmjs.com/package/myna-parser), which in turn has no other dependencies. 

Anyway, I hope you find the blog generator useful in some manner or another. Enjoy! 
