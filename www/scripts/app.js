// Utils
function foreach(selector, fn) {
	var elements = document.querySelectorAll(selector);
	for (var i = 0; i < elements.length; i++) {
		fn(elements[i], i);
	}
}

function contains(arr, obj) {
	var i = arr.length;
	while (i--) {
		if (arr[i] === obj) {
			return true;
		}
	}
	return false;
}

function addclass(el, classname) {
	if (el.classList) {
		el.classList.add(classname);
	} else {
		el.className += ' ' + classname;
	}
}

function removeclass(el, classname) {
	if (el.classList) {
		el.classList.remove(classname);
	} else {
		el.className = el.className.replace(new RegExp('(^|\\b)' + classname.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
	}
}

// Social Networks Sharing
function share(network) {

	var the_lang = (typeof lang != 'undefined') ? lang : 'en';

	var config = {
		url : 'http://alterebro.github.io/armazon.css/',
		title : 'armazon.css - lightweight and super simple CSS3 Boilerplate Micro Framework built on LESS',
		content : 'Minimal and supersimple CSS Boilerplate Micro Framework that provides a customizable adaptive grid system, cross browser consistency and improved styling for the standard HTML elements.',
		image : 'http://alterebro.github.io/armazon.css/www/images/armazon-css.jpg'
	}

	if ( the_lang == 'es' ) {

		config['title'] = 'armazon.css - Micro Framework CSS simple y ligero basado en normalize.css y Skeleton';
		config['content'] = 'Plantilla reutilizable y Micro Framework CSS muy simple y ligero que proporciona un sistema de rejilla adaptable y personalizable, consistencia entre navegadores y estilos mejorados para los elementos estandar de HTML';
	}

    var network_base_urls = {
        facebook: "http://www.facebook.com/sharer.php?u={url}&t={title}",
        twitter: "http://twitter.com/share?text={title}&url={url}",
        googleplus: "https://plusone.google.com/_/+1/confirm?hl=en&url={url}",
        linkedin: "http://www.linkedin.com/shareArticle?mini=true&url={url}&title={title}&summary={content}",
        tumblr: "http://www.tumblr.com/share?v=3&u={url}",
        pinterest: "http://pinterest.com/pin/create/button/?url={url}&media=&description={content}",
		email: "mailto:?subject={title}&body={content}{url}"
    };

	var network_url = network_base_urls[network].replace(/\{url\}/, encodeURIComponent(config.url))
       .replace(/\{title\}/, encodeURIComponent(config.title))
       .replace(/\{content\}/, encodeURIComponent(config.content))
       .replace(/\{image\}/, encodeURIComponent(config.image));

	if ( network == 'email' ) {
		window.location.href = network_url;
	} else {
		var network_window = window.open(network_url, network+'-share', 'height=350,width=600');
			network_window.focus();
	}
}

// URL hash routing
function check_url_hash() {
	var h = window.location.hash.substring(1).split('.');
		hash = h[0];
		subhash = (!!h[1]) ? h[1] : false;
	var init_value = ( !!hash && contains(sections, hash) ) ? hash : false;
	if (init_value) { open_section( init_value, subhash ); }
	return [init_value, subhash];
}

function open_section(section, subsection) {

	var the_hash = "#" + section;
		the_hash += ( !!subsection ) ? '.'+subsection : '';
		location.hash = the_hash;

	foreach('section', function(el, i) { el.style.display = 'none'; });
	document.getElementById(section).style.display = 'block';

	// active menu item class
	foreach('header[role="banner"] nav ul a', function(el, i) {
		removeclass(el, 'active');
	});
	addclass(document.querySelector('a[href="#'+section+'"]'), 'active');
}

var sections = [];

window.onload = function() {

	// fill sections[...]
	foreach('section', function(el, i) {
		sections.push( el.getAttribute('id') );
	});

	// get hash
	var hash_value = check_url_hash();
		init_value = hash_value[0];

	foreach('header[role="banner"] nav ul a', function(el, i) {

		// active item
		if ( (el.href).lastIndexOf('#'+init_value) > 0 ) { addclass(el, 'active'); }
		// link action
		el.onclick = function(e) {
			e.preventDefault();
			open_section( this.href.substring(this.href.indexOf('#')+1) );
		}
	});

	// no proper url hash
	if ( !init_value ) {
		open_section( sections[0] );
		if (history.pushState) { history.pushState(null, null, '#'+sections[0]); }
		else { window.location.hash = '#'+sections[0]; }
		window.setTimeout(function(){ document.body.scrollTop = document.documentElement.scrollTop = 0; }, 1);
	}

	// Share Links
	foreach('#social-sharing li a', function(el, i){
		el.onclick = function(e) {
			e.preventDefault();
			share( this.getAttribute('class') );
		}
	});

}

window.onhashchange = function(e) { check_url_hash(); }
