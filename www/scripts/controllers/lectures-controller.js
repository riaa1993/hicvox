'use strict';

askitApp.controller('lecturesCtrl', ['$scope', '$timeout', '$state', function($scope, $timeout, $state) {  
	$scope.gotoCarte = function () {
      $state.go('carte', null, { reload: true });
    }

    document.addEventListener('deviceready', function () {
        screen.orientation.lock('portrait');
    });
    
	function getJson(fileUrl){
      var result = null;
      $.ajax({
          async: false,
          url: fileUrl,
          data: "{data}",
          dataType: "json",
          success: function(data){
              result = data;
          }
      });
      return result;
    }

    $scope.getTheLune = function(sdate, year) {
		var customLunar = $scope.getObjects(lunar_data, 'L_date', sdate);	
		var lune;
		$.each(lunar_data, function(i, obj) {
			if(obj.L_date == sdate){			
				if(obj.annee == year){					
					lune = obj.lune;
				}
			}
		});
		return lune;
	}

    $scope.getObjects = function(obj, key, val) {	
		var newObj = false; 
		$.each(obj, function() {
			var testObject = this; 
			$.each(testObject, function(k,v) {              
				if(val == v && k == key) {
					newObj = testObject;
				}
			});
		});
		return newObj;
	}

	function temporal_cendre_careme(id){
		var tempo = $scope.getObjects(temporal_data, 'id', id);
		return tempo.Te_Date;
	}

	function daysInMonth(month,year) {
		return new Date(year, month, 0).getDate();
	}

	$scope.imageExists = function(url, callback) {
	    var img = new Image();
	    img.onload = function() { callback(true); };
	    img.onerror = function() { callback(false); };	    
	}

	function padout(number) { return (number < 10) ? '0' + number : number; }

	var todayDate = new Date();
	var annee = todayDate.getFullYear();
	var jour = todayDate.getDate();
	var mois = todayDate.getMonth() + 1;
	$scope.leAnnee = annee;
	$scope.leMois = padout(mois);
	$scope.leJour = padout(jour);
	var fete_mobile_data = getJson("json/meta_data_fete_mobile.json");
	var temporal_data = getJson("json/meta_data_ex_temporal.json");
	var lunar_data = getJson("json/meta_lunaire.json");		
	var feteMobile = $scope.getObjects(fete_mobile_data, 'annee', annee);
	var TS034 = feteMobile['TS034'];
	var array_TS034 = TS034.split("/");
    var date = null;
    var TS034_id = 96;	
    var nbmois_1, nbmois_2,  mois_reste_1, mois_reste_2, file;   
    if((array_TS034[0] <= mois) && (mois <= array_TS034[0] + 2))
	{		
	    if(mois == array_TS034[0]){      	     
	      date = temporal_cendre_careme(TS034_id + (jour - array_TS034[1]));
	    }
	    if(mois == array_TS034[0] + 1){
	      date = temporal_cendre_careme(TS034_id + (mois_reste_1 + jour));       
	    }    
	    if(mois == array_TS034[0] + 2){
	       date = temporal_cendre_careme(TS034_id + (mois_reste_2 + jour));
	    }
	}
	if(date == null || date == undefined || date == 'undefined'){
	}else{
		date = date.replace("T", "t");		 
	}
	var path_martyrologe = 'Media/Audio/Lectures-Or/';
  	var file = path_martyrologe+'oFr-Lec-'+date+'.MP3';  	  		
	var p2 = document.getElementById('heuresPlayer');
    p2.src = file; 
    p2.pause();
    var source = p2.src;
    var res = source.split("/");
    $("#fichiernom").append("<strong>"+ res[res.length-1] + "</strong><br/>" );
    var nextOffice = file;  
    var curOffice = 0;
    var officePlayer = document.getElementById('heuresPlayer');
    officePlayer.onended = function(){
      ++curOffice;
      if(curOffice < nextOffice.length){
          officePlayer.src = nextOffice[curOffice];
          var p2 = document.getElementById('officePlayer');
          var source = p2.src;
          var res = source.split("/");
          $("#fichiernom").append("<strong>"+ res[res.length-1] + "</strong><br/>" );
      }
    }



    var curOffice, nextOffice;
    var nbJ = daysInMonth(mois, annee);
    var db_date = 'S'+padout(mois)+padout(jour);
    var lune = $scope.getTheLune(db_date, parseInt(annee));
    var filename = 'Media/Audio/Martyrologe/Fr-Mar-Int-'+db_date+'.mp3';    
    var p2 = document.getElementById('officePlayer');
    p2.src = 'Media/Audio/Martyrologe/Fr-Mar-Int-'+db_date+'.mp3';	    
    p2.pause();	        
    var source = p2.src;
    var res = source.split("/");
    $.get(filename)
    .done(function() {  
      	$("#fichiernom").append("<strong>"+ res[res.length-1] + "</strong><br/>" );
	    var nextOffice = ['Media/Audio/Martyrologe/Fr-Mar-Int-'+db_date+'.mp3',
	                      'Media/Audio/Martyrologe/Lune-'+padout(lune)+'.mp3',
	                      'Media/Audio/Martyrologe/Fr-Mar-Txt-'+db_date+'.mp3'];
	    curOffice = 0;
	    officePlayer = document.getElementById('officePlayer');		    
		officePlayer.onended = function(){
			++curOffice;
			if(curOffice < nextOffice.length){
			    officePlayer.src = nextOffice[curOffice];
			    var p2 = document.getElementById('officePlayer');
			    var source = p2.src;
			    var res = source.split("/");
			    $("#fichiernom").append("<strong>"+ res[res.length-1] + "</strong><br/>" );
			}
		}
    }).fail(function() { })

}]);
