(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

console.log("in displayimages.js");

function displayImages(result,myurl){
	console.log ("myurl", myurl);
	if("copyright" in result) {
    	$("#copyright").text("Image Credits: " + result.copyright);
  	}
  	else {
    	$("#copyright").text("Image Credits: " + "Public Domain");
  	}
  
  	if(result.media_type == "video") {
    	$("#apod_img_id").css("display", "none"); 
    	$("#apod_vid_id").attr("src", result.hdurl);
  	}
  	else {
    	$("#apod_vid_id").css("display", "none"); 
    	$("#apod_img_id").attr("src", result.hdurl);//this line displays image on page
  	}
  	$("#reqObject").text(result.hdurl); //this line displays the url at the top of page
  	$("#returnObject").text(JSON.stringify(result, null, 4));  
  	$("#apod_explaination").text(result.explanation);
  	$("#apod_title").text(result.title);
	
	

	console.log("i am in displayimages", result.hdurl);
	
}

module.exports = {displayImages};
},{}],2:[function(require,module,exports){
"use strict";

console.log("in getimages.js");



let images = require('./displayimages.js');

//console.log("images", images);
//console.log(images.displayImages());

let getDate = (counter) => {
	let today = new Date("2016-01-15");
	today.setDate(today.getDate()-counter);
	let myDate = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
	console.log("myDate", myDate, typeof(myDate));
	return myDate;
};

let getImages = (finaldate) => {
			console.log("get images running");			
			let myKey = "GEJNrWoApZTvYdDVaZdRqBpHPJLxO0LRvWEvp8qv",
				myurl = "https://api.nasa.gov/planetary/apod?&date=" + finaldate + "&api_key=" + myKey;
			console.log("myurl", myurl);
			return new Promise ((resolve, reject) => {
				$.ajax({
					url:myurl,
					success: (data) => {
						console.log("success", data);
						resolve(data,myurl);//resolve passes data to then

					},
					error: () => {
						reject("Images Failed to Load");
					}
				});
			});
};

module.exports = {getImages, getDate};



    
	
	
	

	

 

 


},{"./displayimages.js":1}],3:[function(require,module,exports){
"use strict";

let nasaImages = require('./getimages.js'),
    dispImages = require('./displayimages.js'),
    prev = $("#prev"),
    next = $("#next"),
    counter = 0;
  

let newDate = nasaImages.getDate(counter);
nasaImages.getImages(newDate).then ((data,myurl) => {
	console.log("data", data, "url", myurl);
	dispImages.displayImages(data, myurl);

});



prev.on("click", () => {
	counter--;
	let prevDate = nasaImages.getDate(counter);
    nasaImages.getImages(prevDate).then ((data,myurl) => {
	console.log("data", data, "url", myurl);
	dispImages.displayImages(data, myurl);

	});
});

next.on("click" , () => {
	counter++;
	let nextDate = nasaImages.getDate(counter);
    nasaImages.getImages(nextDate).then ((data,myurl) => {
	console.log("data", data, "url", myurl);
	dispImages.displayImages(data, myurl);
	});
});

},{"./displayimages.js":1,"./getimages.js":2}]},{},[3]);
