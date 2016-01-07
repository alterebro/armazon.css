# armazon.css : [http://git.io/armazon](http://git.io/armazon)


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
// armazon.css eof
// --------------------------------------------
// --------------------------------------------
// Author's custom styles :

// here you can start writing your css / less rules...
.rule {
	property : value;
	bla-bla : ...;
	...
}
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

The armazon responsive fluid grid system is based on a **6 columns layout** that will shrink and resize itself as the browser or device viewport size changes. 

The size of the margin between columns can be controled on the `armazon.less` as stated on the previous section, the variable names called `@armazon-columns-margin` and `@armazon-columns-tablet-margin` will set the percentage of the viewport assigned to the space between columns.

### Adaptive Grid System

The grid works by simply creating a container element with a `.row` class ( for example a div element: `<div class="row"></div>`) and once you have the 'row container' in place, put inside the columns by naming them with one of the availables column classes : 

- **.column-one-sixth** : ( `<div class="column-one-sixth">...</div>` )
- **.column-one-fourth** : ( `<div class="column-one-fourth">...</div>` )
- **.column-one-third**	 : ( `<div class="column-one-third">...</div>` )
- **.column-one-half**	: ( `<div class="column-one-half">...</div>` )
- **.column-two-thirds** : ( `<div class="column-two-thirds">...</div>` )
- **.column-three-fourths** : ( `<div class="column-three-fourths">...</div>` )
- **.column-five-sixths** : ( `<div class="column-five-sixths">...</div>` )

Having in mind the armazon 6 columns layout, if we want to create a three columns view, then we'll write the following HTML :

```html
<div class="row">
	<div class="column-one-third">1st column content</div>
	<div class="column-one-third">2nd column content</div>
	<div class="column-one-third">3rd column content</div>
</div>
```

If we want to create an main content with a sidebar layout, we'd code it like as follows : 

```html
<main class="row">
	<section class="column-three-fourths">Main Content</section>
	<aside class="column-one-fourth">Sidebar Content</aside>
</main>
```


### Offsetting

The columns within any 'row container' element inside the grid system may have a left displacement or offset that can be set by adding another class name following the form: `shift-SIZE`. For instance, if we want to offset a column by one third, we simply add the class name `.shift-one-third`

```html
<div class="row">
	<div class="column-one-third shift-one-third">
		...
	</div>
</div>
```

These are the offset class names available :

- **.shift-one-sixth** : `<div class="shift-one-sixth column-one-sixth">1/6 col w.1/6 shift</div>`
- **.shift-one-fourth** : `<div class="shift-one-fourth column-one-sixth">1/6 col w.1/4 shift</div>`
- **.shift-one-third** : `<div class="shift-one-third column-one-sixth">1/6 col w.1/3 shift</div>`
- **.shift-one-half** : `<div class="shift-one-half column-one-sixth">1/6 col w.1/2 shift</div>`
- **.shift-two-thirds** : `<div class="shift-two-thirds column-one-sixth">1/6 col w.2/3 shift</div>`
- **.shift-three-fourths** : `<div class="shift-three-fourths column-one-sixth">1/6 col w.3/4 shift</div>`
- **.shift-five-sixths** : `<div class="shift-five-sixths column-one-sixth">1/6 col w.5/6 shift</div>`


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


## <a name="HTML-Elements"></a> HTML Elements

The next standard HTML Elements don't follow any specific coding pattern in order to work properly, **armazon.css** overrides the default ugly-looking browser styles.

### — Typography

#### Headings

```html
<h1>Heading Level 1</h1>
<h2>Heading Level 2</h2>
<h3>Heading Level 3</h3>
<h4>Heading Level 4</h4>
<h5>Heading Level 5</h5>
<h6>Heading Level 6</h6>
```

#### Blockquote
```html
<blockquote>
	<p>The Earth provides enough to satisfy every man's need but not for every man's greed.</p>
	<footer>
		&mdash; <cite><a href="https://en.wikipedia.org/wiki/Mahatma_Gandhi">Mahatma Gandhi</a></cite>
	</footer>
</blockquote>
```

#### Code

```html
<p>Inline <code>code</code>, <kbd>kbd</kbd> tag elements and <samp>samp</samp> text.</p>
<pre><code>This is a code string contained within a pre element
$_ROOT = realpath(dirname(__FILE__)) . '/';
$_QUERY = trim( $_QUERY, '/' );</code></pre>
<pre>pre code block with plain text within it.</pre>
```

#### Text Elements Semantics

#### Image & Caption

---

### — Lists

#### Definition list
```html
<dl>
    <dt>Definition Term 01</dt>
    <dd>dd - Definition 01 - a</dd>
    <dd>dd - Definition 01 - b</dd>

    <dt>Definition Term 02</dt>
    <dd>dd - Definition 02</dd>

    <dt>Definition Term 03</dt>
    <dd>dd - Definition 03</dd>
</dl>
```

#### Unordered List
```html
<ul>
    <li>List item 01</li>
    <li>List item 02</li>
    <li>List item 03
        <ul>
            <li>Nested list item 01</li>
            <li>Nested list item 02</li>
            <li>Nested list item 03</li>
        </ul>
    </li>
</ul>
```

#### Ordered List
```html
<ol>
    <li>List item 01</li>
    <li>List item 02
        <ol>
            <li>Nested list item 01</li>
            <li>Nested list item 02</li>
        </ol>
    </li>
    <li>List item 03</li>
    <li>List item 04</li>
</ol>
```
---

### — Tables

```html
<table>
    <thead>
        <tr>
            <th>Table Header #1</th>
            <th>Table Header #2</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Sample text ... Donec eget dictum nisl</td>
            <td>Sample text ... Etiam pharetra lorem a lobortis dapibus</td>
        </tr>
        <tr>
            <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</td>
            <td>Ut eget massa commodo, venenatis nisl in, vestibulum turpis.</td>
        </tr>
        <tr>
            <td>Donec eget dictum nisl</td>
            <td>Etiam pharetra lorem a lobortis dapibus</td>
        </tr>
        <tr>
            <td>Etiam pharetra lorem a lobortis dapibus</td>
            <td>Donec eget dictum nisl</td>
        </tr>
    </tbody>
    <tfoot>
        <tr>
            <td colspan="2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</td>
        </tr>
    </tfoot>
</table>
```

---

### — Form Elements

#### Buttons
```html
<button>This is a button</button>
<input type="button" value="input:type:button" />
<input type="reset" value="input:type:reset" />
<input type="submit" value="input:type:submit" />
<p><a href="#" class="button">Link with a .button class</a></p>
<fieldset>
	<legend>Inside a fieldset</legend>
	<div>
		<button disabled="disabled">A disabled button</button>
		<input type="button" disabled="disabled" value="input:button:disable" />
		<input type="submit" disabled="disabled" value="input:submit:disable" />
	</div>
</fieldset>
```

#### Input Elements
```html
<input type="text" placeholder="input:type:text" />
<input type="date" placeholder="input:date" />
<input type="time" placeholder="input:time" />
<input type="email" placeholder="input:email" />
<input type="number" placeholder="input:number" />
<input type="search" placeholder="input:search" />
<input type="text" placeholder="input:text" />
<input type="tel" placeholder="input:tel" />
<input type="url" placeholder="input:url" />
<input type="password" placeholder="input:password" />
```

#### More Elements

```html
<label><input type="checkbox" /> &nbsp; This is a checkbox label</label>
<fieldset>
	<legend>Sample legend</legend>
	<label><input type="radio" name="radio-input" /> &nbsp; A radio input label</label>
	<label><input type="radio" name="radio-input" /> &nbsp; Another radio input label</label>
	<label><input type="radio" name="radio-input" /> &nbsp; Extra radio input label</label>
</fieldset>

<label for="select-input">Select Element</label>
<select id="select-input">
	<optgroup label="Group select : optgroup">
		<option>Select : Option</option>
		<option>Option 1.1</option>
	</optgroup>
	<optgroup label="Group 2">
		<option>Option 2.1</option>
		<option>Option 2.2</option>
	</optgroup>
	<optgroup label="Group 3" disabled>
		<option>Option 3.1</option>
		<option>Option 3.2</option>
		<option>Option 3.3</option>
	</optgroup>
</select>

<label for="textarea-input">Textarea Label</label>
<textarea id="textarea-input" placeholder="textarea placeholder text"></textarea>
```










