---
layout: post
title: Run a Game Boy on Nitrous.io Free Tier
subtitle: using php and free memory to catch 'em all
fa-icon: gamepad
date:   2016-03-03 12:00:00
permalink: php-gameboy-emulator-nitrous
category: web development
desc: PHP is a great way to code, but it can also be used to run a free Game Boy emulator on the Nitrous.io platform
tags:
- nitrous.io
- PHP
- linux
---

[Nitrous.io](http://nitrous.io) has always been one of our favorite cloud development options. It offers a robust feature set, a lot of easy-to-manage tools, and a gorgeous interface to boot. 

Recently the company announced a return to its [much-loved free tier](https://www.nitrous.io/pricing/). All in all, it's about the best way possible for a newbie to play with some serious stack architecture. All completely for free, of course. 

So, let's make the most of that free space and throw a [Game Boy](https://www.youtube.com/watch?v=8TI64McyYF4) emulator into the console! After all, what's all that RAM for, other than helping us catch Pokémon? 

![Amazing GIF of a Game Boy running inside the PHP console](/images/gifs/game-boy.gif)

*image courtesy of [Gabriel Couto](https://twitter.com/gabrielrcouto)*

Assuming you've signed-up for Nitrous.io and are staring at the dashboard, here's how to get rolling:  

1. Make a box: not a difficult process, just add a new one, and then select the LAMP PHP stack. Or LEMP, really. We won't be using any of the back-end stuff, so feel free to go wherever you prefer. 
2. Wait for the whole thing to boot up. While you're doing that, check out the Git repo for the excellent [PHP Terminal Gameboy Emulator](https://github.com/gabrielrcouto/php-terminal-gameboy-emulator). It's the tool from which all the magic springs. It is truly impressive stuff, and it pushes the PHP console to new heights. 
3. We've got to get a little creative, since Nitrous.io doesn't like us using anything more than its default PHP 5.5.9. With that in mind, use the fork I've created of the original repo. Let's clone the custom repo I've made to the Nitrous code folder by adding:

		git clone https://github.com/lukechanning/php-terminal-gameboy-emulator

5. Time to move to the new directory and finish our setup using Composer

		cd php-terminal-gameboy-emulator && composer install -O

6. And that's it! It should now be setup and ready, we just need to fire it up. You'll need some ROMs for that, the legality of which is questionable unless you own the originals. If you want some legal homebrew options, [check this site out](http://pdroms.de/). 
7. Once you've got a ROM, upload it to your working directory using the three dots beside the file tree. If you can, make sure to place it inside our new **php-terminal-gameboy-emulator** directory.
8. Now it's time to have some fun! Fire up any ROM inside the directory by typing —

		bin/php-gameboy your_rom.gb

Fun stuff, right? You've now got a fully functional Gameboy emulator running in a terminal via some free cloud architecture. Sure, it's not adding anything new to your workflow — but it's fun to see just how much PHP can do!
