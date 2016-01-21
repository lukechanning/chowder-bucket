---
layout: post
title: Setup InfiniteWP using ServerPilot
subtitle: 15 minutes can save you hours in maintenance
fa-icon: plane
date:   2016-01-02 12:00:00
permalink: setup-infinitewp-serverpilot/
category: web development
desc: Using InfiniteWP with ServerPilot is the best way to save time while updating multiple WordPress sites
tags:
- wordpress
- serverpilot
- php
- hosting
---

I absolutely love [ServerPilot](http://serverpilot.com). It's a phenomenal service, and it takes the drudgery out of spinning up a baller Linux box. Of course installing the LAMP stack manually at some point is a great learning experience, but overall, the man hours saved by using something like ServerPilot far outweigh the negatives.

We'll talk more about that in the future, but today's project is all about extending the simplicity of what ServerPilot does _really_ well: Setting up, running and managing a metric-fish-load of [WordPress sites](https://serverpilot.io/community/articles/install-wordpress-on-ubuntu.html).

> Specifically, we want to manage _lots_ of WordPress installations at once. To do that, we're going to use another excellent tool called [InfiniteWP](https://infinitewp.com/) alongside ServerPilot.

I'll let you look over the InfiniteWP site yourself to get a feel for what it's packing. Essentially, it gives us a handy way to manage many multiple WordPress installations without the need for a multisite. Considering I run a hosting company (that's not _yet_ public) with 50+ unique setups, this is pretty handy.

So let's get cracking! No time like the present, [after all. ](https://49.media.tumblr.com/tumblr_lt7137rXvc1r17215o1_500.gif)

***

### Installing InfiniteWP with ServerPilot

Thankfully, this isn't as hard as it sounds. In fact, ServerPilot makes most of it fairly easy on us. To get rolling, start by: 

1. **Creating a New App** within your ServerPilot dashboard. You can put this app on any server you like, though I'd suggest keeping it away from a heavy-loaded production grid. It's not likely IWP will get hacked, but you'd rather not have all your eggs in one basket.
2. **Pick a Domain** for your app, and make sure it's where you want IWP to go. The [installation docs](https://infinitewp.com/docs/how-to-install-the-infinitewp-admin-panel/) suggest using `http://yourdomain.com/iwp`, but that's pretty arbitrary. As long as the files end up in your root, you can also do something like `http://iwp.yourdomain.com` and it'll work out fine. Just make sure the DNS for your domain is correct, and you'll be fine.
3. **Get Happy with the FTP** now that your app is created. Just open the zip [provided by IWP](https://infinitewp.com/installing-options/) and plop the whole contents into your app's public folder. Bam! 
4. **Setup a Database for IWP** if you haven't already done so. You can do this just like you would for any other app. Go to the ServerPilot dashboard, click on the app, select *Databases* and add one for our IWP. Make sure to give it a strong password, just in case. Be sure to save the DB name, as well as the MySQL username and password. We'll need them in a moment.
5. **Visit the Domain You Setup** and follow the rest of the installation process as directed. It should be fairly straight-forward, and the default 3306 port should be fine. When prompted, enter the DB information from step 4. Also be sure to pick a username and password for IWP that is _unique_ -- if you're using one password and username combo for everything, I _will_ find you. 
6. **Login Using your New Credentials** and bask in the golden glow that is InfiniteWP! Beautiful, isn't it? Plus, it's free, secured by you, and ready for input. Doesn't get a whole lot better than that! 

At this point, you can use the [standard documentation](https://infinitewp.com/docs/adding-your-wordpress-sites-to-the-infinitewp-admin-panel/) to get your WordPress sites added to IWP. However, we're going to do a few more things, just to make sure it all goes well. 

***

### Bonus Round Stuff

#### Fix the File Permissions

InfiniteWP already does a ton for us, as far as making itself secure. However, we don't want to take any chances, and it's likely our file permissions have gotten a bit off during the transfer process. So, let's fix that really quick: 

1. SSH into your ServerPilot app using whatever method you like best. Once there, we're going to run a few simple terminal commands to ensure our files and folders have the write `CHMOD` settings. 
2. Start by setting file permissions to 644 for all the files recursively. From your root directory, run `find . -type f -print0 | xargs -0 chmod 0644 # for files`. This sets it so all our IWP files are read / write for permissioned users, while everyone else is stuck at read level. 
3. Lastly, let's finish up my fixing the folders. Again, from the root directory run `find * -type d -print0 | xargs -0 chmod 0755 # for directories` to set all folders to read, write and execute, while globally we've only got read and execute.

#### Setup the CRON Job

At this point, InfiniteWP will probably yell at you to setup the CRON job. Look for a red notification window in the top right. Hopefully, it'll also contain the relevant PHP code to complete this part of setup. If it's all working smoothly, you'll see something like this:

```
php -q -d safe_mode=Off /srv/users/serverpilot/apps/infinitewp/public/cron.php >/dev/null 2>&1
```


Go ahead and copy that code, then SSH to your server using the app's author user. Paste it in, hit enter, and you're done! 

What does this do? Essentially, it allows InfiniteWP to fire off email notifications when tasks are completed. It's not necessary, per say, but it's nice to receive warnings and updates now and again. 

***

And that should tidy us up! You've now got a fully-functioning version of InfiniteWP setup, secured and rolling via ServerPilot! You can add as many additional WordPress installations as you want, and all of them can be managed from a single hub.

For me and my hosting company, using InfiniteWP with ServerPilot will save two hours worth of updates every two weeks. That'll keep me from looking like [End-Game Matt Smith Doctor.](https://ladygeekgirl.files.wordpress.com/2013/12/matt_smith_grows_old_before_his_time_in_doctor_who_christmas_special_2013.jpg) 

If you experience similar boosts in productivity, be sure to [let us know on Twitter!](https://twitter.com) If this guide helped you (and more tips / future updates sound good) go ahead and click to follow button, too. 

You can also check out our sweet [WordPress tools](/tag/wordpress/) or support us by [buying some swag](https://www.stickermule.com/en/marketplace/9882-router-chowder-monster). 

