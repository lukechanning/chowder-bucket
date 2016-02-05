---
layout: post
title: Convert a WordPress Database to UTF-8
subtitle: you've been very dirty, you naughty database
fa-icon: database
date:   2016-02-03 12:00:00
permalink: convert-wordpress-database-utf8/
category: web development
desc: If your WordPress database has been corrupted with mixed encodings, here's how to convert the entire database to UTF-8
tags:
- wordpress
- php
- mysql
- databases
---

We've had to convert a ton of corrupted WordPress databases. Because WordPress is an open platform, it doesn't take long before some plugin wanders in, plops a bunch of non-UTF-8 crap into the database, then leaves us screwed. Stuck with a database that can't be imported, and one that can cause problems with site operations. 

So if you need to convert a database -- specifically a WordPress DB, but really any MySQL setup is applicable -- to UTF-8, here's how to get the job done. 

We've tried a lot of methods, and in _our_ experience, these are [the two that work](https://media.giphy.com/media/fVSSn8i8wJquY/giphy.gif):

### Covert Database to UTF-8 Using Search Replace DB

It took us way too long to discover [Search Replace DB](https://interconnectit.com/products/search-and-replace-for-wordpress-databases/). It makes us [very sad](http://www.brenda-drake.com/wp-content/uploads/2014/12/V2.gif) to think of all the wasted hours spent moving WordPress sites the hard way. If you've never heard of the PHP script, let it into your heart today. You can thank us later. 

Essentially, the tool uses your local database connection to perform a variety of tasks. It's intended to be used as a search and replace utility for pruning MySQL entries. But what's this? It has a convert to utf8_unicode option!

Thank God.

We're going to use that bad boy, and though it's pretty self-explanatory, here's the core message: 

1. Download [the utility](Serialized Search & Replace) and drop the contents of the archive into your root directory. Name the directory something snappy like "db_tool".
2. Head to the install location, eg. http://yourdomain.com/db_tool
3. Follow the on-screen tips, making sure to correctly enter your database credentials if the script doesn't get them automatically
4. Once it's all loaded up, just hit the button
5. It will do its thing, and you're done!

Sadly, this method isn't full-proof. Converting your database's encoding is tricky, and you may need to go deeper down the rabbit hole. So if the EasyWayOut™ doesn't work, try this method:

### Covert Database to UTF-8 Using the Command Line

We're going to have to use the command line from here. So put on those Sys Admin boots, and let's get rocking!

 1. SSH to your server with a user capable of accessing the database in question. 
 2. Once you're there, enter the following line of code, replacing the information with your particulars. What we're doing here is dumping the database to the server, making sure to flag it with the encoding we want while skipping the current set statements entirely
 
        mysqldump -u username -p --default-character-set=latin1 --skip-set-charset dbname > dbname_dump.sql

 3. Now that we're done with that, make a note of where the dump went to. It should be your current working directory, but if not, move to that location.

        # only if it's needed
        cd location_of_database_dump 
        # this is definitely needed, so definitely do it
        sed -i -e 's/latin1/utf8/g' dump.sql > dump_utf.sql

 4. This blasts through the database, replacing the necessary encodings with UTF-8. We're almost done! Now we just need to pull the converted database back into our original MySQL server. To do that, let's drop the original database. Obviously, please have backups ready. 

        mysql -u username -p --execute="DROP DATABASE dbname; CREATE DATABASE dbname CHARACTER SET utf8 COLLATE utf8_general_ci;"

 5. Now we we've got a blank database using the encodings we want. To finish the job, let's pull in the converted database and call it a day. Become your own Server Batman by entering: 

        mysql -u username -p --default-character-set=utf8 dbname < dump_utf.sql