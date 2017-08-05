module.exports = 
{ 
  // Paths 
  outputFolder          : './',
  blogFolder            : './blog/',
  draftsFolder          : './drafts/',
  srcFolder             : './src/',
  templatesFolder       : './src/templates/',
  articleTemplateFile   : './src/templates/article_template.html',
  blogTemplateFile      : './src/templates/blog_template.html',
  indexTemplateFile     : './src/templates/index_template.html',
  aboutTemplateFile     : './src/templates/about_template.html',
  rssTemplateFile       : './src/templates/rss_template.xml',
  markdownFolder        : './src/articles/',
  articlesJsonFile      : './src/articles.json',

  // Main features
  author :            'Christopher Diggins',
  year :              '2017',
  source :            'https://github.com/cdiggins/cdiggins.github.io',
  license :           'Attribution-ShareAlike 4.0 International',
  licenseUrl :        'https://creativecommons.org/licenses/by-sa/4.0/',
  baseUrl :           '.',
  siteUrl :           'https://cdiggins.github.io',
  pageUrl :           'https://cdiggins.github.io',
  email :             'cdiggins@gmail.com',
  generator :         'The-Blog-Machine',
  template :          'Diggins-Template-1',  
  googleAnalyticsId : 'UA-93495883-1',
    
  // Page sharing links
  twitterShareUrl :  "https://twitter.com/intent/tweet?url={{pageUrl}}",
  googleShareUrl :   "https://plus.google.com/share?url={{pageUrl}}",
  facebookShareUrl : "https://www.facebook.com/sharer/sharer.php?u={{pageUrl}}",
  linkedInShareUrl : "http://www.linkedin.com/shareArticle?mini=true&url={{pageUrl}}&title={{title}}",
  redditShareUrl :   "https://www.reddit.com/r/test/submit?title={{title}}&url={{pageUrl}}",
  tumblrShareUrl :   "http://www.tumblr.com/share?v=3&t={{title}}&u={{pageUrl}}",
  hackerShareUrl :   "http://news.ycombinator.com/submitlink?u={{pageUrl}}&t={{title}}",

  social : 
  [
    { title: "email", icon: "fa-envelope", url: 'mailto:cdiggins@gmail.com' },
    { title: "Twitter", icon: "fa-twitter", url: 'https://twitter.com/cdiggins' },
    { title: "LinkedIn", icon: "fa-linkedin", url: 'https://www.linkedin.com/in/cdiggins/' },
    { title: "FaceBook", icon: "fa-facebook", url: 'https://www.facebook.com/diggins.software' },
    { title: "GitHub", icon: "fa-github", url: 'https://github.com/cdiggins' },
    { title: "StackOverflow", icon: "fa-stack-overflow", url: 'https://stackoverflow.com/users/184528/cdiggins' },
    { title: "YouTube", icon: "fa-youtube", url: "https://www.youtube.com/user/cdiggins" },
    { title: "RSS", icon: "fa-rss", url: 'http://cdiggins.github.io/rss.xml' },
  ],
  
  about : 
  { 
    title :       'About Christopher and His Blog', 
    description : 'About Christopher Diggins and his magical software development blog', 
    pageUrl:      'http://cdiggins.github.io/about.html' 
  },    

  index : 
  { 
    title       : 'Christopher Diggins\' home on the internet',      
    description : 'Christopher Diggins is a software developer with an unhealthy obsession with programming languages. On this web site, hosted by GitHub, contains his blog, contact information, and other trivia.',
    pageUrl:      'http://cdiggins.github.io' 
  },

  blog : { 
    title :       'Another Software Development Blog by Christopher Diggins', 
    description : 'A blog on topics related to software development and 3D graphics with an emphasis on programming languages and open-source development.',
    pageUrl:      'http://cdiggins.github.io/blog.html' 
  },

  // This the contents of the HTML head tag
  header : `
  <meta charset="utf-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  
  <!-- 
    "The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags"
    Or at least so decreed Bootsrap. I'm not sure why. 
  -->

  <!-- Standard meta tags -->
  <meta name="description"          content="{{description}}" />
  <meta name="author"               content="{{author}}" />
  <meta name="generator"            content="Myna Blog Generator" />
  
  <!-- Open Graph meta-properties, used by FaceBook and other social sites --> 
  <meta property="og:type"          content="website" />
  <meta property="og:url"           content="{{pageUrl}}" />
  <meta property="og:title"         content="{{title}}" />
  <meta property="og:description"   content="{{description}}" />
  <meta property="og:image"         content="{{imageUrl}}" />

  <!-- The site title -->
  <title>{{title}}</title>

  <!-- Bootstrap http://getbootstrap.com/getting-started/ -->
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap-theme.min.css" integrity="sha384-rHyoN1iRsVXV4nD0JutlnGaslCJuC7uwjduW9SVrLvRYooPp2bWYgmgJQIXwl/Sp" crossorigin="anonymous">

  <!-- Font Awesome http://fontawesome.io/ --> 
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" />

  <!-- Google Fonts https://fonts.google.com/ --> 
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto|Source+Sans+Pro">

  <link rel="stylesheet" href="{{baseUrl}}/css/theme.css">

  <!-- My custom styling, non-trivial styling should be done in its own CSS file --> 
  <style>
    body { font-family: 'Source Sans Pro', sans-serif; }
    h1, h2, h3, h4, h5, h6 { font-family: 'Roboto', sans-serif; } 
  </style>`,

  // This is the nav tag and appears at the top of the page/ 
  nav : `
  <nav class="navbar navbar-inverse navbar-fixed-top">
    <div class="container">
      <div class="navbar-header">
        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <a class="navbar-brand" href="#" title="top">Christopher Diggins</a>
      </div>
      <div id="navbar" class="navbar-collapse collapse">
        <ul class="nav navbar-nav">
          <li><a href="{{{baseUrl}}}/index.html" title="home">Home</a></li>
          <li><a href="{{{baseUrl}}}/blog.html" title="blog">Blog</a></li>
          <li><a href="{{{baseUrl}}}/about.html" title="about">About</a></li>
          {{#urlPrev}}
            <li><a href="{{{urlPrev}}}">Previous</a></li>
          {{/urlPrev}}
          {{#urlNext}}
            <li><a href="{{{urlNext}}}">Next</a></li>
          {{/urlNext}}
        </ul>
      </div>
    </div>
  </nav>`,

  // This div tag floats to the right of the main content, if enough spaces is present, otherwise it appears at the bottoms
  sidebar : `
  <div class="col-sm-4 sidebar-module sidebar-module-inset">
      <p>
        I am a software developer based in Montreal, Canada with a passion for programming languages, 
        software development practices and processes, and 3D graphics. 
      </p>
    <h3>Recent Posts</h3>
       <ul>
{{#recentArticles}}
   <li><a href="{{{url}}}">{{title}}</a></li>
{{/recentArticles}}
      </ul>
    <h3>Share</h3> 
    <p>
      <ul class="fa-ul">
        <li><i class="fa fa-facebook    fa-fw" aria-hidden="true"></i>&nbsp;&nbsp;<a href="{{{facebookShareUrl}}}">Facebook</a></li>
        <li><i class="fa fa-twitter     fa-fw" aria-hidden="true"></i>&nbsp;&nbsp;<a href="{{{twitterShareUrl}}}">Twitter</a></li>
        <li><i class="fa fa-reddit      fa-fw" aria-hidden="true"></i>&nbsp;&nbsp;<a href="{{{redditShareUrl}}}">Reddit</a></li>
        <li><i class="fa fa-google-plus fa-fw" aria-hidden="true"></i>&nbsp;&nbsp;<a href="{{{googlePlusShareUrl}}}">Google+</a></li>
        <li><i class="fa fa-linkedin    fa-fw" aria-hidden="true"></i>&nbsp;&nbsp;<a href="{{{linkedInShareUrl}}}">LinkedIn</a></li>
        <li><i class="fa fa-hacker-news fa-fw" aria-hidden="true"></i>&nbsp;&nbsp;<a href="{{{hackerNewsShareUrl}}}">Hacker News</a></li>
        <li><i class="fa fa-tumblr      fa-fw" aria-hidden="true"></i>&nbsp;&nbsp;<a href="{{{tumblrShareUrl}}}">Tumblr</a></li>
      </ul>
    </p>
  </div>`,
      
  // This is added at the end of the body tag.
  footer : `    
<hr>
<footer style='text-align:center'>
  <div class="container">

    <!-- Social media sharing icons -->
    <div class="row">
      {{#social}}    
        <a href="{{{url}}}" class="btn-link" style="text-decoration: none" title="{{title}}">
          <span class="fa-stack fa-lg">
            <i class="fa fa-circle fa-stack-2x" aria-hidden="true"></i>
            <i class="fa {{icon}} fa-stack-1x fa-inverse" aria-hidden="true"></i>
          </span>
        </a>
      {{/social}}
    </div>
  
    <!-- Copyright and Licene notice -->
    <p class="copyright text-muted small">
      Copyright &copy; {{{year}}} {{{author}}}
      <br/><a href="{{{licenseUrl}}}">{{{license}}}</a>
    </p>
  </div>

</footer>

  <!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>

  <!-- Bootstrap scripts --> 
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>

  <!-- Google analytics -->
  <script>
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
  ga('create', '{{googleAnalyticsIds}}', 'auto');
  ga('send', 'pageview');
  </script>`, 
};