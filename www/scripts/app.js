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

window.onload = function() {

	var sections = [];
	foreach('section', function(el, i) {
		sections.push( el.getAttribute('id') );
	});

	function open_section(section) {
		foreach('section', function(el, i) {
			el.style.display = 'none';
		});
		document.getElementById(section).style.display = 'block';
	}

	foreach('header[role="banner"] nav ul a', function(el, i) {
		el.onclick = function(e) {
			open_section( this.href.substring(this.href.indexOf('#')+1) );
			e.preventDefault();
		}
	});

	var hash = window.location.hash.substring(1);
	var init_value = ( !!hash && contains(sections, hash) ) ? hash : sections[0];
	open_section( init_value );

	window.setTimeout(function(){
		document.body.scrollTop = document.documentElement.scrollTop = 0;
	}, 10);

}
