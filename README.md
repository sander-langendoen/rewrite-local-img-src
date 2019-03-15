Rewrite local img src
============================

Version
-------
1.0.4 version


General Information
-------------------
This package is meant for everyone who wants to rewrite local img srcs to another (live) domain after the page is loaded.
It only rewrites the hostname. This is very handy when your local environment doesn't have the images locally available, but only on the live server.

Only works in a browser.

See the [NPM package here](https://www.npmjs.com/package/rewrite-local-img-src)


Getting Started
----------------
Step 1:
- add the npm package to your project


Step 2:
- Include a custom.js (or name it whatever you want) file to your local enviroment, and include it in your project. 
Add the following code and make adjustments to the const liveUrl:


```
// place your live domain here
const liveUrl = "testdomain.com";

// replace vhost by anything you would like to check the hostname on
if (window.location.host.indexOf('vhost') > -1) {
    
    function dynamicallyLoadScript(url) {
        var script = document.createElement("script");
        script.src = "/node_modules/rewrite-local-img-src/main.js"; 

        document.head.appendChild(script);
    }

    dynamicallyLoadScript();
} 
```



Changelog
---------

2019-03-15: 1.0.4 version
            - added NPM package url to Readme file

2018-08-04: 1.0.3 version
            - updated Readme.md

2018-08-04: 1.0.2 version
            - updated Readme.md

2018-08-04: 1.0.1 version
			- updates Readme.md

2018-08-04: 1.0.0 version
			- setup NPM package: Readme, package.json and main.js
			- added js function