





<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">



  <link crossorigin="anonymous" href="https://assets-cdn.github.com/assets/frameworks-81a59bf26d881d29286674f6deefe779c444382fff322085b50ba455460ccae5.css" media="all" rel="stylesheet" />
  <link crossorigin="anonymous" href="https://assets-cdn.github.com/assets/github-4a6d0d25a011b7202858c52c047bda6bd227d8853abb3e70edf75785f6a78122.css" media="all" rel="stylesheet" />
  
  
  <link crossorigin="anonymous" href="https://assets-cdn.github.com/assets/site-537c466d44a69d38c4bd60c2fd2955373ef96d051bd97b2ad30ed039acc97bff.css" media="all" rel="stylesheet" />
  

  <meta name="viewport" content="width=device-width">
  
  <title>JmilkFan-s-Blog/common.js at master · JmilkFan/JmilkFan-s-Blog · GitHub</title>
  <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub">
  <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub">
  <meta property="fb:app_id" content="1401488693436528">

    
    <meta content="https://avatars3.githubusercontent.com/u/16975584?v=3&amp;s=400" property="og:image" /><meta content="GitHub" property="og:site_name" /><meta content="object" property="og:type" /><meta content="JmilkFan/JmilkFan-s-Blog" property="og:title" /><meta content="https://github.com/JmilkFan/JmilkFan-s-Blog" property="og:url" /><meta content="JmilkFan-s-Blog - JmilkFan&#39;s Blog with Python-Flask" property="og:description" />

  <link rel="assets" href="https://assets-cdn.github.com/">
  
  <meta name="pjax-timeout" content="1000">
  
  <meta name="request-id" content="705D:2098A:2D1F82:4968BC:590AB878" data-pjax-transient>
  

  <meta name="selected-link" value="repo_source" data-pjax-transient>

  <meta name="google-site-verification" content="KT5gs8h0wvaagLKAVWq8bbeNwnZZK1r1XQysX3xurLU">
<meta name="google-site-verification" content="ZzhVyEFwb7w3e0-uOTltm8Jsck2F5StVihD0exw2fsA">
    <meta name="google-analytics" content="UA-3769691-2">

<meta content="collector.githubapp.com" name="octolytics-host" /><meta content="github" name="octolytics-app-id" /><meta content="https://collector.githubapp.com/github-external/browser_event" name="octolytics-event-url" /><meta content="705D:2098A:2D1F82:4968BC:590AB878" name="octolytics-dimension-request_id" />
<meta content="/&lt;user-name&gt;/&lt;repo-name&gt;/blob/show" data-pjax-transient="true" name="analytics-location" />




  <meta class="js-ga-set" name="dimension1" content="Logged Out">


  

      <meta name="hostname" content="github.com">
  <meta name="user-login" content="">

      <meta name="expected-hostname" content="github.com">
    <meta name="js-proxy-site-detection-payload" content="OWVhOTBlNDQwYTliMDQ3NDJlMWE2MDc4NGJmZmRjNzZkNzJhNzU1ZWZkMTAyMzYwYTY0YzYwMDYzM2IyODYyZXx7InJlbW90ZV9hZGRyZXNzIjoiMzYuNDcuMTYwLjIxMyIsInJlcXVlc3RfaWQiOiI3MDVEOjIwOThBOjJEMUY4Mjo0OTY4QkM6NTkwQUI4NzgiLCJ0aW1lc3RhbXAiOjE0OTM4NzQ4MDksImhvc3QiOiJnaXRodWIuY29tIn0=">


  <meta name="html-safe-nonce" content="4b7ca71dd0b728643c5ac793985726749ae9c40f">

  <meta http-equiv="x-pjax-version" content="54135a3b0eac0835751e71ad3f7d74ce">
  

    
  <meta name="description" content="JmilkFan-s-Blog - JmilkFan&#39;s Blog with Python-Flask">
  <meta name="go-import" content="github.com/JmilkFan/JmilkFan-s-Blog git https://github.com/JmilkFan/JmilkFan-s-Blog.git">

  <meta content="16975584" name="octolytics-dimension-user_id" /><meta content="JmilkFan" name="octolytics-dimension-user_login" /><meta content="73602589" name="octolytics-dimension-repository_id" /><meta content="JmilkFan/JmilkFan-s-Blog" name="octolytics-dimension-repository_nwo" /><meta content="true" name="octolytics-dimension-repository_public" /><meta content="false" name="octolytics-dimension-repository_is_fork" /><meta content="73602589" name="octolytics-dimension-repository_network_root_id" /><meta content="JmilkFan/JmilkFan-s-Blog" name="octolytics-dimension-repository_network_root_nwo" />
  <link href="https://github.com/JmilkFan/JmilkFan-s-Blog/commits/master.atom" rel="alternate" title="Recent Commits to JmilkFan-s-Blog:master" type="application/atom+xml">


    <link rel="canonical" href="https://github.com/JmilkFan/JmilkFan-s-Blog/blob/master/jmilkfansblog/static/assets/js/common.js" data-pjax-transient>


  <meta name="browser-stats-url" content="https://api.github.com/_private/browser/stats">

  <meta name="browser-errors-url" content="https://api.github.com/_private/browser/errors">

  <link rel="mask-icon" href="https://assets-cdn.github.com/pinned-octocat.svg" color="#000000">
  <link rel="icon" type="image/x-icon" href="https://assets-cdn.github.com/favicon.ico">

<meta name="theme-color" content="#1e2327">



  </head>

  <body class="logged-out env-production page-blob">
    


  <div class="position-relative js-header-wrapper ">
    <a href="#start-of-content" tabindex="1" class="accessibility-aid js-skip-to-content">Skip to content</a>
    <div id="js-pjax-loader-bar" class="pjax-loader-bar"><div class="progress"></div></div>

    
    
    



          <header class="site-header js-details-container Details" role="banner">
  <div class="container-responsive">
    <a class="header-logo-invertocat" href="https://github.com/" aria-label="Homepage" data-ga-click="(Logged out) Header, go to homepage, icon:logo-wordmark">
      <svg aria-hidden="true" class="octicon octicon-mark-github" height="32" version="1.1" viewBox="0 0 16 16" width="32"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"/></svg>
    </a>

    <button class="btn-link float-right site-header-toggle js-details-target" type="button" aria-label="Toggle navigation">
      <svg aria-hidden="true" class="octicon octicon-three-bars" height="24" version="1.1" viewBox="0 0 12 16" width="18"><path fill-rule="evenodd" d="M11.41 9H.59C0 9 0 8.59 0 8c0-.59 0-1 .59-1H11.4c.59 0 .59.41.59 1 0 .59 0 1-.59 1h.01zm0-4H.59C0 5 0 4.59 0 4c0-.59 0-1 .59-1H11.4c.59 0 .59.41.59 1 0 .59 0 1-.59 1h.01zM.59 11H11.4c.59 0 .59.41.59 1 0 .59 0 1-.59 1H.59C0 13 0 12.59 0 12c0-.59 0-1 .59-1z"/></svg>
    </button>

    <div class="site-header-menu">
      <nav class="site-header-nav">
        <a href="/features" class="js-selected-navigation-item nav-item" data-ga-click="Header, click, Nav menu - item:features" data-selected-links="/features /features">
          Features
</a>        <a href="/business" class="js-selected-navigation-item nav-item" data-ga-click="Header, click, Nav menu - item:business" data-selected-links="/business /business/security /business/customers /business">
          Business
</a>        <a href="/explore" class="js-selected-navigation-item nav-item" data-ga-click="Header, click, Nav menu - item:explore" data-selected-links="/explore /trending /trending/developers /integrations /integrations/feature/code /integrations/feature/collaborate /integrations/feature/ship /showcases /explore">
          Explore
</a>        <a href="/pricing" class="js-selected-navigation-item nav-item" data-ga-click="Header, click, Nav menu - item:pricing" data-selected-links="/pricing /pricing/developer /pricing/team /pricing/business-hosted /pricing/business-enterprise /pricing">
          Pricing
</a>      </nav>

      <div class="site-header-actions">
          <div class="header-search scoped-search site-scoped-search js-site-search" role="search">
  <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="/JmilkFan/JmilkFan-s-Blog/search" class="js-site-search-form" data-scoped-search-url="/JmilkFan/JmilkFan-s-Blog/search" data-unscoped-search-url="/search" method="get"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /></div>
    <label class="form-control header-search-wrapper js-chromeless-input-container">
        <a href="/JmilkFan/JmilkFan-s-Blog/blob/master/jmilkfansblog/static/assets/js/common.js" class="header-search-scope no-underline">This repository</a>
      <input type="text"
        class="form-control header-search-input js-site-search-focus js-site-search-field is-clearable"
        data-hotkey="s"
        name="q"
        value=""
        placeholder="Search"
        aria-label="Search this repository"
        data-unscoped-placeholder="Search GitHub"
        data-scoped-placeholder="Search"
        autocapitalize="off">
        <input type="hidden" class="js-site-search-type-field" name="type" >
    </label>
</form></div>


          <a class="text-bold site-header-link" href="/login?return_to=%2FJmilkFan%2FJmilkFan-s-Blog%2Fblob%2Fmaster%2Fjmilkfansblog%2Fstatic%2Fassets%2Fjs%2Fcommon.js" data-ga-click="(Logged out) Header, clicked Sign in, text:sign-in">Sign in</a>
            <span class="text-gray">or</span>
            <a class="text-bold site-header-link" href="/join?source=header-repo" data-ga-click="(Logged out) Header, clicked Sign up, text:sign-up">Sign up</a>
      </div>
    </div>
  </div>
</header>


  </div>

  <div id="start-of-content" class="accessibility-aid"></div>

    <div id="js-flash-container">
</div>



  <div role="main">
        <div itemscope itemtype="http://schema.org/SoftwareSourceCode">
    <div id="js-repo-pjax-container" data-pjax-container>
        



    <div class="pagehead repohead instapaper_ignore readability-menu experiment-repo-nav">
      <div class="container repohead-details-container">

        <ul class="pagehead-actions">
  <li>
      <a href="/login?return_to=%2FJmilkFan%2FJmilkFan-s-Blog"
    class="btn btn-sm btn-with-count tooltipped tooltipped-n"
    aria-label="You must be signed in to watch a repository" rel="nofollow">
    <svg aria-hidden="true" class="octicon octicon-eye" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M8.06 2C3 2 0 8 0 8s3 6 8.06 6C13 14 16 8 16 8s-3-6-7.94-6zM8 12c-2.2 0-4-1.78-4-4 0-2.2 1.8-4 4-4 2.22 0 4 1.8 4 4 0 2.22-1.78 4-4 4zm2-4c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"/></svg>
    Watch
  </a>
  <a class="social-count" href="/JmilkFan/JmilkFan-s-Blog/watchers"
     aria-label="4 users are watching this repository">
    4
  </a>

  </li>

  <li>
      <a href="/login?return_to=%2FJmilkFan%2FJmilkFan-s-Blog"
    class="btn btn-sm btn-with-count tooltipped tooltipped-n"
    aria-label="You must be signed in to star a repository" rel="nofollow">
    <svg aria-hidden="true" class="octicon octicon-star" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74z"/></svg>
    Star
  </a>

    <a class="social-count js-social-count" href="/JmilkFan/JmilkFan-s-Blog/stargazers"
      aria-label="8 users starred this repository">
      8
    </a>

  </li>

  <li>
      <a href="/login?return_to=%2FJmilkFan%2FJmilkFan-s-Blog"
        class="btn btn-sm btn-with-count tooltipped tooltipped-n"
        aria-label="You must be signed in to fork a repository" rel="nofollow">
        <svg aria-hidden="true" class="octicon octicon-repo-forked" height="16" version="1.1" viewBox="0 0 10 16" width="10"><path fill-rule="evenodd" d="M8 1a1.993 1.993 0 0 0-1 3.72V6L5 8 3 6V4.72A1.993 1.993 0 0 0 2 1a1.993 1.993 0 0 0-1 3.72V6.5l3 3v1.78A1.993 1.993 0 0 0 5 15a1.993 1.993 0 0 0 1-3.72V9.5l3-3V4.72A1.993 1.993 0 0 0 8 1zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3 10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3-10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"/></svg>
        Fork
      </a>

    <a href="/JmilkFan/JmilkFan-s-Blog/network" class="social-count"
       aria-label="7 users forked this repository">
      7
    </a>
  </li>
</ul>

        <h1 class="public ">
  <svg aria-hidden="true" class="octicon octicon-repo" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"/></svg>
  <span class="author" itemprop="author"><a href="/JmilkFan" class="url fn" rel="author">JmilkFan</a></span><!--
--><span class="path-divider">/</span><!--
--><strong itemprop="name"><a href="/JmilkFan/JmilkFan-s-Blog" data-pjax="#js-repo-pjax-container">JmilkFan-s-Blog</a></strong>

</h1>

      </div>
      <div class="container">
        
<nav class="reponav js-repo-nav js-sidenav-container-pjax"
     itemscope
     itemtype="http://schema.org/BreadcrumbList"
     role="navigation"
     data-pjax="#js-repo-pjax-container">

  <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
    <a href="/JmilkFan/JmilkFan-s-Blog" class="js-selected-navigation-item selected reponav-item" data-hotkey="g c" data-selected-links="repo_source repo_downloads repo_commits repo_releases repo_tags repo_branches /JmilkFan/JmilkFan-s-Blog" itemprop="url">
      <svg aria-hidden="true" class="octicon octicon-code" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M9.5 3L8 4.5 11.5 8 8 11.5 9.5 13 14 8 9.5 3zm-5 0L0 8l4.5 5L6 11.5 2.5 8 6 4.5 4.5 3z"/></svg>
      <span itemprop="name">Code</span>
      <meta itemprop="position" content="1">
</a>  </span>

    <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
      <a href="/JmilkFan/JmilkFan-s-Blog/issues" class="js-selected-navigation-item reponav-item" data-hotkey="g i" data-selected-links="repo_issues repo_labels repo_milestones /JmilkFan/JmilkFan-s-Blog/issues" itemprop="url">
        <svg aria-hidden="true" class="octicon octicon-issue-opened" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"/></svg>
        <span itemprop="name">Issues</span>
        <span class="Counter">0</span>
        <meta itemprop="position" content="2">
</a>    </span>

  <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
    <a href="/JmilkFan/JmilkFan-s-Blog/pulls" class="js-selected-navigation-item reponav-item" data-hotkey="g p" data-selected-links="repo_pulls /JmilkFan/JmilkFan-s-Blog/pulls" itemprop="url">
      <svg aria-hidden="true" class="octicon octicon-git-pull-request" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M11 11.28V5c-.03-.78-.34-1.47-.94-2.06C9.46 2.35 8.78 2.03 8 2H7V0L4 3l3 3V4h1c.27.02.48.11.69.31.21.2.3.42.31.69v6.28A1.993 1.993 0 0 0 10 15a1.993 1.993 0 0 0 1-3.72zm-1 2.92c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zM4 3c0-1.11-.89-2-2-2a1.993 1.993 0 0 0-1 3.72v6.56A1.993 1.993 0 0 0 2 15a1.993 1.993 0 0 0 1-3.72V4.72c.59-.34 1-.98 1-1.72zm-.8 10c0 .66-.55 1.2-1.2 1.2-.65 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"/></svg>
      <span itemprop="name">Pull requests</span>
      <span class="Counter">0</span>
      <meta itemprop="position" content="3">
</a>  </span>

    <a href="/JmilkFan/JmilkFan-s-Blog/projects" class="js-selected-navigation-item reponav-item" data-selected-links="repo_projects new_repo_project repo_project /JmilkFan/JmilkFan-s-Blog/projects">
      <svg aria-hidden="true" class="octicon octicon-project" height="16" version="1.1" viewBox="0 0 15 16" width="15"><path fill-rule="evenodd" d="M10 12h3V2h-3v10zm-4-2h3V2H6v8zm-4 4h3V2H2v12zm-1 1h13V1H1v14zM14 0H1a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h13a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1z"/></svg>
      Projects
      <span class="Counter" >0</span>
</a>


  <a href="/JmilkFan/JmilkFan-s-Blog/pulse" class="js-selected-navigation-item reponav-item" data-selected-links="pulse /JmilkFan/JmilkFan-s-Blog/pulse">
    <svg aria-hidden="true" class="octicon octicon-pulse" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M11.5 8L8.8 5.4 6.6 8.5 5.5 1.6 2.38 8H0v2h3.6l.9-1.8.9 5.4L9 8.5l1.6 1.5H14V8z"/></svg>
    Pulse
</a>
  <a href="/JmilkFan/JmilkFan-s-Blog/graphs" class="js-selected-navigation-item reponav-item" data-selected-links="repo_graphs repo_contributors /JmilkFan/JmilkFan-s-Blog/graphs">
    <svg aria-hidden="true" class="octicon octicon-graph" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M16 14v1H0V0h1v14h15zM5 13H3V8h2v5zm4 0H7V3h2v10zm4 0h-2V6h2v7z"/></svg>
    Graphs
</a>

</nav>

      </div>
    </div>

<div class="container new-discussion-timeline experiment-repo-nav">
  <div class="repository-content">

    
          

<a href="/JmilkFan/JmilkFan-s-Blog/blob/ffa857fd347edc5d18010b0b7dd002c4918c482a/jmilkfansblog/static/assets/js/common.js" class="d-none js-permalink-shortcut" data-hotkey="y">Permalink</a>

<!-- blob contrib key: blob_contributors:v21:be1997f8acef3dba11c8fbd3c53a1d0a -->

<div class="file-navigation js-zeroclipboard-container">
  
<div class="select-menu branch-select-menu js-menu-container js-select-menu float-left">
  <button class=" btn btn-sm select-menu-button js-menu-target css-truncate" data-hotkey="w"
    
    type="button" aria-label="Switch branches or tags" tabindex="0" aria-haspopup="true">
      <i>Branch:</i>
      <span class="js-select-button css-truncate-target">master</span>
  </button>

  <div class="select-menu-modal-holder js-menu-content js-navigation-container" data-pjax>

    <div class="select-menu-modal">
      <div class="select-menu-header">
        <svg aria-label="Close" class="octicon octicon-x js-menu-close" height="16" role="img" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48z"/></svg>
        <span class="select-menu-title">Switch branches/tags</span>
      </div>

      <div class="select-menu-filters">
        <div class="select-menu-text-filter">
          <input type="text" aria-label="Filter branches/tags" id="context-commitish-filter-field" class="form-control js-filterable-field js-navigation-enable" placeholder="Filter branches/tags">
        </div>
        <div class="select-menu-tabs">
          <ul>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="branches" data-filter-placeholder="Filter branches/tags" class="js-select-menu-tab" role="tab">Branches</a>
            </li>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="tags" data-filter-placeholder="Find a tag…" class="js-select-menu-tab" role="tab">Tags</a>
            </li>
          </ul>
        </div>
      </div>

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="branches" role="menu">

        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <a class="select-menu-item js-navigation-item js-navigation-open selected"
               href="/JmilkFan/JmilkFan-s-Blog/blob/master/jmilkfansblog/static/assets/js/common.js"
               data-name="master"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                master
              </span>
            </a>
        </div>

          <div class="select-menu-no-results">Nothing to show</div>
      </div>

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="tags">
        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/JmilkFan/JmilkFan-s-Blog/tree/0.0.1/jmilkfansblog/static/assets/js/common.js"
              data-name="0.0.1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="0.0.1">
                0.0.1
              </span>
            </a>
        </div>

        <div class="select-menu-no-results">Nothing to show</div>
      </div>

    </div>
  </div>
</div>

  <div class="BtnGroup float-right">
    <a href="/JmilkFan/JmilkFan-s-Blog/find/master"
          class="js-pjax-capture-input btn btn-sm BtnGroup-item"
          data-pjax
          data-hotkey="t">
      Find file
    </a>
    <button aria-label="Copy file path to clipboard" class="js-zeroclipboard btn btn-sm BtnGroup-item tooltipped tooltipped-s" data-copied-hint="Copied!" type="button">Copy path</button>
  </div>
  <div class="breadcrumb js-zeroclipboard-target">
    <span class="repo-root js-repo-root"><span class="js-path-segment"><a href="/JmilkFan/JmilkFan-s-Blog"><span>JmilkFan-s-Blog</span></a></span></span><span class="separator">/</span><span class="js-path-segment"><a href="/JmilkFan/JmilkFan-s-Blog/tree/master/jmilkfansblog"><span>jmilkfansblog</span></a></span><span class="separator">/</span><span class="js-path-segment"><a href="/JmilkFan/JmilkFan-s-Blog/tree/master/jmilkfansblog/static"><span>static</span></a></span><span class="separator">/</span><span class="js-path-segment"><a href="/JmilkFan/JmilkFan-s-Blog/tree/master/jmilkfansblog/static/assets"><span>assets</span></a></span><span class="separator">/</span><span class="js-path-segment"><a href="/JmilkFan/JmilkFan-s-Blog/tree/master/jmilkfansblog/static/assets/js"><span>js</span></a></span><span class="separator">/</span><strong class="final-path">common.js</strong>
  </div>
</div>


<include-fragment class="commit-tease" src="/JmilkFan/JmilkFan-s-Blog/contributors/master/jmilkfansblog/static/assets/js/common.js">
  <div>
    Fetching contributors&hellip;
  </div>

  <div class="commit-tease-contributors">
    <img alt="" class="loader-loading float-left" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32-EAF2F5.gif" width="16" />
    <span class="loader-error">Cannot retrieve contributors at this time</span>
  </div>
</include-fragment>
<div class="file">
  <div class="file-header">
  <div class="file-actions">

    <div class="BtnGroup">
      <a href="/JmilkFan/JmilkFan-s-Blog/raw/master/jmilkfansblog/static/assets/js/common.js" class="btn btn-sm BtnGroup-item" id="raw-url">Raw</a>
        <a href="/JmilkFan/JmilkFan-s-Blog/blame/master/jmilkfansblog/static/assets/js/common.js" class="btn btn-sm js-update-url-with-hash BtnGroup-item" data-hotkey="b">Blame</a>
      <a href="/JmilkFan/JmilkFan-s-Blog/commits/master/jmilkfansblog/static/assets/js/common.js" class="btn btn-sm BtnGroup-item" rel="nofollow">History</a>
    </div>


        <button type="button" class="btn-octicon disabled tooltipped tooltipped-nw"
          aria-label="You must be signed in to make or propose changes">
          <svg aria-hidden="true" class="octicon octicon-pencil" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M0 12v3h3l8-8-3-3-8 8zm3 2H1v-2h1v1h1v1zm10.3-9.3L12 6 9 3l1.3-1.3a.996.996 0 0 1 1.41 0l1.59 1.59c.39.39.39 1.02 0 1.41z"/></svg>
        </button>
        <button type="button" class="btn-octicon btn-octicon-danger disabled tooltipped tooltipped-nw"
          aria-label="You must be signed in to make or propose changes">
          <svg aria-hidden="true" class="octicon octicon-trashcan" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M11 2H9c0-.55-.45-1-1-1H5c-.55 0-1 .45-1 1H2c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1v9c0 .55.45 1 1 1h7c.55 0 1-.45 1-1V5c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm-1 12H3V5h1v8h1V5h1v8h1V5h1v8h1V5h1v9zm1-10H2V3h9v1z"/></svg>
        </button>
  </div>

  <div class="file-info">
      803 lines (803 sloc)
      <span class="file-info-divider"></span>
    46.1 KB
  </div>
</div>

  

  <div itemprop="text" class="blob-wrapper data type-javascript">
      <table class="highlight tab-size js-file-line-container" data-tab-size="8">
      <tr>
        <td id="L1" class="blob-num js-line-number" data-line-number="1"></td>
        <td id="LC1" class="blob-code blob-code-inner js-file-line"><span class="pl-c">/*!</span></td>
      </tr>
      <tr>
        <td id="L2" class="blob-num js-line-number" data-line-number="2"></td>
        <td id="LC2" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * Bootstrap v3.3.7 (http://getbootstrap.com)</span></td>
      </tr>
      <tr>
        <td id="L3" class="blob-num js-line-number" data-line-number="3"></td>
        <td id="LC3" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * Copyright 2011-2016 Twitter, Inc.</span></td>
      </tr>
      <tr>
        <td id="L4" class="blob-num js-line-number" data-line-number="4"></td>
        <td id="LC4" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * Licensed under the MIT license</span></td>
      </tr>
      <tr>
        <td id="L5" class="blob-num js-line-number" data-line-number="5"></td>
        <td id="LC5" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> */</span></td>
      </tr>
      <tr>
        <td id="L6" class="blob-num js-line-number" data-line-number="6"></td>
        <td id="LC6" class="blob-code blob-code-inner js-file-line"><span class="pl-k">if</span>(<span class="pl-k">typeof</span> jQuery<span class="pl-k">===</span><span class="pl-s"><span class="pl-pds">&#39;</span>undefined<span class="pl-pds">&#39;</span></span>){<span class="pl-k">throw</span> <span class="pl-k">new</span> <span class="pl-en">Error</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>Bootstrap<span class="pl-cce">\&#39;</span>s JavaScript requires jQuery<span class="pl-pds">&#39;</span></span>)}</td>
      </tr>
      <tr>
        <td id="L7" class="blob-num js-line-number" data-line-number="7"></td>
        <td id="LC7" class="blob-code blob-code-inner js-file-line"><span class="pl-k">+</span><span class="pl-k">function</span>(<span class="pl-smi">$</span>){<span class="pl-s"><span class="pl-pds">&#39;</span>use strict<span class="pl-pds">&#39;</span></span>;<span class="pl-k">var</span> version<span class="pl-k">=</span><span class="pl-smi">$</span>.<span class="pl-smi">fn</span>.<span class="pl-smi">jquery</span>.<span class="pl-c1">split</span>(<span class="pl-s"><span class="pl-pds">&#39;</span> <span class="pl-pds">&#39;</span></span>)[<span class="pl-c1">0</span>].<span class="pl-c1">split</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>.<span class="pl-pds">&#39;</span></span>)</td>
      </tr>
      <tr>
        <td id="L8" class="blob-num js-line-number" data-line-number="8"></td>
        <td id="LC8" class="blob-code blob-code-inner js-file-line"><span class="pl-k">if</span>((version[<span class="pl-c1">0</span>]<span class="pl-k">&lt;</span><span class="pl-c1">2</span><span class="pl-k">&amp;&amp;</span>version[<span class="pl-c1">1</span>]<span class="pl-k">&lt;</span><span class="pl-c1">9</span>)<span class="pl-k">||</span>(version[<span class="pl-c1">0</span>]<span class="pl-k">==</span><span class="pl-c1">1</span><span class="pl-k">&amp;&amp;</span>version[<span class="pl-c1">1</span>]<span class="pl-k">==</span><span class="pl-c1">9</span><span class="pl-k">&amp;&amp;</span>version[<span class="pl-c1">2</span>]<span class="pl-k">&lt;</span><span class="pl-c1">1</span>)<span class="pl-k">||</span>(version[<span class="pl-c1">0</span>]<span class="pl-k">&gt;</span><span class="pl-c1">3</span>)){<span class="pl-k">throw</span> <span class="pl-k">new</span> <span class="pl-en">Error</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>Bootstrap<span class="pl-cce">\&#39;</span>s JavaScript requires jQuery version 1.9.1 or higher, but lower than version 4<span class="pl-pds">&#39;</span></span>)}}(jQuery);<span class="pl-k">+</span><span class="pl-k">function</span>(<span class="pl-smi">$</span>){<span class="pl-s"><span class="pl-pds">&#39;</span>use strict<span class="pl-pds">&#39;</span></span>;<span class="pl-k">function</span> <span class="pl-en">transitionEnd</span>(){<span class="pl-k">var</span> el<span class="pl-k">=</span><span class="pl-c1">document</span>.<span class="pl-c1">createElement</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>bootstrap<span class="pl-pds">&#39;</span></span>)</td>
      </tr>
      <tr>
        <td id="L9" class="blob-num js-line-number" data-line-number="9"></td>
        <td id="LC9" class="blob-code blob-code-inner js-file-line"><span class="pl-k">var</span> transEndEventNames<span class="pl-k">=</span>{WebkitTransition<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>webkitTransitionEnd<span class="pl-pds">&#39;</span></span>,MozTransition<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>transitionend<span class="pl-pds">&#39;</span></span>,OTransition<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>oTransitionEnd otransitionend<span class="pl-pds">&#39;</span></span>,transition<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>transitionend<span class="pl-pds">&#39;</span></span>}</td>
      </tr>
      <tr>
        <td id="L10" class="blob-num js-line-number" data-line-number="10"></td>
        <td id="LC10" class="blob-code blob-code-inner js-file-line"><span class="pl-k">for</span>(<span class="pl-k">var</span> name <span class="pl-k">in</span> transEndEventNames){<span class="pl-k">if</span>(<span class="pl-smi">el</span>.<span class="pl-c1">style</span>[name]<span class="pl-k">!==</span><span class="pl-c1">undefined</span>){<span class="pl-k">return</span>{end<span class="pl-k">:</span>transEndEventNames[name]}}}</td>
      </tr>
      <tr>
        <td id="L11" class="blob-num js-line-number" data-line-number="11"></td>
        <td id="LC11" class="blob-code blob-code-inner js-file-line"><span class="pl-k">return</span> <span class="pl-c1">false</span>}</td>
      </tr>
      <tr>
        <td id="L12" class="blob-num js-line-number" data-line-number="12"></td>
        <td id="LC12" class="blob-code blob-code-inner js-file-line"><span class="pl-smi">$</span>.<span class="pl-smi">fn</span>.<span class="pl-en">emulateTransitionEnd</span><span class="pl-k">=</span><span class="pl-k">function</span>(<span class="pl-smi">duration</span>){<span class="pl-k">var</span> called<span class="pl-k">=</span><span class="pl-c1">false</span></td>
      </tr>
      <tr>
        <td id="L13" class="blob-num js-line-number" data-line-number="13"></td>
        <td id="LC13" class="blob-code blob-code-inner js-file-line"><span class="pl-k">var</span> $el<span class="pl-k">=</span><span class="pl-c1">this</span></td>
      </tr>
      <tr>
        <td id="L14" class="blob-num js-line-number" data-line-number="14"></td>
        <td id="LC14" class="blob-code blob-code-inner js-file-line"><span class="pl-en">$</span>(<span class="pl-c1">this</span>).<span class="pl-en">one</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>bsTransitionEnd<span class="pl-pds">&#39;</span></span>,<span class="pl-k">function</span>(){called<span class="pl-k">=</span><span class="pl-c1">true</span>})</td>
      </tr>
      <tr>
        <td id="L15" class="blob-num js-line-number" data-line-number="15"></td>
        <td id="LC15" class="blob-code blob-code-inner js-file-line"><span class="pl-k">var</span> <span class="pl-en">callback</span><span class="pl-k">=</span><span class="pl-k">function</span>(){<span class="pl-k">if</span>(<span class="pl-k">!</span>called)<span class="pl-en">$</span>($el).<span class="pl-en">trigger</span>(<span class="pl-smi">$</span>.<span class="pl-smi">support</span>.<span class="pl-smi">transition</span>.<span class="pl-smi">end</span>)}</td>
      </tr>
      <tr>
        <td id="L16" class="blob-num js-line-number" data-line-number="16"></td>
        <td id="LC16" class="blob-code blob-code-inner js-file-line"><span class="pl-c1">setTimeout</span>(callback,duration)</td>
      </tr>
      <tr>
        <td id="L17" class="blob-num js-line-number" data-line-number="17"></td>
        <td id="LC17" class="blob-code blob-code-inner js-file-line"><span class="pl-k">return</span> <span class="pl-c1">this</span>}</td>
      </tr>
      <tr>
        <td id="L18" class="blob-num js-line-number" data-line-number="18"></td>
        <td id="LC18" class="blob-code blob-code-inner js-file-line"><span class="pl-en">$</span>(<span class="pl-k">function</span>(){<span class="pl-smi">$</span>.<span class="pl-smi">support</span>.<span class="pl-smi">transition</span><span class="pl-k">=</span><span class="pl-en">transitionEnd</span>()</td>
      </tr>
      <tr>
        <td id="L19" class="blob-num js-line-number" data-line-number="19"></td>
        <td id="LC19" class="blob-code blob-code-inner js-file-line"><span class="pl-k">if</span>(<span class="pl-k">!</span><span class="pl-smi">$</span>.<span class="pl-smi">support</span>.<span class="pl-smi">transition</span>)<span class="pl-k">return</span></td>
      </tr>
      <tr>
        <td id="L20" class="blob-num js-line-number" data-line-number="20"></td>
        <td id="LC20" class="blob-code blob-code-inner js-file-line"><span class="pl-smi">$</span>.<span class="pl-c1">event</span>.<span class="pl-smi">special</span>.<span class="pl-smi">bsTransitionEnd</span><span class="pl-k">=</span>{bindType<span class="pl-k">:</span><span class="pl-smi">$</span>.<span class="pl-smi">support</span>.<span class="pl-smi">transition</span>.<span class="pl-smi">end</span>,delegateType<span class="pl-k">:</span><span class="pl-smi">$</span>.<span class="pl-smi">support</span>.<span class="pl-smi">transition</span>.<span class="pl-smi">end</span>,<span class="pl-en">handle</span><span class="pl-k">:</span><span class="pl-k">function</span>(<span class="pl-smi">e</span>){<span class="pl-k">if</span>(<span class="pl-en">$</span>(<span class="pl-smi">e</span>.<span class="pl-c1">target</span>).<span class="pl-en">is</span>(<span class="pl-c1">this</span>))<span class="pl-k">return</span> <span class="pl-smi">e</span>.<span class="pl-smi">handleObj</span>.<span class="pl-smi">handler</span>.<span class="pl-c1">apply</span>(<span class="pl-c1">this</span>,<span class="pl-c1">arguments</span>)}}})}(jQuery);<span class="pl-k">+</span><span class="pl-k">function</span>(<span class="pl-smi">$</span>){<span class="pl-s"><span class="pl-pds">&#39;</span>use strict<span class="pl-pds">&#39;</span></span>;<span class="pl-k">var</span> dismiss<span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">&#39;</span>[data-dismiss=&quot;alert&quot;]<span class="pl-pds">&#39;</span></span></td>
      </tr>
      <tr>
        <td id="L21" class="blob-num js-line-number" data-line-number="21"></td>
        <td id="LC21" class="blob-code blob-code-inner js-file-line"><span class="pl-k">var</span> <span class="pl-en">Alert</span><span class="pl-k">=</span><span class="pl-k">function</span>(<span class="pl-smi">el</span>){<span class="pl-en">$</span>(el).<span class="pl-en">on</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>click<span class="pl-pds">&#39;</span></span>,dismiss,<span class="pl-c1">this</span>.<span class="pl-smi">close</span>)}</td>
      </tr>
      <tr>
        <td id="L22" class="blob-num js-line-number" data-line-number="22"></td>
        <td id="LC22" class="blob-code blob-code-inner js-file-line"><span class="pl-smi">Alert</span>.<span class="pl-c1">VERSION</span><span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">&#39;</span>3.3.7<span class="pl-pds">&#39;</span></span></td>
      </tr>
      <tr>
        <td id="L23" class="blob-num js-line-number" data-line-number="23"></td>
        <td id="LC23" class="blob-code blob-code-inner js-file-line"><span class="pl-smi">Alert</span>.<span class="pl-c1">TRANSITION_DURATION</span><span class="pl-k">=</span><span class="pl-c1">150</span></td>
      </tr>
      <tr>
        <td id="L24" class="blob-num js-line-number" data-line-number="24"></td>
        <td id="LC24" class="blob-code blob-code-inner js-file-line"><span class="pl-smi">Alert</span>.<span class="pl-c1">prototype</span>.<span class="pl-en">close</span><span class="pl-k">=</span><span class="pl-k">function</span>(<span class="pl-smi">e</span>){<span class="pl-k">var</span> $this<span class="pl-k">=</span><span class="pl-en">$</span>(<span class="pl-c1">this</span>)</td>
      </tr>
      <tr>
        <td id="L25" class="blob-num js-line-number" data-line-number="25"></td>
        <td id="LC25" class="blob-code blob-code-inner js-file-line"><span class="pl-k">var</span> selector<span class="pl-k">=</span><span class="pl-smi">$this</span>.<span class="pl-en">attr</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>data-target<span class="pl-pds">&#39;</span></span>)</td>
      </tr>
      <tr>
        <td id="L26" class="blob-num js-line-number" data-line-number="26"></td>
        <td id="LC26" class="blob-code blob-code-inner js-file-line"><span class="pl-k">if</span>(<span class="pl-k">!</span>selector){selector<span class="pl-k">=</span><span class="pl-smi">$this</span>.<span class="pl-en">attr</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>href<span class="pl-pds">&#39;</span></span>)</td>
      </tr>
      <tr>
        <td id="L27" class="blob-num js-line-number" data-line-number="27"></td>
        <td id="LC27" class="blob-code blob-code-inner js-file-line">selector<span class="pl-k">=</span>selector<span class="pl-k">&amp;&amp;</span><span class="pl-smi">selector</span>.<span class="pl-c1">replace</span>(<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-c1">.</span><span class="pl-k">*</span>(?=#<span class="pl-c1">[<span class="pl-k">^</span><span class="pl-c1">\s</span>]</span><span class="pl-k">*</span><span class="pl-k">$</span>)<span class="pl-pds">/</span></span>,<span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span>)}</td>
      </tr>
      <tr>
        <td id="L28" class="blob-num js-line-number" data-line-number="28"></td>
        <td id="LC28" class="blob-code blob-code-inner js-file-line"><span class="pl-k">var</span> $parent<span class="pl-k">=</span><span class="pl-en">$</span>(selector<span class="pl-k">===</span><span class="pl-s"><span class="pl-pds">&#39;</span>#<span class="pl-pds">&#39;</span></span><span class="pl-k">?</span>[]<span class="pl-k">:</span>selector)</td>
      </tr>
      <tr>
        <td id="L29" class="blob-num js-line-number" data-line-number="29"></td>
        <td id="LC29" class="blob-code blob-code-inner js-file-line"><span class="pl-k">if</span>(e)<span class="pl-smi">e</span>.<span class="pl-c1">preventDefault</span>()</td>
      </tr>
      <tr>
        <td id="L30" class="blob-num js-line-number" data-line-number="30"></td>
        <td id="LC30" class="blob-code blob-code-inner js-file-line"><span class="pl-k">if</span>(<span class="pl-k">!</span><span class="pl-smi">$parent</span>.<span class="pl-c1">length</span>){$parent<span class="pl-k">=</span><span class="pl-smi">$this</span>.<span class="pl-c1">closest</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>.alert<span class="pl-pds">&#39;</span></span>)}</td>
      </tr>
      <tr>
        <td id="L31" class="blob-num js-line-number" data-line-number="31"></td>
        <td id="LC31" class="blob-code blob-code-inner js-file-line"><span class="pl-smi">$parent</span>.<span class="pl-en">trigger</span>(e<span class="pl-k">=</span><span class="pl-smi">$</span>.<span class="pl-en">Event</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>close.bs.alert<span class="pl-pds">&#39;</span></span>))</td>
      </tr>
      <tr>
        <td id="L32" class="blob-num js-line-number" data-line-number="32"></td>
        <td id="LC32" class="blob-code blob-code-inner js-file-line"><span class="pl-k">if</span>(<span class="pl-smi">e</span>.<span class="pl-en">isDefaultPrevented</span>())<span class="pl-k">return</span></td>
      </tr>
      <tr>
        <td id="L33" class="blob-num js-line-number" data-line-number="33"></td>
        <td id="LC33" class="blob-code blob-code-inner js-file-line"><span class="pl-smi">$parent</span>.<span class="pl-en">removeClass</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>in<span class="pl-pds">&#39;</span></span>)</td>
      </tr>
      <tr>
        <td id="L34" class="blob-num js-line-number" data-line-number="34"></td>
        <td id="LC34" class="blob-code blob-code-inner js-file-line"><span class="pl-k">function</span> <span class="pl-en">removeElement</span>(){<span class="pl-smi">$parent</span>.<span class="pl-c1">detach</span>().<span class="pl-en">trigger</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>closed.bs.alert<span class="pl-pds">&#39;</span></span>).<span class="pl-c1">remove</span>()}</td>
      </tr>
      <tr>
        <td id="L35" class="blob-num js-line-number" data-line-number="35"></td>
        <td id="LC35" class="blob-code blob-code-inner js-file-line"><span class="pl-smi">$</span>.<span class="pl-smi">support</span>.<span class="pl-smi">transition</span><span class="pl-k">&amp;&amp;</span><span class="pl-smi">$parent</span>.<span class="pl-en">hasClass</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>fade<span class="pl-pds">&#39;</span></span>)<span class="pl-k">?</span><span class="pl-smi">$parent</span>.<span class="pl-en">one</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>bsTransitionEnd<span class="pl-pds">&#39;</span></span>,removeElement).<span class="pl-en">emulateTransitionEnd</span>(<span class="pl-smi">Alert</span>.<span class="pl-c1">TRANSITION_DURATION</span>)<span class="pl-k">:</span><span class="pl-en">removeElement</span>()}</td>
      </tr>
      <tr>
        <td id="L36" class="blob-num js-line-number" data-line-number="36"></td>
        <td id="LC36" class="blob-code blob-code-inner js-file-line"><span class="pl-k">function</span> <span class="pl-en">Plugin</span>(<span class="pl-smi">option</span>){<span class="pl-k">return</span> <span class="pl-c1">this</span>.<span class="pl-en">each</span>(<span class="pl-k">function</span>(){<span class="pl-k">var</span> $this<span class="pl-k">=</span><span class="pl-en">$</span>(<span class="pl-c1">this</span>)</td>
      </tr>
      <tr>
        <td id="L37" class="blob-num js-line-number" data-line-number="37"></td>
        <td id="LC37" class="blob-code blob-code-inner js-file-line"><span class="pl-k">var</span> data<span class="pl-k">=</span><span class="pl-smi">$this</span>.<span class="pl-c1">data</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>bs.alert<span class="pl-pds">&#39;</span></span>)</td>
      </tr>
      <tr>
        <td id="L38" class="blob-num js-line-number" data-line-number="38"></td>
        <td id="LC38" class="blob-code blob-code-inner js-file-line"><span class="pl-k">if</span>(<span class="pl-k">!</span>data)<span class="pl-smi">$this</span>.<span class="pl-c1">data</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>bs.alert<span class="pl-pds">&#39;</span></span>,(data<span class="pl-k">=</span><span class="pl-k">new</span> <span class="pl-en">Alert</span>(<span class="pl-c1">this</span>)))</td>
      </tr>
      <tr>
        <td id="L39" class="blob-num js-line-number" data-line-number="39"></td>
        <td id="LC39" class="blob-code blob-code-inner js-file-line"><span class="pl-k">if</span>(<span class="pl-k">typeof</span> option<span class="pl-k">==</span><span class="pl-s"><span class="pl-pds">&#39;</span>string<span class="pl-pds">&#39;</span></span>)data[option].<span class="pl-c1">call</span>($this)})}</td>
      </tr>
      <tr>
        <td id="L40" class="blob-num js-line-number" data-line-number="40"></td>
        <td id="LC40" class="blob-code blob-code-inner js-file-line"><span class="pl-k">var</span> old<span class="pl-k">=</span><span class="pl-smi">$</span>.<span class="pl-smi">fn</span>.<span class="pl-smi">alert</span></td>
      </tr>
      <tr>
        <td id="L41" class="blob-num js-line-number" data-line-number="41"></td>
        <td id="LC41" class="blob-code blob-code-inner js-file-line"><span class="pl-smi">$</span>.<span class="pl-smi">fn</span>.<span class="pl-smi">alert</span><span class="pl-k">=</span><span class="pl-c1">Plugin</span></td>
      </tr>
      <tr>
        <td id="L42" class="blob-num js-line-number" data-line-number="42"></td>
        <td id="LC42" class="blob-code blob-code-inner js-file-line"><span class="pl-smi">$</span>.<span class="pl-smi">fn</span>.<span class="pl-smi">alert</span>.<span class="pl-smi">Constructor</span><span class="pl-k">=</span>Alert</td>
      </tr>
      <tr>
        <td id="L43" class="blob-num js-line-number" data-line-number="43"></td>
        <td id="LC43" class="blob-code blob-code-inner js-file-line"><span class="pl-smi">$</span>.<span class="pl-smi">fn</span>.<span class="pl-smi">alert</span>.<span class="pl-en">noConflict</span><span class="pl-k">=</span><span class="pl-k">function</span>(){<span class="pl-smi">$</span>.<span class="pl-smi">fn</span>.<span class="pl-smi">alert</span><span class="pl-k">=</span>old</td>
      </tr>
      <tr>
        <td id="L44" class="blob-num js-line-number" data-line-number="44"></td>
        <td id="LC44" class="blob-code blob-code-inner js-file-line"><span class="pl-k">return</span> <span class="pl-c1">this</span>}</td>
      </tr>
      <tr>
        <td id="L45" class="blob-num js-line-number" data-line-number="45"></td>
        <td id="LC45" class="blob-code blob-code-inner js-file-line"><span class="pl-en">$</span>(<span class="pl-c1">document</span>).<span class="pl-en">on</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>click.bs.alert.data-api<span class="pl-pds">&#39;</span></span>,dismiss,<span class="pl-smi">Alert</span>.<span class="pl-c1">prototype</span>.<span class="pl-smi">close</span>)}(jQuery);<span class="pl-k">+</span><span class="pl-k">function</span>(<span class="pl-smi">$</span>){<span class="pl-s"><span class="pl-pds">&#39;</span>use strict<span class="pl-pds">&#39;</span></span>;<span class="pl-k">var</span> <span class="pl-en">Button</span><span class="pl-k">=</span><span class="pl-k">function</span>(<span class="pl-smi">element</span>,<span class="pl-smi">options</span>){<span class="pl-c1">this</span>.<span class="pl-smi">$element</span><span class="pl-k">=</span><span class="pl-en">$</span>(element)</td>
      </tr>
      <tr>
        <td id="L46" class="blob-num js-line-number" data-line-number="46"></td>
        <td id="LC46" class="blob-code blob-code-inner js-file-line"><span class="pl-c1">this</span>.<span class="pl-c1">options</span><span class="pl-k">=</span><span class="pl-smi">$</span>.<span class="pl-en">extend</span>({},<span class="pl-smi">Button</span>.<span class="pl-c1">DEFAULTS</span>,options)</td>
      </tr>
      <tr>
        <td id="L47" class="blob-num js-line-number" data-line-number="47"></td>
        <td id="LC47" class="blob-code blob-code-inner js-file-line"><span class="pl-c1">this</span>.<span class="pl-smi">isLoading</span><span class="pl-k">=</span><span class="pl-c1">false</span>}</td>
      </tr>
      <tr>
        <td id="L48" class="blob-num js-line-number" data-line-number="48"></td>
        <td id="LC48" class="blob-code blob-code-inner js-file-line"><span class="pl-smi">Button</span>.<span class="pl-c1">VERSION</span><span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">&#39;</span>3.3.7<span class="pl-pds">&#39;</span></span></td>
      </tr>
      <tr>
        <td id="L49" class="blob-num js-line-number" data-line-number="49"></td>
        <td id="LC49" class="blob-code blob-code-inner js-file-line"><span class="pl-smi">Button</span>.<span class="pl-c1">DEFAULTS</span><span class="pl-k">=</span>{loadingText<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>loading...<span class="pl-pds">&#39;</span></span>}</td>
      </tr>
      <tr>
        <td id="L50" class="blob-num js-line-number" data-line-number="50"></td>
        <td id="LC50" class="blob-code blob-code-inner js-file-line"><span class="pl-smi">Button</span>.<span class="pl-c1">prototype</span>.<span class="pl-en">setState</span><span class="pl-k">=</span><span class="pl-k">function</span>(<span class="pl-smi">state</span>){<span class="pl-k">var</span> d<span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">&#39;</span>disabled<span class="pl-pds">&#39;</span></span></td>
      </tr>
      <tr>
        <td id="L51" class="blob-num js-line-number" data-line-number="51"></td>
        <td id="LC51" class="blob-code blob-code-inner js-file-line"><span class="pl-k">var</span> $el<span class="pl-k">=</span><span class="pl-c1">this</span>.<span class="pl-smi">$element</span></td>
      </tr>
      <tr>
        <td id="L52" class="blob-num js-line-number" data-line-number="52"></td>
        <td id="LC52" class="blob-code blob-code-inner js-file-line"><span class="pl-k">var</span> val<span class="pl-k">=</span><span class="pl-smi">$el</span>.<span class="pl-en">is</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>input<span class="pl-pds">&#39;</span></span>)<span class="pl-k">?</span><span class="pl-s"><span class="pl-pds">&#39;</span>val<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>html<span class="pl-pds">&#39;</span></span></td>
      </tr>
      <tr>
        <td id="L53" class="blob-num js-line-number" data-line-number="53"></td>
        <td id="LC53" class="blob-code blob-code-inner js-file-line"><span class="pl-k">var</span> data<span class="pl-k">=</span><span class="pl-smi">$el</span>.<span class="pl-c1">data</span>()</td>
      </tr>
      <tr>
        <td id="L54" class="blob-num js-line-number" data-line-number="54"></td>
        <td id="LC54" class="blob-code blob-code-inner js-file-line">state<span class="pl-k">+=</span><span class="pl-s"><span class="pl-pds">&#39;</span>Text<span class="pl-pds">&#39;</span></span></td>
      </tr>
      <tr>
        <td id="L55" class="blob-num js-line-number" data-line-number="55"></td>
        <td id="LC55" class="blob-code blob-code-inner js-file-line"><span class="pl-k">if</span>(<span class="pl-smi">data</span>.<span class="pl-smi">resetText</span><span class="pl-k">==</span><span class="pl-c1">null</span>)<span class="pl-smi">$el</span>.<span class="pl-c1">data</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>resetText<span class="pl-pds">&#39;</span></span>,$el[val]())</td>
      </tr>
      <tr>
        <td id="L56" class="blob-num js-line-number" data-line-number="56"></td>
        <td id="LC56" class="blob-code blob-code-inner js-file-line"><span class="pl-c1">setTimeout</span>(<span class="pl-smi">$</span>.<span class="pl-en">proxy</span>(<span class="pl-k">function</span>(){$el[val](data[state]<span class="pl-k">==</span><span class="pl-c1">null</span><span class="pl-k">?</span><span class="pl-c1">this</span>.<span class="pl-c1">options</span>[state]<span class="pl-k">:</span>data[state])</td>
      </tr>
      <tr>
        <td id="L57" class="blob-num js-line-number" data-line-number="57"></td>
        <td id="LC57" class="blob-code blob-code-inner js-file-line"><span class="pl-k">if</span>(state<span class="pl-k">==</span><span class="pl-s"><span class="pl-pds">&#39;</span>loadingText<span class="pl-pds">&#39;</span></span>){<span class="pl-c1">this</span>.<span class="pl-smi">isLoading</span><span class="pl-k">=</span><span class="pl-c1">true</span></td>
      </tr>
      <tr>
        <td id="L58" class="blob-num js-line-number" data-line-number="58"></td>
        <td id="LC58" class="blob-code blob-code-inner js-file-line"><span class="pl-smi">$el</span>.<span class="pl-en">addClass</span>(d).<span class="pl-en">attr</span>(d,d).<span class="pl-en">prop</span>(d,<span class="pl-c1">true</span>)}<span class="pl-k">else</span> <span class="pl-k">if</span>(<span class="pl-c1">this</span>.<span class="pl-smi">isLoading</span>){<span class="pl-c1">this</span>.<span class="pl-smi">isLoading</span><span class="pl-k">=</span><span class="pl-c1">false</span></td>
      </tr>
      <tr>
        <td id="L59" class="blob-num js-line-number" data-line-number="59"></td>
        <td id="LC59" class="blob-code blob-code-inner js-file-line"><span class="pl-smi">$el</span>.<span class="pl-en">removeClass</span>(d).<span class="pl-en">removeAttr</span>(d).<span class="pl-en">prop</span>(d,<span class="pl-c1">false</span>)}},<span class="pl-c1">this</span>),<span class="pl-c1">0</span>)}</td>
      </tr>
      <tr>
        <td id="L60" class="blob-num js-line-number" data-line-number="60"></td>
        <td id="LC60" class="blob-code blob-code-inner js-file-line"><span class="pl-smi">Button</span>.<span class="pl-c1">prototype</span>.<span class="pl-en">toggle</span><span class="pl-k">=</span><span class="pl-k">function</span>(){<span class="pl-k">var</span> changed<span class="pl-k">=</span><span class="pl-c1">true</span></td>
      </tr>
      <tr>
        <td id="L61" class="blob-num js-line-number" data-line-number="61"></td>
        <td id="LC61" class="blob-code blob-code-inner js-file-line"><span class="pl-k">var</span> $parent<span class="pl-k">=</span><span class="pl-c1">this</span>.<span class="pl-smi">$element</span>.<span class="pl-c1">closest</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>[data-toggle=&quot;buttons&quot;]<span class="pl-pds">&#39;</span></span>)</td>
      </tr>
      <tr>
        <td id="L62" class="blob-num js-line-number" data-line-number="62"></td>
        <td id="LC62" class="blob-code blob-code-inner js-file-line"><span class="pl-k">if</span>(<span class="pl-smi">$parent</span>.<span class="pl-c1">length</span>){<span class="pl-k">var</span> $input<span class="pl-k">=</span><span class="pl-c1">this</span>.<span class="pl-smi">$element</span>.<span class="pl-c1">find</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>input<span class="pl-pds">&#39;</span></span>)</td>
      </tr>
      <tr>
        <td id="L63" class="blob-num js-line-number" data-line-number="63"></td>
        <td id="LC63" class="blob-code blob-code-inner js-file-line"><span class="pl-k">if</span>(<span class="pl-smi">$input</span>.<span class="pl-en">prop</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>type<span class="pl-pds">&#39;</span></span>)<span class="pl-k">==</span><span class="pl-s"><span class="pl-pds">&#39;</span>radio<span class="pl-pds">&#39;</span></span>){<span class="pl-k">if</span>(<span class="pl-smi">$input</span>.<span class="pl-en">prop</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>checked<span class="pl-pds">&#39;</span></span>))changed<span class="pl-k">=</span><span class="pl-c1">false</span></td>
      </tr>
      <tr>
        <td id="L64" class="blob-num js-line-number" data-line-number="64"></td>
        <td id="LC64" class="blob-code blob-code-inner js-file-line"><span class="pl-smi">$parent</span>.<span class="pl-c1">find</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>.active<span class="pl-pds">&#39;</span></span>).<span class="pl-en">removeClass</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>active<span class="pl-pds">&#39;</span></span>)</td>
      </tr>
      <tr>
        <td id="L65" class="blob-num js-line-number" data-line-number="65"></td>
        <td id="LC65" class="blob-code blob-code-inner js-file-line"><span class="pl-c1">this</span>.<span class="pl-smi">$element</span>.<span class="pl-en">addClass</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>active<span class="pl-pds">&#39;</span></span>)}<span class="pl-k">else</span> <span class="pl-k">if</span>(<span class="pl-smi">$input</span>.<span class="pl-en">prop</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>type<span class="pl-pds">&#39;</span></span>)<span class="pl-k">==</span><span class="pl-s"><span class="pl-pds">&#39;</span>checkbox<span class="pl-pds">&#39;</span></span>){<span class="pl-k">if</span>((<span class="pl-smi">$input</span>.<span class="pl-en">prop</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>checked<span class="pl-pds">&#39;</span></span>))<span class="pl-k">!==</span><span class="pl-c1">this</span>.<span class="pl-smi">$element</span>.<span class="pl-en">hasClass</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>active<span class="pl-pds">&#39;</span></span>))changed<span class="pl-k">=</span><span class="pl-c1">false</span></td>
      </tr>
      <tr>
        <td id="L66" class="blob-num js-line-number" data-line-number="66"></td>
        <td id="LC66" class="blob-code blob-code-inner js-file-line"><span class="pl-c1">this</span>.<span class="pl-smi">$element</span>.<span class="pl-en">toggleClass</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>active<span class="pl-pds">&#39;</span></span>)}</td>
      </tr>
      <tr>
        <td id="L67" class="blob-num js-line-number" data-line-number="67"></td>
        <td id="LC67" class="blob-code blob-code-inner js-file-line"><span class="pl-smi">$input</span>.<span class="pl-en">prop</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>checked<span class="pl-pds">&#39;</span></span>,<span class="pl-c1">this</span>.<span class="pl-smi">$element</span>.<span class="pl-en">hasClass</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>active<span class="pl-pds">&#39;</span></span>))</td>
      </tr>
      <tr>
        <td id="L68" class="blob-num js-line-number" data-line-number="68"></td>
        <td id="LC68" class="blob-code blob-code-inner js-file-line"><span class="pl-k">if</span>(changed)<span class="pl-smi">$input</span>.<span class="pl-en">trigger</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>change<span class="pl-pds">&#39;</span></span>)}<span class="pl-k">else</span>{<span class="pl-c1">this</span>.<span class="pl-smi">$element</span>.<span class="pl-en">attr</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>aria-pressed<span class="pl-pds">&#39;</span></span>,<span class="pl-k">!</span><span class="pl-c1">this</span>.<span class="pl-smi">$element</span>.<span class="pl-en">hasClass</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>active<span class="pl-pds">&#39;</span></span>))</td>
      </tr>
      <tr>
        <td id="L69" class="blob-num js-line-number" data-line-number="69"></td>
        <td id="LC69" class="blob-code blob-code-inner js-file-line"><span class="pl-c1">this</span>.<span class="pl-smi">$element</span>.<span class="pl-en">toggleClass</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>active<span class="pl-pds">&#39;</span></span>)}}</td>
      </tr>
      <tr>
        <td id="L70" class="blob-num js-line-number" data-line-number="70"></td>
        <td id="LC70" class="blob-code blob-code-inner js-file-line"><span class="pl-k">function</span> <span class="pl-en">Plugin</span>(<span class="pl-smi">option</span>){<span class="pl-k">return</span> <span class="pl-c1">this</span>.<span class="pl-en">each</span>(<span class="pl-k">function</span>(){<span class="pl-k">var</span> $this<span class="pl-k">=</span><span class="pl-en">$</span>(<span class="pl-c1">this</span>)</td>
      </tr>
      <tr>
        <td id="L71" class="blob-num js-line-number" data-line-number="71"></td>
        <td id="LC71" class="blob-code blob-code-inner js-file-line"><span class="pl-k">var</span> data<span class="pl-k">=</span><span class="pl-smi">$this</span>.<span class="pl-c1">data</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>bs.button<span class="pl-pds">&#39;</span></span>)</td>
      </tr>
      <tr>
        <td id="L72" class="blob-num js-line-number" data-line-number="72"></td>
        <td id="LC72" class="blob-code blob-code-inner js-file-line"><span class="pl-k">var</span> options<span class="pl-k">=</span><span class="pl-k">typeof</span> option<span class="pl-k">==</span><span class="pl-s"><span class="pl-pds">&#39;</span>object<span class="pl-pds">&#39;</span></span><span class="pl-k">&amp;&amp;</span>option</td>
      </tr>
      <tr>
        <td id="L73" class="blob-num js-line-number" data-line-number="73"></td>
        <td id="LC73" class="blob-code blob-code-inner js-file-line"><span class="pl-k">if</span>(<span class="pl-k">!</span>data)<span class="pl-smi">$this</span>.<span class="pl-c1">data</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>bs.button<span class="pl-pds">&#39;</span></span>,(data<span class="pl-k">=</span><span class="pl-k">new</span> <span class="pl-en">Button</span>(<span class="pl-c1">this</span>,options)))</td>
      </tr>
      <tr>
        <td id="L74" class="blob-num js-line-number" data-line-number="74"></td>
        <td id="LC74" class="blob-code blob-code-inner js-file-line"><span class="pl-k">if</span>(option<span class="pl-k">==</span><span class="pl-s"><span class="pl-pds">&#39;</span>toggle<span class="pl-pds">&#39;</span></span>)<span class="pl-smi">data</span>.<span class="pl-c1">toggle</span>()</td>
      </tr>
      <tr>
        <td id="L75" class="blob-num js-line-number" data-line-number="75"></td>
        <td id="LC75" class="blob-code blob-code-inner js-file-line"><span class="pl-k">else</span> <span class="pl-k">if</span>(option)<span class="pl-smi">data</span>.<span class="pl-en">setState</span>(option)})}</td>
      </tr>
      <tr>
        <td id="L76" class="blob-num js-line-number" data-line-number="76"></td>
        <td id="LC76" class="blob-code blob-code-inner js-file-line"><span class="pl-k">var</span> old<span class="pl-k">=</span><span class="pl-smi">$</span>.<span class="pl-smi">fn</span>.<span class="pl-smi">button</span></td>
      </tr>
      <tr>
        <td id="L77" class="blob-num js-line-number" data-line-number="77"></td>
        <td id="LC77" class="blob-code blob-code-inner js-file-line"><span class="pl-smi">$</span>.<span class="pl-smi">fn</span>.<span class="pl-smi">button</span><span class="pl-k">=</span><span class="pl-c1">Plugin</span></td>
      </tr>
      <tr>
        <td id="L78" class="blob-num js-line-number" data-line-number="78"></td>
        <td id="LC78" class="blob-code blob-code-inner js-file-line"><span class="pl-smi">$</span>.<span class="pl-smi">fn</span>.<span class="pl-smi">button</span>.<span class="pl-smi">Constructor</span><span class="pl-k">=</span>Button</td>
      </tr>
      <tr>
        <td id="L79" class="blob-num js-line-number" data-line-number="79"></td>
        <td id="LC79" class="blob-code blob-code-inner js-file-line"><span class="pl-smi">$</span>.<span class="pl-smi">fn</span>.<span class="pl-smi">button</span>.<span class="pl-en">noConflict</span><span class="pl-k">=</span><span class="pl-k">function</span>(){<span class="pl-smi">$</span>.<span class="pl-smi">fn</span>.<span class="pl-smi">button</span><span class="pl-k">=</span>old</td>
      </tr>
      <tr>
        <td id="L80" class="blob-num js-line-number" data-line-number="80"></td>
        <td id="LC80" class="blob-code blob-code-inner js-file-line"><span class="pl-k">return</span> <span class="pl-c1">this</span>}</td>
      </tr>
      <tr>
        <td id="L81" class="blob-num js-line-number" data-line-number="81"></td>
        <td id="LC81" class="blob-code blob-code-inner js-file-line"><span class="pl-en">$</span>(<span class="pl-c1">document</span>).<span class="pl-en">on</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>click.bs.button.data-api<span class="pl-pds">&#39;</span></span>,<span class="pl-s"><span class="pl-pds">&#39;</span>[data-toggle^=&quot;button&quot;]<span class="pl-pds">&#39;</span></span>,<span class="pl-k">function</span>(<span class="pl-smi">e</span>){<span class="pl-k">var</span> $btn<span class="pl-k">=</span><span class="pl-en">$</span>(<span class="pl-smi">e</span>.<span class="pl-c1">target</span>).<span class="pl-c1">closest</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>.btn<span class="pl-pds">&#39;</span></span>)</td>
      </tr>
      <tr>
        <td id="L82" class="blob-num js-line-number" data-line-number="82"></td>
        <td id="LC82" class="blob-code blob-code-inner js-file-line"><span class="pl-c1">Plugin</span>.<span class="pl-c1">call</span>($btn,<span class="pl-s"><span class="pl-pds">&#39;</span>toggle<span class="pl-pds">&#39;</span></span>)</td>
      </tr>
      <tr>
        <td id="L83" class="blob-num js-line-number" data-line-number="83"></td>
        <td id="LC83" class="blob-code blob-code-inner js-file-line"><span class="pl-k">if</span>(<span class="pl-k">!</span>(<span class="pl-en">$</span>(<span class="pl-smi">e</span>.<span class="pl-c1">target</span>).<span class="pl-en">is</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>input[type=&quot;radio&quot;], input[type=&quot;checkbox&quot;]<span class="pl-pds">&#39;</span></span>))){<span class="pl-smi">e</span>.<span class="pl-c1">preventDefault</span>()</td>
      </tr>
      <tr>
        <td id="L84" class="blob-num js-line-number" data-line-number="84"></td>
        <td id="LC84" class="blob-code blob-code-inner js-file-line"><span class="pl-k">if</span>(<span class="pl-smi">$btn</span>.<span class="pl-en">is</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>input,button<span class="pl-pds">&#39;</span></span>))<span class="pl-smi">$btn</span>.<span class="pl-en">trigger</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>focus<span class="pl-pds">&#39;</span></span>)</td>
      </tr>
      <tr>
        <td id="L85" class="blob-num js-line-number" data-line-number="85"></td>
        <td id="LC85" class="blob-code blob-code-inner js-file-line"><span class="pl-k">else</span> <span class="pl-smi">$btn</span>.<span class="pl-c1">find</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>input:visible,button:visible<span class="pl-pds">&#39;</span></span>).<span class="pl-en">first</span>().<span class="pl-en">trigger</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>focus<span class="pl-pds">&#39;</span></span>)}}).<span class="pl-en">on</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>focus.bs.button.data-api blur.bs.button.data-api<span class="pl-pds">&#39;</span></span>,<span class="pl-s"><span class="pl-pds">&#39;</span>[data-toggle^=&quot;button&quot;]<span class="pl-pds">&#39;</span></span>,<span class="pl-k">function</span>(<span class="pl-smi">e</span>){<span class="pl-en">$</span>(<span class="pl-smi">e</span>.<span class="pl-c1">target</span>).<span class="pl-c1">closest</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>.btn<span class="pl-pds">&#39;</span></span>).<span class="pl-en">toggleClass</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>focus<span class="pl-pds">&#39;</span></span>,<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-k">^</span>focus(in)<span class="pl-k">?</span><span class="pl-k">$</span><span class="pl-pds">/</span></span>.<span class="pl-c1">test</span>(<span class="pl-smi">e</span>.<span class="pl-c1">type</span>))})}(jQuery);<span class="pl-k">+</span><span class="pl-k">function</span>(<span class="pl-smi">$</span>){<span class="pl-s"><span class="pl-pds">&#39;</span>use strict<span class="pl-pds">&#39;</span></span>;<span class="pl-k">var</span> <span class="pl-en">Carousel</span><span class="pl-k">=</span><span class="pl-k">function</span>(<span class="pl-smi">element</span>,<span class="pl-smi">options</span>){<span class="pl-c1">this</span>.<span class="pl-smi">$element</span><span class="pl-k">=</span><span class="pl-en">$</span>(element)</td>
      </tr>
      <tr>
        <td id="L86" class="blob-num js-line-number" data-line-number="86"></td>
        <td id="LC86" class="blob-code blob-code-inner js-file-line"><span class="pl-c1">this</span>.<span class="pl-smi">$indicators</span><span class="pl-k">=</span><span class="pl-c1">this</span>.<span class="pl-smi">$element</span>.<span class="pl-c1">find</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>.carousel-indicators<span class="pl-pds">&#39;</span></span>)</td>
      </tr>
      <tr>
        <td id="L87" class="blob-num js-line-number" data-line-number="87"></td>
        <td id="LC87" class="blob-code blob-code-inner js-file-line"><span class="pl-c1">this</span>.<span class="pl-c1">options</span><span class="pl-k">=</span>options</td>
      </tr>
      <tr>
        <td id="L88" class="blob-num js-line-number" data-line-number="88"></td>
        <td id="LC88" class="blob-code blob-code-inner js-file-line"><span class="pl-c1">this</span>.<span class="pl-smi">paused</span><span class="pl-k">=</span><span class="pl-c1">null</span></td>
      </tr>
      <tr>
        <td id="L89" class="blob-num js-line-number" data-line-number="89"></td>
        <td id="LC89" class="blob-code blob-code-inner js-file-line"><span class="pl-c1">this</span>.<span class="pl-smi">sliding</span><span class="pl-k">=</span><span class="pl-c1">null</span></td>
      </tr>
      <tr>
        <td id="L90" class="blob-num js-line-number" data-line-number="90"></td>
        <td id="LC90" class="blob-code blob-code-inner js-file-line"><span class="pl-c1">this</span>.<span class="pl-smi">interval</span><span class="pl-k">=</span><span class="pl-c1">null</span></td>
      </tr>
      <tr>
        <td id="L91" class="blob-num js-line-number" data-line-number="91"></td>
        <td id="LC91" class="blob-code blob-code-inner js-file-line"><span class="pl-c1">this</span>.<span class="pl-smi">$active</span><span class="pl-k">=</span><span class="pl-c1">null</span></td>
      </tr>
      <tr>
        <td id="L92" class="blob-num js-line-number" data-line-number="92"></td>
        <td id="LC92" class="blob-code blob-code-inner js-file-line"><span class="pl-c1">this</span>.<span class="pl-smi">$items</span><span class="pl-k">=</span><span class="pl-c1">null</span></td>
      </tr>
      <tr>
        <td id="L93" class="blob-num js-line-number" data-line-number="93"></td>
        <td id="LC93" class="blob-code blob-code-inner js-file-line"><span class="pl-c1">this</span>.<span class="pl-c1">options</span>.<span class="pl-smi">keyboard</span><span class="pl-k">&amp;&amp;</span><span class="pl-c1">this</span>.<span class="pl-smi">$element</span>.<span class="pl-en">on</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>keydown.bs.carousel<span class="pl-pds">&#39;</span></span>,<span class="pl-smi">$</span>.<span class="pl-en">proxy</span>(<span class="pl-c1">this</span>.<span class="pl-smi">keydown</span>,<span class="pl-c1">this</span>))</td>
      </tr>
      <tr>
        <td id="L94" class="blob-num js-line-number" data-line-number="94"></td>
        <td id="LC94" class="blob-code blob-code-inner js-file-line"><span class="pl-c1">this</span>.<span class="pl-c1">options</span>.<span class="pl-smi">pause</span><span class="pl-k">==</span><span class="pl-s"><span class="pl-pds">&#39;</span>hover<span class="pl-pds">&#39;</span></span><span class="pl-k">&amp;&amp;!</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>ontouchstart<span class="pl-pds">&#39;</span></span><span class="pl-k">in</span> <span class="pl-c1">document</span>.<span class="pl-c1">documentElement</span>)<span class="pl-k">&amp;&amp;</span><span class="pl-c1">this</span>.<span class="pl-smi">$element</span>.<span class="pl-en">on</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>mouseenter.bs.carousel<span class="pl-pds">&#39;</span></span>,<span class="pl-smi">$</span>.<span class="pl-en">proxy</span>(<span class="pl-c1">this</span>.<span class="pl-smi">pause</span>,<span class="pl-c1">this</span>)).<span class="pl-en">on</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>mouseleave.bs.carousel<span class="pl-pds">&#39;</span></span>,<span class="pl-smi">$</span>.<span class="pl-en">proxy</span>(<span class="pl-c1">this</span>.<span class="pl-smi">cycle</span>,<span class="pl-c1">this</span>))}</td>
      </tr>
      <tr>
        <td id="L95" class="blob-num js-line-number" data-line-number="95"></td>
        <td id="LC95" class="blob-code blob-code-inner js-file-line"><span class="pl-smi">Carousel</span>.<span class="pl-c1">VERSION</span><span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">&#39;</span>3.3.7<span class="pl-pds">&#39;</span></span></td>
      </tr>
      <tr>
        <td id="L96" class="blob-num js-line-number" data-line-number="96"></td>
        <td id="LC96" class="blob-code blob-code-inner js-file-line"><span class="pl-smi">Carousel</span>.<span class="pl-c1">TRANSITION_DURATION</span><span class="pl-k">=</span><span class="pl-c1">600</span></td>
      </tr>
      <tr>
        <td id="L97" class="blob-num js-line-number" data-line-number="97"></td>
        <td id="LC97" class="blob-code blob-code-inner js-file-line"><span class="pl-smi">Carousel</span>.<span class="pl-c1">DEFAULTS</span><span class="pl-k">=</span>{interval<span class="pl-k">:</span><span class="pl-c1">5000</span>,pause<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>hover<span class="pl-pds">&#39;</span></span>,wrap<span class="pl-k">:</span><span class="pl-c1">true</span>,keyboard<span class="pl-k">:</span><span class="pl-c1">true</span>}</td>
      </tr>
      <tr>
        <td id="L98" class="blob-num js-line-number" data-line-number="98"></td>
        <td id="LC98" class="blob-code blob-code-inner js-file-line"><span class="pl-smi">Carousel</span>.<span class="pl-c1">prototype</span>.<span class="pl-en">keydown</span><span class="pl-k">=</span><span class="pl-k">function</span>(<span class="pl-smi">e</span>){<span class="pl-k">if</span>(<span class="pl-sr"><span class="pl-pds">/</span>input<span class="pl-k">|</span>textarea<span class="pl-pds">/</span>i</span>.<span class="pl-c1">test</span>(<span class="pl-smi">e</span>.<span class="pl-c1">target</span>.<span class="pl-c1">tagName</span>))<span class="pl-k">return</span></td>
      </tr>
      <tr>
        <td id="L99" class="blob-num js-line-number" data-line-number="99"></td>
        <td id="LC99" class="blob-code blob-code-inner js-file-line"><span class="pl-k">switch</span>(<span class="pl-smi">e</span>.<span class="pl-smi">which</span>){<span class="pl-k">case</span> <span class="pl-c1">37</span>:<span class="pl-c1">this</span>.<span class="pl-en">prev</span>();<span class="pl-k">break</span></td>
      </tr>
      <tr>
        <td id="L100" class="blob-num js-line-number" data-line-number="100"></td>
        <td id="LC100" class="blob-code blob-code-inner js-file-line"><span class="pl-k">case</span> <span class="pl-c1">39</span>:<span class="pl-c1">this</span>.<span class="pl-c1">next</span>();<span class="pl-k">break</span></td>
      </tr>
      <tr>
        <td id="L101" class="blob-num js-line-number" data-line-number="101"></td>
        <td id="LC101" class="blob-code blob-code-inner js-file-line"><span class="pl-k">default</span>:<span class="pl-k">return</span>}</td>
      </tr>
      <tr>
        <td id="L102" class="blob-num js-line-number" data-line-number="102"></td>
        <td id="LC102" class="blob-code blob-code-inner js-file-line"><span class="pl-smi">e</span>.<span class="pl-c1">preventDefault</span>()}</td>
      </tr>
      <tr>
        <td id="L103" class="blob-num js-line-number" data-line-number="103"></td>
        <td id="LC103" class="blob-code blob-code-inner js-file-line"><span class="pl-smi">Carousel</span>.<span class="pl-c1">prototype</span>.<span class="pl-en">cycle</span><span class="pl-k">=</span><span class="pl-k">function</span>(<span class="pl-smi">e</span>){e<span class="pl-k">||</span>(<span class="pl-c1">this</span>.<span class="pl-smi">paused</span><span class="pl-k">=</span><span class="pl-c1">false</span>)</td>
      </tr>
      <tr>
        <td id="L104" class="blob-num js-line-number" data-line-number="104"></td>
        <td id="LC104" class="blob-code blob-code-inner js-file-line"><span class="pl-c1">this</span>.<span class="pl-smi">interval</span><span class="pl-k">&amp;&amp;</span><span class="pl-c1">clearInterval</span>(<span class="pl-c1">this</span>.<span class="pl-smi">interval</span>)</td>
      </tr>
      <tr>
        <td id="L105" class="blob-num js-line-number" data-line-number="105"></td>
        <td id="LC105" class="blob-code blob-code-inner js-file-line"><span class="pl-c1">this</span>.<span class="pl-c1">options</span>.<span class="pl-smi">interval</span><span class="pl-k">&amp;&amp;!</span><span class="pl-c1">this</span>.<span class="pl-smi">paused</span><span class="pl-k">&amp;&amp;</span>(<span class="pl-c1">this</span>.<span class="pl-smi">interval</span><span class="pl-k">=</span><span class="pl-c1">setInterval</span>(<span class="pl-smi">$</span>.<span class="pl-en">proxy</span>(<span class="pl-c1">this</span>.<span class="pl-c1">next</span>,<span class="pl-c1">this</span>),<span class="pl-c1">this</span>.<span class="pl-c1">options</span>.<span class="pl-smi">interval</span>))</td>
      </tr>
      <tr>
        <td id="L106" class="blob-num js-line-number" data-line-number="106"></td>
        <td id="LC106" class="blob-code blob-code-inner js-file-line"><span class="pl-k">return</span> <span class="pl-c1">this</span>}</td>
      </tr>
      <tr>
        <td id="L107" class="blob-num js-line-number" data-line-number="107"></td>
        <td id="LC107" class="blob-code blob-code-inner js-file-line"><span class="pl-smi">Carousel</span>.<span class="pl-c1">prototype</span>.<span class="pl-en">getItemIndex</span><span class="pl-k">=</span><span class="pl-k">function</span>(<span class="pl-smi">item</span>){<span class="pl-c1">this</span>.<span class="pl-smi">$items</span><span class="pl-k">=</span><span class="pl-smi">item</span>.<span class="pl-c1">parent</span>().<span class="pl-en">children</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>.item<span class="pl-pds">&#39;</span></span>)</td>
      </tr>
      <tr>
        <td id="L108" class="blob-num js-line-number" data-line-number="108"></td>
        <td id="LC108" class="blob-code blob-code-inner js-file-line"><span class="pl-k">return</span> <span class="pl-c1">this</span>.<span class="pl-smi">$items</span>.<span class="pl-c1">index</span>(item<span class="pl-k">||</span><span class="pl-c1">this</span>.<span class="pl-smi">$active</span>)}</td>
      </tr>
      <tr>
        <td id="L109" class="blob-num js-line-number" data-line-number="109"></td>
        <td id="LC109" class="blob-code blob-code-inner js-file-line"><span class="pl-smi">Carousel</span>.<span class="pl-c1">prototype</span>.<span class="pl-en">getItemForDirection</span><span class="pl-k">=</span><span class="pl-k">function</span>(<span class="pl-smi">direction</span>,<span class="pl-smi">active</span>){<span class="pl-k">var</span> activeIndex<span class="pl-k">=</span><span class="pl-c1">this</span>.<span class="pl-en">getItemIndex</span>(active)</td>
      </tr>
      <tr>
        <td id="L110" class="blob-num js-line-number" data-line-number="110"></td>
        <td id="LC110" class="blob-code blob-code-inner js-file-line"><span class="pl-k">var</span> willWrap<span class="pl-k">=</span>(direction<span class="pl-k">==</span><span class="pl-s"><span class="pl-pds">&#39;</span>prev<span class="pl-pds">&#39;</span></span><span class="pl-k">&amp;&amp;</span>activeIndex<span class="pl-k">===</span><span class="pl-c1">0</span>)<span class="pl-k">||</span>(direction<span class="pl-k">==</span><span class="pl-s"><span class="pl-pds">&#39;</span>next<span class="pl-pds">&#39;</span></span><span class="pl-k">&amp;&amp;</span>activeIndex<span class="pl-k">==</span>(<span class="pl-c1">this</span>.<span class="pl-smi">$items</span>.<span class="pl-c1">length</span><span class="pl-k">-</span><span class="pl-c1">1</span>))</td>
      </tr>
      <tr>
        <td id="L111" class="blob-num js-line-number" data-line-number="111"></td>
        <td id="LC111" class="blob-code blob-code-inner js-file-line"><span class="pl-k">if</span>(willWrap<span class="pl-k">&amp;&amp;!</span><span class="pl-c1">this</span>.<span class="pl-c1">options</span>.<span class="pl-smi">wrap</span>)<span class="pl-k">return</span> active</td>
      </tr>
      <tr>
        <td id="L112" class="blob-num js-line-number" data-line-number="112"></td>
        <td id="LC112" class="blob-code blob-code-inner js-file-line"><span class="pl-k">var</span> delta<span class="pl-k">=</span>direction<span class="pl-k">==</span><span class="pl-s"><span class="pl-pds">&#39;</span>prev<span class="pl-pds">&#39;</span></span><span class="pl-k">?</span><span class="pl-k">-</span><span class="pl-c1">1</span><span class="pl-k">:</span><span class="pl-c1">1</span></td>
      </tr>
      <tr>
        <td id="L113" class="blob-num js-line-number" data-line-number="113"></td>
        <td id="LC113" class="blob-code blob-code-inner js-file-line"><span class="pl-k">var</span> itemIndex<span class="pl-k">=</span>(activeIndex<span class="pl-k">+</span>delta)<span class="pl-k">%</span><span class="pl-c1">this</span>.<span class="pl-smi">$items</span>.<span class="pl-c1">length</span></td>
      </tr>
      <tr>
        <td id="L114" class="blob-num js-line-number" data-line-number="114"></td>
        <td id="LC114" class="blob-code blob-code-inner js-file-line"><span class="pl-k">return</span> <span class="pl-c1">this</span>.<span class="pl-smi">$items</span>.<span class="pl-en">eq</span>(itemIndex)}</td>
      </tr>
      <tr>
        <td id="L115" class="blob-num js-line-number" data-line-number="115"></td>
        <td id="LC115" class="blob-code blob-code-inner js-file-line"><span class="pl-smi">Carousel</span>.<span class="pl-c1">prototype</span>.<span class="pl-en">to</span><span class="pl-k">=</span><span class="pl-k">function</span>(<span class="pl-smi">pos</span>){<span class="pl-k">var</span> that<span class="pl-k">=</span><span class="pl-c1">this</span></td>
      </tr>
      <tr>
        <td id="L116" class="blob-num js-line-number" data-line-number="116"></td>
        <td id="LC116" class="blob-code blob-code-inner js-file-line"><span class="pl-k">var</span> activeIndex<span class="pl-k">=</span><span class="pl-c1">this</span>.<span class="pl-en">getItemIndex</span>(<span class="pl-c1">this</span>.<span class="pl-smi">$active</span><span class="pl-k">=</span><span class="pl-c1">this</span>.<span class="pl-smi">$element</span>.<span class="pl-c1">find</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>.item.active<span class="pl-pds">&#39;</span></span>))</td>
      </tr>
      <tr>
        <td id="L117" class="blob-num js-line-number" data-line-number="117"></td>
        <td id="LC117" class="blob-code blob-code-inner js-file-line"><span class="pl-k">if</span>(pos<span class="pl-k">&gt;</span>(<span class="pl-c1">this</span>.<span class="pl-smi">$items</span>.<span class="pl-c1">length</span><span class="pl-k">-</span><span class="pl-c1">1</span>)<span class="pl-k">||</span>pos<span class="pl-k">&lt;</span><span class="pl-c1">0</span>)<span class="pl-k">return</span></td>
      </tr>
      <tr>
        <td id="L118" class="blob-num js-line-number" data-line-number="118"></td>
        <td id="LC118" class="blob-code blob-code-inner js-file-line"><span class="pl-k">if</span>(<span class="pl-c1">this</span>.<span class="pl-smi">sliding</span>)<span class="pl-k">return</span> <span class="pl-c1">this</span>.<span class="pl-smi">$element</span>.<span class="pl-en">one</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>slid.bs.carousel<span class="pl-pds">&#39;</span></span>,<span class="pl-k">function</span>(){<span class="pl-smi">that</span>.<span class="pl-en">to</span>(pos)})</td>
      </tr>
      <tr>
        <td id="L119" class="blob-num js-line-number" data-line-number="119"></td>
        <td id="LC119" class="blob-code blob-code-inner js-file-line"><span class="pl-k">if</span>(activeIndex<span class="pl-k">==</span>pos)<span class="pl-k">return</span> <span class="pl-c1">this</span>.<span class="pl-c1">pause</span>().<span class="pl-en">cycle</span>()</td>
      </tr>
      <tr>
        <td id="L120" class="blob-num js-line-number" data-line-number="120"></td>
        <td id="LC120" class="blob-code blob-code-inner js-file-line"><span class="pl-k">return</span> <span class="pl-c1">this</span>.<span class="pl-en">slide</span>(pos<span class="pl-k">&gt;</span>activeIndex<span class="pl-k">?</span><span class="pl-s"><span class="pl-pds">&#39;</span>next<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>prev<span class="pl-pds">&#39;</span></span>,<span class="pl-c1">this</span>.<span class="pl-smi">$items</span>.<span class="pl-en">eq</span>(pos))}</td>
      </tr>
      <tr>
        <td id="L121" class="blob-num js-line-number" data-line-number="121"></td>
        <td id="LC121" class="blob-code blob-code-inner js-file-line"><span class="pl-smi">Carousel</span>.<span class="pl-c1">prototype</span>.<span class="pl-en">pause</span><span class="pl-k">=</span><span class="pl-k">function</span>(<span class="pl-smi">e</span>){e<span class="pl-k">||</span>(<span class="pl-c1">this</span>.<span class="pl-smi">paused</span><span class="pl-k">=</span><span class="pl-c1">true</span>)</td>
      </tr>
      <tr>
        <td id="L122" class="blob-num js-line-number" data-line-number="122"></td>
        <td id="LC122" class="blob-code blob-code-inner js-file-line"><span class="pl-k">if</span>(<span class="pl-c1">this</span>.<span class="pl-smi">$element</span>.<span class="pl-c1">find</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>.next, .prev<span class="pl-pds">&#39;</span></span>).<span class="pl-c1">length</span><span class="pl-k">&amp;&amp;</span><span class="pl-smi">$</span>.<span class="pl-smi">support</span>.<span class="pl-smi">transition</span>){<span class="pl-c1">this</span>.<span class="pl-smi">$element</span>.<span class="pl-en">trigger</span>(<span class="pl-smi">$</span>.<span class="pl-smi">support</span>.<span class="pl-smi">transition</span>.<span class="pl-smi">end</span>)</td>
      </tr>
      <tr>
        <td id="L123" class="blob-num js-line-number" data-line-number="123"></td>
        <td id="LC123" class="blob-code blob-code-inner js-file-line"><span class="pl-c1">this</span>.<span class="pl-en">cycle</span>(<span class="pl-c1">true</span>)}</td>
      </tr>
      <tr>
        <td id="L124" class="blob-num js-line-number" data-line-number="124"></td>
        <td id="LC124" class="blob-code blob-code-inner js-file-line"><span class="pl-c1">this</span>.<span class="pl-smi">interval</span><span class="pl-k">=</span><span class="pl-c1">clearInterval</span>(<span class="pl-c1">this</span>.<span class="pl-smi">interval</span>)</td>
      </tr>
      <tr>
        <td id="L125" class="blob-num js-line-number" data-line-number="125"></td>
        <td id="LC125" class="blob-code blob-code-inner js-file-line"><span class="pl-k">return</span> <span class="pl-c1">this</span>}</td>
      </tr>
      <tr>
        <td id="L126" class="blob-num js-line-number" data-line-number="126"></td>
        <td id="LC126" class="blob-code blob-code-inner js-file-line"><span class="pl-smi">Carousel</span>.<span class="pl-c1">prototype</span>.<span class="pl-en">next</span><span class="pl-k">=</span><span class="pl-k">function</span>(){<span class="pl-k">if</span>(<span class="pl-c1">this</span>.<span class="pl-smi">sliding</span>)<span class="pl-k">return</span></td>
      </tr>
      <tr>
        <td id="L127" class="blob-num js-line-number" data-line-number="127"></td>
        <td id="LC127" class="blob-code blob-code-inner js-file-line"><span class="pl-k">return</span> <span class="pl-c1">this</span>.<span class="pl-en">slide</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>next<span class="pl-pds">&#39;</span></span>)}</td>
      </tr>
      <tr>
        <td id="L128" class="blob-num js-line-number" data-line-number="128"></td>
        <td id="LC128" class="blob-code blob-code-inner js-file-line"><span class="pl-smi">Carousel</span>.<span class="pl-c1">prototype</span>.<span class="pl-en">prev</span><span class="pl-k">=</span><span class="pl-k">function</span>(){<span class="pl-k">if</span>(<span class="pl-c1">this</span>.<span class="pl-smi">sliding</span>)<span class="pl-k">return</span></td>
      </tr>
      <tr>
        <td id="L129" class="blob-num js-line-number" data-line-number="129"></td>
        <td id="LC129" class="blob-code blob-code-inner js-file-line"><span class="pl-k">return</span> <span class="pl-c1">this</span>.<span class="pl-en">slide</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>prev<span class="pl-pds">&#39;</span></span>)}</td>
      </tr>
      <tr>
        <td id="L130" class="blob-num js-line-number" data-line-number="130"></td>
        <td id="LC130" class="blob-code blob-code-inner js-file-line"><span class="pl-smi">Carousel</span>.<span class="pl-c1">prototype</span>.<span class="pl-en">slide</span><span class="pl-k">=</span><span class="pl-k">function</span>(<span class="pl-smi">type</span>,<span class="pl-smi">next</span>){<span class="pl-k">var</span> $active<span class="pl-k">=</span><span class="pl-c1">this</span>.<span class="pl-smi">$element</span>.<span class="pl-c1">find</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>.item.active<span class="pl-pds">&#39;</span></span>)</td>
      </tr>
      <tr>
        <td id="L131" class="blob-num js-line-number" data-line-number="131"></td>
        <td id="LC131" class="blob-code blob-code-inner js-file-line"><span class="pl-k">var</span> $next<span class="pl-k">=</span>next<span class="pl-k">||</span><span class="pl-c1">this</span>.<span class="pl-en">getItemForDirection</span>(type,$active)</td>
      </tr>
      <tr>
        <td id="L132" class="blob-num js-line-number" data-line-number="132"></td>
        <td id="LC132" class="blob-code blob-code-inner js-file-line"><span class="pl-k">var</span> isCycling<span class="pl-k">=</span><span class="pl-c1">this</span>.<span class="pl-smi">interval</span></td>
      </tr>
      <tr>
        <td id="L133" class="blob-num js-line-number" data-line-number="133"></td>
        <td id="LC133" class="blob-code blob-code-inner js-file-line"><span class="pl-k">var</span> direction<span class="pl-k">=</span>type<span class="pl-k">==</span><span class="pl-s"><span class="pl-pds">&#39;</span>next<span class="pl-pds">&#39;</span></span><span class="pl-k">?</span><span class="pl-s"><span class="pl-pds">&#39;</span>left<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>right<span class="pl-pds">&#39;</span></span></td>
      </tr>
      <tr>
        <td id="L134" class="blob-num js-line-number" data-line-number="134"></td>
        <td id="LC134" class="blob-code blob-code-inner js-file-line"><span class="pl-k">var</span> that<span class="pl-k">=</span><span class="pl-c1">this</span></td>
      </tr>
      <tr>
        <td id="L135" class="blob-num js-line-number" data-line-number="135"></td>
        <td id="LC135" class="blob-code blob-code-inner js-file-line"><span class="pl-k">if</span>(<span class="pl-smi">$next</span>.<span class="pl-en">hasClass</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>active<span class="pl-pds">&#39;</span></span>))<span class="pl-k">return</span>(<span class="pl-c1">this</span>.<span class="pl-smi">sliding</span><span class="pl-k">=</span><span class="pl-c1">false</span>)</td>
      </tr>
      <tr>
        <td id="L136" class="blob-num js-line-number" data-line-number="136"></td>
        <td id="LC136" class="blob-code blob-code-inner js-file-line"><span class="pl-k">var</span> relatedTarget<span class="pl-k">=</span>$next[<span class="pl-c1">0</span>]</td>
      </tr>
      <tr>
        <td id="L137" class="blob-num js-line-number" data-line-number="137"></td>
        <td id="LC137" class="blob-code blob-code-inner js-file-line"><span class="pl-k">var</span> slideEvent<span class="pl-k">=</span><span class="pl-smi">$</span>.<span class="pl-en">Event</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>slide.bs.carousel<span class="pl-pds">&#39;</span></span>,{relatedTarget<span class="pl-k">:</span>relatedTarget,direction<span class="pl-k">:</span>direction})</td>
      </tr>
      <tr>
        <td id="L138" class="blob-num js-line-number" data-line-number="138"></td>
        <td id="LC138" class="blob-code blob-code-inner js-file-line"><span class="pl-c1">this</span>.<span class="pl-smi">$element</span>.<span class="pl-en">trigger</span>(slideEvent)</td>
      </tr>
      <tr>
        <td id="L139" class="blob-num js-line-number" data-line-number="139"></td>
        <td id="LC139" class="blob-code blob-code-inner js-file-line"><span class="pl-k">if</span>(<span class="pl-smi">slideEvent</span>.<span class="pl-en">isDefaultPrevented</span>())<span class="pl-k">return</span></td>
      </tr>
      <tr>
        <td id="L140" class="blob-num js-line-number" data-line-number="140"></td>
        <td id="LC140" class="blob-code blob-code-inner js-file-line"><span class="pl-c1">this</span>.<span class="pl-smi">sliding</span><span class="pl-k">=</span><span class="pl-c1">true</span></td>
      </tr>
      <tr>
        <td id="L141" class="blob-num js-line-number" data-line-number="141"></td>
        <td id="LC141" class="blob-code blob-code-inner js-file-line">isCycling<span class="pl-k">&amp;&amp;</span><span class="pl-c1">this</span>.<span class="pl-c1">pause</span>()</td>
      </tr>
      <tr>
        <td id="L142" class="blob-num js-line-number" data-line-number="142"></td>
        <td id="LC142" class="blob-code blob-code-inner js-file-line"><span class="pl-k">if</span>(<span class="pl-c1">this</span>.<span class="pl-smi">$indicators</span>.<span class="pl-c1">length</span>){<span class="pl-c1">this</span>.<span class="pl-smi">$indicators</span>.<span class="pl-c1">find</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>.active<span class="pl-pds">&#39;</span></span>).<span class="pl-en">removeClass</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>active<span class="pl-pds">&#39;</span></span>)</td>
      </tr>
      <tr>
        <td id="L143" class="blob-num js-line-number" data-line-number="143"></td>
        <td id="LC143" class="blob-code blob-code-inner js-file-line"><span class="pl-k">var</span> $nextIndicator<span class="pl-k">=</span><span class="pl-en">$</span>(<span class="pl-c1">this</span>.<span class="pl-smi">$indicators</span>.<span class="pl-en">children</span>()[<span class="pl-c1">this</span>.<span class="pl-en">getItemIndex</span>($next)])</td>
      </tr>
      <tr>
        <td id="L144" class="blob-num js-line-number" data-line-number="144"></td>
        <td id="LC144" class="blob-code blob-code-inner js-file-line">$nextIndicator<span class="pl-k">&amp;&amp;</span><span class="pl-smi">$nextIndicator</span>.<span class="pl-en">addClass</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>active<span class="pl-pds">&#39;</span></span>)}</td>
      </tr>
      <tr>
        <td id="L145" class="blob-num js-line-number" data-line-number="145"></td>
        <td id="LC145" class="blob-code blob-code-inner js-file-line"><span class="pl-k">var</span> slidEvent<span class="pl-k">=</span><span class="pl-smi">$</span>.<span class="pl-en">Event</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>slid.bs.carousel<span class="pl-pds">&#39;</span></span>,{relatedTarget<span class="pl-k">:</span>relatedTarget,direction<span class="pl-k">:</span>direction})</td>
      </tr>
      <tr>
        <td id="L146" class="blob-num js-line-number" data-line-number="146"></td>
        <td id="LC146" class="blob-code blob-code-inner js-file-line"><span class="pl-k">if</span>(<span class="pl-smi">$</span>.<span class="pl-smi">support</span>.<span class="pl-smi">transition</span><span class="pl-k">&amp;&amp;</span><span class="pl-c1">this</span>.<span class="pl-smi">$element</span>.<span class="pl-en">hasClass</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>slide<span class="pl-pds">&#39;</span></span>)){<span class="pl-smi">$next</span>.<span class="pl-en">addClass</span>(type)</td>
      </tr>
      <tr>
        <td id="L147" class="blob-num js-line-number" data-line-number="147"></td>
        <td id="LC147" class="blob-code blob-code-inner js-file-line">$next[<span class="pl-c1">0</span>].<span class="pl-smi">offsetWidth</span></td>
      </tr>
      <tr>
        <td id="L148" class="blob-num js-line-number" data-line-number="148"></td>
        <td id="LC148" class="blob-code blob-code-inner js-file-line"><span class="pl-smi">$active</span>.<span class="pl-en">addClass</span>(direction)</td>
      </tr>
      <tr>
        <td id="L149" class="blob-num js-line-number" data-line-number="149"></td>
        <td id="LC149" class="blob-code blob-code-inner js-file-line"><span class="pl-smi">$next</span>.<span class="pl-en">addClass</span>(direction)</td>
      </tr>
      <tr>
        <td id="L150" class="blob-num js-line-number" data-line-number="150"></td>
        <td id="LC150" class="blob-code blob-code-inner js-file-line"><span class="pl-smi">$active</span>.<span class="pl-en">one</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>bsTransitionEnd<span class="pl-pds">&#39;</span></span>,<span class="pl-k">function</span>(){<span class="pl-smi">$next</span>.<span class="pl-en">removeClass</span>([type,direction].<span class="pl-c1">join</span>(<span class="pl-s"><span class="pl-pds">&#39;</span> <span class="pl-pds">&#39;</span></span>)).<span class="pl-en">addClass</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>active<span class="pl-pds">&#39;</span></span>)</td>
      </tr>
      <tr>
        <td id="L151" class="blob-num js-line-number" data-line-number="151"></td>
        <td id="LC151" class="blob-code blob-code-inner js-file-line"><span class="pl-smi">$active</span>.<span class="pl-en">removeClass</span>([<span class="pl-s"><span class="pl-pds">&#39;</span>active<span class="pl-pds">&#39;</span></span>,direction].<span class="pl-c1">join</span>(<span class="pl-s"><span class="pl-pds">&#39;</span> <span class="pl-pds">&#39;</span></span>))</td>
      </tr>
      <tr>
        <td id="L152" class="blob-num js-line-number" data-line-number="152"></td>
        <td id="LC152" class="blob-code blob-code-inner js-file-line"><span class="pl-smi">that</span>.<span class="pl-smi">sliding</span><span class="pl-k">=</span><span class="pl-c1">false</span></td>
      </tr>
      <tr>
        <td id="L153" class="blob-num js-line-number" data-line-number="153"></td>
        <td id="LC153" class="blob-code blob-code-inner js-file-line"><span class="pl-c1">setTimeout</span>(<span class="pl-k">function</span>(){<span class="pl-smi">that</span>.<span class="pl-smi">$element</span>.<span class="pl-en">trigger</span>(slidEvent)},<span class="pl-c1">0</span>)}).<span class="pl-en">emulateTransitionEnd</span>(<span class="pl-smi">Carousel</span>.<span class="pl-c1">TRANSITION_DURATION</span>)}<span class="pl-k">else</span>{<span class="pl-smi">$active</span>.<span class="pl-en">removeClass</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>active<span class="pl-pds">&#39;</span></span>)</td>
      </tr>
      <tr>
        <td id="L154" class="blob-num js-line-number" data-line-number="154"></td>
        <td id="LC154" class="blob-code blob-code-inner js-file-line"><span class="pl-smi">$next</span>.<span class="pl-en">addClass</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>active<span class="pl-pds">&#39;</span></span>)</td>
      </tr>
      <tr>
        <td id="L155" class="blob-num js-line-number" data-line-number="155"></td>
        <td id="LC155" class="blob-code blob-code-inner js-file-line"><span class="pl-c1">this</span>.<span class="pl-smi">sliding</span><span class="pl-k">=</span><span class="pl-c1">false</span></td>
      </tr>
      <tr>
        <td id="L156" class="blob-num js-line-number" data-line-number="156"></td>
        <td id="LC156" class="blob-code blob-code-inner js-file-line"><span class="pl-c1">this</span>.<span class="pl-smi">$element</span>.<span class="pl-en">trigger</span>(slidEvent)}</td>
      </tr>
      <tr>
        <td id="L157" class="blob-num js-line-number" data-line-number="157"></td>
        <td id="LC157" class="blob-code blob-code-inner js-file-line">isCycling<span class="pl-k">&amp;&amp;</span><span class="pl-c1">this</span>.<span class="pl-en">cycle</span>()</td>
      </tr>
      <tr>
        <td id="L158" class="blob-num js-line-number" data-line-number="158"></td>
        <td id="LC158" class="blob-code blob-code-inner js-file-line"><span class="pl-k">return</span> <span class="pl-c1">this</span>}</td>
      </tr>
      <tr>
        <td id="L159" class="blob-num js-line-number" data-line-number="159"></td>
        <td id="LC159" class="blob-code blob-code-inner js-file-line"><span class="pl-k">function</span> <span class="pl-en">Plugin</span>(<span class="pl-smi">option</span>){<span class="pl-k">return</span> <span class="pl-c1">this</span>.<span class="pl-en">each</span>(<span class="pl-k">function</span>(){<span class="pl-k">var</span> $this<span class="pl-k">=</span><span class="pl-en">$</span>(<span class="pl-c1">this</span>)</td>
      </tr>
      <tr>
        <td id="L160" class="blob-num js-line-number" data-line-number="160"></td>
        <td id="LC160" class="blob-code blob-code-inner js-file-line"><span class="pl-k">var</span> data<span class="pl-k">=</span><span class="pl-smi">$this</span>.<span class="pl-c1">data</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>bs.carousel<span class="pl-pds">&#39;</span></span>)</td>
      </tr>
      <tr>
        <td id="L161" class="blob-num js-line-number" data-line-number="161"></td>
        <td id="LC161" class="blob-code blob-code-inner js-file-line"><span class="pl-k">var</span> options<span class="pl-k">=</span><span class="pl-smi">$</span>.<span class="pl-en">extend</span>({},<span class="pl-smi">Carousel</span>.<span class="pl-c1">DEFAULTS</span>,<span class="pl-smi">$this</span>.<span class="pl-c1">data</span>(),<span class="pl-k">typeof</span> option<span class="pl-k">==</span><span class="pl-s"><span class="pl-pds">&#39;</span>object<span class="pl-pds">&#39;</span></span><span class="pl-k">&amp;&amp;</span>option)</td>
      </tr>
      <tr>
        <td id="L162" class="blob-num js-line-number" data-line-number="162"></td>
        <td id="LC162" class="blob-code blob-code-inner js-file-line"><span class="pl-k">var</span> action<span class="pl-k">=</span><span class="pl-k">typeof</span> option<span class="pl-k">==</span><span class="pl-s"><span class="pl-pds">&#39;</span>string<span class="pl-pds">&#39;</span></span><span class="pl-k">?</span>option<span class="pl-k">:</span><span class="pl-smi">options</span>.<span class="pl-smi">slide</span></td>
      </tr>
      <tr>
        <td id="L163" class="blob-num js-line-number" data-line-number="163"></td>
        <td id="LC163" class="blob-code blob-code-inner js-file-line"><span class="pl-k">if</span>(<span class="pl-k">!</span>data)<span class="pl-smi">$this</span>.<span class="pl-c1">data</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>bs.carousel<span class="pl-pds">&#39;</span></span>,(data<span class="pl-k">=</span><span class="pl-k">new</span> <span class="pl-en">Carousel</span>(<span class="pl-c1">this</span>,options)))</td>
      </tr>
      <tr>
        <td id="L164" class="blob-num js-line-number" data-line-number="164"></td>
        <td id="LC164" class="blob-code blob-code-inner js-file-line"><span class="pl-k">if</span>(<span class="pl-k">typeof</span> option<span class="pl-k">==</span><span class="pl-s"><span class="pl-pds">&#39;</span>number<span class="pl-pds">&#39;</span></span>)<span class="pl-smi">data</span>.<span class="pl-en">to</span>(option)</td>
      </tr>
      <tr>
        <td id="L165" class="blob-num js-line-number" data-line-number="165"></td>
        <td id="LC165" class="blob-code blob-code-inner js-file-line"><span class="pl-k">else</span> <span class="pl-k">if</span>(action)data[action]()</td>
      </tr>
      <tr>
        <td id="L166" class="blob-num js-line-number" data-line-number="166"></td>
        <td id="LC166" class="blob-code blob-code-inner js-file-line"><span class="pl-k">else</span> <span class="pl-k">if</span>(<span class="pl-smi">options</span>.<span class="pl-smi">interval</span>)<span class="pl-smi">data</span>.<span class="pl-c1">pause</span>().<span class="pl-en">cycle</span>()})}</td>
      </tr>
      <tr>
        <td id="L167" class="blob-num js-line-number" data-line-number="167"></td>
        <td id="LC167" class="blob-code blob-code-inner js-file-line"><span class="pl-k">var</span> old<span class="pl-k">=</span><span class="pl-smi">$</span>.<span class="pl-smi">fn</span>.<span class="pl-smi">carousel</span></td>
      </tr>
      <tr>
        <td id="L168" class="blob-num js-line-number" data-line-number="168"></td>
        <td id="LC168" class="blob-code blob-code-inner js-file-line"><span class="pl-smi">$</span>.<span class="pl-smi">fn</span>.<span class="pl-smi">carousel</span><span class="pl-k">=</span><span class="pl-c1">Plugin</span></td>
      </tr>
      <tr>
        <td id="L169" class="blob-num js-line-number" data-line-number="169"></td>
        <td id="LC169" class="blob-code blob-code-inner js-file-line"><span class="pl-smi">$</span>.<span class="pl-smi">fn</span>.<span class="pl-smi">carousel</span>.<span class="pl-smi">Constructor</span><span class="pl-k">=</span>Carousel</td>
      </tr>
      <tr>
        <td id="L170" class="blob-num js-line-number" data-line-number="170"></td>
        <td id="LC170" class="blob-code blob-code-inner js-file-line"><span class="pl-smi">$</span>.<span class="pl-smi">fn</span>.<span class="pl-smi">carousel</span>.<span class="pl-en">noConflict</span><span class="pl-k">=</span><span class="pl-k">function</span>(){<span class="pl-smi">$</span>.<span class="pl-smi">fn</span>.<span class="pl-smi">carousel</span><span class="pl-k">=</span>old</td>
      </tr>
      <tr>
        <td id="L171" class="blob-num js-line-number" data-line-number="171"></td>
        <td id="LC171" class="blob-code blob-code-inner js-file-line"><span class="pl-k">return</span> <span class="pl-c1">this</span>}</td>
      </tr>
      <tr>
        <td id="L172" class="blob-num js-line-number" data-line-number="172"></td>
        <td id="LC172" class="blob-code blob-code-inner js-file-line"><span class="pl-k">var</span> <span class="pl-en">clickHandler</span><span class="pl-k">=</span><span class="pl-k">function</span>(<span class="pl-smi">e</span>){<span class="pl-k">var</span> href</td>
      </tr>
      <tr>
        <td id="L173" class="blob-num js-line-number" data-line-number="173"></td>
        <td id="LC173" class="blob-code blob-code-inner js-file-line"><span class="pl-k">var</span> $this<span class="pl-k">=</span><span class="pl-en">$</span>(<span class="pl-c1">this</span>)</td>
      </tr>
      <tr>
        <td id="L174" class="blob-num js-line-number" data-line-number="174"></td>
        <td id="LC174" class="blob-code blob-code-inner js-file-line"><span class="pl-k">var</span> $target<span class="pl-k">=</span><span class="pl-en">$</span>(<span class="pl-smi">$this</span>.<span class="pl-en">attr</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>data-target<span class="pl-pds">&#39;</span></span>)<span class="pl-k">||</span>(href<span class="pl-k">=</span><span class="pl-smi">$this</span>.<span class="pl-en">attr</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>href<span class="pl-pds">&#39;</span></span>))<span class="pl-k">&amp;&amp;</span><span class="pl-smi">href</span>.<span class="pl-c1">replace</span>(<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-c1">.</span><span class="pl-k">*</span>(?=#<span class="pl-c1">[<span class="pl-k">^</span><span class="pl-c1">\s</span>]</span><span class="pl-k">+</span><span class="pl-k">$</span>)<span class="pl-pds">/</span></span>,<span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span>))</td>
      </tr>
      <tr>
        <td id="L175" class="blob-num js-line-number" data-line-number="175"></td>
        <td id="LC175" class="blob-code blob-code-inner js-file-line"><span class="pl-k">if</span>(<span class="pl-k">!</span><span class="pl-smi">$target</span>.<span class="pl-en">hasClass</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>carousel<span class="pl-pds">&#39;</span></span>))<span class="pl-k">return</span></td>
      </tr>
      <tr>
        <td id="L176" class="blob-num js-line-number" data-line-number="176"></td>
        <td id="LC176" class="blob-code blob-code-inner js-file-line"><span class="pl-k">var</span> options<span class="pl-k">=</span><span class="pl-smi">$</span>.<span class="pl-en">extend</span>({},<span class="pl-smi">$target</span>.<span class="pl-c1">data</span>(),<span class="pl-smi">$this</span>.<span class="pl-c1">data</span>())</td>
      </tr>
      <tr>
        <td id="L177" class="blob-num js-line-number" data-line-number="177"></td>
        <td id="LC177" class="blob-code blob-code-inner js-file-line"><span class="pl-k">var</span> slideIndex<span class="pl-k">=</span><span class="pl-smi">$this</span>.<span class="pl-en">attr</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>data-slide-to<span class="pl-pds">&#39;</span></span>)</td>
      </tr>
      <tr>
        <td id="L178" class="blob-num js-line-number" data-line-number="178"></td>
        <td id="LC178" class="blob-code blob-code-inner js-file-line"><span class="pl-k">if</span>(slideIndex)<span class="pl-smi">options</span>.<span class="pl-smi">interval</span><span class="pl-k">=</span><span class="pl-c1">false</span></td>
      </tr>
      <tr>
        <td id="L179" class="blob-num js-line-number" data-line-number="179"></td>
        <td id="LC179" class="blob-code blob-code-inner js-file-line"><span class="pl-c1">Plugin</span>.<span class="pl-c1">call</span>($target,options)</td>
      </tr>
      <tr>
        <td id="L180" class="blob-num js-line-number" data-line-number="180"></td>
        <td id="LC180" class="blob-code blob-code-inner js-file-line"><span class="pl-k">if</span>(slideIndex){<span class="pl-smi">$target</span>.<span class="pl-c1">data</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>bs.carousel<span class="pl-pds">&#39;</span></span>).<span class="pl-en">to</span>(slideIndex)}</td>
      </tr>
      <tr>
        <td id="L181" class="blob-num js-line-number" data-line-number="181"></td>
        <td id="LC181" class="blob-code blob-code-inner js-file-line"><span class="pl-smi">e</span>.<span class="pl-c1">preventDefault</span>()}</td>
      </tr>
      <tr>
        <td id="L182" class="blob-num js-line-number" data-line-number="182"></td>
        <td id="LC182" class="blob-code blob-code-inner js-file-line"><span class="pl-en">$</span>(<span class="pl-c1">document</span>).<span class="pl-en">on</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>click.bs.carousel.data-api<span class="pl-pds">&#39;</span></span>,<span class="pl-s"><span class="pl-pds">&#39;</span>[data-slide]<span class="pl-pds">&#39;</span></span>,clickHandler).<span class="pl-en">on</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>click.bs.carousel.data-api<span class="pl-pds">&#39;</span></span>,<span class="pl-s"><span class="pl-pds">&#39;</span>[data-slide-to]<span class="pl-pds">&#39;</span></span>,clickHandler)</td>
      </tr>
      <tr>
        <td id="L183" class="blob-num js-line-number" data-line-number="183"></td>
        <td id="LC183" class="blob-code blob-code-inner js-file-line"><span class="pl-en">$</span>(<span class="pl-c1">window</span>).<span class="pl-en">on</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>load<span class="pl-pds">&#39;</span></span>,<span class="pl-k">function</span>(){<span class="pl-en">$</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>[data-ride=&quot;carousel&quot;]<span class="pl-pds">&#39;</span></span>).<span class="pl-en">each</span>(<span class="pl-k">function</span>(){<span class="pl-k">var</span> $carousel<span class="pl-k">=</span><span class="pl-en">$</span>(<span class="pl-c1">this</span>)</td>
      </tr>
      <tr>
        <td id="L184" class="blob-num js-line-number" data-line-number="184"></td>
        <td id="LC184" class="blob-code blob-code-inner js-file-line"><span class="pl-c1">Plugin</span>.<span class="pl-c1">call</span>($carousel,<span class="pl-smi">$carousel</span>.<span class="pl-c1">data</span>())})})}(jQuery);<span class="pl-k">+</span><span class="pl-k">function</span>(<span class="pl-smi">$</span>){<span class="pl-s"><span class="pl-pds">&#39;</span>use strict<span class="pl-pds">&#39;</span></span>;<span class="pl-k">var</span> <span class="pl-en">Collapse</span><span class="pl-k">=</span><span class="pl-k">function</span>(<span class="pl-smi">element</span>,<span class="pl-smi">options</span>){<span class="pl-c1">this</span>.<span class="pl-smi">$element</span><span class="pl-k">=</span><span class="pl-en">$</span>(element)</td>
      </tr>
      <tr>
        <td id="L185" class="blob-num js-line-number" data-line-number="185"></td>
        <td id="LC185" class="blob-code blob-code-inner js-file-line"><span class="pl-c1">this</span>.<span class="pl-c1">options</span><span class="pl-k">=</span><span class="pl-smi">$</span>.<span class="pl-en">extend</span>({},<span class="pl-smi">Collapse</span>.<span class="pl-c1">DEFAULTS</span>,options)</td>
      </tr>
      <tr>
        <td id="L186" class="blob-num js-line-number" data-line-number="186"></td>
        <td id="LC186" class="blob-code blob-code-inner js-file-line"><span class="pl-c1">this</span>.<span class="pl-smi">$trigger</span><span class="pl-k">=</span><span class="pl-en">$</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>[data-toggle=&quot;collapse&quot;][href=&quot;#<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span><span class="pl-smi">element</span>.<span class="pl-c1">id</span><span class="pl-k">+</span><span class="pl-s"><span class="pl-pds">&#39;</span>&quot;],<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L187" class="blob-num js-line-number" data-line-number="187"></td>
        <td id="LC187" class="blob-code blob-code-inner js-file-line"><span class="pl-s"><span class="pl-pds">&#39;</span>[data-toggle=&quot;collapse&quot;][data-target=&quot;#<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span><span class="pl-smi">element</span>.<span class="pl-c1">id</span><span class="pl-k">+</span><span class="pl-s"><span class="pl-pds">&#39;</span>&quot;]<span class="pl-pds">&#39;</span></span>)</td>
      </tr>
      <tr>
        <td id="L188" class="blob-num js-line-number" data-line-number="188"></td>
        <td id="LC188" class="blob-code blob-code-inner js-file-line"><span class="pl-c1">this</span>.<span class="pl-smi">transitioning</span><span class="pl-k">=</span><span class="pl-c1">null</span></td>
      </tr>
      <tr>
        <td id="L189" class="blob-num js-line-number" data-line-number="189"></td>
        <td id="LC189" class="blob-code blob-code-inner js-file-line"><span class="pl-k">if</span>(<span class="pl-c1">this</span>.<span class="pl-c1">options</span>.<span class="pl-c1">parent</span>){<span class="pl-c1">this</span>.<span class="pl-smi">$parent</span><span class="pl-k">=</span><span class="pl-c1">this</span>.<span class="pl-en">getParent</span>()}<span class="pl-k">else</span>{<span class="pl-c1">this</span>.<span class="pl-en">addAriaAndCollapsedClass</span>(<span class="pl-c1">this</span>.<span class="pl-smi">$element</span>,<span class="pl-c1">this</span>.<span class="pl-smi">$trigger</span>)}</td>
      </tr>
      <tr>
        <td id="L190" class="blob-num js-line-number" data-line-number="190"></td>
        <td id="LC190" class="blob-code blob-code-inner js-file-line"><span class="pl-k">if</span>(<span class="pl-c1">this</span>.<span class="pl-c1">options</span>.<span class="pl-smi">toggle</span>)<span class="pl-c1">this</span>.<span class="pl-c1">toggle</span>()}</td>
      </tr>
      <tr>
        <td id="L191" class="blob-num js-line-number" data-line-number="191"></td>
        <td id="LC191" class="blob-code blob-code-inner js-file-line"><span class="pl-smi">Collapse</span>.<span class="pl-c1">VERSION</span><span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">&#39;</span>3.3.7<span class="pl-pds">&#39;</span></span></td>
      </tr>
      <tr>
        <td id="L192" class="blob-num js-line-number" data-line-number="192"></td>
        <td id="LC192" class="blob-code blob-code-inner js-file-line"><span class="pl-smi">Collapse</span>.<span class="pl-c1">TRANSITION_DURATION</span><span class="pl-k">=</span><span class="pl-c1">350</span></td>
      </tr>
      <tr>
        <td id="L193" class="blob-num js-line-number" data-line-number="193"></td>
        <td id="LC193" class="blob-code blob-code-inner js-file-line"><span class="pl-smi">Collapse</span>.<span class="pl-c1">DEFAULTS</span><span class="pl-k">=</span>{toggle<span class="pl-k">:</span><span class="pl-c1">true</span>}</td>
      </tr>
      <tr>
        <td id="L194" class="blob-num js-line-number" data-line-number="194"></td>
        <td id="LC194" class="blob-code blob-code-inner js-file-line"><span class="pl-smi">Collapse</span>.<span class="pl-c1">prototype</span>.<span class="pl-en">dimension</span><span class="pl-k">=</span><span class="pl-k">function</span>(){<span class="pl-k">var</span> hasWidth<span class="pl-k">=</span><span class="pl-c1">this</span>.<span class="pl-smi">$element</span>.<span class="pl-en">hasClass</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>width<span class="pl-pds">&#39;</span></span>)</td>
      </tr>
      <tr>
        <td id="L195" class="blob-num js-line-number" data-line-number="195"></td>
        <td id="LC195" class="blob-code blob-code-inner js-file-line"><span class="pl-k">return</span> hasWidth<span class="pl-k">?</span><span class="pl-s"><span class="pl-pds">&#39;</span>width<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>height<span class="pl-pds">&#39;</span></span>}</td>
      </tr>
      <tr>
        <td id="L196" class="blob-num js-line-number" data-line-number="196"></td>
        <td id="LC196" class="blob-code blob-code-inner js-file-line"><span class="pl-smi">Collapse</span>.<span class="pl-c1">prototype</span>.<span class="pl-en">show</span><span class="pl-k">=</span><span class="pl-k">function</span>(){<span class="pl-k">if</span>(<span class="pl-c1">this</span>.<span class="pl-smi">transitioning</span><span class="pl-k">||</span><span class="pl-c1">this</span>.<span class="pl-smi">$element</span>.<span class="pl-en">hasClass</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>in<span class="pl-pds">&#39;</span></span>))<span class="pl-k">return</span></td>
      </tr>
      <tr>
        <td id="L197" class="blob-num js-line-number" data-line-number="197"></td>
        <td id="LC197" class="blob-code blob-code-inner js-file-line"><span class="pl-k">var</span> activesData</td>
      </tr>
      <tr>
        <td id="L198" class="blob-num js-line-number" data-line-number="198"></td>
        <td id="LC198" class="blob-code blob-code-inner js-file-line"><span class="pl-k">var</span> actives<span class="pl-k">=</span><span class="pl-c1">this</span>.<span class="pl-smi">$parent</span><span class="pl-k">&amp;&amp;</span><span class="pl-c1">this</span>.<span class="pl-smi">$parent</span>.<span class="pl-en">children</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>.panel<span class="pl-pds">&#39;</span></span>).<span class="pl-en">children</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>.in, .collapsing<span class="pl-pds">&#39;</span></span>)</td>
      </tr>
      <tr>
        <td id="L199" class="blob-num js-line-number" data-line-number="199"></td>
        <td id="LC199" class="blob-code blob-code-inner js-file-line"><span class="pl-k">if</span>(actives<span class="pl-k">&amp;&amp;</span><span class="pl-smi">actives</span>.<span class="pl-c1">length</span>){activesData<span class="pl-k">=</span><span class="pl-smi">actives</span>.<span class="pl-c1">data</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>bs.collapse<span class="pl-pds">&#39;</span></span>)</td>
      </tr>
      <tr>
        <td id="L200" class="blob-num js-line-number" data-line-number="200"></td>
        <td id="LC200" class="blob-code blob-code-inner js-file-line"><span class="pl-k">if</span>(activesData<span class="pl-k">&amp;&amp;</span><span class="pl-smi">activesData</span>.<span class="pl-smi">transitioning</span>)<span class="pl-k">return</span>}</td>
      </tr>
      <tr>
        <td id="L201" class="blob-num js-line-number" data-line-number="201"></td>
        <td id="LC201" class="blob-code blob-code-inner js-file-line"><span class="pl-k">var</span> startEvent<span class="pl-k">=</span><span class="pl-smi">$</span>.<span class="pl-en">Event</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>show.bs.collapse<span class="pl-pds">&#39;</span></span>)</td>
      </tr>
      <tr>
        <td id="L202" class="blob-num js-line-number" data-line-number="202"></td>
        <td id="LC202" class="blob-code blob-code-inner js-file-line"><span class="pl-c1">this</span>.<span class="pl-smi">$element</span>.<span class="pl-en">trigger</span>(startEvent)</td>
      </tr>
      <tr>
        <td id="L203" class="blob-num js-line-number" data-line-number="203"></td>
        <td id="LC203" class="blob-code blob-code-inner js-file-line"><span class="pl-k">if</span>(<span class="pl-smi">startEvent</span>.<span class="pl-en">isDefaultPrevented</span>())<span class="pl-k">return</span></td>
      </tr>
      <tr>
        <td id="L204" class="blob-num js-line-number" data-line-number="204"></td>
        <td id="LC204" class="blob-code blob-code-inner js-file-line"><span class="pl-k">if</span>(actives<span class="pl-k">&amp;&amp;</span><span class="pl-smi">actives</span>.<span class="pl-c1">length</span>){<span class="pl-c1">Plugin</span>.<span class="pl-c1">call</span>(actives,<span class="pl-s"><span class="pl-pds">&#39;</span>hide<span class="pl-pds">&#39;</span></span>)</td>
      </tr>
      <tr>
        <td id="L205" class="blob-num js-line-number" data-line-number="205"></td>
        <td id="LC205" class="blob-code blob-code-inner js-file-line">activesData<span class="pl-k">||</span><span class="pl-smi">actives</span>.<span class="pl-c1">data</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>bs.collapse<span class="pl-pds">&#39;</span></span>,<span class="pl-c1">null</span>)}</td>
      </tr>
      <tr>
        <td id="L206" class="blob-num js-line-number" data-line-number="206"></td>
        <td id="LC206" class="blob-code blob-code-inner js-file-line"><span class="pl-k">var</span> dimension<span class="pl-k">=</span><span class="pl-c1">this</span>.<span class="pl-en">dimension</span>()</td>
      </tr>
      <tr>
        <td id="L207" class="blob-num js-line-number" data-line-number="207"></td>
        <td id="LC207" class="blob-code blob-code-inner js-file-line"><span class="pl-c1">this</span>.<span class="pl-smi">$element</span>.<span class="pl-en">removeClass</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>collapse<span class="pl-pds">&#39;</span></span>).<span class="pl-en">addClass</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>collapsing<span class="pl-pds">&#39;</span></span>)[dimension](<span class="pl-c1">0</span>).<span class="pl-en">attr</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>aria-expanded<span class="pl-pds">&#39;</span></span>,<span class="pl-c1">true</span>)</td>
      </tr>
      <tr>
        <td id="L208" class="blob-num js-line-number" data-line-number="208"></td>
        <td id="LC208" class="blob-code blob-code-inner js-file-line"><span class="pl-c1">this</span>.<span class="pl-smi">$trigger</span>.<span class="pl-en">removeClass</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>collapsed<span class="pl-pds">&#39;</span></span>).<span class="pl-en">attr</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>aria-expanded<span class="pl-pds">&#39;</span></span>,<span class="pl-c1">true</span>)</td>
      </tr>
      <tr>
        <td id="L209" class="blob-num js-line-number" data-line-number="209"></td>
        <td id="LC209" class="blob-code blob-code-inner js-file-line"><span class="pl-c1">this</span>.<span class="pl-smi">transitioning</span><span class="pl-k">=</span><span class="pl-c1">1</span></td>
      </tr>
      <tr>
        <td id="L210" class="blob-num js-line-number" data-line-number="210"></td>
        <td id="LC210" class="blob-code blob-code-inner js-file-line"><span class="pl-k">var</span> <span class="pl-en">complete</span><span class="pl-k">=</span><span class="pl-k">function</span>(){<span class="pl-c1">this</span>.<span class="pl-smi">$element</span>.<span class="pl-en">removeClass</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>collapsing<span class="pl-pds">&#39;</span></span>).<span class="pl-en">addClass</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>collapse in<span class="pl-pds">&#39;</span></span>)[dimension](<span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span>)</td>
      </tr>
      <tr>
        <td id="L211" class="blob-num js-line-number" data-line-number="211"></td>
        <td id="LC211" class="blob-code blob-code-inner js-file-line"><span class="pl-c1">this</span>.<span class="pl-smi">transitioning</span><span class="pl-k">=</span><span class="pl-c1">0</span></td>
      </tr>
      <tr>
        <td id="L212" class="blob-num js-line-number" data-line-number="212"></td>
        <td id="LC212" class="blob-code blob-code-inner js-file-line"><span class="pl-c1">this</span>.<span class="pl-smi">$element</span>.<span class="pl-en">trigger</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>shown.bs.collapse<span class="pl-pds">&#39;</span></span>)}</td>
      </tr>
      <tr>
        <td id="L213" class="blob-num js-line-number" data-line-number="213"></td>
        <td id="LC213" class="blob-code blob-code-inner js-file-line"><span class="pl-k">if</span>(<span class="pl-k">!</span><span class="pl-smi">$</span>.<span class="pl-smi">support</span>.<span class="pl-smi">transition</span>)<span class="pl-k">return</span> <span class="pl-smi">complete</span>.<span class="pl-c1">call</span>(<span class="pl-c1">this</span>)</td>
      </tr>
      <tr>
        <td id="L214" class="blob-num js-line-number" data-line-number="214"></td>
        <td id="LC214" class="blob-code blob-code-inner js-file-line"><span class="pl-k">var</span> scrollSize<span class="pl-k">=</span><span class="pl-smi">$</span>.<span class="pl-en">camelCase</span>([<span class="pl-s"><span class="pl-pds">&#39;</span>scroll<span class="pl-pds">&#39;</span></span>,dimension].<span class="pl-c1">join</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>-<span class="pl-pds">&#39;</span></span>))</td>
      </tr>
      <tr>
        <td id="L215" class="blob-num js-line-number" data-line-number="215"></td>
        <td id="LC215" class="blob-code blob-code-inner js-file-line"><span class="pl-c1">this</span>.<span class="pl-smi">$element</span>.<span class="pl-en">one</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>bsTransitionEnd<span class="pl-pds">&#39;</span></span>,<span class="pl-smi">$</span>.<span class="pl-en">proxy</span>(complete,<span class="pl-c1">this</span>)).<span class="pl-en">emulateTransitionEnd</span>(<span class="pl-smi">Collapse</span>.<span class="pl-c1">TRANSITION_DURATION</span>)[dimension](<span class="pl-c1">this</span>.<span class="pl-smi">$element</span>[<span class="pl-c1">0</span>][scrollSize])}</td>
      </tr>
      <tr>
        <td id="L216" class="blob-num js-line-number" data-line-number="216"></td>
        <td id="LC216" class="blob-code blob-code-inner js-file-line"><span class="pl-smi">Collapse</span>.<span class="pl-c1">prototype</span>.<span class="pl-en">hide</span><span class="pl-k">=</span><span class="pl-k">function</span>(){<span class="pl-k">if</span>(<span class="pl-c1">this</span>.<span class="pl-smi">transitioning</span><span class="pl-k">||!</span><span class="pl-c1">this</span>.<span class="pl-smi">$element</span>.<span class="pl-en">hasClass</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>in<span class="pl-pds">&#39;</span></span>))<span class="pl-k">return</span></td>
      </tr>
      <tr>
        <td id="L217" class="blob-num js-line-number" data-line-number="217"></td>
        <td id="LC217" class="blob-code blob-code-inner js-file-line"><span class="pl-k">var</span> startEvent<span class="pl-k">=</span><span class="pl-smi">$</span>.<span class="pl-en">Event</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>hide.bs.collapse<span class="pl-pds">&#39;</span></span>)</td>
      </tr>
      <tr>
        <td id="L218" class="blob-num js-line-number" data-line-number="218"></td>
        <td id="LC218" class="blob-code blob-code-inner js-file-line"><span class="pl-c1">this</span>.<span class="pl-smi">$element</span>.<span class="pl-en">trigger</span>(startEvent)</td>
      </tr>
      <tr>
        <td id="L219" class="blob-num js-line-number" data-line-number="219"></td>
        <td id="LC219" class="blob-code blob-code-inner js-file-line"><span class="pl-k">if</span>(<span class="pl-smi">startEvent</span>.<span class="pl-en">isDefaultPrevented</span>())<span class="pl-k">return</span></td>
      </tr>
      <tr>
        <td id="L220" class="blob-num js-line-number" data-line-number="220"></td>
        <td id="LC220" class="blob-code blob-code-inner js-file-line"><span class="pl-k">var</span> dimension<span class="pl-k">=</span><span class="pl-c1">this</span>.<span class="pl-en">dimension</span>()</td>
      </tr>
      <tr>
        <td id="L221" class="blob-num js-line-number" data-line-number="221"></td>
        <td id="LC221" class="blob-code blob-code-inner js-file-line"><span class="pl-c1">this</span>.<span class="pl-smi">$element</span>[dimension](<span class="pl-c1">this</span>.<span class="pl-smi">$element</span>[dimension]())[<span class="pl-c1">0</span>].<span class="pl-smi">offsetHeight</span></td>
      </tr>
      <tr>
        <td id="L222" class="blob-num js-line-number" data-line-number="222"></td>
        <td id="LC222" class="blob-code blob-code-inner js-file-line"><span class="pl-c1">this</span>.<span class="pl-smi">$element</span>.<span class="pl-en">addClass</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>collapsing<span class="pl-pds">&#39;</span></span>).<span class="pl-en">removeClass</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>collapse in<span class="pl-pds">&#39;</span></span>).<span class="pl-en">attr</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>aria-expanded<span class="pl-pds">&#39;</span></span>,<span class="pl-c1">false</span>)</td>
      </tr>
      <tr>
        <td id="L223" class="blob-num js-line-number" data-line-number="223"></td>
        <td id="LC223" class="blob-code blob-code-inner js-file-line"><span class="pl-c1">this</span>.<span class="pl-smi">$trigger</span>.<span class="pl-en">addClass</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>collapsed<span class="pl-pds">&#39;</span></span>).<span class="pl-en">attr</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>aria-expanded<span class="pl-pds">&#39;</span></span>,<span class="pl-c1">false</span>)</td>
      </tr>
      <tr>
        <td id="L224" class="blob-num js-line-number" data-line-number="224"></td>
        <td id="LC224" class="blob-code blob-code-inner js-file-line"><span class="pl-c1">this</span>.<span class="pl-smi">transitioning</span><span class="pl-k">=</span><span class="pl-c1">1</span></td>
      </tr>
      <tr>
        <td id="L225" class="blob-num js-line-number" data-line-number="225"></td>
        <td id="LC225" class="blob-code blob-code-inner js-file-line"><span class="pl-k">var</span> <span class="pl-en">complete</span><span class="pl-k">=</span><span class="pl-k">function</span>(){<span class="pl-c1">this</span>.<span class="pl-smi">transitioning</span><span class="pl-k">=</span><span class="pl-c1">0</span></td>
      </tr>
      <tr>
        <td id="L226" class="blob-num js-line-number" data-line-number="226"></td>
        <td id="LC226" class="blob-code blob-code-inner js-file-line"><span class="pl-c1">this</span>.<span class="pl-smi">$element</span>.<span class="pl-en">removeClass</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>collapsing<span class="pl-pds">&#39;</span></span>).<span class="pl-en">addClass</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>collapse<span class="pl-pds">&#39;</span></span>).<span class="pl-en">trigger</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>hidden.bs.collapse<span class="pl-pds">&#39;</span></span>)}</td>
      </tr>
      <tr>
        <td id="L227" class="blob-num js-line-number" data-line-number="227"></td>
        <td id="LC227" class="blob-code blob-code-inner js-file-line"><span class="pl-k">if</span>(<span class="pl-k">!</span><span class="pl-smi">$</span>.<span class="pl-smi">support</span>.<span class="pl-smi">transition</span>)<span class="pl-k">return</span> <span class="pl-smi">complete</span>.<span class="pl-c1">call</span>(<span class="pl-c1">this</span>)</td>
      </tr>
      <tr>
        <td id="L228" class="blob-num js-line-number" data-line-number="228"></td>
        <td id="LC228" class="blob-code blob-code-inner js-file-line"><span class="pl-c1">this</span>.<span class="pl-smi">$element</span></td>
      </tr>
      <tr>
        <td id="L229" class="blob-num js-line-number" data-line-number="229"></td>
        <td id="LC229" class="blob-code blob-code-inner js-file-line">[dimension](<span class="pl-c1">0</span>).<span class="pl-en">one</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>bsTransitionEnd<span class="pl-pds">&#39;</span></span>,<span class="pl-smi">$</span>.<span class="pl-en">proxy</span>(complete,<span class="pl-c1">this</span>)).<span class="pl-en">emulateTransitionEnd</span>(<span class="pl-smi">Collapse</span>.<span class="pl-c1">TRANSITION_DURATION</span>)}</td>
      </tr>
      <tr>
        <td id="L230" class="blob-num js-line-number" data-line-number="230"></td>
        <td id="LC230" class="blob-code blob-code-inner js-file-line"><span class="pl-smi">Collapse</span>.<span class="pl-c1">prototype</span>.<span class="pl-en">toggle</span><span class="pl-k">=</span><span class="pl-k">function</span>(){<span class="pl-c1">this</span>[<span class="pl-c1">this</span>.<span class="pl-smi">$element</span>.<span class="pl-en">hasClass</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>in<span class="pl-pds">&#39;</span></span>)<span class="pl-k">?</span><span class="pl-s"><span class="pl-pds">&#39;</span>hide<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>show<span class="pl-pds">&#39;</span></span>]()}</td>
      </tr>
      <tr>
        <td id="L231" class="blob-num js-line-number" data-line-number="231"></td>
        <td id="LC231" class="blob-code blob-code-inner js-file-line"><span class="pl-smi">Collapse</span>.<span class="pl-c1">prototype</span>.<span class="pl-en">getParent</span><span class="pl-k">=</span><span class="pl-k">function</span>(){<span class="pl-k">return</span> <span class="pl-en">$</span>(<span class="pl-c1">this</span>.<span class="pl-c1">options</span>.<span class="pl-c1">parent</span>).<span class="pl-c1">find</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>[data-toggle=&quot;collapse&quot;][data-parent=&quot;<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span><span class="pl-c1">this</span>.<span class="pl-c1">options</span>.<span class="pl-c1">parent</span><span class="pl-k">+</span><span class="pl-s"><span class="pl-pds">&#39;</span>&quot;]<span class="pl-pds">&#39;</span></span>).<span class="pl-en">each</span>(<span class="pl-smi">$</span>.<span class="pl-en">proxy</span>(<span class="pl-k">function</span>(<span class="pl-smi">i</span>,<span class="pl-smi">element</span>){<span class="pl-k">var</span> $element<span class="pl-k">=</span><span class="pl-en">$</span>(element)</td>
      </tr>
      <tr>
        <td id="L232" class="blob-num js-line-number" data-line-number="232"></td>
        <td id="LC232" class="blob-code blob-code-inner js-file-line"><span class="pl-c1">this</span>.<span class="pl-en">addAriaAndCollapsedClass</span>(<span class="pl-en">getTargetFromTrigger</span>($element),$element)},<span class="pl-c1">this</span>)).<span class="pl-en">end</span>()}</td>
      </tr>
      <tr>
        <td id="L233" class="blob-num js-line-number" data-line-number="233"></td>
        <td id="LC233" class="blob-code blob-code-inner js-file-line"><span class="pl-smi">Collapse</span>.<span class="pl-c1">prototype</span>.<span class="pl-en">addAriaAndCollapsedClass</span><span class="pl-k">=</span><span class="pl-k">function</span>(<span class="pl-smi">$element</span>,<span class="pl-smi">$trigger</span>){<span class="pl-k">var</span> isOpen<span class="pl-k">=</span><span class="pl-smi">$element</span>.<span class="pl-en">hasClass</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>in<span class="pl-pds">&#39;</span></span>)</td>
      </tr>
      <tr>
        <td id="L234" class="blob-num js-line-number" data-line-number="234"></td>
        <td id="LC234" class="blob-code blob-code-inner js-file-line"><span class="pl-smi">$element</span>.<span class="pl-en">attr</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>aria-expanded<span class="pl-pds">&#39;</span></span>,isOpen)</td>
      </tr>
      <tr>
        <td id="L235" class="blob-num js-line-number" data-line-number="235"></td>
        <td id="LC235" class="blob-code blob-code-inner js-file-line"><span class="pl-smi">$trigger</span>.<span class="pl-en">toggleClass</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>collapsed<span class="pl-pds">&#39;</span></span>,<span class="pl-k">!</span>isOpen).<span class="pl-en">attr</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>aria-expanded<span class="pl-pds">&#39;</span></span>,isOpen)}</td>
      </tr>
      <tr>
        <td id="L236" class="blob-num js-line-number" data-line-number="236"></td>
        <td id="LC236" class="blob-code blob-code-inner js-file-line"><span class="pl-k">function</span> <span class="pl-en">getTargetFromTrigger</span>(<span class="pl-smi">$trigger</span>){<span class="pl-k">var</span> href</td>
      </tr>
      <tr>
        <td id="L237" class="blob-num js-line-number" data-line-number="237"></td>
        <td id="LC237" class="blob-code blob-code-inner js-file-line"><span class="pl-k">var</span> target<span class="pl-k">=</span><span class="pl-smi">$trigger</span>.<span class="pl-en">attr</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>data-target<span class="pl-pds">&#39;</span></span>)<span class="pl-k">||</span>(href<span class="pl-k">=</span><span class="pl-smi">$trigger</span>.<span class="pl-en">attr</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>href<span class="pl-pds">&#39;</span></span>))<span class="pl-k">&amp;&amp;</span><span class="pl-smi">href</span>.<span class="pl-c1">replace</span>(<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-c1">.</span><span class="pl-k">*</span>(?=#<span class="pl-c1">[<span class="pl-k">^</span><span class="pl-c1">\s</span>]</span><span class="pl-k">+</span><span class="pl-k">$</span>)<span class="pl-pds">/</span></span>,<span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span>)</td>
      </tr>
      <tr>
        <td id="L238" class="blob-num js-line-number" data-line-number="238"></td>
        <td id="LC238" class="blob-code blob-code-inner js-file-line"><span class="pl-k">return</span> <span class="pl-en">$</span>(target)}</td>
      </tr>
      <tr>
        <td id="L239" class="blob-num js-line-number" data-line-number="239"></td>
        <td id="LC239" class="blob-code blob-code-inner js-file-line"><span class="pl-k">function</span> <span class="pl-en">Plugin</span>(<span class="pl-smi">option</span>){<span class="pl-k">return</span> <span class="pl-c1">this</span>.<span class="pl-en">each</span>(<span class="pl-k">function</span>(){<span class="pl-k">var</span> $this<span class="pl-k">=</span><span class="pl-en">$</span>(<span class="pl-c1">this</span>)</td>
      </tr>
      <tr>
        <td id="L240" class="blob-num js-line-number" data-line-number="240"></td>
        <td id="LC240" class="blob-code blob-code-inner js-file-line"><span class="pl-k">var</span> data<span class="pl-k">=</span><span class="pl-smi">$this</span>.<span class="pl-c1">data</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>bs.collapse<span class="pl-pds">&#39;</span></span>)</td>
      </tr>
      <tr>
        <td id="L241" class="blob-num js-line-number" data-line-number="241"></td>
        <td id="LC241" class="blob-code blob-code-inner js-file-line"><span class="pl-k">var</span> options<span class="pl-k">=</span><span class="pl-smi">$</span>.<span class="pl-en">extend</span>({},<span class="pl-smi">Collapse</span>.<span class="pl-c1">DEFAULTS</span>,<span class="pl-smi">$this</span>.<span class="pl-c1">data</span>(),<span class="pl-k">typeof</span> option<span class="pl-k">==</span><span class="pl-s"><span class="pl-pds">&#39;</span>object<span class="pl-pds">&#39;</span></span><span class="pl-k">&amp;&amp;</span>option)</td>
      </tr>
      <tr>
        <td id="L242" class="blob-num js-line-number" data-line-number="242"></td>
        <td id="LC242" class="blob-code blob-code-inner js-file-line"><span class="pl-k">if</span>(<span class="pl-k">!</span>data<span class="pl-k">&amp;&amp;</span><span class="pl-smi">options</span>.<span class="pl-smi">toggle</span><span class="pl-k">&amp;&amp;</span><span class="pl-sr"><span class="pl-pds">/</span>show<span class="pl-k">|</span>hide<span class="pl-pds">/</span></span>.<span class="pl-c1">test</span>(option))<span class="pl-smi">options</span>.<span class="pl-smi">toggle</span><span class="pl-k">=</span><span class="pl-c1">false</span></td>
      </tr>
      <tr>
        <td id="L243" class="blob-num js-line-number" data-line-number="243"></td>
        <td id="LC243" class="blob-code blob-code-inner js-file-line"><span class="pl-k">if</span>(<span class="pl-k">!</span>data)<span class="pl-smi">$this</span>.<span class="pl-c1">data</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>bs.collapse<span class="pl-pds">&#39;</span></span>,(data<span class="pl-k">=</span><span class="pl-k">new</span> <span class="pl-en">Collapse</span>(<span class="pl-c1">this</span>,options)))</td>
      </tr>
      <tr>
        <td id="L244" class="blob-num js-line-number" data-line-number="244"></td>
        <td id="LC244" class="blob-code blob-code-inner js-file-line"><span class="pl-k">if</span>(<span class="pl-k">typeof</span> option<span class="pl-k">==</span><span class="pl-s"><span class="pl-pds">&#39;</span>string<span class="pl-pds">&#39;</span></span>)data[option]()})}</td>
      </tr>
      <tr>
        <td id="L245" class="blob-num js-line-number" data-line-number="245"></td>
        <td id="LC245" class="blob-code blob-code-inner js-file-line"><span class="pl-k">var</span> old<span class="pl-k">=</span><span class="pl-smi">$</span>.<span class="pl-smi">fn</span>.<span class="pl-smi">collapse</span></td>
      </tr>
      <tr>
        <td id="L246" class="blob-num js-line-number" data-line-number="246"></td>
        <td id="LC246" class="blob-code blob-code-inner js-file-line"><span class="pl-smi">$</span>.<span class="pl-smi">fn</span>.<span class="pl-smi">collapse</span><span class="pl-k">=</span><span class="pl-c1">Plugin</span></td>
      </tr>
      <tr>
        <td id="L247" class="blob-num js-line-number" data-line-number="247"></td>
        <td id="LC247" class="blob-code blob-code-inner js-file-line"><span class="pl-smi">$</span>.<span class="pl-smi">fn</span>.<span class="pl-smi">collapse</span>.<span class="pl-smi">Constructor</span><span class="pl-k">=</span>Collapse</td>
      </tr>
      <tr>
        <td id="L248" class="blob-num js-line-number" data-line-number="248"></td>
        <td id="LC248" class="blob-code blob-code-inner js-file-line"><span class="pl-smi">$</span>.<span class="pl-smi">fn</span>.<span class="pl-smi">collapse</span>.<span class="pl-en">noConflict</span><span class="pl-k">=</span><span class="pl-k">function</span>(){<span class="pl-smi">$</span>.<span class="pl-smi">fn</span>.<span class="pl-smi">collapse</span><span class="pl-k">=</span>old</td>
      </tr>
      <tr>
        <td id="L249" class="blob-num js-line-number" data-line-number="249"></td>
        <td id="LC249" class="blob-code blob-code-inner js-file-line"><span class="pl-k">return</span> <span class="pl-c1">this</span>}</td>
      </tr>
      <tr>
        <td id="L250" class="blob-num js-line-number" data-line-number="250"></td>
        <td id="LC250" class="blob-code blob-code-inner js-file-line"><span class="pl-en">$</span>(<span class="pl-c1">document</span>).<span class="pl-en">on</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>click.bs.collapse.data-api<span class="pl-pds">&#39;</span></span>,<span class="pl-s"><span class="pl-pds">&#39;</span>[data-toggle=&quot;collapse&quot;]<span class="pl-pds">&#39;</span></span>,<span class="pl-k">function</span>(<span class="pl-smi">e</span>){<span class="pl-k">var</span> $this<span class="pl-k">=</span><span class="pl-en">$</span>(<span class="pl-c1">this</span>)</td>
      </tr>
      <tr>
        <td id="L251" class="blob-num js-line-number" data-line-number="251"></td>
        <td id="LC251" class="blob-code blob-code-inner js-file-line"><span class="pl-k">if</span>(<span class="pl-k">!</span><span class="pl-smi">$this</span>.<span class="pl-en">attr</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>data-target<span class="pl-pds">&#39;</span></span>))<span class="pl-smi">e</span>.<span class="pl-c1">preventDefault</span>()</td>
      </tr>
      <tr>
        <td id="L252" class="blob-num js-line-number" data-line-number="252"></td>
        <td id="LC252" class="blob-code blob-code-inner js-file-line"><span class="pl-k">var</span> $target<span class="pl-k">=</span><span class="pl-en">getTargetFromTrigger</span>($this)</td>
      </tr>
      <tr>
        <td id="L253" class="blob-num js-line-number" data-line-number="253"></td>
        <td id="LC253" class="blob-code blob-code-inner js-file-line"><span class="pl-k">var</span> data<span class="pl-k">=</span><span class="pl-smi">$target</span>.<span class="pl-c1">data</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>bs.collapse<span class="pl-pds">&#39;</span></span>)</td>
      </tr>
      <tr>
        <td id="L254" class="blob-num js-line-number" data-line-number="254"></td>
        <td id="LC254" class="blob-code blob-code-inner js-file-line"><span class="pl-k">var</span> option<span class="pl-k">=</span>data<span class="pl-k">?</span><span class="pl-s"><span class="pl-pds">&#39;</span>toggle<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span><span class="pl-smi">$this</span>.<span class="pl-c1">data</span>()</td>
      </tr>
      <tr>
        <td id="L255" class="blob-num js-line-number" data-line-number="255"></td>
        <td id="LC255" class="blob-code blob-code-inner js-file-line"><span class="pl-c1">Plugin</span>.<span class="pl-c1">call</span>($target,option)})}(jQuery);<span class="pl-k">+</span><span class="pl-k">function</span>(<span class="pl-smi">$</span>){<span class="pl-s"><span class="pl-pds">&#39;</span>use strict<span class="pl-pds">&#39;</span></span>;<span class="pl-k">var</span> backdrop<span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">&#39;</span>.dropdown-backdrop<span class="pl-pds">&#39;</span></span></td>
      </tr>
      <tr>
        <td id="L256" class="blob-num js-line-number" data-line-number="256"></td>
        <td id="LC256" class="blob-code blob-code-inner js-file-line"><span class="pl-k">var</span> toggle<span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">&#39;</span>[data-toggle=&quot;dropdown&quot;]<span class="pl-pds">&#39;</span></span></td>
      </tr>
      <tr>
        <td id="L257" class="blob-num js-line-number" data-line-number="257"></td>
        <td id="LC257" class="blob-code blob-code-inner js-file-line"><span class="pl-k">var</span> <span class="pl-en">Dropdown</span><span class="pl-k">=</span><span class="pl-k">function</span>(<span class="pl-smi">element</span>){<span class="pl-en">$</span>(element).<span class="pl-en">on</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>click.bs.dropdown<span class="pl-pds">&#39;</span></span>,<span class="pl-c1">this</span>.<span class="pl-smi">toggle</span>)}</td>
      </tr>
      <tr>
        <td id="L258" class="blob-num js-line-number" data-line-number="258"></td>
        <td id="LC258" class="blob-code blob-code-inner js-file-line"><span class="pl-smi">Dropdown</span>.<span class="pl-c1">VERSION</span><span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">&#39;</span>3.3.7<span class="pl-pds">&#39;</span></span></td>
      </tr>
      <tr>
        <td id="L259" class="blob-num js-line-number" data-line-number="259"></td>
        <td id="LC259" class="blob-code blob-code-inner js-file-line"><span class="pl-k">function</span> <span class="pl-en">getParent</span>(<span class="pl-smi">$this</span>){<span class="pl-k">var</span> selector<span class="pl-k">=</span><span class="pl-smi">$this</span>.<span class="pl-en">attr</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>data-target<span class="pl-pds">&#39;</span></span>)</td>
      </tr>
      <tr>
        <td id="L260" class="blob-num js-line-number" data-line-number="260"></td>
        <td id="LC260" class="blob-code blob-code-inner js-file-line"><span class="pl-k">if</span>(<span class="pl-k">!</span>selector){selector<span class="pl-k">=</span><span class="pl-smi">$this</span>.<span class="pl-en">attr</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>href<span class="pl-pds">&#39;</span></span>)</td>
      </tr>
      <tr>
        <td id="L261" class="blob-num js-line-number" data-line-number="261"></td>
        <td id="LC261" class="blob-code blob-code-inner js-file-line">selector<span class="pl-k">=</span>selector<span class="pl-k">&amp;&amp;</span><span class="pl-sr"><span class="pl-pds">/</span>#<span class="pl-c1">[<span class="pl-c1">A-Za-z</span>]</span><span class="pl-pds">/</span></span>.<span class="pl-c1">test</span>(selector)<span class="pl-k">&amp;&amp;</span><span class="pl-smi">selector</span>.<span class="pl-c1">replace</span>(<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-c1">.</span><span class="pl-k">*</span>(?=#<span class="pl-c1">[<span class="pl-k">^</span><span class="pl-c1">\s</span>]</span><span class="pl-k">*</span><span class="pl-k">$</span>)<span class="pl-pds">/</span></span>,<span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span>)}</td>
      </tr>
      <tr>
        <td id="L262" class="blob-num js-line-number" data-line-number="262"></td>
        <td id="LC262" class="blob-code blob-code-inner js-file-line"><span class="pl-k">var</span> $parent<span class="pl-k">=</span>selector<span class="pl-k">&amp;&amp;</span><span class="pl-en">$</span>(selector)</td>
      </tr>
      <tr>
        <td id="L263" class="blob-num js-line-number" data-line-number="263"></td>
        <td id="LC263" class="blob-code blob-code-inner js-file-line"><span class="pl-k">return</span> $parent<span class="pl-k">&amp;&amp;</span><span class="pl-smi">$parent</span>.<span class="pl-c1">length</span><span class="pl-k">?</span>$parent<span class="pl-k">:</span><span class="pl-smi">$this</span>.<span class="pl-c1">parent</span>()}</td>
      </tr>
      <tr>
        <td id="L264" class="blob-num js-line-number" data-line-number="264"></td>
        <td id="LC264" class="blob-code blob-code-inner js-file-line"><span class="pl-k">function</span> <span class="pl-en">clearMenus</span>(<span class="pl-smi">e</span>){<span class="pl-k">if</span>(e<span class="pl-k">&amp;&amp;</span><span class="pl-smi">e</span>.<span class="pl-smi">which</span><span class="pl-k">===</span><span class="pl-c1">3</span>)<span class="pl-k">return</span></td>
      </tr>
      <tr>
        <td id="L265" class="blob-num js-line-number" data-line-number="265"></td>
        <td id="LC265" class="blob-code blob-code-inner js-file-line"><span class="pl-en">$</span>(backdrop).<span class="pl-c1">remove</span>()</td>
      </tr>
      <tr>
        <td id="L266" class="blob-num js-line-number" data-line-number="266"></td>
        <td id="LC266" class="blob-code blob-code-inner js-file-line"><span class="pl-en">$</span>(toggle).<span class="pl-en">each</span>(<span class="pl-k">function</span>(){<span class="pl-k">var</span> $this<span class="pl-k">=</span><span class="pl-en">$</span>(<span class="pl-c1">this</span>)</td>
      </tr>
      <tr>
        <td id="L267" class="blob-num js-line-number" data-line-number="267"></td>
        <td id="LC267" class="blob-code blob-code-inner js-file-line"><span class="pl-k">var</span> $parent<span class="pl-k">=</span><span class="pl-en">getParent</span>($this)</td>
      </tr>
      <tr>
        <td id="L268" class="blob-num js-line-number" data-line-number="268"></td>
        <td id="LC268" class="blob-code blob-code-inner js-file-line"><span class="pl-k">var</span> relatedTarget<span class="pl-k">=</span>{relatedTarget<span class="pl-k">:</span><span class="pl-c1">this</span>}</td>
      </tr>
      <tr>
        <td id="L269" class="blob-num js-line-number" data-line-number="269"></td>
        <td id="LC269" class="blob-code blob-code-inner js-file-line"><span class="pl-k">if</span>(<span class="pl-k">!</span><span class="pl-smi">$parent</span>.<span class="pl-en">hasClass</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>open<span class="pl-pds">&#39;</span></span>))<span class="pl-k">return</span></td>
      </tr>
      <tr>
        <td id="L270" class="blob-num js-line-number" data-line-number="270"></td>
        <td id="LC270" class="blob-code blob-code-inner js-file-line"><span class="pl-k">if</span>(e<span class="pl-k">&amp;&amp;</span><span class="pl-smi">e</span>.<span class="pl-c1">type</span><span class="pl-k">==</span><span class="pl-s"><span class="pl-pds">&#39;</span>click<span class="pl-pds">&#39;</span></span><span class="pl-k">&amp;&amp;</span><span class="pl-sr"><span class="pl-pds">/</span>input<span class="pl-k">|</span>textarea<span class="pl-pds">/</span>i</span>.<span class="pl-c1">test</span>(<span class="pl-smi">e</span>.<span class="pl-c1">target</span>.<span class="pl-c1">tagName</span>)<span class="pl-k">&amp;&amp;</span><span class="pl-smi">$</span>.<span class="pl-c1">contains</span>($parent[<span class="pl-c1">0</span>],<span class="pl-smi">e</span>.<span class="pl-c1">target</span>))<span class="pl-k">return</span></td>
      </tr>
      <tr>
        <td id="L271" class="blob-num js-line-number" data-line-number="271"></td>
        <td id="LC271" class="blob-code blob-code-inner js-file-line"><span class="pl-smi">$parent</span>.<span class="pl-en">trigger</span>(e<span class="pl-k">=</span><span class="pl-smi">$</span>.<span class="pl-en">Event</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>hide.bs.dropdown<span class="pl-pds">&#39;</span></span>,relatedTarget))</td>
      </tr>
      <tr>
        <td id="L272" class="blob-num js-line-number" data-line-number="272"></td>
        <td id="LC272" class="blob-code blob-code-inner js-file-line"><span class="pl-k">if</span>(<span class="pl-smi">e</span>.<span class="pl-en">isDefaultPrevented</span>())<span class="pl-k">return</span></td>
      </tr>
      <tr>
        <td id="L273" class="blob-num js-line-number" data-line-number="273"></td>
        <td id="LC273" class="blob-code blob-code-inner js-file-line"><span class="pl-smi">$this</span>.<span class="pl-en">attr</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>aria-expanded<span class="pl-pds">&#39;</span></span>,<span class="pl-s"><span class="pl-pds">&#39;</span>false<span class="pl-pds">&#39;</span></span>)</td>
      </tr>
      <tr>
        <td id="L274" class="blob-num js-line-number" data-line-number="274"></td>
        <td id="LC274" class="blob-code blob-code-inner js-file-line"><span class="pl-smi">$parent</span>.<span class="pl-en">removeClass</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>open<span class="pl-pds">&#39;</span></span>).<span class="pl-en">trigger</span>(<span class="pl-smi">$</span>.<span class="pl-en">Event</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>hidden.bs.dropdown<span class="pl-pds">&#39;</span></span>,relatedTarget))})}</td>
      </tr>
      <tr>
        <td id="L275" class="blob-num js-line-number" data-line-number="275"></td>
        <td id="LC275" class="blob-code blob-code-inner js-file-line"><span class="pl-smi">Dropdown</span>.<span class="pl-c1">prototype</span>.<span class="pl-en">toggle</span><span class="pl-k">=</span><span class="pl-k">function</span>(<span class="pl-smi">e</span>){<span class="pl-k">var</span> $this<span class="pl-k">=</span><span class="pl-en">$</span>(<span class="pl-c1">this</span>)</td>
      </tr>
      <tr>
        <td id="L276" class="blob-num js-line-number" data-line-number="276"></td>
        <td id="LC276" class="blob-code blob-code-inner js-file-line"><span class="pl-k">if</span>(<span class="pl-smi">$this</span>.<span class="pl-en">is</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>.disabled, :disabled<span class="pl-pds">&#39;</span></span>))<span class="pl-k">return</span></td>
      </tr>
      <tr>
        <td id="L277" class="blob-num js-line-number" data-line-number="277"></td>
        <td id="LC277" class="blob-code blob-code-inner js-file-line"><span class="pl-k">var</span> $parent<span class="pl-k">=</span><span class="pl-en">getParent</span>($this)</td>
      </tr>
      <tr>
        <td id="L278" class="blob-num js-line-number" data-line-number="278"></td>
        <td id="LC278" class="blob-code blob-code-inner js-file-line"><span class="pl-k">var</span> isActive<span class="pl-k">=</span><span class="pl-smi">$parent</span>.<span class="pl-en">hasClass</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>open<span class="pl-pds">&#39;</span></span>)</td>
      </tr>
      <tr>
        <td id="L279" class="blob-num js-line-number" data-line-number="279"></td>
        <td id="LC279" class="blob-code blob-code-inner js-file-line"><span class="pl-en">clearMenus</span>()</td>
      </tr>
      <tr>
        <td id="L280" class="blob-num js-line-number" data-line-number="280"></td>
        <td id="LC280" class="blob-code blob-code-inner js-file-line"><span class="pl-k">if</span>(<span class="pl-k">!</span>isActive){<span class="pl-k">if</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>ontouchstart<span class="pl-pds">&#39;</span></span><span class="pl-k">in</span> <span class="pl-c1">document</span>.<span class="pl-c1">documentElement</span><span class="pl-k">&amp;&amp;!</span><span class="pl-smi">$parent</span>.<span class="pl-c1">closest</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>.navbar-nav<span class="pl-pds">&#39;</span></span>).<span class="pl-c1">length</span>){<span class="pl-en">$</span>(<span class="pl-c1">document</span>.<span class="pl-c1">createElement</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>div<span class="pl-pds">&#39;</span></span>)).<span class="pl-en">addClass</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>dropdown-backdrop<span class="pl-pds">&#39;</span></span>).<span class="pl-en">insertAfter</span>(<span class="pl-en">$</span>(<span class="pl-c1">this</span>)).<span class="pl-en">on</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>click<span class="pl-pds">&#39;</span></span>,clearMenus)}</td>
      </tr>
      <tr>
        <td id="L281" class="blob-num js-line-number" data-line-number="281"></td>
        <td id="LC281" class="blob-code blob-code-inner js-file-line"><span class="pl-k">var</span> relatedTarget<span class="pl-k">=</span>{relatedTarget<span class="pl-k">:</span><span class="pl-c1">this</span>}</td>
      </tr>
      <tr>
        <td id="L282" class="blob-num js-line-number" data-line-number="282"></td>
        <td id="LC282" class="blob-code blob-code-inner js-file-line"><span class="pl-smi">$parent</span>.<span class="pl-en">trigger</span>(e<span class="pl-k">=</span><span class="pl-smi">$</span>.<span class="pl-en">Event</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>show.bs.dropdown<span class="pl-pds">&#39;</span></span>,relatedTarget))</td>
      </tr>
      <tr>
        <td id="L283" class="blob-num js-line-number" data-line-number="283"></td>
        <td id="LC283" class="blob-code blob-code-inner js-file-line"><span class="pl-k">if</span>(<span class="pl-smi">e</span>.<span class="pl-en">isDefaultPrevented</span>())<span class="pl-k">return</span></td>
      </tr>
      <tr>
        <td id="L284" class="blob-num js-line-number" data-line-number="284"></td>
        <td id="LC284" class="blob-code blob-code-inner js-file-line"><span class="pl-smi">$this</span>.<span class="pl-en">trigger</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>focus<span class="pl-pds">&#39;</span></span>).<span class="pl-en">attr</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>aria-expanded<span class="pl-pds">&#39;</span></span>,<span class="pl-s"><span class="pl-pds">&#39;</span>true<span class="pl-pds">&#39;</span></span>)</td>
      </tr>
      <tr>
        <td id="L285" class="blob-num js-line-number" data-line-number="285"></td>
        <td id="LC285" class="blob-code blob-code-inner js-file-line"><span class="pl-smi">$parent</span>.<span class="pl-en">toggleClass</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>open<span class="pl-pds">&#39;</span></span>).<span class="pl-en">trigger</span>(<span class="pl-smi">$</span>.<span class="pl-en">Event</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>shown.bs.dropdown<span class="pl-pds">&#39;</span></span>,relatedTarget))}</td>
      </tr>
      <tr>
        <td id="L286" class="blob-num js-line-number" data-line-number="286"></td>
        <td id="LC286" class="blob-code blob-code-inner js-file-line"><span class="pl-k">return</span> <span class="pl-c1">false</span>}</td>
      </tr>
      <tr>
        <td id="L287" class="blob-num js-line-number" data-line-number="287"></td>
        <td id="LC287" class="blob-code blob-code-inner js-file-line"><span class="pl-smi">Dropdown</span>.<span class="pl-c1">prototype</span>.<span class="pl-en">keydown</span><span class="pl-k">=</span><span class="pl-k">function</span>(<span class="pl-smi">e</span>){<span class="pl-k">if</span>(<span class="pl-k">!</span><span class="pl-sr"><span class="pl-pds">/</span>(38<span class="pl-k">|</span>40<span class="pl-k">|</span>27<span class="pl-k">|</span>32)<span class="pl-pds">/</span></span>.<span class="pl-c1">test</span>(<span class="pl-smi">e</span>.<span class="pl-smi">which</span>)<span class="pl-k">||</span><span class="pl-sr"><span class="pl-pds">/</span>input<span class="pl-k">|</span>textarea<span class="pl-pds">/</span>i</span>.<span class="pl-c1">test</span>(<span class="pl-smi">e</span>.<span class="pl-c1">target</span>.<span class="pl-c1">tagName</span>))<span class="pl-k">return</span></td>
      </tr>
      <tr>
        <td id="L288" class="blob-num js-line-number" data-line-number="288"></td>
        <td id="LC288" class="blob-code blob-code-inner js-file-line"><span class="pl-k">var</span> $this<span class="pl-k">=</span><span class="pl-en">$</span>(<span class="pl-c1">this</span>)</td>
      </tr>
      <tr>
        <td id="L289" class="blob-num js-line-number" data-line-number="289"></td>
        <td id="LC289" class="blob-code blob-code-inner js-file-line"><span class="pl-smi">e</span>.<span class="pl-c1">preventDefault</span>()</td>
      </tr>
      <tr>
        <td id="L290" class="blob-num js-line-number" data-line-number="290"></td>
        <td id="LC290" class="blob-code blob-code-inner js-file-line"><span class="pl-smi">e</span>.<span class="pl-c1">stopPropagation</span>()</td>
      </tr>
      <tr>
        <td id="L291" class="blob-num js-line-number" data-line-number="291"></td>
        <td id="LC291" class="blob-code blob-code-inner js-file-line"><span class="pl-k">if</span>(<span class="pl-smi">$this</span>.<span class="pl-en">is</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>.disabled, :disabled<span class="pl-pds">&#39;</span></span>))<span class="pl-k">return</span></td>
      </tr>
      <tr>
        <td id="L292" class="blob-num js-line-number" data-line-number="292"></td>
        <td id="LC292" class="blob-code blob-code-inner js-file-line"><span class="pl-k">var</span> $parent<span class="pl-k">=</span><span class="pl-en">getParent</span>($this)</td>
      </tr>
      <tr>
        <td id="L293" class="blob-num js-line-number" data-line-number="293"></td>
        <td id="LC293" class="blob-code blob-code-inner js-file-line"><span class="pl-k">var</span> isActive<span class="pl-k">=</span><span class="pl-smi">$parent</span>.<span class="pl-en">hasClass</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>open<span class="pl-pds">&#39;</span></span>)</td>
      </tr>
      <tr>
        <td id="L294" class="blob-num js-line-number" data-line-number="294"></td>
        <td id="LC294" class="blob-code blob-code-inner js-file-line"><span class="pl-k">if</span>(<span class="pl-k">!</span>isActive<span class="pl-k">&amp;&amp;</span><span class="pl-smi">e</span>.<span class="pl-smi">which</span><span class="pl-k">!=</span><span class="pl-c1">27</span><span class="pl-k">||</span>isActive<span class="pl-k">&amp;&amp;</span><span class="pl-smi">e</span>.<span class="pl-smi">which</span><span class="pl-k">==</span><span class="pl-c1">27</span>){<span class="pl-k">if</span>(<span class="pl-smi">e</span>.<span class="pl-smi">which</span><span class="pl-k">==</span><span class="pl-c1">27</span>)<span class="pl-smi">$parent</span>.<span class="pl-c1">find</span>(toggle).<span class="pl-en">trigger</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>focus<span class="pl-pds">&#39;</span></span>)</td>
      </tr>
      <tr>
        <td id="L295" class="blob-num js-line-number" data-line-number="295"></td>
        <td id="LC295" class="blob-code blob-code-inner js-file-line"><span class="pl-k">return</span> <span class="pl-smi">$this</span>.<span class="pl-en">trigger</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>click<span class="pl-pds">&#39;</span></span>)}</td>
      </tr>
      <tr>
        <td id="L296" class="blob-num js-line-number" data-line-number="296"></td>
        <td id="LC296" class="blob-code blob-code-inner js-file-line"><span class="pl-k">var</span> desc<span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">&#39;</span> li:not(.disabled):visible a<span class="pl-pds">&#39;</span></span></td>
      </tr>
      <tr>
        <td id="L297" class="blob-num js-line-number" data-line-number="297"></td>
        <td id="LC297" class="blob-code blob-code-inner js-file-line"><span class="pl-k">var</span> $items<span class="pl-k">=</span><span class="pl-smi">$parent</span>.<span class="pl-c1">find</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>.dropdown-menu<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span>desc)</td>
      </tr>
      <tr>
        <td id="L298" class="blob-num js-line-number" data-line-number="298"></td>
        <td id="LC298" class="blob-code blob-code-inner js-file-line"><span class="pl-k">if</span>(<span class="pl-k">!</span><span class="pl-smi">$items</span>.<span class="pl-c1">length</span>)<span class="pl-k">return</span></td>
      </tr>
      <tr>
        <td id="L299" class="blob-num js-line-number" data-line-number="299"></td>
        <td id="LC299" class="blob-code blob-code-inner js-file-line"><span class="pl-k">var</span> index<span class="pl-k">=</span><span class="pl-smi">$items</span>.<span class="pl-c1">index</span>(<span class="pl-smi">e</span>.<span class="pl-c1">target</span>)</td>
      </tr>
      <tr>
        <td id="L300" class="blob-num js-line-number" data-line-number="300"></td>
        <td id="LC300" class="blob-code blob-code-inner js-file-line"><span class="pl-k">if</span>(<span class="pl-smi">e</span>.<span class="pl-smi">which</span><span class="pl-k">==</span><span class="pl-c1">38</span><span class="pl-k">&amp;&amp;</span>index<span class="pl-k">&gt;</span><span class="pl-c1">0</span>)index<span class="pl-k">--</span></td>
      </tr>
      <tr>
        <td id="L301" class="blob-num js-line-number" data-line-number="301"></td>
        <td id="LC301" class="blob-code blob-code-inner js-file-line"><span class="pl-k">if</span>(<span class="pl-smi">e</span>.<span class="pl-smi">which</span><span class="pl-k">==</span><span class="pl-c1">40</span><span class="pl-k">&amp;&amp;</span>index<span class="pl-k">&lt;</span><span class="pl-smi">$items</span>.<span class="pl-c1">length</span><span class="pl-k">-</span><span class="pl-c1">1</span>)index<span class="pl-k">++</span></td>
      </tr>
      <tr>
        <td id="L302" class="blob-num js-line-number" data-line-number="302"></td>
        <td id="LC302" class="blob-code blob-code-inner js-file-line"><span class="pl-k">if</span>(<span class="pl-k">!</span><span class="pl-k">~</span>index)index<span class="pl-k">=</span><span class="pl-c1">0</span></td>
      </tr>
      <tr>
        <td id="L303" class="blob-num js-line-number" data-line-number="303"></td>
        <td id="LC303" class="blob-code blob-code-inner js-file-line"><span class="pl-smi">$items</span>.<span class="pl-en">eq</span>(index).<span class="pl-en">trigger</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>focus<span class="pl-pds">&#39;</span></span>)}</td>
      </tr>
      <tr>
        <td id="L304" class="blob-num js-line-number" data-line-number="304"></td>
        <td id="LC304" class="blob-code blob-code-inner js-file-line"><span class="pl-k">function</span> <span class="pl-en">Plugin</span>(<span class="pl-smi">option</span>){<span class="pl-k">return</span> <span class="pl-c1">this</span>.<span class="pl-en">each</span>(<span class="pl-k">function</span>(){<span class="pl-k">var</span> $this<span class="pl-k">=</span><span class="pl-en">$</span>(<span class="pl-c1">this</span>)</td>
      </tr>
      <tr>
        <td id="L305" class="blob-num js-line-number" data-line-number="305"></td>
        <td id="LC305" class="blob-code blob-code-inner js-file-line"><span class="pl-k">var</span> data<span class="pl-k">=</span><span class="pl-smi">$this</span>.<span class="pl-c1">data</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>bs.dropdown<span class="pl-pds">&#39;</span></span>)</td>
      </tr>
      <tr>
        <td id="L306" class="blob-num js-line-number" data-line-number="306"></td>
        <td id="LC306" class="blob-code blob-code-inner js-file-line"><span class="pl-k">if</span>(<span class="pl-k">!</span>data)<span class="pl-smi">$this</span>.<span class="pl-c1">data</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>bs.dropdown<span class="pl-pds">&#39;</span></span>,(data<span class="pl-k">=</span><span class="pl-k">new</span> <span class="pl-en">Dropdown</span>(<span class="pl-c1">this</span>)))</td>
      </tr>
      <tr>
        <td id="L307" class="blob-num js-line-number" data-line-number="307"></td>
        <td id="LC307" class="blob-code blob-code-inner js-file-line"><span class="pl-k">if</span>(<span class="pl-k">typeof</span> option<span class="pl-k">==</span><span class="pl-s"><span class="pl-pds">&#39;</span>string<span class="pl-pds">&#39;</span></span>)data[option].<span class="pl-c1">call</span>($this)})}</td>
      </tr>
      <tr>
        <td id="L308" class="blob-num js-line-number" data-line-number="308"></td>
        <td id="LC308" class="blob-code blob-code-inner js-file-line"><span class="pl-k">var</span> old<span class="pl-k">=</span><span class="pl-smi">$</span>.<span class="pl-smi">fn</span>.<span class="pl-smi">dropdown</span></td>
      </tr>
      <tr>
        <td id="L309" class="blob-num js-line-number" data-line-number="309"></td>
        <td id="LC309" class="blob-code blob-code-inner js-file-line"><span class="pl-smi">$</span>.<span class="pl-smi">fn</span>.<span class="pl-smi">dropdown</span><span class="pl-k">=</span><span class="pl-c1">Plugin</span></td>
      </tr>
      <tr>
        <td id="L310" class="blob-num js-line-number" data-line-number="310"></td>
        <td id="LC310" class="blob-code blob-code-inner js-file-line"><span class="pl-smi">$</span>.<span class="pl-smi">fn</span>.<span class="pl-smi">dropdown</span>.<span class="pl-smi">Constructor</span><span class="pl-k">=</span>Dropdown</td>
      </tr>
      <tr>
        <td id="L311" class="blob-num js-line-number" data-line-number="311"></td>
        <td id="LC311" class="blob-code blob-code-inner js-file-line"><span class="pl-smi">$</span>.<span class="pl-smi">fn</span>.<span class="pl-smi">dropdown</span>.<span class="pl-en">noConflict</span><span class="pl-k">=</span><span class="pl-k">function</span>(){<span class="pl-smi">$</span>.<span class="pl-smi">fn</span>.<span class="pl-smi">dropdown</span><span class="pl-k">=</span>old</td>
      </tr>
      <tr>
        <td id="L312" class="blob-num js-line-number" data-line-number="312"></td>
        <td id="LC312" class="blob-code blob-code-inner js-file-line"><span class="pl-k">return</span> <span class="pl-c1">this</span>}</td>
      </tr>
      <tr>
        <td id="L313" class="blob-num js-line-number" data-line-number="313"></td>
        <td id="LC313" class="blob-code blob-code-inner js-file-line"><span class="pl-en">$</span>(<span class="pl-c1">document</span>).<span class="pl-en">on</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>click.bs.dropdown.data-api<span class="pl-pds">&#39;</span></span>,clearMenus).<span class="pl-en">on</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>click.bs.dropdown.data-api<span class="pl-pds">&#39;</span></span>,<span class="pl-s"><span class="pl-pds">&#39;</span>.dropdown form<span class="pl-pds">&#39;</span></span>,<span class="pl-k">function</span>(<span class="pl-smi">e</span>){<span class="pl-smi">e</span>.<span class="pl-c1">stopPropagation</span>()}).<span class="pl-en">on</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>click.bs.dropdown.data-api<span class="pl-pds">&#39;</span></span>,toggle,<span class="pl-smi">Dropdown</span>.<span class="pl-c1">prototype</span>.<span class="pl-smi">toggle</span>).<span class="pl-en">on</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>keydown.bs.dropdown.data-api<span class="pl-pds">&#39;</span></span>,toggle,<span class="pl-smi">Dropdown</span>.<span class="pl-c1">prototype</span>.<span class="pl-smi">keydown</span>).<span class="pl-en">on</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>keydown.bs.dropdown.data-api<span class="pl-pds">&#39;</span></span>,<span class="pl-s"><span class="pl-pds">&#39;</span>.dropdown-menu<span class="pl-pds">&#39;</span></span>,<span class="pl-smi">Dropdown</span>.<span class="pl-c1">prototype</span>.<span class="pl-smi">keydown</span>)}(jQuery);<span class="pl-k">+</span><span class="pl-k">function</span>(<span class="pl-smi">$</span>){<span class="pl-s"><span class="pl-pds">&#39;</span>use strict<span class="pl-pds">&#39;</span></span>;<span class="pl-k">var</span> <span class="pl-en">Modal</span><span class="pl-k">=</span><span class="pl-k">function</span>(<span class="pl-smi">element</span>,<span class="pl-smi">options</span>){<span class="pl-c1">this</span>.<span class="pl-c1">options</span><span class="pl-k">=</span>options</td>
      </tr>
      <tr>
        <td id="L314" class="blob-num js-line-number" data-line-number="314"></td>
        <td id="LC314" class="blob-code blob-code-inner js-file-line"><span class="pl-c1">this</span>.<span class="pl-smi">$body</span><span class="pl-k">=</span><span class="pl-en">$</span>(<span class="pl-c1">document</span>.<span class="pl-c1">body</span>)</td>
      </tr>
      <tr>
        <td id="L315" class="blob-num js-line-number" data-line-number="315"></td>
        <td id="LC315" class="blob-code blob-code-inner js-file-line"><span class="pl-c1">this</span>.<span class="pl-smi">$element</span><span class="pl-k">=</span><span class="pl-en">$</span>(element)</td>
      </tr>
      <tr>
        <td id="L316" class="blob-num js-line-number" data-line-number="316"></td>
        <td id="LC316" class="blob-code blob-code-inner js-file-line"><span class="pl-c1">this</span>.<span class="pl-smi">$dialog</span><span class="pl-k">=</span><span class="pl-c1">this</span>.<span class="pl-smi">$element</span>.<span class="pl-c1">find</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>.modal-dialog<span class="pl-pds">&#39;</span></span>)</td>
      </tr>
      <tr>
        <td id="L317" class="blob-num js-line-number" data-line-number="317"></td>
        <td id="LC317" class="blob-code blob-code-inner js-file-line"><span class="pl-c1">this</span>.<span class="pl-smi">$backdrop</span><span class="pl-k">=</span><span class="pl-c1">null</span></td>
      </tr>
      <tr>
        <td id="L318" class="blob-num js-line-number" data-line-number="318"></td>
        <td id="LC318" class="blob-code blob-code-inner js-file-line"><span class="pl-c1">this</span>.<span class="pl-smi">isShown</span><span class="pl-k">=</span><span class="pl-c1">null</span></td>
      </tr>
      <tr>
        <td id="L319" class="blob-num js-line-number" data-line-number="319"></td>
        <td id="LC319" class="blob-code blob-code-inner js-file-line"><span class="pl-c1">this</span>.<span class="pl-smi">originalBodyPad</span><span class="pl-k">=</span><span class="pl-c1">null</span></td>
      </tr>
      <tr>
        <td id="L320" class="blob-num js-line-number" data-line-number="320"></td>
        <td id="LC320" class="blob-code blob-code-inner js-file-line"><span class="pl-c1">this</span>.<span class="pl-smi">scrollbarWidth</span><span class="pl-k">=</span><span class="pl-c1">0</span></td>
      </tr>
      <tr>
        <td id="L321" class="blob-num js-line-number" data-line-number="321"></td>
        <td id="LC321" class="blob-code blob-code-inner js-file-line"><span class="pl-c1">this</span>.<span class="pl-smi">ignoreBackdropClick</span><span class="pl-k">=</span><span class="pl-c1">false</span></td>
      </tr>
      <tr>
        <td id="L322" class="blob-num js-line-number" data-line-number="322"></td>
        <td id="LC322" class="blob-code blob-code-inner js-file-line"><span class="pl-k">if</span>(<span class="pl-c1">this</span>.<span class="pl-c1">options</span>.<span class="pl-smi">remote</span>){<span class="pl-c1">this</span>.<span class="pl-smi">$element</span>.<span class="pl-c1">find</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>.modal-content<span class="pl-pds">&#39;</span></span>).<span class="pl-c1">load</span>(<span class="pl-c1">this</span>.<span class="pl-c1">options</span>.<span class="pl-smi">remote</span>,<span class="pl-smi">$</span>.<span class="pl-en">proxy</span>(<span class="pl-k">function</span>(){<span class="pl-c1">this</span>.<span class="pl-smi">$element</span>.<span class="pl-en">trigger</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>loaded.bs.modal<span class="pl-pds">&#39;</span></span>)},<span class="pl-c1">this</span>))}}</td>
      </tr>
      <tr>
        <td id="L323" class="blob-num js-line-number" data-line-number="323"></td>
        <td id="LC323" class="blob-code blob-code-inner js-file-line"><span class="pl-smi">Modal</span>.<span class="pl-c1">VERSION</span><span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">&#39;</span>3.3.7<span class="pl-pds">&#39;</span></span></td>
      </tr>
      <tr>
        <td id="L324" class="blob-num js-line-number" data-line-number="324"></td>
        <td id="LC324" class="blob-code blob-code-inner js-file-line"><span class="pl-smi">Modal</span>.<span class="pl-c1">TRANSITION_DURATION</span><span class="pl-k">=</span><span class="pl-c1">300</span></td>
      </tr>
      <tr>
        <td id="L325" class="blob-num js-line-number" data-line-number="325"></td>
        <td id="LC325" class="blob-code blob-code-inner js-file-line"><span class="pl-smi">Modal</span>.<span class="pl-c1">BACKDROP_TRANSITION_DURATION</span><span class="pl-k">=</span><span class="pl-c1">150</span></td>
      </tr>
      <tr>
        <td id="L326" class="blob-num js-line-number" data-line-number="326"></td>
        <td id="LC326" class="blob-code blob-code-inner js-file-line"><span class="pl-smi">Modal</span>.<span class="pl-c1">DEFAULTS</span><span class="pl-k">=</span>{backdrop<span class="pl-k">:</span><span class="pl-c1">true</span>,keyboard<span class="pl-k">:</span><span class="pl-c1">true</span>,show<span class="pl-k">:</span><span class="pl-c1">true</span>}</td>
      </tr>
      <tr>
        <td id="L327" class="blob-num js-line-number" data-line-number="327"></td>
        <td id="LC327" class="blob-code blob-code-inner js-file-line"><span class="pl-smi">Modal</span>.<span class="pl-c1">prototype</span>.<span class="pl-en">toggle</span><span class="pl-k">=</span><span class="pl-k">function</span>(<span class="pl-smi">_relatedTarget</span>){<span class="pl-k">return</span> <span class="pl-c1">this</span>.<span class="pl-smi">isShown</span><span class="pl-k">?</span><span class="pl-c1">this</span>.<span class="pl-en">hide</span>()<span class="pl-k">:</span><span class="pl-c1">this</span>.<span class="pl-en">show</span>(_relatedTarget)}</td>
      </tr>
      <tr>
        <td id="L328" class="blob-num js-line-number" data-line-number="328"></td>
        <td id="LC328" class="blob-code blob-code-inner js-file-line"><span class="pl-smi">Modal</span>.<span class="pl-c1">prototype</span>.<span class="pl-en">show</span><span class="pl-k">=</span><span class="pl-k">function</span>(<span class="pl-smi">_relatedTarget</span>){<span class="pl-k">var</span> that<span class="pl-k">=</span><span class="pl-c1">this</span></td>
      </tr>
      <tr>
        <td id="L329" class="blob-num js-line-number" data-line-number="329"></td>
        <td id="LC329" class="blob-code blob-code-inner js-file-line"><span class="pl-k">var</span> e<span class="pl-k">=</span><span class="pl-smi">$</span>.<span class="pl-en">Event</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>show.bs.modal<span class="pl-pds">&#39;</span></span>,{relatedTarget<span class="pl-k">:</span>_relatedTarget})</td>
      </tr>
      <tr>
        <td id="L330" class="blob-num js-line-number" data-line-number="330"></td>
        <td id="LC330" class="blob-code blob-code-inner js-file-line"><span class="pl-c1">this</span>.<span class="pl-smi">$element</span>.<span class="pl-en">trigger</span>(e)</td>
      </tr>
      <tr>
        <td id="L331" class="blob-num js-line-number" data-line-number="331"></td>
        <td id="LC331" class="blob-code blob-code-inner js-file-line"><span class="pl-k">if</span>(<span class="pl-c1">this</span>.<span class="pl-smi">isShown</span><span class="pl-k">||</span><span class="pl-smi">e</span>.<span class="pl-en">isDefaultPrevented</span>())<span class="pl-k">return</span></td>
      </tr>
      <tr>
        <td id="L332" class="blob-num js-line-number" data-line-number="332"></td>
        <td id="LC332" class="blob-code blob-code-inner js-file-line"><span class="pl-c1">this</span>.<span class="pl-smi">isShown</span><span class="pl-k">=</span><span class="pl-c1">true</span></td>
      </tr>
      <tr>
        <td id="L333" class="blob-num js-line-number" data-line-number="333"></td>
        <td id="LC333" class="blob-code blob-code-inner js-file-line"><span class="pl-c1">this</span>.<span class="pl-en">checkScrollbar</span>()</td>
      </tr>
      <tr>
        <td id="L334" class="blob-num js-line-number" data-line-number="334"></td>
        <td id="LC334" class="blob-code blob-code-inner js-file-line"><span class="pl-c1">this</span>.<span class="pl-en">setScrollbar</span>()</td>
      </tr>
      <tr>
        <td id="L335" class="blob-num js-line-number" data-line-number="335"></td>
        <td id="LC335" class="blob-code blob-code-inner js-file-line"><span class="pl-c1">this</span>.<span class="pl-smi">$body</span>.<span class="pl-en">addClass</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>modal-open<span class="pl-pds">&#39;</span></span>)</td>
      </tr>
      <tr>
        <td id="L336" class="blob-num js-line-number" data-line-number="336"></td>
        <td id="LC336" class="blob-code blob-code-inner js-file-line"><span class="pl-c1">this</span>.<span class="pl-en">escape</span>()</td>
      </tr>
      <tr>
        <td id="L337" class="blob-num js-line-number" data-line-number="337"></td>
        <td id="LC337" class="blob-code blob-code-inner js-file-line"><span class="pl-c1">this</span>.<span class="pl-c1">resize</span>()</td>
      </tr>
      <tr>
        <td id="L338" class="blob-num js-line-number" data-line-number="338"></td>
        <td id="LC338" class="blob-code blob-code-inner js-file-line"><span class="pl-c1">this</span>.<span class="pl-smi">$element</span>.<span class="pl-en">on</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>click.dismiss.bs.modal<span class="pl-pds">&#39;</span></span>,<span class="pl-s"><span class="pl-pds">&#39;</span>[data-dismiss=&quot;modal&quot;]<span class="pl-pds">&#39;</span></span>,<span class="pl-smi">$</span>.<span class="pl-en">proxy</span>(<span class="pl-c1">this</span>.<span class="pl-smi">hide</span>,<span class="pl-c1">this</span>))</td>
      </tr>
      <tr>
        <td id="L339" class="blob-num js-line-number" data-line-number="339"></td>
        <td id="LC339" class="blob-code blob-code-inner js-file-line"><span class="pl-c1">this</span>.<span class="pl-smi">$dialog</span>.<span class="pl-en">on</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>mousedown.dismiss.bs.modal<span class="pl-pds">&#39;</span></span>,<span class="pl-k">function</span>(){<span class="pl-smi">that</span>.<span class="pl-smi">$element</span>.<span class="pl-en">one</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>mouseup.dismiss.bs.modal<span class="pl-pds">&#39;</span></span>,<span class="pl-k">function</span>(<span class="pl-smi">e</span>){<span class="pl-k">if</span>(<span class="pl-en">$</span>(<span class="pl-smi">e</span>.<span class="pl-c1">target</span>).<span class="pl-en">is</span>(<span class="pl-smi">that</span>.<span class="pl-smi">$element</span>))<span class="pl-smi">that</span>.<span class="pl-smi">ignoreBackdropClick</span><span class="pl-k">=</span><span class="pl-c1">true</span>})})</td>
      </tr>
      <tr>
        <td id="L340" class="blob-num js-line-number" data-line-number="340"></td>
        <td id="LC340" class="blob-code blob-code-inner js-file-line"><span class="pl-c1">this</span>.<span class="pl-en">backdrop</span>(<span class="pl-k">function</span>(){<span class="pl-k">var</span> transition<span class="pl-k">=</span><span class="pl-smi">$</span>.<span class="pl-smi">support</span>.<span class="pl-smi">transition</span><span class="pl-k">&amp;&amp;</span><span class="pl-smi">that</span>.<span class="pl-smi">$element</span>.<span class="pl-en">hasClass</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>fade<span class="pl-pds">&#39;</span></span>)</td>
      </tr>
      <tr>
        <td id="L341" class="blob-num js-line-number" data-line-number="341"></td>
        <td id="LC341" class="blob-code blob-code-inner js-file-line"><span class="pl-k">if</span>(<span class="pl-k">!</span><span class="pl-smi">that</span>.<span class="pl-smi">$element</span>.<span class="pl-c1">parent</span>().<span class="pl-c1">length</span>){<span class="pl-smi">that</span>.<span class="pl-smi">$element</span>.<span class="pl-en">appendTo</span>(<span class="pl-smi">that</span>.<span class="pl-smi">$body</span>)}</td>
      </tr>
      <tr>
        <td id="L342" class="blob-num js-line-number" data-line-number="342"></td>
        <td id="LC342" class="blob-code blob-code-inner js-file-line"><span class="pl-smi">that</span>.<span class="pl-smi">$element</span>.<span class="pl-en">show</span>().<span class="pl-en">scrollTop</span>(<span class="pl-c1">0</span>)</td>
      </tr>
      <tr>
        <td id="L343" class="blob-num js-line-number" data-line-number="343"></td>
        <td id="LC343" class="blob-code blob-code-inner js-file-line"><span class="pl-smi">that</span>.<span class="pl-en">adjustDialog</span>()</td>
      </tr>
      <tr>
        <td id="L344" class="blob-num js-line-number" data-line-number="344"></td>
        <td id="LC344" class="blob-code blob-code-inner js-file-line"><span class="pl-k">if</span>(transition){<span class="pl-smi">that</span>.<span class="pl-smi">$element</span>[<span class="pl-c1">0</span>].<span class="pl-smi">offsetWidth</span>}</td>
      </tr>
      <tr>
        <td id="L345" class="blob-num js-line-number" data-line-number="345"></td>
        <td id="LC345" class="blob-code blob-code-inner js-file-line"><span class="pl-smi">that</span>.<span class="pl-smi">$element</span>.<span class="pl-en">addClass</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>in<span class="pl-pds">&#39;</span></span>)</td>
      </tr>
      <tr>
        <td id="L346" class="blob-num js-line-number" data-line-number="346"></td>
        <td id="LC346" class="blob-code blob-code-inner js-file-line"><span class="pl-smi">that</span>.<span class="pl-en">enforceFocus</span>()</td>
      </tr>
      <tr>
        <td id="L347" class="blob-num js-line-number" data-line-number="347"></td>
        <td id="LC347" class="blob-code blob-code-inner js-file-line"><span class="pl-k">var</span> e<span class="pl-k">=</span><span class="pl-smi">$</span>.<span class="pl-en">Event</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>shown.bs.modal<span class="pl-pds">&#39;</span></span>,{relatedTarget<span class="pl-k">:</span>_relatedTarget})</td>
      </tr>
      <tr>
        <td id="L348" class="blob-num js-line-number" data-line-number="348"></td>
        <td id="LC348" class="blob-code blob-code-inner js-file-line">transition<span class="pl-k">?</span><span class="pl-smi">that</span>.<span class="pl-smi">$dialog</span>.<span class="pl-en">one</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>bsTransitionEnd<span class="pl-pds">&#39;</span></span>,<span class="pl-k">function</span>(){<span class="pl-smi">that</span>.<span class="pl-smi">$element</span>.<span class="pl-en">trigger</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>focus<span class="pl-pds">&#39;</span></span>).<span class="pl-en">trigger</span>(e)}).<span class="pl-en">emulateTransitionEnd</span>(<span class="pl-smi">Modal</span>.<span class="pl-c1">TRANSITION_DURATION</span>)<span class="pl-k">:</span><span class="pl-smi">that</span>.<span class="pl-smi">$element</span>.<span class="pl-en">trigger</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>focus<span class="pl-pds">&#39;</span></span>).<span class="pl-en">trigger</span>(e)})}</td>
      </tr>
      <tr>
        <td id="L349" class="blob-num js-line-number" data-line-number="349"></td>
        <td id="LC349" class="blob-code blob-code-inner js-file-line"><span class="pl-smi">Modal</span>.<span class="pl-c1">prototype</span>.<span class="pl-en">hide</span><span class="pl-k">=</span><span class="pl-k">function</span>(<span class="pl-smi">e</span>){<span class="pl-k">if</span>(e)<span class="pl-smi">e</span>.<span class="pl-c1">preventDefault</span>()</td>
      </tr>
      <tr>
        <td id="L350" class="blob-num js-line-number" data-line-number="350"></td>
        <td id="LC350" class="blob-code blob-code-inner js-file-line">e<span class="pl-k">=</span><span class="pl-smi">$</span>.<span class="pl-en">Event</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>hide.bs.modal<span class="pl-pds">&#39;</span></span>)</td>
      </tr>
      <tr>
        <td id="L351" class="blob-num js-line-number" data-line-number="351"></td>
        <td id="LC351" class="blob-code blob-code-inner js-file-line"><span class="pl-c1">this</span>.<span class="pl-smi">$element</span>.<span class="pl-en">trigger</span>(e)</td>
      </tr>
      <tr>
        <td id="L352" class="blob-num js-line-number" data-line-number="352"></td>
        <td id="LC352" class="blob-code blob-code-inner js-file-line"><span class="pl-k">if</span>(<span class="pl-k">!</span><span class="pl-c1">this</span>.<span class="pl-smi">isShown</span><span class="pl-k">||</span><span class="pl-smi">e</span>.<span class="pl-en">isDefaultPrevented</span>())<span class="pl-k">return</span></td>
      </tr>
      <tr>
        <td id="L353" class="blob-num js-line-number" data-line-number="353"></td>
        <td id="LC353" class="blob-code blob-code-inner js-file-line"><span class="pl-c1">this</span>.<span class="pl-smi">isShown</span><span class="pl-k">=</span><span class="pl-c1">false</span></td>
      </tr>
      <tr>
        <td id="L354" class="blob-num js-line-number" data-line-number="354"></td>
        <td id="LC354" class="blob-code blob-code-inner js-file-line"><span class="pl-c1">this</span>.<span class="pl-en">escape</span>()</td>
      </tr>
      <tr>
        <td id="L355" class="blob-num js-line-number" data-line-number="355"></td>
        <td id="LC355" class="blob-code blob-code-inner js-file-line"><span class="pl-c1">this</span>.<span class="pl-c1">resize</span>()</td>
      </tr>
      <tr>
        <td id="L356" class="blob-num js-line-number" data-line-number="356"></td>
        <td id="LC356" class="blob-code blob-code-inner js-file-line"><span class="pl-en">$</span>(<span class="pl-c1">document</span>).<span class="pl-en">off</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>focusin.bs.modal<span class="pl-pds">&#39;</span></span>)</td>
      </tr>
      <tr>
        <td id="L357" class="blob-num js-line-number" data-line-number="357"></td>
        <td id="LC357" class="blob-code blob-code-inner js-file-line"><span class="pl-c1">this</span>.<span class="pl-smi">$element</span>.<span class="pl-en">removeClass</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>in<span class="pl-pds">&#39;</span></span>).<span class="pl-en">off</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>click.dismiss.bs.modal<span class="pl-pds">&#39;</span></span>).<span class="pl-en">off</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>mouseup.dismiss.bs.modal<span class="pl-pds">&#39;</span></span>)</td>
      </tr>
      <tr>
        <td id="L358" class="blob-num js-line-number" data-line-number="358"></td>
        <td id="LC358" class="blob-code blob-code-inner js-file-line"><span class="pl-c1">this</span>.<span class="pl-smi">$dialog</span>.<span class="pl-en">off</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>mousedown.dismiss.bs.modal<span class="pl-pds">&#39;</span></span>)</td>
      </tr>
      <tr>
        <td id="L359" class="blob-num js-line-number" data-line-number="359"></td>
        <td id="LC359" class="blob-code blob-code-inner js-file-line"><span class="pl-smi">$</span>.<span class="pl-smi">support</span>.<span class="pl-smi">transition</span><span class="pl-k">&amp;&amp;</span><span class="pl-c1">this</span>.<span class="pl-smi">$element</span>.<span class="pl-en">hasClass</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>fade<span class="pl-pds">&#39;</span></span>)<span class="pl-k">?</span><span class="pl-c1">this</span>.<span class="pl-smi">$element</span>.<span class="pl-en">one</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>bsTransitionEnd<span class="pl-pds">&#39;</span></span>,<span class="pl-smi">$</span>.<span class="pl-en">proxy</span>(<span class="pl-c1">this</span>.<span class="pl-smi">hideModal</span>,<span class="pl-c1">this</span>)).<span class="pl-en">emulateTransitionEnd</span>(<span class="pl-smi">Modal</span>.<span class="pl-c1">TRANSITION_DURATION</span>)<span class="pl-k">:</span><span class="pl-c1">this</span>.<span class="pl-en">hideModal</span>()}</td>
      </tr>
      <tr>
        <td id="L360" class="blob-num js-line-number" data-line-number="360"></td>
        <td id="LC360" class="blob-code blob-code-inner js-file-line"><span class="pl-smi">Modal</span>.<span class="pl-c1">prototype</span>.<span class="pl-en">enforceFocus</span><span class="pl-k">=</span><span class="pl-k">function</span>(){<span class="pl-en">$</span>(<span class="pl-c1">document</span>).<span class="pl-en">off</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>focusin.bs.modal<span class="pl-pds">&#39;</span></span>).<span class="pl-en">on</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>focusin.bs.modal<span class="pl-pds">&#39;</span></span>,<span class="pl-smi">$</span>.<span class="pl-en">proxy</span>(<span class="pl-k">function</span>(<span class="pl-smi">e</span>){<span class="pl-k">if</span>(<span class="pl-c1">document</span><span class="pl-k">!==</span><span class="pl-smi">e</span>.<span class="pl-c1">target</span><span class="pl-k">&amp;&amp;</span><span class="pl-c1">this</span>.<span class="pl-smi">$element</span>[<span class="pl-c1">0</span>]<span class="pl-k">!==</span><span class="pl-smi">e</span>.<span class="pl-c1">target</span><span class="pl-k">&amp;&amp;!</span><span class="pl-c1">this</span>.<span class="pl-smi">$element</span>.<span class="pl-c1">has</span>(<span class="pl-smi">e</span>.<span class="pl-c1">target</span>).<span class="pl-c1">length</span>){<span class="pl-c1">this</span>.<span class="pl-smi">$element</span>.<span class="pl-en">trigger</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>focus<span class="pl-pds">&#39;</span></span>)}},<span class="pl-c1">this</span>))}</td>
      </tr>
      <tr>
        <td id="L361" class="blob-num js-line-number" data-line-number="361"></td>
        <td id="LC361" class="blob-code blob-code-inner js-file-line"><span class="pl-smi">Modal</span>.<span class="pl-c1">prototype</span>.<span class="pl-en">escape</span><span class="pl-k">=</span><span class="pl-k">function</span>(){<span class="pl-k">if</span>(<span class="pl-c1">this</span>.<span class="pl-smi">isShown</span><span class="pl-k">&amp;&amp;</span><span class="pl-c1">this</span>.<span class="pl-c1">options</span>.<span class="pl-smi">keyboard</span>){<span class="pl-c1">this</span>.<span class="pl-smi">$element</span>.<span class="pl-en">on</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>keydown.dismiss.bs.modal<span class="pl-pds">&#39;</span></span>,<span class="pl-smi">$</span>.<span class="pl-en">proxy</span>(<span class="pl-k">function</span>(<span class="pl-smi">e</span>){<span class="pl-smi">e</span>.<span class="pl-smi">which</span><span class="pl-k">==</span><span class="pl-c1">27</span><span class="pl-k">&amp;&amp;</span><span class="pl-c1">this</span>.<span class="pl-en">hide</span>()},<span class="pl-c1">this</span>))}<span class="pl-k">else</span> <span class="pl-k">if</span>(<span class="pl-k">!</span><span class="pl-c1">this</span>.<span class="pl-smi">isShown</span>){<span class="pl-c1">this</span>.<span class="pl-smi">$element</span>.<span class="pl-en">off</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>keydown.dismiss.bs.modal<span class="pl-pds">&#39;</span></span>)}}</td>
      </tr>
      <tr>
        <td id="L362" class="blob-num js-line-number" data-line-number="362"></td>
        <td id="LC362" class="blob-code blob-code-inner js-file-line"><span class="pl-smi">Modal</span>.<span class="pl-c1">prototype</span>.<span class="pl-en">resize</span><span class="pl-k">=</span><span class="pl-k">function</span>(){<span class="pl-k">if</span>(<span class="pl-c1">this</span>.<span class="pl-smi">isShown</span>){<span class="pl-en">$</span>(<span class="pl-c1">window</span>).<span class="pl-en">on</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>resize.bs.modal<span class="pl-pds">&#39;</span></span>,<span class="pl-smi">$</span>.<span class="pl-en">proxy</span>(<span class="pl-c1">this</span>.<span class="pl-smi">handleUpdate</span>,<span class="pl-c1">this</span>))}<span class="pl-k">else</span>{<span class="pl-en">$</span>(<span class="pl-c1">window</span>).<span class="pl-en">off</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>resize.bs.modal<span class="pl-pds">&#39;</span></span>)}}</td>
      </tr>
      <tr>
        <td id="L363" class="blob-num js-line-number" data-line-number="363"></td>
        <td id="LC363" class="blob-code blob-code-inner js-file-line"><span class="pl-smi">Modal</span>.<span class="pl-c1">prototype</span>.<span class="pl-en">hideModal</span><span class="pl-k">=</span><span class="pl-k">function</span>(){<span class="pl-k">var</span> that<span class="pl-k">=</span><span class="pl-c1">this</span></td>
      </tr>
      <tr>
        <td id="L364" class="blob-num js-line-number" data-line-number="364"></td>
        <td id="LC364" class="blob-code blob-code-inner js-file-line"><span class="pl-c1">this</span>.<span class="pl-smi">$element</span>.<span class="pl-en">hide</span>()</td>
      </tr>
      <tr>
        <td id="L365" class="blob-num js-line-number" data-line-number="365"></td>
        <td id="LC365" class="blob-code blob-code-inner js-file-line"><span class="pl-c1">this</span>.<span class="pl-en">backdrop</span>(<span class="pl-k">function</span>(){<span class="pl-smi">that</span>.<span class="pl-smi">$body</span>.<span class="pl-en">removeClass</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>modal-open<span class="pl-pds">&#39;</span></span>)</td>
      </tr>
      <tr>
        <td id="L366" class="blob-num js-line-number" data-line-number="366"></td>
        <td id="LC366" class="blob-code blob-code-inner js-file-line"><span class="pl-smi">that</span>.<span class="pl-en">resetAdjustments</span>()</td>
      </tr>
      <tr>
        <td id="L367" class="blob-num js-line-number" data-line-number="367"></td>
        <td id="LC367" class="blob-code blob-code-inner js-file-line"><span class="pl-smi">that</span>.<span class="pl-en">resetScrollbar</span>()</td>
      </tr>
      <tr>
        <td id="L368" class="blob-num js-line-number" data-line-number="368"></td>
        <td id="LC368" class="blob-code blob-code-inner js-file-line"><span class="pl-smi">that</span>.<span class="pl-smi">$element</span>.<span class="pl-en">trigger</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>hidden.bs.modal<span class="pl-pds">&#39;</span></span>)})}</td>
      </tr>
      <tr>
        <td id="L369" class="blob-num js-line-number" data-line-number="369"></td>
        <td id="LC369" class="blob-code blob-code-inner js-file-line"><span class="pl-smi">Modal</span>.<span class="pl-c1">prototype</span>.<span class="pl-en">removeBackdrop</span><span class="pl-k">=</span><span class="pl-k">function</span>(){<span class="pl-c1">this</span>.<span class="pl-smi">$backdrop</span><span class="pl-k">&amp;&amp;</span><span class="pl-c1">this</span>.<span class="pl-smi">$backdrop</span>.<span class="pl-c1">remove</span>()</td>
      </tr>
      <tr>
        <td id="L370" class="blob-num js-line-number" data-line-number="370"></td>
        <td id="LC370" class="blob-code blob-code-inner js-file-line"><span class="pl-c1">this</span>.<span class="pl-smi">$backdrop</span><span class="pl-k">=</span><span class="pl-c1">null</span>}</td>
      </tr>
      <tr>
        <td id="L371" class="blob-num js-line-number" data-line-number="371"></td>
        <td id="LC371" class="blob-code blob-code-inner js-file-line"><span class="pl-smi">Modal</span>.<span class="pl-c1">prototype</span>.<span class="pl-en">backdrop</span><span class="pl-k">=</span><span class="pl-k">function</span>(<span class="pl-smi">callback</span>){<span class="pl-k">var</span> that<span class="pl-k">=</span><span class="pl-c1">this</span></td>
      </tr>
      <tr>
        <td id="L372" class="blob-num js-line-number" data-line-number="372"></td>
        <td id="LC372" class="blob-code blob-code-inner js-file-line"><span class="pl-k">var</span> animate<span class="pl-k">=</span><span class="pl-c1">this</span>.<span class="pl-smi">$element</span>.<span class="pl-en">hasClass</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>fade<span class="pl-pds">&#39;</span></span>)<span class="pl-k">?</span><span class="pl-s"><span class="pl-pds">&#39;</span>fade<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span></td>
      </tr>
      <tr>
        <td id="L373" class="blob-num js-line-number" data-line-number="373"></td>
        <td id="LC373" class="blob-code blob-code-inner js-file-line"><span class="pl-k">if</span>(<span class="pl-c1">this</span>.<span class="pl-smi">isShown</span><span class="pl-k">&amp;&amp;</span><span class="pl-c1">this</span>.<span class="pl-c1">options</span>.<span class="pl-smi">backdrop</span>){<span class="pl-k">var</span> doAnimate<span class="pl-k">=</span><span class="pl-smi">$</span>.<span class="pl-smi">support</span>.<span class="pl-smi">transition</span><span class="pl-k">&amp;&amp;</span>animate</td>
      </tr>
      <tr>
        <td id="L374" class="blob-num js-line-number" data-line-number="374"></td>
        <td id="LC374" class="blob-code blob-code-inner js-file-line"><span class="pl-c1">this</span>.<span class="pl-smi">$backdrop</span><span class="pl-k">=</span><span class="pl-en">$</span>(<span class="pl-c1">document</span>.<span class="pl-c1">createElement</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>div<span class="pl-pds">&#39;</span></span>)).<span class="pl-en">addClass</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>modal-backdrop <span class="pl-pds">&#39;</span></span><span class="pl-k">+</span>animate).<span class="pl-en">appendTo</span>(<span class="pl-c1">this</span>.<span class="pl-smi">$body</span>)</td>
      </tr>
      <tr>
        <td id="L375" class="blob-num js-line-number" data-line-number="375"></td>
        <td id="LC375" class="blob-code blob-code-inner js-file-line"><span class="pl-c1">this</span>.<span class="pl-smi">$element</span>.<span class="pl-en">on</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>click.dismiss.bs.modal<span class="pl-pds">&#39;</span></span>,<span class="pl-smi">$</span>.<span class="pl-en">proxy</span>(<span class="pl-k">function</span>(<span class="pl-smi">e</span>){<span class="pl-k">if</span>(<span class="pl-c1">this</span>.<span class="pl-smi">ignoreBackdropClick</span>){<span class="pl-c1">this</span>.<span class="pl-smi">ignoreBackdropClick</span><span class="pl-k">=</span><span class="pl-c1">false</span></td>
      </tr>
      <tr>
        <td id="L376" class="blob-num js-line-number" data-line-number="376"></td>
        <td id="LC376" class="blob-code blob-code-inner js-file-line"><span class="pl-k">return</span>}</td>
      </tr>
      <tr>
        <td id="L377" class="blob-num js-line-number" data-line-number="377"></td>
        <td id="LC377" class="blob-code blob-code-inner js-file-line"><span class="pl-k">if</span>(<span class="pl-smi">e</span>.<span class="pl-c1">target</span><span class="pl-k">!==</span><span class="pl-smi">e</span>.<span class="pl-smi">currentTarget</span>)<span class="pl-k">return</span></td>
      </tr>
      <tr>
        <td id="L378" class="blob-num js-line-number" data-line-number="378"></td>
        <td id="LC378" class="blob-code blob-code-inner js-file-line"><span class="pl-c1">this</span>.<span class="pl-c1">options</span>.<span class="pl-smi">backdrop</span><span class="pl-k">==</span><span class="pl-s"><span class="pl-pds">&#39;</span>static<span class="pl-pds">&#39;</span></span><span class="pl-k">?</span><span class="pl-c1">this</span>.<span class="pl-smi">$element</span>[<span class="pl-c1">0</span>].<span class="pl-c1">focus</span>()<span class="pl-k">:</span><span class="pl-c1">this</span>.<span class="pl-en">hide</span>()},<span class="pl-c1">this</span>))</td>
      </tr>
      <tr>
        <td id="L379" class="blob-num js-line-number" data-line-number="379"></td>
        <td id="LC379" class="blob-code blob-code-inner js-file-line"><span class="pl-k">if</span>(doAnimate)<span class="pl-c1">this</span>.<span class="pl-smi">$backdrop</span>[<span class="pl-c1">0</span>].<span class="pl-smi">offsetWidth</span></td>
      </tr>
      <tr>
        <td id="L380" class="blob-num js-line-number" data-line-number="380"></td>
        <td id="LC380" class="blob-code blob-code-inner js-file-line"><span class="pl-c1">this</span>.<span class="pl-smi">$backdrop</span>.<span class="pl-en">addClass</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>in<span class="pl-pds">&#39;</span></span>)</td>
      </tr>
      <tr>
        <td id="L381" class="blob-num js-line-number" data-line-number="381"></td>
        <td id="LC381" class="blob-code blob-code-inner js-file-line"><span class="pl-k">if</span>(<span class="pl-k">!</span>callback)<span class="pl-k">return</span></td>
      </tr>
      <tr>
        <td id="L382" class="blob-num js-line-number" data-line-number="382"></td>
        <td id="LC382" class="blob-code blob-code-inner js-file-line">doAnimate<span class="pl-k">?</span><span class="pl-c1">this</span>.<span class="pl-smi">$backdrop</span>.<span class="pl-en">one</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>bsTransitionEnd<span class="pl-pds">&#39;</span></span>,callback).<span class="pl-en">emulateTransitionEnd</span>(<span class="pl-smi">Modal</span>.<span class="pl-c1">BACKDROP_TRANSITION_DURATION</span>)<span class="pl-k">:</span><span class="pl-en">callback</span>()}<span class="pl-k">else</span> <span class="pl-k">if</span>(<span class="pl-k">!</span><span class="pl-c1">this</span>.<span class="pl-smi">isShown</span><span class="pl-k">&amp;&amp;</span><span class="pl-c1">this</span>.<span class="pl-smi">$backdrop</span>){<span class="pl-c1">this</span>.<span class="pl-smi">$backdrop</span>.<span class="pl-en">removeClass</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>in<span class="pl-pds">&#39;</span></span>)</td>
      </tr>
      <tr>
        <td id="L383" class="blob-num js-line-number" data-line-number="383"></td>
        <td id="LC383" class="blob-code blob-code-inner js-file-line"><span class="pl-k">var</span> <span class="pl-en">callbackRemove</span><span class="pl-k">=</span><span class="pl-k">function</span>(){<span class="pl-smi">that</span>.<span class="pl-en">removeBackdrop</span>()</td>
      </tr>
      <tr>
        <td id="L384" class="blob-num js-line-number" data-line-number="384"></td>
        <td id="LC384" class="blob-code blob-code-inner js-file-line">callback<span class="pl-k">&amp;&amp;</span><span class="pl-en">callback</span>()}</td>
      </tr>
      <tr>
        <td id="L385" class="blob-num js-line-number" data-line-number="385"></td>
        <td id="LC385" class="blob-code blob-code-inner js-file-line"><span class="pl-smi">$</span>.<span class="pl-smi">support</span>.<span class="pl-smi">transition</span><span class="pl-k">&amp;&amp;</span><span class="pl-c1">this</span>.<span class="pl-smi">$element</span>.<span class="pl-en">hasClass</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>fade<span class="pl-pds">&#39;</span></span>)<span class="pl-k">?</span><span class="pl-c1">this</span>.<span class="pl-smi">$backdrop</span>.<span class="pl-en">one</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>bsTransitionEnd<span class="pl-pds">&#39;</span></span>,callbackRemove).<span class="pl-en">emulateTransitionEnd</span>(<span class="pl-smi">Modal</span>.<span class="pl-c1">BACKDROP_TRANSITION_DURATION</span>)<span class="pl-k">:</span><span class="pl-en">callbackRemove</span>()}<span class="pl-k">else</span> <span class="pl-k">if</span>(callback){<span class="pl-en">callback</span>()}}</td>
      </tr>
      <tr>
        <td id="L386" class="blob-num js-line-number" data-line-number="386"></td>
        <td id="LC386" class="blob-code blob-code-inner js-file-line"><span class="pl-smi">Modal</span>.<span class="pl-c1">prototype</span>.<span class="pl-en">handleUpdate</span><span class="pl-k">=</span><span class="pl-k">function</span>(){<span class="pl-c1">this</span>.<span class="pl-en">adjustDialog</span>()}</td>
      </tr>
      <tr>
        <td id="L387" class="blob-num js-line-number" data-line-number="387"></td>
        <td id="LC387" class="blob-code blob-code-inner js-file-line"><span class="pl-smi">Modal</span>.<span class="pl-c1">prototype</span>.<span class="pl-en">adjustDialog</span><span class="pl-k">=</span><span class="pl-k">function</span>(){<span class="pl-k">var</span> modalIsOverflowing<span class="pl-k">=</span><span class="pl-c1">this</span>.<span class="pl-smi">$element</span>[<span class="pl-c1">0</span>].<span class="pl-smi">scrollHeight</span><span class="pl-k">&gt;</span><span class="pl-c1">document</span>.<span class="pl-c1">documentElement</span>.<span class="pl-smi">clientHeight</span></td>
      </tr>
      <tr>
        <td id="L388" class="blob-num js-line-number" data-line-number="388"></td>
        <td id="LC388" class="blob-code blob-code-inner js-file-line"><span class="pl-c1">this</span>.<span class="pl-smi">$element</span>.<span class="pl-en">css</span>({paddingLeft<span class="pl-k">:</span><span class="pl-k">!</span><span class="pl-c1">this</span>.<span class="pl-smi">bodyIsOverflowing</span><span class="pl-k">&amp;&amp;</span>modalIsOverflowing<span class="pl-k">?</span><span class="pl-c1">this</span>.<span class="pl-smi">scrollbarWidth</span><span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span>,paddingRight<span class="pl-k">:</span><span class="pl-c1">this</span>.<span class="pl-smi">bodyIsOverflowing</span><span class="pl-k">&amp;&amp;!</span>modalIsOverflowing<span class="pl-k">?</span><span class="pl-c1">this</span>.<span class="pl-smi">scrollbarWidth</span><span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span>})}</td>
      </tr>
      <tr>
        <td id="L389" class="blob-num js-line-number" data-line-number="389"></td>
        <td id="LC389" class="blob-code blob-code-inner js-file-line"><span class="pl-smi">Modal</span>.<span class="pl-c1">prototype</span>.<span class="pl-en">resetAdjustments</span><span class="pl-k">=</span><span class="pl-k">function</span>(){<span class="pl-c1">this</span>.<span class="pl-smi">$element</span>.<span class="pl-en">css</span>({paddingLeft<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span>,paddingRight<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span>})}</td>
      </tr>
      <tr>
        <td id="L390" class="blob-num js-line-number" data-line-number="390"></td>
        <td id="LC390" class="blob-code blob-code-inner js-file-line"><span class="pl-smi">Modal</span>.<span class="pl-c1">prototype</span>.<span class="pl-en">checkScrollbar</span><span class="pl-k">=</span><span class="pl-k">function</span>(){<span class="pl-k">var</span> fullWindowWidth<span class="pl-k">=</span><span class="pl-c1">window</span>.<span class="pl-c1">innerWidth</span></td>
      </tr>
      <tr>
        <td id="L391" class="blob-num js-line-number" data-line-number="391"></td>
        <td id="LC391" class="blob-code blob-code-inner js-file-line"><span class="pl-k">if</span>(<span class="pl-k">!</span>fullWindowWidth){<span class="pl-k">var</span> documentElementRect<span class="pl-k">=</span><span class="pl-c1">document</span>.<span class="pl-c1">documentElement</span>.<span class="pl-c1">getBoundingClientRect</span>()</td>
      </tr>
      <tr>
        <td id="L392" class="blob-num js-line-number" data-line-number="392"></td>
        <td id="LC392" class="blob-code blob-code-inner js-file-line">fullWindowWidth<span class="pl-k">=</span><span class="pl-smi">documentElementRect</span>.<span class="pl-c1">right</span><span class="pl-k">-</span><span class="pl-c1">Math</span>.<span class="pl-c1">abs</span>(<span class="pl-smi">documentElementRect</span>.<span class="pl-c1">left</span>)}</td>
      </tr>
      <tr>
        <td id="L393" class="blob-num js-line-number" data-line-number="393"></td>
        <td id="LC393" class="blob-code blob-code-inner js-file-line"><span class="pl-c1">this</span>.<span class="pl-smi">bodyIsOverflowing</span><span class="pl-k">=</span><span class="pl-c1">document</span>.<span class="pl-c1">body</span>.<span class="pl-smi">clientWidth</span><span class="pl-k">&lt;</span>fullWindowWidth</td>
      </tr>
      <tr>
        <td id="L394" class="blob-num js-line-number" data-line-number="394"></td>
        <td id="LC394" class="blob-code blob-code-inner js-file-line"><span class="pl-c1">this</span>.<span class="pl-smi">scrollbarWidth</span><span class="pl-k">=</span><span class="pl-c1">this</span>.<span class="pl-en">measureScrollbar</span>()}</td>
      </tr>
      <tr>
        <td id="L395" class="blob-num js-line-number" data-line-number="395"></td>
        <td id="LC395" class="blob-code blob-code-inner js-file-line"><span class="pl-smi">Modal</span>.<span class="pl-c1">prototype</span>.<span class="pl-en">setScrollbar</span><span class="pl-k">=</span><span class="pl-k">function</span>(){<span class="pl-k">var</span> bodyPad<span class="pl-k">=</span><span class="pl-c1">parseInt</span>((<span class="pl-c1">this</span>.<span class="pl-smi">$body</span>.<span class="pl-en">css</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>padding-right<span class="pl-pds">&#39;</span></span>)<span class="pl-k">||</span><span class="pl-c1">0</span>),<span class="pl-c1">10</span>)</td>
      </tr>
      <tr>
        <td id="L396" class="blob-num js-line-number" data-line-number="396"></td>
        <td id="LC396" class="blob-code blob-code-inner js-file-line"><span class="pl-c1">this</span>.<span class="pl-smi">originalBodyPad</span><span class="pl-k">=</span><span class="pl-c1">document</span>.<span class="pl-c1">body</span>.<span class="pl-c1">style</span>.<span class="pl-c1">paddingRight</span><span class="pl-k">||</span><span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span></td>
      </tr>
      <tr>
        <td id="L397" class="blob-num js-line-number" data-line-number="397"></td>
        <td id="LC397" class="blob-code blob-code-inner js-file-line"><span class="pl-k">if</span>(<span class="pl-c1">this</span>.<span class="pl-smi">bodyIsOverflowing</span>)<span class="pl-c1">this</span>.<span class="pl-smi">$body</span>.<span class="pl-en">css</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>padding-right<span class="pl-pds">&#39;</span></span>,bodyPad<span class="pl-k">+</span><span class="pl-c1">this</span>.<span class="pl-smi">scrollbarWidth</span>)}</td>
      </tr>
      <tr>
        <td id="L398" class="blob-num js-line-number" data-line-number="398"></td>
        <td id="LC398" class="blob-code blob-code-inner js-file-line"><span class="pl-smi">Modal</span>.<span class="pl-c1">prototype</span>.<span class="pl-en">resetScrollbar</span><span class="pl-k">=</span><span class="pl-k">function</span>(){<span class="pl-c1">this</span>.<span class="pl-smi">$body</span>.<span class="pl-en">css</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>padding-right<span class="pl-pds">&#39;</span></span>,<span class="pl-c1">this</span>.<span class="pl-smi">originalBodyPad</span>)}</td>
      </tr>
      <tr>
        <td id="L399" class="blob-num js-line-number" data-line-number="399"></td>
        <td id="LC399" class="blob-code blob-code-inner js-file-line"><span class="pl-smi">Modal</span>.<span class="pl-c1">prototype</span>.<span class="pl-en">measureScrollbar</span><span class="pl-k">=</span><span class="pl-k">function</span>(){<span class="pl-k">var</span> scrollDiv<span class="pl-k">=</span><span class="pl-c1">document</span>.<span class="pl-c1">createElement</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>div<span class="pl-pds">&#39;</span></span>)</td>
      </tr>
      <tr>
        <td id="L400" class="blob-num js-line-number" data-line-number="400"></td>
        <td id="LC400" class="blob-code blob-code-inner js-file-line"><span class="pl-smi">scrollDiv</span>.<span class="pl-c1">className</span><span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">&#39;</span>modal-scrollbar-measure<span class="pl-pds">&#39;</span></span></td>
      </tr>
      <tr>
        <td id="L401" class="blob-num js-line-number" data-line-number="401"></td>
        <td id="LC401" class="blob-code blob-code-inner js-file-line"><span class="pl-c1">this</span>.<span class="pl-smi">$body</span>.<span class="pl-c1">append</span>(scrollDiv)</td>
      </tr>
      <tr>
        <td id="L402" class="blob-num js-line-number" data-line-number="402"></td>
        <td id="LC402" class="blob-code blob-code-inner js-file-line"><span class="pl-k">var</span> scrollbarWidth<span class="pl-k">=</span><span class="pl-smi">scrollDiv</span>.<span class="pl-smi">offsetWidth</span><span class="pl-k">-</span><span class="pl-smi">scrollDiv</span>.<span class="pl-smi">clientWidth</span></td>
      </tr>
      <tr>
        <td id="L403" class="blob-num js-line-number" data-line-number="403"></td>
        <td id="LC403" class="blob-code blob-code-inner js-file-line"><span class="pl-c1">this</span>.<span class="pl-smi">$body</span>[<span class="pl-c1">0</span>].<span class="pl-c1">removeChild</span>(scrollDiv)</td>
      </tr>
      <tr>
        <td id="L404" class="blob-num js-line-number" data-line-number="404"></td>
        <td id="LC404" class="blob-code blob-code-inner js-file-line"><span class="pl-k">return</span> scrollbarWidth}</td>
      </tr>
      <tr>
        <td id="L405" class="blob-num js-line-number" data-line-number="405"></td>
        <td id="LC405" class="blob-code blob-code-inner js-file-line"><span class="pl-k">function</span> <span class="pl-en">Plugin</span>(<span class="pl-smi">option</span>,<span class="pl-smi">_relatedTarget</span>){<span class="pl-k">return</span> <span class="pl-c1">this</span>.<span class="pl-en">each</span>(<span class="pl-k">function</span>(){<span class="pl-k">var</span> $this<span class="pl-k">=</span><span class="pl-en">$</span>(<span class="pl-c1">this</span>)</td>
      </tr>
      <tr>
        <td id="L406" class="blob-num js-line-number" data-line-number="406"></td>
        <td id="LC406" class="blob-code blob-code-inner js-file-line"><span class="pl-k">var</span> data<span class="pl-k">=</span><span class="pl-smi">$this</span>.<span class="pl-c1">data</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>bs.modal<span class="pl-pds">&#39;</span></span>)</td>
      </tr>
      <tr>
        <td id="L407" class="blob-num js-line-number" data-line-number="407"></td>
        <td id="LC407" class="blob-code blob-code-inner js-file-line"><span class="pl-k">var</span> options<span class="pl-k">=</span><span class="pl-smi">$</span>.<span class="pl-en">extend</span>({},<span class="pl-smi">Modal</span>.<span class="pl-c1">DEFAULTS</span>,<span class="pl-smi">$this</span>.<span class="pl-c1">data</span>(),<span class="pl-k">typeof</span> option<span class="pl-k">==</span><span class="pl-s"><span class="pl-pds">&#39;</span>object<span class="pl-pds">&#39;</span></span><span class="pl-k">&amp;&amp;</span>option)</td>
      </tr>
      <tr>
        <td id="L408" class="blob-num js-line-number" data-line-number="408"></td>
        <td id="LC408" class="blob-code blob-code-inner js-file-line"><span class="pl-k">if</span>(<span class="pl-k">!</span>data)<span class="pl-smi">$this</span>.<span class="pl-c1">data</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>bs.modal<span class="pl-pds">&#39;</span></span>,(data<span class="pl-k">=</span><span class="pl-k">new</span> <span class="pl-en">Modal</span>(<span class="pl-c1">this</span>,options)))</td>
      </tr>
      <tr>
        <td id="L409" class="blob-num js-line-number" data-line-number="409"></td>
        <td id="LC409" class="blob-code blob-code-inner js-file-line"><span class="pl-k">if</span>(<span class="pl-k">typeof</span> option<span class="pl-k">==</span><span class="pl-s"><span class="pl-pds">&#39;</span>string<span class="pl-pds">&#39;</span></span>)data[option](_relatedTarget)</td>
      </tr>
      <tr>
        <td id="L410" class="blob-num js-line-number" data-line-number="410"></td>
        <td id="LC410" class="blob-code blob-code-inner js-file-line"><span class="pl-k">else</span> <span class="pl-k">if</span>(<span class="pl-smi">options</span>.<span class="pl-smi">show</span>)<span class="pl-smi">data</span>.<span class="pl-en">show</span>(_relatedTarget)})}</td>
      </tr>
      <tr>
        <td id="L411" class="blob-num js-line-number" data-line-number="411"></td>
        <td id="LC411" class="blob-code blob-code-inner js-file-line"><span class="pl-k">var</span> old<span class="pl-k">=</span><span class="pl-smi">$</span>.<span class="pl-smi">fn</span>.<span class="pl-smi">modal</span></td>
      </tr>
      <tr>
        <td id="L412" class="blob-num js-line-number" data-line-number="412"></td>
        <td id="LC412" class="blob-code blob-code-inner js-file-line"><span class="pl-smi">$</span>.<span class="pl-smi">fn</span>.<span class="pl-smi">modal</span><span class="pl-k">=</span><span class="pl-c1">Plugin</span></td>
      </tr>
      <tr>
        <td id="L413" class="blob-num js-line-number" data-line-number="413"></td>
        <td id="LC413" class="blob-code blob-code-inner js-file-line"><span class="pl-smi">$</span>.<span class="pl-smi">fn</span>.<span class="pl-smi">modal</span>.<span class="pl-smi">Constructor</span><span class="pl-k">=</span>Modal</td>
      </tr>
      <tr>
        <td id="L414" class="blob-num js-line-number" data-line-number="414"></td>
        <td id="LC414" class="blob-code blob-code-inner js-file-line"><span class="pl-smi">$</span>.<span class="pl-smi">fn</span>.<span class="pl-smi">modal</span>.<span class="pl-en">noConflict</span><span class="pl-k">=</span><span class="pl-k">function</span>(){<span class="pl-smi">$</span>.<span class="pl-smi">fn</span>.<span class="pl-smi">modal</span><span class="pl-k">=</span>old</td>
      </tr>
      <tr>
        <td id="L415" class="blob-num js-line-number" data-line-number="415"></td>
        <td id="LC415" class="blob-code blob-code-inner js-file-line"><span class="pl-k">return</span> <span class="pl-c1">this</span>}</td>
      </tr>
      <tr>
        <td id="L416" class="blob-num js-line-number" data-line-number="416"></td>
        <td id="LC416" class="blob-code blob-code-inner js-file-line"><span class="pl-en">$</span>(<span class="pl-c1">document</span>).<span class="pl-en">on</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>click.bs.modal.data-api<span class="pl-pds">&#39;</span></span>,<span class="pl-s"><span class="pl-pds">&#39;</span>[data-toggle=&quot;modal&quot;]<span class="pl-pds">&#39;</span></span>,<span class="pl-k">function</span>(<span class="pl-smi">e</span>){<span class="pl-k">var</span> $this<span class="pl-k">=</span><span class="pl-en">$</span>(<span class="pl-c1">this</span>)</td>
      </tr>
      <tr>
        <td id="L417" class="blob-num js-line-number" data-line-number="417"></td>
        <td id="LC417" class="blob-code blob-code-inner js-file-line"><span class="pl-k">var</span> href<span class="pl-k">=</span><span class="pl-smi">$this</span>.<span class="pl-en">attr</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>href<span class="pl-pds">&#39;</span></span>)</td>
      </tr>
      <tr>
        <td id="L418" class="blob-num js-line-number" data-line-number="418"></td>
        <td id="LC418" class="blob-code blob-code-inner js-file-line"><span class="pl-k">var</span> $target<span class="pl-k">=</span><span class="pl-en">$</span>(<span class="pl-smi">$this</span>.<span class="pl-en">attr</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>data-target<span class="pl-pds">&#39;</span></span>)<span class="pl-k">||</span>(href<span class="pl-k">&amp;&amp;</span><span class="pl-smi">href</span>.<span class="pl-c1">replace</span>(<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-c1">.</span><span class="pl-k">*</span>(?=#<span class="pl-c1">[<span class="pl-k">^</span><span class="pl-c1">\s</span>]</span><span class="pl-k">+</span><span class="pl-k">$</span>)<span class="pl-pds">/</span></span>,<span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span>)))</td>
      </tr>
      <tr>
        <td id="L419" class="blob-num js-line-number" data-line-number="419"></td>
        <td id="LC419" class="blob-code blob-code-inner js-file-line"><span class="pl-k">var</span> option<span class="pl-k">=</span><span class="pl-smi">$target</span>.<span class="pl-c1">data</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>bs.modal<span class="pl-pds">&#39;</span></span>)<span class="pl-k">?</span><span class="pl-s"><span class="pl-pds">&#39;</span>toggle<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span><span class="pl-smi">$</span>.<span class="pl-en">extend</span>({remote<span class="pl-k">:</span><span class="pl-k">!</span><span class="pl-sr"><span class="pl-pds">/</span>#<span class="pl-pds">/</span></span>.<span class="pl-c1">test</span>(href)<span class="pl-k">&amp;&amp;</span>href},<span class="pl-smi">$target</span>.<span class="pl-c1">data</span>(),<span class="pl-smi">$this</span>.<span class="pl-c1">data</span>())</td>
      </tr>
      <tr>
        <td id="L420" class="blob-num js-line-number" data-line-number="420"></td>
        <td id="LC420" class="blob-code blob-code-inner js-file-line"><span class="pl-k">if</span>(<span class="pl-smi">$this</span>.<span class="pl-en">is</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>a<span class="pl-pds">&#39;</span></span>))<span class="pl-smi">e</span>.<span class="pl-c1">preventDefault</span>()</td>
      </tr>
      <tr>
        <td id="L421" class="blob-num js-line-number" data-line-number="421"></td>
        <td id="LC421" class="blob-code blob-code-inner js-file-line"><span class="pl-smi">$target</span>.<span class="pl-en">one</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>show.bs.modal<span class="pl-pds">&#39;</span></span>,<span class="pl-k">function</span>(<span class="pl-smi">showEvent</span>){<span class="pl-k">if</span>(<span class="pl-smi">showEvent</span>.<span class="pl-en">isDefaultPrevented</span>())<span class="pl-k">return</span> </td>
      </tr>
      <tr>
        <td id="L422" class="blob-num js-line-number" data-line-number="422"></td>
        <td id="LC422" class="blob-code blob-code-inner js-file-line"><span class="pl-smi">$target</span>.<span class="pl-en">one</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>hidden.bs.modal<span class="pl-pds">&#39;</span></span>,<span class="pl-k">function</span>(){<span class="pl-smi">$this</span>.<span class="pl-en">is</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>:visible<span class="pl-pds">&#39;</span></span>)<span class="pl-k">&amp;&amp;</span><span class="pl-smi">$this</span>.<span class="pl-en">trigger</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>focus<span class="pl-pds">&#39;</span></span>)})})</td>
      </tr>
      <tr>
        <td id="L423" class="blob-num js-line-number" data-line-number="423"></td>
        <td id="LC423" class="blob-code blob-code-inner js-file-line"><span class="pl-c1">Plugin</span>.<span class="pl-c1">call</span>($target,option,<span class="pl-c1">this</span>)})}(jQuery);<span class="pl-k">+</span><span class="pl-k">function</span>(<span class="pl-smi">$</span>){<span class="pl-s"><span class="pl-pds">&#39;</span>use strict<span class="pl-pds">&#39;</span></span>;<span class="pl-k">var</span> <span class="pl-en">Tooltip</span><span class="pl-k">=</span><span class="pl-k">function</span>(<span class="pl-smi">element</span>,<span class="pl-smi">options</span>){<span class="pl-c1">this</span>.<span class="pl-c1">type</span><span class="pl-k">=</span><span class="pl-c1">null</span></td>
      </tr>
      <tr>
        <td id="L424" class="blob-num js-line-number" data-line-number="424"></td>
        <td id="LC424" class="blob-code blob-code-inner js-file-line"><span class="pl-c1">this</span>.<span class="pl-c1">options</span><span class="pl-k">=</span><span class="pl-c1">null</span></td>
      </tr>
      <tr>
        <td id="L425" class="blob-num js-line-number" data-line-number="425"></td>
        <td id="LC425" class="blob-code blob-code-inner js-file-line"><span class="pl-c1">this</span>.<span class="pl-smi">enabled</span><span class="pl-k">=</span><span class="pl-c1">null</span></td>
      </tr>
      <tr>
        <td id="L426" class="blob-num js-line-number" data-line-number="426"></td>
        <td id="LC426" class="blob-code blob-code-inner js-file-line"><span class="pl-c1">this</span>.<span class="pl-smi">timeout</span><span class="pl-k">=</span><span class="pl-c1">null</span></td>
      </tr>
      <tr>
        <td id="L427" class="blob-num js-line-number" data-line-number="427"></td>
        <td id="LC427" class="blob-code blob-code-inner js-file-line"><span class="pl-c1">this</span>.<span class="pl-smi">hoverState</span><span class="pl-k">=</span><span class="pl-c1">null</span></td>
      </tr>
      <tr>
        <td id="L428" class="blob-num js-line-number" data-line-number="428"></td>
        <td id="LC428" class="blob-code blob-code-inner js-file-line"><span class="pl-c1">this</span>.<span class="pl-smi">$element</span><span class="pl-k">=</span><span class="pl-c1">null</span></td>
      </tr>
      <tr>
        <td id="L429" class="blob-num js-line-number" data-line-number="429"></td>
        <td id="LC429" class="blob-code blob-code-inner js-file-line"><span class="pl-c1">this</span>.<span class="pl-smi">inState</span><span class="pl-k">=</span><span class="pl-c1">null</span></td>
      </tr>
      <tr>
        <td id="L430" class="blob-num js-line-number" data-line-number="430"></td>
        <td id="LC430" class="blob-code blob-code-inner js-file-line"><span class="pl-c1">this</span>.<span class="pl-en">init</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>tooltip<span class="pl-pds">&#39;</span></span>,element,options)}</td>
      </tr>
      <tr>
        <td id="L431" class="blob-num js-line-number" data-line-number="431"></td>
        <td id="LC431" class="blob-code blob-code-inner js-file-line"><span class="pl-smi">Tooltip</span>.<span class="pl-c1">VERSION</span><span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">&#39;</span>3.3.7<span class="pl-pds">&#39;</span></span></td>
      </tr>
      <tr>
        <td id="L432" class="blob-num js-line-number" data-line-number="432"></td>
        <td id="LC432" class="blob-code blob-code-inner js-file-line"><span class="pl-smi">Tooltip</span>.<span class="pl-c1">TRANSITION_DURATION</span><span class="pl-k">=</span><span class="pl-c1">150</span></td>
      </tr>
      <tr>
        <td id="L433" class="blob-num js-line-number" data-line-number="433"></td>
        <td id="LC433" class="blob-code blob-code-inner js-file-line"><span class="pl-smi">Tooltip</span>.<span class="pl-c1">DEFAULTS</span><span class="pl-k">=</span>{animation<span class="pl-k">:</span><span class="pl-c1">true</span>,placement<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>top<span class="pl-pds">&#39;</span></span>,selector<span class="pl-k">:</span><span class="pl-c1">false</span>,template<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>&lt;div class=&quot;tooltip&quot; role=&quot;tooltip&quot;&gt;&lt;div class=&quot;tooltip-arrow&quot;&gt;&lt;/div&gt;&lt;div class=&quot;tooltip-inner&quot;&gt;&lt;/div&gt;&lt;/div&gt;<span class="pl-pds">&#39;</span></span>,trigger<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>hover focus<span class="pl-pds">&#39;</span></span>,title<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span>,delay<span class="pl-k">:</span><span class="pl-c1">0</span>,html<span class="pl-k">:</span><span class="pl-c1">false</span>,container<span class="pl-k">:</span><span class="pl-c1">false</span>,viewport<span class="pl-k">:</span>{selector<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>body<span class="pl-pds">&#39;</span></span>,padding<span class="pl-k">:</span><span class="pl-c1">0</span>}}</td>
      </tr>
      <tr>
        <td id="L434" class="blob-num js-line-number" data-line-number="434"></td>
        <td id="LC434" class="blob-code blob-code-inner js-file-line"><span class="pl-smi">Tooltip</span>.<span class="pl-c1">prototype</span>.<span class="pl-en">init</span><span class="pl-k">=</span><span class="pl-k">function</span>(<span class="pl-smi">type</span>,<span class="pl-smi">element</span>,<span class="pl-smi">options</span>){<span class="pl-c1">this</span>.<span class="pl-smi">enabled</span><span class="pl-k">=</span><span class="pl-c1">true</span></td>
      </tr>
      <tr>
        <td id="L435" class="blob-num js-line-number" data-line-number="435"></td>
        <td id="LC435" class="blob-code blob-code-inner js-file-line"><span class="pl-c1">this</span>.<span class="pl-c1">type</span><span class="pl-k">=</span>type</td>
      </tr>
      <tr>
        <td id="L436" class="blob-num js-line-number" data-line-number="436"></td>
        <td id="LC436" class="blob-code blob-code-inner js-file-line"><span class="pl-c1">this</span>.<span class="pl-smi">$element</span><span class="pl-k">=</span><span class="pl-en">$</span>(element)</td>
      </tr>
      <tr>
        <td id="L437" class="blob-num js-line-number" data-line-number="437"></td>
        <td id="LC437" class="blob-code blob-code-inner js-file-line"><span class="pl-c1">this</span>.<span class="pl-c1">options</span><span class="pl-k">=</span><span class="pl-c1">this</span>.<span class="pl-en">getOptions</span>(options)</td>
      </tr>
      <tr>
        <td id="L438" class="blob-num js-line-number" data-line-number="438"></td>
        <td id="LC438" class="blob-code blob-code-inner js-file-line"><span class="pl-c1">this</span>.<span class="pl-smi">$viewport</span><span class="pl-k">=</span><span class="pl-c1">this</span>.<span class="pl-c1">options</span>.<span class="pl-smi">viewport</span><span class="pl-k">&amp;&amp;</span><span class="pl-en">$</span>(<span class="pl-smi">$</span>.<span class="pl-en">isFunction</span>(<span class="pl-c1">this</span>.<span class="pl-c1">options</span>.<span class="pl-smi">viewport</span>)<span class="pl-k">?</span><span class="pl-c1">this</span>.<span class="pl-c1">options</span>.<span class="pl-smi">viewport</span>.<span class="pl-c1">call</span>(<span class="pl-c1">this</span>,<span class="pl-c1">this</span>.<span class="pl-smi">$element</span>)<span class="pl-k">:</span>(<span class="pl-c1">this</span>.<span class="pl-c1">options</span>.<span class="pl-smi">viewport</span>.<span class="pl-smi">selector</span><span class="pl-k">||</span><span class="pl-c1">this</span>.<span class="pl-c1">options</span>.<span class="pl-smi">viewport</span>))</td>
      </tr>
      <tr>
        <td id="L439" class="blob-num js-line-number" data-line-number="439"></td>
        <td id="LC439" class="blob-code blob-code-inner js-file-line"><span class="pl-c1">this</span>.<span class="pl-smi">inState</span><span class="pl-k">=</span>{click<span class="pl-k">:</span><span class="pl-c1">false</span>,hover<span class="pl-k">:</span><span class="pl-c1">false</span>,focus<span class="pl-k">:</span><span class="pl-c1">false</span>}</td>
      </tr>
      <tr>
        <td id="L440" class="blob-num js-line-number" data-line-number="440"></td>
        <td id="LC440" class="blob-code blob-code-inner js-file-line"><span class="pl-k">if</span>(<span class="pl-c1">this</span>.<span class="pl-smi">$element</span>[<span class="pl-c1">0</span>]<span class="pl-k">instanceof</span> <span class="pl-c1">document</span>.<span class="pl-c1">constructor</span><span class="pl-k">&amp;&amp;!</span><span class="pl-c1">this</span>.<span class="pl-c1">options</span>.<span class="pl-smi">selector</span>){<span class="pl-k">throw</span> <span class="pl-k">new</span> <span class="pl-en">Error</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>`selector` option must be specified when initializing <span class="pl-pds">&#39;</span></span><span class="pl-k">+</span><span class="pl-c1">this</span>.<span class="pl-c1">type</span><span class="pl-k">+</span><span class="pl-s"><span class="pl-pds">&#39;</span> on the window.document object!<span class="pl-pds">&#39;</span></span>)}</td>
      </tr>
      <tr>
        <td id="L441" class="blob-num js-line-number" data-line-number="441"></td>
        <td id="LC441" class="blob-code blob-code-inner js-file-line"><span class="pl-k">var</span> triggers<span class="pl-k">=</span><span class="pl-c1">this</span>.<span class="pl-c1">options</span>.<span class="pl-smi">trigger</span>.<span class="pl-c1">split</span>(<span class="pl-s"><span class="pl-pds">&#39;</span> <span class="pl-pds">&#39;</span></span>)</td>
      </tr>
      <tr>
        <td id="L442" class="blob-num js-line-number" data-line-number="442"></td>
        <td id="LC442" class="blob-code blob-code-inner js-file-line"><span class="pl-k">for</span>(<span class="pl-k">var</span> i<span class="pl-k">=</span><span class="pl-smi">triggers</span>.<span class="pl-c1">length</span>;i<span class="pl-k">--</span>;){<span class="pl-k">var</span> trigger<span class="pl-k">=</span>triggers[i]</td>
      </tr>
      <tr>
        <td id="L443" class="blob-num js-line-number" data-line-number="443"></td>
        <td id="LC443" class="blob-code blob-code-inner js-file-line"><span class="pl-k">if</span>(trigger<span class="pl-k">==</span><span class="pl-s"><span class="pl-pds">&#39;</span>click<span class="pl-pds">&#39;</span></span>){<span class="pl-c1">this</span>.<span class="pl-smi">$element</span>.<span class="pl-en">on</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>click.<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span><span class="pl-c1">this</span>.<span class="pl-c1">type</span>,<span class="pl-c1">this</span>.<span class="pl-c1">options</span>.<span class="pl-smi">selector</span>,<span class="pl-smi">$</span>.<span class="pl-en">proxy</span>(<span class="pl-c1">this</span>.<span class="pl-smi">toggle</span>,<span class="pl-c1">this</span>))}<span class="pl-k">else</span> <span class="pl-k">if</span>(trigger<span class="pl-k">!=</span><span class="pl-s"><span class="pl-pds">&#39;</span>manual<span class="pl-pds">&#39;</span></span>){<span class="pl-k">var</span> eventIn<span class="pl-k">=</span>trigger<span class="pl-k">==</span><span class="pl-s"><span class="pl-pds">&#39;</span>hover<span class="pl-pds">&#39;</span></span><span class="pl-k">?</span><span class="pl-s"><span class="pl-pds">&#39;</span>mouseenter<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>focusin<span class="pl-pds">&#39;</span></span></td>
      </tr>
      <tr>
        <td id="L444" class="blob-num js-line-number" data-line-number="444"></td>
        <td id="LC444" class="blob-code blob-code-inner js-file-line"><span class="pl-k">var</span> eventOut<span class="pl-k">=</span>trigger<span class="pl-k">==</span><span class="pl-s"><span class="pl-pds">&#39;</span>hover<span class="pl-pds">&#39;</span></span><span class="pl-k">?</span><span class="pl-s"><span class="pl-pds">&#39;</span>mouseleave<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>focusout<span class="pl-pds">&#39;</span></span></td>
      </tr>
      <tr>
        <td id="L445" class="blob-num js-line-number" data-line-number="445"></td>
        <td id="LC445" class="blob-code blob-code-inner js-file-line"><span class="pl-c1">this</span>.<span class="pl-smi">$element</span>.<span class="pl-en">on</span>(eventIn<span class="pl-k">+</span><span class="pl-s"><span class="pl-pds">&#39;</span>.<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span><span class="pl-c1">this</span>.<span class="pl-c1">type</span>,<span class="pl-c1">this</span>.<span class="pl-c1">options</span>.<span class="pl-smi">selector</span>,<span class="pl-smi">$</span>.<span class="pl-en">proxy</span>(<span class="pl-c1">this</span>.<span class="pl-smi">enter</span>,<span class="pl-c1">this</span>))</td>
      </tr>
      <tr>
        <td id="L446" class="blob-num js-line-number" data-line-number="446"></td>
        <td id="LC446" class="blob-code blob-code-inner js-file-line"><span class="pl-c1">this</span>.<span class="pl-smi">$element</span>.<span class="pl-en">on</span>(eventOut<span class="pl-k">+</span><span class="pl-s"><span class="pl-pds">&#39;</span>.<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span><span class="pl-c1">this</span>.<span class="pl-c1">type</span>,<span class="pl-c1">this</span>.<span class="pl-c1">options</span>.<span class="pl-smi">selector</span>,<span class="pl-smi">$</span>.<span class="pl-en">proxy</span>(<span class="pl-c1">this</span>.<span class="pl-smi">leave</span>,<span class="pl-c1">this</span>))}}</td>
      </tr>
      <tr>
        <td id="L447" class="blob-num js-line-number" data-line-number="447"></td>
        <td id="LC447" class="blob-code blob-code-inner js-file-line"><span class="pl-c1">this</span>.<span class="pl-c1">options</span>.<span class="pl-smi">selector</span><span class="pl-k">?</span>(<span class="pl-c1">this</span>.<span class="pl-smi">_options</span><span class="pl-k">=</span><span class="pl-smi">$</span>.<span class="pl-en">extend</span>({},<span class="pl-c1">this</span>.<span class="pl-c1">options</span>,{trigger<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>manual<span class="pl-pds">&#39;</span></span>,selector<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span>}))<span class="pl-k">:</span><span class="pl-c1">this</span>.<span class="pl-en">fixTitle</span>()}</td>
      </tr>
      <tr>
        <td id="L448" class="blob-num js-line-number" data-line-number="448"></td>
        <td id="LC448" class="blob-code blob-code-inner js-file-line"><span class="pl-smi">Tooltip</span>.<span class="pl-c1">prototype</span>.<span class="pl-en">getDefaults</span><span class="pl-k">=</span><span class="pl-k">function</span>(){<span class="pl-k">return</span> <span class="pl-smi">Tooltip</span>.<span class="pl-c1">DEFAULTS</span>}</td>
      </tr>
      <tr>
        <td id="L449" class="blob-num js-line-number" data-line-number="449"></td>
        <td id="LC449" class="blob-code blob-code-inner js-file-line"><span class="pl-smi">Tooltip</span>.<span class="pl-c1">prototype</span>.<span class="pl-en">getOptions</span><span class="pl-k">=</span><span class="pl-k">function</span>(<span class="pl-smi">options</span>){options<span class="pl-k">=</span><span class="pl-smi">$</span>.<span class="pl-en">extend</span>({},<span class="pl-c1">this</span>.<span class="pl-en">getDefaults</span>(),<span class="pl-c1">this</span>.<span class="pl-smi">$element</span>.<span class="pl-c1">data</span>(),options)</td>
      </tr>
      <tr>
        <td id="L450" class="blob-num js-line-number" data-line-number="450"></td>
        <td id="LC450" class="blob-code blob-code-inner js-file-line"><span class="pl-k">if</span>(<span class="pl-smi">options</span>.<span class="pl-smi">delay</span><span class="pl-k">&amp;&amp;</span><span class="pl-k">typeof</span> <span class="pl-smi">options</span>.<span class="pl-smi">delay</span><span class="pl-k">==</span><span class="pl-s"><span class="pl-pds">&#39;</span>number<span class="pl-pds">&#39;</span></span>){<span class="pl-smi">options</span>.<span class="pl-smi">delay</span><span class="pl-k">=</span>{show<span class="pl-k">:</span><span class="pl-smi">options</span>.<span class="pl-smi">delay</span>,hide<span class="pl-k">:</span><span class="pl-smi">options</span>.<span class="pl-smi">delay</span>}}</td>
      </tr>
      <tr>
        <td id="L451" class="blob-num js-line-number" data-line-number="451"></td>
        <td id="LC451" class="blob-code blob-code-inner js-file-line"><span class="pl-k">return</span> options}</td>
      </tr>
      <tr>
        <td id="L452" class="blob-num js-line-number" data-line-number="452"></td>
        <td id="LC452" class="blob-code blob-code-inner js-file-line"><span class="pl-smi">Tooltip</span>.<span class="pl-c1">prototype</span>.<span class="pl-en">getDelegateOptions</span><span class="pl-k">=</span><span class="pl-k">function</span>(){<span class="pl-k">var</span> options<span class="pl-k">=</span>{}</td>
      </tr>
      <tr>
        <td id="L453" class="blob-num js-line-number" data-line-number="453"></td>
        <td id="LC453" class="blob-code blob-code-inner js-file-line"><span class="pl-k">var</span> defaults<span class="pl-k">=</span><span class="pl-c1">this</span>.<span class="pl-en">getDefaults</span>()</td>
      </tr>
      <tr>
        <td id="L454" class="blob-num js-line-number" data-line-number="454"></td>
        <td id="LC454" class="blob-code blob-code-inner js-file-line"><span class="pl-c1">this</span>.<span class="pl-smi">_options</span><span class="pl-k">&amp;&amp;</span><span class="pl-smi">$</span>.<span class="pl-en">each</span>(<span class="pl-c1">this</span>.<span class="pl-smi">_options</span>,<span class="pl-k">function</span>(<span class="pl-smi">key</span>,<span class="pl-smi">value</span>){<span class="pl-k">if</span>(defaults[key]<span class="pl-k">!=</span>value)options[key]<span class="pl-k">=</span>value})</td>
      </tr>
      <tr>
        <td id="L455" class="blob-num js-line-number" data-line-number="455"></td>
        <td id="LC455" class="blob-code blob-code-inner js-file-line"><span class="pl-k">return</span> options}</td>
      </tr>
      <tr>
        <td id="L456" class="blob-num js-line-number" data-line-number="456"></td>
        <td id="LC456" class="blob-code blob-code-inner js-file-line"><span class="pl-smi">Tooltip</span>.<span class="pl-c1">prototype</span>.<span class="pl-en">enter</span><span class="pl-k">=</span><span class="pl-k">function</span>(<span class="pl-smi">obj</span>){<span class="pl-k">var</span> self<span class="pl-k">=</span>obj <span class="pl-k">instanceof</span> <span class="pl-c1">this</span>.<span class="pl-c1">constructor</span><span class="pl-k">?</span>obj<span class="pl-k">:</span><span class="pl-en">$</span>(<span class="pl-smi">obj</span>.<span class="pl-smi">currentTarget</span>).<span class="pl-c1">data</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>bs.<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span><span class="pl-c1">this</span>.<span class="pl-c1">type</span>)</td>
      </tr>
      <tr>
        <td id="L457" class="blob-num js-line-number" data-line-number="457"></td>
        <td id="LC457" class="blob-code blob-code-inner js-file-line"><span class="pl-k">if</span>(<span class="pl-k">!</span>self){self<span class="pl-k">=</span><span class="pl-k">new</span> <span class="pl-en">this.constructor</span>(<span class="pl-smi">obj</span>.<span class="pl-smi">currentTarget</span>,<span class="pl-c1">this</span>.<span class="pl-en">getDelegateOptions</span>())</td>
      </tr>
      <tr>
        <td id="L458" class="blob-num js-line-number" data-line-number="458"></td>
        <td id="LC458" class="blob-code blob-code-inner js-file-line"><span class="pl-en">$</span>(<span class="pl-smi">obj</span>.<span class="pl-smi">currentTarget</span>).<span class="pl-c1">data</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>bs.<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span><span class="pl-c1">this</span>.<span class="pl-c1">type</span>,self)}</td>
      </tr>
      <tr>
        <td id="L459" class="blob-num js-line-number" data-line-number="459"></td>
        <td id="LC459" class="blob-code blob-code-inner js-file-line"><span class="pl-k">if</span>(obj <span class="pl-k">instanceof</span> <span class="pl-smi">$</span>.<span class="pl-smi">Event</span>){<span class="pl-smi">self</span>.<span class="pl-smi">inState</span>[<span class="pl-smi">obj</span>.<span class="pl-c1">type</span><span class="pl-k">==</span><span class="pl-s"><span class="pl-pds">&#39;</span>focusin<span class="pl-pds">&#39;</span></span><span class="pl-k">?</span><span class="pl-s"><span class="pl-pds">&#39;</span>focus<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>hover<span class="pl-pds">&#39;</span></span>]<span class="pl-k">=</span><span class="pl-c1">true</span>}</td>
      </tr>
      <tr>
        <td id="L460" class="blob-num js-line-number" data-line-number="460"></td>
        <td id="LC460" class="blob-code blob-code-inner js-file-line"><span class="pl-k">if</span>(<span class="pl-smi">self</span>.<span class="pl-en">tip</span>().<span class="pl-en">hasClass</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>in<span class="pl-pds">&#39;</span></span>)<span class="pl-k">||</span><span class="pl-smi">self</span>.<span class="pl-smi">hoverState</span><span class="pl-k">==</span><span class="pl-s"><span class="pl-pds">&#39;</span>in<span class="pl-pds">&#39;</span></span>){<span class="pl-smi">self</span>.<span class="pl-smi">hoverState</span><span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">&#39;</span>in<span class="pl-pds">&#39;</span></span></td>
      </tr>
      <tr>
        <td id="L461" class="blob-num js-line-number" data-line-number="461"></td>
        <td id="LC461" class="blob-code blob-code-inner js-file-line"><span class="pl-k">return</span>}</td>
      </tr>
      <tr>
        <td id="L462" class="blob-num js-line-number" data-line-number="462"></td>
        <td id="LC462" class="blob-code blob-code-inner js-file-line"><span class="pl-c1">clearTimeout</span>(<span class="pl-smi">self</span>.<span class="pl-smi">timeout</span>)</td>
      </tr>
      <tr>
        <td id="L463" class="blob-num js-line-number" data-line-number="463"></td>
        <td id="LC463" class="blob-code blob-code-inner js-file-line"><span class="pl-smi">self</span>.<span class="pl-smi">hoverState</span><span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">&#39;</span>in<span class="pl-pds">&#39;</span></span></td>
      </tr>
      <tr>
        <td id="L464" class="blob-num js-line-number" data-line-number="464"></td>
        <td id="LC464" class="blob-code blob-code-inner js-file-line"><span class="pl-k">if</span>(<span class="pl-k">!</span><span class="pl-smi">self</span>.<span class="pl-c1">options</span>.<span class="pl-smi">delay</span><span class="pl-k">||!</span><span class="pl-smi">self</span>.<span class="pl-c1">options</span>.<span class="pl-smi">delay</span>.<span class="pl-smi">show</span>)<span class="pl-k">return</span> <span class="pl-smi">self</span>.<span class="pl-en">show</span>()</td>
      </tr>
      <tr>
        <td id="L465" class="blob-num js-line-number" data-line-number="465"></td>
        <td id="LC465" class="blob-code blob-code-inner js-file-line"><span class="pl-smi">self</span>.<span class="pl-smi">timeout</span><span class="pl-k">=</span><span class="pl-c1">setTimeout</span>(<span class="pl-k">function</span>(){<span class="pl-k">if</span>(<span class="pl-smi">self</span>.<span class="pl-smi">hoverState</span><span class="pl-k">==</span><span class="pl-s"><span class="pl-pds">&#39;</span>in<span class="pl-pds">&#39;</span></span>)<span class="pl-smi">self</span>.<span class="pl-en">show</span>()},<span class="pl-smi">self</span>.<span class="pl-c1">options</span>.<span class="pl-smi">delay</span>.<span class="pl-smi">show</span>)}</td>
      </tr>
      <tr>
        <td id="L466" class="blob-num js-line-number" data-line-number="466"></td>
        <td id="LC466" class="blob-code blob-code-inner js-file-line"><span class="pl-smi">Tooltip</span>.<span class="pl-c1">prototype</span>.<span class="pl-en">isInStateTrue</span><span class="pl-k">=</span><span class="pl-k">function</span>(){<span class="pl-k">for</span>(<span class="pl-k">var</span> key <span class="pl-k">in</span> <span class="pl-c1">this</span>.<span class="pl-smi">inState</span>){<span class="pl-k">if</span>(<span class="pl-c1">this</span>.<span class="pl-smi">inState</span>[key])<span class="pl-k">return</span> <span class="pl-c1">true</span>}</td>
      </tr>
      <tr>
        <td id="L467" class="blob-num js-line-number" data-line-number="467"></td>
        <td id="LC467" class="blob-code blob-code-inner js-file-line"><span class="pl-k">return</span> <span class="pl-c1">false</span>}</td>
      </tr>
      <tr>
        <td id="L468" class="blob-num js-line-number" data-line-number="468"></td>
        <td id="LC468" class="blob-code blob-code-inner js-file-line"><span class="pl-smi">Tooltip</span>.<span class="pl-c1">prototype</span>.<span class="pl-en">leave</span><span class="pl-k">=</span><span class="pl-k">function</span>(<span class="pl-smi">obj</span>){<span class="pl-k">var</span> self<span class="pl-k">=</span>obj <span class="pl-k">instanceof</span> <span class="pl-c1">this</span>.<span class="pl-c1">constructor</span><span class="pl-k">?</span>obj<span class="pl-k">:</span><span class="pl-en">$</span>(<span class="pl-smi">obj</span>.<span class="pl-smi">currentTarget</span>).<span class="pl-c1">data</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>bs.<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span><span class="pl-c1">this</span>.<span class="pl-c1">type</span>)</td>
      </tr>
      <tr>
        <td id="L469" class="blob-num js-line-number" data-line-number="469"></td>
        <td id="LC469" class="blob-code blob-code-inner js-file-line"><span class="pl-k">if</span>(<span class="pl-k">!</span>self){self<span class="pl-k">=</span><span class="pl-k">new</span> <span class="pl-en">this.constructor</span>(<span class="pl-smi">obj</span>.<span class="pl-smi">currentTarget</span>,<span class="pl-c1">this</span>.<span class="pl-en">getDelegateOptions</span>())</td>
      </tr>
      <tr>
        <td id="L470" class="blob-num js-line-number" data-line-number="470"></td>
        <td id="LC470" class="blob-code blob-code-inner js-file-line"><span class="pl-en">$</span>(<span class="pl-smi">obj</span>.<span class="pl-smi">currentTarget</span>).<span class="pl-c1">data</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>bs.<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span><span class="pl-c1">this</span>.<span class="pl-c1">type</span>,self)}</td>
      </tr>
      <tr>
        <td id="L471" class="blob-num js-line-number" data-line-number="471"></td>
        <td id="LC471" class="blob-code blob-code-inner js-file-line"><span class="pl-k">if</span>(obj <span class="pl-k">instanceof</span> <span class="pl-smi">$</span>.<span class="pl-smi">Event</span>){<span class="pl-smi">self</span>.<span class="pl-smi">inState</span>[<span class="pl-smi">obj</span>.<span class="pl-c1">type</span><span class="pl-k">==</span><span class="pl-s"><span class="pl-pds">&#39;</span>focusout<span class="pl-pds">&#39;</span></span><span class="pl-k">?</span><span class="pl-s"><span class="pl-pds">&#39;</span>focus<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>hover<span class="pl-pds">&#39;</span></span>]<span class="pl-k">=</span><span class="pl-c1">false</span>}</td>
      </tr>
      <tr>
        <td id="L472" class="blob-num js-line-number" data-line-number="472"></td>
        <td id="LC472" class="blob-code blob-code-inner js-file-line"><span class="pl-k">if</span>(<span class="pl-smi">self</span>.<span class="pl-en">isInStateTrue</span>())<span class="pl-k">return</span></td>
      </tr>
      <tr>
        <td id="L473" class="blob-num js-line-number" data-line-number="473"></td>
        <td id="LC473" class="blob-code blob-code-inner js-file-line"><span class="pl-c1">clearTimeout</span>(<span class="pl-smi">self</span>.<span class="pl-smi">timeout</span>)</td>
      </tr>
      <tr>
        <td id="L474" class="blob-num js-line-number" data-line-number="474"></td>
        <td id="LC474" class="blob-code blob-code-inner js-file-line"><span class="pl-smi">self</span>.<span class="pl-smi">hoverState</span><span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">&#39;</span>out<span class="pl-pds">&#39;</span></span></td>
      </tr>
      <tr>
        <td id="L475" class="blob-num js-line-number" data-line-number="475"></td>
        <td id="LC475" class="blob-code blob-code-inner js-file-line"><span class="pl-k">if</span>(<span class="pl-k">!</span><span class="pl-smi">self</span>.<span class="pl-c1">options</span>.<span class="pl-smi">delay</span><span class="pl-k">||!</span><span class="pl-smi">self</span>.<span class="pl-c1">options</span>.<span class="pl-smi">delay</span>.<span class="pl-smi">hide</span>)<span class="pl-k">return</span> <span class="pl-smi">self</span>.<span class="pl-en">hide</span>()</td>
      </tr>
      <tr>
        <td id="L476" class="blob-num js-line-number" data-line-number="476"></td>
        <td id="LC476" class="blob-code blob-code-inner js-file-line"><span class="pl-smi">self</span>.<span class="pl-smi">timeout</span><span class="pl-k">=</span><span class="pl-c1">setTimeout</span>(<span class="pl-k">function</span>(){<span class="pl-k">if</span>(<span class="pl-smi">self</span>.<span class="pl-smi">hoverState</span><span class="pl-k">==</span><span class="pl-s"><span class="pl-pds">&#39;</span>out<span class="pl-pds">&#39;</span></span>)<span class="pl-smi">self</span>.<span class="pl-en">hide</span>()},<span class="pl-smi">self</span>.<span class="pl-c1">options</span>.<span class="pl-smi">delay</span>.<span class="pl-smi">hide</span>)}</td>
      </tr>
      <tr>
        <td id="L477" class="blob-num js-line-number" data-line-number="477"></td>
        <td id="LC477" class="blob-code blob-code-inner js-file-line"><span class="pl-smi">Tooltip</span>.<span class="pl-c1">prototype</span>.<span class="pl-en">show</span><span class="pl-k">=</span><span class="pl-k">function</span>(){<span class="pl-k">var</span> e<span class="pl-k">=</span><span class="pl-smi">$</span>.<span class="pl-en">Event</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>show.bs.<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span><span class="pl-c1">this</span>.<span class="pl-c1">type</span>)</td>
      </tr>
      <tr>
        <td id="L478" class="blob-num js-line-number" data-line-number="478"></td>
        <td id="LC478" class="blob-code blob-code-inner js-file-line"><span class="pl-k">if</span>(<span class="pl-c1">this</span>.<span class="pl-en">hasContent</span>()<span class="pl-k">&amp;&amp;</span><span class="pl-c1">this</span>.<span class="pl-smi">enabled</span>){<span class="pl-c1">this</span>.<span class="pl-smi">$element</span>.<span class="pl-en">trigger</span>(e)</td>
      </tr>
      <tr>
        <td id="L479" class="blob-num js-line-number" data-line-number="479"></td>
        <td id="LC479" class="blob-code blob-code-inner js-file-line"><span class="pl-k">var</span> inDom<span class="pl-k">=</span><span class="pl-smi">$</span>.<span class="pl-c1">contains</span>(<span class="pl-c1">this</span>.<span class="pl-smi">$element</span>[<span class="pl-c1">0</span>].<span class="pl-c1">ownerDocument</span>.<span class="pl-c1">documentElement</span>,<span class="pl-c1">this</span>.<span class="pl-smi">$element</span>[<span class="pl-c1">0</span>])</td>
      </tr>
      <tr>
        <td id="L480" class="blob-num js-line-number" data-line-number="480"></td>
        <td id="LC480" class="blob-code blob-code-inner js-file-line"><span class="pl-k">if</span>(<span class="pl-smi">e</span>.<span class="pl-en">isDefaultPrevented</span>()<span class="pl-k">||!</span>inDom)<span class="pl-k">return</span></td>
      </tr>
      <tr>
        <td id="L481" class="blob-num js-line-number" data-line-number="481"></td>
        <td id="LC481" class="blob-code blob-code-inner js-file-line"><span class="pl-k">var</span> that<span class="pl-k">=</span><span class="pl-c1">this</span></td>
      </tr>
      <tr>
        <td id="L482" class="blob-num js-line-number" data-line-number="482"></td>
        <td id="LC482" class="blob-code blob-code-inner js-file-line"><span class="pl-k">var</span> $tip<span class="pl-k">=</span><span class="pl-c1">this</span>.<span class="pl-en">tip</span>()</td>
      </tr>
      <tr>
        <td id="L483" class="blob-num js-line-number" data-line-number="483"></td>
        <td id="LC483" class="blob-code blob-code-inner js-file-line"><span class="pl-k">var</span> tipId<span class="pl-k">=</span><span class="pl-c1">this</span>.<span class="pl-en">getUID</span>(<span class="pl-c1">this</span>.<span class="pl-c1">type</span>)</td>
      </tr>
      <tr>
        <td id="L484" class="blob-num js-line-number" data-line-number="484"></td>
        <td id="LC484" class="blob-code blob-code-inner js-file-line"><span class="pl-c1">this</span>.<span class="pl-en">setContent</span>()</td>
      </tr>
      <tr>
        <td id="L485" class="blob-num js-line-number" data-line-number="485"></td>
        <td id="LC485" class="blob-code blob-code-inner js-file-line"><span class="pl-smi">$tip</span>.<span class="pl-en">attr</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>id<span class="pl-pds">&#39;</span></span>,tipId)</td>
      </tr>
      <tr>
        <td id="L486" class="blob-num js-line-number" data-line-number="486"></td>
        <td id="LC486" class="blob-code blob-code-inner js-file-line"><span class="pl-c1">this</span>.<span class="pl-smi">$element</span>.<span class="pl-en">attr</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>aria-describedby<span class="pl-pds">&#39;</span></span>,tipId)</td>
      </tr>
      <tr>
        <td id="L487" class="blob-num js-line-number" data-line-number="487"></td>
        <td id="LC487" class="blob-code blob-code-inner js-file-line"><span class="pl-k">if</span>(<span class="pl-c1">this</span>.<span class="pl-c1">options</span>.<span class="pl-smi">animation</span>)<span class="pl-smi">$tip</span>.<span class="pl-en">addClass</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>fade<span class="pl-pds">&#39;</span></span>)</td>
      </tr>
      <tr>
        <td id="L488" class="blob-num js-line-number" data-line-number="488"></td>
        <td id="LC488" class="blob-code blob-code-inner js-file-line"><span class="pl-k">var</span> placement<span class="pl-k">=</span><span class="pl-k">typeof</span> <span class="pl-c1">this</span>.<span class="pl-c1">options</span>.<span class="pl-smi">placement</span><span class="pl-k">==</span><span class="pl-s"><span class="pl-pds">&#39;</span>function<span class="pl-pds">&#39;</span></span><span class="pl-k">?</span><span class="pl-c1">this</span>.<span class="pl-c1">options</span>.<span class="pl-smi">placement</span>.<span class="pl-c1">call</span>(<span class="pl-c1">this</span>,$tip[<span class="pl-c1">0</span>],<span class="pl-c1">this</span>.<span class="pl-smi">$element</span>[<span class="pl-c1">0</span>])<span class="pl-k">:</span><span class="pl-c1">this</span>.<span class="pl-c1">options</span>.<span class="pl-smi">placement</span></td>
      </tr>
      <tr>
        <td id="L489" class="blob-num js-line-number" data-line-number="489"></td>
        <td id="LC489" class="blob-code blob-code-inner js-file-line"><span class="pl-k">var</span> autoToken<span class="pl-k">=</span><span class="pl-sr"><span class="pl-pds">/</span><span class="pl-c1">\s</span><span class="pl-k">?</span>auto<span class="pl-k">?</span><span class="pl-c1">\s</span><span class="pl-k">?</span><span class="pl-pds">/</span>i</span></td>
      </tr>
      <tr>
        <td id="L490" class="blob-num js-line-number" data-line-number="490"></td>
        <td id="LC490" class="blob-code blob-code-inner js-file-line"><span class="pl-k">var</span> autoPlace<span class="pl-k">=</span><span class="pl-smi">autoToken</span>.<span class="pl-c1">test</span>(placement)</td>
      </tr>
      <tr>
        <td id="L491" class="blob-num js-line-number" data-line-number="491"></td>
        <td id="LC491" class="blob-code blob-code-inner js-file-line"><span class="pl-k">if</span>(autoPlace)placement<span class="pl-k">=</span><span class="pl-smi">placement</span>.<span class="pl-c1">replace</span>(autoToken,<span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span>)<span class="pl-k">||</span><span class="pl-s"><span class="pl-pds">&#39;</span>top<span class="pl-pds">&#39;</span></span></td>
      </tr>
      <tr>
        <td id="L492" class="blob-num js-line-number" data-line-number="492"></td>
        <td id="LC492" class="blob-code blob-code-inner js-file-line"><span class="pl-smi">$tip</span>.<span class="pl-c1">detach</span>().<span class="pl-en">css</span>({top<span class="pl-k">:</span><span class="pl-c1">0</span>,left<span class="pl-k">:</span><span class="pl-c1">0</span>,display<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>block<span class="pl-pds">&#39;</span></span>}).<span class="pl-en">addClass</span>(placement).<span class="pl-c1">data</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>bs.<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span><span class="pl-c1">this</span>.<span class="pl-c1">type</span>,<span class="pl-c1">this</span>)</td>
      </tr>
      <tr>
        <td id="L493" class="blob-num js-line-number" data-line-number="493"></td>
        <td id="LC493" class="blob-code blob-code-inner js-file-line"><span class="pl-c1">this</span>.<span class="pl-c1">options</span>.<span class="pl-smi">container</span><span class="pl-k">?</span><span class="pl-smi">$tip</span>.<span class="pl-en">appendTo</span>(<span class="pl-c1">this</span>.<span class="pl-c1">options</span>.<span class="pl-smi">container</span>)<span class="pl-k">:</span><span class="pl-smi">$tip</span>.<span class="pl-en">insertAfter</span>(<span class="pl-c1">this</span>.<span class="pl-smi">$element</span>)</td>
      </tr>
      <tr>
        <td id="L494" class="blob-num js-line-number" data-line-number="494"></td>
        <td id="LC494" class="blob-code blob-code-inner js-file-line"><span class="pl-c1">this</span>.<span class="pl-smi">$element</span>.<span class="pl-en">trigger</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>inserted.bs.<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span><span class="pl-c1">this</span>.<span class="pl-c1">type</span>)</td>
      </tr>
      <tr>
        <td id="L495" class="blob-num js-line-number" data-line-number="495"></td>
        <td id="LC495" class="blob-code blob-code-inner js-file-line"><span class="pl-k">var</span> pos<span class="pl-k">=</span><span class="pl-c1">this</span>.<span class="pl-en">getPosition</span>()</td>
      </tr>
      <tr>
        <td id="L496" class="blob-num js-line-number" data-line-number="496"></td>
        <td id="LC496" class="blob-code blob-code-inner js-file-line"><span class="pl-k">var</span> actualWidth<span class="pl-k">=</span>$tip[<span class="pl-c1">0</span>].<span class="pl-smi">offsetWidth</span></td>
      </tr>
      <tr>
        <td id="L497" class="blob-num js-line-number" data-line-number="497"></td>
        <td id="LC497" class="blob-code blob-code-inner js-file-line"><span class="pl-k">var</span> actualHeight<span class="pl-k">=</span>$tip[<span class="pl-c1">0</span>].<span class="pl-smi">offsetHeight</span></td>
      </tr>
      <tr>
        <td id="L498" class="blob-num js-line-number" data-line-number="498"></td>
        <td id="LC498" class="blob-code blob-code-inner js-file-line"><span class="pl-k">if</span>(autoPlace){<span class="pl-k">var</span> orgPlacement<span class="pl-k">=</span>placement</td>
      </tr>
      <tr>
        <td id="L499" class="blob-num js-line-number" data-line-number="499"></td>
        <td id="LC499" class="blob-code blob-code-inner js-file-line"><span class="pl-k">var</span> viewportDim<span class="pl-k">=</span><span class="pl-c1">this</span>.<span class="pl-en">getPosition</span>(<span class="pl-c1">this</span>.<span class="pl-smi">$viewport</span>)</td>
      </tr>
      <tr>
        <td id="L500" class="blob-num js-line-number" data-line-number="500"></td>
        <td id="LC500" class="blob-code blob-code-inner js-file-line">placement<span class="pl-k">=</span>placement<span class="pl-k">==</span><span class="pl-s"><span class="pl-pds">&#39;</span>bottom<span class="pl-pds">&#39;</span></span><span class="pl-k">&amp;&amp;</span><span class="pl-smi">pos</span>.<span class="pl-c1">bottom</span><span class="pl-k">+</span>actualHeight<span class="pl-k">&gt;</span><span class="pl-smi">viewportDim</span>.<span class="pl-c1">bottom</span><span class="pl-k">?</span><span class="pl-s"><span class="pl-pds">&#39;</span>top<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span>placement<span class="pl-k">==</span><span class="pl-s"><span class="pl-pds">&#39;</span>top<span class="pl-pds">&#39;</span></span><span class="pl-k">&amp;&amp;</span><span class="pl-smi">pos</span>.<span class="pl-c1">top</span><span class="pl-k">-</span>actualHeight<span class="pl-k">&lt;</span><span class="pl-smi">viewportDim</span>.<span class="pl-c1">top</span><span class="pl-k">?</span><span class="pl-s"><span class="pl-pds">&#39;</span>bottom<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span>placement<span class="pl-k">==</span><span class="pl-s"><span class="pl-pds">&#39;</span>right<span class="pl-pds">&#39;</span></span><span class="pl-k">&amp;&amp;</span><span class="pl-smi">pos</span>.<span class="pl-c1">right</span><span class="pl-k">+</span>actualWidth<span class="pl-k">&gt;</span><span class="pl-smi">viewportDim</span>.<span class="pl-c1">width</span><span class="pl-k">?</span><span class="pl-s"><span class="pl-pds">&#39;</span>left<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span>placement<span class="pl-k">==</span><span class="pl-s"><span class="pl-pds">&#39;</span>left<span class="pl-pds">&#39;</span></span><span class="pl-k">&amp;&amp;</span><span class="pl-smi">pos</span>.<span class="pl-c1">left</span><span class="pl-k">-</span>actualWidth<span class="pl-k">&lt;</span><span class="pl-smi">viewportDim</span>.<span class="pl-c1">left</span><span class="pl-k">?</span><span class="pl-s"><span class="pl-pds">&#39;</span>right<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span>placement</td>
      </tr>
      <tr>
        <td id="L501" class="blob-num js-line-number" data-line-number="501"></td>
        <td id="LC501" class="blob-code blob-code-inner js-file-line"><span class="pl-smi">$tip</span>.<span class="pl-en">removeClass</span>(orgPlacement).<span class="pl-en">addClass</span>(placement)}</td>
      </tr>
      <tr>
        <td id="L502" class="blob-num js-line-number" data-line-number="502"></td>
        <td id="LC502" class="blob-code blob-code-inner js-file-line"><span class="pl-k">var</span> calculatedOffset<span class="pl-k">=</span><span class="pl-c1">this</span>.<span class="pl-en">getCalculatedOffset</span>(placement,pos,actualWidth,actualHeight)</td>
      </tr>
      <tr>
        <td id="L503" class="blob-num js-line-number" data-line-number="503"></td>
        <td id="LC503" class="blob-code blob-code-inner js-file-line"><span class="pl-c1">this</span>.<span class="pl-en">applyPlacement</span>(calculatedOffset,placement)</td>
      </tr>
      <tr>
        <td id="L504" class="blob-num js-line-number" data-line-number="504"></td>
        <td id="LC504" class="blob-code blob-code-inner js-file-line"><span class="pl-k">var</span> <span class="pl-en">complete</span><span class="pl-k">=</span><span class="pl-k">function</span>(){<span class="pl-k">var</span> prevHoverState<span class="pl-k">=</span><span class="pl-smi">that</span>.<span class="pl-smi">hoverState</span></td>
      </tr>
      <tr>
        <td id="L505" class="blob-num js-line-number" data-line-number="505"></td>
        <td id="LC505" class="blob-code blob-code-inner js-file-line"><span class="pl-smi">that</span>.<span class="pl-smi">$element</span>.<span class="pl-en">trigger</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>shown.bs.<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span><span class="pl-smi">that</span>.<span class="pl-c1">type</span>)</td>
      </tr>
      <tr>
        <td id="L506" class="blob-num js-line-number" data-line-number="506"></td>
        <td id="LC506" class="blob-code blob-code-inner js-file-line"><span class="pl-smi">that</span>.<span class="pl-smi">hoverState</span><span class="pl-k">=</span><span class="pl-c1">null</span></td>
      </tr>
      <tr>
        <td id="L507" class="blob-num js-line-number" data-line-number="507"></td>
        <td id="LC507" class="blob-code blob-code-inner js-file-line"><span class="pl-k">if</span>(prevHoverState<span class="pl-k">==</span><span class="pl-s"><span class="pl-pds">&#39;</span>out<span class="pl-pds">&#39;</span></span>)<span class="pl-smi">that</span>.<span class="pl-en">leave</span>(that)}</td>
      </tr>
      <tr>
        <td id="L508" class="blob-num js-line-number" data-line-number="508"></td>
        <td id="LC508" class="blob-code blob-code-inner js-file-line"><span class="pl-smi">$</span>.<span class="pl-smi">support</span>.<span class="pl-smi">transition</span><span class="pl-k">&amp;&amp;</span><span class="pl-c1">this</span>.<span class="pl-smi">$tip</span>.<span class="pl-en">hasClass</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>fade<span class="pl-pds">&#39;</span></span>)<span class="pl-k">?</span><span class="pl-smi">$tip</span>.<span class="pl-en">one</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>bsTransitionEnd<span class="pl-pds">&#39;</span></span>,complete).<span class="pl-en">emulateTransitionEnd</span>(<span class="pl-smi">Tooltip</span>.<span class="pl-c1">TRANSITION_DURATION</span>)<span class="pl-k">:</span><span class="pl-en">complete</span>()}}</td>
      </tr>
      <tr>
        <td id="L509" class="blob-num js-line-number" data-line-number="509"></td>
        <td id="LC509" class="blob-code blob-code-inner js-file-line"><span class="pl-smi">Tooltip</span>.<span class="pl-c1">prototype</span>.<span class="pl-en">applyPlacement</span><span class="pl-k">=</span><span class="pl-k">function</span>(<span class="pl-smi">offset</span>,<span class="pl-smi">placement</span>){<span class="pl-k">var</span> $tip<span class="pl-k">=</span><span class="pl-c1">this</span>.<span class="pl-en">tip</span>()</td>
      </tr>
      <tr>
        <td id="L510" class="blob-num js-line-number" data-line-number="510"></td>
        <td id="LC510" class="blob-code blob-code-inner js-file-line"><span class="pl-k">var</span> width<span class="pl-k">=</span>$tip[<span class="pl-c1">0</span>].<span class="pl-smi">offsetWidth</span></td>
      </tr>
      <tr>
        <td id="L511" class="blob-num js-line-number" data-line-number="511"></td>
        <td id="LC511" class="blob-code blob-code-inner js-file-line"><span class="pl-k">var</span> height<span class="pl-k">=</span>$tip[<span class="pl-c1">0</span>].<span class="pl-smi">offsetHeight</span></td>
      </tr>
      <tr>
        <td id="L512" class="blob-num js-line-number" data-line-number="512"></td>
        <td id="LC512" class="blob-code blob-code-inner js-file-line"><span class="pl-k">var</span> marginTop<span class="pl-k">=</span><span class="pl-c1">parseInt</span>(<span class="pl-smi">$tip</span>.<span class="pl-en">css</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>margin-top<span class="pl-pds">&#39;</span></span>),<span class="pl-c1">10</span>)</td>
      </tr>
      <tr>
        <td id="L513" class="blob-num js-line-number" data-line-number="513"></td>
        <td id="LC513" class="blob-code blob-code-inner js-file-line"><span class="pl-k">var</span> marginLeft<span class="pl-k">=</span><span class="pl-c1">parseInt</span>(<span class="pl-smi">$tip</span>.<span class="pl-en">css</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>margin-left<span class="pl-pds">&#39;</span></span>),<span class="pl-c1">10</span>)</td>
      </tr>
      <tr>
        <td id="L514" class="blob-num js-line-number" data-line-number="514"></td>
        <td id="LC514" class="blob-code blob-code-inner js-file-line"><span class="pl-k">if</span>(<span class="pl-c1">isNaN</span>(marginTop))marginTop<span class="pl-k">=</span><span class="pl-c1">0</span></td>
      </tr>
      <tr>
        <td id="L515" class="blob-num js-line-number" data-line-number="515"></td>
        <td id="LC515" class="blob-code blob-code-inner js-file-line"><span class="pl-k">if</span>(<span class="pl-c1">isNaN</span>(marginLeft))marginLeft<span class="pl-k">=</span><span class="pl-c1">0</span></td>
      </tr>
      <tr>
        <td id="L516" class="blob-num js-line-number" data-line-number="516"></td>
        <td id="LC516" class="blob-code blob-code-inner js-file-line"><span class="pl-smi">offset</span>.<span class="pl-c1">top</span><span class="pl-k">+=</span>marginTop</td>
      </tr>
      <tr>
        <td id="L517" class="blob-num js-line-number" data-line-number="517"></td>
        <td id="LC517" class="blob-code blob-code-inner js-file-line"><span class="pl-smi">offset</span>.<span class="pl-c1">left</span><span class="pl-k">+=</span>marginLeft</td>
      </tr>
      <tr>
        <td id="L518" class="blob-num js-line-number" data-line-number="518"></td>
        <td id="LC518" class="blob-code blob-code-inner js-file-line"><span class="pl-smi">$</span>.<span class="pl-smi">offset</span>.<span class="pl-en">setOffset</span>($tip[<span class="pl-c1">0</span>],<span class="pl-smi">$</span>.<span class="pl-en">extend</span>({<span class="pl-en">using</span><span class="pl-k">:</span><span class="pl-k">function</span>(<span class="pl-smi">props</span>){<span class="pl-smi">$tip</span>.<span class="pl-en">css</span>({top<span class="pl-k">:</span><span class="pl-c1">Math</span>.<span class="pl-c1">round</span>(<span class="pl-smi">props</span>.<span class="pl-c1">top</span>),left<span class="pl-k">:</span><span class="pl-c1">Math</span>.<span class="pl-c1">round</span>(<span class="pl-smi">props</span>.<span class="pl-c1">left</span>)})}},offset),<span class="pl-c1">0</span>)</td>
      </tr>
      <tr>
        <td id="L519" class="blob-num js-line-number" data-line-number="519"></td>
        <td id="LC519" class="blob-code blob-code-inner js-file-line"><span class="pl-smi">$tip</span>.<span class="pl-en">addClass</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>in<span class="pl-pds">&#39;</span></span>)</td>
      </tr>
      <tr>
        <td id="L520" class="blob-num js-line-number" data-line-number="520"></td>
        <td id="LC520" class="blob-code blob-code-inner js-file-line"><span class="pl-k">var</span> actualWidth<span class="pl-k">=</span>$tip[<span class="pl-c1">0</span>].<span class="pl-smi">offsetWidth</span></td>
      </tr>
      <tr>
        <td id="L521" class="blob-num js-line-number" data-line-number="521"></td>
        <td id="LC521" class="blob-code blob-code-inner js-file-line"><span class="pl-k">var</span> actualHeight<span class="pl-k">=</span>$tip[<span class="pl-c1">0</span>].<span class="pl-smi">offsetHeight</span></td>
      </tr>
      <tr>
        <td id="L522" class="blob-num js-line-number" data-line-number="522"></td>
        <td id="LC522" class="blob-code blob-code-inner js-file-line"><span class="pl-k">if</span>(placement<span class="pl-k">==</span><span class="pl-s"><span class="pl-pds">&#39;</span>top<span class="pl-pds">&#39;</span></span><span class="pl-k">&amp;&amp;</span>actualHeight<span class="pl-k">!=</span>height){<span class="pl-smi">offset</span>.<span class="pl-c1">top</span><span class="pl-k">=</span><span class="pl-smi">offset</span>.<span class="pl-c1">top</span><span class="pl-k">+</span>height<span class="pl-k">-</span>actualHeight}</td>
      </tr>
      <tr>
        <td id="L523" class="blob-num js-line-number" data-line-number="523"></td>
        <td id="LC523" class="blob-code blob-code-inner js-file-line"><span class="pl-k">var</span> delta<span class="pl-k">=</span><span class="pl-c1">this</span>.<span class="pl-en">getViewportAdjustedDelta</span>(placement,offset,actualWidth,actualHeight)</td>
      </tr>
      <tr>
        <td id="L524" class="blob-num js-line-number" data-line-number="524"></td>
        <td id="LC524" class="blob-code blob-code-inner js-file-line"><span class="pl-k">if</span>(<span class="pl-smi">delta</span>.<span class="pl-c1">left</span>)<span class="pl-smi">offset</span>.<span class="pl-c1">left</span><span class="pl-k">+=</span><span class="pl-smi">delta</span>.<span class="pl-c1">left</span></td>
      </tr>
      <tr>
        <td id="L525" class="blob-num js-line-number" data-line-number="525"></td>
        <td id="LC525" class="blob-code blob-code-inner js-file-line"><span class="pl-k">else</span> <span class="pl-smi">offset</span>.<span class="pl-c1">top</span><span class="pl-k">+=</span><span class="pl-smi">delta</span>.<span class="pl-c1">top</span></td>
      </tr>
      <tr>
        <td id="L526" class="blob-num js-line-number" data-line-number="526"></td>
        <td id="LC526" class="blob-code blob-code-inner js-file-line"><span class="pl-k">var</span> isVertical<span class="pl-k">=</span><span class="pl-sr"><span class="pl-pds">/</span>top<span class="pl-k">|</span>bottom<span class="pl-pds">/</span></span>.<span class="pl-c1">test</span>(placement)</td>
      </tr>
      <tr>
        <td id="L527" class="blob-num js-line-number" data-line-number="527"></td>
        <td id="LC527" class="blob-code blob-code-inner js-file-line"><span class="pl-k">var</span> arrowDelta<span class="pl-k">=</span>isVertical<span class="pl-k">?</span><span class="pl-smi">delta</span>.<span class="pl-c1">left</span><span class="pl-k">*</span><span class="pl-c1">2</span><span class="pl-k">-</span>width<span class="pl-k">+</span>actualWidth<span class="pl-k">:</span><span class="pl-smi">delta</span>.<span class="pl-c1">top</span><span class="pl-k">*</span><span class="pl-c1">2</span><span class="pl-k">-</span>height<span class="pl-k">+</span>actualHeight</td>
      </tr>
      <tr>
        <td id="L528" class="blob-num js-line-number" data-line-number="528"></td>
        <td id="LC528" class="blob-code blob-code-inner js-file-line"><span class="pl-k">var</span> arrowOffsetPosition<span class="pl-k">=</span>isVertical<span class="pl-k">?</span><span class="pl-s"><span class="pl-pds">&#39;</span>offsetWidth<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>offsetHeight<span class="pl-pds">&#39;</span></span></td>
      </tr>
      <tr>
        <td id="L529" class="blob-num js-line-number" data-line-number="529"></td>
        <td id="LC529" class="blob-code blob-code-inner js-file-line"><span class="pl-smi">$tip</span>.<span class="pl-en">offset</span>(offset)</td>
      </tr>
      <tr>
        <td id="L530" class="blob-num js-line-number" data-line-number="530"></td>
        <td id="LC530" class="blob-code blob-code-inner js-file-line"><span class="pl-c1">this</span>.<span class="pl-en">replaceArrow</span>(arrowDelta,$tip[<span class="pl-c1">0</span>][arrowOffsetPosition],isVertical)}</td>
      </tr>
      <tr>
        <td id="L531" class="blob-num js-line-number" data-line-number="531"></td>
        <td id="LC531" class="blob-code blob-code-inner js-file-line"><span class="pl-smi">Tooltip</span>.<span class="pl-c1">prototype</span>.<span class="pl-en">replaceArrow</span><span class="pl-k">=</span><span class="pl-k">function</span>(<span class="pl-smi">delta</span>,<span class="pl-smi">dimension</span>,<span class="pl-smi">isVertical</span>){<span class="pl-c1">this</span>.<span class="pl-en">arrow</span>().<span class="pl-en">css</span>(isVertical<span class="pl-k">?</span><span class="pl-s"><span class="pl-pds">&#39;</span>left<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>top<span class="pl-pds">&#39;</span></span>,<span class="pl-c1">50</span><span class="pl-k">*</span>(<span class="pl-c1">1</span><span class="pl-k">-</span>delta<span class="pl-k">/</span>dimension)<span class="pl-k">+</span><span class="pl-s"><span class="pl-pds">&#39;</span>%<span class="pl-pds">&#39;</span></span>).<span class="pl-en">css</span>(isVertical<span class="pl-k">?</span><span class="pl-s"><span class="pl-pds">&#39;</span>top<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>left<span class="pl-pds">&#39;</span></span>,<span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span>)}</td>
      </tr>
      <tr>
        <td id="L532" class="blob-num js-line-number" data-line-number="532"></td>
        <td id="LC532" class="blob-code blob-code-inner js-file-line"><span class="pl-smi">Tooltip</span>.<span class="pl-c1">prototype</span>.<span class="pl-en">setContent</span><span class="pl-k">=</span><span class="pl-k">function</span>(){<span class="pl-k">var</span> $tip<span class="pl-k">=</span><span class="pl-c1">this</span>.<span class="pl-en">tip</span>()</td>
      </tr>
      <tr>
        <td id="L533" class="blob-num js-line-number" data-line-number="533"></td>
        <td id="LC533" class="blob-code blob-code-inner js-file-line"><span class="pl-k">var</span> title<span class="pl-k">=</span><span class="pl-c1">this</span>.<span class="pl-en">getTitle</span>()</td>
      </tr>
      <tr>
        <td id="L534" class="blob-num js-line-number" data-line-number="534"></td>
        <td id="LC534" class="blob-code blob-code-inner js-file-line"><span class="pl-smi">$tip</span>.<span class="pl-c1">find</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>.tooltip-inner<span class="pl-pds">&#39;</span></span>)[<span class="pl-c1">this</span>.<span class="pl-c1">options</span>.<span class="pl-smi">html</span><span class="pl-k">?</span><span class="pl-s"><span class="pl-pds">&#39;</span>html<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>text<span class="pl-pds">&#39;</span></span>](title)</td>
      </tr>
      <tr>
        <td id="L535" class="blob-num js-line-number" data-line-number="535"></td>
        <td id="LC535" class="blob-code blob-code-inner js-file-line"><span class="pl-smi">$tip</span>.<span class="pl-en">removeClass</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>fade in top bottom left right<span class="pl-pds">&#39;</span></span>)}</td>
      </tr>
      <tr>
        <td id="L536" class="blob-num js-line-number" data-line-number="536"></td>
        <td id="LC536" class="blob-code blob-code-inner js-file-line"><span class="pl-smi">Tooltip</span>.<span class="pl-c1">prototype</span>.<span class="pl-en">hide</span><span class="pl-k">=</span><span class="pl-k">function</span>(<span class="pl-smi">callback</span>){<span class="pl-k">var</span> that<span class="pl-k">=</span><span class="pl-c1">this</span></td>
      </tr>
      <tr>
        <td id="L537" class="blob-num js-line-number" data-line-number="537"></td>
        <td id="LC537" class="blob-code blob-code-inner js-file-line"><span class="pl-k">var</span> $tip<span class="pl-k">=</span><span class="pl-en">$</span>(<span class="pl-c1">this</span>.<span class="pl-smi">$tip</span>)</td>
      </tr>
      <tr>
        <td id="L538" class="blob-num js-line-number" data-line-number="538"></td>
        <td id="LC538" class="blob-code blob-code-inner js-file-line"><span class="pl-k">var</span> e<span class="pl-k">=</span><span class="pl-smi">$</span>.<span class="pl-en">Event</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>hide.bs.<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span><span class="pl-c1">this</span>.<span class="pl-c1">type</span>)</td>
      </tr>
      <tr>
        <td id="L539" class="blob-num js-line-number" data-line-number="539"></td>
        <td id="LC539" class="blob-code blob-code-inner js-file-line"><span class="pl-k">function</span> <span class="pl-en">complete</span>(){<span class="pl-k">if</span>(<span class="pl-smi">that</span>.<span class="pl-smi">hoverState</span><span class="pl-k">!=</span><span class="pl-s"><span class="pl-pds">&#39;</span>in<span class="pl-pds">&#39;</span></span>)<span class="pl-smi">$tip</span>.<span class="pl-c1">detach</span>()</td>
      </tr>
      <tr>
        <td id="L540" class="blob-num js-line-number" data-line-number="540"></td>
        <td id="LC540" class="blob-code blob-code-inner js-file-line"><span class="pl-k">if</span>(<span class="pl-smi">that</span>.<span class="pl-smi">$element</span>){<span class="pl-smi">that</span>.<span class="pl-smi">$element</span>.<span class="pl-en">removeAttr</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>aria-describedby<span class="pl-pds">&#39;</span></span>).<span class="pl-en">trigger</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>hidden.bs.<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span><span class="pl-smi">that</span>.<span class="pl-c1">type</span>)}</td>
      </tr>
      <tr>
        <td id="L541" class="blob-num js-line-number" data-line-number="541"></td>
        <td id="LC541" class="blob-code blob-code-inner js-file-line">callback<span class="pl-k">&amp;&amp;</span><span class="pl-en">callback</span>()}</td>
      </tr>
      <tr>
        <td id="L542" class="blob-num js-line-number" data-line-number="542"></td>
        <td id="LC542" class="blob-code blob-code-inner js-file-line"><span class="pl-c1">this</span>.<span class="pl-smi">$element</span>.<span class="pl-en">trigger</span>(e)</td>
      </tr>
      <tr>
        <td id="L543" class="blob-num js-line-number" data-line-number="543"></td>
        <td id="LC543" class="blob-code blob-code-inner js-file-line"><span class="pl-k">if</span>(<span class="pl-smi">e</span>.<span class="pl-en">isDefaultPrevented</span>())<span class="pl-k">return</span></td>
      </tr>
      <tr>
        <td id="L544" class="blob-num js-line-number" data-line-number="544"></td>
        <td id="LC544" class="blob-code blob-code-inner js-file-line"><span class="pl-smi">$tip</span>.<span class="pl-en">removeClass</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>in<span class="pl-pds">&#39;</span></span>)</td>
      </tr>
      <tr>
        <td id="L545" class="blob-num js-line-number" data-line-number="545"></td>
        <td id="LC545" class="blob-code blob-code-inner js-file-line"><span class="pl-smi">$</span>.<span class="pl-smi">support</span>.<span class="pl-smi">transition</span><span class="pl-k">&amp;&amp;</span><span class="pl-smi">$tip</span>.<span class="pl-en">hasClass</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>fade<span class="pl-pds">&#39;</span></span>)<span class="pl-k">?</span><span class="pl-smi">$tip</span>.<span class="pl-en">one</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>bsTransitionEnd<span class="pl-pds">&#39;</span></span>,complete).<span class="pl-en">emulateTransitionEnd</span>(<span class="pl-smi">Tooltip</span>.<span class="pl-c1">TRANSITION_DURATION</span>)<span class="pl-k">:</span><span class="pl-en">complete</span>()</td>
      </tr>
      <tr>
        <td id="L546" class="blob-num js-line-number" data-line-number="546"></td>
        <td id="LC546" class="blob-code blob-code-inner js-file-line"><span class="pl-c1">this</span>.<span class="pl-smi">hoverState</span><span class="pl-k">=</span><span class="pl-c1">null</span></td>
      </tr>
      <tr>
        <td id="L547" class="blob-num js-line-number" data-line-number="547"></td>
        <td id="LC547" class="blob-code blob-code-inner js-file-line"><span class="pl-k">return</span> <span class="pl-c1">this</span>}</td>
      </tr>
      <tr>
        <td id="L548" class="blob-num js-line-number" data-line-number="548"></td>
        <td id="LC548" class="blob-code blob-code-inner js-file-line"><span class="pl-smi">Tooltip</span>.<span class="pl-c1">prototype</span>.<span class="pl-en">fixTitle</span><span class="pl-k">=</span><span class="pl-k">function</span>(){<span class="pl-k">var</span> $e<span class="pl-k">=</span><span class="pl-c1">this</span>.<span class="pl-smi">$element</span></td>
      </tr>
      <tr>
        <td id="L549" class="blob-num js-line-number" data-line-number="549"></td>
        <td id="LC549" class="blob-code blob-code-inner js-file-line"><span class="pl-k">if</span>(<span class="pl-smi">$e</span>.<span class="pl-en">attr</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>title<span class="pl-pds">&#39;</span></span>)<span class="pl-k">||</span><span class="pl-k">typeof</span> <span class="pl-smi">$e</span>.<span class="pl-en">attr</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>data-original-title<span class="pl-pds">&#39;</span></span>)<span class="pl-k">!=</span><span class="pl-s"><span class="pl-pds">&#39;</span>string<span class="pl-pds">&#39;</span></span>){<span class="pl-smi">$e</span>.<span class="pl-en">attr</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>data-original-title<span class="pl-pds">&#39;</span></span>,<span class="pl-smi">$e</span>.<span class="pl-en">attr</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>title<span class="pl-pds">&#39;</span></span>)<span class="pl-k">||</span><span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span>).<span class="pl-en">attr</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>title<span class="pl-pds">&#39;</span></span>,<span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span>)}}</td>
      </tr>
      <tr>
        <td id="L550" class="blob-num js-line-number" data-line-number="550"></td>
        <td id="LC550" class="blob-code blob-code-inner js-file-line"><span class="pl-smi">Tooltip</span>.<span class="pl-c1">prototype</span>.<span class="pl-en">hasContent</span><span class="pl-k">=</span><span class="pl-k">function</span>(){<span class="pl-k">return</span> <span class="pl-c1">this</span>.<span class="pl-en">getTitle</span>()}</td>
      </tr>
      <tr>
        <td id="L551" class="blob-num js-line-number" data-line-number="551"></td>
        <td id="LC551" class="blob-code blob-code-inner js-file-line"><span class="pl-smi">Tooltip</span>.<span class="pl-c1">prototype</span>.<span class="pl-en">getPosition</span><span class="pl-k">=</span><span class="pl-k">function</span>(<span class="pl-smi">$element</span>){$element<span class="pl-k">=</span>$element<span class="pl-k">||</span><span class="pl-c1">this</span>.<span class="pl-smi">$element</span></td>
      </tr>
      <tr>
        <td id="L552" class="blob-num js-line-number" data-line-number="552"></td>
        <td id="LC552" class="blob-code blob-code-inner js-file-line"><span class="pl-k">var</span> el<span class="pl-k">=</span>$element[<span class="pl-c1">0</span>]</td>
      </tr>
      <tr>
        <td id="L553" class="blob-num js-line-number" data-line-number="553"></td>
        <td id="LC553" class="blob-code blob-code-inner js-file-line"><span class="pl-k">var</span> isBody<span class="pl-k">=</span><span class="pl-smi">el</span>.<span class="pl-c1">tagName</span><span class="pl-k">==</span><span class="pl-s"><span class="pl-pds">&#39;</span>BODY<span class="pl-pds">&#39;</span></span></td>
      </tr>
      <tr>
        <td id="L554" class="blob-num js-line-number" data-line-number="554"></td>
        <td id="LC554" class="blob-code blob-code-inner js-file-line"><span class="pl-k">var</span> elRect<span class="pl-k">=</span><span class="pl-smi">el</span>.<span class="pl-c1">getBoundingClientRect</span>()</td>
      </tr>
      <tr>
        <td id="L555" class="blob-num js-line-number" data-line-number="555"></td>
        <td id="LC555" class="blob-code blob-code-inner js-file-line"><span class="pl-k">if</span>(<span class="pl-smi">elRect</span>.<span class="pl-c1">width</span><span class="pl-k">==</span><span class="pl-c1">null</span>){elRect<span class="pl-k">=</span><span class="pl-smi">$</span>.<span class="pl-en">extend</span>({},elRect,{width<span class="pl-k">:</span><span class="pl-smi">elRect</span>.<span class="pl-c1">right</span><span class="pl-k">-</span><span class="pl-smi">elRect</span>.<span class="pl-c1">left</span>,height<span class="pl-k">:</span><span class="pl-smi">elRect</span>.<span class="pl-c1">bottom</span><span class="pl-k">-</span><span class="pl-smi">elRect</span>.<span class="pl-c1">top</span>})}</td>
      </tr>
      <tr>
        <td id="L556" class="blob-num js-line-number" data-line-number="556"></td>
        <td id="LC556" class="blob-code blob-code-inner js-file-line"><span class="pl-k">var</span> isSvg<span class="pl-k">=</span><span class="pl-c1">window</span>.<span class="pl-smi">SVGElement</span><span class="pl-k">&amp;&amp;</span>el <span class="pl-k">instanceof</span> <span class="pl-c1">window</span>.<span class="pl-smi">SVGElement</span></td>
      </tr>
      <tr>
        <td id="L557" class="blob-num js-line-number" data-line-number="557"></td>
        <td id="LC557" class="blob-code blob-code-inner js-file-line"><span class="pl-k">var</span> elOffset<span class="pl-k">=</span>isBody<span class="pl-k">?</span>{top<span class="pl-k">:</span><span class="pl-c1">0</span>,left<span class="pl-k">:</span><span class="pl-c1">0</span>}<span class="pl-k">:</span>(isSvg<span class="pl-k">?</span><span class="pl-c1">null</span><span class="pl-k">:</span><span class="pl-smi">$element</span>.<span class="pl-en">offset</span>())</td>
      </tr>
      <tr>
        <td id="L558" class="blob-num js-line-number" data-line-number="558"></td>
        <td id="LC558" class="blob-code blob-code-inner js-file-line"><span class="pl-k">var</span> scroll<span class="pl-k">=</span>{scroll<span class="pl-k">:</span>isBody<span class="pl-k">?</span><span class="pl-c1">document</span>.<span class="pl-c1">documentElement</span>.<span class="pl-smi">scrollTop</span><span class="pl-k">||</span><span class="pl-c1">document</span>.<span class="pl-c1">body</span>.<span class="pl-smi">scrollTop</span><span class="pl-k">:</span><span class="pl-smi">$element</span>.<span class="pl-en">scrollTop</span>()}</td>
      </tr>
      <tr>
        <td id="L559" class="blob-num js-line-number" data-line-number="559"></td>
        <td id="LC559" class="blob-code blob-code-inner js-file-line"><span class="pl-k">var</span> outerDims<span class="pl-k">=</span>isBody<span class="pl-k">?</span>{width<span class="pl-k">:</span><span class="pl-en">$</span>(<span class="pl-c1">window</span>).<span class="pl-c1">width</span>(),height<span class="pl-k">:</span><span class="pl-en">$</span>(<span class="pl-c1">window</span>).<span class="pl-c1">height</span>()}<span class="pl-k">:</span><span class="pl-c1">null</span></td>
      </tr>
      <tr>
        <td id="L560" class="blob-num js-line-number" data-line-number="560"></td>
        <td id="LC560" class="blob-code blob-code-inner js-file-line"><span class="pl-k">return</span> <span class="pl-smi">$</span>.<span class="pl-en">extend</span>({},elRect,scroll,outerDims,elOffset)}</td>
      </tr>
      <tr>
        <td id="L561" class="blob-num js-line-number" data-line-number="561"></td>
        <td id="LC561" class="blob-code blob-code-inner js-file-line"><span class="pl-smi">Tooltip</span>.<span class="pl-c1">prototype</span>.<span class="pl-en">getCalculatedOffset</span><span class="pl-k">=</span><span class="pl-k">function</span>(<span class="pl-smi">placement</span>,<span class="pl-smi">pos</span>,<span class="pl-smi">actualWidth</span>,<span class="pl-smi">actualHeight</span>){<span class="pl-k">return</span> placement<span class="pl-k">==</span><span class="pl-s"><span class="pl-pds">&#39;</span>bottom<span class="pl-pds">&#39;</span></span><span class="pl-k">?</span>{top<span class="pl-k">:</span><span class="pl-smi">pos</span>.<span class="pl-c1">top</span><span class="pl-k">+</span><span class="pl-smi">pos</span>.<span class="pl-c1">height</span>,left<span class="pl-k">:</span><span class="pl-smi">pos</span>.<span class="pl-c1">left</span><span class="pl-k">+</span><span class="pl-smi">pos</span>.<span class="pl-c1">width</span><span class="pl-k">/</span><span class="pl-c1">2</span><span class="pl-k">-</span>actualWidth<span class="pl-k">/</span><span class="pl-c1">2</span>}<span class="pl-k">:</span>placement<span class="pl-k">==</span><span class="pl-s"><span class="pl-pds">&#39;</span>top<span class="pl-pds">&#39;</span></span><span class="pl-k">?</span>{top<span class="pl-k">:</span><span class="pl-smi">pos</span>.<span class="pl-c1">top</span><span class="pl-k">-</span>actualHeight,left<span class="pl-k">:</span><span class="pl-smi">pos</span>.<span class="pl-c1">left</span><span class="pl-k">+</span><span class="pl-smi">pos</span>.<span class="pl-c1">width</span><span class="pl-k">/</span><span class="pl-c1">2</span><span class="pl-k">-</span>actualWidth<span class="pl-k">/</span><span class="pl-c1">2</span>}<span class="pl-k">:</span>placement<span class="pl-k">==</span><span class="pl-s"><span class="pl-pds">&#39;</span>left<span class="pl-pds">&#39;</span></span><span class="pl-k">?</span>{top<span class="pl-k">:</span><span class="pl-smi">pos</span>.<span class="pl-c1">top</span><span class="pl-k">+</span><span class="pl-smi">pos</span>.<span class="pl-c1">height</span><span class="pl-k">/</span><span class="pl-c1">2</span><span class="pl-k">-</span>actualHeight<span class="pl-k">/</span><span class="pl-c1">2</span>,left<span class="pl-k">:</span><span class="pl-smi">pos</span>.<span class="pl-c1">left</span><span class="pl-k">-</span>actualWidth}<span class="pl-k">:</span>{top<span class="pl-k">:</span><span class="pl-smi">pos</span>.<span class="pl-c1">top</span><span class="pl-k">+</span><span class="pl-smi">pos</span>.<span class="pl-c1">height</span><span class="pl-k">/</span><span class="pl-c1">2</span><span class="pl-k">-</span>actualHeight<span class="pl-k">/</span><span class="pl-c1">2</span>,left<span class="pl-k">:</span><span class="pl-smi">pos</span>.<span class="pl-c1">left</span><span class="pl-k">+</span><span class="pl-smi">pos</span>.<span class="pl-c1">width</span>}}</td>
      </tr>
      <tr>
        <td id="L562" class="blob-num js-line-number" data-line-number="562"></td>
        <td id="LC562" class="blob-code blob-code-inner js-file-line"><span class="pl-smi">Tooltip</span>.<span class="pl-c1">prototype</span>.<span class="pl-en">getViewportAdjustedDelta</span><span class="pl-k">=</span><span class="pl-k">function</span>(<span class="pl-smi">placement</span>,<span class="pl-smi">pos</span>,<span class="pl-smi">actualWidth</span>,<span class="pl-smi">actualHeight</span>){<span class="pl-k">var</span> delta<span class="pl-k">=</span>{top<span class="pl-k">:</span><span class="pl-c1">0</span>,left<span class="pl-k">:</span><span class="pl-c1">0</span>}</td>
      </tr>
      <tr>
        <td id="L563" class="blob-num js-line-number" data-line-number="563"></td>
        <td id="LC563" class="blob-code blob-code-inner js-file-line"><span class="pl-k">if</span>(<span class="pl-k">!</span><span class="pl-c1">this</span>.<span class="pl-smi">$viewport</span>)<span class="pl-k">return</span> delta</td>
      </tr>
      <tr>
        <td id="L564" class="blob-num js-line-number" data-line-number="564"></td>
        <td id="LC564" class="blob-code blob-code-inner js-file-line"><span class="pl-k">var</span> viewportPadding<span class="pl-k">=</span><span class="pl-c1">this</span>.<span class="pl-c1">options</span>.<span class="pl-smi">viewport</span><span class="pl-k">&amp;&amp;</span><span class="pl-c1">this</span>.<span class="pl-c1">options</span>.<span class="pl-smi">viewport</span>.<span class="pl-smi">padding</span><span class="pl-k">||</span><span class="pl-c1">0</span></td>
      </tr>
      <tr>
        <td id="L565" class="blob-num js-line-number" data-line-number="565"></td>
        <td id="LC565" class="blob-code blob-code-inner js-file-line"><span class="pl-k">var</span> viewportDimensions<span class="pl-k">=</span><span class="pl-c1">this</span>.<span class="pl-en">getPosition</span>(<span class="pl-c1">this</span>.<span class="pl-smi">$viewport</span>)</td>
      </tr>
      <tr>
        <td id="L566" class="blob-num js-line-number" data-line-number="566"></td>
        <td id="LC566" class="blob-code blob-code-inner js-file-line"><span class="pl-k">if</span>(<span class="pl-sr"><span class="pl-pds">/</span>right<span class="pl-k">|</span>left<span class="pl-pds">/</span></span>.<span class="pl-c1">test</span>(placement)){<span class="pl-k">var</span> topEdgeOffset<span class="pl-k">=</span><span class="pl-smi">pos</span>.<span class="pl-c1">top</span><span class="pl-k">-</span>viewportPadding<span class="pl-k">-</span><span class="pl-smi">viewportDimensions</span>.<span class="pl-smi">scroll</span></td>
      </tr>
      <tr>
        <td id="L567" class="blob-num js-line-number" data-line-number="567"></td>
        <td id="LC567" class="blob-code blob-code-inner js-file-line"><span class="pl-k">var</span> bottomEdgeOffset<span class="pl-k">=</span><span class="pl-smi">pos</span>.<span class="pl-c1">top</span><span class="pl-k">+</span>viewportPadding<span class="pl-k">-</span><span class="pl-smi">viewportDimensions</span>.<span class="pl-smi">scroll</span><span class="pl-k">+</span>actualHeight</td>
      </tr>
      <tr>
        <td id="L568" class="blob-num js-line-number" data-line-number="568"></td>
        <td id="LC568" class="blob-code blob-code-inner js-file-line"><span class="pl-k">if</span>(topEdgeOffset<span class="pl-k">&lt;</span><span class="pl-smi">viewportDimensions</span>.<span class="pl-c1">top</span>){<span class="pl-smi">delta</span>.<span class="pl-c1">top</span><span class="pl-k">=</span><span class="pl-smi">viewportDimensions</span>.<span class="pl-c1">top</span><span class="pl-k">-</span>topEdgeOffset}<span class="pl-k">else</span> <span class="pl-k">if</span>(bottomEdgeOffset<span class="pl-k">&gt;</span><span class="pl-smi">viewportDimensions</span>.<span class="pl-c1">top</span><span class="pl-k">+</span><span class="pl-smi">viewportDimensions</span>.<span class="pl-c1">height</span>){<span class="pl-smi">delta</span>.<span class="pl-c1">top</span><span class="pl-k">=</span><span class="pl-smi">viewportDimensions</span>.<span class="pl-c1">top</span><span class="pl-k">+</span><span class="pl-smi">viewportDimensions</span>.<span class="pl-c1">height</span><span class="pl-k">-</span>bottomEdgeOffset}}<span class="pl-k">else</span>{<span class="pl-k">var</span> leftEdgeOffset<span class="pl-k">=</span><span class="pl-smi">pos</span>.<span class="pl-c1">left</span><span class="pl-k">-</span>viewportPadding</td>
      </tr>
      <tr>
        <td id="L569" class="blob-num js-line-number" data-line-number="569"></td>
        <td id="LC569" class="blob-code blob-code-inner js-file-line"><span class="pl-k">var</span> rightEdgeOffset<span class="pl-k">=</span><span class="pl-smi">pos</span>.<span class="pl-c1">left</span><span class="pl-k">+</span>viewportPadding<span class="pl-k">+</span>actualWidth</td>
      </tr>
      <tr>
        <td id="L570" class="blob-num js-line-number" data-line-number="570"></td>
        <td id="LC570" class="blob-code blob-code-inner js-file-line"><span class="pl-k">if</span>(leftEdgeOffset<span class="pl-k">&lt;</span><span class="pl-smi">viewportDimensions</span>.<span class="pl-c1">left</span>){<span class="pl-smi">delta</span>.<span class="pl-c1">left</span><span class="pl-k">=</span><span class="pl-smi">viewportDimensions</span>.<span class="pl-c1">left</span><span class="pl-k">-</span>leftEdgeOffset}<span class="pl-k">else</span> <span class="pl-k">if</span>(rightEdgeOffset<span class="pl-k">&gt;</span><span class="pl-smi">viewportDimensions</span>.<span class="pl-c1">right</span>){<span class="pl-smi">delta</span>.<span class="pl-c1">left</span><span class="pl-k">=</span><span class="pl-smi">viewportDimensions</span>.<span class="pl-c1">left</span><span class="pl-k">+</span><span class="pl-smi">viewportDimensions</span>.<span class="pl-c1">width</span><span class="pl-k">-</span>rightEdgeOffset}}</td>
      </tr>
      <tr>
        <td id="L571" class="blob-num js-line-number" data-line-number="571"></td>
        <td id="LC571" class="blob-code blob-code-inner js-file-line"><span class="pl-k">return</span> delta}</td>
      </tr>
      <tr>
        <td id="L572" class="blob-num js-line-number" data-line-number="572"></td>
        <td id="LC572" class="blob-code blob-code-inner js-file-line"><span class="pl-smi">Tooltip</span>.<span class="pl-c1">prototype</span>.<span class="pl-en">getTitle</span><span class="pl-k">=</span><span class="pl-k">function</span>(){<span class="pl-k">var</span> title</td>
      </tr>
      <tr>
        <td id="L573" class="blob-num js-line-number" data-line-number="573"></td>
        <td id="LC573" class="blob-code blob-code-inner js-file-line"><span class="pl-k">var</span> $e<span class="pl-k">=</span><span class="pl-c1">this</span>.<span class="pl-smi">$element</span></td>
      </tr>
      <tr>
        <td id="L574" class="blob-num js-line-number" data-line-number="574"></td>
        <td id="LC574" class="blob-code blob-code-inner js-file-line"><span class="pl-k">var</span> o<span class="pl-k">=</span><span class="pl-c1">this</span>.<span class="pl-c1">options</span></td>
      </tr>
      <tr>
        <td id="L575" class="blob-num js-line-number" data-line-number="575"></td>
        <td id="LC575" class="blob-code blob-code-inner js-file-line">title<span class="pl-k">=</span><span class="pl-smi">$e</span>.<span class="pl-en">attr</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>data-original-title<span class="pl-pds">&#39;</span></span>)<span class="pl-k">||</span>(<span class="pl-k">typeof</span> <span class="pl-smi">o</span>.<span class="pl-c1">title</span><span class="pl-k">==</span><span class="pl-s"><span class="pl-pds">&#39;</span>function<span class="pl-pds">&#39;</span></span><span class="pl-k">?</span><span class="pl-smi">o</span>.<span class="pl-c1">title</span>.<span class="pl-c1">call</span>($e[<span class="pl-c1">0</span>])<span class="pl-k">:</span><span class="pl-smi">o</span>.<span class="pl-c1">title</span>)</td>
      </tr>
      <tr>
        <td id="L576" class="blob-num js-line-number" data-line-number="576"></td>
        <td id="LC576" class="blob-code blob-code-inner js-file-line"><span class="pl-k">return</span> title}</td>
      </tr>
      <tr>
        <td id="L577" class="blob-num js-line-number" data-line-number="577"></td>
        <td id="LC577" class="blob-code blob-code-inner js-file-line"><span class="pl-smi">Tooltip</span>.<span class="pl-c1">prototype</span>.<span class="pl-en">getUID</span><span class="pl-k">=</span><span class="pl-k">function</span>(<span class="pl-smi">prefix</span>){<span class="pl-k">do</span> prefix<span class="pl-k">+=</span><span class="pl-k">~~</span>(<span class="pl-c1">Math</span>.<span class="pl-c1">random</span>()<span class="pl-k">*</span><span class="pl-c1">1000000</span>)</td>
      </tr>
      <tr>
        <td id="L578" class="blob-num js-line-number" data-line-number="578"></td>
        <td id="LC578" class="blob-code blob-code-inner js-file-line"><span class="pl-k">while</span>(<span class="pl-c1">document</span>.<span class="pl-c1">getElementById</span>(prefix))</td>
      </tr>
      <tr>
        <td id="L579" class="blob-num js-line-number" data-line-number="579"></td>
        <td id="LC579" class="blob-code blob-code-inner js-file-line"><span class="pl-k">return</span> prefix}</td>
      </tr>
      <tr>
        <td id="L580" class="blob-num js-line-number" data-line-number="580"></td>
        <td id="LC580" class="blob-code blob-code-inner js-file-line"><span class="pl-smi">Tooltip</span>.<span class="pl-c1">prototype</span>.<span class="pl-en">tip</span><span class="pl-k">=</span><span class="pl-k">function</span>(){<span class="pl-k">if</span>(<span class="pl-k">!</span><span class="pl-c1">this</span>.<span class="pl-smi">$tip</span>){<span class="pl-c1">this</span>.<span class="pl-smi">$tip</span><span class="pl-k">=</span><span class="pl-en">$</span>(<span class="pl-c1">this</span>.<span class="pl-c1">options</span>.<span class="pl-smi">template</span>)</td>
      </tr>
      <tr>
        <td id="L581" class="blob-num js-line-number" data-line-number="581"></td>
        <td id="LC581" class="blob-code blob-code-inner js-file-line"><span class="pl-k">if</span>(<span class="pl-c1">this</span>.<span class="pl-smi">$tip</span>.<span class="pl-c1">length</span><span class="pl-k">!=</span><span class="pl-c1">1</span>){<span class="pl-k">throw</span> <span class="pl-k">new</span> <span class="pl-en">Error</span>(<span class="pl-c1">this</span>.<span class="pl-c1">type</span><span class="pl-k">+</span><span class="pl-s"><span class="pl-pds">&#39;</span> `template` option must consist of exactly 1 top-level element!<span class="pl-pds">&#39;</span></span>)}}</td>
      </tr>
      <tr>
        <td id="L582" class="blob-num js-line-number" data-line-number="582"></td>
        <td id="LC582" class="blob-code blob-code-inner js-file-line"><span class="pl-k">return</span> <span class="pl-c1">this</span>.<span class="pl-smi">$tip</span>}</td>
      </tr>
      <tr>
        <td id="L583" class="blob-num js-line-number" data-line-number="583"></td>
        <td id="LC583" class="blob-code blob-code-inner js-file-line"><span class="pl-smi">Tooltip</span>.<span class="pl-c1">prototype</span>.<span class="pl-en">arrow</span><span class="pl-k">=</span><span class="pl-k">function</span>(){<span class="pl-k">return</span>(<span class="pl-c1">this</span>.<span class="pl-smi">$arrow</span><span class="pl-k">=</span><span class="pl-c1">this</span>.<span class="pl-smi">$arrow</span><span class="pl-k">||</span><span class="pl-c1">this</span>.<span class="pl-en">tip</span>().<span class="pl-c1">find</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>.tooltip-arrow<span class="pl-pds">&#39;</span></span>))}</td>
      </tr>
      <tr>
        <td id="L584" class="blob-num js-line-number" data-line-number="584"></td>
        <td id="LC584" class="blob-code blob-code-inner js-file-line"><span class="pl-smi">Tooltip</span>.<span class="pl-c1">prototype</span>.<span class="pl-en">enable</span><span class="pl-k">=</span><span class="pl-k">function</span>(){<span class="pl-c1">this</span>.<span class="pl-smi">enabled</span><span class="pl-k">=</span><span class="pl-c1">true</span>}</td>
      </tr>
      <tr>
        <td id="L585" class="blob-num js-line-number" data-line-number="585"></td>
        <td id="LC585" class="blob-code blob-code-inner js-file-line"><span class="pl-smi">Tooltip</span>.<span class="pl-c1">prototype</span>.<span class="pl-en">disable</span><span class="pl-k">=</span><span class="pl-k">function</span>(){<span class="pl-c1">this</span>.<span class="pl-smi">enabled</span><span class="pl-k">=</span><span class="pl-c1">false</span>}</td>
      </tr>
      <tr>
        <td id="L586" class="blob-num js-line-number" data-line-number="586"></td>
        <td id="LC586" class="blob-code blob-code-inner js-file-line"><span class="pl-smi">Tooltip</span>.<span class="pl-c1">prototype</span>.<span class="pl-en">toggleEnabled</span><span class="pl-k">=</span><span class="pl-k">function</span>(){<span class="pl-c1">this</span>.<span class="pl-smi">enabled</span><span class="pl-k">=</span><span class="pl-k">!</span><span class="pl-c1">this</span>.<span class="pl-smi">enabled</span>}</td>
      </tr>
      <tr>
        <td id="L587" class="blob-num js-line-number" data-line-number="587"></td>
        <td id="LC587" class="blob-code blob-code-inner js-file-line"><span class="pl-smi">Tooltip</span>.<span class="pl-c1">prototype</span>.<span class="pl-en">toggle</span><span class="pl-k">=</span><span class="pl-k">function</span>(<span class="pl-smi">e</span>){<span class="pl-k">var</span> self<span class="pl-k">=</span><span class="pl-c1">this</span></td>
      </tr>
      <tr>
        <td id="L588" class="blob-num js-line-number" data-line-number="588"></td>
        <td id="LC588" class="blob-code blob-code-inner js-file-line"><span class="pl-k">if</span>(e){self<span class="pl-k">=</span><span class="pl-en">$</span>(<span class="pl-smi">e</span>.<span class="pl-smi">currentTarget</span>).<span class="pl-c1">data</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>bs.<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span><span class="pl-c1">this</span>.<span class="pl-c1">type</span>)</td>
      </tr>
      <tr>
        <td id="L589" class="blob-num js-line-number" data-line-number="589"></td>
        <td id="LC589" class="blob-code blob-code-inner js-file-line"><span class="pl-k">if</span>(<span class="pl-k">!</span>self){self<span class="pl-k">=</span><span class="pl-k">new</span> <span class="pl-en">this.constructor</span>(<span class="pl-smi">e</span>.<span class="pl-smi">currentTarget</span>,<span class="pl-c1">this</span>.<span class="pl-en">getDelegateOptions</span>())</td>
      </tr>
      <tr>
        <td id="L590" class="blob-num js-line-number" data-line-number="590"></td>
        <td id="LC590" class="blob-code blob-code-inner js-file-line"><span class="pl-en">$</span>(<span class="pl-smi">e</span>.<span class="pl-smi">currentTarget</span>).<span class="pl-c1">data</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>bs.<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span><span class="pl-c1">this</span>.<span class="pl-c1">type</span>,self)}}</td>
      </tr>
      <tr>
        <td id="L591" class="blob-num js-line-number" data-line-number="591"></td>
        <td id="LC591" class="blob-code blob-code-inner js-file-line"><span class="pl-k">if</span>(e){<span class="pl-smi">self</span>.<span class="pl-smi">inState</span>.<span class="pl-smi">click</span><span class="pl-k">=</span><span class="pl-k">!</span><span class="pl-smi">self</span>.<span class="pl-smi">inState</span>.<span class="pl-smi">click</span></td>
      </tr>
      <tr>
        <td id="L592" class="blob-num js-line-number" data-line-number="592"></td>
        <td id="LC592" class="blob-code blob-code-inner js-file-line"><span class="pl-k">if</span>(<span class="pl-smi">self</span>.<span class="pl-en">isInStateTrue</span>())<span class="pl-smi">self</span>.<span class="pl-en">enter</span>(self)</td>
      </tr>
      <tr>
        <td id="L593" class="blob-num js-line-number" data-line-number="593"></td>
        <td id="LC593" class="blob-code blob-code-inner js-file-line"><span class="pl-k">else</span> <span class="pl-smi">self</span>.<span class="pl-en">leave</span>(self)}<span class="pl-k">else</span>{<span class="pl-smi">self</span>.<span class="pl-en">tip</span>().<span class="pl-en">hasClass</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>in<span class="pl-pds">&#39;</span></span>)<span class="pl-k">?</span><span class="pl-smi">self</span>.<span class="pl-en">leave</span>(self)<span class="pl-k">:</span><span class="pl-smi">self</span>.<span class="pl-en">enter</span>(self)}}</td>
      </tr>
      <tr>
        <td id="L594" class="blob-num js-line-number" data-line-number="594"></td>
        <td id="LC594" class="blob-code blob-code-inner js-file-line"><span class="pl-smi">Tooltip</span>.<span class="pl-c1">prototype</span>.<span class="pl-en">destroy</span><span class="pl-k">=</span><span class="pl-k">function</span>(){<span class="pl-k">var</span> that<span class="pl-k">=</span><span class="pl-c1">this</span></td>
      </tr>
      <tr>
        <td id="L595" class="blob-num js-line-number" data-line-number="595"></td>
        <td id="LC595" class="blob-code blob-code-inner js-file-line"><span class="pl-c1">clearTimeout</span>(<span class="pl-c1">this</span>.<span class="pl-smi">timeout</span>)</td>
      </tr>
      <tr>
        <td id="L596" class="blob-num js-line-number" data-line-number="596"></td>
        <td id="LC596" class="blob-code blob-code-inner js-file-line"><span class="pl-c1">this</span>.<span class="pl-en">hide</span>(<span class="pl-k">function</span>(){<span class="pl-smi">that</span>.<span class="pl-smi">$element</span>.<span class="pl-en">off</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>.<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span><span class="pl-smi">that</span>.<span class="pl-c1">type</span>).<span class="pl-en">removeData</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>bs.<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span><span class="pl-smi">that</span>.<span class="pl-c1">type</span>)</td>
      </tr>
      <tr>
        <td id="L597" class="blob-num js-line-number" data-line-number="597"></td>
        <td id="LC597" class="blob-code blob-code-inner js-file-line"><span class="pl-k">if</span>(<span class="pl-smi">that</span>.<span class="pl-smi">$tip</span>){<span class="pl-smi">that</span>.<span class="pl-smi">$tip</span>.<span class="pl-c1">detach</span>()}</td>
      </tr>
      <tr>
        <td id="L598" class="blob-num js-line-number" data-line-number="598"></td>
        <td id="LC598" class="blob-code blob-code-inner js-file-line"><span class="pl-smi">that</span>.<span class="pl-smi">$tip</span><span class="pl-k">=</span><span class="pl-c1">null</span></td>
      </tr>
      <tr>
        <td id="L599" class="blob-num js-line-number" data-line-number="599"></td>
        <td id="LC599" class="blob-code blob-code-inner js-file-line"><span class="pl-smi">that</span>.<span class="pl-smi">$arrow</span><span class="pl-k">=</span><span class="pl-c1">null</span></td>
      </tr>
      <tr>
        <td id="L600" class="blob-num js-line-number" data-line-number="600"></td>
        <td id="LC600" class="blob-code blob-code-inner js-file-line"><span class="pl-smi">that</span>.<span class="pl-smi">$viewport</span><span class="pl-k">=</span><span class="pl-c1">null</span></td>
      </tr>
      <tr>
        <td id="L601" class="blob-num js-line-number" data-line-number="601"></td>
        <td id="LC601" class="blob-code blob-code-inner js-file-line"><span class="pl-smi">that</span>.<span class="pl-smi">$element</span><span class="pl-k">=</span><span class="pl-c1">null</span>})}</td>
      </tr>
      <tr>
        <td id="L602" class="blob-num js-line-number" data-line-number="602"></td>
        <td id="LC602" class="blob-code blob-code-inner js-file-line"><span class="pl-k">function</span> <span class="pl-en">Plugin</span>(<span class="pl-smi">option</span>){<span class="pl-k">return</span> <span class="pl-c1">this</span>.<span class="pl-en">each</span>(<span class="pl-k">function</span>(){<span class="pl-k">var</span> $this<span class="pl-k">=</span><span class="pl-en">$</span>(<span class="pl-c1">this</span>)</td>
      </tr>
      <tr>
        <td id="L603" class="blob-num js-line-number" data-line-number="603"></td>
        <td id="LC603" class="blob-code blob-code-inner js-file-line"><span class="pl-k">var</span> data<span class="pl-k">=</span><span class="pl-smi">$this</span>.<span class="pl-c1">data</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>bs.tooltip<span class="pl-pds">&#39;</span></span>)</td>
      </tr>
      <tr>
        <td id="L604" class="blob-num js-line-number" data-line-number="604"></td>
        <td id="LC604" class="blob-code blob-code-inner js-file-line"><span class="pl-k">var</span> options<span class="pl-k">=</span><span class="pl-k">typeof</span> option<span class="pl-k">==</span><span class="pl-s"><span class="pl-pds">&#39;</span>object<span class="pl-pds">&#39;</span></span><span class="pl-k">&amp;&amp;</span>option</td>
      </tr>
      <tr>
        <td id="L605" class="blob-num js-line-number" data-line-number="605"></td>
        <td id="LC605" class="blob-code blob-code-inner js-file-line"><span class="pl-k">if</span>(<span class="pl-k">!</span>data<span class="pl-k">&amp;&amp;</span><span class="pl-sr"><span class="pl-pds">/</span>destroy<span class="pl-k">|</span>hide<span class="pl-pds">/</span></span>.<span class="pl-c1">test</span>(option))<span class="pl-k">return</span></td>
      </tr>
      <tr>
        <td id="L606" class="blob-num js-line-number" data-line-number="606"></td>
        <td id="LC606" class="blob-code blob-code-inner js-file-line"><span class="pl-k">if</span>(<span class="pl-k">!</span>data)<span class="pl-smi">$this</span>.<span class="pl-c1">data</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>bs.tooltip<span class="pl-pds">&#39;</span></span>,(data<span class="pl-k">=</span><span class="pl-k">new</span> <span class="pl-en">Tooltip</span>(<span class="pl-c1">this</span>,options)))</td>
      </tr>
      <tr>
        <td id="L607" class="blob-num js-line-number" data-line-number="607"></td>
        <td id="LC607" class="blob-code blob-code-inner js-file-line"><span class="pl-k">if</span>(<span class="pl-k">typeof</span> option<span class="pl-k">==</span><span class="pl-s"><span class="pl-pds">&#39;</span>string<span class="pl-pds">&#39;</span></span>)data[option]()})}</td>
      </tr>
      <tr>
        <td id="L608" class="blob-num js-line-number" data-line-number="608"></td>
        <td id="LC608" class="blob-code blob-code-inner js-file-line"><span class="pl-k">var</span> old<span class="pl-k">=</span><span class="pl-smi">$</span>.<span class="pl-smi">fn</span>.<span class="pl-smi">tooltip</span></td>
      </tr>
      <tr>
        <td id="L609" class="blob-num js-line-number" data-line-number="609"></td>
        <td id="LC609" class="blob-code blob-code-inner js-file-line"><span class="pl-smi">$</span>.<span class="pl-smi">fn</span>.<span class="pl-smi">tooltip</span><span class="pl-k">=</span><span class="pl-c1">Plugin</span></td>
      </tr>
      <tr>
        <td id="L610" class="blob-num js-line-number" data-line-number="610"></td>
        <td id="LC610" class="blob-code blob-code-inner js-file-line"><span class="pl-smi">$</span>.<span class="pl-smi">fn</span>.<span class="pl-smi">tooltip</span>.<span class="pl-smi">Constructor</span><span class="pl-k">=</span>Tooltip</td>
      </tr>
      <tr>
        <td id="L611" class="blob-num js-line-number" data-line-number="611"></td>
        <td id="LC611" class="blob-code blob-code-inner js-file-line"><span class="pl-smi">$</span>.<span class="pl-smi">fn</span>.<span class="pl-smi">tooltip</span>.<span class="pl-en">noConflict</span><span class="pl-k">=</span><span class="pl-k">function</span>(){<span class="pl-smi">$</span>.<span class="pl-smi">fn</span>.<span class="pl-smi">tooltip</span><span class="pl-k">=</span>old</td>
      </tr>
      <tr>
        <td id="L612" class="blob-num js-line-number" data-line-number="612"></td>
        <td id="LC612" class="blob-code blob-code-inner js-file-line"><span class="pl-k">return</span> <span class="pl-c1">this</span>}}(jQuery);<span class="pl-k">+</span><span class="pl-k">function</span>(<span class="pl-smi">$</span>){<span class="pl-s"><span class="pl-pds">&#39;</span>use strict<span class="pl-pds">&#39;</span></span>;<span class="pl-k">var</span> <span class="pl-en">Popover</span><span class="pl-k">=</span><span class="pl-k">function</span>(<span class="pl-smi">element</span>,<span class="pl-smi">options</span>){<span class="pl-c1">this</span>.<span class="pl-en">init</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>popover<span class="pl-pds">&#39;</span></span>,element,options)}</td>
      </tr>
      <tr>
        <td id="L613" class="blob-num js-line-number" data-line-number="613"></td>
        <td id="LC613" class="blob-code blob-code-inner js-file-line"><span class="pl-k">if</span>(<span class="pl-k">!</span><span class="pl-smi">$</span>.<span class="pl-smi">fn</span>.<span class="pl-smi">tooltip</span>)<span class="pl-k">throw</span> <span class="pl-k">new</span> <span class="pl-en">Error</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>Popover requires tooltip.js<span class="pl-pds">&#39;</span></span>)</td>
      </tr>
      <tr>
        <td id="L614" class="blob-num js-line-number" data-line-number="614"></td>
        <td id="LC614" class="blob-code blob-code-inner js-file-line"><span class="pl-smi">Popover</span>.<span class="pl-c1">VERSION</span><span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">&#39;</span>3.3.7<span class="pl-pds">&#39;</span></span></td>
      </tr>
      <tr>
        <td id="L615" class="blob-num js-line-number" data-line-number="615"></td>
        <td id="LC615" class="blob-code blob-code-inner js-file-line"><span class="pl-smi">Popover</span>.<span class="pl-c1">DEFAULTS</span><span class="pl-k">=</span><span class="pl-smi">$</span>.<span class="pl-en">extend</span>({},<span class="pl-smi">$</span>.<span class="pl-smi">fn</span>.<span class="pl-smi">tooltip</span>.<span class="pl-smi">Constructor</span>.<span class="pl-c1">DEFAULTS</span>,{placement<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>right<span class="pl-pds">&#39;</span></span>,trigger<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>click<span class="pl-pds">&#39;</span></span>,content<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span>,template<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>&lt;div class=&quot;popover&quot; role=&quot;tooltip&quot;&gt;&lt;div class=&quot;arrow&quot;&gt;&lt;/div&gt;&lt;h3 class=&quot;popover-title&quot;&gt;&lt;/h3&gt;&lt;div class=&quot;popover-content&quot;&gt;&lt;/div&gt;&lt;/div&gt;<span class="pl-pds">&#39;</span></span>})</td>
      </tr>
      <tr>
        <td id="L616" class="blob-num js-line-number" data-line-number="616"></td>
        <td id="LC616" class="blob-code blob-code-inner js-file-line"><span class="pl-smi">Popover</span>.<span class="pl-c1">prototype</span><span class="pl-k">=</span><span class="pl-smi">$</span>.<span class="pl-en">extend</span>({},<span class="pl-smi">$</span>.<span class="pl-smi">fn</span>.<span class="pl-smi">tooltip</span>.<span class="pl-smi">Constructor</span>.<span class="pl-c1">prototype</span>)</td>
      </tr>
      <tr>
        <td id="L617" class="blob-num js-line-number" data-line-number="617"></td>
        <td id="LC617" class="blob-code blob-code-inner js-file-line"><span class="pl-smi">Popover</span>.<span class="pl-c1">prototype</span>.<span class="pl-c1">constructor</span><span class="pl-k">=</span>Popover</td>
      </tr>
      <tr>
        <td id="L618" class="blob-num js-line-number" data-line-number="618"></td>
        <td id="LC618" class="blob-code blob-code-inner js-file-line"><span class="pl-smi">Popover</span>.<span class="pl-c1">prototype</span>.<span class="pl-en">getDefaults</span><span class="pl-k">=</span><span class="pl-k">function</span>(){<span class="pl-k">return</span> <span class="pl-smi">Popover</span>.<span class="pl-c1">DEFAULTS</span>}</td>
      </tr>
      <tr>
        <td id="L619" class="blob-num js-line-number" data-line-number="619"></td>
        <td id="LC619" class="blob-code blob-code-inner js-file-line"><span class="pl-smi">Popover</span>.<span class="pl-c1">prototype</span>.<span class="pl-en">setContent</span><span class="pl-k">=</span><span class="pl-k">function</span>(){<span class="pl-k">var</span> $tip<span class="pl-k">=</span><span class="pl-c1">this</span>.<span class="pl-en">tip</span>()</td>
      </tr>
      <tr>
        <td id="L620" class="blob-num js-line-number" data-line-number="620"></td>
        <td id="LC620" class="blob-code blob-code-inner js-file-line"><span class="pl-k">var</span> title<span class="pl-k">=</span><span class="pl-c1">this</span>.<span class="pl-en">getTitle</span>()</td>
      </tr>
      <tr>
        <td id="L621" class="blob-num js-line-number" data-line-number="621"></td>
        <td id="LC621" class="blob-code blob-code-inner js-file-line"><span class="pl-k">var</span> content<span class="pl-k">=</span><span class="pl-c1">this</span>.<span class="pl-en">getContent</span>()</td>
      </tr>
      <tr>
        <td id="L622" class="blob-num js-line-number" data-line-number="622"></td>
        <td id="LC622" class="blob-code blob-code-inner js-file-line"><span class="pl-smi">$tip</span>.<span class="pl-c1">find</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>.popover-title<span class="pl-pds">&#39;</span></span>)[<span class="pl-c1">this</span>.<span class="pl-c1">options</span>.<span class="pl-smi">html</span><span class="pl-k">?</span><span class="pl-s"><span class="pl-pds">&#39;</span>html<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>text<span class="pl-pds">&#39;</span></span>](title)</td>
      </tr>
      <tr>
        <td id="L623" class="blob-num js-line-number" data-line-number="623"></td>
        <td id="LC623" class="blob-code blob-code-inner js-file-line"><span class="pl-smi">$tip</span>.<span class="pl-c1">find</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>.popover-content<span class="pl-pds">&#39;</span></span>).<span class="pl-en">children</span>().<span class="pl-c1">detach</span>().<span class="pl-en">end</span>()[<span class="pl-c1">this</span>.<span class="pl-c1">options</span>.<span class="pl-smi">html</span><span class="pl-k">?</span>(<span class="pl-k">typeof</span> content<span class="pl-k">==</span><span class="pl-s"><span class="pl-pds">&#39;</span>string<span class="pl-pds">&#39;</span></span><span class="pl-k">?</span><span class="pl-s"><span class="pl-pds">&#39;</span>html<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>append<span class="pl-pds">&#39;</span></span>)<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>text<span class="pl-pds">&#39;</span></span>](content)</td>
      </tr>
      <tr>
        <td id="L624" class="blob-num js-line-number" data-line-number="624"></td>
        <td id="LC624" class="blob-code blob-code-inner js-file-line"><span class="pl-smi">$tip</span>.<span class="pl-en">removeClass</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>fade top bottom left right in<span class="pl-pds">&#39;</span></span>)</td>
      </tr>
      <tr>
        <td id="L625" class="blob-num js-line-number" data-line-number="625"></td>
        <td id="LC625" class="blob-code blob-code-inner js-file-line"><span class="pl-k">if</span>(<span class="pl-k">!</span><span class="pl-smi">$tip</span>.<span class="pl-c1">find</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>.popover-title<span class="pl-pds">&#39;</span></span>).<span class="pl-en">html</span>())<span class="pl-smi">$tip</span>.<span class="pl-c1">find</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>.popover-title<span class="pl-pds">&#39;</span></span>).<span class="pl-en">hide</span>()}</td>
      </tr>
      <tr>
        <td id="L626" class="blob-num js-line-number" data-line-number="626"></td>
        <td id="LC626" class="blob-code blob-code-inner js-file-line"><span class="pl-smi">Popover</span>.<span class="pl-c1">prototype</span>.<span class="pl-en">hasContent</span><span class="pl-k">=</span><span class="pl-k">function</span>(){<span class="pl-k">return</span> <span class="pl-c1">this</span>.<span class="pl-en">getTitle</span>()<span class="pl-k">||</span><span class="pl-c1">this</span>.<span class="pl-en">getContent</span>()}</td>
      </tr>
      <tr>
        <td id="L627" class="blob-num js-line-number" data-line-number="627"></td>
        <td id="LC627" class="blob-code blob-code-inner js-file-line"><span class="pl-smi">Popover</span>.<span class="pl-c1">prototype</span>.<span class="pl-en">getContent</span><span class="pl-k">=</span><span class="pl-k">function</span>(){<span class="pl-k">var</span> $e<span class="pl-k">=</span><span class="pl-c1">this</span>.<span class="pl-smi">$element</span></td>
      </tr>
      <tr>
        <td id="L628" class="blob-num js-line-number" data-line-number="628"></td>
        <td id="LC628" class="blob-code blob-code-inner js-file-line"><span class="pl-k">var</span> o<span class="pl-k">=</span><span class="pl-c1">this</span>.<span class="pl-c1">options</span></td>
      </tr>
      <tr>
        <td id="L629" class="blob-num js-line-number" data-line-number="629"></td>
        <td id="LC629" class="blob-code blob-code-inner js-file-line"><span class="pl-k">return</span> <span class="pl-smi">$e</span>.<span class="pl-en">attr</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>data-content<span class="pl-pds">&#39;</span></span>)<span class="pl-k">||</span>(<span class="pl-k">typeof</span> <span class="pl-smi">o</span>.<span class="pl-c1">content</span><span class="pl-k">==</span><span class="pl-s"><span class="pl-pds">&#39;</span>function<span class="pl-pds">&#39;</span></span><span class="pl-k">?</span><span class="pl-smi">o</span>.<span class="pl-c1">content</span>.<span class="pl-c1">call</span>($e[<span class="pl-c1">0</span>])<span class="pl-k">:</span><span class="pl-smi">o</span>.<span class="pl-c1">content</span>)}</td>
      </tr>
      <tr>
        <td id="L630" class="blob-num js-line-number" data-line-number="630"></td>
        <td id="LC630" class="blob-code blob-code-inner js-file-line"><span class="pl-smi">Popover</span>.<span class="pl-c1">prototype</span>.<span class="pl-en">arrow</span><span class="pl-k">=</span><span class="pl-k">function</span>(){<span class="pl-k">return</span>(<span class="pl-c1">this</span>.<span class="pl-smi">$arrow</span><span class="pl-k">=</span><span class="pl-c1">this</span>.<span class="pl-smi">$arrow</span><span class="pl-k">||</span><span class="pl-c1">this</span>.<span class="pl-en">tip</span>().<span class="pl-c1">find</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>.arrow<span class="pl-pds">&#39;</span></span>))}</td>
      </tr>
      <tr>
        <td id="L631" class="blob-num js-line-number" data-line-number="631"></td>
        <td id="LC631" class="blob-code blob-code-inner js-file-line"><span class="pl-k">function</span> <span class="pl-en">Plugin</span>(<span class="pl-smi">option</span>){<span class="pl-k">return</span> <span class="pl-c1">this</span>.<span class="pl-en">each</span>(<span class="pl-k">function</span>(){<span class="pl-k">var</span> $this<span class="pl-k">=</span><span class="pl-en">$</span>(<span class="pl-c1">this</span>)</td>
      </tr>
      <tr>
        <td id="L632" class="blob-num js-line-number" data-line-number="632"></td>
        <td id="LC632" class="blob-code blob-code-inner js-file-line"><span class="pl-k">var</span> data<span class="pl-k">=</span><span class="pl-smi">$this</span>.<span class="pl-c1">data</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>bs.popover<span class="pl-pds">&#39;</span></span>)</td>
      </tr>
      <tr>
        <td id="L633" class="blob-num js-line-number" data-line-number="633"></td>
        <td id="LC633" class="blob-code blob-code-inner js-file-line"><span class="pl-k">var</span> options<span class="pl-k">=</span><span class="pl-k">typeof</span> option<span class="pl-k">==</span><span class="pl-s"><span class="pl-pds">&#39;</span>object<span class="pl-pds">&#39;</span></span><span class="pl-k">&amp;&amp;</span>option</td>
      </tr>
      <tr>
        <td id="L634" class="blob-num js-line-number" data-line-number="634"></td>
        <td id="LC634" class="blob-code blob-code-inner js-file-line"><span class="pl-k">if</span>(<span class="pl-k">!</span>data<span class="pl-k">&amp;&amp;</span><span class="pl-sr"><span class="pl-pds">/</span>destroy<span class="pl-k">|</span>hide<span class="pl-pds">/</span></span>.<span class="pl-c1">test</span>(option))<span class="pl-k">return</span></td>
      </tr>
      <tr>
        <td id="L635" class="blob-num js-line-number" data-line-number="635"></td>
        <td id="LC635" class="blob-code blob-code-inner js-file-line"><span class="pl-k">if</span>(<span class="pl-k">!</span>data)<span class="pl-smi">$this</span>.<span class="pl-c1">data</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>bs.popover<span class="pl-pds">&#39;</span></span>,(data<span class="pl-k">=</span><span class="pl-k">new</span> <span class="pl-en">Popover</span>(<span class="pl-c1">this</span>,options)))</td>
      </tr>
      <tr>
        <td id="L636" class="blob-num js-line-number" data-line-number="636"></td>
        <td id="LC636" class="blob-code blob-code-inner js-file-line"><span class="pl-k">if</span>(<span class="pl-k">typeof</span> option<span class="pl-k">==</span><span class="pl-s"><span class="pl-pds">&#39;</span>string<span class="pl-pds">&#39;</span></span>)data[option]()})}</td>
      </tr>
      <tr>
        <td id="L637" class="blob-num js-line-number" data-line-number="637"></td>
        <td id="LC637" class="blob-code blob-code-inner js-file-line"><span class="pl-k">var</span> old<span class="pl-k">=</span><span class="pl-smi">$</span>.<span class="pl-smi">fn</span>.<span class="pl-smi">popover</span></td>
      </tr>
      <tr>
        <td id="L638" class="blob-num js-line-number" data-line-number="638"></td>
        <td id="LC638" class="blob-code blob-code-inner js-file-line"><span class="pl-smi">$</span>.<span class="pl-smi">fn</span>.<span class="pl-smi">popover</span><span class="pl-k">=</span><span class="pl-c1">Plugin</span></td>
      </tr>
      <tr>
        <td id="L639" class="blob-num js-line-number" data-line-number="639"></td>
        <td id="LC639" class="blob-code blob-code-inner js-file-line"><span class="pl-smi">$</span>.<span class="pl-smi">fn</span>.<span class="pl-smi">popover</span>.<span class="pl-smi">Constructor</span><span class="pl-k">=</span>Popover</td>
      </tr>
      <tr>
        <td id="L640" class="blob-num js-line-number" data-line-number="640"></td>
        <td id="LC640" class="blob-code blob-code-inner js-file-line"><span class="pl-smi">$</span>.<span class="pl-smi">fn</span>.<span class="pl-smi">popover</span>.<span class="pl-en">noConflict</span><span class="pl-k">=</span><span class="pl-k">function</span>(){<span class="pl-smi">$</span>.<span class="pl-smi">fn</span>.<span class="pl-smi">popover</span><span class="pl-k">=</span>old</td>
      </tr>
      <tr>
        <td id="L641" class="blob-num js-line-number" data-line-number="641"></td>
        <td id="LC641" class="blob-code blob-code-inner js-file-line"><span class="pl-k">return</span> <span class="pl-c1">this</span>}}(jQuery);<span class="pl-k">+</span><span class="pl-k">function</span>(<span class="pl-smi">$</span>){<span class="pl-s"><span class="pl-pds">&#39;</span>use strict<span class="pl-pds">&#39;</span></span>;<span class="pl-k">function</span> <span class="pl-en">ScrollSpy</span>(<span class="pl-smi">element</span>,<span class="pl-smi">options</span>){<span class="pl-c1">this</span>.<span class="pl-smi">$body</span><span class="pl-k">=</span><span class="pl-en">$</span>(<span class="pl-c1">document</span>.<span class="pl-c1">body</span>)</td>
      </tr>
      <tr>
        <td id="L642" class="blob-num js-line-number" data-line-number="642"></td>
        <td id="LC642" class="blob-code blob-code-inner js-file-line"><span class="pl-c1">this</span>.<span class="pl-smi">$scrollElement</span><span class="pl-k">=</span><span class="pl-en">$</span>(element).<span class="pl-en">is</span>(<span class="pl-c1">document</span>.<span class="pl-c1">body</span>)<span class="pl-k">?</span><span class="pl-en">$</span>(<span class="pl-c1">window</span>)<span class="pl-k">:</span><span class="pl-en">$</span>(element)</td>
      </tr>
      <tr>
        <td id="L643" class="blob-num js-line-number" data-line-number="643"></td>
        <td id="LC643" class="blob-code blob-code-inner js-file-line"><span class="pl-c1">this</span>.<span class="pl-c1">options</span><span class="pl-k">=</span><span class="pl-smi">$</span>.<span class="pl-en">extend</span>({},<span class="pl-smi">ScrollSpy</span>.<span class="pl-c1">DEFAULTS</span>,options)</td>
      </tr>
      <tr>
        <td id="L644" class="blob-num js-line-number" data-line-number="644"></td>
        <td id="LC644" class="blob-code blob-code-inner js-file-line"><span class="pl-c1">this</span>.<span class="pl-smi">selector</span><span class="pl-k">=</span>(<span class="pl-c1">this</span>.<span class="pl-c1">options</span>.<span class="pl-c1">target</span><span class="pl-k">||</span><span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span>)<span class="pl-k">+</span><span class="pl-s"><span class="pl-pds">&#39;</span> .nav li &gt; a<span class="pl-pds">&#39;</span></span></td>
      </tr>
      <tr>
        <td id="L645" class="blob-num js-line-number" data-line-number="645"></td>
        <td id="LC645" class="blob-code blob-code-inner js-file-line"><span class="pl-c1">this</span>.<span class="pl-smi">offsets</span><span class="pl-k">=</span>[]</td>
      </tr>
      <tr>
        <td id="L646" class="blob-num js-line-number" data-line-number="646"></td>
        <td id="LC646" class="blob-code blob-code-inner js-file-line"><span class="pl-c1">this</span>.<span class="pl-smi">targets</span><span class="pl-k">=</span>[]</td>
      </tr>
      <tr>
        <td id="L647" class="blob-num js-line-number" data-line-number="647"></td>
        <td id="LC647" class="blob-code blob-code-inner js-file-line"><span class="pl-c1">this</span>.<span class="pl-smi">activeTarget</span><span class="pl-k">=</span><span class="pl-c1">null</span></td>
      </tr>
      <tr>
        <td id="L648" class="blob-num js-line-number" data-line-number="648"></td>
        <td id="LC648" class="blob-code blob-code-inner js-file-line"><span class="pl-c1">this</span>.<span class="pl-smi">scrollHeight</span><span class="pl-k">=</span><span class="pl-c1">0</span></td>
      </tr>
      <tr>
        <td id="L649" class="blob-num js-line-number" data-line-number="649"></td>
        <td id="LC649" class="blob-code blob-code-inner js-file-line"><span class="pl-c1">this</span>.<span class="pl-smi">$scrollElement</span>.<span class="pl-en">on</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>scroll.bs.scrollspy<span class="pl-pds">&#39;</span></span>,<span class="pl-smi">$</span>.<span class="pl-en">proxy</span>(<span class="pl-c1">this</span>.<span class="pl-smi">process</span>,<span class="pl-c1">this</span>))</td>
      </tr>
      <tr>
        <td id="L650" class="blob-num js-line-number" data-line-number="650"></td>
        <td id="LC650" class="blob-code blob-code-inner js-file-line"><span class="pl-c1">this</span>.<span class="pl-en">refresh</span>()</td>
      </tr>
      <tr>
        <td id="L651" class="blob-num js-line-number" data-line-number="651"></td>
        <td id="LC651" class="blob-code blob-code-inner js-file-line"><span class="pl-c1">this</span>.<span class="pl-en">process</span>()}</td>
      </tr>
      <tr>
        <td id="L652" class="blob-num js-line-number" data-line-number="652"></td>
        <td id="LC652" class="blob-code blob-code-inner js-file-line"><span class="pl-smi">ScrollSpy</span>.<span class="pl-c1">VERSION</span><span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">&#39;</span>3.3.7<span class="pl-pds">&#39;</span></span></td>
      </tr>
      <tr>
        <td id="L653" class="blob-num js-line-number" data-line-number="653"></td>
        <td id="LC653" class="blob-code blob-code-inner js-file-line"><span class="pl-smi">ScrollSpy</span>.<span class="pl-c1">DEFAULTS</span><span class="pl-k">=</span>{offset<span class="pl-k">:</span><span class="pl-c1">10</span>}</td>
      </tr>
      <tr>
        <td id="L654" class="blob-num js-line-number" data-line-number="654"></td>
        <td id="LC654" class="blob-code blob-code-inner js-file-line"><span class="pl-smi">ScrollSpy</span>.<span class="pl-c1">prototype</span>.<span class="pl-en">getScrollHeight</span><span class="pl-k">=</span><span class="pl-k">function</span>(){<span class="pl-k">return</span> <span class="pl-c1">this</span>.<span class="pl-smi">$scrollElement</span>[<span class="pl-c1">0</span>].<span class="pl-smi">scrollHeight</span><span class="pl-k">||</span><span class="pl-c1">Math</span>.<span class="pl-c1">max</span>(<span class="pl-c1">this</span>.<span class="pl-smi">$body</span>[<span class="pl-c1">0</span>].<span class="pl-smi">scrollHeight</span>,<span class="pl-c1">document</span>.<span class="pl-c1">documentElement</span>.<span class="pl-smi">scrollHeight</span>)}</td>
      </tr>
      <tr>
        <td id="L655" class="blob-num js-line-number" data-line-number="655"></td>
        <td id="LC655" class="blob-code blob-code-inner js-file-line"><span class="pl-smi">ScrollSpy</span>.<span class="pl-c1">prototype</span>.<span class="pl-en">refresh</span><span class="pl-k">=</span><span class="pl-k">function</span>(){<span class="pl-k">var</span> that<span class="pl-k">=</span><span class="pl-c1">this</span></td>
      </tr>
      <tr>
        <td id="L656" class="blob-num js-line-number" data-line-number="656"></td>
        <td id="LC656" class="blob-code blob-code-inner js-file-line"><span class="pl-k">var</span> offsetMethod<span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">&#39;</span>offset<span class="pl-pds">&#39;</span></span></td>
      </tr>
      <tr>
        <td id="L657" class="blob-num js-line-number" data-line-number="657"></td>
        <td id="LC657" class="blob-code blob-code-inner js-file-line"><span class="pl-k">var</span> offsetBase<span class="pl-k">=</span><span class="pl-c1">0</span></td>
      </tr>
      <tr>
        <td id="L658" class="blob-num js-line-number" data-line-number="658"></td>
        <td id="LC658" class="blob-code blob-code-inner js-file-line"><span class="pl-c1">this</span>.<span class="pl-smi">offsets</span><span class="pl-k">=</span>[]</td>
      </tr>
      <tr>
        <td id="L659" class="blob-num js-line-number" data-line-number="659"></td>
        <td id="LC659" class="blob-code blob-code-inner js-file-line"><span class="pl-c1">this</span>.<span class="pl-smi">targets</span><span class="pl-k">=</span>[]</td>
      </tr>
      <tr>
        <td id="L660" class="blob-num js-line-number" data-line-number="660"></td>
        <td id="LC660" class="blob-code blob-code-inner js-file-line"><span class="pl-c1">this</span>.<span class="pl-smi">scrollHeight</span><span class="pl-k">=</span><span class="pl-c1">this</span>.<span class="pl-en">getScrollHeight</span>()</td>
      </tr>
      <tr>
        <td id="L661" class="blob-num js-line-number" data-line-number="661"></td>
        <td id="LC661" class="blob-code blob-code-inner js-file-line"><span class="pl-k">if</span>(<span class="pl-k">!</span><span class="pl-smi">$</span>.<span class="pl-en">isWindow</span>(<span class="pl-c1">this</span>.<span class="pl-smi">$scrollElement</span>[<span class="pl-c1">0</span>])){offsetMethod<span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">&#39;</span>position<span class="pl-pds">&#39;</span></span></td>
      </tr>
      <tr>
        <td id="L662" class="blob-num js-line-number" data-line-number="662"></td>
        <td id="LC662" class="blob-code blob-code-inner js-file-line">offsetBase<span class="pl-k">=</span><span class="pl-c1">this</span>.<span class="pl-smi">$scrollElement</span>.<span class="pl-en">scrollTop</span>()}</td>
      </tr>
      <tr>
        <td id="L663" class="blob-num js-line-number" data-line-number="663"></td>
        <td id="LC663" class="blob-code blob-code-inner js-file-line"><span class="pl-c1">this</span>.<span class="pl-smi">$body</span>.<span class="pl-c1">find</span>(<span class="pl-c1">this</span>.<span class="pl-smi">selector</span>).<span class="pl-en">map</span>(<span class="pl-k">function</span>(){<span class="pl-k">var</span> $el<span class="pl-k">=</span><span class="pl-en">$</span>(<span class="pl-c1">this</span>)</td>
      </tr>
      <tr>
        <td id="L664" class="blob-num js-line-number" data-line-number="664"></td>
        <td id="LC664" class="blob-code blob-code-inner js-file-line"><span class="pl-k">var</span> href<span class="pl-k">=</span><span class="pl-smi">$el</span>.<span class="pl-c1">data</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>target<span class="pl-pds">&#39;</span></span>)<span class="pl-k">||</span><span class="pl-smi">$el</span>.<span class="pl-en">attr</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>href<span class="pl-pds">&#39;</span></span>)</td>
      </tr>
      <tr>
        <td id="L665" class="blob-num js-line-number" data-line-number="665"></td>
        <td id="LC665" class="blob-code blob-code-inner js-file-line"><span class="pl-k">var</span> $href<span class="pl-k">=</span><span class="pl-sr"><span class="pl-pds">/</span><span class="pl-k">^</span>#<span class="pl-c1">.</span><span class="pl-pds">/</span></span>.<span class="pl-c1">test</span>(href)<span class="pl-k">&amp;&amp;</span><span class="pl-en">$</span>(href)</td>
      </tr>
      <tr>
        <td id="L666" class="blob-num js-line-number" data-line-number="666"></td>
        <td id="LC666" class="blob-code blob-code-inner js-file-line"><span class="pl-k">return</span>($href<span class="pl-k">&amp;&amp;</span><span class="pl-smi">$href</span>.<span class="pl-c1">length</span><span class="pl-k">&amp;&amp;</span><span class="pl-smi">$href</span>.<span class="pl-en">is</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>:visible<span class="pl-pds">&#39;</span></span>)<span class="pl-k">&amp;&amp;</span>[[$href[offsetMethod]().<span class="pl-c1">top</span><span class="pl-k">+</span>offsetBase,href]])<span class="pl-k">||</span><span class="pl-c1">null</span>}).<span class="pl-c1">sort</span>(<span class="pl-k">function</span>(<span class="pl-smi">a</span>,<span class="pl-smi">b</span>){<span class="pl-k">return</span> a[<span class="pl-c1">0</span>]<span class="pl-k">-</span>b[<span class="pl-c1">0</span>]}).<span class="pl-en">each</span>(<span class="pl-k">function</span>(){<span class="pl-smi">that</span>.<span class="pl-smi">offsets</span>.<span class="pl-c1">push</span>(<span class="pl-c1">this</span>[<span class="pl-c1">0</span>])</td>
      </tr>
      <tr>
        <td id="L667" class="blob-num js-line-number" data-line-number="667"></td>
        <td id="LC667" class="blob-code blob-code-inner js-file-line"><span class="pl-smi">that</span>.<span class="pl-smi">targets</span>.<span class="pl-c1">push</span>(<span class="pl-c1">this</span>[<span class="pl-c1">1</span>])})}</td>
      </tr>
      <tr>
        <td id="L668" class="blob-num js-line-number" data-line-number="668"></td>
        <td id="LC668" class="blob-code blob-code-inner js-file-line"><span class="pl-smi">ScrollSpy</span>.<span class="pl-c1">prototype</span>.<span class="pl-en">process</span><span class="pl-k">=</span><span class="pl-k">function</span>(){<span class="pl-k">var</span> scrollTop<span class="pl-k">=</span><span class="pl-c1">this</span>.<span class="pl-smi">$scrollElement</span>.<span class="pl-en">scrollTop</span>()<span class="pl-k">+</span><span class="pl-c1">this</span>.<span class="pl-c1">options</span>.<span class="pl-smi">offset</span></td>
      </tr>
      <tr>
        <td id="L669" class="blob-num js-line-number" data-line-number="669"></td>
        <td id="LC669" class="blob-code blob-code-inner js-file-line"><span class="pl-k">var</span> scrollHeight<span class="pl-k">=</span><span class="pl-c1">this</span>.<span class="pl-en">getScrollHeight</span>()</td>
      </tr>
      <tr>
        <td id="L670" class="blob-num js-line-number" data-line-number="670"></td>
        <td id="LC670" class="blob-code blob-code-inner js-file-line"><span class="pl-k">var</span> maxScroll<span class="pl-k">=</span><span class="pl-c1">this</span>.<span class="pl-c1">options</span>.<span class="pl-smi">offset</span><span class="pl-k">+</span>scrollHeight<span class="pl-k">-</span><span class="pl-c1">this</span>.<span class="pl-smi">$scrollElement</span>.<span class="pl-c1">height</span>()</td>
      </tr>
      <tr>
        <td id="L671" class="blob-num js-line-number" data-line-number="671"></td>
        <td id="LC671" class="blob-code blob-code-inner js-file-line"><span class="pl-k">var</span> offsets<span class="pl-k">=</span><span class="pl-c1">this</span>.<span class="pl-smi">offsets</span></td>
      </tr>
      <tr>
        <td id="L672" class="blob-num js-line-number" data-line-number="672"></td>
        <td id="LC672" class="blob-code blob-code-inner js-file-line"><span class="pl-k">var</span> targets<span class="pl-k">=</span><span class="pl-c1">this</span>.<span class="pl-smi">targets</span></td>
      </tr>
      <tr>
        <td id="L673" class="blob-num js-line-number" data-line-number="673"></td>
        <td id="LC673" class="blob-code blob-code-inner js-file-line"><span class="pl-k">var</span> activeTarget<span class="pl-k">=</span><span class="pl-c1">this</span>.<span class="pl-smi">activeTarget</span></td>
      </tr>
      <tr>
        <td id="L674" class="blob-num js-line-number" data-line-number="674"></td>
        <td id="LC674" class="blob-code blob-code-inner js-file-line"><span class="pl-k">var</span> i</td>
      </tr>
      <tr>
        <td id="L675" class="blob-num js-line-number" data-line-number="675"></td>
        <td id="LC675" class="blob-code blob-code-inner js-file-line"><span class="pl-k">if</span>(<span class="pl-c1">this</span>.<span class="pl-smi">scrollHeight</span><span class="pl-k">!=</span>scrollHeight){<span class="pl-c1">this</span>.<span class="pl-en">refresh</span>()}</td>
      </tr>
      <tr>
        <td id="L676" class="blob-num js-line-number" data-line-number="676"></td>
        <td id="LC676" class="blob-code blob-code-inner js-file-line"><span class="pl-k">if</span>(scrollTop<span class="pl-k">&gt;=</span>maxScroll){<span class="pl-k">return</span> activeTarget<span class="pl-k">!=</span>(i<span class="pl-k">=</span>targets[<span class="pl-smi">targets</span>.<span class="pl-c1">length</span><span class="pl-k">-</span><span class="pl-c1">1</span>])<span class="pl-k">&amp;&amp;</span><span class="pl-c1">this</span>.<span class="pl-en">activate</span>(i)}</td>
      </tr>
      <tr>
        <td id="L677" class="blob-num js-line-number" data-line-number="677"></td>
        <td id="LC677" class="blob-code blob-code-inner js-file-line"><span class="pl-k">if</span>(activeTarget<span class="pl-k">&amp;&amp;</span>scrollTop<span class="pl-k">&lt;</span>offsets[<span class="pl-c1">0</span>]){<span class="pl-c1">this</span>.<span class="pl-smi">activeTarget</span><span class="pl-k">=</span><span class="pl-c1">null</span></td>
      </tr>
      <tr>
        <td id="L678" class="blob-num js-line-number" data-line-number="678"></td>
        <td id="LC678" class="blob-code blob-code-inner js-file-line"><span class="pl-k">return</span> <span class="pl-c1">this</span>.<span class="pl-c1">clear</span>()}</td>
      </tr>
      <tr>
        <td id="L679" class="blob-num js-line-number" data-line-number="679"></td>
        <td id="LC679" class="blob-code blob-code-inner js-file-line"><span class="pl-k">for</span>(i<span class="pl-k">=</span><span class="pl-smi">offsets</span>.<span class="pl-c1">length</span>;i<span class="pl-k">--</span>;){activeTarget<span class="pl-k">!=</span>targets[i]<span class="pl-k">&amp;&amp;</span>scrollTop<span class="pl-k">&gt;=</span>offsets[i]<span class="pl-k">&amp;&amp;</span>(offsets[i<span class="pl-k">+</span><span class="pl-c1">1</span>]<span class="pl-k">===</span><span class="pl-c1">undefined</span><span class="pl-k">||</span>scrollTop<span class="pl-k">&lt;</span>offsets[i<span class="pl-k">+</span><span class="pl-c1">1</span>])<span class="pl-k">&amp;&amp;</span><span class="pl-c1">this</span>.<span class="pl-en">activate</span>(targets[i])}}</td>
      </tr>
      <tr>
        <td id="L680" class="blob-num js-line-number" data-line-number="680"></td>
        <td id="LC680" class="blob-code blob-code-inner js-file-line"><span class="pl-smi">ScrollSpy</span>.<span class="pl-c1">prototype</span>.<span class="pl-en">activate</span><span class="pl-k">=</span><span class="pl-k">function</span>(<span class="pl-smi">target</span>){<span class="pl-c1">this</span>.<span class="pl-smi">activeTarget</span><span class="pl-k">=</span>target</td>
      </tr>
      <tr>
        <td id="L681" class="blob-num js-line-number" data-line-number="681"></td>
        <td id="LC681" class="blob-code blob-code-inner js-file-line"><span class="pl-c1">this</span>.<span class="pl-c1">clear</span>()</td>
      </tr>
      <tr>
        <td id="L682" class="blob-num js-line-number" data-line-number="682"></td>
        <td id="LC682" class="blob-code blob-code-inner js-file-line"><span class="pl-k">var</span> selector<span class="pl-k">=</span><span class="pl-c1">this</span>.<span class="pl-smi">selector</span><span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L683" class="blob-num js-line-number" data-line-number="683"></td>
        <td id="LC683" class="blob-code blob-code-inner js-file-line"><span class="pl-s"><span class="pl-pds">&#39;</span>[data-target=&quot;<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span>target<span class="pl-k">+</span><span class="pl-s"><span class="pl-pds">&#39;</span>&quot;],<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L684" class="blob-num js-line-number" data-line-number="684"></td>
        <td id="LC684" class="blob-code blob-code-inner js-file-line"><span class="pl-c1">this</span>.<span class="pl-smi">selector</span><span class="pl-k">+</span><span class="pl-s"><span class="pl-pds">&#39;</span>[href=&quot;<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span>target<span class="pl-k">+</span><span class="pl-s"><span class="pl-pds">&#39;</span>&quot;]<span class="pl-pds">&#39;</span></span></td>
      </tr>
      <tr>
        <td id="L685" class="blob-num js-line-number" data-line-number="685"></td>
        <td id="LC685" class="blob-code blob-code-inner js-file-line"><span class="pl-k">var</span> active<span class="pl-k">=</span><span class="pl-en">$</span>(selector).<span class="pl-en">parents</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>li<span class="pl-pds">&#39;</span></span>).<span class="pl-en">addClass</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>active<span class="pl-pds">&#39;</span></span>)</td>
      </tr>
      <tr>
        <td id="L686" class="blob-num js-line-number" data-line-number="686"></td>
        <td id="LC686" class="blob-code blob-code-inner js-file-line"><span class="pl-k">if</span>(<span class="pl-smi">active</span>.<span class="pl-c1">parent</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>.dropdown-menu<span class="pl-pds">&#39;</span></span>).<span class="pl-c1">length</span>){active<span class="pl-k">=</span><span class="pl-smi">active</span>.<span class="pl-c1">closest</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>li.dropdown<span class="pl-pds">&#39;</span></span>).<span class="pl-en">addClass</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>active<span class="pl-pds">&#39;</span></span>)}</td>
      </tr>
      <tr>
        <td id="L687" class="blob-num js-line-number" data-line-number="687"></td>
        <td id="LC687" class="blob-code blob-code-inner js-file-line"><span class="pl-smi">active</span>.<span class="pl-en">trigger</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>activate.bs.scrollspy<span class="pl-pds">&#39;</span></span>)}</td>
      </tr>
      <tr>
        <td id="L688" class="blob-num js-line-number" data-line-number="688"></td>
        <td id="LC688" class="blob-code blob-code-inner js-file-line"><span class="pl-smi">ScrollSpy</span>.<span class="pl-c1">prototype</span>.<span class="pl-en">clear</span><span class="pl-k">=</span><span class="pl-k">function</span>(){<span class="pl-en">$</span>(<span class="pl-c1">this</span>.<span class="pl-smi">selector</span>).<span class="pl-en">parentsUntil</span>(<span class="pl-c1">this</span>.<span class="pl-c1">options</span>.<span class="pl-c1">target</span>,<span class="pl-s"><span class="pl-pds">&#39;</span>.active<span class="pl-pds">&#39;</span></span>).<span class="pl-en">removeClass</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>active<span class="pl-pds">&#39;</span></span>)}</td>
      </tr>
      <tr>
        <td id="L689" class="blob-num js-line-number" data-line-number="689"></td>
        <td id="LC689" class="blob-code blob-code-inner js-file-line"><span class="pl-k">function</span> <span class="pl-en">Plugin</span>(<span class="pl-smi">option</span>){<span class="pl-k">return</span> <span class="pl-c1">this</span>.<span class="pl-en">each</span>(<span class="pl-k">function</span>(){<span class="pl-k">var</span> $this<span class="pl-k">=</span><span class="pl-en">$</span>(<span class="pl-c1">this</span>)</td>
      </tr>
      <tr>
        <td id="L690" class="blob-num js-line-number" data-line-number="690"></td>
        <td id="LC690" class="blob-code blob-code-inner js-file-line"><span class="pl-k">var</span> data<span class="pl-k">=</span><span class="pl-smi">$this</span>.<span class="pl-c1">data</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>bs.scrollspy<span class="pl-pds">&#39;</span></span>)</td>
      </tr>
      <tr>
        <td id="L691" class="blob-num js-line-number" data-line-number="691"></td>
        <td id="LC691" class="blob-code blob-code-inner js-file-line"><span class="pl-k">var</span> options<span class="pl-k">=</span><span class="pl-k">typeof</span> option<span class="pl-k">==</span><span class="pl-s"><span class="pl-pds">&#39;</span>object<span class="pl-pds">&#39;</span></span><span class="pl-k">&amp;&amp;</span>option</td>
      </tr>
      <tr>
        <td id="L692" class="blob-num js-line-number" data-line-number="692"></td>
        <td id="LC692" class="blob-code blob-code-inner js-file-line"><span class="pl-k">if</span>(<span class="pl-k">!</span>data)<span class="pl-smi">$this</span>.<span class="pl-c1">data</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>bs.scrollspy<span class="pl-pds">&#39;</span></span>,(data<span class="pl-k">=</span><span class="pl-k">new</span> <span class="pl-en">ScrollSpy</span>(<span class="pl-c1">this</span>,options)))</td>
      </tr>
      <tr>
        <td id="L693" class="blob-num js-line-number" data-line-number="693"></td>
        <td id="LC693" class="blob-code blob-code-inner js-file-line"><span class="pl-k">if</span>(<span class="pl-k">typeof</span> option<span class="pl-k">==</span><span class="pl-s"><span class="pl-pds">&#39;</span>string<span class="pl-pds">&#39;</span></span>)data[option]()})}</td>
      </tr>
      <tr>
        <td id="L694" class="blob-num js-line-number" data-line-number="694"></td>
        <td id="LC694" class="blob-code blob-code-inner js-file-line"><span class="pl-k">var</span> old<span class="pl-k">=</span><span class="pl-smi">$</span>.<span class="pl-smi">fn</span>.<span class="pl-smi">scrollspy</span></td>
      </tr>
      <tr>
        <td id="L695" class="blob-num js-line-number" data-line-number="695"></td>
        <td id="LC695" class="blob-code blob-code-inner js-file-line"><span class="pl-smi">$</span>.<span class="pl-smi">fn</span>.<span class="pl-smi">scrollspy</span><span class="pl-k">=</span><span class="pl-c1">Plugin</span></td>
      </tr>
      <tr>
        <td id="L696" class="blob-num js-line-number" data-line-number="696"></td>
        <td id="LC696" class="blob-code blob-code-inner js-file-line"><span class="pl-smi">$</span>.<span class="pl-smi">fn</span>.<span class="pl-smi">scrollspy</span>.<span class="pl-smi">Constructor</span><span class="pl-k">=</span>ScrollSpy</td>
      </tr>
      <tr>
        <td id="L697" class="blob-num js-line-number" data-line-number="697"></td>
        <td id="LC697" class="blob-code blob-code-inner js-file-line"><span class="pl-smi">$</span>.<span class="pl-smi">fn</span>.<span class="pl-smi">scrollspy</span>.<span class="pl-en">noConflict</span><span class="pl-k">=</span><span class="pl-k">function</span>(){<span class="pl-smi">$</span>.<span class="pl-smi">fn</span>.<span class="pl-smi">scrollspy</span><span class="pl-k">=</span>old</td>
      </tr>
      <tr>
        <td id="L698" class="blob-num js-line-number" data-line-number="698"></td>
        <td id="LC698" class="blob-code blob-code-inner js-file-line"><span class="pl-k">return</span> <span class="pl-c1">this</span>}</td>
      </tr>
      <tr>
        <td id="L699" class="blob-num js-line-number" data-line-number="699"></td>
        <td id="LC699" class="blob-code blob-code-inner js-file-line"><span class="pl-en">$</span>(<span class="pl-c1">window</span>).<span class="pl-en">on</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>load.bs.scrollspy.data-api<span class="pl-pds">&#39;</span></span>,<span class="pl-k">function</span>(){<span class="pl-en">$</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>[data-spy=&quot;scroll&quot;]<span class="pl-pds">&#39;</span></span>).<span class="pl-en">each</span>(<span class="pl-k">function</span>(){<span class="pl-k">var</span> $spy<span class="pl-k">=</span><span class="pl-en">$</span>(<span class="pl-c1">this</span>)</td>
      </tr>
      <tr>
        <td id="L700" class="blob-num js-line-number" data-line-number="700"></td>
        <td id="LC700" class="blob-code blob-code-inner js-file-line"><span class="pl-c1">Plugin</span>.<span class="pl-c1">call</span>($spy,<span class="pl-smi">$spy</span>.<span class="pl-c1">data</span>())})})}(jQuery);<span class="pl-k">+</span><span class="pl-k">function</span>(<span class="pl-smi">$</span>){<span class="pl-s"><span class="pl-pds">&#39;</span>use strict<span class="pl-pds">&#39;</span></span>;<span class="pl-k">var</span> <span class="pl-en">Tab</span><span class="pl-k">=</span><span class="pl-k">function</span>(<span class="pl-smi">element</span>){<span class="pl-c1">this</span>.<span class="pl-smi">element</span><span class="pl-k">=</span><span class="pl-en">$</span>(element)</td>
      </tr>
      <tr>
        <td id="L701" class="blob-num js-line-number" data-line-number="701"></td>
        <td id="LC701" class="blob-code blob-code-inner js-file-line">}</td>
      </tr>
      <tr>
        <td id="L702" class="blob-num js-line-number" data-line-number="702"></td>
        <td id="LC702" class="blob-code blob-code-inner js-file-line"><span class="pl-smi">Tab</span>.<span class="pl-c1">VERSION</span><span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">&#39;</span>3.3.7<span class="pl-pds">&#39;</span></span></td>
      </tr>
      <tr>
        <td id="L703" class="blob-num js-line-number" data-line-number="703"></td>
        <td id="LC703" class="blob-code blob-code-inner js-file-line"><span class="pl-smi">Tab</span>.<span class="pl-c1">TRANSITION_DURATION</span><span class="pl-k">=</span><span class="pl-c1">150</span></td>
      </tr>
      <tr>
        <td id="L704" class="blob-num js-line-number" data-line-number="704"></td>
        <td id="LC704" class="blob-code blob-code-inner js-file-line"><span class="pl-smi">Tab</span>.<span class="pl-c1">prototype</span>.<span class="pl-en">show</span><span class="pl-k">=</span><span class="pl-k">function</span>(){<span class="pl-k">var</span> $this<span class="pl-k">=</span><span class="pl-c1">this</span>.<span class="pl-smi">element</span></td>
      </tr>
      <tr>
        <td id="L705" class="blob-num js-line-number" data-line-number="705"></td>
        <td id="LC705" class="blob-code blob-code-inner js-file-line"><span class="pl-k">var</span> $ul<span class="pl-k">=</span><span class="pl-smi">$this</span>.<span class="pl-c1">closest</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>ul:not(.dropdown-menu)<span class="pl-pds">&#39;</span></span>)</td>
      </tr>
      <tr>
        <td id="L706" class="blob-num js-line-number" data-line-number="706"></td>
        <td id="LC706" class="blob-code blob-code-inner js-file-line"><span class="pl-k">var</span> selector<span class="pl-k">=</span><span class="pl-smi">$this</span>.<span class="pl-c1">data</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>target<span class="pl-pds">&#39;</span></span>)</td>
      </tr>
      <tr>
        <td id="L707" class="blob-num js-line-number" data-line-number="707"></td>
        <td id="LC707" class="blob-code blob-code-inner js-file-line"><span class="pl-k">if</span>(<span class="pl-k">!</span>selector){selector<span class="pl-k">=</span><span class="pl-smi">$this</span>.<span class="pl-en">attr</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>href<span class="pl-pds">&#39;</span></span>)</td>
      </tr>
      <tr>
        <td id="L708" class="blob-num js-line-number" data-line-number="708"></td>
        <td id="LC708" class="blob-code blob-code-inner js-file-line">selector<span class="pl-k">=</span>selector<span class="pl-k">&amp;&amp;</span><span class="pl-smi">selector</span>.<span class="pl-c1">replace</span>(<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-c1">.</span><span class="pl-k">*</span>(?=#<span class="pl-c1">[<span class="pl-k">^</span><span class="pl-c1">\s</span>]</span><span class="pl-k">*</span><span class="pl-k">$</span>)<span class="pl-pds">/</span></span>,<span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span>)}</td>
      </tr>
      <tr>
        <td id="L709" class="blob-num js-line-number" data-line-number="709"></td>
        <td id="LC709" class="blob-code blob-code-inner js-file-line"><span class="pl-k">if</span>(<span class="pl-smi">$this</span>.<span class="pl-c1">parent</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>li<span class="pl-pds">&#39;</span></span>).<span class="pl-en">hasClass</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>active<span class="pl-pds">&#39;</span></span>))<span class="pl-k">return</span></td>
      </tr>
      <tr>
        <td id="L710" class="blob-num js-line-number" data-line-number="710"></td>
        <td id="LC710" class="blob-code blob-code-inner js-file-line"><span class="pl-k">var</span> $previous<span class="pl-k">=</span><span class="pl-smi">$ul</span>.<span class="pl-c1">find</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>.active:last a<span class="pl-pds">&#39;</span></span>)</td>
      </tr>
      <tr>
        <td id="L711" class="blob-num js-line-number" data-line-number="711"></td>
        <td id="LC711" class="blob-code blob-code-inner js-file-line"><span class="pl-k">var</span> hideEvent<span class="pl-k">=</span><span class="pl-smi">$</span>.<span class="pl-en">Event</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>hide.bs.tab<span class="pl-pds">&#39;</span></span>,{relatedTarget<span class="pl-k">:</span>$this[<span class="pl-c1">0</span>]})</td>
      </tr>
      <tr>
        <td id="L712" class="blob-num js-line-number" data-line-number="712"></td>
        <td id="LC712" class="blob-code blob-code-inner js-file-line"><span class="pl-k">var</span> showEvent<span class="pl-k">=</span><span class="pl-smi">$</span>.<span class="pl-en">Event</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>show.bs.tab<span class="pl-pds">&#39;</span></span>,{relatedTarget<span class="pl-k">:</span>$previous[<span class="pl-c1">0</span>]})</td>
      </tr>
      <tr>
        <td id="L713" class="blob-num js-line-number" data-line-number="713"></td>
        <td id="LC713" class="blob-code blob-code-inner js-file-line"><span class="pl-smi">$previous</span>.<span class="pl-en">trigger</span>(hideEvent)</td>
      </tr>
      <tr>
        <td id="L714" class="blob-num js-line-number" data-line-number="714"></td>
        <td id="LC714" class="blob-code blob-code-inner js-file-line"><span class="pl-smi">$this</span>.<span class="pl-en">trigger</span>(showEvent)</td>
      </tr>
      <tr>
        <td id="L715" class="blob-num js-line-number" data-line-number="715"></td>
        <td id="LC715" class="blob-code blob-code-inner js-file-line"><span class="pl-k">if</span>(<span class="pl-smi">showEvent</span>.<span class="pl-en">isDefaultPrevented</span>()<span class="pl-k">||</span><span class="pl-smi">hideEvent</span>.<span class="pl-en">isDefaultPrevented</span>())<span class="pl-k">return</span></td>
      </tr>
      <tr>
        <td id="L716" class="blob-num js-line-number" data-line-number="716"></td>
        <td id="LC716" class="blob-code blob-code-inner js-file-line"><span class="pl-k">var</span> $target<span class="pl-k">=</span><span class="pl-en">$</span>(selector)</td>
      </tr>
      <tr>
        <td id="L717" class="blob-num js-line-number" data-line-number="717"></td>
        <td id="LC717" class="blob-code blob-code-inner js-file-line"><span class="pl-c1">this</span>.<span class="pl-en">activate</span>(<span class="pl-smi">$this</span>.<span class="pl-c1">closest</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>li<span class="pl-pds">&#39;</span></span>),$ul)</td>
      </tr>
      <tr>
        <td id="L718" class="blob-num js-line-number" data-line-number="718"></td>
        <td id="LC718" class="blob-code blob-code-inner js-file-line"><span class="pl-c1">this</span>.<span class="pl-en">activate</span>($target,<span class="pl-smi">$target</span>.<span class="pl-c1">parent</span>(),<span class="pl-k">function</span>(){<span class="pl-smi">$previous</span>.<span class="pl-en">trigger</span>({type<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>hidden.bs.tab<span class="pl-pds">&#39;</span></span>,relatedTarget<span class="pl-k">:</span>$this[<span class="pl-c1">0</span>]})</td>
      </tr>
      <tr>
        <td id="L719" class="blob-num js-line-number" data-line-number="719"></td>
        <td id="LC719" class="blob-code blob-code-inner js-file-line"><span class="pl-smi">$this</span>.<span class="pl-en">trigger</span>({type<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>shown.bs.tab<span class="pl-pds">&#39;</span></span>,relatedTarget<span class="pl-k">:</span>$previous[<span class="pl-c1">0</span>]})})}</td>
      </tr>
      <tr>
        <td id="L720" class="blob-num js-line-number" data-line-number="720"></td>
        <td id="LC720" class="blob-code blob-code-inner js-file-line"><span class="pl-smi">Tab</span>.<span class="pl-c1">prototype</span>.<span class="pl-en">activate</span><span class="pl-k">=</span><span class="pl-k">function</span>(<span class="pl-smi">element</span>,<span class="pl-smi">container</span>,<span class="pl-smi">callback</span>){<span class="pl-k">var</span> $active<span class="pl-k">=</span><span class="pl-smi">container</span>.<span class="pl-c1">find</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>&gt; .active<span class="pl-pds">&#39;</span></span>)</td>
      </tr>
      <tr>
        <td id="L721" class="blob-num js-line-number" data-line-number="721"></td>
        <td id="LC721" class="blob-code blob-code-inner js-file-line"><span class="pl-k">var</span> transition<span class="pl-k">=</span>callback<span class="pl-k">&amp;&amp;</span><span class="pl-smi">$</span>.<span class="pl-smi">support</span>.<span class="pl-smi">transition</span><span class="pl-k">&amp;&amp;</span>(<span class="pl-smi">$active</span>.<span class="pl-c1">length</span><span class="pl-k">&amp;&amp;</span><span class="pl-smi">$active</span>.<span class="pl-en">hasClass</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>fade<span class="pl-pds">&#39;</span></span>)<span class="pl-k">||!!</span><span class="pl-smi">container</span>.<span class="pl-c1">find</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>&gt; .fade<span class="pl-pds">&#39;</span></span>).<span class="pl-c1">length</span>)</td>
      </tr>
      <tr>
        <td id="L722" class="blob-num js-line-number" data-line-number="722"></td>
        <td id="LC722" class="blob-code blob-code-inner js-file-line"><span class="pl-k">function</span> <span class="pl-en">next</span>(){<span class="pl-smi">$active</span>.<span class="pl-en">removeClass</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>active<span class="pl-pds">&#39;</span></span>).<span class="pl-c1">find</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>&gt; .dropdown-menu &gt; .active<span class="pl-pds">&#39;</span></span>).<span class="pl-en">removeClass</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>active<span class="pl-pds">&#39;</span></span>).<span class="pl-en">end</span>().<span class="pl-c1">find</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>[data-toggle=&quot;tab&quot;]<span class="pl-pds">&#39;</span></span>).<span class="pl-en">attr</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>aria-expanded<span class="pl-pds">&#39;</span></span>,<span class="pl-c1">false</span>)</td>
      </tr>
      <tr>
        <td id="L723" class="blob-num js-line-number" data-line-number="723"></td>
        <td id="LC723" class="blob-code blob-code-inner js-file-line"><span class="pl-smi">element</span>.<span class="pl-en">addClass</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>active<span class="pl-pds">&#39;</span></span>).<span class="pl-c1">find</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>[data-toggle=&quot;tab&quot;]<span class="pl-pds">&#39;</span></span>).<span class="pl-en">attr</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>aria-expanded<span class="pl-pds">&#39;</span></span>,<span class="pl-c1">true</span>)</td>
      </tr>
      <tr>
        <td id="L724" class="blob-num js-line-number" data-line-number="724"></td>
        <td id="LC724" class="blob-code blob-code-inner js-file-line"><span class="pl-k">if</span>(transition){element[<span class="pl-c1">0</span>].<span class="pl-smi">offsetWidth</span></td>
      </tr>
      <tr>
        <td id="L725" class="blob-num js-line-number" data-line-number="725"></td>
        <td id="LC725" class="blob-code blob-code-inner js-file-line"><span class="pl-smi">element</span>.<span class="pl-en">addClass</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>in<span class="pl-pds">&#39;</span></span>)}<span class="pl-k">else</span>{<span class="pl-smi">element</span>.<span class="pl-en">removeClass</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>fade<span class="pl-pds">&#39;</span></span>)}</td>
      </tr>
      <tr>
        <td id="L726" class="blob-num js-line-number" data-line-number="726"></td>
        <td id="LC726" class="blob-code blob-code-inner js-file-line"><span class="pl-k">if</span>(<span class="pl-smi">element</span>.<span class="pl-c1">parent</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>.dropdown-menu<span class="pl-pds">&#39;</span></span>).<span class="pl-c1">length</span>){<span class="pl-smi">element</span>.<span class="pl-c1">closest</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>li.dropdown<span class="pl-pds">&#39;</span></span>).<span class="pl-en">addClass</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>active<span class="pl-pds">&#39;</span></span>).<span class="pl-en">end</span>().<span class="pl-c1">find</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>[data-toggle=&quot;tab&quot;]<span class="pl-pds">&#39;</span></span>).<span class="pl-en">attr</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>aria-expanded<span class="pl-pds">&#39;</span></span>,<span class="pl-c1">true</span>)}</td>
      </tr>
      <tr>
        <td id="L727" class="blob-num js-line-number" data-line-number="727"></td>
        <td id="LC727" class="blob-code blob-code-inner js-file-line">callback<span class="pl-k">&amp;&amp;</span><span class="pl-en">callback</span>()}</td>
      </tr>
      <tr>
        <td id="L728" class="blob-num js-line-number" data-line-number="728"></td>
        <td id="LC728" class="blob-code blob-code-inner js-file-line"><span class="pl-smi">$active</span>.<span class="pl-c1">length</span><span class="pl-k">&amp;&amp;</span>transition<span class="pl-k">?</span><span class="pl-smi">$active</span>.<span class="pl-en">one</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>bsTransitionEnd<span class="pl-pds">&#39;</span></span>,next).<span class="pl-en">emulateTransitionEnd</span>(<span class="pl-smi">Tab</span>.<span class="pl-c1">TRANSITION_DURATION</span>)<span class="pl-k">:</span><span class="pl-en">next</span>()</td>
      </tr>
      <tr>
        <td id="L729" class="blob-num js-line-number" data-line-number="729"></td>
        <td id="LC729" class="blob-code blob-code-inner js-file-line"><span class="pl-smi">$active</span>.<span class="pl-en">removeClass</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>in<span class="pl-pds">&#39;</span></span>)}</td>
      </tr>
      <tr>
        <td id="L730" class="blob-num js-line-number" data-line-number="730"></td>
        <td id="LC730" class="blob-code blob-code-inner js-file-line"><span class="pl-k">function</span> <span class="pl-en">Plugin</span>(<span class="pl-smi">option</span>){<span class="pl-k">return</span> <span class="pl-c1">this</span>.<span class="pl-en">each</span>(<span class="pl-k">function</span>(){<span class="pl-k">var</span> $this<span class="pl-k">=</span><span class="pl-en">$</span>(<span class="pl-c1">this</span>)</td>
      </tr>
      <tr>
        <td id="L731" class="blob-num js-line-number" data-line-number="731"></td>
        <td id="LC731" class="blob-code blob-code-inner js-file-line"><span class="pl-k">var</span> data<span class="pl-k">=</span><span class="pl-smi">$this</span>.<span class="pl-c1">data</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>bs.tab<span class="pl-pds">&#39;</span></span>)</td>
      </tr>
      <tr>
        <td id="L732" class="blob-num js-line-number" data-line-number="732"></td>
        <td id="LC732" class="blob-code blob-code-inner js-file-line"><span class="pl-k">if</span>(<span class="pl-k">!</span>data)<span class="pl-smi">$this</span>.<span class="pl-c1">data</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>bs.tab<span class="pl-pds">&#39;</span></span>,(data<span class="pl-k">=</span><span class="pl-k">new</span> <span class="pl-en">Tab</span>(<span class="pl-c1">this</span>)))</td>
      </tr>
      <tr>
        <td id="L733" class="blob-num js-line-number" data-line-number="733"></td>
        <td id="LC733" class="blob-code blob-code-inner js-file-line"><span class="pl-k">if</span>(<span class="pl-k">typeof</span> option<span class="pl-k">==</span><span class="pl-s"><span class="pl-pds">&#39;</span>string<span class="pl-pds">&#39;</span></span>)data[option]()})}</td>
      </tr>
      <tr>
        <td id="L734" class="blob-num js-line-number" data-line-number="734"></td>
        <td id="LC734" class="blob-code blob-code-inner js-file-line"><span class="pl-k">var</span> old<span class="pl-k">=</span><span class="pl-smi">$</span>.<span class="pl-smi">fn</span>.<span class="pl-smi">tab</span></td>
      </tr>
      <tr>
        <td id="L735" class="blob-num js-line-number" data-line-number="735"></td>
        <td id="LC735" class="blob-code blob-code-inner js-file-line"><span class="pl-smi">$</span>.<span class="pl-smi">fn</span>.<span class="pl-smi">tab</span><span class="pl-k">=</span><span class="pl-c1">Plugin</span></td>
      </tr>
      <tr>
        <td id="L736" class="blob-num js-line-number" data-line-number="736"></td>
        <td id="LC736" class="blob-code blob-code-inner js-file-line"><span class="pl-smi">$</span>.<span class="pl-smi">fn</span>.<span class="pl-smi">tab</span>.<span class="pl-smi">Constructor</span><span class="pl-k">=</span>Tab</td>
      </tr>
      <tr>
        <td id="L737" class="blob-num js-line-number" data-line-number="737"></td>
        <td id="LC737" class="blob-code blob-code-inner js-file-line"><span class="pl-smi">$</span>.<span class="pl-smi">fn</span>.<span class="pl-smi">tab</span>.<span class="pl-en">noConflict</span><span class="pl-k">=</span><span class="pl-k">function</span>(){<span class="pl-smi">$</span>.<span class="pl-smi">fn</span>.<span class="pl-smi">tab</span><span class="pl-k">=</span>old</td>
      </tr>
      <tr>
        <td id="L738" class="blob-num js-line-number" data-line-number="738"></td>
        <td id="LC738" class="blob-code blob-code-inner js-file-line"><span class="pl-k">return</span> <span class="pl-c1">this</span>}</td>
      </tr>
      <tr>
        <td id="L739" class="blob-num js-line-number" data-line-number="739"></td>
        <td id="LC739" class="blob-code blob-code-inner js-file-line"><span class="pl-k">var</span> <span class="pl-en">clickHandler</span><span class="pl-k">=</span><span class="pl-k">function</span>(<span class="pl-smi">e</span>){<span class="pl-smi">e</span>.<span class="pl-c1">preventDefault</span>()</td>
      </tr>
      <tr>
        <td id="L740" class="blob-num js-line-number" data-line-number="740"></td>
        <td id="LC740" class="blob-code blob-code-inner js-file-line"><span class="pl-c1">Plugin</span>.<span class="pl-c1">call</span>(<span class="pl-en">$</span>(<span class="pl-c1">this</span>),<span class="pl-s"><span class="pl-pds">&#39;</span>show<span class="pl-pds">&#39;</span></span>)}</td>
      </tr>
      <tr>
        <td id="L741" class="blob-num js-line-number" data-line-number="741"></td>
        <td id="LC741" class="blob-code blob-code-inner js-file-line"><span class="pl-en">$</span>(<span class="pl-c1">document</span>).<span class="pl-en">on</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>click.bs.tab.data-api<span class="pl-pds">&#39;</span></span>,<span class="pl-s"><span class="pl-pds">&#39;</span>[data-toggle=&quot;tab&quot;]<span class="pl-pds">&#39;</span></span>,clickHandler).<span class="pl-en">on</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>click.bs.tab.data-api<span class="pl-pds">&#39;</span></span>,<span class="pl-s"><span class="pl-pds">&#39;</span>[data-toggle=&quot;pill&quot;]<span class="pl-pds">&#39;</span></span>,clickHandler)}(jQuery);<span class="pl-k">+</span><span class="pl-k">function</span>(<span class="pl-smi">$</span>){<span class="pl-s"><span class="pl-pds">&#39;</span>use strict<span class="pl-pds">&#39;</span></span>;<span class="pl-k">var</span> <span class="pl-en">Affix</span><span class="pl-k">=</span><span class="pl-k">function</span>(<span class="pl-smi">element</span>,<span class="pl-smi">options</span>){<span class="pl-c1">this</span>.<span class="pl-c1">options</span><span class="pl-k">=</span><span class="pl-smi">$</span>.<span class="pl-en">extend</span>({},<span class="pl-smi">Affix</span>.<span class="pl-c1">DEFAULTS</span>,options)</td>
      </tr>
      <tr>
        <td id="L742" class="blob-num js-line-number" data-line-number="742"></td>
        <td id="LC742" class="blob-code blob-code-inner js-file-line"><span class="pl-c1">this</span>.<span class="pl-smi">$target</span><span class="pl-k">=</span><span class="pl-en">$</span>(<span class="pl-c1">this</span>.<span class="pl-c1">options</span>.<span class="pl-c1">target</span>).<span class="pl-en">on</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>scroll.bs.affix.data-api<span class="pl-pds">&#39;</span></span>,<span class="pl-smi">$</span>.<span class="pl-en">proxy</span>(<span class="pl-c1">this</span>.<span class="pl-smi">checkPosition</span>,<span class="pl-c1">this</span>)).<span class="pl-en">on</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>click.bs.affix.data-api<span class="pl-pds">&#39;</span></span>,<span class="pl-smi">$</span>.<span class="pl-en">proxy</span>(<span class="pl-c1">this</span>.<span class="pl-smi">checkPositionWithEventLoop</span>,<span class="pl-c1">this</span>))</td>
      </tr>
      <tr>
        <td id="L743" class="blob-num js-line-number" data-line-number="743"></td>
        <td id="LC743" class="blob-code blob-code-inner js-file-line"><span class="pl-c1">this</span>.<span class="pl-smi">$element</span><span class="pl-k">=</span><span class="pl-en">$</span>(element)</td>
      </tr>
      <tr>
        <td id="L744" class="blob-num js-line-number" data-line-number="744"></td>
        <td id="LC744" class="blob-code blob-code-inner js-file-line"><span class="pl-c1">this</span>.<span class="pl-smi">affixed</span><span class="pl-k">=</span><span class="pl-c1">null</span></td>
      </tr>
      <tr>
        <td id="L745" class="blob-num js-line-number" data-line-number="745"></td>
        <td id="LC745" class="blob-code blob-code-inner js-file-line"><span class="pl-c1">this</span>.<span class="pl-smi">unpin</span><span class="pl-k">=</span><span class="pl-c1">null</span></td>
      </tr>
      <tr>
        <td id="L746" class="blob-num js-line-number" data-line-number="746"></td>
        <td id="LC746" class="blob-code blob-code-inner js-file-line"><span class="pl-c1">this</span>.<span class="pl-smi">pinnedOffset</span><span class="pl-k">=</span><span class="pl-c1">null</span></td>
      </tr>
      <tr>
        <td id="L747" class="blob-num js-line-number" data-line-number="747"></td>
        <td id="LC747" class="blob-code blob-code-inner js-file-line"><span class="pl-c1">this</span>.<span class="pl-en">checkPosition</span>()}</td>
      </tr>
      <tr>
        <td id="L748" class="blob-num js-line-number" data-line-number="748"></td>
        <td id="LC748" class="blob-code blob-code-inner js-file-line"><span class="pl-smi">Affix</span>.<span class="pl-c1">VERSION</span><span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">&#39;</span>3.3.7<span class="pl-pds">&#39;</span></span></td>
      </tr>
      <tr>
        <td id="L749" class="blob-num js-line-number" data-line-number="749"></td>
        <td id="LC749" class="blob-code blob-code-inner js-file-line"><span class="pl-smi">Affix</span>.<span class="pl-c1">RESET</span><span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">&#39;</span>affix affix-top affix-bottom<span class="pl-pds">&#39;</span></span></td>
      </tr>
      <tr>
        <td id="L750" class="blob-num js-line-number" data-line-number="750"></td>
        <td id="LC750" class="blob-code blob-code-inner js-file-line"><span class="pl-smi">Affix</span>.<span class="pl-c1">DEFAULTS</span><span class="pl-k">=</span>{offset<span class="pl-k">:</span><span class="pl-c1">0</span>,target<span class="pl-k">:</span><span class="pl-c1">window</span>}</td>
      </tr>
      <tr>
        <td id="L751" class="blob-num js-line-number" data-line-number="751"></td>
        <td id="LC751" class="blob-code blob-code-inner js-file-line"><span class="pl-smi">Affix</span>.<span class="pl-c1">prototype</span>.<span class="pl-en">getState</span><span class="pl-k">=</span><span class="pl-k">function</span>(<span class="pl-smi">scrollHeight</span>,<span class="pl-smi">height</span>,<span class="pl-smi">offsetTop</span>,<span class="pl-smi">offsetBottom</span>){<span class="pl-k">var</span> scrollTop<span class="pl-k">=</span><span class="pl-c1">this</span>.<span class="pl-smi">$target</span>.<span class="pl-en">scrollTop</span>()</td>
      </tr>
      <tr>
        <td id="L752" class="blob-num js-line-number" data-line-number="752"></td>
        <td id="LC752" class="blob-code blob-code-inner js-file-line"><span class="pl-k">var</span> position<span class="pl-k">=</span><span class="pl-c1">this</span>.<span class="pl-smi">$element</span>.<span class="pl-en">offset</span>()</td>
      </tr>
      <tr>
        <td id="L753" class="blob-num js-line-number" data-line-number="753"></td>
        <td id="LC753" class="blob-code blob-code-inner js-file-line"><span class="pl-k">var</span> targetHeight<span class="pl-k">=</span><span class="pl-c1">this</span>.<span class="pl-smi">$target</span>.<span class="pl-c1">height</span>()</td>
      </tr>
      <tr>
        <td id="L754" class="blob-num js-line-number" data-line-number="754"></td>
        <td id="LC754" class="blob-code blob-code-inner js-file-line"><span class="pl-k">if</span>(offsetTop<span class="pl-k">!=</span><span class="pl-c1">null</span><span class="pl-k">&amp;&amp;</span><span class="pl-c1">this</span>.<span class="pl-smi">affixed</span><span class="pl-k">==</span><span class="pl-s"><span class="pl-pds">&#39;</span>top<span class="pl-pds">&#39;</span></span>)<span class="pl-k">return</span> scrollTop<span class="pl-k">&lt;</span>offsetTop<span class="pl-k">?</span><span class="pl-s"><span class="pl-pds">&#39;</span>top<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span><span class="pl-c1">false</span></td>
      </tr>
      <tr>
        <td id="L755" class="blob-num js-line-number" data-line-number="755"></td>
        <td id="LC755" class="blob-code blob-code-inner js-file-line"><span class="pl-k">if</span>(<span class="pl-c1">this</span>.<span class="pl-smi">affixed</span><span class="pl-k">==</span><span class="pl-s"><span class="pl-pds">&#39;</span>bottom<span class="pl-pds">&#39;</span></span>){<span class="pl-k">if</span>(offsetTop<span class="pl-k">!=</span><span class="pl-c1">null</span>)<span class="pl-k">return</span>(scrollTop<span class="pl-k">+</span><span class="pl-c1">this</span>.<span class="pl-smi">unpin</span><span class="pl-k">&lt;=</span><span class="pl-smi">position</span>.<span class="pl-c1">top</span>)<span class="pl-k">?</span><span class="pl-c1">false</span><span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>bottom<span class="pl-pds">&#39;</span></span></td>
      </tr>
      <tr>
        <td id="L756" class="blob-num js-line-number" data-line-number="756"></td>
        <td id="LC756" class="blob-code blob-code-inner js-file-line"><span class="pl-k">return</span>(scrollTop<span class="pl-k">+</span>targetHeight<span class="pl-k">&lt;=</span>scrollHeight<span class="pl-k">-</span>offsetBottom)<span class="pl-k">?</span><span class="pl-c1">false</span><span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>bottom<span class="pl-pds">&#39;</span></span>}</td>
      </tr>
      <tr>
        <td id="L757" class="blob-num js-line-number" data-line-number="757"></td>
        <td id="LC757" class="blob-code blob-code-inner js-file-line"><span class="pl-k">var</span> initializing<span class="pl-k">=</span><span class="pl-c1">this</span>.<span class="pl-smi">affixed</span><span class="pl-k">==</span><span class="pl-c1">null</span></td>
      </tr>
      <tr>
        <td id="L758" class="blob-num js-line-number" data-line-number="758"></td>
        <td id="LC758" class="blob-code blob-code-inner js-file-line"><span class="pl-k">var</span> colliderTop<span class="pl-k">=</span>initializing<span class="pl-k">?</span>scrollTop<span class="pl-k">:</span><span class="pl-smi">position</span>.<span class="pl-c1">top</span></td>
      </tr>
      <tr>
        <td id="L759" class="blob-num js-line-number" data-line-number="759"></td>
        <td id="LC759" class="blob-code blob-code-inner js-file-line"><span class="pl-k">var</span> colliderHeight<span class="pl-k">=</span>initializing<span class="pl-k">?</span>targetHeight<span class="pl-k">:</span>height</td>
      </tr>
      <tr>
        <td id="L760" class="blob-num js-line-number" data-line-number="760"></td>
        <td id="LC760" class="blob-code blob-code-inner js-file-line"><span class="pl-k">if</span>(offsetTop<span class="pl-k">!=</span><span class="pl-c1">null</span><span class="pl-k">&amp;&amp;</span>scrollTop<span class="pl-k">&lt;=</span>offsetTop)<span class="pl-k">return</span><span class="pl-s"><span class="pl-pds">&#39;</span>top<span class="pl-pds">&#39;</span></span></td>
      </tr>
      <tr>
        <td id="L761" class="blob-num js-line-number" data-line-number="761"></td>
        <td id="LC761" class="blob-code blob-code-inner js-file-line"><span class="pl-k">if</span>(offsetBottom<span class="pl-k">!=</span><span class="pl-c1">null</span><span class="pl-k">&amp;&amp;</span>(colliderTop<span class="pl-k">+</span>colliderHeight<span class="pl-k">&gt;=</span>scrollHeight<span class="pl-k">-</span>offsetBottom))<span class="pl-k">return</span><span class="pl-s"><span class="pl-pds">&#39;</span>bottom<span class="pl-pds">&#39;</span></span></td>
      </tr>
      <tr>
        <td id="L762" class="blob-num js-line-number" data-line-number="762"></td>
        <td id="LC762" class="blob-code blob-code-inner js-file-line"><span class="pl-k">return</span> <span class="pl-c1">false</span>}</td>
      </tr>
      <tr>
        <td id="L763" class="blob-num js-line-number" data-line-number="763"></td>
        <td id="LC763" class="blob-code blob-code-inner js-file-line"><span class="pl-smi">Affix</span>.<span class="pl-c1">prototype</span>.<span class="pl-en">getPinnedOffset</span><span class="pl-k">=</span><span class="pl-k">function</span>(){<span class="pl-k">if</span>(<span class="pl-c1">this</span>.<span class="pl-smi">pinnedOffset</span>)<span class="pl-k">return</span> <span class="pl-c1">this</span>.<span class="pl-smi">pinnedOffset</span></td>
      </tr>
      <tr>
        <td id="L764" class="blob-num js-line-number" data-line-number="764"></td>
        <td id="LC764" class="blob-code blob-code-inner js-file-line"><span class="pl-c1">this</span>.<span class="pl-smi">$element</span>.<span class="pl-en">removeClass</span>(<span class="pl-smi">Affix</span>.<span class="pl-c1">RESET</span>).<span class="pl-en">addClass</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>affix<span class="pl-pds">&#39;</span></span>)</td>
      </tr>
      <tr>
        <td id="L765" class="blob-num js-line-number" data-line-number="765"></td>
        <td id="LC765" class="blob-code blob-code-inner js-file-line"><span class="pl-k">var</span> scrollTop<span class="pl-k">=</span><span class="pl-c1">this</span>.<span class="pl-smi">$target</span>.<span class="pl-en">scrollTop</span>()</td>
      </tr>
      <tr>
        <td id="L766" class="blob-num js-line-number" data-line-number="766"></td>
        <td id="LC766" class="blob-code blob-code-inner js-file-line"><span class="pl-k">var</span> position<span class="pl-k">=</span><span class="pl-c1">this</span>.<span class="pl-smi">$element</span>.<span class="pl-en">offset</span>()</td>
      </tr>
      <tr>
        <td id="L767" class="blob-num js-line-number" data-line-number="767"></td>
        <td id="LC767" class="blob-code blob-code-inner js-file-line"><span class="pl-k">return</span>(<span class="pl-c1">this</span>.<span class="pl-smi">pinnedOffset</span><span class="pl-k">=</span><span class="pl-smi">position</span>.<span class="pl-c1">top</span><span class="pl-k">-</span>scrollTop)}</td>
      </tr>
      <tr>
        <td id="L768" class="blob-num js-line-number" data-line-number="768"></td>
        <td id="LC768" class="blob-code blob-code-inner js-file-line"><span class="pl-smi">Affix</span>.<span class="pl-c1">prototype</span>.<span class="pl-en">checkPositionWithEventLoop</span><span class="pl-k">=</span><span class="pl-k">function</span>(){<span class="pl-c1">setTimeout</span>(<span class="pl-smi">$</span>.<span class="pl-en">proxy</span>(<span class="pl-c1">this</span>.<span class="pl-smi">checkPosition</span>,<span class="pl-c1">this</span>),<span class="pl-c1">1</span>)}</td>
      </tr>
      <tr>
        <td id="L769" class="blob-num js-line-number" data-line-number="769"></td>
        <td id="LC769" class="blob-code blob-code-inner js-file-line"><span class="pl-smi">Affix</span>.<span class="pl-c1">prototype</span>.<span class="pl-en">checkPosition</span><span class="pl-k">=</span><span class="pl-k">function</span>(){<span class="pl-k">if</span>(<span class="pl-k">!</span><span class="pl-c1">this</span>.<span class="pl-smi">$element</span>.<span class="pl-en">is</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>:visible<span class="pl-pds">&#39;</span></span>))<span class="pl-k">return</span></td>
      </tr>
      <tr>
        <td id="L770" class="blob-num js-line-number" data-line-number="770"></td>
        <td id="LC770" class="blob-code blob-code-inner js-file-line"><span class="pl-k">var</span> height<span class="pl-k">=</span><span class="pl-c1">this</span>.<span class="pl-smi">$element</span>.<span class="pl-c1">height</span>()</td>
      </tr>
      <tr>
        <td id="L771" class="blob-num js-line-number" data-line-number="771"></td>
        <td id="LC771" class="blob-code blob-code-inner js-file-line"><span class="pl-k">var</span> offset<span class="pl-k">=</span><span class="pl-c1">this</span>.<span class="pl-c1">options</span>.<span class="pl-smi">offset</span></td>
      </tr>
      <tr>
        <td id="L772" class="blob-num js-line-number" data-line-number="772"></td>
        <td id="LC772" class="blob-code blob-code-inner js-file-line"><span class="pl-k">var</span> offsetTop<span class="pl-k">=</span><span class="pl-smi">offset</span>.<span class="pl-c1">top</span></td>
      </tr>
      <tr>
        <td id="L773" class="blob-num js-line-number" data-line-number="773"></td>
        <td id="LC773" class="blob-code blob-code-inner js-file-line"><span class="pl-k">var</span> offsetBottom<span class="pl-k">=</span><span class="pl-smi">offset</span>.<span class="pl-c1">bottom</span></td>
      </tr>
      <tr>
        <td id="L774" class="blob-num js-line-number" data-line-number="774"></td>
        <td id="LC774" class="blob-code blob-code-inner js-file-line"><span class="pl-k">var</span> scrollHeight<span class="pl-k">=</span><span class="pl-c1">Math</span>.<span class="pl-c1">max</span>(<span class="pl-en">$</span>(<span class="pl-c1">document</span>).<span class="pl-c1">height</span>(),<span class="pl-en">$</span>(<span class="pl-c1">document</span>.<span class="pl-c1">body</span>).<span class="pl-c1">height</span>())</td>
      </tr>
      <tr>
        <td id="L775" class="blob-num js-line-number" data-line-number="775"></td>
        <td id="LC775" class="blob-code blob-code-inner js-file-line"><span class="pl-k">if</span>(<span class="pl-k">typeof</span> offset<span class="pl-k">!=</span><span class="pl-s"><span class="pl-pds">&#39;</span>object<span class="pl-pds">&#39;</span></span>)offsetBottom<span class="pl-k">=</span>offsetTop<span class="pl-k">=</span>offset</td>
      </tr>
      <tr>
        <td id="L776" class="blob-num js-line-number" data-line-number="776"></td>
        <td id="LC776" class="blob-code blob-code-inner js-file-line"><span class="pl-k">if</span>(<span class="pl-k">typeof</span> offsetTop<span class="pl-k">==</span><span class="pl-s"><span class="pl-pds">&#39;</span>function<span class="pl-pds">&#39;</span></span>)offsetTop<span class="pl-k">=</span><span class="pl-smi">offset</span>.<span class="pl-c1">top</span>(<span class="pl-c1">this</span>.<span class="pl-smi">$element</span>)</td>
      </tr>
      <tr>
        <td id="L777" class="blob-num js-line-number" data-line-number="777"></td>
        <td id="LC777" class="blob-code blob-code-inner js-file-line"><span class="pl-k">if</span>(<span class="pl-k">typeof</span> offsetBottom<span class="pl-k">==</span><span class="pl-s"><span class="pl-pds">&#39;</span>function<span class="pl-pds">&#39;</span></span>)offsetBottom<span class="pl-k">=</span><span class="pl-smi">offset</span>.<span class="pl-c1">bottom</span>(<span class="pl-c1">this</span>.<span class="pl-smi">$element</span>)</td>
      </tr>
      <tr>
        <td id="L778" class="blob-num js-line-number" data-line-number="778"></td>
        <td id="LC778" class="blob-code blob-code-inner js-file-line"><span class="pl-k">var</span> affix<span class="pl-k">=</span><span class="pl-c1">this</span>.<span class="pl-en">getState</span>(scrollHeight,height,offsetTop,offsetBottom)</td>
      </tr>
      <tr>
        <td id="L779" class="blob-num js-line-number" data-line-number="779"></td>
        <td id="LC779" class="blob-code blob-code-inner js-file-line"><span class="pl-k">if</span>(<span class="pl-c1">this</span>.<span class="pl-smi">affixed</span><span class="pl-k">!=</span>affix){<span class="pl-k">if</span>(<span class="pl-c1">this</span>.<span class="pl-smi">unpin</span><span class="pl-k">!=</span><span class="pl-c1">null</span>)<span class="pl-c1">this</span>.<span class="pl-smi">$element</span>.<span class="pl-en">css</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>top<span class="pl-pds">&#39;</span></span>,<span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span>)</td>
      </tr>
      <tr>
        <td id="L780" class="blob-num js-line-number" data-line-number="780"></td>
        <td id="LC780" class="blob-code blob-code-inner js-file-line"><span class="pl-k">var</span> affixType<span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">&#39;</span>affix<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span>(affix<span class="pl-k">?</span><span class="pl-s"><span class="pl-pds">&#39;</span>-<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span>affix<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span>)</td>
      </tr>
      <tr>
        <td id="L781" class="blob-num js-line-number" data-line-number="781"></td>
        <td id="LC781" class="blob-code blob-code-inner js-file-line"><span class="pl-k">var</span> e<span class="pl-k">=</span><span class="pl-smi">$</span>.<span class="pl-en">Event</span>(affixType<span class="pl-k">+</span><span class="pl-s"><span class="pl-pds">&#39;</span>.bs.affix<span class="pl-pds">&#39;</span></span>)</td>
      </tr>
      <tr>
        <td id="L782" class="blob-num js-line-number" data-line-number="782"></td>
        <td id="LC782" class="blob-code blob-code-inner js-file-line"><span class="pl-c1">this</span>.<span class="pl-smi">$element</span>.<span class="pl-en">trigger</span>(e)</td>
      </tr>
      <tr>
        <td id="L783" class="blob-num js-line-number" data-line-number="783"></td>
        <td id="LC783" class="blob-code blob-code-inner js-file-line"><span class="pl-k">if</span>(<span class="pl-smi">e</span>.<span class="pl-en">isDefaultPrevented</span>())<span class="pl-k">return</span></td>
      </tr>
      <tr>
        <td id="L784" class="blob-num js-line-number" data-line-number="784"></td>
        <td id="LC784" class="blob-code blob-code-inner js-file-line"><span class="pl-c1">this</span>.<span class="pl-smi">affixed</span><span class="pl-k">=</span>affix</td>
      </tr>
      <tr>
        <td id="L785" class="blob-num js-line-number" data-line-number="785"></td>
        <td id="LC785" class="blob-code blob-code-inner js-file-line"><span class="pl-c1">this</span>.<span class="pl-smi">unpin</span><span class="pl-k">=</span>affix<span class="pl-k">==</span><span class="pl-s"><span class="pl-pds">&#39;</span>bottom<span class="pl-pds">&#39;</span></span><span class="pl-k">?</span><span class="pl-c1">this</span>.<span class="pl-en">getPinnedOffset</span>()<span class="pl-k">:</span><span class="pl-c1">null</span></td>
      </tr>
      <tr>
        <td id="L786" class="blob-num js-line-number" data-line-number="786"></td>
        <td id="LC786" class="blob-code blob-code-inner js-file-line"><span class="pl-c1">this</span>.<span class="pl-smi">$element</span>.<span class="pl-en">removeClass</span>(<span class="pl-smi">Affix</span>.<span class="pl-c1">RESET</span>).<span class="pl-en">addClass</span>(affixType).<span class="pl-en">trigger</span>(<span class="pl-smi">affixType</span>.<span class="pl-c1">replace</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>affix<span class="pl-pds">&#39;</span></span>,<span class="pl-s"><span class="pl-pds">&#39;</span>affixed<span class="pl-pds">&#39;</span></span>)<span class="pl-k">+</span><span class="pl-s"><span class="pl-pds">&#39;</span>.bs.affix<span class="pl-pds">&#39;</span></span>)}</td>
      </tr>
      <tr>
        <td id="L787" class="blob-num js-line-number" data-line-number="787"></td>
        <td id="LC787" class="blob-code blob-code-inner js-file-line"><span class="pl-k">if</span>(affix<span class="pl-k">==</span><span class="pl-s"><span class="pl-pds">&#39;</span>bottom<span class="pl-pds">&#39;</span></span>){<span class="pl-c1">this</span>.<span class="pl-smi">$element</span>.<span class="pl-en">offset</span>({top<span class="pl-k">:</span>scrollHeight<span class="pl-k">-</span>height<span class="pl-k">-</span>offsetBottom})}}</td>
      </tr>
      <tr>
        <td id="L788" class="blob-num js-line-number" data-line-number="788"></td>
        <td id="LC788" class="blob-code blob-code-inner js-file-line"><span class="pl-k">function</span> <span class="pl-en">Plugin</span>(<span class="pl-smi">option</span>){<span class="pl-k">return</span> <span class="pl-c1">this</span>.<span class="pl-en">each</span>(<span class="pl-k">function</span>(){<span class="pl-k">var</span> $this<span class="pl-k">=</span><span class="pl-en">$</span>(<span class="pl-c1">this</span>)</td>
      </tr>
      <tr>
        <td id="L789" class="blob-num js-line-number" data-line-number="789"></td>
        <td id="LC789" class="blob-code blob-code-inner js-file-line"><span class="pl-k">var</span> data<span class="pl-k">=</span><span class="pl-smi">$this</span>.<span class="pl-c1">data</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>bs.affix<span class="pl-pds">&#39;</span></span>)</td>
      </tr>
      <tr>
        <td id="L790" class="blob-num js-line-number" data-line-number="790"></td>
        <td id="LC790" class="blob-code blob-code-inner js-file-line"><span class="pl-k">var</span> options<span class="pl-k">=</span><span class="pl-k">typeof</span> option<span class="pl-k">==</span><span class="pl-s"><span class="pl-pds">&#39;</span>object<span class="pl-pds">&#39;</span></span><span class="pl-k">&amp;&amp;</span>option</td>
      </tr>
      <tr>
        <td id="L791" class="blob-num js-line-number" data-line-number="791"></td>
        <td id="LC791" class="blob-code blob-code-inner js-file-line"><span class="pl-k">if</span>(<span class="pl-k">!</span>data)<span class="pl-smi">$this</span>.<span class="pl-c1">data</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>bs.affix<span class="pl-pds">&#39;</span></span>,(data<span class="pl-k">=</span><span class="pl-k">new</span> <span class="pl-en">Affix</span>(<span class="pl-c1">this</span>,options)))</td>
      </tr>
      <tr>
        <td id="L792" class="blob-num js-line-number" data-line-number="792"></td>
        <td id="LC792" class="blob-code blob-code-inner js-file-line"><span class="pl-k">if</span>(<span class="pl-k">typeof</span> option<span class="pl-k">==</span><span class="pl-s"><span class="pl-pds">&#39;</span>string<span class="pl-pds">&#39;</span></span>)data[option]()})}</td>
      </tr>
      <tr>
        <td id="L793" class="blob-num js-line-number" data-line-number="793"></td>
        <td id="LC793" class="blob-code blob-code-inner js-file-line"><span class="pl-k">var</span> old<span class="pl-k">=</span><span class="pl-smi">$</span>.<span class="pl-smi">fn</span>.<span class="pl-smi">affix</span></td>
      </tr>
      <tr>
        <td id="L794" class="blob-num js-line-number" data-line-number="794"></td>
        <td id="LC794" class="blob-code blob-code-inner js-file-line"><span class="pl-smi">$</span>.<span class="pl-smi">fn</span>.<span class="pl-smi">affix</span><span class="pl-k">=</span><span class="pl-c1">Plugin</span></td>
      </tr>
      <tr>
        <td id="L795" class="blob-num js-line-number" data-line-number="795"></td>
        <td id="LC795" class="blob-code blob-code-inner js-file-line"><span class="pl-smi">$</span>.<span class="pl-smi">fn</span>.<span class="pl-smi">affix</span>.<span class="pl-smi">Constructor</span><span class="pl-k">=</span>Affix</td>
      </tr>
      <tr>
        <td id="L796" class="blob-num js-line-number" data-line-number="796"></td>
        <td id="LC796" class="blob-code blob-code-inner js-file-line"><span class="pl-smi">$</span>.<span class="pl-smi">fn</span>.<span class="pl-smi">affix</span>.<span class="pl-en">noConflict</span><span class="pl-k">=</span><span class="pl-k">function</span>(){<span class="pl-smi">$</span>.<span class="pl-smi">fn</span>.<span class="pl-smi">affix</span><span class="pl-k">=</span>old</td>
      </tr>
      <tr>
        <td id="L797" class="blob-num js-line-number" data-line-number="797"></td>
        <td id="LC797" class="blob-code blob-code-inner js-file-line"><span class="pl-k">return</span> <span class="pl-c1">this</span>}</td>
      </tr>
      <tr>
        <td id="L798" class="blob-num js-line-number" data-line-number="798"></td>
        <td id="LC798" class="blob-code blob-code-inner js-file-line"><span class="pl-en">$</span>(<span class="pl-c1">window</span>).<span class="pl-en">on</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>load<span class="pl-pds">&#39;</span></span>,<span class="pl-k">function</span>(){<span class="pl-en">$</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>[data-spy=&quot;affix&quot;]<span class="pl-pds">&#39;</span></span>).<span class="pl-en">each</span>(<span class="pl-k">function</span>(){<span class="pl-k">var</span> $spy<span class="pl-k">=</span><span class="pl-en">$</span>(<span class="pl-c1">this</span>)</td>
      </tr>
      <tr>
        <td id="L799" class="blob-num js-line-number" data-line-number="799"></td>
        <td id="LC799" class="blob-code blob-code-inner js-file-line"><span class="pl-k">var</span> data<span class="pl-k">=</span><span class="pl-smi">$spy</span>.<span class="pl-c1">data</span>()</td>
      </tr>
      <tr>
        <td id="L800" class="blob-num js-line-number" data-line-number="800"></td>
        <td id="LC800" class="blob-code blob-code-inner js-file-line"><span class="pl-smi">data</span>.<span class="pl-smi">offset</span><span class="pl-k">=</span><span class="pl-smi">data</span>.<span class="pl-smi">offset</span><span class="pl-k">||</span>{}</td>
      </tr>
      <tr>
        <td id="L801" class="blob-num js-line-number" data-line-number="801"></td>
        <td id="LC801" class="blob-code blob-code-inner js-file-line"><span class="pl-k">if</span>(<span class="pl-smi">data</span>.<span class="pl-smi">offsetBottom</span><span class="pl-k">!=</span><span class="pl-c1">null</span>)<span class="pl-smi">data</span>.<span class="pl-smi">offset</span>.<span class="pl-c1">bottom</span><span class="pl-k">=</span><span class="pl-smi">data</span>.<span class="pl-smi">offsetBottom</span></td>
      </tr>
      <tr>
        <td id="L802" class="blob-num js-line-number" data-line-number="802"></td>
        <td id="LC802" class="blob-code blob-code-inner js-file-line"><span class="pl-k">if</span>(<span class="pl-smi">data</span>.<span class="pl-smi">offsetTop</span><span class="pl-k">!=</span><span class="pl-c1">null</span>)<span class="pl-smi">data</span>.<span class="pl-smi">offset</span>.<span class="pl-c1">top</span><span class="pl-k">=</span><span class="pl-smi">data</span>.<span class="pl-smi">offsetTop</span></td>
      </tr>
      <tr>
        <td id="L803" class="blob-num js-line-number" data-line-number="803"></td>
        <td id="LC803" class="blob-code blob-code-inner js-file-line"><span class="pl-c1">Plugin</span>.<span class="pl-c1">call</span>($spy,data)})})}(jQuery);</td>
      </tr>
</table>

  </div>

</div>

<button type="button" data-facebox="#jump-to-line" data-facebox-class="linejump" data-hotkey="l" class="d-none">Jump to Line</button>
<div id="jump-to-line" style="display:none">
  <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="" class="js-jump-to-line-form" method="get"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /></div>
    <input class="form-control linejump-input js-jump-to-line-field" type="text" placeholder="Jump to line&hellip;" aria-label="Jump to line" autofocus>
    <button type="submit" class="btn">Go</button>
</form></div>


  </div>
  <div class="modal-backdrop js-touch-events"></div>
</div>

    </div>
  </div>

  </div>

      <div class="container site-footer-container">
  <div class="site-footer" role="contentinfo">
    <ul class="site-footer-links float-right">
        <li><a href="https://github.com/contact" data-ga-click="Footer, go to contact, text:contact">Contact GitHub</a></li>
      <li><a href="https://developer.github.com" data-ga-click="Footer, go to api, text:api">API</a></li>
      <li><a href="https://training.github.com" data-ga-click="Footer, go to training, text:training">Training</a></li>
      <li><a href="https://shop.github.com" data-ga-click="Footer, go to shop, text:shop">Shop</a></li>
        <li><a href="https://github.com/blog" data-ga-click="Footer, go to blog, text:blog">Blog</a></li>
        <li><a href="https://github.com/about" data-ga-click="Footer, go to about, text:about">About</a></li>

    </ul>

    <a href="https://github.com" aria-label="Homepage" class="site-footer-mark" title="GitHub">
      <svg aria-hidden="true" class="octicon octicon-mark-github" height="24" version="1.1" viewBox="0 0 16 16" width="24"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"/></svg>
</a>
    <ul class="site-footer-links">
      <li>&copy; 2017 <span title="0.25991s from github-fe146-cp1-prd.iad.github.net">GitHub</span>, Inc.</li>
        <li><a href="https://github.com/site/terms" data-ga-click="Footer, go to terms, text:terms">Terms</a></li>
        <li><a href="https://github.com/site/privacy" data-ga-click="Footer, go to privacy, text:privacy">Privacy</a></li>
        <li><a href="https://github.com/security" data-ga-click="Footer, go to security, text:security">Security</a></li>
        <li><a href="https://status.github.com/" data-ga-click="Footer, go to status, text:status">Status</a></li>
        <li><a href="https://help.github.com" data-ga-click="Footer, go to help, text:help">Help</a></li>
    </ul>
  </div>
</div>



  

  <div id="ajax-error-message" class="ajax-error-message flash flash-error">
    <svg aria-hidden="true" class="octicon octicon-alert" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M8.865 1.52c-.18-.31-.51-.5-.87-.5s-.69.19-.87.5L.275 13.5c-.18.31-.18.69 0 1 .19.31.52.5.87.5h13.7c.36 0 .69-.19.86-.5.17-.31.18-.69.01-1L8.865 1.52zM8.995 13h-2v-2h2v2zm0-3h-2V6h2v4z"/></svg>
    <button type="button" class="flash-close js-flash-close js-ajax-error-dismiss" aria-label="Dismiss error">
      <svg aria-hidden="true" class="octicon octicon-x" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48z"/></svg>
    </button>
    You can't perform that action at this time.
  </div>


    <script crossorigin="anonymous" src="https://assets-cdn.github.com/assets/compat-8a4318ffea09a0cdb8214b76cf2926b9f6a0ced318a317bed419db19214c690d.js"></script>
    <script crossorigin="anonymous" src="https://assets-cdn.github.com/assets/frameworks-e54e006049610cc297fe133f824c8784c712e170cb8c0c802aed2a767b2857e6.js"></script>
    <script async="async" crossorigin="anonymous" src="https://assets-cdn.github.com/assets/github-b7cffd9d7510124d7e35eef16b8c781e5f713a334426f99f287a59d1d7665d12.js"></script>
    
    
    
    
  <div class="js-stale-session-flash stale-session-flash flash flash-warn flash-banner d-none">
    <svg aria-hidden="true" class="octicon octicon-alert" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M8.865 1.52c-.18-.31-.51-.5-.87-.5s-.69.19-.87.5L.275 13.5c-.18.31-.18.69 0 1 .19.31.52.5.87.5h13.7c.36 0 .69-.19.86-.5.17-.31.18-.69.01-1L8.865 1.52zM8.995 13h-2v-2h2v2zm0-3h-2V6h2v4z"/></svg>
    <span class="signed-in-tab-flash">You signed in with another tab or window. <a href="">Reload</a> to refresh your session.</span>
    <span class="signed-out-tab-flash">You signed out in another tab or window. <a href="">Reload</a> to refresh your session.</span>
  </div>
  <div class="facebox" id="facebox" style="display:none;">
  <div class="facebox-popup">
    <div class="facebox-content" role="dialog" aria-labelledby="facebox-header" aria-describedby="facebox-description">
    </div>
    <button type="button" class="facebox-close js-facebox-close" aria-label="Close modal">
      <svg aria-hidden="true" class="octicon octicon-x" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48z"/></svg>
    </button>
  </div>
</div>


  </body>
</html>

