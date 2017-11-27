'use strict';

askitApp.controller('inscriptionCtrl', ['$scope', '$timeout', '$http', '$state', function($scope, $timeout, $http, $state) {
                                        
       $scope.gotoCarte = function () {
          $state.go('carte', null, { reload: true });
       }
       document.addEventListener('deviceready', function () {
         screen.orientation.lock('portrait');
       });
                                        
                                    
        $scope.nextStep = function() {
                                        
			var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ ;
			if($('#txtemail').val().match(re) && $('#txtemail').val() !='' && $('#txtpass').val() == $('#checkpass').val() && $('#txtpass').val() != ""){
                          
				$http.get(service+"?action=check_email&email="+$('#txtemail').val()).success(function(data){
                
		            if(parseInt(data) > 0){
						$('#email-exits').css('display', 'inline-block');
						$('#success').css('display', 'none');
		            }else{
		            	$('#email-exits').css('display', 'none');
						$('#success').css('display', 'none');
		            	$('#part1').css('display', 'none');
						$('#part2').css('display', 'block');
		            }
		        });
          }else{
            alert("le format de votre email n'est pas valide ou votre mot de passe ne correspond pas!");
          }
                          
		}
                          
		$scope.signUp = function(){
			if($('#datenaissance').val() !='' && $('#txtuname').val() !=''){				
				$http.get( service+"?action=register&uname="+$('#txtuname').val()+"&email="+$('#txtemail').val()+"&upass="+$('#txtpass').val()+"&ville="+$('#villePays').val()+"&mystere="+$('#devotion').val()+"&latitude="+$('#latitude').val()+"&longitude="+$('#longitude').val() ).success(function(data){
		            // console.log(data);
		            if(data == "success"){
		            	$("#signupMessag").click();
		            }
		        });						
			}      
		}
                          
    $.getScript("https://maps.google.com/maps/api/js?key=AIzaSyDnOIKVsumLGRNl2d2A9oCA-vE1ya9Zk3o&libraries=geometry", function () {                    
                    var geocoder;
                    var lat, lng, city, region, country;
                    geocoder = new google.maps.Geocoder();
                    if (navigator.geolocation) {
                    navigator.geolocation.getCurrentPosition(successFunction, errorFunction);
                    }
                    function successFunction(position) {
                    lat = position.coords.latitude;
                    lng = position.coords.longitude;
                    document.getElementById("latitude").value = lat;
                    document.getElementById("longitude").value = lng;                          
                    $scope.codeLatLng();                    
                    }
                    function errorFunction(){
                    console.log("Geocoder failed");                    
                    }
                    $scope.codeLatLng = function(){
                    var latlng = new google.maps.LatLng(lat, lng);
                    geocoder.geocode({'latLng': latlng}, function(results, status) {
                                     if (status == google.maps.GeocoderStatus.OK) {
                                     if (results[1]) {
                                     var indice=0;
                                     for (var j=0; j<results.length; j++)
                                     {
                                     if (results[j].types[0]=='locality')
                                     {
                                     indice=j;
                                     break;
                                     }
                                     }
                                     for (var i=0; i<results[j].address_components.length; i++)
                                     {
                                     if (results[j].address_components[i].types[0] == "locality") {
                                     city = results[j].address_components[i];
                                     }
                                     if (results[j].address_components[i].types[0] == "administrative_area_level_1") {
                                     region = results[j].address_components[i];
                                     }
                                     if (results[j].address_components[i].types[0] == "country") {
                                     country = results[j].address_components[i];
                                     }
                                     }
                                     var villePays = city.long_name + " "+ country.long_name;
                                     document.getElementById("villePays").value = villePays;                
                                     var geocoder_new_coords = new google.maps.Geocoder();    
                                     geocoder_new_coords.geocode({'address': villePays}, function(res, status) {      
                                                                 var lat1 = parseFloat(res[0].geometry.location.lat());
                                                                 var lng1 = parseFloat(res[0].geometry.location.lng()); 
                                                                 document.getElementById("latitude").value = lat1;  
                                                                 document.getElementById("longitude").value = lng1;                                                                    
                                                                 });  
                                     } else {                 
                                     }            
                                     } else {           
                                     }
                    });
              }  
    });

}]);
