'use strict';

askitApp.controller('entrainementArabeCtrl', ['$scope', '$state', function($scope, $state) {		

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
   
	var arrayInc;	
	var startTime, stopTime, nextMp3;
	var count = 0;
	var data = [];
	var arr = [];
	var cleA = 0;
	var checkIfPlayable = 0;
	$(function () {
        function dumpInArray(){
           arr = [];
           $('.modal-choices input[type="checkbox"]:checked').each(function(){
              arr.push($(this).val());
           });
           return arr; 
        }

        $('.select-test').click(function () { 
        	cleA = 0; 
          	arr = [];
           $('.modal-choices input[type="checkbox"]:checked').each(function(){
           	  checkIfPlayable = 1;
              arr.push($(this).val());
              if($(this).val() == 1){
              	txt1 = 1;
              	txt1e = 1;
              }else if($(this).val() == 2){
              	txt2 = 1;              
              	txt2e = 1;              
              }else if($(this).val() == 3){
              	txt3 = 1;              
              	txt3e = 1;              
              }else if($(this).val() == 4){
              	txt4 = 1;              
              	txt4e = 1;              
              }else if($(this).val() == 5){
              	txt5 = 1;              
              	txt5e = 1;              
              }else if($(this).val() == 6){
              	txt6 = 1;              
              	txt6e = 1;              
              }else if($(this).val() == 7){
              	txt7 = 1;              
              	txt7e = 1;              
              }else if($(this).val() == 8){
              	txt8 = 1;              
              	txt8e = 1;              
              }else if($(this).val() == 9){
              	txt9 = 1;              
              	txt9e = 1;              
              }else if($(this).val() == 10){
              	txt10 = 1;              
              	txt10e = 1;              
              }else if($(this).val() == 11){
              	txt11 = 1;              
              	txt11e = 1;              
              }

           });
           // console.log(arr);
           if(checkIfPlayable == 1){
           		playTxt1();
           }           
        });        

        $('.stop-btn').click(function () {
            audio.pause();
            txt1 = 0;	 txt1e = 0;
			txt2 = 0;	 txt2e = 0;
			txt3 = 0;	txt3e = 0;
			txt4 = 0;	txt4e = 0;	
			txt5 = 0;	txt5e = 0;
			txt6 = 0;	txt6e = 0;
			txt7 = 0;	txt7e = 0;
			txt8 = 0;	txt8e = 0;
			txt9 = 0;	txt9e = 0;
			txt10 = 0;	txt10e = 0;
			txt11 = 0;	txt11e = 0;
			
    		cleA = 1;
    		document.getElementById('pause').style.display = "none";
    		document.getElementById('play').style.display = "inline-block";

        });        
     });
	
	$('.play-audio').click(function () {           
           playAtThisTime();
    });

	var audio = document.getElementById('officePlayer');
	function playAtThisTime(nextMp3){
		audio.src = "Media/Memo/Arabe/"+nextMp3+".mp3";
		audio.play();
	}

	function play(){
		audio.src = "Media/Memo/Arabe/"+mp3_part+".mp3";
		audio.play();
	}
	 
	var txt1 = 0;	var txt1e = 0;
	var txt2 = 0;	var txt2e = 0;
	var txt3 = 0;	var txt3e = 0;
	var txt4 = 0;	var txt4e = 0;	
	var txt5 = 0;	var txt5e = 0;
	var txt6 = 0;	var txt6e = 0;
	var txt7 = 0;	var txt7e = 0;
	var txt8 = 0;	var txt8e = 0;
	var txt9 = 0;	var txt9e = 0;
	var txt10 = 0;	var txt10e = 0;
	var txt11 = 0;	var txt11e = 0;

	var mp3_part;

	var page = 1;
	var nbPage = 30;
	showPage(page);
	function showPage(page){
		console.log(page);
		// for (var i = 0; i <= nbPage; i++) {
		// 	if(i == page){
		// 		$('#ecran'+i).show();
		// 	}else{
		// 		$('#ecran'+i).hide();
		// 	}
		// }		
	}
	$('.next').click(function () {   
		if(page < nbPage){
			page = page + 1;
			showPage(page);
		}
    }); 
    $('.previous').click(function () {      
		if(page != 1){
			page = page - 1;
			showPage(page);
		}else{
			page = page;
			showPage(page);
		}
    }); 
    $('.begin').click(function () {   
		page = 1;
		showPage(page);
    }); 
    $('.end').click(function () {   
		page = nbPage;
		showPage(page);
    });  

	 function playTxt1(){
	 	if(txt1 == 1){
	 		mp3_part = "MM-Lo-Ab-1a";
	 		showPage(1);
	 		play();
	 	}else{
	 		mp3_part = "MM-Lo-Ab-2a";
	 		playTxt2();
	 	}
	 }
	 
	 function playTxt2(){
	 	if(txt2 == 1){
	 		showPage(1);
	 		mp3_part = "MM-Lo-Ab-2a";	 
	 		play();
	 	}else{
	 		mp3_part = "MM-Lo-Ab-3a";
	 		playTxt3();
	 	}
	 }	

	 function playTxt3(){
	 	if(txt3 == 1){	
	 		showPage(2);
	 		mp3_part = "MM-Lo-Ab-3a"; 		 
	 		play();
	 	}else{
	 		mp3_part = "MM-Lo-Ab-4a";
	 		playTxt4();
	 	}
	 }

	 function playTxt4(){
	 	if(txt4 == 1){
	 		showPage(2);
	 		mp3_part = "MM-Lo-Ab-4a"; 		 
	 		play();
	 	}else{
	 		mp3_part = "MM-Lo-Ab-5a";
	 		playTxt5();
	 	}
	 }

	 function playTxt5(){
	 	if(txt5 == 1){
	 		showPage(2);
	 		mp3_part = "MM-Lo-Ab-5a"; 		 
	 		play();
	 	}else{
	 		mp3_part = "MM-Lo-Ab-6a";
	 		playTxt6();
	 	}
	 }

	 function playTxt6(){
	 	if(txt6 == 1){
	 		showPage(2);
	 		mp3_part = "MM-Lo-Ab-6a"; 		 
	 		play();
	 	}else{
	 		mp3_part = "MM-Lo-Ab-7a";
	 		playTxt7();
	 	}
	 }

	 function playTxt7(){
	 	if(txt7 == 1){
	 		showPage(2);
	 		mp3_part = "MM-Lo-Ab-7a"; 		 
	 		play();
	 	}else{
	 		mp3_part = "MM-Lo-Ab-8a";
	 		playTxt8();
	 	}
	 }

	 function playTxt8(){
	 	if(txt8 == 1){
	 		showPage(2);
	 		mp3_part = "MM-Lo-Ab-8a"; 		 
	 		play();
	 	}else{
	 		mp3_part = "MM-Lo-Ab-9a";
	 		playTxt9();
	 	}
	 }

	 function playTxt9(){
	 	if(txt9 == 1){
	 		showPage(2);
	 		mp3_part = "MM-Lo-Ab-9a"; 		 
	 		play();
	 	}else{
	 		mp3_part = "MM-Lo-Ab-1b";
	 		playTxt1e();
	 	}
	 }
	
/////////////////////////////////////////////

	 function playTxt1e(){
	 	if(txt1e == 1){
	 		mp3_part = "MM-Lo-Ab-1b";
	 		showPage(1);
	 		play();
	 	}else{
	 		mp3_part = "MM-Lo-Ab-2b";
	 		playTxt2e();
	 	}
	 }

	 function playTxt2e(){
	 	if(txt2e == 1){
	 		showPage(1);
	 		mp3_part = "MM-Lo-Ab-2b";
	 		play();
	 	}else{
	 		mp3_part = "MM-Lo-Ab-3b";
	 		playTxt3e();
	 	}
	 }

	 function playTxt3e(){
	 	if(txt3e == 1){
	 		showPage(1);
	 		mp3_part = "MM-Lo-Ab-3b";
	 		play();
	 	}else{
	 		mp3_part = "MM-Lo-Ab-4b";
	 		playTxt4e();
	 	}
	 }

	 function playTxt4e(){
	 	if(txt4e == 1){
	 		showPage(1);
	 		mp3_part = "MM-Lo-Ab-4b";
	 		play();
	 	}else{
	 		mp3_part = "MM-Lo-Ab-5b";
	 		playTxt5e();
	 	}
	 }

	 function playTxt5e(){
	 	if(txt5e == 1){
	 		showPage(1);
	 		mp3_part = "MM-Lo-Ab-5b";
	 		play();
	 	}else{
	 		mp3_part = "MM-Lo-Ab-6b";
	 		playTxt6e();
	 	}
	 }

	 function playTxt6e(){
	 	if(txt6e == 1){
	 		showPage(1);
	 		mp3_part = "MM-Lo-Ab-6b";
	 		play();
	 	}else{
	 		mp3_part = "MM-Lo-Ab-7b";
	 		playTxt7e();
	 	}
	 }

	 function playTxt7e(){
	 	if(txt7e == 1){
	 		showPage(1);
	 		mp3_part = "MM-Lo-Ab-7b";
	 		play();
	 	}else{
	 		mp3_part = "MM-Lo-Ab-8b";
	 		playTxt8e();
	 	}
	 }

	 function playTxt8e(){
	 	if(txt8e == 1){
	 		showPage(1);
	 		mp3_part = "MM-Lo-Ab-8b";
	 		play();
	 	}else{
	 		mp3_part = "MM-Lo-Ab-9b";
	 		playTxt9e();
	 	}
	 }


	 function playTxt9e(){
	 	if(txt8e == 1){
	 		showPage(1);
	 		mp3_part = "MM-Lo-Ab-9b";
	 		play();
	 	}else{
	 		mp3_part = "MM-Lo-Ab-1a";
			wait(800);	 		 		
	 		$('.select-test').click();
	 	}
	 }

	var audio2 = document.getElementById('officePlayer');
	audio2.volume = 1;	
	officePlayer.ontimeupdate=function(){
		var currentTime = officePlayer.currentTime;
		if(cleA == 0){
	      document.getElementById('pause').style.display = "inline-block";
	      document.getElementById('play').style.display = "none";
	    }
		if(currentTime >= audio2.duration){
			console.log(mp3_part);
			if(mp3_part == "MM-Lo-Ab-1a"){
				playTxt2();
			}else if(mp3_part == "MM-Lo-Ab-2a"){
				playTxt3();
			}else if(mp3_part == "MM-Lo-Ab-3a"){
				playTxt4();
			}else if(mp3_part == "MM-Lo-Ab-4a"){
				playTxt5();
			}else if(mp3_part == "MM-Lo-Ab-5a"){
				playTxt6();
			}else if(mp3_part == "MM-Lo-Ab-6a"){
				playTxt7();
			}else if(mp3_part == "MM-Lo-Ab-7a"){
				playTxt8();
			}else if(mp3_part == "MM-Lo-Ab-8a"){
				playTxt9();
			}
			else if(mp3_part == "MM-Lo-Ab-9a"){
				playTxt1e();
			}
			
			/////////////////
			else if(mp3_part == "MM-Lo-Ab-1b"){
				playTxt2e();
			}else if(mp3_part == "MM-Lo-Ab-2b"){
				playTxt3e();
			}else if(mp3_part == "MM-Lo-Ab-3b"){
				playTxt4e();
			}else if(mp3_part == "MM-Lo-Ab-4b"){
				playTxt5e();
			}else if(mp3_part == "MM-Lo-Ab-5b"){
				playTxt6e();
			}else if(mp3_part == "MM-Lo-Ab-6b"){
				playTxt7e();
			}else if(mp3_part == "MM-Lo-Ab-7b"){
				playTxt8e();
			}else if(mp3_part == "MM-Lo-Ab-8b"){
				playTxt9e();
			}
			else if(mp3_part == "MM-Lo-Ab-9b"){
				wait(800);
				$('.select-test').click();
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