# armazon.css

Enlace corto: **[git.io/armazon](http://git.io/armazon)**

**armazon.css** es un modelo de plantilla CSS3 reusable, supersimple y ligero, que te servira como punto de partida para empezar cualquier proyecto web que requiera de un diseño adaptable (Responsive Web Design). Estiliza los elementos básicos de HTML y proporciona una cuadricula adaptable basada en columnas. **armazon.css** no es un UI Framework, es un punto de partida que te ayudara en tus proyectos que requieren un desarrollo adaptativo en dispositivos móviles.

- No es necesario instalar o compilar nada, simple y llanamente, CSS puro. 
- El archivo LESS (alrededor de 600 lineas) esta sin comprimir ni minificar y contiene comentarios explicativos.

**armazon.css** usa una versión personalizada de [normalize.css](http://necolas.github.io/normalize.css/) y esta basado inicialmente en el código de [Skeleton](http://getskeleton.com).

## Como empezar

Para empezar a usar **armazon.css** lo primero que debes hacer es descargar el código CSS, puedes obtenerlo de las siguientes formas:

1. Copiando el archivo CSS minificado que se encuentra en el repositorio principal: [armazon.min.css](https://raw.githubusercontent.com/alterebro/armazon.css/master/styles/armazon.min.css).
- Clonando el repositorio alterebro/armazon.css.git: `git clone https://github.com/alterebro/armazon.css.git`
- Descargando la ultima versión publicada: <https://github.com/alterebro/armazon.css/releases/>

	Como el repositorio aún se encuentra bajo desarrollo activo, lo más recomendable es usar la descarga de la última version publicada (3)

### ¿Que archivos hay dentro del proyecto?

La estructura del proyecto incluye un archivo ``index.html`` con ejemplos de código. Los archivos markdown con esta documentacion y la licencia de uso ``README.md``, ``LICENSE.md``. Una carpeta (``styles``) con los archivos LESS, CSS y CSS Minificado. Este último archivo ``armazon.min.css`` sera el que usaremos para empezar a trabajar con **armazon**.

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

### ¿Como usarlo?

Enlaza el archivo con el codigo armazon en la cabecera de la página HTML antes de cualquier otro codigo CSS

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


## Navegadores compatibes

Probado satisfactoriamente en las ultimas versiones de los siguientes navegadores: **Chrome, Firefox, Opera, Safari, IE.**


## Licencia

Todas las partes del código de **armazon.css** son gratis para su uso y abuso. Esta publicado bajo una licencia de código libre MIT: 
[MIT License](https://github.com/alterebro/armazon.css/blob/master/LICENSE.md).


## Reconocimientos y creditos

**armazon.css** ha sido realizado gracias a los siguientes elementos y software:  

- Editor de código **Sublime Text 2** <http://www.sublimetext.com/>. 
- Editor de Markdown para la documentación **MacDown** <http://macdown.uranusjr.com/>.
- La fuente tipográfica usada en la pagina de ejemplo HTML **[Lato](http://www.google.com/fonts/specimen/Lato)** fue creada por [Łukasz Dziedzic](http://www.lukaszdziedzic.eu/).
- **Skeleton** es un trabajo de [Dave Gamache](https://twitter.com/dhg), es una plantilla CSS en la que esta basada armazon.css
- **Normalize.css** es un proyecto de [Nicolas Gallagher](http://nicolasgallagher.com/) que trata de estandarizar / normalizar los elementos HTML en la mayoria de navegadores actuales.

---

### Licencia
Licencia MIT (MIT)

Copyright (c) 2015 Jorge Moreno

Por la presente se autoriza, de forma gratuita, a cualquier persona que haya obtenido una copia de este software y archivos de documentación asociados (el "Software"), a utilizar el Software sin restricción, incluyendo sin limitación los derechos de usar, copiar, modificar, fusionar, publicar, distribuir, sublicenciar, y/o vender copias de este Software, y permitir lo mismo a las personas a las que se les proporcione el Software, de acuerdo con las siguientes condiciones:

El aviso de copyright anterior y este aviso de permiso tendrán que ser incluidos en todas las copias o partes sustanciales del Software.

EL SOFTWARE SE ENTREGA "TAL CUAL", SIN GARANTÍA DE NINGÚN TIPO, YA SEA EXPRESA O IMPLÍCITA, INCLUYENDO, A MODO ENUNCIATIVO, CUALQUIER GARANTÍA DE COMERCIABILIDAD, IDONEIDAD PARA UN FIN PARTICULAR Y NO INFRACCIÓN. EN NINGÚN CASO LOS AUTORES O TITULARES DEL COPYRIGHT INCLUIDOS EN ESTE AVISO SERÁN RESPONSABLES DE NINGUNA rECLAMACIÓN, DAÑOS U OTRAS RESPONSABILIDADES, YA SEA EN UN LITIGIO, AGRAVIO O DE OTRO MODO, RESULTANTES DE O EN CONEXION CON EL SOFTWARE, SU USO U OTRO TIPO DE ACCIONES EN EL SOFTWARE.