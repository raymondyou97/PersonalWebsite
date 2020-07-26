---
title: "Creating a Personal Web Server/Website (1/3)"
date: "2020-06-14"
template: "post"
draft: false
slug: "creating-personal-webserver-and-website-1"
category: "Guide"
tags:
  - "Guide"
  - "Website"
  - "Web server"
  - "Nginx"
  - "DigitalOcean"
  - "NameCheap"
description: "How to create and host a personal website like mine! Part 1/3"
socialImage: ""
---

![website-design-img](/media/2020-06-14-header.png)

Writing a guide on something has always been something I wanted to do as we should all be sharing knowledge with one another and what better way to ensure your knowledge on a topic than writing a guide on it! 

So for my first guide, I will teach you how I deploy and provision my own personal web server so that you can host a personal website like this current website.

Rather than having your website automatically managed and deployed for you through a popular PaaS like [Heroku](https://www.heroku.com/) or [Firebase](https://firebase.google.com/) or even [GitHub Pages](https://pages.github.com/), I think everyone should try to provision their own web server as it forces you to learn invaluable Linux server administration skills.

This guide will be 3 parts:
   1. Purchasing a VPS and domain name
   2. Setting up your VPS with Nginx and other housekeeping tasks
   3. Building and deploying a quick website

First things first, we need to get our VPS and domain stuff set up. The VPS will cost roughly $5 a month and the domain name will range anywhere from $10 - $50 a year depending on what domain you choose.

## Getting your VPS

A VPS is essentially a private, non-physical, virtualized computer that is stored and hosted in a server farm in some third-party location that you can use to provide services of any kind.

Some of the most popular VPS providers are DigitalOcean, Vultr, Linode but we will use DigitalOcaen because they are reliable, cheap, and a well-respected and known American company.

First, you are going to want to head over to [DigitalOcean](https://www.digitalocean.com/) to create a new account. I would also setup 2FA afterwards as you are going to want your server to be as secure as possible.

![digital-ocean-homepage](/media/2020-06-14-server-guide-0.png)

Next, you need to create a project for your droplet to live in. Droplet's are the coined terminology for VPS that DigitalOcean uses.

![setup-pic-1](/media/2020-06-14-server-guide-1.png)

Afterwards, create a new droplet with the top right button. Now, we can proceed with configuring our droplet. Most of the default settings are good enough so we are going to run with those.

 - We are going to use `Ubuntu 18.04.3 (LTS) x64` as our distribution as it is a widely supported and popular Linux distro
 - Standard plan is good enough here
 - Select the cheapest plan for now ($5/mo) as we can always scale in the future

![setup-pic-2](/media/2020-06-14-server-guide-2.png)

- Choose the closest datacenter region to you

![setup-pic-3](/media/2020-06-14-server-guide-3.png)

- Choose password authentication for now as it is the simplest. Don't forget your root password or else you will have to reset it later which can be annoying. Eventually, you are going to want to cut over to SSH keys as your authentication as it is way more secure
- Leave everything else as is and select the project you created as the selected project

![setup-pic-4](/media/2020-06-14-server-guide-4.png)

That should be it, so complete the setup and purchase of this droplet and you should be good to go. We will come back to the VPS later.

## Getting your domain

We will need to buy a domain name as it's a lot easier for people to visit your website if the url is `mydomain.com` rather than some IP address `123.45.678.9`.

Some popular domain registrars are [Namecheap](https://www.namecheap.com/), [NameSilo](https://www.namesilo.com/), [Google Domains](https://domains.google/), but we are going to use Namecheap for the sake of this tutorial.

Head to [Namecheap](https://www.namecheap.com/) and buy a domain. You can use whatever name you want. I am not going to go too much detail into this as it is pretty straight-forwards.

The top-level domain can be anything. Just pick the cheapest one.

![setup-pic-5](/media/2020-06-14-server-guide-5.png)

## Connecting your VPS and domain

Now, we need to connect our VPS and our domain.

In your Namecheap domain settings,

- Have WhoIsGuard on so that your personal information isn't available for everyone to look up
- Point your domain's nameservers to the nameservers of DigitalOcean
  - ns1.digitalocean.com
  - ns2.digitalocean.com
  - ns3.digitalocean.com

![setup-pic-6](/media/2020-06-14-server-guide-6.png)

- In DigitalOcean, under Networking for your domain on the left side, add your domain name and make sure it points to your correct server

![setup-pic-7](/media/2020-06-14-server-guide-7.png)

- The 3 default DigitalOcean nameservers should automatically populate. You then have to create a new A record that points your domain name to the IPv4 address of your droplet. It should look like below. I have blacked out my IP address for obvious reasons.

![setup-pic-8](/media/2020-06-14-server-guide-8.png)

## Conclusion

Now that we have set up our VPS and our domain and successfully connected them with one another, the next step is configuring your VPS and setting up a web server such as Nginx on it, which you can find in the next part of this tutorial.

Quick thing to note, if you try accessing your domain, you will probably get an error as 

1. Your web server hasn't been set up properly yet
2. [DNS propagation](https://www.siteground.com/kb/what_is_dns_propagation_and_why_it_takes_so_long/) which can take up to 24-48 hours for the ISP nodes across the world to notice your new domain
