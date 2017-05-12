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
