'use strict';

askitApp.controller('entrainementChaldeenCtrl', ['$scope', '$state', function($scope, $state) {		

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
              }else if($(this).val() == 12){
              	txt12 = 1;              
              	txt12e = 1;              
              }else if($(this).val() == 13){
              	txt13 = 1;              
              	txt13e = 1;              
              }else if($(this).val() == 14){
              	txt14 = 1;              
              	txt14e = 1;              
              }else if($(this).val() == 15){
              	txt15 = 1;              
              	txt15e = 1;              
              }
              else if($(this).val() == 16){
              	txt16 = 1;              
              	txt16e = 1;              
              }else if($(this).val() == 17){
              	txt17 = 1;              
              	txt17e = 1;              
              }else if($(this).val() == 18){
              	txt18 = 1;              
              	txt18e = 1;              
              }else if($(this).val() == 19){
              	txt19 = 1;              
              	txt19e = 1;              
              }else if($(this).val() == 20){
              	txt20 = 1;              
              	txt20e = 1;              
              }else if($(this).val() == 21){
              	txt21 = 1;              
              	txt21e = 1;              
              }else if($(this).val() == 22){
              	txt22 = 1;              
              	txt22e = 1;              
              }else if($(this).val() == 23){
              	txt23 = 1;              
              	txt23e = 1;              
              }else if($(this).val() == 24){
              	txt24 = 1;              
              	txt24e = 1;              
              }else if($(this).val() == 25){
              	txt25 = 1;              
              	txt25e = 1;              
              }else if($(this).val() == 26){
              	txt26 = 1;              
              	txt26e = 1;              
              }else if($(this).val() == 27){
              	txt27 = 1;              
              	txt27e = 1;              
              }else if($(this).val() == 28){
              	txt28 = 1;              
              	txt28e = 1;              
              }else if($(this).val() == 29){
              	txt29 = 1;              
              	txt29e = 1;              
              }else if($(this).val() == 30){
              	txt30 = 1;              
              	txt30e = 1;              
              }else if($(this).val() == 31){
              	txt31 = 1;              
              	txt31e = 1;              
              }else if($(this).val() == 32){
              	txt32 = 1;              
              	txt32e = 1;              
              }else if($(this).val() == 33){
              	txt33 = 1;              
              	txt33e = 1;              
              }else if($(this).val() == 34){
              	txt34 = 1;              
              	txt34e = 1;              
              }else if($(this).val() == 35){
              	txt35 = 1;              
              	txt35e = 1;              
              }else if($(this).val() == 36){
              	txt36 = 1;              
              	txt36e = 1;              
              }else if($(this).val() == 37){
              	txt37 = 1;              
              	txt37e = 1;              
              }else if($(this).val() == 38){
              	txt38 = 1;              
              	txt38e = 1;              
              }else if($(this).val() == 39){
              	txt39 = 1;              
              	txt39e = 1;              
              }else if($(this).val() == 40){
              	txt40 = 1;              
              	txt40e = 1;              
              }else if($(this).val() == 41){
              	txt41 = 1;              
              	txt41e = 1;              
              }else if($(this).val() == 42){
              	txt42 = 1;              
              	txt42e = 1;              
              }else if($(this).val() == 43){
              	txt43 = 1;              
              	txt43e = 1;              
              }else if($(this).val() == 44){
              	txt44 = 1;              
              	txt44e = 1;              
              }else if($(this).val() == 45){
              	txt45 = 1;              
              	txt45e = 1;              
              }else if($(this).val() == 46){
              	txt46 = 1;              
              	txt46e = 1;              
              }else if($(this).val() == 47){
              	txt47 = 1;              
              	txt47e = 1;              
              }else if($(this).val() == 48){
              	txt48 = 1;              
              	txt48e = 1;              
              }else if($(this).val() == 49){
              	txt49 = 1;              
              	txt49e = 1;              
              }else if($(this).val() == 50){
              	txt50 = 1;              
              	txt50e = 1;              
              }else if($(this).val() == 51){
              	txt51 = 1;              
              	txt51e = 1;              
              }else if($(this).val() == 52){
              	txt52 = 1;              
              	txt52e = 1;              
              }else if($(this).val() == 53){
              	txt53 = 1;              
              	txt53e = 1;              
              }else if($(this).val() == 54){
              	txt54 = 1;              
              	txt54e = 1;              
              }else if($(this).val() == 55){
              	txt55 = 1;              
              	txt55e = 1;              
              }else if($(this).val() == 56){
              	txt56 = 1;              
              	txt56e = 1;              
              }else if($(this).val() == 57){
              	txt57 = 1;              
              	txt57e = 1;              
              }else if($(this).val() == 58){
              	txt58 = 1;              
              	txt58e = 1;              
              }else if($(this).val() == 59){
              	txt59 = 1;              
              	txt59e = 1;              
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
			txt8 = 0;	txt8e = 0;
			txt9 = 0;	txt9e = 0;
			txt10 = 0;	txt10e = 0;

			txt11 = 0;	txt11e = 0;
			txt12 = 0;	txt12e = 0;
			txt13 = 0;	txt13e = 0;
			txt14 = 0;	txt14e = 0;	
			txt15 = 0;	txt15e = 0;
			txt16 = 0;	txt16e = 0;
			txt17 = 0;	txt17e = 0;
			txt18 = 0;	txt18e = 0;
			txt19 = 0;	txt19e = 0;
			txt20 = 0;	txt20e = 0;

			txt21 = 0;	txt21e = 0;
			txt22 = 0;	txt22e = 0;
			txt23 = 0;	txt23e = 0;
			txt24 = 0;	txt24e = 0;	
			txt25 = 0;	txt25e = 0;
			txt26 = 0;	txt26e = 0;
			txt27 = 0;	txt27e = 0;
			txt28 = 0;	txt28e = 0;
			txt29 = 0;	txt29e = 0;
			txt30 = 0;	txt30e = 0;

			txt31 = 0;	txt31e = 0;
			txt32 = 0;	txt32e = 0;
			txt33 = 0;	txt33e = 0;
			txt34 = 0;	txt34e = 0;	
			txt35 = 0;	txt35e = 0;
			txt36 = 0;	txt36e = 0;
			txt37 = 0;	txt37e = 0;
			txt38 = 0;	txt38e = 0;
			txt39 = 0;	txt39e = 0;
			txt40 = 0;	txt40e = 0;

			txt41 = 0;	txt41e = 0;
			txt42 = 0;	txt42e = 0;
			txt43 = 0;	txt43e = 0;
			txt44 = 0;	txt44e = 0;	
			txt45 = 0;	txt45e = 0;
			txt46 = 0;	txt46e = 0;
			txt47 = 0;	txt47e = 0;
			txt48 = 0;	txt48e = 0;
			txt49 = 0;	txt49e = 0;
			txt50 = 0;	txt50e = 0;

			txt51 = 0;	txt51e = 0;
			txt52 = 0;	txt52e = 0;
			txt53 = 0;	txt53e = 0;
			txt54 = 0;	txt54e = 0;	
			txt55 = 0;	txt55e = 0;
			txt56 = 0;	txt56e = 0;
			txt57 = 0;	txt57e = 0;
			txt58 = 0;	txt58e = 0;
			txt59 = 0;	txt59e = 0;	
			
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
		audio.src = "Mere-vertueuse/Prologue/"+nextMp3+".mp3";
		audio.play();
	}	

	function play(){				
		audio.src = "Mere-vertueuse/Prologue/"+mp3_part+".mp3";
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
	var txt12 = 0;	var txt12e = 0;
	var txt13 = 0;	var txt13e = 0;
	var txt14 = 0;	var txt14e = 0;	
	var txt15 = 0;	var txt15e = 0;
	var txt16 = 0;	var txt16e = 0;
	var txt17 = 0;	var txt17e = 0;
	var txt18 = 0;	var txt18e = 0;
	var txt19 = 0;	var txt19e = 0;
	var txt20 = 0;	var txt20e = 0;

	var txt21 = 0;	var txt21e = 0;
	var txt22 = 0;	var txt22e = 0;
	var txt23 = 0;	var txt23e = 0;
	var txt24 = 0;	var txt24e = 0;	
	var txt25 = 0;	var txt25e = 0;
	var txt26 = 0;	var txt26e = 0;
	var txt27 = 0;	var txt27e = 0;
	var txt28 = 0;	var txt28e = 0;
	var txt29 = 0;	var txt29e = 0;
	var txt30 = 0;	var txt30e = 0;

	var txt31 = 0;	var txt31e = 0;
	var txt32 = 0;	var txt32e = 0;
	var txt33 = 0;	var txt33e = 0;
	var txt34 = 0;	var txt34e = 0;	
	var txt35 = 0;	var txt35e = 0;
	var txt36 = 0;	var txt36e = 0;
	var txt37 = 0;	var txt37e = 0;
	var txt38 = 0;	var txt38e = 0;
	var txt39 = 0;	var txt39e = 0;
	var txt40 = 0;	var txt40e = 0;

	var txt41 = 0;	var txt41e = 0;
	var txt42 = 0;	var txt42e = 0;
	var txt43 = 0;	var txt43e = 0;
	var txt44 = 0;	var txt44e = 0;	
	var txt45 = 0;	var txt45e = 0;
	var txt46 = 0;	var txt46e = 0;
	var txt47 = 0;	var txt47e = 0;
	var txt48 = 0;	var txt48e = 0;
	var txt49 = 0;	var txt49e = 0;
	var txt50 = 0;	var txt50e = 0;

	var txt51 = 0;	var txt51e = 0;
	var txt52 = 0;	var txt52e = 0;
	var txt53 = 0;	var txt53e = 0;
	var txt54 = 0;	var txt54e = 0;	
	var txt55 = 0;	var txt55e = 0;
	var txt56 = 0;	var txt56e = 0;
	var txt57 = 0;	var txt57e = 0;
	var txt58 = 0;	var txt58e = 0;
	var txt59 = 0;	var txt59e = 0;	

	var mp3_part;

	var page = 1;
	var nbPage = 30;
	showPage(page);
	function showPage(page){
		console.log(page);
		for (var i = 0; i <= nbPage; i++) {
			if(i == page){
				$('#ecran'+i).show();
			}else{
				$('#ecran'+i).hide();
			}
		}		
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
	 		mp3_part = "MM-Ch-Jn-01-01-a1";		 
	 		showPage(1);
	 		play();
	 	}else{
	 		mp3_part = "MM-Ch-Jn-01-01-b1";
	 		playTxt2();
	 	}
	 }
	 
	 function playTxt2(){
	 	if(txt2 == 1){	 	
	 		showPage(1);
	 		mp3_part = "MM-Ch-Jn-01-01-b1";	 
	 		play();
	 	}else{
	 		mp3_part = "MM-Ch-Jn-01-01-c1";
	 		playTxt3();
	 	}
	 }	

	 function playTxt3(){
	 	if(txt3 == 1){	
	 		showPage(2);
	 		mp3_part = "MM-Ch-Jn-01-01-c1"; 		 
	 		play();
	 	}else{
	 		mp3_part = "MM-Ch-Jn-01-01-d1";
	 		playTxt4();
	 	}
	 }

	 function playTxt4(){
	 	if(txt4 == 1){	
	 		showPage(2);
	 		mp3_part = "MM-Ch-Jn-01-01-d1"; 		 
	 		play();
	 	}else{
	 		mp3_part = "MM-Ch-Jn-01-01-e1";
	 		playTxt5();
	 	}
	 }

	 function playTxt5(){
	 	if(txt5 == 1){	
	 		mp3_part = "MM-Ch-Jn-01-01-e1"; 
	 		showPage(3);	 				 
	 		play();
	 	}else{
	 		mp3_part = "MM-Ch-Jn-01-01-f1";
	 		playTxt6();
	 	}
	 }

	 function playTxt6(){
	 	if(txt6 == 1){	
	 		mp3_part = "MM-Ch-Jn-01-01-f1"; 
	 		showPage(3);		 
	 		play();
	 	}else{
	 		mp3_part = "MM-Ch-Jn-01-02-a1";
	 		playTxt7();
	 	}
	 }

	 function playTxt7(){
	 	if(txt7 == 1){	
	 		mp3_part = "MM-Ch-Jn-01-02-a1"; 
	 		showPage(4);		 
	 		play();
	 	}else{
	 		mp3_part = "MM-Ch-Jn-01-02-b1";
	 		playTxt8();
	 	}
	 }

	 function playTxt8(){
	 	if(txt8 == 1){	
	 		mp3_part = "MM-Ch-Jn-01-02-b1"; 
	 		showPage(4);		 
	 		play();
	 	}else{
	 		mp3_part = "MM-Ch-Jn-01-03-a1";
	 		playTxt9();
	 	}
	 }

	 function playTxt9(){
	 	if(txt9 == 1){	
	 		mp3_part = "MM-Ch-Jn-01-03-a1"; 
	 		showPage(5);	 
	 		play();
	 	}else{
	 		mp3_part = "MM-Ch-Jn-01-03-b1";
	 		playTxt10();
	 	}
	 }

	 function playTxt10(){
	 	if(txt10 == 1){	
	 		mp3_part = "MM-Ch-Jn-01-03-b1"; 	
	 		showPage(5);	 
	 		play();
	 	}else{
	 		mp3_part = "MM-Ch-Jn-01-03-c1";
	 		playTxt11();
	 	}
	 }

	 function playTxt11(){
	 	if(txt11 == 1){	
	 		mp3_part = "MM-Ch-Jn-01-03-c1"; 	
	 		showPage(6);	 
	 		play();
	 	}else{
	 		mp3_part = "MM-Ch-Jn-01-03-d1";
	 		playTxt12();
	 	}
	 }

	 function playTxt12(){
	 	if(txt12 == 1){	
	 		mp3_part = "MM-Ch-Jn-01-03-d1"; 
	 		showPage(6);		 
	 		play();
	 	}else{
	 		mp3_part = "MM-Ch-Jn-01-04-a1";
	 		playTxt13();
	 	}
	 }

	 function playTxt13(){
	 	if(txt13 == 1){	
	 		mp3_part = "MM-Ch-Jn-01-04-a1"; 
	 		showPage(7);		 
	 		play();
	 	}else{
	 		mp3_part = "MM-Ch-Jn-01-04-b1";
	 		playTxt14();
	 	}
	 }

	 function playTxt14(){
	 	if(txt14 == 1){	
	 		mp3_part = "MM-Ch-Jn-01-04-b1"; 	
	 		showPage(7);	 
	 		play();
	 	}else{
	 		mp3_part = "MM-Ch-Jn-01-04-c1";
	 		playTxt15();
	 	}
	 }

	 function playTxt15(){
	 	if(txt15 == 1){	
	 		mp3_part = "MM-Ch-Jn-01-04-c1"; 	
	 		showPage(8);	 
	 		play();
	 	}else{
	 		mp3_part = "MM-Ch-Jn-01-04-d1";
	 		playTxt16();
	 	}
	 }

	 function playTxt16(){
	 	if(txt16 == 1){	
	 		mp3_part = "MM-Ch-Jn-01-04-d1"; 	
	 		showPage(8);	 
	 		play();
	 	}else{
	 		mp3_part = "MM-Ch-Jn-01-05-a1";
	 		playTxt17();
	 	}
	 }

	 function playTxt17(){
	 	if(txt17 == 1){	
	 		mp3_part = "MM-Ch-Jn-01-05-a1"; 		 
	 		showPage(9);
	 		play();
	 	}else{
	 		mp3_part = "MM-Ch-Jn-01-05-b1";
	 		playTxt18();
	 	}
	 }

	 function playTxt18(){
	 	if(txt18 == 1){	
	 		mp3_part = "MM-Ch-Jn-01-05-b1"; 
	 		showPage(9);		 
	 		play();
	 	}else{
	 		mp3_part = "MM-Ch-Jn-01-05-c1";
	 		playTxt19();
	 	}
	 }

	 function playTxt19(){
	 	if(txt19 == 1){	
	 		mp3_part = "MM-Ch-Jn-01-05-c1"; 	
	 		showPage(10);	 
	 		play();
	 	}else{
	 		mp3_part = "MM-Ch-Jn-01-05-d1";
	 		playTxt20();
	 	}
	 }

	 function playTxt20(){
	 	if(txt20 == 1){	
	 		mp3_part = "MM-Ch-Jn-01-05-d1"; 		 
	 		showPage(10);
	 		play();
	 	}else{
	 		mp3_part = "MM-Ch-Jn-01-06-a1";
	 		playTxt21();
	 	}
	 }

	 function playTxt21(){
	 	if(txt21== 1){	
	 		mp3_part = "MM-Ch-Jn-01-06-a1"; 
	 		showPage(11);		 
	 		play();
	 	}else{
	 		mp3_part = "MM-Ch-Jn-01-06-b1";
	 		playTxt22();
	 	}
	 }

	 function playTxt22(){
	 	if(txt22 == 1){	
	 		mp3_part = "MM-Ch-Jn-01-06-b1"; 
	 		showPage(11);		 
	 		play();
	 	}else{
	 		mp3_part = "MM-Ch-Jn-01-06-c1";
	 		playTxt23();
	 	}
	 }

	 function playTxt23(){
	 	if(txt23 == 1){	
	 		mp3_part = "MM-Ch-Jn-01-06-c1"; 	
	 		showPage(12);	 
	 		play();
	 	}else{
	 		mp3_part = "MM-Ch-Jn-01-06-d1";
	 		playTxt24();
	 	}
	 }

	 function playTxt24(){
	 	if(txt24 == 1){	
	 		mp3_part = "MM-Ch-Jn-01-06-d1"; 		 
	 		showPage(12);
	 		play();
	 	}else{
	 		mp3_part = "MM-Ch-Jn-01-07-a1";
	 		playTxt25();
	 	}
	 }

	 function playTxt25(){
	 	if(txt25 == 1){	
	 		mp3_part = "MM-Ch-Jn-01-07-a1"; 	
	 		showPage(13);	 
	 		play();
	 	}else{
	 		mp3_part = "MM-Ch-Jn-01-07-b1";
	 		playTxt26();
	 	}
	 }

	 function playTxt26(){
	 	if(txt26 == 1){	
	 		mp3_part = "MM-Ch-Jn-01-07-b1"; 
	 		showPage(13);		 
	 		play();
	 	}else{
	 		mp3_part = "MM-Ch-Jn-01-07-c1";
	 		playTxt27();
	 	}
	 }

	 function playTxt27(){
	 	if(txt27 == 1){	
	 		mp3_part = "MM-Ch-Jn-01-07-c1"; 	
	 		showPage(14);	 
	 		play();
	 	}else{
	 		mp3_part = "MM-Ch-Jn-01-07-d1";
	 		playTxt28();
	 	}
	 }

	 function playTxt28(){
	 	if(txt28 == 1){	
	 		mp3_part = "MM-Ch-Jn-01-07-d1"; 	
	 		showPage(14);	 
	 		play();
	 	}else{
	 		mp3_part = "MM-Ch-Jn-01-08-a1";
	 		playTxt29();
	 	}
	 }

	 function playTxt29(){
	 	if(txt29 == 1){	
	 		mp3_part = "MM-Ch-Jn-01-08-a1"; 	
	 		showPage(15);	 
	 		play();
	 	}else{
	 		mp3_part = "MM-Ch-Jn-01-08-b1";
	 		playTxt30();
	 	}
	 }

	 function playTxt30(){
	 	if(txt30 == 1){	
	 		mp3_part = "MM-Ch-Jn-01-08-b1"; 	
	 		showPage(15);	 
	 		play();
	 	}else{
	 		mp3_part = "MM-Ch-Jn-01-08-c1";
	 		playTxt31();
	 	}
	 }

	 function playTxt31(){
	 	if(txt31 == 1){	
	 		mp3_part = "MM-Ch-Jn-01-08-c1"; 	
	 		showPage(16);	 
	 		play();
	 	}else{
	 		mp3_part = "MM-Ch-Jn-01-08-d1";
	 		playTxt32();
	 	}
	 }

	 function playTxt32(){
	 	if(txt32 == 1){	
	 		mp3_part = "MM-Ch-Jn-01-08-d1"; 	
	 		showPage(16);	 
	 		play();
	 	}else{
	 		mp3_part = "MM-Ch-Jn-01-09-a1";
	 		playTxt33();
	 	}
	 }

	 function playTxt33(){
	 	if(txt33 == 1){	
	 		mp3_part = "MM-Ch-Jn-01-09-a1"; 
	 		showPage(17);		 
	 		play();
	 	}else{
	 		mp3_part = "MM-Ch-Jn-01-09-b1";
	 		playTxt34();
	 	}
	 }

	 function playTxt34(){
	 	if(txt34 == 1){	
	 		mp3_part = "MM-Ch-Jn-01-09-b1"; 	
	 		showPage(17);	 
	 		play();
	 	}else{
	 		mp3_part = "MM-Ch-Jn-01-09-c1";
	 		playTxt35();
	 	}
	 }

	 function playTxt35(){
	 	if(txt35 == 1){	
	 		mp3_part = "MM-Ch-Jn-01-09-c1"; 	
	 		showPage(18);	 
	 		play();
	 	}else{
	 		mp3_part = "MM-Ch-Jn-01-09-d1";
	 		playTxt36();
	 	}
	 }

	 function playTxt36(){
	 	if(txt36 == 1){	
	 		mp3_part = "MM-Ch-Jn-01-09-d1"; 
	 		showPage(18);		 
	 		play();
	 	}else{
	 		mp3_part = "MM-Ch-Jn-01-10-a1";
	 		playTxt37();
	 	}
	 }

	 function playTxt37(){
	 	if(txt37 == 1){	
	 		mp3_part = "MM-Ch-Jn-01-10-a1"; 	
	 		showPage(19);	 
	 		play();
	 	}else{
	 		mp3_part = "MM-Ch-Jn-01-10-b1";
	 		playTxt38();
	 	}
	 }

	 function playTxt38(){
	 	if(txt38 == 1){	
	 		mp3_part = "MM-Ch-Jn-01-10-b1"; 		
	 		showPage(19); 
	 		play();
	 	}else{
	 		mp3_part = "MM-Ch-Jn-01-10-c1";
	 		playTxt39();
	 	}
	 }

	 function playTxt39(){
	 	if(txt39 == 1){	
	 		mp3_part = "MM-Ch-Jn-01-10-c1"; 	
	 		showPage(20);	 
	 		play();
	 	}else{
	 		mp3_part = "MM-Ch-Jn-01-10-d1";
	 		playTxt40();
	 	}
	 }

	 function playTxt40(){
	 	if(txt40 == 1){	
	 		mp3_part = "MM-Ch-Jn-01-10-d1"; 	
	 		showPage(20);	 
	 		play();
	 	}else{
	 		mp3_part = "MM-Ch-Jn-01-11-a1";
	 		playTxt41();
	 	}
	 }

	function playTxt41(){
		if(txt41 == 1){	
			mp3_part = "MM-Ch-Jn-01-11-a1"; 	
			showPage(21);	 
			play();
		}else{
			mp3_part = "MM-Ch-Jn-01-11-b1";
			playTxt42();
		}
	}

	function playTxt42(){
		if(txt42 == 1){	
			mp3_part = "MM-Ch-Jn-01-11-b1"; 	
			showPage(21);	 
			play();
		}else{
			mp3_part = "MM-Ch-Jn-01-11-c1";
			playTxt43();
		}
	}

	function playTxt43(){
		if(txt43 == 1){	
			mp3_part = "MM-Ch-Jn-01-11-c1"; 	
			showPage(22);	 
			play();
		}else{
			mp3_part = "MM-Ch-Jn-01-11-d1";
			playTxt44();
		}
	}

	function playTxt44(){
		if(txt44 == 1){	
			mp3_part = "MM-Ch-Jn-01-11-d1"; 	
			showPage(22);	 
			play();
		}else{
			mp3_part = "MM-Ch-Jn-01-12-a1";
			playTxt45();
		}
	}

	function playTxt45(){
		if(txt45 == 1){	
			mp3_part = "MM-Ch-Jn-01-12-a1"; 	
			showPage(23);	 
			play();
		}else{
			mp3_part = "MM-Ch-Jn-01-12-b1";
			playTxt46();
		}
	}

	function playTxt46(){
		if(txt46 == 1){	
			mp3_part = "MM-Ch-Jn-01-12-b1"; 
			showPage(23);		 
			play();
		}else{
			mp3_part = "MM-Ch-Jn-01-12-c1";
			playTxt47();
		}
	}

	function playTxt47(){
		if(txt47 == 1){	
			mp3_part = "MM-Ch-Jn-01-12-c1"; 
			showPage(24);		 
			play();
		}else{
			mp3_part = "MM-Ch-Jn-01-12-d1";
			playTxt48();
		}
	}

	function playTxt48(){
		if(txt48 == 1){	
			mp3_part = "MM-Ch-Jn-01-12-d1"; 
			showPage(24);		 
			play();
		}else{
			mp3_part = "MM-Ch-Jn-01-13-e1";
			playTxt49();
		}
	}

	function playTxt49(){
		if(txt49 == 1){	
			mp3_part = "MM-Ch-Jn-01-13-e1"; 
			showPage(25);		 
			play();
		}else{
			mp3_part = "MM-Ch-Jn-01-13-f1";
			playTxt50();
		}
	}

	function playTxt50(){
		if(txt50 == 1){	
			mp3_part = "MM-Ch-Jn-01-13-f1"; 	
			showPage(25);	 
			play();
		}else{
			mp3_part = "MM-Ch-Jn-01-14-a1";
			playTxt51();
		}
	}

	function playTxt51(){
		if(txt51 == 1){	
			mp3_part = "MM-Ch-Jn-01-14-a1"; 	
			showPage(26);	 
			play();
		}else{
			mp3_part = "MM-Ch-Jn-01-14-b1";
			playTxt52();
		}
	}

	function playTxt52(){
		if(txt52 == 1){	
			mp3_part = "MM-Ch-Jn-01-14-b1"; 	
			showPage(27);	 
			play();
		}else{
			mp3_part = "MM-Ch-Jn-01-14-c1";
			playTxt53();
		}
	}

	function playTxt53(){
		if(txt53 == 1){	
			mp3_part = "MM-Ch-Jn-01-14-c1"; 	
			showPage(27);	 
			play();
		}else{
			mp3_part = "MM-Ch-Jn-01-14-d1";
			playTxt54();
		}
	}

	function playTxt54(){
		if(txt54 == 1){	
			mp3_part = "MM-Ch-Jn-01-14-d1"; 
			showPage(28);		 
			play();
		}else{
			mp3_part = "MM-Ch-Jn-01-14-e1";
			playTxt55();
		}
	}

	function playTxt55(){
		if(txt55 == 1){	
			mp3_part = "MM-Ch-Jn-01-14-e1"; 	
			showPage(28);	 
			play();
		}else{
			mp3_part = "MM-Ch-Jn-01-14-f1";
			playTxt56();
		}
	}

	function playTxt56(){
		if(txt56 == 1){	
			mp3_part = "MM-Ch-Jn-01-14-f1"; 
			showPage(29);		 
			play();
		}else{
			mp3_part = "MM-Ch-Jn-01-14-g1";
			playTxt57();
		}
	}

	function playTxt57(){
		if(txt57 == 1){	
			mp3_part = "MM-Ch-Jn-01-14-g1"; 	
			showPage(29);	 
			play();
		}else{
			mp3_part = "MM-Ch-Jn-01-14-h1";
			playTxt58();
		}
	}

	function playTxt58(){
		if(txt58 == 1){	
			mp3_part = "MM-Ch-Jn-01-14-h1"; 
			showPage(30);		 
			play();
		}else{
			mp3_part = "MM-Ch-Jn-01-14-i1";
			playTxt59();
		}
	}

	function playTxt59(){
		if(txt59 == 1){	
			mp3_part = "MM-Ch-Jn-01-14-i1"; 	
			showPage(30);	 
			play();
		}else{
			mp3_part = "MM-Ch-Jn-01-01-a2";
			playTxt1e();
		}
	}
	 
/////////////////////////////////////////////

	 function playTxt1e(){
	 	if(txt1e == 1){	 
	 		mp3_part = "MM-Ch-Jn-01-01-a2";		
	 		showPage(1); 
	 		play();
	 	}else{
	 		mp3_part = "MM-Ch-Jn-01-01-b2";
	 		playTxt2e();
	 	}
	 }

	 function playTxt2e(){
	 	if(txt2e == 1){	 
	 		showPage(1);
	 		mp3_part = "MM-Ch-Jn-01-01-b2";		 
	 		play();
	 	}else{
	 		mp3_part = "MM-Ch-Jn-01-01-c2";
	 		playTxt3e();
	 	}
	 }
	 
	 function playTxt3e(){
	 	if(txt3e == 1){	
	 		mp3_part = "MM-Ch-Jn-01-01-c2"; 	
	 		showPage(2);	 
	 		play();
	 	}else{
	 		mp3_part = "MM-Ch-Jn-01-01-d2";
	 		playTxt4e();
	 	}
	 }

	 function playTxt4e(){
	 	if(txt4e == 1){	
	 		mp3_part = "MM-Ch-Jn-01-01-d2"; 	
	 		showPage(2);	 
	 		play();
	 	}else{
	 		mp3_part = "MM-Ch-Jn-01-01-e2";
	 		playTxt5e();
	 	}
	 }

	 function playTxt5e(){
	 	if(txt5e == 1){	
	 		mp3_part = "MM-Ch-Jn-01-01-e2"; 	
	 		showPage(3);	 
	 		play();
	 	}else{
	 		mp3_part = "MM-Ch-Jn-01-01-f2";
	 		playTxt6e();
	 	}
	 }

	 function playTxt6e(){
	 	if(txt6e == 1){	
	 		mp3_part = "MM-Ch-Jn-01-01-f2"; 	
	 		showPage(3);	 
	 		play();
	 	}else{
	 		mp3_part = "MM-Ch-Jn-01-02-a2";
	 		playTxt7e();
	 	}
	 }

	 function playTxt7e(){
	 	if(txt7e == 1){	
	 		mp3_part = "MM-Ch-Jn-01-02-a2"; 	
	 		showPage(4);	 
	 		play();
	 	}else{
	 		mp3_part = "MM-Ch-Jn-01-02-b2";
	 		playTxt8e();
	 	}
	 }

	 function playTxt8e(){
	 	if(txt8e == 1){	
	 		mp3_part = "MM-Ch-Jn-01-02-b2"; 	
	 		showPage(4);	 
	 		play();
	 	}else{
	 		mp3_part = "MM-Ch-Jn-01-03-a2";
	 		playTxt9e();
	 	}
	 }

	 function playTxt9e(){
	 	if(txt9e == 1){	
	 		mp3_part = "MM-Ch-Jn-01-03-a2"; 		
	 		showPage(5); 
	 		play();
	 	}else{
	 		mp3_part = "MM-Ch-Jn-01-03-b2";
	 		playTxt10e();
	 	}
	 }

	 function playTxt10e(){
	 	if(txt10e == 1){	
	 		mp3_part = "MM-Ch-Jn-01-03-b2"; 	
	 		showPage(5);	 
	 		play();
	 	}else{
	 		mp3_part = "MM-Ch-Jn-01-03-c2";
	 		playTxt11e();
	 	}
	 }

	 function playTxt11e(){
	 	if(txt11e == 1){	
	 		mp3_part = "MM-Ch-Jn-01-03-c2"; 	
	 		showPage(6);	 
	 		play();
	 	}else{
	 		mp3_part = "MM-Ch-Jn-01-03-d2";
	 		playTxt12e();
	 	}
	 }

	 function playTxt12e(){
	 	if(txt12e == 1){	
	 		mp3_part = "MM-Ch-Jn-01-03-d2"; 	
	 		showPage(6);	 
	 		play();
	 	}else{
	 		mp3_part = "MM-Ch-Jn-01-04-a2";
	 		playTxt13e();
	 	}
	 }

	 function playTxt13e(){
	 	if(txt13e == 1){	
	 		mp3_part = "MM-Ch-Jn-01-04-a2"; 	
	 		showPage(7);	 
	 		play();
	 	}else{
	 		mp3_part = "MM-Ch-Jn-01-04-b2";
	 		playTxt14e();
	 	}
	 }

	 function playTxt14e(){
	 	if(txt14e == 1){	
	 		mp3_part = "MM-Ch-Jn-01-04-b2"; 
	 		showPage(7);		 
	 		play();
	 	}else{
	 		mp3_part = "MM-Ch-Jn-01-04-c2";
	 		playTxt15e();
	 	}
	 }

	 function playTxt15e(){
	 	if(txt15e == 1){	
	 		mp3_part = "MM-Ch-Jn-01-04-c2"; 
	 		showPage(8);		 
	 		play();
	 	}else{
	 		mp3_part = "MM-Ch-Jn-01-04-d2";
	 		playTxt16e();
	 	}
	 }

	 function playTxt16e(){
	 	if(txt16e == 1){	
	 		mp3_part = "MM-Ch-Jn-01-04-d2"; 	
	 		showPage(8);	 
	 		play();
	 	}else{
	 		mp3_part = "MM-Ch-Jn-01-05-a2";
	 		playTxt17e();
	 	}
	 }

	 function playTxt17e(){
	 	if(txt17e == 1){	
	 		mp3_part = "MM-Ch-Jn-01-05-a2"; 
	 		showPage(9);		 
	 		play();
	 	}else{
	 		mp3_part = "MM-Ch-Jn-01-05-b2";
	 		playTxt18e();
	 	}
	 }

	 function playTxt18e(){
	 	if(txt18e == 1){	
	 		mp3_part = "MM-Ch-Jn-01-05-b2"; 
	 		showPage(9);		 
	 		play();
	 	}else{
	 		mp3_part = "MM-Ch-Jn-01-05-c2";
	 		playTxt19e();
	 	}
	 }

	 function playTxt19e(){
	 	if(txt19e == 1){	
	 		mp3_part = "MM-Ch-Jn-01-05-c2"; 	
	 		showPage(10);	 			
	 		play();
	 	}else{
	 		mp3_part = "MM-Ch-Jn-01-05-d2";
	 		playTxt20e();
	 	}
	 }
	
	 function playTxt20e(){
	 	if(txt20e == 1){	
	 		mp3_part = "MM-Ch-Jn-01-05-d2"; 		 
	 		showPage(10);
	 		play();
	 	}else{
	 		mp3_part = "MM-Ch-Jn-01-06-a2";
	 		playTxt21e();
	 	}
	 }

	 function playTxt21e(){
	 	if(txt21e== 1){	
	 		mp3_part = "MM-Ch-Jn-01-06-a2"; 	
	 		showPage(11);	 
	 		play();
	 	}else{
	 		mp3_part = "MM-Ch-Jn-01-06-b2";
	 		playTxt22e();
	 	}
	 }

	 function playTxt22e(){
	 	if(txt22e == 1){	
	 		mp3_part = "MM-Ch-Jn-01-06-b2"; 	
	 		showPage(11);	 
	 		play();
	 	}else{
	 		mp3_part = "MM-Ch-Jn-01-06-c2";
	 		playTxt23e();
	 	}
	 }

	 function playTxt23e(){
	 	if(txt23e == 1){	
	 		mp3_part = "MM-Ch-Jn-01-06-c2"; 	
	 		showPage(12);	 
	 		play();
	 	}else{
	 		mp3_part = "MM-Ch-Jn-01-06-d2";
	 		playTxt24e();
	 	}
	 }

	 function playTxt24e(){
	 	if(txt24e == 1){	
	 		mp3_part = "MM-Ch-Jn-01-06-d2"; 	
	 		showPage(12);	 
	 		play();
	 	}else{
	 		mp3_part = "MM-Ch-Jn-01-07-a2";
	 		playTxt25e();
	 	}
	 }

	 function playTxt25e(){
	 	if(txt25e == 1){	
	 		mp3_part = "MM-Ch-Jn-01-07-a2"; 	
	 		showPage(13);	 
	 		play();
	 	}else{
	 		mp3_part = "MM-Ch-Jn-01-07-b2";
	 		playTxt26e();
	 	}
	 }

	 function playTxt26e(){
	 	if(txt26e == 1){	
	 		mp3_part = "MM-Ch-Jn-01-07-b2"; 	
	 		showPage(13);	 
	 		play();
	 	}else{
	 		mp3_part = "MM-Ch-Jn-01-07-c2";
	 		playTxt27e();
	 	}
	 }

	 function playTxt27e(){
	 	if(txt27e == 1){	
	 		mp3_part = "MM-Ch-Jn-01-07-c2"; 	
	 		showPage(14);	 
	 		play();
	 	}else{
	 		mp3_part = "MM-Ch-Jn-01-07-d2";
	 		playTxt28e();
	 	}
	 }

	 function playTxt28e(){
	 	if(txt28e == 1){	
	 		mp3_part = "MM-Ch-Jn-01-07-d2"; 	
	 		showPage(14);	 
	 		play();
	 	}else{
	 		mp3_part = "MM-Ch-Jn-01-08-a2";
	 		playTxt29e();
	 	}
	 }

	 function playTxt29e(){
	 	if(txt29e == 1){	
	 		mp3_part = "MM-Ch-Jn-01-08-a2"; 	
	 		showPage(15);	 
	 		play();
	 	}else{
	 		mp3_part = "MM-Ch-Jn-01-08-b2";
	 		playTxt30e();
	 	}
	 }

	 function playTxt30e(){
	 	if(txt30e == 1){	
	 		mp3_part = "MM-Ch-Jn-01-08-b2"; 
	 		showPage(15);		 
	 		play();
	 	}else{
	 		mp3_part = "MM-Ch-Jn-01-08-c2";
	 		playTxt31e();
	 	}
	 }

	 function playTxt31e(){
	 	if(txt31e == 1){	
	 		mp3_part = "MM-Ch-Jn-01-08-c2"; 	
	 		showPage(16);	 
	 		play();
	 	}else{
	 		mp3_part = "MM-Ch-Jn-01-08-d2";
	 		playTxt32e();
	 	}
	 }

	 function playTxt32e(){
	 	if(txt32e == 1){	
	 		mp3_part = "MM-Ch-Jn-01-08-d2"; 	
	 		showPage(16);	 
	 		play();
	 	}else{
	 		mp3_part = "MM-Ch-Jn-01-09-a2";
	 		playTxt33e();
	 	}
	 }

	 function playTxt33e(){
	 	if(txt33e == 1){	
	 		mp3_part = "MM-Ch-Jn-01-09-a2"; 	
	 		showPage(17);	 
	 		play();
	 	}else{
	 		mp3_part = "MM-Ch-Jn-01-09-b2";
	 		playTxt34e();
	 	}
	 }

	 function playTxt34e(){
	 	if(txt34e == 1){	
	 		mp3_part = "MM-Ch-Jn-01-09-b2"; 
	 		showPage(17);		 
	 		play();
	 	}else{
	 		mp3_part = "MM-Ch-Jn-01-09-c2";
	 		playTxt35e();
	 	}
	 }

	 function playTxt35e(){
	 	if(txt35 == 1){	
	 		mp3_part = "MM-Ch-Jn-01-09-c2"; 	
	 		showPage(18);	 
	 		play();
	 	}else{
	 		mp3_part = "MM-Ch-Jn-01-09-d2";
	 		playTxt36e();
	 	}
	 }

	 function playTxt36e(){
	 	if(txt36e == 1){	
	 		mp3_part = "MM-Ch-Jn-01-09-d2"; 	
	 		showPage(18);	 
	 		play();
	 	}else{
	 		mp3_part = "MM-Ch-Jn-01-10-a2";
	 		playTxt37e();
	 	}
	 }

	 function playTxt37e(){
	 	if(txt37e == 1){	
	 		mp3_part = "MM-Ch-Jn-01-10-a2"; 	
	 		showPage(19);	 
	 		play();
	 	}else{
	 		mp3_part = "MM-Ch-Jn-01-10-b2";
	 		playTxt38e();
	 	}
	 }

	 function playTxt38e(){
	 	if(txt38e == 1){	
	 		mp3_part = "MM-Ch-Jn-01-10-b2"; 	
	 		showPage(19);	 
	 		play();
	 	}else{
	 		mp3_part = "MM-Ch-Jn-01-10-c2";
	 		playTxt39e();
	 	}
	 }

	 function playTxt39e(){
	 	if(txt39e == 1){	
	 		mp3_part = "MM-Ch-Jn-01-10-c2"; 
	 		showPage(20);		 
	 		play();
	 	}else{
	 		mp3_part = "MM-Ch-Jn-01-10-d2";
	 		playTxt40e();
	 	}
	 }	

	 function playTxt40e(){
	 	if(txt40e == 1){	
	 		mp3_part = "MM-Ch-Jn-01-10-d2"; 
	 		showPage(20);		 
	 		play();
	 	}else{
	 		mp3_part = "MM-Ch-Jn-01-11-a2";
	 		playTxt41e();
	 	}
	 }	

	function playTxt41e(){
		if(txt41e == 1){	
			mp3_part = "MM-Ch-Jn-01-11-a2"; 
			showPage(21);		 
			play();
		}else{
			mp3_part = "MM-Ch-Jn-01-11-b2";
			playTxt42e();
		}
	}

	function playTxt42e(){
		if(txt42e == 1){	
			mp3_part = "MM-Ch-Jn-01-11-b2"; 
			showPage(21);		 
			play();
		}else{
			mp3_part = "MM-Ch-Jn-01-11-c2";
			playTxt43e();
		}
	}

	function playTxt43e(){
		if(txt43e == 1){	
			mp3_part = "MM-Ch-Jn-01-11-c2"; 
			showPage(22);		 
			play();
		}else{
			mp3_part = "MM-Ch-Jn-01-11-d2";
			playTxt44e();
		}
	}

	function playTxt44e(){
		if(txt44e == 1){	
			mp3_part = "MM-Ch-Jn-01-11-d2"; 
			showPage(22);		 
			play();
		}else{
			mp3_part = "MM-Ch-Jn-01-12-a2";
			playTxt45e();
		}
	}

	function playTxt45e(){
		if(txt45e == 1){	
			mp3_part = "MM-Ch-Jn-01-12-a2"; 	
			showPage(23);	 
			play();
		}else{
			mp3_part = "MM-Ch-Jn-01-12-b2";
			playTxt46e();
		}
	}

	function playTxt46e(){
		if(txt46e == 1){	
			mp3_part = "MM-Ch-Jn-01-12-b2"; 
			showPage(23);		 
			play();
		}else{
			mp3_part = "MM-Ch-Jn-01-12-c2";
			playTxt47e();
		}
	}

	function playTxt47e(){
		if(txt47e == 1){	
			mp3_part = "MM-Ch-Jn-01-12-c2"; 	
			showPage(24);	 
			play();
		}else{
			mp3_part = "MM-Ch-Jn-01-12-d2";
			playTxt48e();
		}
	}

	function playTxt48e(){
		if(txt48e == 1){	
			mp3_part = "MM-Ch-Jn-01-12-d2"; 	
			showPage(24);	 
			play();
		}else{
			mp3_part = "MM-Ch-Jn-01-13-e2";
			playTxt49e();
		}
	}

	function playTxt49e(){
		if(txt49e == 1){	
			mp3_part = "MM-Ch-Jn-01-13-e2"; 
			showPage(25);		 
			play();
		}else{
			mp3_part = "MM-Ch-Jn-01-13-f2";
			playTxt50e();
		}
	}

	function playTxt50e(){
		if(txt50e == 1){	
			mp3_part = "MM-Ch-Jn-01-13-f2"; 
			showPage(25);		 
			play();
		}else{
			mp3_part = "MM-Ch-Jn-01-14-a2";
			playTxt51e();
		}
	}

	function playTxt51e(){
		if(txt51e == 1){	
			mp3_part = "MM-Ch-Jn-01-14-a2"; 	
			showPage(26);	 
			play();
		}else{
			mp3_part = "MM-Ch-Jn-01-14-b2";
			playTxt52e();
		}
	}

	function playTxt52e(){
		if(txt52e == 1){	
			mp3_part = "MM-Ch-Jn-01-14-b2"; 
			showPage(27);		 
			play();
		}else{
			mp3_part = "MM-Ch-Jn-01-14-c2";
			playTxt53e();
		}
	}

	function playTxt53e(){
		if(txt53e == 1){	
			mp3_part = "MM-Ch-Jn-01-14-c2"; 	
			showPage(27);	 
			play();
		}else{
			mp3_part = "MM-Ch-Jn-01-14-d2";
			playTxt54e();
		}
	}

	function playTxt54e(){
		if(txt54e == 1){	
			mp3_part = "MM-Ch-Jn-01-14-d2"; 	
			showPage(28);	 
			play();
		}else{
			mp3_part = "MM-Ch-Jn-01-14-e2";
			playTxt55e();
		}
	}

	function playTxt55e(){
		if(txt55e == 1){	
			mp3_part = "MM-Ch-Jn-01-14-e2"; 	
			showPage(28);	 
			play();
		}else{
			mp3_part = "MM-Ch-Jn-01-14-f2";
			playTxt56e();
		}
	}

	function playTxt56e(){
		if(txt56e == 1){	
			mp3_part = "MM-Ch-Jn-01-14-f2"; 
			showPage(29);		 
			play();
		}else{
			mp3_part = "MM-Ch-Jn-01-14-g2";
			playTxt57e();
		}
	}

	function playTxt57e(){
		if(txt57e == 1){	
			mp3_part = "MM-Ch-Jn-01-14-g2"; 
			showPage(29);		 
			play();
		}else{
			mp3_part = "MM-Ch-Jn-01-14-h2";
			playTxt58e();
		}
	}

	function playTxt58e(){
		if(txt58e == 1){	
			mp3_part = "MM-Ch-Jn-01-14-h2"; 	
			showPage(30);	 
			play();
		}else{
			mp3_part = "MM-Ch-Jn-01-14-i2";
			playTxt59e();
		}
	}

	function playTxt59e(){
		if(txt59e == 1){	
			mp3_part = "MM-Ch-Jn-01-14-i2"; 
			showPage(30);		 
			play();
		}else{
			mp3_part = "MM-Ch-Jn-01-01-a1";
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
			if(mp3_part == "MM-Ch-Jn-01-01-a1"){
				playTxt2();
			}else if(mp3_part == "MM-Ch-Jn-01-01-b1"){
				playTxt3();
			}else if(mp3_part == "MM-Ch-Jn-01-01-c1"){
				playTxt4();
			}else if(mp3_part == "MM-Ch-Jn-01-01-d1"){
				playTxt5();
			}else if(mp3_part == "MM-Ch-Jn-01-01-e1"){
				playTxt6();
			}else if(mp3_part == "MM-Ch-Jn-01-01-f1"){
				playTxt7();
			}else if(mp3_part == "MM-Ch-Jn-01-02-a1"){
				playTxt8();
			}else if(mp3_part == "MM-Ch-Jn-01-02-b1"){
				playTxt9();
			}else if(mp3_part == "MM-Ch-Jn-01-03-a1"){
				playTxt10();
			}else if(mp3_part == "MM-Ch-Jn-01-03-b1"){
				playTxt11();
			}else if(mp3_part == "MM-Ch-Jn-01-03-c1"){
				playTxt12();
			}else if(mp3_part == "MM-Ch-Jn-01-03-d1"){
				playTxt13();
			}else if(mp3_part == "MM-Ch-Jn-01-04-a1"){
				playTxt14();
			}else if(mp3_part == "MM-Ch-Jn-01-04-b1"){
				playTxt15();
			}else if(mp3_part == "MM-Ch-Jn-01-04-c1"){
				playTxt16();
			}else if(mp3_part == "MM-Ch-Jn-01-04-d1"){
				playTxt17();
			}else if(mp3_part == "MM-Ch-Jn-01-05-a1"){
				playTxt18();
			}else if(mp3_part == "MM-Ch-Jn-01-05-b1"){
				playTxt19();
			}else if(mp3_part == "MM-Ch-Jn-01-05-c1"){
				playTxt20();
			}else if(mp3_part == "MM-Ch-Jn-01-05-d1"){
				playTxt21();
			}else if(mp3_part == "MM-Ch-Jn-01-06-a1"){
				playTxt22();
			}else if(mp3_part == "MM-Ch-Jn-01-06-b1"){
				playTxt23();
			}else if(mp3_part == "MM-Ch-Jn-01-06-c1"){
				playTxt24();
			}else if(mp3_part == "MM-Ch-Jn-01-06-d1"){
				playTxt25();
			}else if(mp3_part == "MM-Ch-Jn-01-07-a1"){
				playTxt26();
			}else if(mp3_part == "MM-Ch-Jn-01-07-b1"){
				playTxt27();
			}else if(mp3_part == "MM-Ch-Jn-01-07-c1"){
				playTxt28();
			}else if(mp3_part == "MM-Ch-Jn-01-07-d1"){
				playTxt29();
			}else if(mp3_part == "MM-Ch-Jn-01-08-a1"){
				playTxt30();
			}else if(mp3_part == "MM-Ch-Jn-01-08-b1"){
				playTxt31();
			}else if(mp3_part == "MM-Ch-Jn-01-08-c1"){
				playTxt32();
			}else if(mp3_part == "MM-Ch-Jn-01-08-d1"){
				playTxt33();
			}else if(mp3_part == "MM-Ch-Jn-01-09-a1"){
				playTxt34();
			}else if(mp3_part == "MM-Ch-Jn-01-09-b1"){
				playTxt35();
			}else if(mp3_part == "MM-Ch-Jn-01-09-c1"){
				playTxt36();
			}else if(mp3_part == "MM-Ch-Jn-01-09-d1"){
				playTxt37();
			}else if(mp3_part == "MM-Ch-Jn-01-10-a1"){
				playTxt38();
			}else if(mp3_part == "MM-Ch-Jn-01-10-b1"){
				playTxt39();
			}else if(mp3_part == "MM-Ch-Jn-01-10-c1"){
				playTxt40();
			}else if(mp3_part == "MM-Ch-Jn-01-10-d1"){
				playTxt41();
			}else if(mp3_part == "MM-Ch-Jn-01-11-a1"){
				playTxt42();
			}else if(mp3_part == "MM-Ch-Jn-01-11-b1"){
				playTxt43();
			}else if(mp3_part == "MM-Ch-Jn-01-11-c1"){
				playTxt44();
			}else if(mp3_part == "MM-Ch-Jn-01-11-d1"){
				playTxt45();
			}else if(mp3_part == "MM-Ch-Jn-01-12-a1"){
				playTxt46();
			}else if(mp3_part == "MM-Ch-Jn-01-12-b1"){
				playTxt47();
			}else if(mp3_part == "MM-Ch-Jn-01-12-c1"){
				playTxt48();
			}else if(mp3_part == "MM-Ch-Jn-01-12-d1"){
				playTxt49();
			}else if(mp3_part == "MM-Ch-Jn-01-13-e1"){
				playTxt50();
			}else if(mp3_part == "MM-Ch-Jn-01-13-f1"){
				playTxt51();
			}else if(mp3_part == "MM-Ch-Jn-01-14-a1"){
				playTxt52();
			}else if(mp3_part == "MM-Ch-Jn-01-14-b1"){
				playTxt53();
			}else if(mp3_part == "MM-Ch-Jn-01-14-c1"){
				playTxt54();
			}else if(mp3_part == "MM-Ch-Jn-01-14-d1"){
				playTxt55();
			}else if(mp3_part == "MM-Ch-Jn-01-14-e1"){
				playTxt56();
			}else if(mp3_part == "MM-Ch-Jn-01-14-f1"){
				playTxt57();
			}else if(mp3_part == "MM-Ch-Jn-01-14-g1"){
				playTxt58();
			}else if(mp3_part == "MM-Ch-Jn-01-14-h1"){
				playTxt59();
			}else if(mp3_part == "MM-Ch-Jn-01-14-i1"){
				playTxt1e();
			}
			/////////////////
			else if(mp3_part == "MM-Ch-Jn-01-01-a2"){
				playTxt2e();
			}else if(mp3_part == "MM-Ch-Jn-01-01-b2"){
				playTxt3e();
			}else if(mp3_part == "MM-Ch-Jn-01-01-c2"){
				playTxt4e();
			}else if(mp3_part == "MM-Ch-Jn-01-01-d2"){
				playTxt5e();
			}else if(mp3_part == "MM-Ch-Jn-01-01-e2"){
				playTxt6e();
			}else if(mp3_part == "MM-Ch-Jn-01-01-f2"){
				playTxt7e();
			}else if(mp3_part == "MM-Ch-Jn-01-02-a2"){
				playTxt8e();
			}else if(mp3_part == "MM-Ch-Jn-01-02-b2"){
				playTxt9();
			}else if(mp3_part == "MM-Ch-Jn-01-03-a2"){
				playTxt10e();
			}else if(mp3_part == "MM-Ch-Jn-01-03-b2"){
				playTxt11e();
			}else if(mp3_part == "MM-Ch-Jn-01-03-c2"){
				playTxt12e();
			}else if(mp3_part == "MM-Ch-Jn-01-03-d2"){
				playTxt13e();
			}else if(mp3_part == "MM-Ch-Jn-01-04-a2"){
				playTxt14e();
			}else if(mp3_part == "MM-Ch-Jn-01-04-b2"){
				playTxt15e();
			}else if(mp3_part == "MM-Ch-Jn-01-04-c2"){
				playTxt16e();
			}else if(mp3_part == "MM-Ch-Jn-01-04-d2"){
				playTxt17e();
			}else if(mp3_part == "MM-Ch-Jn-01-05-a2"){
				playTxt18e();
			}else if(mp3_part == "MM-Ch-Jn-01-05-b2"){
				playTxt19e();
			}else if(mp3_part == "MM-Ch-Jn-01-05-c2"){
				playTxt20e();
			}else if(mp3_part == "MM-Ch-Jn-01-05-d2"){
				playTxt21e();
			}else if(mp3_part == "MM-Ch-Jn-01-06-a2"){
				playTxt22e();
			}else if(mp3_part == "MM-Ch-Jn-01-06-b2"){
				playTxt23e();
			}else if(mp3_part == "MM-Ch-Jn-01-06-c2"){
				playTxt24e();
			}else if(mp3_part == "MM-Ch-Jn-01-06-d2"){
				playTxt25e();
			}else if(mp3_part == "MM-Ch-Jn-01-07-a2"){
				playTxt26e();
			}else if(mp3_part == "MM-Ch-Jn-01-07-b2"){
				playTxt27e();
			}else if(mp3_part == "MM-Ch-Jn-01-07-c2"){
				playTxt28e();
			}else if(mp3_part == "MM-Ch-Jn-01-07-d2"){
				playTxt29e();
			}else if(mp3_part == "MM-Ch-Jn-01-08-a2"){
				playTxt30e();
			}else if(mp3_part == "MM-Ch-Jn-01-08-b2"){
				playTxt31e();
			}else if(mp3_part == "MM-Ch-Jn-01-08-c2"){
				playTxt32e();
			}else if(mp3_part == "MM-Ch-Jn-01-08-d2"){
				playTxt33e();
			}else if(mp3_part == "MM-Ch-Jn-01-09-a2"){
				playTxt34e();
			}else if(mp3_part == "MM-Ch-Jn-01-09-b2"){
				playTxt35e();
			}else if(mp3_part == "MM-Ch-Jn-01-09-c2"){
				playTxt36e();
			}else if(mp3_part == "MM-Ch-Jn-01-09-d2"){
				playTxt37e();
			}else if(mp3_part == "MM-Ch-Jn-01-10-a2"){
				playTxt38e();
			}else if(mp3_part == "MM-Ch-Jn-01-10-b2"){
				playTxt39e();
			}else if(mp3_part == "MM-Ch-Jn-01-10-c2"){
				playTxt40e();
			}else if(mp3_part == "MM-Ch-Jn-01-10-d2"){
				playTxt41e();
			}else if(mp3_part == "MM-Ch-Jn-01-11-a2"){
				playTxt42e();
			}else if(mp3_part == "MM-Ch-Jn-01-11-b2"){
				playTxt43e();
			}else if(mp3_part == "MM-Ch-Jn-01-11-c2"){
				playTxt44e();
			}else if(mp3_part == "MM-Ch-Jn-01-11-d2"){
				playTxt45e();
			}else if(mp3_part == "MM-Ch-Jn-01-12-a2"){
				playTxt46e();
			}else if(mp3_part == "MM-Ch-Jn-01-12-b2"){
				playTxt47e();
			}else if(mp3_part == "MM-Ch-Jn-01-12-c2"){
				playTxt48e();
			}else if(mp3_part == "MM-Ch-Jn-01-12-d2"){
				playTxt49e();
			}else if(mp3_part == "MM-Ch-Jn-01-13-e2"){
				playTxt50e();
			}else if(mp3_part == "MM-Ch-Jn-01-13-f2"){
				playTxt51e();
			}else if(mp3_part == "MM-Ch-Jn-01-14-a2"){
				playTxt52e();
			}else if(mp3_part == "MM-Ch-Jn-01-14-b2"){
				playTxt53e();
			}else if(mp3_part == "MM-Ch-Jn-01-14-c2"){
				playTxt54e();
			}else if(mp3_part == "MM-Ch-Jn-01-14-d2"){
				playTxt55e();
			}else if(mp3_part == "MM-Ch-Jn-01-14-e2"){
				playTxt56e();
			}else if(mp3_part == "MM-Ch-Jn-01-14-f2"){
				playTxt57e();
			}else if(mp3_part == "MM-Ch-Jn-01-14-g2"){
				playTxt58e();
			}else if(mp3_part == "MM-Ch-Jn-01-14-h2"){
				playTxt59e();
			}else if(mp3_part == "MM-Ch-Jn-01-14-i2"){
				wait(800);			
				// playTxt1();
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