var globalData = 
  { 
    author :        'Christopher Diggins',
    blogurl :       'https://cdiggins.github.io',    
    twitter :       'https://twitter.com/cdiggins',
    email :         'cdiggins@gmail.com',
    linkedin :      'https://www.linkedin.com/in/cdiggins/',
    facebook :      'https://www.facebook.com/diggins.software',
    rss :           '{{{blogurl}}}/rss.xml',
    github :        'https://github.com/cdiggins', 
    stackoverflow : 'https://stackoverflow.com/users/184528/cdiggins',
    youtube :       'https://www.youtube.com/user/cdiggins',
    about : { 
      title : 'About Christopher Diggins and his Stupendous Blog', 
      description : 'About Christopher Diggins and his software development blog', 
      url: 'http://cdiggins.github.com/about.html' 
    },    
    index : { 
      title : 'Christopher Diggins\' home on the internet',      
      description : 'Christopher Diggins is a software developer with an unhealthy obsession with programming languages.',
      url: 'http://cdiggins.github.com' 
    },
    blog : { 
      title : 'Another Software Development Blog by Christopher Diggins', 
      description : 'A blog on topics related to software development and 3D graphics with an emphasis on programming languages and open-source development.',
      url: 'http://cdiggins.github.com/blog.html' 
    },
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
    stylesheets : `
    <link rel="stylesheet" href="{{{blogurl}}}/dist/css/bootstrap.min.css" />
    <link rel="stylesheet" href="{{{blogurl}}}/dist/css/bootstrap-theme.min.css" />
    <link rel="stylesheet" href="{{{blogurl}}}/assets/css/ie10-viewport-bug-workaround.css" />
    <link rel="stylesheet" href="{{{blogurl}}}/dist/css/theme.css" />
		<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" />`,
    analytics : `
    <script>
    (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
    })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
    ga('create', 'UA-93495883-1', 'auto');
    ga('send', 'pageview');
    </script>`, 
    bootstrapfooter : `    
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
    <script src="{{{blogurl}}}/dist/js/bootstrap.min.js"></script>
    <script src="{{{blogurl}}}/assets/js/docs.min.js"></script>
    <script src="{{{blogurl}}}/assets/js/ie10-viewport-bug-workaround.js"></script>`,
    htmlfooter : `    
<hr>
<footer style='text-align:center'>
  <div class="container">
  <div class="row">
    <a href="mailto:cdiggins@gmail.com" title="Email me">
      <span class="fa-stack fa-lg">
        <i class="fa fa-circle fa-stack-2x"></i>
        <i class="fa fa-envelope fa-stack-1x fa-inverse"></i>
      </span>
    </a>
    <a href="https://www.facebook.com/diggins.software" title="Facebook">
      <span class="fa-stack fa-lg">
        <i class="fa fa-circle fa-stack-2x"></i>
        <i class="fa fa-facebook fa-stack-1x fa-inverse"></i>
      </span>
    </a>
    <a href="https://github.com/cdiggins" title="GitHub">
      <span class="fa-stack fa-lg">
        <i class="fa fa-circle fa-stack-2x"></i>
        <i class="fa fa-github fa-stack-1x fa-inverse"></i>
      </span>
    </a>
    <a href="https://twitter.com/cdiggins" title="Twitter">
      <span class="fa-stack fa-lg">
        <i class="fa fa-circle fa-stack-2x"></i>
        <i class="fa fa-twitter fa-stack-1x fa-inverse"></i>
      </span>
    </a>
    <a href="https://linkedin.com/in/cdiggins" title="LinkedIn">
      <span class="fa-stack fa-lg">
        <i class="fa fa-circle fa-stack-2x"></i>
        <i class="fa fa-linkedin fa-stack-1x fa-inverse"></i>
      </span>
    </a>
    <!--
    <a href="https://stackoverflow.com/users/184528/cdiggins" title="StackOverflow">
      <span class="fa-stack fa-lg">
        <i class="fa fa-circle fa-stack-2x"></i>
        <i class="fa fa-stack-overflow fa-stack-1x fa-inverse"></i>
      </span>
    </a>
    -->
    <!--
    <a href="https://www.youtube.com/user/cdiggins" title="Youtube">
      <span class="fa-stack fa-lg">
        <i class="fa fa-circle fa-stack-2x"></i>
        <i class="fa fa-youtube fa-stack-1x fa-inverse"></i>
      </span>
    </a>
    -->                        
    <a href="{{{blogurl}}}/rss.xml" title="RSS">
      <span class="fa-stack fa-lg">
        <i class="fa fa-circle fa-stack-2x"></i>
        <i class="fa fa-rss fa-stack-1x fa-inverse"></i>
      </span>
    </a>
  <p class="copyright text-muted">Copyright &copy; {{{year}}} {{{author}}}</p>
  </div>
  </div>
  </footer>`,
    header : `    
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
    <meta name="description"          content="{{description}}" />
    <meta name="author"               content="{{author}}" />
    <meta name="generator"            content="Myna Blog Generator" />
    <meta property="og:url"           content="{{url}}" />
    <meta property="og:type"          content="website" />
    <meta property="og:title"         content="{{title}}" />
    <meta property="og:description"   content="{{description}}" />
    <meta property="og:image"         content="{{imageurl}}" />
    <title>{{title}}</title>
    <link rel="stylesheet" href="{{siteurl}}/dist/css/bootstrap.min.css" />
    <link rel="stylesheet" href="{{{blogurl}}}/dist/css/bootstrap-theme.min.css" />
    <link rel="stylesheet" href="{{{blogurl}}}/assets/css/ie10-viewport-bug-workaround.css" />
    <link rel="stylesheet" href="{{{blogurl}}}/dist/css/theme.css" />
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" />
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto|Source+Sans+Pro">
    <style>
      <!-- TODO: move this into a CSS -->
      body { font-family: 'Source Sans Pro', sans-serif; }
      h1, h2, h3, h4, h5, h6 { font-family: 'Roboto', sans-serif; } 
    </style>`,
  };

// Export the grammar for usage by Node.js and CommonJs compatible module loaders 
if (typeof module === "object" && module.exports) 
    module.exports = globalData;
