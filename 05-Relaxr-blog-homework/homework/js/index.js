
//stop links from jumping on page

var linkElements = document.getElementsByTagName('a');

for (var i=0; i<linkElements.length; i++) {
	linkElements[i].onclick = function(event) {
		event.preventDefault();

	}
}

//Toggle between readmore and readless
var readMoreElement = document.getElementsByClassName('readmore');
var readLessElement = document.getElementsByClassName('readless');
var showThisElement = document.getElementsById('show-this-on-click');

readMoreElement[0].onclick = fucntion() {
	readMoreElement[0].style.display = 'none';
	readLessElement[0].style.display = 'block';
	showThisElement.style.display = 'block';
};

readLessElement[0].onclick = function() {
	readMoreElement[0].style.display = 'block';
	readLessElement[0].style.display = 'none';
	showThisElement.style.display = 'none';
};

//Show Learn more text

var learnMoreElement = document.getElementsbyClassName('learnmore');
var learMoreTextElement = document.getElementsById('learnmoretext');

learnMoreElement[0].onclick = function() {
	learnMoreElement[0].style.display = 'none';
	learMoreTextElement.style.display = 'block';

}