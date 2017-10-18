var linkElements = document.getElementsbyTagName('a');


//stop links from jumping on page
for (var i=0; i<linkElements.length; i++) {
	linkElements[i].onclick = function(event) {
		event.preventDefault();

	}
}