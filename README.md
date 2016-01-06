# armazon.css : [http://git.io/armazon](http://git.io/armazon)

<mark>Uncompleted - **Draft** : This is a work in progress</mark>  (16/01/06)

- [About **armazon.css**](#about)
- [Quick Start](#quick-start)
- [LESS Development](#less-development)
- [Understanding **The Grid**](#the-grid)
- [Helpers & Classes](#helper-classes) 
- [HTML Elements](#HTML-elements)


## <a name="about"></a> About armazon.css

**armazon.css** is a lightweight and super simple CSS3 Boilerplate Micro Framework built using the **[LESS](http://lesscss.org/)** CSS Preprocessor. 

**armazon.css** will fit your needs if you consider any of the **HTML5 Reset Stylesheets are not enough** as they require a lot of tedious 'after-reset' work to restyle every HTML element, and you think **CSS Frameworks are too much** for your project as they come with a big time consuming documentation and a lot of bloating components that you are probably never going to use. **armazon.css** basic principle is simplicity, easy to learn with a **minimal learning curve** and also easy to extend.

The main purpose of armazon.css is to provide an improved CSS basis starting point with a much nicer default CSS style sheet in order to help you speed up the responsive development and design of your web application.

### The primary **armazon.css** features are :

- An adaptive and **responsive grid system** with customizable margins and space between columns.
- New look and proper **cross-browser consistency for the standard HTML elements display** by overwriting the default ugly looking browser style sheets.
- A small group of **useful classes**, easy to remember.
- A little set of **LESS variables**, so you can fully customize the CSS output of *armazon.css*.
- **Bilingual**, armazon speaks both English and Spanish through the use of alias classes.


## <a name="quick-start"></a> Quick Start 

**armazon** will make a lot easier to kick start your responsive web application, in order to have the pre-compiled version of armazon up and running on your site, just follow these simple steps:

1. **Including the armazon.css file onto your web document**. You have two different options : 

	- Using a downloaded copy of armazon.css, you can get the precompiled and minified file from the armazon.css project main repository on GitHub : **[armazon.min.css @GitHub](https://raw.githubusercontent.com/alterebro/armazon.css/master/armazon/armazon.min.css)**
	- Or by consuming the hosted file on the CDN kindly provided by [rawgit.com](http://rawgit.com/) : **[rawgit CDN's armazon.min.css](https://cdn.rawgit.com/alterebro/armazon.css/v0.2.0/armazon/armazon.min.css)**

	```html
	<!-- Using a downloaded copy: -->
	<link rel="stylesheet" type="text/css" href="path/to/your/armazon.min.css" />
		
	<!-- Using CDN's hosted file: -->
	<link rel="stylesheet" type="text/css" href="https://cdn.rawgit.com/alterebro/armazon.css/v0.2.0/armazon/armazon.min.css" />
	```

2. **Set the viewport meta tag inside the head of your document** so you can control how your web app is displayed on mobile devices: 
	
	```html
	<meta name="viewport" content="width=device-width, initial-scale=1" />

	<!-- You can also add these two optional metatags below -->
	<meta name="HandheldFriendly" content="True" />
	<meta name="MobileOptimized" content="320" />
	```
	
3. **Done**, that's all. Now, you can start your development, here's a simple **[HTML template](https://raw.githubusercontent.com/alterebro/armazon.css/master/www/template.html)** to help you get started.


## <a name="less-development"></a> Working with the armazon.less file

If you prefer to work with the non compiled .less version of armazon so you can fully customize the CSS output of your styles here's a little guide to help you about how to do it.

Basically you need to have the lessc compiler installed on your computer and include somehow the `armazon.less` file onto your workflow. More info about how to make less work on your machine is available on the [lesscss.org](http://lesscss.org/) website.

Once you have a *less-ready* environment, you can start to play around with the armazon code :

### 1. Working inside the armazon.less file :

You can create your styles on the same `armazon.les` file including them just at the bottom of the code, where the following code is located at the end of the file :

```less
// ARMAZON.CSS END
// --------------------------------------------

// --------------------------------------------
// YOUR CODE STARTS HERE :
// ...
// ..
// .

here you can include your css / less rules...
```

### 2. Working outside the armazon.less file : 

You may also create your own .less style sheet, in that case you'll have to include the armazon less file as follows 

```less
@import 'path/to/your/file/armazon.less';
```


### Setting Up the armazon less variables

Either way described above, you'll have access to the armazon defined variables that reside on `armazon.less` and are located at the top of the file. You can change them and assign them the desired values to fit your needs. **These are the set of available less variables** :

<table>
	<thead>
		<tr>
			<th>Group</th>
			<th>Variable Name</th>	
			<th>Default Value</th>	
			<th>Definition</th>	
		</tr>
	</thead>
	<tbody>
		<tr>
			<th rowspan="2">Media Queries</th>
			<td><code>@armazon-mobile-breakpoint</code></td>
			<td>580</td>
			<td>width to filter mobile devices</td>
		</tr>	
		<tr>
			<td><code>@armazon-desktop-breakpoint</code></td>
			<td>960</td>
			<td>width to fire desktop layout filtering</td>
		</tr>	
		<tr>
			<th rowspan="3">Margins</th>
			<td><code>@armazon-margin</code></td>
			<td>3rem</td>
			<td> </td>
		</tr>	
		<tr>
			<td><code>@armazon-columns-margin</code></td>
			<td>3.5</td>
			<td>Amount of percent margin on Grid Columns ( Percentual Value )</td>
		</tr>	
		<tr>
			<td><code>@armazon-columns-tablet-margin</code></td>
			<td>2</td>
			<td>Percent margin when breaking into Tablet Mode</td>
		</tr>	
		<tr>
			<th rowspan="4">Colors</th>
			<td><code>@armazon-color-background</code></td>
			<td>#fafbfc</td>
			<td>Global Background Color</td>
		</tr>	
		<tr>
			<td><code>@armazon-color-foreground</code></td>
			<td>#262524</td>
			<td>Global Foreground & Text Color</td>
		</tr>	
		<tr>
			<td><code>@armazon-color-primary</code></td>
			<td>#229def</td>
			<td>Links and Buttons Color</td>
		</tr>	
		<tr>
			<td><code>@armazon-color-neutral</code></td>
			<td>#a0a0a0</td>	
			<td>Neutral Grey</td>
		</tr>	
	</tbody>
</table>


## <a name="the-grid"></a> Understanding The Grid ( <mark>uncompleted</mark> )

### Adaptive Grid System

The grid works by simply creating a container with a .row class and putting within it columns with the desired width. The class names for the columns are intuitive and easy to remember, they are named: 
.one-fourth, .one-sixth, .two-thirds ...

### Offsetting

Columns inside the row grid may have a displacement or offset that can be set by adding another class name following the form: shift-SIZE. For instance, some offsetting classnames would be: 
.shift-one-sixth, .shift-one-fourth, .shift-one-third...


## <a name="helper-classes"></a> Classes and Helpers

### CSS classes

Apart of the basic structural grid classes defined on the previous section [Understanding The Grid](#the-grid), there's a small set of helper classes :

- `.button` to style a HTML hyperlink tag `<a>` and make it look like a `button input` 
- `.full-width` ( 100% width )
- `.max-full-width` ( 100% maximum width )
- `.pull-right` floats content to the right
- `.pull-left` floats content to the left
- `.clearfix` Self Clearing Goodness Hack

### Media Query Variables

- **@mobile** <br />Default styling, it targets devices with the maximum width defined on the `@armazon-mobile-breakpoint` variable (580 pixels by default). You shouldn't ever use this one on a mobile-first approach.  
- **@non-mobile** <br />targets devices with a viewport width bigger than the one defined on `@armazon-mobile-breakpoint` ( 580 by default )
- **@tablet** <br />targets devices with widths between the values defined on `@armazon-mobile-breakpoint` and `@armazon-desktop-breakpoint` ( by default that will be < than 960 and > 580 ).
- **@desktop** <br />for devices with a viewport width larger than the defined on the `@armazon-desktop-breakpoint` variable ( 960 pixels by default )

Those have to be used along the CSS `@media` rule. The best way to structure the use of media queries on a mobile first approach is to create the queries close to the relevant code (which should be the ones used on mobile devices by default). For example, if you want to change the styles for buttons on big devices, paste the non-mobile query code up in the buttons section and style it there : 

```less
.button {
	// Common rules for all media
	color: #c00;
	height: 30px;
	font-size: 14px;
	
	@media @non-mobile {
		// Targeting non-mobile devices
		height: 40px;
		font-size: 18px;			
	}
}
```

The less media queries are located at the top of the `armazon.less`. You can modify them as you wish. 

```less
@mobile 	: ~"all and (max-width: @{armazon-mobile-breakpoint}px)"; 	// Default
@non-mobile : ~"all and (min-width: @{armazon-mobile-breakpoint}px)"; 	// Matchs both @tablet and @desktop
@tablet 	: ~"all and (min-width: @{armazon-mobile-breakpoint}px) and (max-width: @{armazon-desktop-breakpoint}px)";
@desktop 	: ~"all and (min-width: @{armazon-desktop-breakpoint}px)";

```


## <a name="HTML-Elements"></a> HTML Elements ( <mark>uncompleted</mark> )

### Typography & Text Elements

#### Headings

You don't have to follow any specific pattern when using text semantics elements. armazon.css overrides all the common HTML tags default browser styles.

#### Text Elements Semantics

#### Image & Caption

#### Blockquote

#### Code



### Lists

#### Definition list

#### Unordered List

#### Ordered List



### Tables


### Form Elements
