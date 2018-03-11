// Myna Site Generator
// Blogging for the common programmer 

'use strict';

var data = require('../src/data');
var blogGen = require('../src/myna-blog-generator.js');

blogGen.generateBlog(data);

process.exit();