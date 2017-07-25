# For Loops are Functional 

It has been known for quite some time within the functional programming community, that many programming constructs widely considered to be "imperative" in nature (e.g. goto statements, for loops, and while loops) can be expressed in terms of purely functional idioms. 

I was explaining to someone the other day how programmers can write code that looks imperative, for example using a Python syntax, and that it can be transformed by a compiler into pure functional code. 

In this article I will start from a simple Python example and demonstrate a series of simple transformations that can be done to convert a traditional `for` loop into a pure function call. 

## Summing Numbers from the Fibonnaci Sequence

This example sums five numbers in the Fibonnaci sequence using a `for` loop. 

```
    acc = 0
    for x in [1, 2, 3, 5, 8]:
        acc += x
    print acc
```

## Shortcut: Using Itertools.Accumulate

This example was contrived as it could be rewritten by a programmer using the [`itertools.accumulate`](https://docs.python.org/3/library/itertools.html) function.

```
    import itertools as it;
    print it.accumulate([1,2,3,5,8])
```

This is too big of a leap to express computationally. Instead I want to show how the compiler can progressively rewrite imperative code until it gets to something that can be expressed in terms of function calls. 

## Rewriting as a For Loop with an Index

In the first transformation we rewrite the `for` loop to use an explicit integer index, and 
we assign the array to a named variable. This makes it look more like a C-style for loop.

```
    acc = 0
    xs = [1, 2, 3, 5, 8]
    n = len(xs)
    for i in range(n):
        acc += xs[i]
    print acc
```

## Convert the For Loop into a While Loop

A `for` loops can be understood as syntactic sugar (i.e. a convenient syntax) for a `while` loop. So the first 
transformation is into a `while` loop.

```
    acc = 0
    xs = [1, 2, 3, 5, 8]
    n = len(xs)
    i = 0
    while i < n:
        acc += xs[i]
        i++
    print acc
```

## Stack Frame to Tuple

All of the variables in the stack frame referenced from within the loop can then be merged into a single tuple. This is the key observation in making a traditionally imperative code which changes and updates variables into something that can be expressed in terms of functional calls. 

```
    f = { 5, [1,2,3,5,8], 0, 0 }
    while (f.i < f.n) 
        f = { f[0], f[1], f[2] + f[2][f[3]], f[3]+1 } 
    print acc;
```

## Replace While loop with a While Function

If we presume the presence of a `while_fxn` we can convert the while statement into a single function call.

```
    f = while_fxn({ 5, [1,2,3,5,8], 0, 0 }, 
        lambda f: { f[0], f[1], f[2] + f[2][f[3]], f[3]+1 },
        lambda f: f.i < f.n)
    print f[2];
```

## Writing a "While" Function using Imperative Constructs

Here is a possible implementation of a `while` function: 

```
   def while_fxn(x, bodyFxn, terminationFxn):
       while (!termination(x)):
            x = body(x)
       return x
```

## A Tail-Recursive While Function

A functional while function can be written without imperative constructs as follows: 

```
   def while_fxn(x, bodyFxn, conditionFxn):
       return !condition(x) ? x : body(x)
```

The problem with this approach if literally implementing in Python (or other languages) is that the compiler/interpreter would need to support [tail-call optimization (TCO)](https://en.wikipedia.org/wiki/Tail_call) to prevent stack-overflow when executed more than a few times. 

## Summary

The point of this article was to show how code with what is traditionaly considered an imperative syntax can be converted into pure functional constructs through a series of transformations which could be performed by a compiler or interpreter. The key observation is that the reference variables of the stack frame can be modeled as a "tuple".

## References 

A paper widely referenced on the correspondance between imperative structures and functional programming is *"Lambda the Ultimate Imperative"* by Guy Steele and Gerald Sussman 1976. You can [find that article here](http://library.readscheme.org/page1.html) along with other papers related on the subject.
The [Wikipedia article on tail recursion](https://en.wikipedia.org/wiki/Tail_call) also currently provides a good overview of 
the subject. 

