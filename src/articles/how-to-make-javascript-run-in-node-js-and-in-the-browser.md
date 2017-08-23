# How to make JavaScript run in Node.js and in the browser

A JavaScript file written to be consumed by a Node.Js program or library has to explicitly export its values using the "module.exports" built-in. For example:

```function test() {
       return 'hello world';
   }
   module.exports = test;```

 This would be fine, if it wasn't for the fact that in browsers, there is no meaning attached to "module.exports" and it will throw an error.

The [common wisdom on the internet](https://stackoverflow.com/a/3226739/184528) seems to be to write your module as follows:

```
(function(exports) {
  exports.test = function() {
    return 'hello world';
  }
})(typeof exports === 'undefined'? this['mymodule']={}: exports);
```

However this syntax is quite gruesome

# An Alternative 

When developing Myna I opted for the following approach which uses module functions, which is slightly more verbose but arguably more understandable. 

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

```var mod = require('myModule')();
   mod.test();```

## Differences Between Module.Exports Property and Exports Variable

The `module.exports` property Node.JS and `exports` variable are [closely related but different things](https://stackoverflow.com/questions/16383795/difference-between-module-exports-and-exports-in-the-commonjs-module-system). 

## Supporting all Possible Implementations in CommonJS 

While in theory the CommonJS specification requires support for `exports` as a variable and not `module.exports` I am not aware of any [CommonJS implementation which does not support `module.exports`]](
https://stackoverflow.com/questions/41345087/is-there-a-commonjs-require-implementation-that-doesnt-use-module-exports?noredirect=1&lq=1)

Nonetheless, If you want to have all of your bases covered then you can add the following line to your module: 

```
    // Support all Common.JS modules
    else if (exports != undefined) exports = myModule;```
```

For More information:

* https://caolan.org/posts/writing_for_node_and_the_browser.html
* https://stackoverflow.com/questions/4944863/how-to-use-node-js-module-system-on-the-clientside 
* https://stackoverflow.com/questions/16383795/difference-between-module-exports-and-exports-in-the-commonjs-module-system
* https://stackoverflow.com/questions/3225251/how-can-i-share-code-between-node-js-and-the-browser
* https://spring.io/understanding/javascript-modules
* https://medium.freecodecamp.org/javascript-modules-a-beginner-s-guide-783f7d7a5fcc