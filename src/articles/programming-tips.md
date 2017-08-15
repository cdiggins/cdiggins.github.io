# Tips for Writing Better and more Reusable Code

>>> My 30+ years experience trying to write better and better software distilled down into 10 best practices.  

Good code is code that easy to debug, change, understand, and reuse, and has low number of defects. Obviously it takes a bit more time to write good code, but it also has more value in the long term, because it costs less to maintain and is more reusable.

I spent a few years trying to learn how to write better code and I came up with a set of ten tips that I've found work surprisingly well.

## 1. Use Lots of Small Functions

Functions are the single most important form of abstraction in a programmer's arsenal. Small functions that follow the [Single responsibility principle](https://en.wikipedia.org/wiki/Single_responsibility_principle) are more likely to be reused. Bigger functions should be composed of a small set of calls to smaller functions.

## 2. Explicitly pass any required values as function arguments 

You should minimize shared state between functions, whether it is a file scoped variable or object's member fields. A function that always returns the same value based on its argument is much easier to reuse and maintain. This implies that you should prefer static functions over member functions. 

## 3. Localize Side Effects 

Side-effects (e.g. printing to console, logging, changing global state, file-system manipulations) should be placed in separate modules, and not scattered throughout the code. Often side-effects in functions are violating the single responsibility principle. 

## 4. Prefer Immutable Objects 

If an object's state is set once in its constructor and never changed again it become far easier to debug and validate that the object does what it is supposed to since there is no chance of it changing during it's lifetime. This is one of the easiest ways to reduce complexity in a software project.

## 5. Interfaces over classes

Functions that accept an interface are easier to reuse than functions that operates on a class, which is a specific implementation of an interface (explicit or implicit).

## 6. Apply good coding principles to sub-modules

Programmers sometimes don't take the time to break up a software project into smaller modules that make up their software (e.g. libraries and applications). The key principles to follow for modules are:

1. Minmize dependencies 
2. Single point of responsibility
3. Don't repeat yourself 

So this implies keeping your project small and well-defined. 

## 7. Avoid Inheritance

In object-oriented programming, inheritance, especially with virtual functions is a dead-end in terms of reusability. I have had very little success working with libraries that encourage overriding classes. I believe that this is why the MFC (Microsoft Foundation Classes) was so hard to use compared to the .NET System Libraries. 

## 8. Test as you Design and Develop

I am not a hard-core advocate of test-driven development asproscribed by its acolytes, but writing tests as you go encourages your code to naturally follow these guidelines, and it helps to assure that you catch design error earlies. Avoid writing stupid tests though. Good coding practices mean that higher level tests (e.g. integration tests or feature tests over unit tests) are much more effective at revealing defects. 

## 9. Prefer Standard Libraries to Hand-Rolled Ones 

It is sometimes tempting to write a better version of `std::vector` or `std::string`, but it almost invariably a waste of time and effort. Apart from the obvious fact that you are introducing a new place for having bugs, other programmers are far less likely to reuse your code as opposed to something well known, supported, and proven. 

## 10. Avoid Code Where Possible

This is the most important tip that every programmer should follow. 

The best code is the code that is never written. Before writing code ask yourself, is there a tool or library that does what you need? Do you really need that function as opposed to calling another one that already exists? 

## Enjoy Coding

Enjoy yourself! 




