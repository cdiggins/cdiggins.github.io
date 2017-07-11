# Introducing the Myna Parsing Library

[Myna](https://cdiggins.github.io/myna-parser/) is an [open-source](https://github.com/cdiggins/myna-parser) recursive descent parsing library written in a combination of JavaScript / TypeScript. 

## Why another parsing library 

I wrote Myna because I believed that: 

* Code-generators (e.g. [Jison](http://jison.org/), [PEG.js](https://pegjs.org/), [nearley](http://nearley.js.org/), and [ANTLR](http://www.antlr.org/)) are harder to work with than libraries or embedded DSLs (Domain Specific Languages)
* Existing parsing libraries for JavaScript (e.g. [Parsimmon](https://github.com/jneen/parsimmon) and [Chevrotain](https://github.com/SAP/chevrotain)) could be made easier to use and learn

## Recursive Descent Parsers and Parsing Expression Grammars 

A recursive descent parser is a parser that recognizes phrases in a grammar by trying to match the input to different grammar productions alternatives recursively until it succeeds, backtracking if a grammar production fails. 

A Parsing Expression Grammar (PEG) is a formal way of expressing the grammar of a language that is based on string matching rather than string generation. Compared with other grammar forms like EBNF It allows grammars to have zero-length rules (assertions) and the order is strictly specified forcing it to be unambiguous.

As a result every PEG grammar can be easily apped to a recursive-descent parser. 

## History 

This is my third open-source recursive-descent parsing library. My first was written in C++ and was called [YARD](https://www.codeproject.com/Articles/9121/Parsing-XML-in-C-using-the-YARD-Parser). It was based on the idea of using templates to combine parsing rules defined as low-level types. It was inspired by the [Boost.Spirit](http://boost-spirit.com/home/) parser by Joel de Guzman and in turn inspired the [PegTL](https://github.com/taocpp/PEGTL) by Colin Hirsch and Daniel Frey.

My second recursive-descent parsing library was the [Jigsaw library](https://www.codeproject.com/Articles/272494/Implementing-Programming-Languages-using-Csharp) written in C#. 


