//#1: How can you use arrays here
$(".info").append("<img src='https://media.licdn.com/mpr/mpr/shrinknp_200_200/p/2/000/19a/386/31be5db.jpg' alt='William\'s picture'><p>The instructor for this course is Wylesha Rachell. Wylesha has a degree in Business Management from LSU.</p>");

//#2: How can you turn this into a function
$(".list-items").prepend("<li>Milk</li>");
$(".list-items").prepend("<li>Cookies</li>");
$(".list-items").prepend("<li>Sugar</li>");
$(".list-items").prepend("<li>Bananas</li>");
$(".list-items").prepend("<li>Gatorade</li>");

//#3: Take the same example and use an array
//

//#4: Combine jQuery Selectors
$("#container").css("width","960px");
$("#container").css("background","grey");
$("#container").css("color","#fff");
$("#container").css("font-size","14px");
$("#container").css("box-shadow","0 0 10px #ccc");


$("#main").css("width","960px");
$("#main").css("background","grey");
$("#main").css("color","#fff");
$("#main").css("font-size","14px");
$("#main").css("box-shadow","0 0 10px #ccc");


//#4: How can we used muliple property: values in the css method?

//#5: Chain jQuery function calls
$("input").css("width","200px")
$("input").attr("placeholder","My placeholder");
$("input").before("<label>My input </label>");
