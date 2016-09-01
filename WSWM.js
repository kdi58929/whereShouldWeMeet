var lat1 = 0, long1 = 0, lat2 = 0, long2 = 0;
var finalLat = 0, finalLong = 0;
function useCurrent() {
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(showCurrent);
	} else {
		window.alert("Geolocation is not supported. Please enter a location manually.");
	}
}
function showCurrent(position) {
	document.getElementById("inputLat1").value = position.coords.latitude;
	document.getElementById("inputLong1").value = position.coords.longitude;
}
function submit() {
	lat1 = Number(document.getElementById("inputLat1").value);
	long1 = Number(document.getElementById("inputLong1").value);
	lat2 = Number(document.getElementById("inputLat2").value);
	long2 = Number(document.getElementById("inputLong2").value);
	finalLat = (lat1 + lat2)/2;
	finalLong = (long1 + long2)/2;
	var mapCenter = new google.maps.LatLng(finalLat,finalLong)
	var mapSet = {
		center: mapCenter,
		zoom: 16,
		mapTypeId: google.maps.MapTypeId.ROADMAP
	};
	var finalMap = new google.maps.Map(document.getElementById("outputMap"),mapSet);
	var marker = new google.maps.Marker({
		position: mapCenter,
	});
	marker.setMap(finalMap);
	var mapCircle = new google.maps.Circle({
		center: mapCenter,
		radius: 250,
		strokeColor: "#FF0000",
		strokeOpacity: 0.3,
		strokeWeight: 1,
		fillColor: "#FF0000",
		fillOpacity: 0.3
	});
	mapCircle.setMap(finalMap);
}
function inputValidate(inputId) {
    var inputEl = document.getElementById(inputId);
    var inputVal = document.getElementById(inputId).value;
    if (inputVal >= -90 && inputVal <= 90) {
      inputEl.style.backgroundColor = "#9fff80";
    } else {
      inputEl.style.backgroundColor = "#fd4235";
    }
}
function validationAdder(htmlId) {
    document.getElementById(htmlId).addEventListener("change", function() { 
       inputValidate(htmlId); 
    });
}
validationAdder("inputLat1");
validationAdder("inputLat2");
validationAdder("inputLong1");
validationAdder("inputLong2");


