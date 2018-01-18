# What is a Concatenative Programming Language and Why Does it Matter? 

Virtually all self-described concatenative languages consist of terms that define  transformations between stacks. The juxtaposition of terms implies the composition of the effect of those two functions in reverse order.  

Stack oriented languages are languages where most operations take argument from and push results to one or more shared stack data structures. 

Concatenative languages are of interest because they blend an imperative model of computation (do something to a stack, do something else to the stack) with a pure functional computational model based on function composition.

## The Stack as a Tuple 

In strongly typed concatenative languages the stack is really a tuple with a known size: it can't blow up. This is a very valuable property albeit a potentially restrictive one. 

The immediate question becomes, how to implement recursive function. Recursion can be implemented via primitive forms that are built into to a concatenative language and use a temporary storage other than the real stack. 

The advantage of having a stack whose structure and size can be queried at any point are increased security, and the ability to implement the language on extremely restricted hardware (e.g. GPUs or embedded devices). 
 
## Dipping and Two Stacks 

http://evincarofautumn.blogspot.com/2012/02/why-concatenative-programming-matters.html 
https://stackoverflow.com/questions/2792941/role-of-combinators-in-concatenative-tacit-programming-languages/2795529#2795529 
https://github.com/leonidas/codeblog/blob/master/2012/2012-02-17-concatenative-haskell.md
https://stackoverflow.com/questions/2792941/role-of-combinators-in-concatenative-tacit-programming-languages/2795529#2795529 
https://en.wikipedia.org/wiki/Tacit_programming 
http://www.cs.tufts.edu/~nr/ 
https://stackoverflow.com/questions/907263/explain-concatenative-languages-to-me-like-im-an-8-year-old 

https://www.reddit.com/r/haskell/comments/ptji8/concatenative_rowpolymorphic_programming_in/

http://oxij.org/

http://lambda-the-ultimate.org/node/4448 -
https://github.com/Qqwy/Jux - 
http://kittenlang.org/faq/
http://citeseerx.ist.psu.edu/viewdoc/download?doi=10.1.1.121.1890&rep=rep1&type=pdf - Postfix DSLs Implemented in Haskell


A concatenative programming language is a higher-order postfix 
point-free language where the composition operator is implied and function 
abstraction (quotation) has its own operator. 

Like any language or calculus the expression of an algorithm or expression in one form versus another is not fundamentally different. All turing-complete languages are equivalent. 

What is interesteing is that expressing expressions in certain forms versus others reveal certain properties.

Examples:

* SKI 
* Lambda Calculus 
* Iota 
* 

## Omission of Composition Operator 

The fact that most concatenative languages omit a composition operator (e.g. .) is not particularly interesting. Whether or not a language has semicolons or dots in between operators or phrases is purely syntactic sugar. In the Haskell implementation of a "concatenative language3 

f. g. h 

is not different 

f g h

## Point-Free / Tacit / Compositional Languages



### Syntactic Transformation 

The advantages of point-free notation is that the form is linear: 

f1 . f2 . f3 . f4 (x)

Is a lot more amenable to syntactic transformation, and human understanding than:

f1(f2(f3(f4(x))))

Consider rewriting rules: 

g1 = f1 . f2
g2 = f3 . f4 
h1 = g1 . g2 = f1 . f2 . f3 . f4 
h1 (x) = g1 . g2 (x) = f1 . f2 . f3 . f3 (x)

## Evaluation Models 

### Evaluation via Operator Simplification 

The example of rewriting rules is very interesting: we can implement a concatenative language via rewriting rules.  

### Looking at the Type Signature

The type signature in some cases defines exactly the operation that is performed by 

## Explicit Quotation Operator

Most concatenative languages have a quotation operation which is equivalent to lambda abstraction. This is used to express higher-order functions and control flow. 

## Post-fix Notation 

## A Type System for Stack-Based Languages 

## Universal Application

One advantage of the model of using a stack (tuple) is that all functions can be executed using the single function: apply which takes a stack and outputs a new stack. In many strongly typed languages there are multiple overloads of function application, one depedning on the number of types. 

## REPL

One advantage of concatenative languages is the fact that they are reversed from traditional postfix terms. This means that a concatenative language can be easily used interactively from a REPL (Read-Eval-Print-Loop) without ever introducing new terms. 








