# Making a JavaScript Module Run in both Node.JS and the Browser 

> This blog post attempts to provide a complete answer to the question: https://stackoverflow.com/questions/3225251/how-can-i-share-code-between-node-js-and-the-browser. 

Trying to create a library of JavaScript code in a single file that can be run in both the Node.JS environemnt and in a browser requires some programming calisthenics. In a browser each individual JavaScript file is executed in the global namespace while Node.JS treats each file as a module with its own private namespace. This article describes the commonly accepted solution, and a proposed alternative.

### In the Browser 

Consider the following example of how one might write code in two different files for the browser 

`MyModule.js`

```
  function test() {
    return 'hello world';
  }
```

`MyFile.html`

```
  <script href='MyModule`/>
  <script>
    console.log(test());
  </script>
```

### Why Executing in the Global Namespace is a "Bad Thing"

The problem with the browser based approach is that including scripts files can cause name collisions. A variable or function name can get reused in one file to mean a different thing, losing the original value. 

### What Node.JS Does

Node.JS solves this problem by requiring that you explicitly export any functions or values in your file:

```
  function test() {   
    return 'hello world';
  }
  module.exports = test;
```

In effect every node.JS file is converted into a module..

###  Under the Hood 

The Node.JS module uses a [special function called `Module.wrap`](https://stackoverflow.com/questions/35211056/how-to-change-the-node-js-module-wrapper) to convert your JavaScript files into a module by adding a simple prefix and suffix. So your file effectively is rewritten as:  

```
  (function (exports, require, module, __filename, __dirname, process, global) {
    function test() {   
      return 'hello world';
    }
    module.exports = test;
  });
```

### Making your code  work in Both Node.JS and the Browser

One [widely accepted solution presented on StackOverflow](https://stackoverflow.com/questions/3225251/how-can-i-share-code-between-node-js-and-the-browser) to preventing namespace collisions is the following:

```
  (function(exports){
    exports.test = function(){
      return 'hello world'
    };
  })(typeof exports === 'undefined'? this['mymodule']={}: exports);
```

I am not a fan of this approach because it requires me to read the code from the bottom up to understand what is happening, and it takes a bit of mental effort to grok it the first time you encounter it. 

### An Alternative 

When developing Myna I opted for an alteratnive approach which uses involves exporting modules as functions. 

```
  function myModule() 
  {
    return new function() { 
      this.test = function() {
        return 'hello world';
      }
    }
  }
      
  // Export the module as a Node.JS module
  if (typeof module === "object" && module.exports) 
    module.exports = myModule;
```

Usage in browser:

```
  <script href='myModule.js'/>
  <script>
    var mod = myModule();
    mod.test();
  </script>
```

Usage in Node.JS

```
  var mod = require('myModule')();
  mod.test();
```

## Dependency Injection 

One advantage of exporting modules as function (not as objects) is that I can easily pass any required modules (dependencies) as arguments. This is a techniqueu known as dependency injection, and it gives me programmatic control over the module instantiation. 

In Myna I use this technique to pass the Myna module to the grammars, which enables me to control the number of instances of the Myna module (e.g. 1 myna module with multiple grammars, or 1 myna module per grammar). 

For More information:

* https://caolan.org/posts/writing_for_node_and_the_browser.html
* https://stackoverflow.com/questions/4944863/how-to-use-node-js-module-system-on-the-clientside 
* https://stackoverflow.com/questions/16383795/difference-between-module-exports-and-exports-in-the-commonjs-module-system
* https://stackoverflow.com/questions/3225251/how-can-i-share-code-between-node-js-and-the-browser
* https://spring.io/understanding/javascript-modules
* https://medium.freecodecamp.org/javascript-modules-a-beginner-s-guide-783f7d7a5fcc