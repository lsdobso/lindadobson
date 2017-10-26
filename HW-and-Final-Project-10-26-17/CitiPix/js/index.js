// Psuedo Code notes
// Use user's input to change background corresponding to the city the user inputs by using JQuery
// Make the script wait for when the document is ready
// Make page not reload and make form wait for submit

 	$(document).ready(function(){
 	$('form').submit(addCityName);

 	function addCityName(event) {
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