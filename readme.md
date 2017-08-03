# cdiggins.github.io

This is the web-site for my ([Christopher Diggins](http://cdiggins.github.io)) home page, blog, and blog generator. 

The blog is built from Git-flavored markdown sourced and Mustache (CTemplate) style template files using tools I created with the [Myna parsing library](https://github.com/cdiggins/myna-parser). 

## License 

The tool chain is licensed under the MIT license, and the content is the Common Creative Sharealike Attribution license.

## Depdendencies

In order to build the web-site you will need to have [node.js](https://nodejs.org/en/) and [npm](https://www.npmjs.com) installed. Once these are installed the other dependency will be the [myna-parser](https://www.npmjs.com/package/myna-parser)
which can be installed by using `npm install` command.

## Cloning this Site

### Dependencies

1. [node.js](https://nodejs.org/en/) 
1. [npm](https://www.npmjs.com) 

### Steps 

1. Create a [Github pages site](https://pages.github.com/) by creating new repository named \<username\>.github.io, where \<username\> is your username (or organization name) on GitHub.
1. Clone that new repository to your local working computer
1. [Unzip this repository](https://github.com/cdiggins/cdiggins.github.io/archive/master.zip) into your local clone.
1. Customize the [`src\data.js`](https://github.com/cdiggins/cdiggins.github.io/blob/master/src/data.js) file with your own custom information.
1. Run `node src\build.js`
1. The HTML files in the root folder and the `blog` folder will now be updated. 

### Writing an Article 

1. Create a new markdown file in the `src\articles` folder, say, `second.md`
1. Write the content of the article 
1. Update the file `src\articles.json` file with a new record containing the title, description, filename, and date.  
1. Run `node src\build.js`

## Customizing Templates 

There are several template files in the folder `src\templates`. These files use a recursive variant of [Mustache](https://mustache.github.io/mustache.5.html) to enable variable expansion. Mustache variables are either:

* Escaped variables: `{{varname}}`
* Unescaped variables: `{{{varname}}}` or `{{&varname}}`
* Sections: `{{varname}}`

Unlike the original Mustache, the recursive variant will continue to expaned mustache variables, if expansion results in new Mustache variables. 

## Plugins, Themes, and More

This blog generator intentionally has no plugin or theme system. This way I can keep the code extremely simple and easy to understand. If you want additional functionality that you can't achieve using the templates and data file, then you customize the file `src\build.js` which is under 200 lines long and commented. 