
# armazon.css

**armazon.css** es una plantilla reutilizable y micro framework muy simple y ligero creado con LESS que proporciona un sistema de rejilla adaptable, consistencia entre navegadores y estilos mejorados para todos los elementos estandar de HTML, un grupo básico de clases CSS y un pequeño conjunto de variables en LESS donde podrás personalizar el archivo CSS resultante.

### La documentación completa se encuentra en la web del proyecto : [http://alterebro.github.io/armazon.css](http://alterebro.github.io/armazon.css/)

<img src="http://alterebro.github.io/armazon.css/www/images/armazon.png" width="100" />


## Comienzo Rápido

1. **Incluir el archivo armazon.css**. Tienes tres opciones diferentes :

	- Puedes instalarlo usando [bower](http://bower.io/) : `$ bower install armazon.css`
	- Puedes descargar y usar una copia del archivo precompilado y minificado desde el repositorio principal alojado en GitHub : **[armazon.min.css @GitHub](https://raw.githubusercontent.com/alterebro/armazon.css/master/armazon/armazon.min.css)**
	- O usar el archivo alojado en el CDN de rawgit : **[rawgit CDN's armazon.min.css](https://cdn.rawgit.com/alterebro/armazon.css/v0.3.0/armazon/armazon.min.css)**

	```html
	<!-- Usando bower o una copia del archivo descargado: -->
	<link rel="stylesheet" type="text/css" href="ruta/a/tu/armazon.min.css" />
	<!-- Usando el archivo alojado en el CDN: -->
	<link rel="stylesheet" type="text/css" href="https://cdn.rawgit.com/alterebro/armazon.css/v0.3.0/armazon/armazon.min.css" />
	```

2. Incluye una etiqueta **meta viewport**:

	```html
	<meta name="viewport" content="width=device-width, initial-scale=1" />
	```

3. **Hecho!**, ahora ya puedes empezar con tu proyecto.


## ¿Como Funciona?

El sistema de rejilla fluido y adaptable (responsive) proporcionado por **armazon.css** esta basado en un **diseño de 6 columnas**. Teniendo esto en cuenta, para componer una maquetación de columnas común, necesitarás crear un 'elemento contenedor de bloque' usando la clase `bloque` e incluir dentro de este las columnas en las que deberás usar una clase CSS de la forma `columna-FRACCIÓN-TAMAÑO`. Por ejemplo, si quieres crear un diseño de tres columnas de un tercio de ancho cada una, harias lo siguiente :

```html
<div class="bloque">
	<div class="columna-un-tercio">...</div>
	<div class="columna-un-tercio">...</div>
	<div class="columna-un-tercio">...</div>
</div>
```

Las clases CSS disponibles para estas columnas son las siguientes : `.columna-un-sexto`, `.columna-un-cuarto`, `.columna-un-tercio`, `.columna-una-mitad`, `.columna-dos-tercios`, `.columna-tres-cuartos` y `.columna-cinco-sextos`.

### Más información acerca de armazon.css : [http://alterebro.github.io/armazon.css/](http://alterebro.github.io/armazon.css/)
