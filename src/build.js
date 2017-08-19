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
    return article ? replaceExt(article.src, ".html") : "";
}

function articleLink(article) {
    return article ? createLink(article.url, article.title) : '';
}

function saveToFile(fileName, content) {
    fs.writeFileSync(fileName, content, { encoding:'utf-8' });
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

function createMissingFolders(folders) {
    for (var folder of folders) {
        if (fs.existsSync(folder)) 
            continue;
        console.log("Creating folder " + folder);
        fs.mkdirSync(folder);
    }
}

function createPage(templateFile, data, outputFile) {
    var template = fs.readFileSync(templateFile, 'utf-8');
    var html = expand(template, data);
    saveToFile(outputFile, html);
}

function main() 
{
    data.built = rssDate(new Date());

    createMissingFolders([data.outputFolder, data.blogFolder, data.draftsFolder]);
    
    // Reading the template file 
    var template = fs.readFileSync(data.articleTemplateFile, 'utf-8');

    // Reading the JSON articles file 
    var articlesJson = readJsonFile(data.articlesJsonFile);

    // First We just want the array
    var allArticles = articlesJson.posts;

    // Extract all of the draft articles
    var drafts = allArticles.filter(function(a) { return a.draft});

    // Next we skip all of the draft articles 
    data.articles = allArticles.filter(function(a) { return !a.draft});

    // Convert dates strings into date objects (makes sorting and displaying easier)
    allArticles.forEach(function(a) { a.date = new Date(a.date); });

    // Sort articles by date    
    data.articles.sort(function (a,b) { return b.date - a.date; });

    // This will reference the first five articles (after sorted)
    data.recentArticles = data.articles.slice(0, 5);
    
    // Generate the previous and next links. We only do this for published articles
    for (let i=0; i < data.articles.length; ++i) {
        var a = data.articles[i];
        a.prev = data.articles[i+1];
        a.next = data.articles[i-1];
    }

    // Create each article (drafts go into a special folder)
    for (var a of allArticles) 
    {
        // Copy the global properties into the article object 
        for (var k in data)
            a[k] = data[k];

        a.baseUrl = '..';

        if (a.blogFolder.indexOf(a.outputFolder))
            throw new Error("The blog folder is required to be a direct sub-folder of the output folder");

        var tmp = a.blogFolder.substring(a.outputFolder.length);        
        var remoteBlogFolder = a.blogFolder.substring(a.outputFolder.length);
        a.fileName = replaceExt(a.src, ".html");
        a.pageUrl = a.siteUrl + '/' + remoteBlogFolder + a.fileName;
        console.log("Generating article: " + a.fileName);

        // Set all of the other variables (requires URLs) to be set 
        a.dateString = longDate(a.date);
        a.rssDate = rssDate(a.date);

        // Set up the previou and next links
        a.urlPrev = articleUrl(a.prev);
        a.urlNext = articleUrl(a.next);

        // Let templates know that it is an article
        a.isArticle = true;

        // Get the markdown source file 
        a.srcFile = data.markdownFolder + '/' + a.src;

        // Get the markdown for the article
        a.markDown = fs.readFileSync(a.srcFile, 'utf-8');
    }
    
    // Now that all of the data is created create the recent articles list s
    for (var a of allArticles) 
    {
        // Convert the markdown to HTML 
        a.content = mdToHtml(a.markDown);

        // Expand the template to get the HTML
        var html = expand(template, a);

        // Find the folder in which to write 
        var folder = a.draft ? data.draftsFolder : data.blogFolder;

        // Save the article
        saveToFile(folder + '/' + a.fileName, html);
    }

    // Creation of the "special" pages in the root folder

    console.log("Generating index page");
    createPage(data.indexTemplateFile, data, 'index.html');

    console.log("Generating about page");
    createPage(data.aboutTemplateFile, data, 'about.html');

    console.log("Generating blog landing page");
    createPage(data.blogTemplateFile, data, 'blog.html');

    console.log("Generating RSS feed");
    createPage(data.rssTemplateFile, data, 'rss.xml');
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
process.exit();