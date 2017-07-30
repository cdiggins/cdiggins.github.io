'use strict';

var fs = require("fs");
var path = require('path');
var globalData = require('./global_data.js');
var mdToHtml = require('myna-parser/tools/myna_markdown_to_html');
var expand = require('myna-parser/tools/myna_mustache_expander');

/*
    TODO: 
    * extract a short description from the article ? 
    * add some hover text for the different links (particular blog articles)
    * favicon
    * sidebar
    * footer     
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

function generateShareLinks(url, title) {
    url = encodeURIComponent(url);
    title = encodeURIComponent(title);
    return {
        twitter: "https://twitter.com/intent/tweet?url=" + url,
        google : "https://plus.google.com/share?url=" + url,
        facebook : "https://www.facebook.com/sharer/sharer.php?u=" + url,
        linkedIn : "http://www.linkedin.com/shareArticle?mini=true&url=" + url + "&title=" + title,
        reddit : "https://www.reddit.com/r/test/submit?title=" + title + "&url=" + url,
    }
}

function generateShareHtmlList(url, title) {
    var links = generateShareLinks(url, title);
    return "<ul>" 
        + "<li><a href='" + links.facebook + "'><i class='fa fa-facebook'/>Facebook</a></li>\n"
        + "<li><a href='" + links.twitter + "'><i class='fa fa-twitter'/>Twitter</a></li>\n"
        + "<li><a href='" + links.reddit + "'><i class='fa fa-reddit'/>Reddit</a></li>\n"
        + "<li><a href='" + links.google + "'><i class='fa fa-google-plus'/>Google+</a></li>\n"
        + "<li><a href='" + links.linkedIn + "'><i class='fa fa-linkedin'/>LinkedIn</a></li>\n"
        + "</ul>";
}

function generateBlogArticles(data, inputFolder, outputFolder, templateFile, articlesFile) {
    data.built = rssDate(new Date());

    if (!fs.existsSync(outputFolder))
        fs.mkdirSync(outputFolder);
    
    // Read the template
    var template = fs.readFileSync(templateFile, 'utf-8');

    // Read a JSON object
    var articlesJson = readJsonFile(articlesFile);
    
    // We just want the array
    var articles = articlesJson.posts;
    
    // Skip all of the draft articles 
    articles = articles.filter(function(a) { return !a.draft});

    // Convert dates strings into date objects (makes sorting and displaying easier)
    articles.forEach(function(a) { a.date = new Date(a.date); });

    // Sort articles by date    
    articles.sort(function (a,b) { return b.date - a.date; });

    // Generate the previous and next links, and the URLs 
    for (let i=0; i < articles.length; ++i) {
        var a = articles[i];
        a.url = replaceExt(a.src, ".html");
        a.prev = articles[i+1];
        a.next = articles[i-1];
    }

    for (var a of articles) {
        // Set all of the other variables (requires URLs) to be set 
        a.dateString = longDate(a.date);
        a.rssDate = rssDate(a.date);
        a.urlPrev = articleUrl(a.prev);
        a.urlNext = articleUrl(a.next);
        a.linkPrev = articleLink(a.prev);
        a.linkNext = articleLink(a.next);
        a.prevNextNav = prevNextNav(a);

        // Get the markdown source file 
        a.srcFile = inputFolder + '/' + a.src;

        // Get the markdown for the article
        a.markDown = fs.readFileSync(a.srcFile, 'utf-8');

        // Convert the markdown to HTML 
        a.content = mdToHtml(a.markDown);

        // Copy the global properties into the article object 
        for (var k in data)
            a[k] = data[k];

        // Expand the template to get the HTML
        a.html = expand(template, a);

        // Save the article
        saveToFile(outputFolder, a.url, a.html);
    }

    return articles;
}

function main() {
    var articles = generateBlogArticles(
        globalData,
        './src/articles', 
        './blog/', 
        './src/article_template.html', 
        './src/articles.json');
        
    var data = globalData;
    data.articles = articles;
    
    var blog_template = fs.readFileSync('./blog_template.html', 'utf-8');
    var blog_html = expand(blog_template, data);
    saveToFile('./', 'blog.html', blog_html);

    var index_template = fs.readFileSync('./index_template.html', 'utf-8');
    var index_html = expand(index_template, data);
    saveToFile('./', 'index.html', index_html);

    var rss_template = fs.readFileSync('./rss_template.xml', 'utf-8');
    var rss_xml = expand(rss_template, data);
    saveToFile('./', 'rss.xml', rss_xml);

    var rss_template = fs.readFileSync('./about_template.html', 'utf-8');
    var rss_xml = expand(rss_template, data);
    saveToFile('./', 'about.html', rss_xml);
}

main();
console.log('finished');
process.exit();
