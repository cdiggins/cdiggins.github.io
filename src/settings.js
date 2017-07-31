// TODO: 
// Credits 
// Hugo / GitHub / Markdown / HTML / CSS / Creative Commons / RSS / StackOverflow / Mustache / JavaScript / Bootstrap / Font-awesome / Google-fonts 
// This file is used with Myna-Blog-Generator 
module.exports = 
{ 
  author :        'Christopher Diggins',
  year :          '2017',
  source :        'https://github.com/cdiggins/cdiggins.github.io',
  license :       'Attribution-ShareAlike 4.0 International',
  licenseUrl :    'https://creativecommons.org/licenses/by-sa/4.0/',
  social : 
  [
    { title: "email", icon: "fa-envelope", url: 'mailto:cdiggins@gmail.com' },
    { title: "Twitter", icon: "fa-twitter", url: 'https://twitter.com/cdiggins' },
    { title: "LinkedIn", icon: "fa-linkedin", url: 'https://www.linkedin.com/in/cdiggins/' },
    { title: "FaceBook", icon: "fa-facebook", url: 'https://www.facebook.com/diggins.software' },
    { title: "GitHub", icon: "fa-github", url: 'https://github.com/cdiggins' },
    { title: "StackOverflow", icon: "fa-stackoverflow", url: 'https://stackoverflow.com/users/184528/cdiggins' },
    { title: "RSS", icon: "fa-rss", url: 'http://cdiggins.github.io/rss.xml' },
    { title: "YouTube", icon: "fa-youtube", url: "https://www.youtube.com/user/cdiggins" }
  ],
  siteurl :       'https://cdiggins.github.io',
  email :         'cdiggins@gmail.com',
  generator :     'The-Blog-Machine',
  template :      'Diggins-Template-1',
  
  about : 
  { 
    title :       'About Christopher Diggins and his Stupendous Software Blog', 
    description : 'About Christopher Diggins and his software development blog', 
    url:          'http://cdiggins.github.com/about.html' 
  },    

  index : 
  { 
    title       : 'Christopher Diggins\' home on the internet',      
    description : 'Christopher Diggins is a software developer with an unhealthy obsession with programming languages. On this web site, hosted by GitHub, contains his blog, contact information, and other trivia.',
    url:          'http://cdiggins.github.io' 
  },

  blog : { 
    title :       'Another Software Development Blog by Christopher Diggins', 
    description : 'A blog on topics related to software development and 3D graphics with an emphasis on programming languages and open-source development.',
    url:          'http://cdiggins.github.com/blog.html' 
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
  <meta property="og:url"           content="{{url}}" />
  <meta property="og:title"         content="{{title}}" />
  <meta property="og:description"   content="{{description}}" />
  <meta property="og:image"         content="{{imageurl}}" />

  <!-- The site title -->
  <title>{{title}}</title>

  <link rel="stylesheet" href="{{{siteUrl}}}/dist/css/bootstrap.min.css" />
  <link rel="stylesheet" href="{{{siteUrl}}}/dist/css/bootstrap-theme.min.css" />
  <link rel="stylesheet" href="{{{siteUrl}}}/assets/css/ie10-viewport-bug-workaround.css" />
  <link rel="stylesheet" href="{{{siteUrl}}}/dist/css/theme.css" />
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" />
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto|Source+Sans+Pro">
  <style>
    <!-- TODO: move this into a CSS -->
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
          <li><a href="{{{siteUrl}}}/index.html" title="home">Home</a></li>
          <li><a href="{{{siteUrl}}}/blog.html" title="blog">Blog</a></li>
          <li><a href="{{{siteUrl}}}/about.html" title="about">About</a></li>
          {{prevNextNav}}
            <li><a href="{{&urlPrev}}">Previous</a></li>
            <li><a href="{{&urlNext}}">Next</a></li>
          {{/prevNextNav}}
        </ul>
      </div>
    </div>
  </nav>`,

  // This div tag floats to the right of the main content, if enough spaces is present, otherwise it appears at the bottoms
  sidebar : `
  <div class="col-sm-4 sidebar-module sidebar-module-inset">
    <h3>About Me</h3>
      <p>
        I am a software developer based in Montreal, Canada with a passion for programming languages, 
        software development practices and processes, and 3D graphics. 
      </p>
      <p>
        Learn more <a href="http://cdiggins.github.io/about.html">about me and this blog</a>. 
      </p>      
    <h3>Recent Posts</h3>
{{{recentPostsList}}}
    <h3>Share</h3> 
    <p>
      <ul class="fa-ul">
        <li><i class="fa fa-facebook    fa-fw" aria-hidden="true"></i>&nbsp;<a href="{{{facebookShareUrl}}}"  >Facebook</a></li>
        <li><i class="fa fa-twitter     fa-fw" aria-hidden="true"></i>&nbsp;<a href="{{{twitterShareUrl}}}"   >Twitter</a></li>
        <li><i class="fa fa-reddit      fa-fw" aria-hidden="true"></i>&nbsp;<a href="{{{redditShareUrl}}}"    >Reddit</a></li>
        <li><i class="fa fa-google-plus fa-fw" aria-hidden="true"></i>&nbsp;<a href="{{{googlePlusShareUrl}}}">Google+</a></li>
        <li><i class="fa fa-linkedin    fa-fw" aria-hidden="true"></i>&nbsp;<a href="{{{linkedInShareUrl}}}"  >LinkedIn</a></li>
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
        <a href="{{{url}}}" title="{{title}}">
          <span class="fa-stack fa-lg">
            <i class="fa fa-circle fa-stack-2x"></i>
            <i class="fa {{icon}} fa-stack-1x fa-inverse"></i>
          </span>
        </a>
      {{/social}}
    </div>
  
    <!-- Copyright and Licene notice -->
    <p class="copyright text-muted">
      Copyright &copy; {{{year}}} {{{author}}} <a href="{{{licenseUrl}}}">{{{license}}}</a>
    </p>
  </div>

</footer>
  
  <!-- Bootstrap scripts --> 
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
  <script src="{{{siteUrl}}}/dist/js/bootstrap.min.js"></script>
  <script src="{{{siteUrl}}}/assets/js/docs.min.js"></script>
  <script src="{{{siteUrl}}}/assets/js/ie10-viewport-bug-workaround.js"></script>
  <script>

  <!-- Google analytics -->
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
  ga('create', 'UA-93495883-1', 'auto');
  ga('send', 'pageview');
  </script>`, 
};