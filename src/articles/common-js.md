## Common.JS

## AMD

There are 


### Appendix: Module.Exports and Exports 

Module.exports and exports [are not the same thing](https://stackoverflow.com/questions/16383795/difference-between-module-exports-and-exports-in-the-commonjs-module-system). 

'''
   var module = { exports: {} };
   var exports = module.exports;
```

## Supporting all Possible Implementations in CommonJS 

While in theory the CommonJS specification requires support for `exports` as a variable and not `module.exports` I am not aware of any [CommonJS implementation which does not support `module.exports`]](
https://stackoverflow.com/questions/41345087/is-there-a-commonjs-require-implementation-that-doesnt-use-module-exports?noredirect=1&lq=1)

Nonetheless, If you want to have all of your bases covered then you can add the following line to your module: 

```
    // Support all Common.JS modules
    else if (exports != undefined) exports = myModule;```
```
