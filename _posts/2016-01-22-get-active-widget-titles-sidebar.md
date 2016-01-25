---
layout: post
title: Get Active Widget Titles from WordPress Sidebar
subtitle: it's like pulling teeth, only the teeth are strings
fa-icon: cogs
date:   2016-01-22 12:00:00
permalink: get-active-widget-titles-wordpress/
category: web development
desc: Getting active widget titles from your WordPress sidebar is difficult, but not impossible, as explained by Router Chowder
tags:
- wordpress
- php
- css
---

Today, we're not going to be content to sail the known. We're not going to sit by with our prototypical WordPress knowledge. No, we're going to go out. 

#### _Way out._

Today's WordPress: [X-Files Edition](https://49.media.tumblr.com/ac491edf38dba454e7b8f1d382d1902a/tumblr_nsrsowvnYH1r1huy0o1_500.gif) has us tackling the following problem: You have a sidebar with many active widgets. You also really want to display / use the title of each. [But how?](http://www.youtube.com/watch?v=ZXsQAXx_ao0)

It's easy to assume something like

```php
$id['title']
```

would work. We could just iterate through all our widgets, and life will be peachy. 

> And that would be great! Just one problem: It doesn't exist.

Sadly, there's no official way to hack this. Not yet, anyway. WordPress gives us lots of options for managing widget titles and their display. But what if we just *have* to take it all to *[la vida loca](http://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=1&cad=rja&uact=8&ved=0ahUKEwjy1qScwL7KAhXEn4MKHdsPDYkQyCkIHjAA&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3Dp47fEXGabaY&usg=AFQjCNFbvGoBKtwaRFzkpjgbZkOfNouBoQ)* territory? 

We were stuck doing this for a recent theme project, and after much searching, we found an answer. Courtesy of some [excellent code](http://wordpress.stackexchange.com/questions/170619/how-to-retrive-widget-title-data) by [Ahmed Saad](http://wordpress.stackexchange.com/users/37529/ahmed-saad) we have an ugly, albeit functioning prototype: 

```php
<?php

$sidebar_id = 'your-sidebar'; // tell our code what sidebar to look for
$sidebars_widgets = wp_get_sidebars_widgets(); // it'll do its thing and grab the widgets involved
$widget_ids = $sidebars_widgets[$sidebar_id]; // we'll get the id for each sidebar in the collected array

// now we can start the iteration
foreach( $widget_ids as $id ) {
    $widget_var = 'widget_'._get_widget_id_base( $id );
    $id_var = _get_widget_id_base( $id );
    $instance = get_option( $widget_var );
    $id_simplified = str_replace( $id_var.'-', '', $id ); 
    echo '<li><a href="#'.$id.'">'.$instance[$id_simplified]['title'].'</a></li>';
}

?>
```

And that's it! You can now iterate through the active widgets of a sidebar to retrieve their titles. Which might seem a little pointless. And in most cases, there are better ways to go about this. 

Still, we can think of a few practical applications. Such as: 

- Single page designs where widgets define the sections, while some other element needs to list and link them. 
- Auto-generated menus for when the standard admin panel isn't an option. 
- Complicated sidebar setups where some kind of high-level jQuery roughhousing needs the data.

Besides, if you're here you likely needed that code block, anyway. So enjoy, and let us know [via Twitter](https://twitter.com/chowdermonsters) if you come across a better, DRYer way to make it happen!