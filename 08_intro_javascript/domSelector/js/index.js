/**
 * Javascript/jQuery Exercises: Selecting Things In The DOM!
 * Answer the following questions.
 * Remember to 
 */

/*===================================================
=            Put all your variables here            =
===================================================*/






/*=====  End of Put all your variables here  ======*/


/*----------  Exercise is here  ----------*/
/**
 * 1:
 * Create a variable for the html element with the id content
 */
var contentElement = document.getElementById('content');
var storyTitleElement = document.getElementsByClassName('storyTitle');
var logoElement = document.getElementById('logo');
var headerElement = document.getElementsByClassName('header');
var bodyElement = document.getElementsByTagName('body');


/**
 * 2:
 * Create a variable for the html element with the class storyTitle
 */
/**
 * 3:
 * Output both the variables in the console
 * options: console.log() || console.dir()
 */
 console.log(contentElement);
 console.log(storyTitleElement);

/**
 * 4:
 * Change the html element with the id logo color to red and the font-size to 100px
 */


console.dir(logoElement);

logoElement.style.color = "red";

logoElement.style.fontSize = "100px";



console.log(logoElement);

/**
 * 5:
 * Change the background-color of the header to #000

 */

headerElement[0].style.backgroundColor = "#000";

console.log(headerElement);

console.dir(headerElement[0]);

/**
 * 6:
 * Change the background color of the page to #005eff
 */
console.log(bodyElement);
 bodyElement[0].style.backgroundColor = "#005eff";




/**
 * 7:
 * Change the font-size of the html element with the class storyTitle to 40px && bold
 */

for (var 1 = 0; 1 < storyTitleElement.length; i++) {
	console.log(i);
	console.dir(storyTitle(i));

	storyTitleElement(i).story.fontSize = "40px"
	storyTitleElement(i).story.fontWeight = "bold";
}
/*
var j = 0;
while ( j < storyTitleElement.length){
	storyTitleElement(j).story.color = "white";
}
/**
 * 8:
 * Change the background of the html element with the id content to #fff
 */

 contentElement.style.backgroundColor = "#fff";


/**
 * 9:
 * Hide the first image
 */

 console.dir(imageElement[0]);
 imageElement[0].style.display ="none";

/**
 * 10:
 * Change the title of the second article
 */

 console.dir(storyTitleElement[1]);
 storyTitleElement[1].innerHTML = "This is my new article title";

/**
 * 11:
 * Give the third image an id of lastImage and change with width to 100%
 */
