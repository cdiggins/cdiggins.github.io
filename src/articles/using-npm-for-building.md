# Using NPM as a Build Tool

When I first started the adventure of writing Myna, I was completely unfamiliar with typical workflows for building JavaScript libraries and applications and managing modules. It was a difficult start since the ecosystem is a jungle and is constantly changing.  

* https://medium.freecodecamp.org/why-i-left-gulp-and-grunt-for-npm-scripts-3d6853dd22b8
* "Task Runner"
* Buildforge
* DOS batch shells
* Powershell - wtf is that?
* Python? 
* BASH I guess
* Shells: csh, ksh, zsh, sh, etc. 


Here is what I learned and what has worked very well for me.

## What is Grunt/Gulp/NPM/Node

There are some basic tools:

1. Node.JS is a standalone JavaScript execution environment. It is widely used and has excellent performance.

1. NPM is a package manager for Node.JS applications. It can be tough to sort out what modules are any good versus some that are poorly written (e.g. have bugs, have too many dependencies, have bad APIs) I try to be very selective about what packages I install and depend on, and I tend to prefer good old fashioned JavaScript files where I can. 


## Build Tools

There is

## Running in Node and in the Browwser

It is a bit tricky to make a library work well for both Node.JS and the browser since the browser.



## Module Management 

AMD versus CommonJS versus Harmony versus

http://requirejs.org/
http://curljs.org


## Using NPM as a build tool and task runner

It seems like people will wage holy wars over whether Grunt or Gulp is a better task runner for a build process, however I have found that NPM is an excellent choice, at least for small projects. Very possibly it would break down for large scale projects, but I think before having to learn to use another tool and all its pecularities we should first fully explore the tools at hand. 

I use NPM scripts to run my tests, update my version, publish, create docs, run the minifier, and create the git commit. 

```
"scripts": {
    "build":      "tsc",
    "test":       "mocha tests/mocha_runner.js",
    "makesite":   "node tools/myna_build_site.js",
    "makedist":   "uglifyjs myna.js -o dist/myna.min.js",
    "copyfiles":  "cpx {myna.ts,myna.js,examples/*.*,tests/*.*,grammars/*.js} docs",
    "full":       "npm run build && npm test && npm run makesite && npm run copyfiles && npm run makedist",
    "publish" :   "npm run full && npm publish",
    "patch" :     "npm version patch && npm publish",
  },
```

I have the following tools installed 

```
"devDependencies": {
    "cpx": "~1.5",
    "mocha": "~3.4.2",
    "typescript": "~2.0",
    "uglify-js": "~2.7.5"
}
```

The `cpx` tool allows me to move or copy files. Mocha is used as a harness around the tests which are also run in the browser using `qunit`. The source code is in TypeScript, and I use uglify to produce a small version of the library. However, I beleive as a library author that the consumer of the library should be responsible for minifying it within the context of their own pipeline and needs. I can't predict how others are going to use the pipeline:

## My Test Environment 

Qunit is extremely fast, and I like debugging in the webpage using Chrome developer tools. However, the tests are written in such a way, I have a small harness written in Mocha as well so I can run the tests from the command line using node. 


