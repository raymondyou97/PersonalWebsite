---
title: "Creating a Personal Web Server/Website (2/3)"
date: "2020-07-26"
template: "post"
draft: false
slug: "creating-personal-webserver-and-website"
category: "Guide"
tags:
  - "Guide"
  - "Website"
  - "Web server"
  - "Nginx"
  - "DigitalOcean"
  - "NameCheap"
description: "How to create and host a personal website like mine!"
socialImage: ""
---

![website-design-img](/media/2020-06-14-header.png)

## Setting up our server

### SSH

First, we have to ssh into our web server. SSH is when you connect to your server to directly interact with it. You can find your server info for ssh on the administration settings page on DigitalOcean. If you forgot your password, you can always reset it.

```
ssh root@mydomain.com
ssh root@ipv4_address # if you don't have your domain properly configured for your VPS yet
```

### Add User

We are going to want to add a non-root user as it is not a good practice to ssh as a root user and do everything as a root user. We want users to have granular access control in the case a user with root power accidentally fat fingers a command.

Create yourself a new user and put your username where it says `USERNAME_HERE` and follow the steps.

`sudo adduser USERNAME_HERE`

Test that you can ssh into the new user.

`ssh USERNAME_HERE@mydomain.com`

Switch back to the root user to do some more administration stuff.

`sudo su -`

### Open up ports

We need to now open up certain ports in-order for our website to work. [Here](https://en.wikipedia.org/wiki/List_of_TCP_and_UDP_port_numbers) is a table of all the official ports. But we only need a few here.

```
ufw allow 22/tcp      # important, this allows ssh
ufw allow 80/tcp      # allow normal HTTP
ufw allow 443/tcp     # allow HTTPS
ufw enable
```

Also, enable automatic upgrades for security patches.

`dpkg-reconfigure --priority=low unattended-upgrades`

### Install Nginx

Finally, we need to install Nginx so that we can a config for a basic webpage.

`sudo apt install nginx`

Next, switch to your normal user you created above with `su USERNAME_HERE` and make sure your at your home directory.

Create a new folder for your homepage with `mkdir -p www/main`. I like to have the folder structore of `www/main` being my homepage and if I were to add a subpage, I would have a directory for that subpage in `www`.

For example, main is where my homepage lives and test1 would be a subpage.

```
raymond@rebirth:~/www$ pwd
/home/raymond/www      
raymond@rebirth:~/www$ ls
main  test1
```

### Create Nginx config

We are pretty close to the finish line here! Last but not least, we need to create a config file for your page in Nginx so that Nginx knows where your webpage lives and where to direct traffic.

As the root user, go to the following directory: `cd /etc/nginx/sites-available`.

Copy the config template into a new file.

`vim raymondyou.me`

#### Config

Remember to change the `root` and `server_name` to whatever your username and domain name is.

```
server {
    root /home/raymond/www/main/public;

    index index.html;

    server_name raymondyou.me www.raymondyou.me;

    location / {
        try_files $uri $uri/ /index.html;
    }

    listen 80;
    listen [::]:80;
}
```

Enable the new config by symlinking to `sites-enabled`

`ln -s /etc/nginx/sites-available/raymondyou.me /etc/nginx/sites-enabled`

Finally, restart Nginx. 

`service nginx restart`

### Conclusion

If your DNS change from part 1 has already been propagated, you should be able to visit your webpage and it should show the default 404 Nginx error page. If not, you can manually add your host entry into `/etc/hosts` and that should work.

The next and final part of this guide will show you how to get your webpage working with any web library including vanilla Frontend, React, Angular, etc.