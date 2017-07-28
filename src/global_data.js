var globalData = 
  { 
    stylesheets : `    <link rel="stylesheet" href="http://cdiggins.github.io/dist/css/bootstrap.min.css" />
    <link rel="stylesheet" href="http://cdiggins.github.io/dist/css/bootstrap-theme.min.css" />
    <link rel="stylesheet" href="http://cdiggins.github.io/assets/css/ie10-viewport-bug-workaround.css" />
    <link rel="stylesheet" href="http://cdiggins.github.io/dist/css/theme.css" />
		<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" />`,
    analytics : `    <script>
    (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
    })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
    ga('create', 'UA-93495883-1', 'auto');
    ga('send', 'pageview');
    </script>`, 
    bootstrapfooter : `    
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
    <script src="https://cdiggins.github.io/dist/js/bootstrap.min.js"></script>
    <script src="https://cdiggins.github.io/assets/js/docs.min.js"></script>
    <script src="https://cdiggins.github.io/assets/js/ie10-viewport-bug-workaround.js"></script>`,
    footer : `    
 <!-- Footer -->
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
    <a href="https://cdiggins.github.io/rss.xml" title="RSS">
      <span class="fa-stack fa-lg">
        <i class="fa fa-circle fa-stack-2x"></i>
        <i class="fa fa-rss fa-stack-1x fa-inverse"></i>
      </span>
    </a>
  <p class="copyright text-muted">Copyright &copy; Christopher Diggins 2017</p>
  </div>
  </div>
  </footer>`,
    blogurl : 'https://cdiggins.github.io',
    social : {        
      twitter : 'https://twitter.com/cdiggins',
      email : 'cdiggins@gmail.com',
      linkedin : 'https://www.linkedin.com/in/cdiggins/',
      facebook : 'https://www.facebook.com/diggins.software',
      rss : 'https://cdiggins.github.io/rss.xml',
      github : 'https://github.com/cdiggins', 
      stackoverflow : 'https://stackoverflow.com/users/184528/cdiggins',
      youtube : 'https://www.youtube.com/user/cdiggins',
    }
  };

// Export the grammar for usage by Node.js and CommonJs compatible module loaders 
if (typeof module === "object" && module.exports) 
    module.exports = globalData;
