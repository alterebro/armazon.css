
# armazon.css

**armazon.css** is a lightweight, minimal and supersimple CSS3 Boilerplate Micro Framework built on LESS that provides an adaptive grid system, cross browser consistency and beautified styles for the standard HTML elements, a basic group of CSS classes and a little set of less variables where you can fully customize the CSS output.


### Full Documentation is on the project website : [http://alterebro.github.io/armazon.css](http://alterebro.github.io/armazon.css/)

<img src="http://alterebro.github.io/armazon.css/www/images/armazon.png" width="100" />


## Quick Start

1. **Include the armazon.css file**. You have three different options :

	- You can install it using [bower](http://bower.io/) : `$ bower install armazon.css`
	- You can download and use a copy of the precompiled and minified file from the main repository on GitHub : **[armazon.min.css @GitHub](https://raw.githubusercontent.com/alterebro/armazon.css/master/armazon/armazon.min.css)**
	- Or use the hosted file on the rawgit CDN : **[rawgit CDN's armazon.min.css](https://cdn.rawgit.com/alterebro/armazon.css/v0.2.0/armazon/armazon.min.css)**

	```html
	<!-- Using bower or a downloaded copy: -->
	<link rel="stylesheet" type="text/css" href="path/to/your/armazon.min.css" />
	<!-- Using CDN's hosted file: -->
	<link rel="stylesheet" type="text/css" href="https://cdn.rawgit.com/alterebro/armazon.css/v0.2.3/armazon/armazon.min.css" />
	```

2. Set the **viewport meta tag**:

	```html
	<meta name="viewport" content="width=device-width, initial-scale=1" />
	```

3. **Done**, you can now start your development.


## How does it work?

The responsive fluid grid system provided in **armazon.css** is based on a **6 columns layout**. In order to create a 'column view', you need to create a 'row container element' using the class named `row` and put inside 'column elements' using a class with the naming convention `column-FRACTION-SIZE`, for example, if you want to create two columns 50% wide each one, you'll do:

```html
<div class="row">
	<div class="column-one-half">...</div>
	<div class="column-one-half">...</div>
</div>
```

The class names availables for the columns are : `column-one-sixth`, `column-one-fourth`, `column-one-third`, `column-one-half`, `column-two-thirds`, `column-three-fourths` and `column-five-sixths`.


### Extended info about armazon.css : [http://alterebro.github.io/armazon.css/](http://alterebro.github.io/armazon.css/)
