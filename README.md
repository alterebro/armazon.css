# armazon.css : [http://git.io/armazon](http://git.io/armazon)

Lightweight and minimalistic CSS3 Boilerplate Micro Framework built on top of LESS that provides an adaptive customizable grid system, styles for the standard & basic HTML elements, and some basic CSS classes which can be used as a starting point to help you speed up your responsive web app development.

## Quick Start

**armazon.css** is a lightweight and supersimple CSS3 Boilerplate built with LESS that will make a lot easier to start your Web application. 

It provides a proper cross-browser consistency on all the common HTML elements display, overrides the default browsers ugly looking styling and with the adaptive grid system classes given, armazon.css is the perfect starting point tool to create and develop your responsive web app design. 

In order to have armazon.css up and running on your site, just follow these simple steps:

1. **Include the armazon file onto your web document** : 

	- By using a copy of armazon.css, you can download the file from the armazon.css project main repository : **[armazon.min.css](https://raw.githubusercontent.com/alterebro/armazon.css/master/armazon/armazon.min.css)**
	- Or using the hosted file using the CDN kindly provided by rawgit.com : https://cdn.rawgit.com/alterebro/armazon.css/v0.2.0/armazon/armazon.min.css

	```html
	<!-- Using a downloaded copy: -->
	<link rel="stylesheet" type="text/css" href="path/to/your/armazon.min.css" />
		
	<!-- Using CDN's hosted file: -->
	<link rel="stylesheet" type="text/css" href="https://cdn.rawgit.com/alterebro/armazon.css/v0.2.0/armazon/armazon.min.css" />
	```

2. **Set the viewport meta tag inside the head of your document** : 
	
	```html
	<meta name="viewport" content="width=device-width, initial-scale=1" />
	```
	
3. That's all. Now, you can start your development, here's a simple **[HTML template](https://raw.githubusercontent.com/alterebro/armazon.css/master/www/template.html)** to help you get started.


## Variable Set Up

You can assign different values to the following variables that reside on the `armazon.less` file :

```less
/* --------------------------------------------
// Variables @less
// ----------------------------------------- */
@armazon-mobile-breakpoint  : 580; /* width to filter mobile devices */
@armazon-desktop-breakpoint : 960; /* width to fire desktop layout filtering */

@armazon-margin                 : 3rem; /* Global margin */
@armazon-columns-margin         : 3.5;  /* Amount of percent margin on Grid Columns ( Percentual Value ) */
@armazon-columns-tablet-margin  : 2;    /* Percent margin when breaking into Tablet Mode */

@armazon-color-background : #fafbfc; /* Global Background Color */
@armazon-color-foreground : #262524; /* Global Foreground & Text Color */
@armazon-color-primary    : #229def; /* Links and Buttons Color */
@armazon-color-neutral    : #a0a0a0; /* Neutral Grey */
```

