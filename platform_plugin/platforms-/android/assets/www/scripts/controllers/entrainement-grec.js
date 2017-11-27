'use strict';

askitApp.controller('entrainementGrecCtrl', ['$scope', '$state', function($scope, $state) {		

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
    
	var prologue_audio = ['MM-Ch-Jn-01-01-a1.mp3', 'MM-Ch-Jn-01-01-a2.mp3', 'MM-Ch-Jn-01-01-b1.mp3', 'MM-Ch-Jn-01-01-b2.mp3', 'MM-Ch-Jn-01-01-c1.mp3', 'MM-Ch-Jn-01-01-c2.mp3', 'MM-Ch-Jn-01-01-d1.mp3', 'MM-Ch-Jn-01-01-d2.mp3', 'MM-Ch-Jn-01-01-e1.mp3', 'MM-Ch-Jn-01-01-e2.mp3', 'MM-Ch-Jn-01-01-f1.mp3', 'MM-Ch-Jn-01-01-f2.mp3', 'MM-Ch-Jn-01-02-a1.mp3', 'MM-Ch-Jn-01-02-a2.mp3', 'MM-Ch-Jn-01-02-b1.mp3', 'MM-Ch-Jn-01-02-b2.mp3', 'MM-Ch-Jn-01-03-a1.mp3', 'MM-Ch-Jn-01-03-a2.mp3', 'MM-Ch-Jn-01-03-b1.mp3', 'MM-Ch-Jn-01-03-b2.mp3', 'MM-Ch-Jn-01-03-c1.mp3', 'MM-Ch-Jn-01-03-c2.mp3', 'MM-Ch-Jn-01-03-d1.mp3', 'MM-Ch-Jn-01-03-d2.mp3', 'MM-Ch-Jn-01-04-a1.mp3', 'MM-Ch-Jn-01-04-a2.mp3', 'MM-Ch-Jn-01-04-b1.mp3', 'MM-Ch-Jn-01-04-b2.mp3', 'MM-Ch-Jn-01-04-c1.mp3', 'MM-Ch-Jn-01-04-c2.mp3', 'MM-Ch-Jn-01-04-d1.mp3', 'MM-Ch-Jn-01-04-d2.mp3', 'MM-Ch-Jn-01-05-a1.mp3', 'MM-Ch-Jn-01-05-a2.mp3', 'MM-Ch-Jn-01-05-b1.mp3', 'MM-Ch-Jn-01-05-b2.mp3', 'MM-Ch-Jn-01-05-c1.mp3', 'MM-Ch-Jn-01-05-c2.mp3', 'MM-Ch-Jn-01-05-d1.mp3', 'MM-Ch-Jn-01-05-d2.mp3', 'MM-Ch-Jn-01-06-a1.mp3', 'MM-Ch-Jn-01-06-a2.mp3', 'MM-Ch-Jn-01-06-b1.mp3', 'MM-Ch-Jn-01-06-b2.mp3', 'MM-Ch-Jn-01-06-c1.mp3', 'MM-Ch-Jn-01-06-c2.mp3', 'MM-Ch-Jn-01-06-d1.mp3', 'MM-Ch-Jn-01-06-d2.mp3', 'MM-Ch-Jn-01-07-a1.mp3', 'MM-Ch-Jn-01-07-a2.mp3', 'MM-Ch-Jn-01-07-b1.mp3', 'MM-Ch-Jn-01-07-b2.mp3', 'MM-Ch-Jn-01-07-c1.mp3', 'MM-Ch-Jn-01-07-c2.mp3', 'MM-Ch-Jn-01-07-d1.mp3', 'MM-Ch-Jn-01-07-d2.mp3', 'MM-Ch-Jn-01-08-a1.mp3', 'MM-Ch-Jn-01-08-a2.mp3', 'MM-Ch-Jn-01-08-b1.mp3', 'MM-Ch-Jn-01-08-b2.mp3', 'MM-Ch-Jn-01-08-c1.mp3', 'MM-Ch-Jn-01-08-c2.mp3', 'MM-Ch-Jn-01-08-d1.mp3', 'MM-Ch-Jn-01-08-d2.mp3', 'MM-Ch-Jn-01-09-a1.mp3', 'MM-Ch-Jn-01-09-a2.mp3', 'MM-Ch-Jn-01-09-b1.mp3', 'MM-Ch-Jn-01-09-b2.mp3', 'MM-Ch-Jn-01-09-c1.mp3', 'MM-Ch-Jn-01-09-c2.mp3', 'MM-Ch-Jn-01-09-d1.mp3', 'MM-Ch-Jn-01-09-d2.mp3', 'MM-Ch-Jn-01-10-a1.mp3', 'MM-Ch-Jn-01-10-a2.mp3', 'MM-Ch-Jn-01-10-b1.mp3', 'MM-Ch-Jn-01-10-b2.mp3', 'MM-Ch-Jn-01-10-c1.mp3', 'MM-Ch-Jn-01-10-c2.mp3', 'MM-Ch-Jn-01-10-d1.mp3', 'MM-Ch-Jn-01-10-d2.mp3', 'MM-Ch-Jn-01-11-a1.mp3', 'MM-Ch-Jn-01-11-a2.mp3', 'MM-Ch-Jn-01-11-b1.mp3', 'MM-Ch-Jn-01-11-b2.mp3', 'MM-Ch-Jn-01-11-c1.mp3', 'MM-Ch-Jn-01-11-c2.mp3', 'MM-Ch-Jn-01-11-d1.mp3', 'MM-Ch-Jn-01-11-d2.mp3', 'MM-Ch-Jn-01-12-a1.mp3', 'MM-Ch-Jn-01-12-a2.mp3', 'MM-Ch-Jn-01-12-b1.mp3', 'MM-Ch-Jn-01-12-b2.mp3', 'MM-Ch-Jn-01-12-c1.mp3', 'MM-Ch-Jn-01-12-c2.mp3', 'MM-Ch-Jn-01-12-d1.mp3', 'MM-Ch-Jn-01-12-d2.mp3', 'MM-Ch-Jn-01-12-e1.mp3', 'MM-Ch-Jn-01-12-e2.mp3', 'MM-Ch-Jn-01-12-g1.mp3', 'MM-Ch-Jn-01-12-g2.mp3', 'MM-Ch-Jn-01-13-a1.mp3', 'MM-Ch-Jn-01-13-a2.mp3', 'MM-Ch-Jn-01-13-b1.mp3', 'MM-Ch-Jn-01-13-b2.mp3', 'MM-Ch-Jn-01-13-c1.mp3', 'MM-Ch-Jn-01-13-c2.mp3', 'MM-Ch-Jn-01-13-d1.mp3', 'MM-Ch-Jn-01-13-d2.mp3', 'MM-Ch-Jn-01-13-e1.mp3', 'MM-Ch-Jn-01-13-e2.mp3', 'MM-Ch-Jn-01-13-f1.mp3', 'MM-Ch-Jn-01-13-f2.mp3', 'MM-Ch-Jn-01-14-a1.mp3', 'MM-Ch-Jn-01-14-a2.mp3', 'MM-Ch-Jn-01-14-b1.mp3', 'MM-Ch-Jn-01-14-b2.mp3', 'MM-Ch-Jn-01-14-c1.mp3', 'MM-Ch-Jn-01-14-c2.mp3', 'MM-Ch-Jn-01-14-d1.mp3', 'MM-Ch-Jn-01-14-d2.mp3', 'MM-Ch-Jn-01-14-e1.mp3', 'MM-Ch-Jn-01-14-e2.mp3', 'MM-Ch-Jn-01-14-f1.mp3', 'MM-Ch-Jn-01-14-f2.mp3', 'MM-Ch-Jn-01-14-g1.mp3', 'MM-Ch-Jn-01-14-g2.mp3', 'MM-Ch-Jn-01-14-h1.mp3', 'MM-Ch-Jn-01-14-h2.mp3', 'MM-Ch-Jn-01-14-i1.mp3', 'MM-Ch-Jn-01-14-i2.mp3', 'MM-Ch-Jn-01-zz-a1.mp3', 'MM-Ch-Jn-01-zz-a2.mp3', 'MM-Ch-Jn-01-zz-b1.mp3', 'MM-Ch-Jn-01-zz-b2.mp3'];
	var prologue_image = ['MM-Ch-Jn-01-01-a1.gif', 'MM-Ch-Jn-01-01-a2.gif', 'MM-Ch-Jn-01-01-b1.gif', 'MM-Ch-Jn-01-01-b2.gif', 'MM-Ch-Jn-01-01-c1.gif', 'MM-Ch-Jn-01-01-c2.gif', 'MM-Ch-Jn-01-01-d1.gif', 'MM-Ch-Jn-01-01-d2.gif', 'MM-Ch-Jn-01-01-e1.gif', 'MM-Ch-Jn-01-01-e2.gif', 'MM-Ch-Jn-01-01-f1.gif', 'MM-Ch-Jn-01-01-f2.gif', 'MM-Ch-Jn-01-02-a1.gif', 'MM-Ch-Jn-01-02-a2.gif', 'MM-Ch-Jn-01-02-b1.gif', 'MM-Ch-Jn-01-02-b2.gif', 'MM-Ch-Jn-01-03-a1.gif', 'MM-Ch-Jn-01-03-a2.gif', 'MM-Ch-Jn-01-03-b1.gif', 'MM-Ch-Jn-01-03-b2.gif', 'MM-Ch-Jn-01-03-c1.gif', 'MM-Ch-Jn-01-03-c2.gif', 'MM-Ch-Jn-01-03-d1.gif', 'MM-Ch-Jn-01-03-d2.gif', 'MM-Ch-Jn-01-04-a1.gif', 'MM-Ch-Jn-01-04-a2.gif', 'MM-Ch-Jn-01-04-b1.gif', 'MM-Ch-Jn-01-04-b2.gif', 'MM-Ch-Jn-01-04-c1.gif', 'MM-Ch-Jn-01-04-c2.gif', 'MM-Ch-Jn-01-04-d1.gif', 'MM-Ch-Jn-01-04-d2.gif', 'MM-Ch-Jn-01-05-a1.gif', 'MM-Ch-Jn-01-05-a2.gif', 'MM-Ch-Jn-01-05-b1.gif', 'MM-Ch-Jn-01-05-b2.gif', 'MM-Ch-Jn-01-05-c1.gif', 'MM-Ch-Jn-01-05-c2.gif', 'MM-Ch-Jn-01-05-d1.gif', 'MM-Ch-Jn-01-05-d2.gif', 'MM-Ch-Jn-01-06-a1.gif', 'MM-Ch-Jn-01-06-a2.gif', 'MM-Ch-Jn-01-06-b1.gif', 'MM-Ch-Jn-01-06-b2.gif', 'MM-Ch-Jn-01-06-c1.gif', 'MM-Ch-Jn-01-06-c2.gif', 'MM-Ch-Jn-01-06-d1.gif', 'MM-Ch-Jn-01-06-d2.gif', 'MM-Ch-Jn-01-07-a1.gif', 'MM-Ch-Jn-01-07-a2.gif', 'MM-Ch-Jn-01-07-b1.gif', 'MM-Ch-Jn-01-07-b2.gif', 'MM-Ch-Jn-01-07-c1.gif', 'MM-Ch-Jn-01-07-c2.gif', 'MM-Ch-Jn-01-07-d1.gif', 'MM-Ch-Jn-01-07-d2.gif', 'MM-Ch-Jn-01-08-a1.gif', 'MM-Ch-Jn-01-08-a2.gif', 'MM-Ch-Jn-01-08-b1.gif', 'MM-Ch-Jn-01-08-b2.gif', 'MM-Ch-Jn-01-08-c1.gif', 'MM-Ch-Jn-01-08-c2.gif', 'MM-Ch-Jn-01-08-d1.gif', 'MM-Ch-Jn-01-08-d2.gif', 'MM-Ch-Jn-01-09-a1.gif', 'MM-Ch-Jn-01-09-a2.gif', 'MM-Ch-Jn-01-09-b1.gif', 'MM-Ch-Jn-01-09-b2.gif', 'MM-Ch-Jn-01-09-c1.gif', 'MM-Ch-Jn-01-09-c2.gif', 'MM-Ch-Jn-01-09-d1.gif', 'MM-Ch-Jn-01-09-d2.gif', 'MM-Ch-Jn-01-10-a1.gif', 'MM-Ch-Jn-01-10-a2.gif', 'MM-Ch-Jn-01-10-b1.gif', 'MM-Ch-Jn-01-10-b2.gif', 'MM-Ch-Jn-01-10-c1.gif', 'MM-Ch-Jn-01-10-c2.gif', 'MM-Ch-Jn-01-10-d1.gif', 'MM-Ch-Jn-01-10-d2.gif', 'MM-Ch-Jn-01-11-a1.gif', 'MM-Ch-Jn-01-11-a2.gif', 'MM-Ch-Jn-01-11-b1.gif', 'MM-Ch-Jn-01-11-b2.gif', 'MM-Ch-Jn-01-11-c1.gif', 'MM-Ch-Jn-01-11-c2.gif', 'MM-Ch-Jn-01-11-d1.gif', 'MM-Ch-Jn-01-11-d2.gif', 'MM-Ch-Jn-01-12-a1.gif', 'MM-Ch-Jn-01-12-a2.gif', 'MM-Ch-Jn-01-12-b1.gif', 'MM-Ch-Jn-01-12-b2.gif', 'MM-Ch-Jn-01-12-c1.gif', 'MM-Ch-Jn-01-12-c2.gif', 'MM-Ch-Jn-01-12-d1.gif', 'MM-Ch-Jn-01-12-d2.gif', 'MM-Ch-Jn-01-12-e1.gif', 'MM-Ch-Jn-01-12-e2.gif', 'MM-Ch-Jn-01-12-g1.gif', 'MM-Ch-Jn-01-12-g2.gif', 'MM-Ch-Jn-01-13-a1.gif', 'MM-Ch-Jn-01-13-a2.gif', 'MM-Ch-Jn-01-13-b1.gif', 'MM-Ch-Jn-01-13-b2.gif', 'MM-Ch-Jn-01-13-c1.gif', 'MM-Ch-Jn-01-13-c2.gif', 'MM-Ch-Jn-01-13-d1.gif', 'MM-Ch-Jn-01-13-d2.gif', 'MM-Ch-Jn-01-13-e1.gif', 'MM-Ch-Jn-01-13-e2.gif', 'MM-Ch-Jn-01-13-f1.gif', 'MM-Ch-Jn-01-13-f2.gif', 'MM-Ch-Jn-01-14-a1.gif', 'MM-Ch-Jn-01-14-a2.gif', 'MM-Ch-Jn-01-14-b1.gif', 'MM-Ch-Jn-01-14-b2.gif', 'MM-Ch-Jn-01-14-c1.gif', 'MM-Ch-Jn-01-14-c2.gif', 'MM-Ch-Jn-01-14-d1.gif', 'MM-Ch-Jn-01-14-d2.gif', 'MM-Ch-Jn-01-14-e1.gif', 'MM-Ch-Jn-01-14-e2.gif', 'MM-Ch-Jn-01-14-f1.gif', 'MM-Ch-Jn-01-14-f2.gif', 'MM-Ch-Jn-01-14-g1.gif', 'MM-Ch-Jn-01-14-g2.gif', 'MM-Ch-Jn-01-14-h1.gif', 'MM-Ch-Jn-01-14-h2.gif', 'MM-Ch-Jn-01-14-i1.gif', 'MM-Ch-Jn-01-14-i2.gif'];

	var priere = {
        "1":"MM-Ch-Jn-01-01-a1",
        "2":"MM-Ch-Jn-01-01-a2",
        "3":"MM-Ch-Jn-01-01-b1",
        "4":"MM-Ch-Jn-01-01-b2",
        "5":"MM-Ch-Jn-01-01-c1",  
        "6":"MM-Ch-Jn-01-01-c2"   
	};

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
              }
           });
           // console.log(arr);
           if(checkIfPlayable == 1){
           		playTxt1();
           }           
        });        
   //      $('.select-roles').click(function () {   
   //        	count = 0;                   
   //        	data = dumpInArray();
			// doAudio();
   //      });   		
        $('.stop-btn').click(function () {
            audio.pause();
            txt1 = 0;	 txt1e = 0;
			txt2 = 0;	 txt2e = 0;
			txt3 = 0;	txt3e = 0;
			txt4 = 0;	txt4e = 0;	
			txt5 = 0;	txt5e = 0;
			txt6 = 0;	txt6e = 0;
			txt7 = 0;	txt7e = 0;
			
    		cleA = 1;
    		document.getElementById('pause').style.display = "none";
    		document.getElementById('play').style.display = "inline-block";

        });        
     });

	function doAudio(){
		nextMp3 = priere[data[count]];    	
		console.log(nextMp3);  		
		playAtThisTime(nextMp3);
	}  

	$('.play-audio').click(function () {           
           playAtThisTime();
    });

	var audio = document.getElementById('officePlayer');	
	function playAtThisTime(nextMp3){
		audio.src = "Media/Memo/Grec/"+nextMp3+".mp3";
		audio.play();
	}	

	function play(){				
		audio.src = "Media/Memo/Grec/"+mp3_part+".mp3";
		audio.play();
	}	
	 
	var txt1 = 0;	var txt1e = 0;
	var txt2 = 0;	var txt2e = 0;
	var txt3 = 0;	var txt3e = 0;
	var txt4 = 0;	var txt4e = 0;	
	var txt5 = 0;	var txt5e = 0;
	var txt6 = 0;	var txt6e = 0;
	var txt7 = 0;	var txt7e = 0;

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
	 		mp3_part = "MM-Litanie-Gre-1a";		 
	 		showPage(1);
	 		play();
	 	}else{
	 		mp3_part = "MM-Litanie-Gre-2a";
	 		playTxt2();
	 	}
	 }
	 
	 function playTxt2(){
	 	if(txt2 == 1){
	 		showPage(1);
	 		mp3_part = "MM-Litanie-Gre-2a";	 
	 		play();
	 	}else{
	 		mp3_part = "MM-Litanie-Gre-3a";
	 		playTxt3();
	 	}
	 }	

	 function playTxt3(){
	 	if(txt3 == 1){	
	 		showPage(2);
	 		mp3_part = "MM-Litanie-Gre-3a"; 		 
	 		play();
	 	}else{
	 		mp3_part = "MM-Litanie-Gre-1b";
	 		playTxt1e();
	 	}
	 }
	
/////////////////////////////////////////////

	 function playTxt1e(){
	 	if(txt1e == 1){
	 		mp3_part = "MM-Litanie-Gre-1b";
	 		showPage(1);
	 		play();
	 	}else{
	 		mp3_part = "MM-Litanie-Gre-2b";
	 		playTxt2e();
	 	}
	 }

	 function playTxt2e(){
	 	if(txt2e == 1){
	 		showPage(1);
	 		mp3_part = "MM-Litanie-Gre-2b";
	 		play();
	 	}else{
	 		mp3_part = "MM-Litanie-Gre-3b";
	 		playTxt3e();
	 	}
	 }

	 function playTxt3e(){
	 	if(txt3e == 1){	
	 		mp3_part = "MM-Litanie-Gre-3b"; 	
	 		showPage(4);	 
	 		play();
	 	}else{
			mp3_part = "MM-Litanie-Gre-1a";
			wait(800);
	 		// playTxt1();
            console.log(arr);	 		
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
			if(mp3_part == "MM-Litanie-Gre-1a"){
				playTxt2();
			}else if(mp3_part == "MM-Litanie-Gre-2a"){
				playTxt3();
			}else if(mp3_part == "MM-Litanie-Gre-3a"){
				playTxt1e();
			}
			/////////////////
			else if(mp3_part == "MM-Litanie-Gre-1b"){
				playTxt2e();
			}else if(mp3_part == "MM-Litanie-Gre-2b"){
				playTxt3e();
			}else if(mp3_part == "MM-Litanie-Gre-3b"){
				wait(800);
           		console.log(arr);
				$('.select-test').click();
			}

		}
		// if(currentTime >= audio2.duration){
		// 	count = count + 1;	
		// 	// wait(200);
		// 	if(count < data.length){				
		// 		doAudio();
		// 	}else{
		// 		if(audio.volume == 1){
		// 			audio.volume = 0.2;
		// 		}else{
		// 			audio.volume = 1;
		// 		}
		// 		wait(800);
		// 		$('.select-roles').click();
		// 	}
		// }
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