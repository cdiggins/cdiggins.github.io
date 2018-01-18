# Concatenative Calculus

## SKI Combinator Calculus in Lambda Calculus 

The phrase `(S(K))(K)` in the lambda calculus world means to apply the function S to the function K and apply the result again to the function K. 

The result is a function that will take a single argument and return it. 

```S(K)(K)(42) == 42```

The parentheses are not necessary, two terms side-by-side imply function application. Therefore, we can simplify this to `S K K 42`

In order to understand this, you have to realize that in the lambda calculus all functions have one argument. 

This means that S a function does not have enough terms (e.g. S(K)) the result is a partially applied function. 

## Concatenative Calculus 

In the concatenative calculus we use an abstraction operation (`[]`) to avoid eager evaluation of the function, triggering an error. 

Function application is expressed in reverse order. 

## SK in Cat

define K { popd }
define S { dip [dip [dup] compose swap compose }
define I { }

 // [C] [B] [A] s == [[C] B] [C] A

apply 

```42 K K S == 42```

If I was to write K it would evaluate immediately to the arguments to the left of it. Which is incorrect. 

* SK not considered SeKSy - http://lambda-the-ultimate.org/node/1864
* Cake language - https://github.com/robertkleffner/CaKe
* What is special about combinators in Joy http://debasishg.blogspot.ca/2008/12/what-is-special-about-combinators-in.html
* Ode - http://www.kevinalbrecht.com/code/ode/about/further-reading.html
* Explore Concatenative Combinators - https://github.com/jdp/concom
* “␣;”: A Simply Arited Concatenative Language - https://suhr.github.io/obsc/
* http://chriswarbo.net/blog/2012-05-13-concatenative_languages.html
* The Theory of Concatenative Combinators - http://tunes.org/~iepos/joy.html#sk
* Programming Language Kont - http://lambda-the-ultimate.org/node/900
* Monadic interpreter for a small concatenativate language - https://gist.github.com/robertkleffner/8e97c74da9bcff38f9b598b60666f92e
* Awelon Language by David Barbour - https://github.com/dmbarbour/wikilon/blob/master/docs/AwelonLang.md
* Nock - https://www.urbit.org/docs/nock/explanation/
* [Peg is a lazy non-deterministic concatenative programming language inspired by Haskell, Joy, and Prolog.](https://github.com/HackerFoo/peg)

# Reverse composition

```
dup = (a Stack -> `a `a Stack)
fortytwo = (Stack -> int Stack)
add = (int int -> Stack)

define myprogram = { fortytwo dup add }
```

In O'Caml
https://alecb.me/blog/stack-language-ocaml

In Haskell

```
dup [a ...] = [a a ...]
add . dup . fortytwo . []
add . dup . fortytwo 
```


// 

push :: a -> s -> (s, a)
push value stack = (stack, value)

dup :: (stack, value) -> ((stack, value), value)
dup (stack, value) = (((stack), value), value)

swap :: ((s, a), b) -> ((s, b), a)
swap ((s, a), b) = ((s, b), a)

fortytwo  stack = push 42 stack

 
// https://github.com/leonidas/codeblog/blob/master/2012/2012-02-17-concatenative-haskell.md



## Iota






