---
layout: post
title: Why Can't < i > Just < b > Cool?
subtitle: A Specifically Specific Code Questions Entry
fa-icon: file-code-o
date:   2015-10-25 12:00:00
category: web development
desc: We all need to stop using i and b tags in hour HTML, and here's Router Chowder's reason why
permalink: why-i-and-b-elements-are-bad/
tags:
- html
- semantic code
- css
- best practices
---

Today’s entry in the realm of overly-complicating otherwise pretty simple stuff, let’s look at an area central to all our hearts — styling text via HTML. Specifically, we’ll be looking at when to use

``` html
<b> && <i>
```

as well as when definitively *not* to. 

> Spoiler alert: we’re going to be convincing you not to use them. 

But the differences here are quite important. After all, adding a bold tag to your text will, indeed, make it darker and more mysterious. However, we need to evaluate the fact that HTML should never be used to style anything in the first place. Look at it this way:

HTML is meant to be purely semantic. It does not say how things should be, but rather that they should in the first place. Within this, we’re allowed to give a few directives, but these imply intent, rather than execution. 

That’s a lot of gibberish, so consider this example: Why should we use the 

``` html
<em>
```

tag over the 

``` html
<i>
```

version? The answer is right there in the name. 

The first can be thought of as emphasis. It tells the engine rendering our code that we want that part to be emphasized in some way. In almost all cases, this will be italic. However, there may be special cases where we actually do want the emphasis to look differently. Or, in some cases, we may want that text to be rendered uniquely for platforms serving those with disabilities. Or some other practical application. Either way, the intent is the same across the board. 

In comparison, using the latter just means make it slanty. And with HTML5 and the current standards, it will do that. However, for the reasons mentioned, let’s avoid using it where possible. 

In a more modern context, both Foundation Icons and FontAwesome represent additional reasons to stay away from

``` html
<i>
```

as it's now commonly used to indicate icons. Where that fits into our semantics-only paradigm is a little fuzzy, but it’ll do for now. 

### TL;DR — Elements like

``` html
<b> && <i>
```

are not semantic, and should be avoided in favor of more universal concepts like

``` html
<strong> && <em>
```
