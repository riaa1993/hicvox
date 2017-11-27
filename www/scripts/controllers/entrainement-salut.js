'use strict';

askitApp.controller('entrainementSalutCtrl', ['$scope', '$state', function($scope, $state) {	
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
    
	var caractere = getJson("Mere-vertueuse/salut/entrainement-caractere.json");
	var lettre = getJson("Mere-vertueuse/salut/entrainement-lettre.json");
	var marqueur = getJson("Mere-vertueuse/salut/marqueur-entrainement_.json");
	var priere = marqueur["je-vous-salue-marie"];

	var arrayInc;	
	var startTime, stopTime;
	var count = 0;
	var data = [];

	$(function () {
        function dumpInArray(){
           var arr = [];
           $('.modal-choices input[type="checkbox"]:checked').each(function(){
              arr.push($(this).val());
           });
           return arr; 
        }        
        $('.select-roles').click(function () {   
           count = 0;                   
           data = dumpInArray();
           // for (key in dumpInArray()){           	 
           // 	startTime = parseFloat(priere[dumpInArray()[key]]);
           // }
           // playAtThisTime(startTime);
           // console.log(dumpInArray().length);              
                      
			doAudio();
        });
        $('.stop-btn').click(function () {   
           audio.pause();
        });        
     });

	function doAudio(){
		startTime = parseFloat(priere[data[count]]);
    	arrayInc =  parseInt(data[count]) + 1;    			 
		stopTime = parseFloat(priere[arrayInc]) - 0.4;           		
		// console.log(startTime);  
		// console.log(stopTime);  
		playAtThisTime(startTime);
	}

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
  	
  	var key;
	for (key in priere){
		if(key != "psaume"){
			// $('.modal-choices').append("<table class='list-table'><tr><td>"+caractere["priere-chinoise"][key]+"</td></tr><tr><td>"+lettre["priere-chinoise"][key]+"</td></tr><tr><td><input type='checkbox' value="+key+"></td></tr></table>");
		}		
	}	

	$('.play-audio').click(function () {           
           playAtThisTime();
    });

	var audio = document.getElementById('officePlayer');	
	function playAtThisTime(startTime){					
		audio.currentTime = startTime;
		audio.play();
	}	

	officePlayer.ontimeupdate=function(){	
		var currentTime = officePlayer.currentTime;
		if(currentTime > stopTime){
			audio.pause();
			count = count + 1;
			if(count < data.length){
				doAudio();
			}else{				
				if(audio.volume == 1){
					audio.volume = 0.2;
				}else{
					audio.volume = 1;
				}
				wait(800);
				$('.select-roles').click();
			}
		}
	};

	
	function wait(ms){
		var start = new Date().getTime();
		var end = start;
		while(end < start + ms) {
			end = new Date().getTime();
		}
	}

  var full = 0;
  $(document).keyup(function(e) {     
      if(e.keyCode== 27) {
         escKey();
      } 
  });
  function escKey(){           

     if (document.exitFullscreen) {
          document.exitFullscreen();
      } else if (document.webkitExitFullscreen) {
          document.webkitExitFullscreen();
      } else if (document.mozCancelFullScreen) {
          document.mozCancelFullScreen();
      } else if (document.msExitFullscreen) {
          document.msExitFullscreen();
      }
      $(window).resize(function(){
        // $('#content-ecran').css({'position': 'relative'});
        $('#content-ecran').css({'height':'auto'});
     	$('#content-ecran').css({'width':'100%'});  

      });
     // $('#content-ecran').css({'position': 'relative'});
     $('#content-ecran').css({'height':'auto'});
     $('#content-ecran').css({'width':'100%'});  

     full = 0;
  }
  var i = document.getElementById('content-ecran');
  
  $scope.fullScreen = function(){
    if(full==0){    
      // console.log($(window).width());              

      if (i.requestFullscreen) {
          this.requestFullscreen();
      } else if (i.webkitRequestFullscreen) {
          i.webkitRequestFullscreen();
      } else if (i.mozRequestFullScreen) {
          i.mozRequestFullScreen();
      } else if (i.msRequestFullscreen) {
          i.msRequestFullscreen();
      }

      $(window).resize(function(){
        // $('#content-ecran').css({'position': 'fixed'});
        // $('#content-ecran').css({'top': '-10px'});
        // $('#content-ecran').css({'left': '0px'});
        $('#content-ecran').css({'display': 'flex'});
        $('#content-ecran').css({'flex-direction': 'column'});
        $('#content-ecran').css({'justify-content': 'center'});
        // $('#content-ecran').css({'align-items': 'center'});
        // $('#content-ecran').css({'z-index': '9999999'});
        $('#content-ecran').css({'height':($(window).height())+'px'});
        $('#content-ecran').css({'width':($(window).width())+'px'});
        // $('#content-ecran').css({'line-height': '1' });
        // $('#ecran').css({'width':'100%'});
        // $('#ecran').css({'height':'100%'});               

      });
     // $('#content-ecran').css({'position': 'fixed'});
     // $('#content-ecran').css({'top': '-20px'});
     // $('#content-ecran').css({'left': '0px'});
     $('#content-ecran').css({'display': 'flex'});
     $('#content-ecran').css({'flex-direction': 'column'});
     $('#content-ecran').css({'justify-content': 'center'});
     // $('#content-ecran').css({'align-items': 'center'});
     // $('#content-ecran').css({'z-index': '9999999'});
     $('#content-ecran').css({'height':($(window).height())+'px'});
     $('#content-ecran').css({'width':($(window).width())+'px'});     
     // $('#content-ecran').css({'line-height': '1' });
     // $('#ecran').css({'width':'100%'});                     
     // $('#ecran').css({'height':'100%'});                     
     full = 1;
    }else{
      escKey();
    }            
  }          

}]);