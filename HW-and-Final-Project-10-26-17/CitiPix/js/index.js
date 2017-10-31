//Psuedocode:
//Based on user's input, use jQuery to change the city image background that corresponds to user's city input
//Make script wait for the document to be ready
//So that the page doesn't reload, make form wait for user to "submit"/enter input.
//Take user's city input and save it as a value
//Use city input to change the background image to corresponding city
//Example of possible strings of user's inputs: If city input is New York, NYC, New York City, new york, nyc, or new your city remove current background and replace with current city input background image.

$(document).ready(function(){

    $('form').submit(CityName);

    function CityName(event) {
    	event.preventDefault();

    	var city = $('#city-type').val();

		if (city === 'New York' || city === 'NYC' || city === 'New York City' || city === 'new york' || city === 'nyc' || city === 'new york city') {
			$('body').removeClass('starter-image').addClass('nyc');
		} else if (city === 'San Francisco' || city === 'SF' || city === 'Bay Area' || city === 'san francisco' || city === 'sf') {
			$('body').removeClass('starter-image').addClass('sf');
		} else if (city === 'Los Angeles' || city === 'LA' || city === 'LAX' || city === 'los angeles' || city === 'la') {
			$('body').removeClass('starter-image').addClass('la');
		} else if (city === 'Austin' || city === 'ATX' || city === 'austin' || city === 'atx') {
			$('body').removeClass('starter-image').addClass('austin');
		} else if (city === 'Sydney' || city === 'SYD' || city === 'sydney' || city === 'syd') {
			$('body').removeClass('starter-image').addClass('sydney');
		} 

    }

  });