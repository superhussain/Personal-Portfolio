# Personal Portfolio - [www.hussainabbas.com](http://hussainabbas.com)
Here is my personal portfolio. It is based on Jekyll to handle the Content Management System for the blog section. 

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
