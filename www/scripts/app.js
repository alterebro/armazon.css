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

window.onload = function() {

	var sections = [];
	foreach('section', function(el, i) {
		sections.push( el.getAttribute('id') );
	});

	function open_section(section) {

		if(history.pushState) {
		    history.pushState(null, null, '#'+section);
		} else {
		    window.location.hash = '#'+section;
		}

		foreach('section', function(el, i) {
			el.style.display = 'none';
		});
		document.getElementById(section).style.display = 'block';

		// active menu item class
		foreach('header[role="banner"] nav ul a', function(el, i) {
			removeclass(el, 'active');
		});
		addclass(document.querySelector('a[href="#'+section+'"]'), 'active');

	}

	var hash = window.location.hash.substring(1);
	var init_value = ( !!hash && contains(sections, hash) ) ? hash : sections[0];
	open_section( init_value );

	foreach('header[role="banner"] nav ul a', function(el, i) {

		// active item
		if ( (el.href).lastIndexOf('#'+init_value) > 0 ) { addclass(el, 'active'); }

		// link action
		el.onclick = function(e) {
			e.preventDefault();
			open_section( this.href.substring(this.href.indexOf('#')+1) );
			return false;
		}
	});

	window.setTimeout(function(){ document.body.scrollTop = document.documentElement.scrollTop = 0; }, 1);
}
