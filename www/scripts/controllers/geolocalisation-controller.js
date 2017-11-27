'use strict';

askitApp.controller('geolocalisationCtrl', ['$scope', '$http', '$state', function($scope, $http, $state) {
		

	$scope.gotoCarte = function () {
      $state.go('carte', null, { reload: true });
    }

	$scope.awesomeThings = [
		'HTML5 Boilerplate',
		'AngularJS',
		'Testacular'
	];
		
	document.addEventListener('deviceready', function () {
        screen.orientation.lock('portrait');
    });
    
	var userID = localStorage.getItem("userSession");
	var userName = localStorage.getItem("userName");

	var latitudeFrom, longitudeFrom;
	$http.get( service+"?action=getCoords&userID="+userID ).success(function(data){	                   
        latitudeFrom = data.userLat;
        longitudeFrom = data.userLong;
    });

	Math.radians = function(degrees) {
	  return degrees * Math.PI / 180;
	};
	Math.degrees = function(radians) {
	  return radians * 180 / Math.PI;
	};

	function sortFunction(a, b) {
	    if (a["distance"] === b["distance"]) {
	        return 0;
	    }
	    else {
	        return (a["distance"] < b["distance"]) ? -1 : 1;
	    }
	}

	var myObj = {}
	var searchData = [];
	var numChild;
	var inc = 0;
	$http.get( service+"?action=geolocaliser&userID="+userID ).success(function(geo){        
        numChild = 	geo.length;           
        geo.forEach(function (user) {        	
        	$http.get( service+"?action=getCoords&userID="+user.userID ).success(function(coords){        		
        		var latitudeTo = coords.userLat;
        		var longitudeTo = coords.userLong;
	        	var theta = longitudeFrom - longitudeTo;
				var dist = Math.sin(Math.radians(latitudeFrom)) * Math.sin(Math.radians(latitudeTo)) +  Math.cos(Math.radians(latitudeFrom)) * Math.cos(Math.radians(latitudeTo)) * Math.cos(Math.radians(theta));
			    dist = Math.acos(dist);
			    dist = Math.degrees(dist);
			    var miles = dist * 60 * 1.1515;
			    var km = parseInt(miles * 1.609344);
        		myObj = user;
				myObj['distance'] = km;        		
				searchData.push(myObj);
				inc ++;				
        		if(inc == numChild){
					$scope.users = searchData.sort(sortFunction);								
	            }
		    });
		});
    });	

	var map;
	$http.get( service+"?action=getCoords&userID="+userID ).success(function(data){	   
		$.getScript("https://maps.google.com/maps/api/js?key=AIzaSyDnOIKVsumLGRNl2d2A9oCA-vE1ya9Zk3o&libraries=geometry", function () {
			initialize();
	    	$http.get( service+"?action=geolocaliser&userID="+userID ).success(function(geo){        
		        numChild = 	geo.length;           
		        geo.forEach(function (user) {        	
		        	$http.get( service+"?action=getCoords&userID="+user.userID ).success(function(coords){        		
		        		var latitudeTo = coords.userLat;
		        		var longitudeTo = coords.userLong;
			        	var theta = longitudeFrom - longitudeTo;
						var dist = Math.sin(Math.radians(latitudeFrom)) * Math.sin(Math.radians(latitudeTo)) +  Math.cos(Math.radians(latitudeFrom)) * Math.cos(Math.radians(latitudeTo)) * Math.cos(Math.radians(theta));
					    dist = Math.acos(dist);
					    dist = Math.degrees(dist);
					    var miles = dist * 60 * 1.1515;
					    var km = parseInt(miles * 1.609344);
		        		placeMarker(latitudeTo, longitudeTo, user.userName, user.userVille);
				    });
				});
		    });	
		});                    	
    });	

	function initialize() {		
		var latlng = new google.maps.LatLng( latitudeFrom, longitudeFrom);
		var mapOptions =
		{
			zoom: 2,
			center: latlng,
			mapTypeId: google.maps.MapTypeId.ROADMAP
		};
		map = new google.maps.Map(document.getElementById("map"), mapOptions);	
		var ired = 'img/ired.png';
		var marker = new google.maps.Marker({
			map: map,
			icon: ired,
			position: latlng
		});
		var infowindow = new google.maps.InfoWindow();
		infowindow.setContent(userName);
		google.maps.event.addListener(marker, 'click', function() {
			infowindow.open(map, marker);
		});
		
	}
	function placeMarker(lat, long, username, userville) {
		var location = new google.maps.LatLng(lat, long);
		var igreen = 'img/igreen.png';
		var marker = new google.maps.Marker({
			map: map,
			icon: igreen,
			position: location
		});
		var infowindow = new google.maps.InfoWindow();
		infowindow.setContent(username+',<br>'+userville);
		google.maps.event.addListener(marker, 'click', function() {
			infowindow.open(map, marker);
		});
	}
}]);