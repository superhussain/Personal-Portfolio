---
layout: post
title:  "Website Overview"
description: "Overview of my Portfolio Site with Instructions"
author: "Hussain"
comments: true
date:   2015-08-19 08:37:00
cover: "site-overview.jpg"
---
In this post, I will run you through my personal portfolio from the inside and out. I will discuss the technologies I used, how it is set up, and how you can download it for yourself to play around with. Everything discussed below is available [here](https://github.com/superhussain/Personal-Portfolio/) on Github for you to play around with and use as you please. This will probably be a pretty long post so grab a snack and your favorite drink and let's begin!


----------

### The Tools ###
![Before and After](http://hussainabbas.com/img/post/website-overview/before-after.jpg)

I began this whole project with a desired layout in mind. The layout is very similar to the old design of my portfolio with a number of changes. Firstly, I didn't want to rely on UI libraries like bootstrap and instead do all of the CSS and JavaScript myself. This was for a couple of reasons. 1. I wanted the site to be as bare bones as possible and 2. I wanted to develop my own skills and test myself. The second main change was adding this blog to the website. This was something I was thinking about for a while and finally decided to get around to. I could have gone many routes for this, but chose to go as barebones as possible and have a static blog without needing a database. I came across a Ruby gem called [Jekyll](http://jekyllrb.com) that's purpose is to be a...

> Simple, blog-aware static site generator

I think Jekyll does just that and does it well. This became my first major tool in this project.

My next tool was built right into Jekyll and it is the CSS preprocessor known as [SASS](http://sass-lang.com/). What is SASS? SASS stands for "Syntactically Awesome Style Sheets". It is my CSS preprocessor of choice because of its simple, easy to read syntax and nesting. I used the .sass variant over the .scss because you don't need to include the semicolons or curly brackets. [Here](https://www.youtube.com/watch?v=-Z3qznaE9vc) is a great video by the YouTube channel [DevTips for Designers](https://www.youtube.com/user/DevTipsForDesigners) about the topic.

Of course every time I use SASS, I include [Bourbon](http://bourbon.io) which is a SASS mixin library to make my job much easier! And with any web project, I have to use my favorite JavaScript library, [jQuery](https://jquery.com/)!

If you didn't catch them all, here is the toolset we used for this project:

 - [Jekyll](http://jekyllrb.com)
 - [SASS](http://sass-lang.com/)
 - [Bourbon](http://bourbon.io)
 - [jQuery](https://jquery.com/)


----------

### Structure and Overview ###
![Before and After](http://hussainabbas.com/img/post/website-overview/folder-structure.jpg)

If you take a look at the [Github repository](https://github.com/superhussain/Personal-Portfolio/) for this project, you will see a number of folders that may seem a little confusing at first, but it is very simple once you know your way around the structure.

Jekyll is very powerful in that it structures your static content very intelligently. For example, I set it up so that my `_sass` folder with all of its files compiles into one single `main.css` file. The file `css/main.scss` handles this with import statements at the bottom and Jekyll takes that and spits it into one file. This is very efficient because instead of sending multiple requests to the server for files, it only sends one request and gets back one large css file.

For more information on how to use and structure Jekyll, check out their [website](http://jekyllrb.com/). They have a very thorough documentation on how you can set up your own statically generated blog-aware website.

I could talk on and on about the way I structured and built this site, but I think that would become too long and would bore you guys. I'm actually amazed you came this far! If you're interested to read about the full overview and process of building this kind of site, let me know in the comments below and maybe we can make it happen!

Now with the usage and installation guide!

----------

### Usage and Installation ###

Before we begin, make sure you have Ruby installed on your system. Jekyll is a Ruby gem and requires Ruby to compile everything. If you don't have Ruby installed, go [here](https://www.ruby-lang.org/en/documentation/installation) and read the instructions to install Ruby on your computer.

**Note: If you're on a Mac, chances are you already have Ruby installed!*

**Note #2: If you're on a Windows, use [Ruby Installer](http://rubyinstaller.org/) to make your life a lot easier!*

To check if you have ruby installed, open up your command prompt or terminal. I'm on Windows so I would do `Win+R` and type `cmd` then hit `enter`. Type this into your command line:

    ruby -v

If you have Ruby installed, you should get a prompt saying Ruby's current version.

Now that we have Ruby installed, let's install Jekyll! To do that, open up the command line and type:

    gem install jekyll

See how easy that was? Let's keep going! If you want to create a blank Jekyll project, move / `cd` to where you want to store the project and type:

    jekyll new blog

This will create a new folder called `blog` with a blank jekyll template ready to go! If you want to see how that looks like on the browser, type this in your open command line:

    cd blog
    jekyll serve

Now simply go to localhost:4000 in your browser and marvel at your creation! When you're done, hit `ctrl+c` to exit out of Jekyll.

Want to try out my site? Get back on your wondrous command line and `cd` into the directory you want to insert the site into.

    git clone https://github.com/superhussain/Personal-Portfolio.git

Now `cd` into the newly created directory and serve that baby on your browser!

    cd Personal-Portfolio
    jekyll serve

Now you can play around with this site as much as you like!

Learn from it, add to it, and code on!

If you have any questions, comments, or concerns, please leave them in the comments below!

Catch you later,

Hussain
