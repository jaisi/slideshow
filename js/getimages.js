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



    
	
	
	

	

 

 

