---
title: "Creating a Personal Web Server/Website (3/3)"
date: "2020-09-13"
template: "post"
draft: false
slug: "creating-personal-webserver-and-website-3"
category: "Guide"
tags:
  - "Guide"
  - "Website"
  - "Web server"
  - "Nginx"
  - "DigitalOcean"
  - "NameCheap"
description: "How to create and host a personal website like mine! Part 3/3"
socialImage: ""
---

![website-design-img](/media/2020-06-14-header.png)

To recap, you should have your domain, VPS, and Nginx server set up. Last but not least, we can now setup a basic website in the language of your choice. The instructions here varies depending on what kind of web framework/tooling you choose but I will go through some basic examples with the popular web frameworks nowadays. Bear with me as my knowledge of web development isn't the greatest nowadays.

## Basic Webpage

If you initially want to see how this works, you can just create a blank HTML page called `index.html`.


```
<!DOCTYPE html>
<html>
    <head>
        <title>Example title</title>
    </head>
    <body>
        <p>Example paragraph</p>
    </body>
</html>
```

The file path should match what you have set in the Nginx config. In my case it would be, `/home/raymond/www/main/public/index.html`

Now, if you head to your webpage again, it should show no longer return a 404 and your new web page should be shown!

## Current Blog

If you want something similar to this blog, I would recommend the Gatsby theme that I am currently using, [Lumen](https://github.com/alxshelepenok/gatsby-starter-lumen).

It is well documented and makes it effortless to create new blog posts.

To start, you can clone the Lumen repo to get the basic skeleton framework. Once that finishes, all you need to do is `num run build` to generate the final assets and an `index.html` should be generated for your web server.

Note: the files might be generated in a `build/` folder. You can just point your Nginx root path to the `build/` folder or update the build command to generate it in the root path instead.

## Create React App

I also really enjoy the [Create React App](https://github.com/facebook/create-react-app) provided by Facebook that makes it really easy to bootstrap a React app.

The instructions are the same as for the Gatsby framework, clone and `npm run build`.

## Angular

Another popular framework you can choose is Angular. I prefer the [Angular CLI](https://cli.angular.io/) to easily bootstrap an Angular project, similar to the Create React App above.

```
npm install -g @angular/cli
ng new personal-website
cd personal-website
ng serve # to test locally
ng build personal-website # generates final webpage
```

Note: the files are generated in an output directory `dist/` rather than `build/`. Just remember to update the root path of the index depending on which framework.

## Conclusion

That's a wrap. If you made it this far, I hope you enjoy your personal website on your self-hosted web server and learned a lot in the process! It's a lot more impressive and fun in my opinion doing all the ops work necessary rather than relying on a PaaS like Heroku or GitHub Pages.

This was also my first tutorial so please leave me any feedback or comments as I would greatly appreciate it. It will help me a lot for my future guides.
