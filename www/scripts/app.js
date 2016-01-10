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
}

window.onhashchange = function(e) { check_url_hash(); }
