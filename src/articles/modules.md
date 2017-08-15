# Modules in JavaScript and Types and Bending them to your Will

This is very confusing for the new JavaScript developer since JavaScript as a language (prior to ES6 which is not widely supported yet) specified and cares nothing about modules. I started my serious JavaScript adventures writing TypeScript which forced the issue on me since TypeScript needs to map its concept of module to an underlying JavaScript module system. 

I also didn't want to have to choose whether my parsing library was for Node.JS or for the browser, I wanted it to *just work* (tm) in both. 

## CommonJS and AMD 

There are two main styles of JavaScript modules: CommonJs and AMD.

I read a lot of articles online which constrasted the two systems, but they usually tried to push one choice as being superior to the other. I started to see a theme though: asynchronous module loading (e.g. what is provided by AMD) seems to be a popular choice when you are building **large scale** systems. 

If you are just writing small self-contained libraries, going with the CommonJS approach seems to be good enough. 

# Modular and Object Oriented Programming 

Not just buzzwords, they represent useful principles to guide you towards a 

## What is a Module

A module is just a JavaScript object, usually self-contained in a single file. It may have member data fields, properties, or functions. What makes it a module is how it interacts with other scripts and modules. It's internal implementation details can be hidden from other consumers. 

Modular programming predates object-oriented programming and share some of the characteristics. It has the properties of:

## Module Managers are Script Loaders  


1. Encapsulation - it bundling together data and functionality
2. Information hiding - it can hide properties and methods which is considered by some as being part of the property of encapsulation 
3. Abstraction - representing a conceptual component of the system 
4. Complexity management - used to make 

## What is an Abstraction

## The Five Whats ... or how to drive your programming friends mad. 



## Importing and Exporting Modules

Node.JS and browsers differ in how they load modules. In the browser you just execute a series of scripts in the global namespace, making for an unhold mess and pray to god that no one is stomping on the same global variables. Node.JS is much more disciplined and forces you to explicitly `require` other script, and to export variables. 



## EcmaScript 6 (a.k.a ES6) 

I dont' make a 

## Dependency Injection with JavaScript 

The term dependency injection is a fancy way of describing how one can pass any depdencnies to a module. Because any type of value can be exported using an exports function, you can also export a function that acts as the module constructor accepting arguments at run-time. Rather than a module being an object instance the module becomes an object constructor. 

This is a technique I use in the myna-parser, which surprised a couple of people. So rather than hard-coding a `requires` in the variou grammar modules, each grammar module is a constructor that takes the myna module as an argument and registers itself with the my. The advantage of this is that module loading can be easily controlled programmatically by a host application. I can decide whether there is one myna module, or multiple instances of myna modules each with different grammars registered. I can choose to use a straightforward linear loading mechanism, or I can load modules asynchronously or on-demand, or whatever. It is just good old fashioned programming. 

It was based on an idea I first heard about in the design of the fortress language Gilad Bracha  

A module can also be a function, in which case you have to invoke it (like you would construct an object). This allows for 7

