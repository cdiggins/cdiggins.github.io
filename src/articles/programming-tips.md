# 10 Tips for Writing Better Code

> 30+ years experience trying to write better software distilled down into 10 best practices.

So what makes code *good*? 

Good code can be identified as code that is easy to read, understand, debug, and modify, and most importantly has very few defects. Obviously it takes a bit more time to write good code, but it also has more value in the long term, because it costs less to maintain and is more reusable. 

In fact we could probably equate good code with code which is **reusable**, which is the driving principle behind many of the tips listed here. Code might accomplish your short term goals as a programmer working on a specific feature, but if no one else wants to reuse it (including your future self) it must be lacking in some way. Either it is too complex, too specific, too likely to break under different circumstances, or maybe other programmers don't trust it. 

I have found that consistently trying to apply the following best practices to all code you write (including your experiments and prototypes) can lead to better code regardless of your level of experience. 

## 1. Follow the Single Responsibility Principle

Functions are the single most important form of abstraction in a programmer's arsenal. The more they can be reused the less code you have to write, and the more reliable they become. Smaller functions that follow the [Single responsibility principle](https://en.wikipedia.org/wiki/Single_responsibility_principle) are more likely to be resued

## 2. Minimize Shared State 

You should minimize implicit shared state between functions, whether it is a file scoped variable or object's member fields, in favor of explicitly required values as arguments. Code becomes a lot easier to understand and reuse when it explicit what that function requires to produce the desired results.

A corrollary to this is that you should prefer static stateless variables to member variables on an object. 

## 3. Localize Side Effects 

Ideally side-effects (e.g. printing to console, logging, changing global state, file-system manipulations, etc.) should be placed in separate modules, and not scattered throughout the code. Often side-effects in functions are violating the single responsibility principle. 

## 4. Prefer Immutable Objects 

If an object's state is set once in its constructor and never changed again it become much easier to debug since it remains valid once it is constructed correctly. This is one of the easiest ways to reduce complexity in a software project.

## 5. Interfaces over Classes

Functions that accept an interface (or a template argument or concept in the case of C++) are more reusable than functions that operate on a class.

## 6. Apply Good Principles to Modules

Look for opportunties to break up a software project into smaller modules (e.g. libraries and applications) to encourage module level reuse. Some key principles to follow for modules are:

1. Minmize dependencies 
2. Each project should have a single well defined responsibility
3. Don't repeat yourself 

You should strive to keep your project small and well-defined.

## 7. Avoid Inheritance

In object-oriented programming, inheritance, especially with virtual functions tends to be a dead-end in terms of reusability. I have had very little success writing or working with libraries that encourage overriding classes. 

## 8. Test as you Design and Develop

I am not a hard-core advocate of test-driven development but writing tests as you go leads to code that naturally follows many of the guidelines. It also helps reveal n error earlier. Avoid writing useless tests though, good coding practices mean that higher level tests (e.g. integration tests or feature tests over unit tests) are much more effective at revealing defects. 

## 9. Prefer Standard Libraries to Hand-Rolled Ones 

I can't tell you how often I have seen a *better* version of `std::vector` or `std::string`, but it almost invariably a waste of time and effort. Apart from the obvious fact that you are introducing a new place for bugs (see *Tip #10*), other programmers are far less likely to reuse your code as opposed to something that is widely understood, supported, and tested. 

## 10. Avoid Writing New Code

This is the most important tip that every programmer should follow: **the best code is the code that isn't written**. 
The more lines of code you have, the more defects you will have, and the harder it is to find and fix bugs. 

Before writing a line of code ask yourself, is there a tool, function, or library that already does what you need? Do you really need that function as opposed to calling another one that already exists?

## Final Words

I have found that programming is a skill very similar to learning an art form or a sport, you get better at it through mindful practice, and by learning from others. Continuously working to improve the quality of the code you produce will help you become a more effective programmer.

