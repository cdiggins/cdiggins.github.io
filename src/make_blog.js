'use strict';

var fs = require("fs");
var path = require('path');
var myna = require('myna-parser');
var mdAstToHtml = require('../src/markdown_to_html');
var mdGrammar = require('myna-parser/grammars/grammar_markdown')(myna);
var expand = require('myna-parser/tools/myna_mustache_expander');

/*
    TODO: 
    * create the index page
    * create the blog list 
    * make the dates shorter 
    * fix the prev/next links 
    * make the prev/next links of the article conditional 
    * don't repeat the first line of the article twice. 
    * extract a short description from the article ? 
    * add some hover text for the different links (particular blog articles)

    LOWPRI:
    * favicon
*/

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

// Outputs HTML from markdown given a string 
function mdToHtml(input) {
    let rule = myna.allRules['markdown.document'];
    let ast = myna.parse(rule, input);
    return mdAstToHtml(ast, []).join("");
}

function rssDate(date) {
    var r = ""; 
    r += date.toLocaleDateString('en-us', { weekday:'short' });
    r += ", ";
    r += date.toLocaleDateString('en-us', { day:'numeric' });
    r += " ";
    r += date.toLocaleDateString('en-us', { month:'short' });
    r += " ";
    r += date.toLocaleDateString('en-us', { year:'numeric' });
    r += " ";
    r += date.toTimeString('en-us', { timeZoneName:'short' });
    return r;
}

function longDate(date) {
    return date.toLocaleDateString('en-us', { weekday:'long', year:'numeric', month:'long', day:'numeric'});    
}

function generateBlogArticles(inputFolder, outputFolder, templateFile, articlesFile) {
    if (!fs.existsSync(outputFolder))
        fs.mkdirSync(outputFolder);
    
    // Read the template
    let template = fs.readFileSync(templateFile, 'utf-8');

    // Read a JSON object
    let articles = readJsonFile(articlesFile);

    // Set the build date
    articles.built = rssDate(new Date());
    
    // We just want the array
    articles = articles.posts;

    // Convert dates strings into date objects (makes sorting and displaying easier)
    articles.forEach(function(a) { a.date = new Date(a.date); });

    // Sort articles by date    
    articles.sort(function (a,b) { return b.date - a.date; });

    // Generate the content for each page 
    for (let i=0; i < articles.length; ++i) {
        let a = articles[i];
        a.dateString = longDate(a.date);
        a.rssDate = rssDate(a.date);
        a.url = replaceExt(a.src, ".html");
        a.prev = articles[i+1];
        a.next = articles[i-1];
    }

    for (var a of articles) {
        a.urlPrev = articleUrl(a.prev);
        a.urlNext = articleUrl(a.next);
        a.linkPrev = articleLink(a.prev);
        a.linkNext = articleLink(a.next);
        a.prevNextNav = prevNextNav(a);
        a.sideBar = '';
        a.srcFile = inputFolder + '/' + a.src;
        a.markDown = fs.readFileSync(a.srcFile, 'utf-8');
        a.content = mdToHtml(a.markDown);
        a.html = expand(template, a);
        saveToFile(outputFolder, a.url, a.html);
    }

    return articles;
}

function main() {
    var articles = generateBlogArticles(
        './src/articles', 
        './blog/', 
        './src/article_template.html', 
        './src/articles.json');
        
    var blog_template = fs.readFileSync('./blog_template.html', 'utf-8');
    var blog_html = expand(blog_template, { articles:articles });
    saveToFile('./', 'blog.html', blog_html);

    var index_template = fs.readFileSync('./index_template.html', 'utf-8');
    var index_html = expand(index_template, { articles:articles });
    saveToFile('./', 'index.html', index_html);

    var rss_template = fs.readFileSync('./rss_template.xml', 'utf-8');
    var rss_xml = expand(rss_template, { articles:articles });
    saveToFile('./', 'rss.xml', rss_xml);
}

main();
console.log('finished');
process.exit();
