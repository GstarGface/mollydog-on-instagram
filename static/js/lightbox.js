///////lightbox display for photos///////
var nextPic = document.getElementById("next-pic");
var lastPic = document.getElementById("last-pic");
var photoBox = document.getElementById("photo-box");
var photoData;
var index;
var image;
var caption;

function swapPic(index){
	image = '<img src="' + photoData[index]["pic"] + '" alt="std-res" />';
	caption = '<p>'+ photoData[index]["caption"] + '</p>';
	photoBox.innerHTML = image + caption;
};

// swaps out image displayed in lightbox for next image in photoData array
function getNext(evt){
	index++;
	if (index === photoData.length){
		index = 0;
	};
	swapPic(index);
};

// swaps out image displayed in lightbox for last image in photoData array
function getLast(evt){
	index--;
	if (index === -1){
		index = photoData.length -1;
	};
	swapPic(index);
};

// gets instgram data from server via plain vanilla AJAX request
var xhr = new XMLHttpRequest();
xhr.open("GET", "/getInsta.json", true); //prepare the request
xhr.send(); //send request

xhr.onload = function(){
	if(xhr.status === 200){
		photoData = JSON.parse(xhr.responseText);
		index = -1;
	  	getNext(index);
	  	nextPic.addEventListener("click", getNext);
	  	lastPic.addEventListener("click", getLast);
	};
};
/////////////////////////////////////////////////////////////////
// ALTERNATIVE APPROACH: jQuery AJAX call to retrieve API data on the front end. Data then displayed on page with plain vanilla javascript. 

// function swapPic(index){
// 	image = '<img src="' + photoData[index].images.standard_resolution.url + '" alt="std-res" />';
// 	caption = '<p>'+ photoData[index].caption.text + '</p>';
// 	photoBox.innerHTML = image + caption;
// };

//// swaps out image displayed in lightbox for next image in photoData array
// function getNext(evt){
// 	index++;
// 	if (index === photoData.length){
// 		index = 0;
// 	};
// 	swapPic(index);
// };

//// swaps out image displayed in lightbox for last image in photoData array
// function getLast(evt){
// 	index--;
// 	if (index === -1){
// 		index = photoData.length -1;
// 	};
// 	swapPic(index);
// };

//// retrieves image data from instagram API, success function loads first image on page and binds event listener
// $.ajax({
// 	type: "GET",
// 	dataType: "jsonp",
// 	cache: false,
// 	url: "https://api.instagram.com/v1/tags/mollydog/media/recent?client_id=MY_CLIENT_ID_GOES_HERE",
// 	success: function(response) {
// 	  	photoData = response.data;
// 	  	index = -1;
// 	  	getNext(index);
// 	  	nextPic.addEventListener("click", getNext);
// 	  	lastPic.addEventListener("click", getLast);
// 	}
// });	
