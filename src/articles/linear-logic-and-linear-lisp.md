# Linear Logic, Linear Lisp, Linear Types and Concatenative Languages

I have been revisiting an old gem of a paper by Henry Baker, dating back to 1991, called [Lively Linear Lisp -- 'Look Ma, No Garbage!'](http://home.pipeline.com/~hbaker1/LinearLisp.html). This paper came back up on my radar when I realized that the converting from the [Lambda Calculus](https://en.wikipedia.org/wiki/Lambda_calculus) to [Cat](https://github.com/cdiggins/cat-language) was closely related to converting to a linear Lambda calculus. 

Linear lisp is effectively a version of lisp where each variable is used exactly once. There is a correspondence between the Linear Lisp described by Baker, and Linear Lambda Calculus, and Linear Logic. 

My recent realization is that a stack language seems to be effectively a *linear language* which maps more closely to linear Lambda Calculus that vanilla Lambda Calculus. After reading Baker's paper, take a look at an informal (but still rigorous) article by Brent Kerby called the [Theory of Concatenative Combinators](http://tunes.org/~iepos/joy.html). In it he describes an encoding of the Lambda Calculus in a concatenative language and an algorithm for converting from this encoding to an actual point-free concatenative language. 

[Linear types](https://en.wikipedia.org/wiki/Substructural_type_system#Linear_type_systems) are more well known in the area of programming languages. They are a way of enforcing linear properties of certain values in a programming language. Basically a subset of the language is partially linear.

What I am investigating now, is whether the type system of Cat is a linear type system, and if so does it explain why I have been able to devise a [higher-order polymorphic type inference algorithm](https://github.com/cdiggins/type-inference) for it, while doing so for the Lambda Calculus remains hard. 

### Footnote

If you are unfamiliar with Concatenative languages and want a formal introduction I suggest [A Foundation for Typed Concatenative Languages](https://www2.ccs.neu.edu/racket/pubs/dissertation-kleffner.pdf), a Master's Thesis by Robert Kleffner

## Additional Reading

* [Henry Baker's home page](http://home.pipeline.com/~hbaker1/)
* [Chapter 6 - Linear Lambda Calculus](https://www.cs.cmu.edu/~./fp/courses/15816-f01/handouts/linlam.pdf) - handouts from Frank Pfennig's course on Linear Logic
* [Interpreter of Linear Lambda Calculus in Haskell](http://okmij.org/ftp/tagless-final/course/LinearLC.hs) - by Oleg Kiselyov
    * [School of Haskell Implementation of Oleg's LLC Interpreter](https://www.schoolofhaskell.com/user/mutjida/typed-tagless-final-linear-lambda-calculus/1-debruijn-typed-tagless-final-interpreter)
* [A type system for bounded space and functional in-place update](https://pdfs.semanticscholar.org/2fcc/9b18731f8f96eca9a3bc6855cb66a7f0d66f.pdf)
* [Linear types and non-size-increasing polynomial time computation](https://www.cs.cmu.edu/~fp/courses/15816-s12/misc/hofmann03ic.pdf) 
* [Linear Type Proposal for Haskell](https://ghc.haskell.org/trac/ghc/wiki/LinearTypes)

