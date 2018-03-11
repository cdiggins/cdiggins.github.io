# Using URNs in Source Code for Identifying Modules

Many languages, frameworks, and libraries, have a module resolution system based on using simple 
identifiers, potentially with namespaces, for module identification. 
The build environment then needs to be provided additional information to resolve the module names, 
such as configuration files, project files, and environment variables, and can be 
affected by the local set-up. 

* [Python import statement](https://docs.python.org/2.0/ref/import.html)
* [Node.JS Require](https://nodejs.org/api/modules.html)
* [C# Using Directive](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/using-directive)
* [Rust Modules](https://doc.rust-lang.org/book/second-edition/ch07-01-mod-and-the-filesystem.html)
* [Go Packages](https://www.golang-book.com/books/intro/11)

These module systems usually require additional set of configuration information that needs to be passed to the compiler/run-time (e.g. via config files, or environment variables) and are impacted by the local file system. 

The downside to this approach is that given only the source code of a module, it is not possible for another user 
or system to compile it (e.g. a continuous integration system) and to be assured to get the same end result
unless their system is configured in the same way with the correct dependencies in the correct. 

Ad-hoc module systems such as these leads to various problems in production environments:

* The community can invent different incompatible module systems with different resolution strategies. For example:
    * JavaScript has CommonJS, AMD, etc. 
        * Even popular JavaScript module systems can get fractured: consider NPM versus Yarn.
    * Python has Pip, Easy Install, Wheels, Eggs
    * Scheme implementations prior to R6RS each had their own module system (see http://www.phyast.pitt.edu/~micheles/scheme/scheme19.html)
* Developers have extra work to properly set up a continuous integration system 
* Developers on the same project can have subtle bugs or difference in the environment due to incorrect configurations, which 
* Various tools, such as static analyzers, online coding tools (e.g. CodePen / JSFiddle) require complicated configurations.

## An Alternative 

I have been considering an alternative module system for my programming language that instead of using simple 
module names uses URNs directly in source code to uniquely identify the used modules and the versions of 
those modules. 

For example: `import urn:<OrganizationName>:<ProjectName>:<LibraryName>:<major>.<minor>.<path>;`

URNs have the potential to be unique (except for the rare case of a name collision between: Organization/Project/Library. 
This could be managed by a centralized community package database that resolves URNs to URIs. Considering that GitHub 
uses Organization/RepositoryName to assure uniqueness among millions of open-source projects, this should be reasonable. 

The big advantage I think is that this would allow source code can now be compiled, without a configuration file, and without 
users having to manually manage the module system. 
