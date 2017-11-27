'use strict';

askitApp.controller('entrainementChinoisCtrl', ['$scope', '$state', function($scope, $state) {	
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
    
	var priere = {
        "1":"MM-Cn-MV-01",
        "2":"MM-Cn-MV-02",
        "3":"MM-Cn-MV-03",
        "4":"MM-Cn-MV-04",
        "5":"MM-Cn-MV-05",
        "6":"MM-Cn-MV-06",
        "7":"MM-Cn-MV-07",
        "8":"MM-Cn-MV-08",
        "9":"MM-Cn-MV-09",
        "10":"MM-Cn-MV-10",
        "11":"MM-Cn-MV-11",        
        "12":"MM-Cn-MV-12",        
        "13":"MM-Cn-MV-13",        
        "14":"MM-Cn-MV-14",        
        "15":"MM-Cn-MV-15",        
        "16":"MM-Cn-MV-16",        
        "17":"MM-Cn-MV-17"       
	};

	var arrayInc;	
	var startTime, stopTime, nextMp3;
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
			doAudio();
        });
        $('.stop-btn').click(function () {   
           audio.pause();
        });        
     });

	function doAudio(){
		nextMp3 = priere[data[count]];    	
		// console.log(nextMp3);  		
		playAtThisTime(nextMp3);
	}  

	$('.play-audio').click(function () {           
           playAtThisTime();
    });

	var audio = document.getElementById('officePlayer');	
	function playAtThisTime(nextMp3){				
		audio.src = "Mere-vertueuse/"+nextMp3+".mp3";
		audio.play();
	}		

	officePlayer.ontimeupdate=function(){    	
		var currentTime = officePlayer.currentTime;
		var audio2 = document.getElementById('officePlayer');
		if(currentTime >= audio2.duration){
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