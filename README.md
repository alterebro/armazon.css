# armazon.css 
Short link: [git.io/armazon](http://git.io/armazon)

**armazon.css** is a lightweight and supersimple CSS3 Boilerplate that will make easier start your responsive web project. It styles the basic and standard HTML elements and provides an adaptive grid based on row and columns. **armazon.css** is not a UI Framework, it is just a starting point which will help you create a mobile device responsive design.

- You won't need install or compile no thing, simply clean CSS.
- The source LESS file is just about 600 lines unminified or compressed, and it has all explained comments.

**aramazon.css** uses a customized version of [normalize.css](http://necolas.github.io/normalize.css/) and it was initially based on [Skeleton](http://getskeleton.com).

## First Steps
To start using **armazon.css** first thing that needs to be done is download the CSS code, you can do it by one of the following steps:

1. By copying the main minified CSS file from the repository [armazon.min.css](https://raw.githubusercontent.com/alterebro/armazon.css/master/styles/armazon.min.css).
- Clone the repository /alterebro/armazon.css.git : `git clone https://github.com/alterebro/armazon.css.git`
- Downloading the last released version: <https://github.com/alterebro/armazon.css/releases/>

As the repository is still under active development, it is recommended to download the last released version (3).

### What files are there on the project?
Project tree includes a HTML file ``index.html`` with code examples.
The markdown files with the documentation and the user license ``README.md`` and ``LICENSE.md``. The 'styles' folder with the LESS, CSS and minified CSS files. The minified file ``armazon.min.css`` will be the one we are using to start working with *armazon*. 

```
armazon.css/
├── index.html
├── README.md
├── LICENSE.md
└── styles/
    ├── armazon.min.css
    ├── armazon.css
    └── armazon.less
 
```

### How to use it
Just link the CSS file with the *armazon* code to the Head of your HTML document before any other CSS code.

```html
<!DOCTYPE html>
<html lang="es">
<head>
    ...
    <link rel="stylesheet" href="ruta/armazon.min.css" />
    <link rel="stylesheet" href="ruta/otros.archivos.css" />
    ...
</head>
<body>
    ... 
```

## Browser Support
Tested successfully on the lastest version of the following browsers: 
**Chrome**, **Firefox**, **Opera**, **Safari**, **IE**.

## License
All parts of the **armazon.css** code are free to use and abuse under the MIT open source license [MIT License](https://github.com/alterebro/armazon.css/blob/master/LICENSE.md).

## Acknowledgements & Credits
**armazon.css** has been done thanks to the following stuff:

- **Sublime Text 2** Code Editor: <http://www.sublimetext.com/>
- Markdown editor **MacDown** for documentation: <http://macdown.uranusjr.com/>. 
- Font family used on the example HTML page: **[Lato](http://www.google.com/fonts/specimen/Lato)** is a creation of [Łukasz Dziedzic](http://www.lukaszdziedzic.eu/).
- **[Skeleton](http://getskeleton.com)**, the parent project of armazon.css. Is a work done by [Dave Gamache](https://twitter.com/dhg).
- **Normalize.css** is a [Nicolas Gallagher](http://nicolasgallagher.com/) project to normalize / standarize HTML elements on all modern browsers.
