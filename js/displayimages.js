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