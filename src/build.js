// Myna Site Generator
// Blogging for the common programmer 

'use strict';

var fs = require("fs");
var path = require('path');
var data = require('../src/data.js');
var mdToHtml = require('myna-parser/tools/myna_markdown_to_html');
var expand = require('myna-parser/tools/myna_mustache_expander');

function replaceExt(fileName, newExt) {
    let i = fileName.lastIndexOf(".");
    let base = i >= 0 ? fileName.substring(0, i) : fileName;
    return base + newExt;
}

function createLink(href, text) {
    return "<a href='" + href + "'>" + text + "</a>";
}

function articleUrl(article) {
    return article ? article.url : "";
}

function articleLink(article) {
    return article ? createLink(article.url, article.title) : '';
}

function prevNextNav(article) {
    var prev = article.prev;
    var next = article.next; 
    var r = "";
    if (prev) {
        r += createLink(prev.url, "<< " + prev.title);
        if (next) r += " | ";
    }
    if (next) {
        r += createLink(next.url, next.title + " >>");
    }
    return r;
}

function saveToFile(folder, fileName, content) {
    fs.writeFileSync(folder + "/" + fileName, content, { encoding:'utf-8' });
}

function readJsonFile(file) {
    return JSON.parse(fs.readFileSync(file, 'utf-8'));
}

function rssDate(date) {
    var r = date.toLocaleDateString('en-us', { weekday:'short' });
    r += ", " + date.toLocaleDateString('en-us', { day:'numeric' });
    r += " " + date.toLocaleDateString('en-us', { month:'short' });
    r += " " + date.toLocaleDateString('en-us', { year:'numeric' });
    r += " " + date.toTimeString('en-us', { timeZoneName:'short' });
    return r;
}

function longDate(date) {
    return date.toLocaleDateString('en-us', { weekday:'long', year:'numeric', month:'long', day:'numeric'});    
}

function main() 
{
    // TODO: get these values from the settings file. 
    var outputFolder = "./";
    var blogFolder = "./blog/";
    var srcFolder = "./src/";
    var templatesFolder = srcFolder + "templates/";
    var markdownFolder = srcFolder + "articles/";
    var articleTemplateFile = templatesFolder + "article_template.html";
    var articlesJsonFile = srcFolder + 'articles.json';

    data.built = rssDate(new Date());

    if (!fs.existsSync(blogFolder)) {
        console.log("Creating output folder " + blogFolder);
        fs.mkdirSync(blogFolder);
    }
    
    // Reading the template file 
    var template = fs.readFileSync(articleTemplateFile, 'utf-8');

    // Reading the JSON articles file 
    var articlesJson = readJsonFile(articlesJsonFile);
        
    // First We just want the array
    data.articles = articlesJson.posts;

    // Next we Skip all of the draft articles 
    data.articles = data.articles.filter(function(a) { return !a.draft});

    // Convert dates strings into date objects (makes sorting and displaying easier)
    data.articles.forEach(function(a) { a.date = new Date(a.date); });

    // Sort articles by date    
    data.articles.sort(function (a,b) { return b.date - a.date; });

    // This will reference the first five articles (after sorted)
    data.recentArticles = data.articles.slice(0, 5);

    // Generate the previous and next links, and the URLs 
    for (let i=0; i < data.articles.length; ++i) {
        var a = data.articles[i];
        a.url = replaceExt(a.src, ".html");
        a.prev = data.articles[i+1];
        a.next = data.articles[i-1];
    }

    // Create each article
    for (var a of data.articles) 
    {
        // Copy the global properties into the article object 
        for (var k in data)
            a[k] = data[k];

        a.baseUrl = '..';
        console.log("Generating article: " + a.url);

        // Set all of the other variables (requires URLs) to be set 
        a.dateString = longDate(a.date);
        a.rssDate = rssDate(a.date);
        a.urlPrev = articleUrl(a.prev);
        a.urlNext = articleUrl(a.next);
        a.linkPrev = articleLink(a.prev);
        a.linkNext = articleLink(a.next);
        a.prevNextNav = prevNextNav(a);

        // Get the markdown source file 
        a.srcFile = markdownFolder + '/' + a.src;

        // Get the markdown for the article
        a.markDown = fs.readFileSync(a.srcFile, 'utf-8');

        // Convert the markdown to HTML 
        a.content = mdToHtml(a.markDown);

        // Expand the template to get the HTML
        a.html = expand(template, a);

        // Save the article
        saveToFile(blogFolder, a.url, a.html);
    }

    console.log("Generating blog landing page");
    var blog_template = fs.readFileSync(templatesFolder + 'blog_template.html', 'utf-8');
    var blog_html = expand(blog_template, data);
    saveToFile(outputFolder, 'blog.html', blog_html);

    console.log("Generating index page");
    var index_template = fs.readFileSync(templatesFolder + 'index_template.html', 'utf-8');
    var index_html = expand(index_template, data);
    saveToFile(outputFolder, 'index.html', index_html);

    console.log("Generating about page");
    var rss_template = fs.readFileSync(templatesFolder + 'about_template.html', 'utf-8');
    var rss_xml = expand(rss_template, data);
    saveToFile(outputFolder, 'about.html', rss_xml);

    console.log("Generating rss feed");
    var rss_template = fs.readFileSync(templatesFolder + 'rss_template.xml', 'utf-8');
    var rss_xml = expand(rss_template, data);
    saveToFile(outputFolder, 'rss.xml', rss_xml);
}

// Log when started
var start = new Date();
console.log(start.toLocaleTimeString());

// Main entry point 
main();

// Log when finished 
var end = new Date();
console.log(end.toLocaleTimeString());

// Show off how quick the code is 
var msec = end.getTime() - start.getTime();
console.log('finished in ' + msec + ' msec');

// Shutdown the node process 
process.exit()