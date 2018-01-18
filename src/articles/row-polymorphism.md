# Row Polymorphism

I am working on a type-inference algorithm that extends basic Hindley-Milner
type inference with row variables for type lists and a limited form of recursive types.

Most articles on row polymorphism discuss it in the context of record types, however 
my interest is in using row variables to capture arbitrary changes to a stack. 

One advantage or Row polymorphism is that in a stack-based language all function can be 
expressed using a single type (S1 -> S2) 

[Objects and Aspects: Row Polymorphism. Slide deck by Neel Krishnaswami](https://www.cs.cmu.edu/~neelk/rows.pdf)
[Row Polymorphism Isn't Subtyping. Blog post by Brian McKenna — 2013-05-05](https://brianmckenna.org/blog/row_polymorphism_isnt_subtyping)
[What are the major differences between row polymorphism and subtyping](https://cs.stackexchange.com/questions/53998/what-are-the-major-differences-between-row-polymorphism-and-subtyping)
[University of Cambridge Lecture Notes](https://www.cl.cam.ac.uk/teaching/1415/L28/rows.pdf)
[Row Polymorphism discussion on Y-Combinator](https://news.ycombinator.com/item?id=13047934)
[Haskell Reddit Conversation](https://www.reddit.com/r/haskell/comments/4f7fyn/what_are_row_types_exactly/)
[Real World O'Caml](https://realworldocaml.org/v1/en/html/objects.html)
[Does F# have row polymorphism (or something similar?)
](https://stackoverflow.com/questions/29531852/does-f-have-row-polymorphism-or-something-similar
)
[Why Concatenative Programming Matters by Jon Purdy](http://evincarofautumn.blogspot.ca/2012/02/why-concatenative-programming-matters.html)
[Koka Language dy Daan Liejen](https://www.microsoft.com/en-us/research/project/koka/?from=http%3A%2F%2Fresearch.mic1rosoft.com%2Fen-us%2Fprojects%2Fkoka%2F7)
[Records, sums, cases, and exceptions: Row-polymorphism at work](http://lambda-the-ultimate.org/node/4631)
[CTRex: a library for Haskell which implements extensible records ](https://wiki.haskell.org/CTRex)


The most important link and discussion I have found is the following: 


[why does OCaml use subtyping for polymorphic variants? Stackoverflow answer by Andreas Rossberg](https://stackoverflow.com/questions/16773384/why-does-ocaml-use-subtyping-for-polymorphic-variants)

Who is Andreas Rossberg? 

See https://people.mpi-sws.org/~rossberg/

GLSL Code:

// https://github.com/3b/3bgl-shader
// https://github.com/yglukhov/nimsl
// https://thebookofshaders.com/appendix/04/
// https://github.com/jaredloomis/andromeda
// https://github.com/AlexanderDzhoganov/GLSLplusplus
// http://lambdacube3d.com/related
// https://github.com/aubreyrjones/parasol



Things that might be novel: 

1. using row variables for stack operations in a functional stack-based language
1. providing a practical and simple implementation of HM extended with stack variables
1. explaining type checking and type inference to any programmer 
1. implementing a shader language without the need of explcit types 
1. dealing with cycles in a type-inference algorithm
1. because of row polymorphism having only one signature for all "apply" forms regardless of the number of arguments 
1. using row polymorphism to have a universal compose 
1. Modeling stack effects using row polymorphism  

Things that I could do:

1. write a technical report
1. write technical journal articles that are outside of the typical domain (joining up different domains)
1. moving type theory outside of PLDI PLAI PLOP etc. 
1. adding meta-programming to a type system 

What I want:

1. Teach at a university
1. Publish important computer science papers
1. Contribute to the state of the art of computer science 

Papers I could write:

1. Modeling stack effects using row polymorphism
1. Writing an efficient R-D parser without memoization 
1. Extending HM with Row Polymorphism 
1. Type Level Computation 
1. Implementing the SK Calculus in a Concatenative System
1. Lambda Calculus to Concatenative Calculus
1. Typing the Concatenative Calculus
1. Origins of a Concatenative Calculus

//==

// GLSL Subtyping
// ===============

// https://github.com/3b/3bgl-shader
// https://github.com/yglukhov/nimsl
// https://thebookofshaders.com/appendix/04/
// https://github.com/jaredloomis/andromeda
// https://github.com/AlexanderDzhoganov/GLSLplusplus
// http://lambdacube3d.com/related
// https://github.com/aubreyrjones/parasol

// TODO: 
// https://stackoverflow.com/questions/415532/implementing-type-inference

// https://www2.ccs.neu.edu/racket/pubs/dissertation-kleffner.pdf

// Heron to C++, JavaScript, GLSL. 
// Row Polymorphism



