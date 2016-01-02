---
layout: post
title: Inline Link or Import for Google Fonts?
subtitle: A Specifically Specific Code Questions Entry
cover: covers/google-cover.jpg
date:   2015-10-09 12:00:00
category: web development
permalink: inline-link-vs-import-google-fonts/
tags:
- fonts
- web development
- google
- css
- html
- best practices
---

Today’s topic is so simple you’ve (likely) never thought about it that hard. If you’re being *Jane “Knows-it-All” Coder*, and you want to properly add Google Fonts to your current project, should you use inline HTML links, or a CSS @import? 

Put on your over-thinking hats, because we’re about to dive into a deep, dark crevasse of knowledge! As it so happens, there is an answer:

**Pretty much always, just use a link in your `<head></head>`.**

## Here’s why an Inline Link is better for Google Fonts:

As explained in detail by [Ilya Grigorik](http://stackoverflow.com/a/12380004), the differences are pretty negligible. Though, if we’re splitting hairs, an HTML link does the job a little better. It will load about as quickly: it can’t compete against an inline CSS compiler, but the difference is a potato, more or less. And you have the added benefit of universal compliance. 

Google itself performs a few user agent sniffs with each load. Because of this, you’ll find your sites perform slightly better with an inline link. Using this method, the Big-G can confirm your personal user agent, and then provide tools specific to that setup. Sure, it’s not as fast as an embedded font-face rule. But at the end of the day, it’s all about including those IE7 folks, right? 

So there you have it! Now remember to go forth and burn away every @import you’ve ever written. I’ll wait. 

For an even more anal (though quite useful) approach to streamlining Google Fonts, [check this guide](http://googlewebfonts.blogspot.com/2010/09/optimizing-use-of-google-font-api.html) from Google itself.