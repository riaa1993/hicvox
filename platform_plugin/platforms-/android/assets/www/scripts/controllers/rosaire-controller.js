'use strict';

askitApp.controller('rosaireCtrl', ['$scope', '$timeout', '$cordovaFile', '$cordovaFileTransfer', '$state', function($scope, $timeout, $cordovaFile, $cordovaFileTransfer, $state) {
	
  $scope.gotoCarte = function () {
      $state.go('carte', null, { reload: true });
  }

  document.addEventListener('deviceready', function () {
    screen.orientation.unlock();
  });

  var dwn_audio = ['Ros-fr-mys-joyeux.mp3', 'Ros-fr-mys-douloureux.mp3', 'Ros-fr-mys-lumineux.mp3', 'Ros-fr-mys-glorieux.mp3', 'Ros-fr-Credo.mp3', 'Ros-fr-Pater.mp3', 'Ros-BVM1.mp3', 'Ros-BVM2.mp3', 'Ros-BVM3.mp3', 'Ros-fr-Gloria.mp3', 'Ros-fr-AveMaria.mp3', 'Ros-fr-Mystere-Annonciation.mp3', 'Ros-fr-Mystere-Visitation.mp3', 'Ros-fr-Mystere-Nativite.mp3', 'Ros-fr-Mystere-Presentation.mp3', 'Ros-fr-Mystere-Recouvrement.mp3', 'Ros-fr-Mon-bon-Jesus.mp3', 'Ros-fr-S-Michel.mp3', 'Ros-fr-Fideles-defunts.mp3', 'Ros-fr-Mystere-Agonie.mp3', 'Ros-fr-Mystere-Flagelation.mp3', 'Ros-fr-Mystere-Couronnement-epines.mp3', 'Ros-fr-Mystere-Portement.mp3', 'Ros-fr-Mystere-Crucifixion.mp3', 'Ros-fr-Mystere-Bapteme.mp3', 'Ros-fr-Mystere-Cana.mp3', 'Ros-fr-Mystere-Proclamation.mp3', 'Ros-fr-Mystere-Transfiguration.mp3', 'Ros-fr-Mystere-Eucharistie.mp3', 'Ros-fr-Mystere-Resurrection.mp3', 'Ros-fr-Mystere-Ascension.mp3', 'Ros-fr-Mystere-Pentecote.mp3', 'Ros-fr-Mystere-Assomption.mp3', 'Ros-fr-Mystere-Couronnement-BVM.mp3'];      
  var dwn_image = ['Ros-1.jpg', 'Ros-2.jpg', 'Ros-3.jpg', 'Ros-4.jpg', 'Ros-5.jpg', 'Ros-6.jpg', 'Ros-7.jpg', 'Ros-8.jpg', 'Ros-9.jpg', 'Ros-10.jpg', 'Ros-4ga1.gif', 'Ros-2dcr4.jpeg', 'Ros-2df1.jpeg', 'Ros-2df5.jpeg', 'Ros-2dp3.jpeg', 'Ros-3lb5.jpeg', 'Ros-3ln5.jpeg', 'Ros-3lr1.jpeg', 'Roses.jpeg', 'Ros-Fideles-defunts.jpeg', 'SS-Pape.jpeg', 'Ros-1ja1.jpg', 'Ros-1ja2.jpg', 'Ros-1ja3.jpg', 'Ros-1ja4.jpg', 'Ros-1ja5.jpg', 'Ros-1ja6.jpg', 'Ros-1ja7.jpg', 'Ros-1ja8.jpg', 'Ros-1ja9.jpg', 'Ros-1ja10.jpg', 'Ros-1jn1.jpg', 'Ros-1jn2.jpg', 'Ros-1jn3.jpg', 'Ros-1jn4.jpg', 'Ros-1jn5.jpg', 'Ros-1jn6.jpg', 'Ros-1jn7.jpg', 'Ros-1jn8.jpg', 'Ros-1jn9.jpg', 'Ros-1jn10.jpg', 'Ros-1jp1.jpg', 'Ros-1jp2.jpg', 'Ros-1jp3.jpg', 'Ros-1jp4.jpg', 'Ros-1jp5.jpg', 'Ros-1jp6.jpg', 'Ros-1jp7.jpg', 'Ros-1jp8.jpg', 'Ros-1jp9.jpg', 'Ros-1jp10.jpg', 'Ros-1jr1.jpg', 'Ros-1jr2.jpg', 'Ros-1jr3.jpg', 'Ros-1jr4.jpg', 'Ros-1jr5.jpg', 'Ros-1jr6.jpg', 'Ros-1jr7.jpg', 'Ros-1jr8.jpg', 'Ros-1jr9.jpg', 'Ros-1jr10.jpg', 'Ros-1jv1.jpg', 'Ros-1jv2.jpg', 'Ros-1jv3.jpg', 'Ros-1jv4.jpg', 'Ros-1jv5.jpg', 'Ros-1jv6.jpg', 'Ros-1jv7.jpg', 'Ros-1jv8.jpg', 'Ros-1jv9.jpg', 'Ros-1jv10.jpg', 'Ros-2da1.jpg', 'Ros-2da2.jpg', 'Ros-2da3.jpg', 'Ros-2da4.jpg', 'Ros-2da5.jpg', 'Ros-2da6.jpg', 'Ros-2da7.jpg', 'Ros-2da8.jpg', 'Ros-2da9.jpg', 'Ros-2da10.jpg', 'Ros-2dc1.jpg', 'Ros-2dc2.jpg', 'Ros-2dc3.jpg', 'Ros-2dc4.jpg', 'Ros-2dc5.jpg', 'Ros-2dc6.jpg', 'Ros-2dc7.jpg', 'Ros-2dc8.jpg', 'Ros-2dc9.jpg', 'Ros-2dc10.jpg', 'Ros-2dcr1.jpg', 'Ros-2dcr2.jpg', 'Ros-2dcr3.jpg', 'Ros-2dcr5.jpg', 'Ros-2dcr6.jpg', 'Ros-2dcr7.jpg', 'Ros-2dcr8.jpg', 'Ros-2dcr9.jpg', 'Ros-2dcr10.jpg', 'Ros-2df2.jpg', 'Ros-2df3.jpg', 'Ros-2df4.jpg', 'Ros-2df6.jpg', 'Ros-2df7.jpg', 'Ros-2df8.jpg', 'Ros-2df9.jpg', 'Ros-2df10.jpg', 'Ros-2dp1.jpg', 'Ros-2dp2.jpg', 'Ros-2dp4.jpg', 'Ros-2dp5.jpg', 'Ros-2dp6.jpg', 'Ros-2dp7.jpg', 'Ros-2dp8.jpg', 'Ros-2dp9.jpg', 'Ros-2dp10.jpg', 'Ros-3lb1.jpg', 'Ros-3lb2.jpg', 'Ros-3lb3.jpg', 'Ros-3lb4.jpg', 'Ros-3lb6.jpg', 'Ros-3lb7.jpg', 'Ros-3lb8.jpg', 'Ros-3lb9.jpg', 'Ros-3lb10.jpg', 'Ros-3le2.jpg', 'Ros-3le3.jpg', 'Ros-3le4.jpg', 'Ros-3le5.jpg', 'Ros-3le6.jpg', 'Ros-3le7.jpg', 'Ros-3le8.jpg', 'Ros-3le9.jpg', 'Ros-3le10.jpg', 'Ros-3ln1.jpg', 'Ros-3ln2.jpg', 'Ros-3ln3.jpg', 'Ros-3ln4.jpg', 'Ros-3ln6.jpg', 'Ros-3ln7.jpg', 'Ros-3ln8.jpg', 'Ros-3ln9.jpg', 'Ros-3ln10.jpg', 'Ros-3lr2.jpg', 'Ros-3lr3.jpg', 'Ros-3lr4.jpg', 'Ros-3lr5.jpg', 'Ros-3lr6.jpg', 'Ros-3lr7.jpg', 'Ros-3lr8.jpg', 'Ros-3lr9.jpg', 'Ros-3lr10.jpg', 'Ros-3lt1.jpg', 'Ros-3lt2.jpg', 'Ros-3lt3.jpg', 'Ros-3lt4.jpg', 'Ros-3lt5.jpg', 'Ros-3lt6.jpg', 'Ros-3lt7.jpg', 'Ros-3lt8.jpg', 'Ros-3lt9.jpg', 'Ros-3lt10.jpg', 'Ros-4ga2.jpg', 'Ros-4ga3.jpg', 'Ros-4ga4.jpg', 'Ros-4ga5.jpg', 'Ros-4ga6.jpg', 'Ros-4ga7.jpg', 'Ros-4ga8.jpg', 'Ros-4ga9.jpg', 'Ros-4ga10.jpg', 'Ros-4gas1.jpg', 'Ros-4gas2.jpg', 'Ros-4gas3.jpg', 'Ros-4gas4.jpg', 'Ros-4gas5.jpg', 'Ros-4gas6.jpg', 'Ros-4gas7.jpg', 'Ros-4gas8.jpg', 'Ros-4gas9.jpg', 'Ros-4gas10.jpg', 'Ros-4gc1.jpg', 'Ros-4gc2.jpg', 'Ros-4gc3.jpg', 'Ros-4gc4.jpg', 'Ros-4gc5.jpg', 'Ros-4gc6.jpg', 'Ros-4gc7.jpg', 'Ros-4gc8.jpg', 'Ros-4gc9.jpg', 'Ros-4gc10.jpg', 'Ros-4gp1.jpg', 'Ros-4gp2.jpg', 'Ros-4gp3.jpg', 'Ros-4gp4.jpg', 'Ros-4gp5.jpg', 'Ros-4gp6.jpg', 'Ros-4gp7.jpg', 'Ros-4gp8.jpg', 'Ros-4gp9.jpg', 'Ros-4gp10.jpg', 'Ros-4gr1.jpg', 'Ros-4gr2.jpg', 'Ros-4gr3.jpg', 'Ros-4gr4.jpg', 'Ros-4gr5.jpg', 'Ros-4gr6.jpg', 'Ros-4gr7.jpg', 'Ros-4gr8.jpg', 'Ros-4gr9.jpg', 'Ros-4gr10.jpg', 'Ros-BVM1.jpg', 'Ros-BVM2.jpg', 'Ros-BVM3.jpg', 'Ros-Credo.jpg', 'Ros-douloureux.jpg', 'Roses.jpg', 'Ros-Gloria.jpg', 'Ros-glorieux.jpg', 'Ros-lumineux.jpg', 'Ros-Mon-bon-Jesus.jpg', 'Ros-mys-douloureux.jpg', 'Ros-mys-glorieux.jpg', 'Ros-mys-joyeux.jpg', 'Ros-mys-lumineux.jpg', 'Ros-Mystere-Annonciation.jpg', 'Ros-Mystere-Ascension.jpg', 'Ros-Mystere-Assomption.jpg', 'Ros-Mystere-Bapteme.jpg', 'Ros-Mystere-Cana.jpg', 'Ros-Mystere-Couronnement-BVM.jpg', 'Ros-Mystere-Eucharistie.jpg', 'Ros-Mystere-Nativite.jpg', 'Ros-Mystere-Pentecote.jpg', 'Ros-Mystere-Presentation.jpg', 'Ros-Mystere-Proclamation.jpg', 'Ros-Mystere-Recouvrement.jpg', 'Ros-Mystere-Resurrection.jpg', 'Ros-Mysteres.jpg', 'Ros-Mystere-Transfiguration.jpg', 'Ros-Mystere-Visitation.jpg', 'Ros-Pater.jpg', 'Ros-S-Michel.jpg', 'Ros-3le1.png', 'Ros-glorieux.png', 'Ros-joyeux.png', 'Ros-Mystere-Couronnement-BVM.png', 'WP_Mysteres_douloureux.png', 'WP_Mysteres_glorieux.png', 'WP_Mysteres_joyeux.png', 'WP_Mysteres_lumineux.png'];    
  $scope.tousAudio = dwn_audio.length;
  $scope.restantAudio = dwn_audio.length;
  $scope.tousImage = dwn_image.length;
  $scope.restantImage = dwn_image.length;
  var trustHosts = true;
  var options = {};
  var url, targetPath;
  if(localStorage.getItem("check-rosaire") == null){
    $("#downloadBtn").click();
    localStorage.setItem("check-rosaire", 1);
  }
  if(localStorage.getItem("check-download-audio") == null){  }else{    
    document.getElementById('div-audio').style.display = "none";
  }
  if(localStorage.getItem("check-download-image") == null){  }else{    
    document.getElementById('div-image').style.display = "none";
  }
  if(localStorage.getItem("check-download-image") == 1 && localStorage.getItem("check-download-audio") == 1){ 
    document.getElementById('downloadBtn').style.display = "none";
  }
  document.addEventListener("deviceready", function () {
    
    var chemin_externe_audio = cordova.file.externalRootDirectory+"Hicvox/Audio/";
    var chemin_externe_image = cordova.file.externalRootDirectory+"Hicvox/Image/";
    var Ros_fr_mys_joyeux = chemin_externe_audio+'Ros-fr-mys-joyeux.mp3';
    var Ros_fr_mys_douloureux = chemin_externe_audio+'Ros-fr-mys-douloureux.mp3';
    var Ros_fr_mys_lumineux = chemin_externe_audio+'Ros-fr-mys-lumineux.mp3'; 
    var Ros_fr_mys_glorieux = chemin_externe_audio+'Ros-fr-mys-glorieux.mp3';
    var Ros_fr_credo = chemin_externe_audio+'Ros-fr-Credo.mp3';
    var Ros_fr_pater = chemin_externe_audio+'Ros-fr-Pater.mp3';
    var Ros_fr_AveMaria_bvm_1 = chemin_externe_audio+'Ros-BVM1.mp3';
    var Ros_fr_AveMaria_bvm_2 = chemin_externe_audio+'Ros-BVM2.mp3';
    var Ros_fr_AveMaria_bvm_3 = chemin_externe_audio+'Ros-BVM3.mp3';
    var Ros_fr_Gloria = chemin_externe_audio+'Ros-fr-Gloria.mp3';
    var Ros_fr_AveMaria = chemin_externe_audio+'Ros-fr-AveMaria.mp3';
    var Ros_fr_Mystere_Annonciation = chemin_externe_audio+'Ros-fr-Mystere-Annonciation.mp3';
    var Ros_fr_Mystere_Visitation = chemin_externe_audio+'Ros-fr-Mystere-Visitation.mp3';
    var Ros_fr_Mystere_Nativite = chemin_externe_audio+'Ros-fr-Mystere-Nativite.mp3';
    var Ros_fr_Mystere_Presentation = chemin_externe_audio+'Ros-fr-Mystere-Presentation.mp3';
    var Ros_fr_Mystere_Recouvrement = chemin_externe_audio+'Ros-fr-Mystere-Recouvrement.mp3';
    var Ros_fr_Mystere_Mon_bon_Jesus = chemin_externe_audio+'Ros-fr-Mon-bon-Jesus.mp3';
    var Ros_fr_Mystere_S_Michel = chemin_externe_audio+'Ros-fr-S-Michel.mp3';
    var Ros_fr_Mystere_Fideles_defunts = chemin_externe_audio+'Ros-fr-Fideles-defunts.mp3';
    var Ros_fr_Mystere_Agonie = chemin_externe_audio+'Ros-fr-Mystere-Agonie.mp3';
    var Ros_fr_Mystere_Flagelation = chemin_externe_audio+'Ros-fr-Mystere-Flagelation.mp3';
    var Ros_fr_Mystere_Couronnement_epines = chemin_externe_audio+'Ros-fr-Mystere-Couronnement-epines.mp3';
    var Ros_fr_Mystere_Portement = chemin_externe_audio+'Ros-fr-Mystere-Portement.mp3';
    var Ros_fr_Mystere_Crucifixion = chemin_externe_audio+'Ros-fr-Mystere-Crucifixion.mp3';
    var Ros_fr_Mystere_Mystere_Bapteme = chemin_externe_audio+'Ros-fr-Mystere-Bapteme.mp3';
    var Ros_fr_Mystere_Cana = chemin_externe_audio+'Ros-fr-Mystere-Cana.mp3';
    var Ros_fr_Mystere_Proclamation = chemin_externe_audio+'Ros-fr-Mystere-Proclamation.mp3';
    var Ros_fr_Mystere_Transfiguration = chemin_externe_audio+'Ros-fr-Mystere-Transfiguration.mp3';
    var Ros_fr_Mystere_Eucharistie = chemin_externe_audio+'Ros-fr-Mystere-Eucharistie.mp3';
    var Ros_fr_Mystere_Resurrection = chemin_externe_audio+'Ros-fr-Mystere-Resurrection.mp3';
    var Ros_fr_Mystere_Ascension = chemin_externe_audio+'Ros-fr-Mystere-Ascension.mp3';
    var Ros_fr_Mystere_Pentecote = chemin_externe_audio+'Ros-fr-Mystere-Pentecote.mp3';
    var Ros_fr_Mystere_Assomption = chemin_externe_audio+'Ros-fr-Mystere-PeAssomptionntecote.mp3';
    var Ros_fr_Mystere_Couronnement_BVM = chemin_externe_audio+'Ros-fr-Mystere-Couronnement-BVM.mp3';
  }, false);
  document.addEventListener('deviceready', function () {
      $cordovaFile.getFreeDiskSpace()
        .then(function (success) {
          var free = (success / 1024) / 1024;
          $scope.freeSpace = free.toFixed(2);
        }, function (error) {});      
  });
  $scope.stopDownloadAudio = function(){
    i = dwn_audio.length;
  }
  $scope.stopDownloadImage = function(){
    w = dwn_image.length;
  }
  $scope.downloadAudio = function(){
    var i = 0;
    $scope.restantAudio = dwn_audio.length;
    $scope.loopAudio(i);    
  }
  $scope.downloadImage = function(){
    var w = 0;
    $scope.restantImage = dwn_image.length;
    $scope.loopImage(w);    
  }
  $scope.loopImage = function (w) {
    if(w >= dwn_image.length-1){              
      document.getElementById('div-image').style.display = "none";
      localStorage.setItem("check-download-image", 1); 
      if(localStorage.getItem("check-download-image") == 1 && localStorage.getItem("check-download-audio") == 1){ 
        document.getElementById('downloadBtn').style.display = "none";
      }   
    }
    if(w < dwn_image.length){
        var url = "https://hicvox.org/admin/Media/Image/Rosaire/"+dwn_image[w]; 
        var targetPath = cordova.file.externalRootDirectory+"Hicvox/Image/"+dwn_image[w];        
        $cordovaFile.checkFile(cordova.file.externalRootDirectory+"Hicvox/Image/", dwn_image[w])
          .then(function (success) {
            w++;            
            if($scope.restantImage <= 0){
                $scope.restantImage = 0;
            }else{
                $scope.restantImage--;
            }
            $scope.loopImage(w);
          }, function (error) {
            $cordovaFileTransfer.download(url, targetPath, options, trustHosts)
              .then(function(result) {
                w++;
                if($scope.restantImage <= 0){
                    $scope.restantImage = 0;
                }else{
                    $scope.restantImage--;
                }
                $scope.loopImage(w);
              }, function(err) {
                alert('Pour effectuer cette opération vous devez être connecté au réseau Internet');
              }, function (progress) {
                $timeout(function () {
                  $scope.downloadProgressImage = parseInt((progress.loaded/progress.total)*100);
                });
            });
        });                    
    }    
  }  
  $scope.loopAudio = function (i) {
    if(i >= dwn_audio.length-1){
      document.getElementById('div-audio').style.display = "none";
      localStorage.setItem("check-download-audio", 1);
      if(localStorage.getItem("check-download-image") == 1 && localStorage.getItem("check-download-audio") == 1){ 
        document.getElementById('downloadBtn').style.display = "none";
      }
    }
    if(i < dwn_audio.length){
          var url = "https://hicvox.org/admin/Media/Audio/Rosaire/"+dwn_audio[i]; 
          var targetPath = cordova.file.externalRootDirectory+"Hicvox/Audio/"+dwn_audio[i];        
          $cordovaFile.checkFile(cordova.file.externalRootDirectory+"Hicvox/Audio/", dwn_audio[i])
            .then(function (success) {
              i++;              
              if($scope.restantAudio <= 0){
                  $scope.restantAudio = 0;
              }else{
                  $scope.restantAudio--;
              }
              $scope.loopAudio(i);
            }, function (error) {
              $cordovaFileTransfer.download(url, targetPath, options, trustHosts)
                .then(function(result) {
                  i++;
                  if($scope.restantAudio <= 0){
                      $scope.restantAudio = 0;
                  }else{
                      $scope.restantAudio--;
                  }
                  $scope.loopAudio(i);
                }, function(err) {
                  alert('Pour effectuer cette opération vous devez être connecté au réseau Internet');
                }, function (progress) {
                  $timeout(function () {
                    $scope.downloadProgressAudio = parseInt((progress.loaded/progress.total)*100);
                  });
              });
          });                    
      }
  }    
	var step = 1;
	$scope.next = function(){	
		step = 1;
		changeAveMariaString();
		nextAveMariaNum();
		console.log(nextOffice[curOffice+1]);
		var source = nextOffice[curOffice+1];
		var res = source.split("/");
		$("#fichiernom").append("<strong>"+ res[res.length-1] + "</strong><br/>" );     
		officePlayer.src = nextOffice[curOffice+1];
		curOffice++;
	}

  $scope.prev = function(){			
    step = 0;
    changeAveMariaString();
    previousAveMariaNum();
    console.log(nextOffice[curOffice-1]);
    officePlayer.src = nextOffice[curOffice-1];
    curOffice--;
  }
  var cleA = 0;
  $scope.pause = function(){			    
    cleA = 1;
    officePlayer.pause();    
    document.getElementById('pause').style.display = "none";
    document.getElementById('play').style.display = "inline-block";
  }  
  $scope.play = function(){	  
    cleA = 0;
    officePlayer.play();    
    document.getElementById('pause').style.display = "inline-block";
    document.getElementById('play').style.display = "none";
  }
 
   function wait(ms){
     var start = new Date().getTime();
     var end = start;
     while(end < start + ms) {
       end = new Date().getTime();
    }
  }
  var clé = 0;
  $scope.showMoteurRecherche = function(){  
    clé = 1;
    $scope.pause();
    wait(500);    
    document.getElementById('moteurRecherche').style.display = "inline-block";
  }
  var cleB = 0;
  function progressBar(value){
    cleB = 1;
    var audio = document.getElementById('officePlayer');
    audio.currentTime = value;
  }
  function imageExists(url, callback) {
    var img = new Image();
    img.onload = function() { callback(true); };
    img.onerror = function() { callback(false); };
    img.src = url;
  }
  function rangeCSS(){ 
    var val = $('.range').val();
    var max = $('.range').attr('max');
    var current = val * 100 / max;
    $('.range').css(
      'background',
      'linear-gradient(to right, #0275d8 ' + current + '%, #777 ' + 10 + '%)'       
    );
  }

  var numS_1 = "1ja";
  var numS_2 = "1jv";
  var numS_3 = "1jn";
  var numS_4 = "1jp";
  var numS_5 = "1jr";
  var mystere;

  if(mystere == "joyeux"){
    numS_1 = "1ja";
    numS_2 = "1jv";
    numS_3 = "1jn";
    numS_4 = "1jp";
    numS_5 = "1jr";
  }
  if(mystere == "douloureux"){
    numS_1 = "2da";
    numS_2 = "2df";
    numS_3 = "2dc";
    numS_4 = "2dp";
    numS_5 = "2dcr";
  }
  if(mystere == "lumineux"){
    numS_1 = "3lb";
    numS_2 = "3lc";
    numS_3 = "3lp";
    numS_4 = "3lt";
    numS_5 = "3le";
  }
  if(mystere == "glorieux"){
    numS_1 = "4gr";
    numS_2 = "4ga";
    numS_3 = "4gp";
    numS_4 = "4gas";
    numS_5 = "4gc";
  } 

  var aveMariaString = "";
  var aveMariaNum = 1;

  function changeAveMariaNum(){
    var audio = document.getElementById('officePlayer'); 
    var res = audio.src.split("/");
    var string = res[res.length-1];    
    var c_mp3 = string.substring(0, string.length-4);  
    if(c_mp3 == "Ros-fr-AveMaria"){
      if(aveMariaNum < 10){
        aveMariaNum = aveMariaNum + 1;  
      }else{
        aveMariaNum = 1;  
      }             
    }
  }

  function nextAveMariaNum(){
    var audio = document.getElementById('officePlayer'); 
    var res = audio.src.split("/");
    var string = res[res.length-1];    
    var c_mp3 = string.substring(0, string.length-4);  
    if(c_mp3 == "Ros-fr-AveMaria"){    
      if(aveMariaNum < 10){
        aveMariaNum = aveMariaNum + 1;  
      }else{
        aveMariaNum = 1;  
      }              
    }
  }

  function previousAveMariaNum(){
    var audio = document.getElementById('officePlayer'); 
    var res = audio.src.split("/");
    var string = res[res.length-1];    
    var c_mp3 = string.substring(0, string.length-4);  
    if(c_mp3 == "Ros-fr-AveMaria"){    
      if(aveMariaNum > 1){
        aveMariaNum = aveMariaNum - 1;  
      }else{
        aveMariaNum = 1;  
      }              
    }

    if(c_mp3 == "Ros-fr-Gloria"){          
      var source = nextOffice[curOffice-1];
      var res = source.split("/");
      var prevOffice =  res[res.length-1].replace(".mp3", "");
      if(prevOffice == "Ros-fr-AveMaria"){
        aveMariaNum = 10; 
      }
    }
  }

  function changeAveMariaString(){
    var audio = document.getElementById('officePlayer'); 
    var res = audio.src.split("/");
    var string = res[res.length-1];    
    var c_mp3 = string.substring(0, string.length-4);  
    if(c_mp3 == "Ros-fr-Gloria"){
      if(step == 1){
        if(aveMariaString == ""){
          aveMariaString = numS_1;
        }else if(aveMariaString == numS_1){
          aveMariaString = numS_2;
        }else if(aveMariaString == numS_2){
          aveMariaString = numS_3;
        }else if(aveMariaString == numS_3){
          aveMariaString = numS_4;
        }else if(aveMariaString == numS_4){
          aveMariaString = numS_5;
        }
      }else{
        if(aveMariaString == numS_5){
          aveMariaString = numS_4;
        }else if(aveMariaString == numS_4){
          aveMariaString = numS_3;
        }else if(aveMariaString == numS_3){
          aveMariaString = numS_2;
        }else if(aveMariaString == numS_2){
          aveMariaString = numS_1;
        }
      }
    }
  }    
 
  var launch = 1;
  var theTimeOut;
  function launchTime(){    
    launch = 0;
    theTimeOut = setTimeout(function(){ hideControl(); }, 5000);
  }

  function showControl(){
    document.getElementById('controls').style.visibility = "visible";
  }

  function hideControl(){
    document.getElementById('controls').style.visibility = "hidden";
  }  

  function stopTime(){
    clearTimeout(theTimeOut);
    launch = 1;
  }  

  window.addEventListener('touchstart', function() {
   showControl();
   launch = 1;
   stopTime();
  });

  officePlayer.ontimeupdate=function(){    
  if(launch == 1 && full==1){
    launchTime();
  }
	var currentTime = officePlayer.currentTime;
	var duration = officePlayer.duration;    
    if(currentTime == duration){
      step = 1;
      changeAveMariaString();
      changeAveMariaNum();
    }    
    $('#range').attr('max', duration);    
    rangeCSS();
    var audio = document.getElementById('officePlayer');    
    if(cleB == 0){
      document.getElementById('range').value = currentTime;  
    }   
    if(clé == 0){
      document.getElementById('moteurRecherche').style.display = "none";    
    }
    if(cleA == 0){
      document.getElementById('pause').style.display = "inline-block";
      document.getElementById('play').style.display = "none";
    }                 
    var res = audio.src.split("/");
    var string = res[res.length-1];
    var mp3 = string.substring(0, string.length-4).replace("-fr", "");
    var c_mp3 = string.substring(0, string.length-4);
    
    // var chemin_externe_image = "Hicvox/Image/";
    var chemin_externe_image = cordova.file.externalRootDirectory+"Hicvox/Image/";
    
    var imageUrl = chemin_externe_image+mp3+".jpg";
    var imageUrl2 = chemin_externe_image+mp3+".jpeg";
    var imageUrl3 = chemin_externe_image+mp3+".gif";
    var imageUrl4 = chemin_externe_image+mp3+".png";

    if(c_mp3 == "Ros-fr-AveMaria"){
      imageUrl = chemin_externe_image+"/Ros-"+aveMariaString+aveMariaNum+".jpg";
      imageUrl2 = chemin_externe_image+"/Ros-"+aveMariaString+aveMariaNum+".jpeg";
      imageUrl3 = chemin_externe_image+"/Ros-"+aveMariaString+aveMariaNum+".gif";
      imageUrl4 = chemin_externe_image+"/Ros-"+aveMariaString+aveMariaNum+".png";
    }
    imageExists(imageUrl, function(exists) {
      if(exists == true){
        document.getElementById('rosaire-img').style.display = "inline-block";
        document.getElementById('rosaire-img').src = imageUrl;        
      }else{
        imageExists(imageUrl2, function(exists) {
          if(exists == true){
            document.getElementById('rosaire-img').style.display = "inline-block";
            document.getElementById('rosaire-img').src = imageUrl2;            
          }else{
            imageExists(imageUrl3, function(exists) {
              if(exists == true){
                document.getElementById('rosaire-img').style.display = "inline-block";
                document.getElementById('rosaire-img').src = imageUrl3;                
              }else{                
                imageExists(imageUrl4, function(exists) {
                if(exists == true){
                  document.getElementById('rosaire-img').style.display = "inline-block";
                  document.getElementById('rosaire-img').src = imageUrl4;                  
                }else{
                  document.getElementById('rosaire-img').style.display = "none";
                }
              }); 
              }
            });            
          }
        });
      }
    });
    clé = 0;        
    cleB = 0;       
  } 

var nextOffice, curOffice;
$scope.lireRosaire = function(){
    var mystere = document.getElementById('mystere').value;  	  
    var chemin_externe_audio = cordova.file.externalRootDirectory+"Hicvox/Audio/";
    // var chemin_externe_audio = "Hicvox/Audio/";
    var chemin_externe_image = cordova.file.externalRootDirectory+"Hicvox/Image/";
    // var chemin_externe_image = "Hicvox/Image/";
    var Ros_fr_mys_joyeux = chemin_externe_audio+'Ros-fr-mys-joyeux.mp3';
    var Ros_fr_mys_douloureux = chemin_externe_audio+'Ros-fr-mys-douloureux.mp3';
    var Ros_fr_mys_lumineux = chemin_externe_audio+'Ros-fr-mys-lumineux.mp3'; 
    var Ros_fr_mys_glorieux = chemin_externe_audio+'Ros-fr-mys-glorieux.mp3';
    var Ros_fr_credo = chemin_externe_audio+'Ros-fr-Credo.mp3';
    var Ros_fr_pater = chemin_externe_audio+'Ros-fr-Pater.mp3';
    var Ros_fr_AveMaria_bvm_1 = chemin_externe_audio+'Ros-BVM1.mp3';
    var Ros_fr_AveMaria_bvm_2 = chemin_externe_audio+'Ros-BVM2.mp3';
    var Ros_fr_AveMaria_bvm_3 = chemin_externe_audio+'Ros-BVM3.mp3';
    var Ros_fr_Gloria = chemin_externe_audio+'Ros-fr-Gloria.mp3';
    var Ros_fr_AveMaria = chemin_externe_audio+'Ros-fr-AveMaria.mp3';
    var Ros_fr_Mystere_Annonciation = chemin_externe_audio+'Ros-fr-Mystere-Annonciation.mp3';
    var Ros_fr_Mystere_Visitation = chemin_externe_audio+'Ros-fr-Mystere-Visitation.mp3';
    var Ros_fr_Mystere_Nativite = chemin_externe_audio+'Ros-fr-Mystere-Nativite.mp3';
    var Ros_fr_Mystere_Presentation = chemin_externe_audio+'Ros-fr-Mystere-Presentation.mp3';
    var Ros_fr_Mystere_Recouvrement = chemin_externe_audio+'Ros-fr-Mystere-Recouvrement.mp3';
    var Ros_fr_Mystere_Mon_bon_Jesus = chemin_externe_audio+'Ros-fr-Mon-bon-Jesus.mp3';
    var Ros_fr_Mystere_S_Michel = chemin_externe_audio+'Ros-fr-S-Michel.mp3';
    var Ros_fr_Mystere_Fideles_defunts = chemin_externe_audio+'Ros-fr-Fideles-defunts.mp3';
    var Ros_fr_Mystere_Agonie = chemin_externe_audio+'Ros-fr-Mystere-Agonie.mp3';
    var Ros_fr_Mystere_Flagelation = chemin_externe_audio+'Ros-fr-Mystere-Flagelation.mp3';
    var Ros_fr_Mystere_Couronnement_epines = chemin_externe_audio+'Ros-fr-Mystere-Couronnement-epines.mp3';
    var Ros_fr_Mystere_Portement = chemin_externe_audio+'Ros-fr-Mystere-Portement.mp3';
    var Ros_fr_Mystere_Crucifixion = chemin_externe_audio+'Ros-fr-Mystere-Crucifixion.mp3';
    var Ros_fr_Mystere_Mystere_Bapteme = chemin_externe_audio+'Ros-fr-Mystere-Bapteme.mp3';
    var Ros_fr_Mystere_Cana = chemin_externe_audio+'Ros-fr-Mystere-Cana.mp3';
    var Ros_fr_Mystere_Proclamation = chemin_externe_audio+'Ros-fr-Mystere-Proclamation.mp3';
    var Ros_fr_Mystere_Transfiguration = chemin_externe_audio+'Ros-fr-Mystere-Transfiguration.mp3';
    var Ros_fr_Mystere_Eucharistie = chemin_externe_audio+'Ros-fr-Mystere-Eucharistie.mp3';
    var Ros_fr_Mystere_Resurrection = chemin_externe_audio+'Ros-fr-Mystere-Resurrection.mp3';
    var Ros_fr_Mystere_Ascension = chemin_externe_audio+'Ros-fr-Mystere-Ascension.mp3';
    var Ros_fr_Mystere_Pentecote = chemin_externe_audio+'Ros-fr-Mystere-Pentecote.mp3';
    var Ros_fr_Mystere_Assomption = chemin_externe_audio+'Ros-fr-Mystere-PeAssomptionntecote.mp3';
    var Ros_fr_Mystere_Couronnement_BVM = chemin_externe_audio+'Ros-fr-Mystere-Couronnement-BVM.mp3';
  if(mystere == "joyeux"){
  	var p2 = document.getElementById('officePlayer');        
	  p2.src = Ros_fr_mys_joyeux;
	  var source = p2.src;
	  var res = source.split("/");
	  $("#fichiernom").append("<strong>"+ res[res.length-1] + "</strong><br/>" );    
         nextOffice = [Ros_fr_mys_joyeux,  
                      Ros_fr_credo,                  
                      Ros_fr_pater,                  
                      Ros_fr_AveMaria_bvm_1,                  
                      Ros_fr_AveMaria_bvm_2,                  
                      Ros_fr_AveMaria_bvm_3,                  
                      Ros_fr_Gloria,                  
                      Ros_fr_Mystere_Annonciation,                  
                      Ros_fr_pater,                  
                      Ros_fr_AveMaria,                  
                      Ros_fr_AveMaria,                  
                      Ros_fr_AveMaria,                  
                      Ros_fr_AveMaria,                  
                      Ros_fr_AveMaria,                  
                      Ros_fr_AveMaria,                  
                      Ros_fr_AveMaria,                  
                      Ros_fr_AveMaria,                  
                      Ros_fr_AveMaria,                  
                      Ros_fr_AveMaria,                  
                      Ros_fr_Gloria,                  
                      Ros_fr_Mystere_Visitation,                  
                      Ros_fr_pater,                  
                      Ros_fr_AveMaria,                  
                      Ros_fr_AveMaria,                  
                      Ros_fr_AveMaria,                  
                      Ros_fr_AveMaria,                  
                      Ros_fr_AveMaria,                  
                      Ros_fr_AveMaria,                  
                      Ros_fr_AveMaria,                  
                      Ros_fr_AveMaria,                  
                      Ros_fr_AveMaria,                  
                      Ros_fr_AveMaria,                  
                      Ros_fr_Gloria,                  
                      Ros_fr_Mystere_Nativite,
                      Ros_fr_pater,
                      Ros_fr_AveMaria,                  
                      Ros_fr_AveMaria,                  
                      Ros_fr_AveMaria,                  
                      Ros_fr_AveMaria,                  
                      Ros_fr_AveMaria,                  
                      Ros_fr_AveMaria,                  
                      Ros_fr_AveMaria,                  
                      Ros_fr_AveMaria,                  
                      Ros_fr_AveMaria,                  
                      Ros_fr_AveMaria,                  
                      Ros_fr_Gloria,
                      Ros_fr_Mystere_Presentation,
                      Ros_fr_pater,
                      Ros_fr_AveMaria,                  
                      Ros_fr_AveMaria,                  
                      Ros_fr_AveMaria,                  
                      Ros_fr_AveMaria,                  
                      Ros_fr_AveMaria,                  
                      Ros_fr_AveMaria,                  
                      Ros_fr_AveMaria,                  
                      Ros_fr_AveMaria,                  
                      Ros_fr_AveMaria,                  
                      Ros_fr_AveMaria,                  
                      Ros_fr_Gloria,
                      Ros_fr_Mystere_Recouvrement,
                      Ros_fr_pater,
                      Ros_fr_AveMaria,                  
                      Ros_fr_AveMaria,                  
                      Ros_fr_AveMaria,                  
                      Ros_fr_AveMaria,                  
                      Ros_fr_AveMaria,                  
                      Ros_fr_AveMaria,                  
                      Ros_fr_AveMaria,                  
                      Ros_fr_AveMaria,                  
                      Ros_fr_AveMaria,                  
                      Ros_fr_AveMaria,                  
                      Ros_fr_Gloria,
                      Ros_fr_Mystere_Mon_bon_Jesus,
                      Ros_fr_Mystere_S_Michel,                    
                      Ros_fr_Mystere_Fideles_defunts];
	 curOffice = 0;
	  var officePlayer2 = document.getElementById('officePlayer');  
	  officePlayer2.onended = function(){
	        ++curOffice;
	        if(curOffice < nextOffice.length){
	            officePlayer2.src = nextOffice[curOffice];
	            var p2 = document.getElementById('officePlayer');
	            var source = p2.src;
	            var res = source.split("/");
	            $("#fichiernom").append("<strong>"+ res[res.length-1] + "</strong><br/>" );
	        }
	 }  
  }else if(mystere == "douloureux"){  	  	
    var p2 = document.getElementById('officePlayer');
      p2.src = Ros_fr_mys_douloureux;
      var source = p2.src;
      var res = source.split("/");
      $("#fichiernom").append("<strong>"+ res[res.length-1] + "</strong><br/>");
       nextOffice = [Ros_fr_mys_douloureux,  
                        Ros_fr_credo,                  
                        Ros_fr_pater,                  
                        Ros_fr_AveMaria_bvm_1,                  
                        Ros_fr_AveMaria_bvm_2,                  
                        Ros_fr_AveMaria_bvm_3,                  
                        Ros_fr_Gloria,                  
                        Ros_fr_Mystere_Agonie,                  
                        Ros_fr_pater,                  
                        Ros_fr_AveMaria,                  
                        Ros_fr_AveMaria,                  
                        Ros_fr_AveMaria,                  
                        Ros_fr_AveMaria,                  
                        Ros_fr_AveMaria,                  
                        Ros_fr_AveMaria,                  
                        Ros_fr_AveMaria,                  
                        Ros_fr_AveMaria,                  
                        Ros_fr_AveMaria,                  
                        Ros_fr_AveMaria,                  
                        Ros_fr_Gloria,                  
                        Ros_fr_Mystere_Flagelation,                  
                        Ros_fr_pater,                  
                        Ros_fr_AveMaria,                  
                        Ros_fr_AveMaria,                  
                        Ros_fr_AveMaria,                  
                        Ros_fr_AveMaria,                  
                        Ros_fr_AveMaria,                  
                        Ros_fr_AveMaria,                  
                        Ros_fr_AveMaria,                  
                        Ros_fr_AveMaria,                  
                        Ros_fr_AveMaria,                  
                        Ros_fr_AveMaria,                  
                        Ros_fr_Gloria,                  
                        Ros_fr_Mystere_Couronnement_epines,
                        Ros_fr_pater,
                        Ros_fr_AveMaria,                  
                        Ros_fr_AveMaria,                  
                        Ros_fr_AveMaria,                  
                        Ros_fr_AveMaria,                  
                        Ros_fr_AveMaria,                  
                        Ros_fr_AveMaria,                  
                        Ros_fr_AveMaria,                  
                        Ros_fr_AveMaria,                  
                        Ros_fr_AveMaria,                  
                        Ros_fr_AveMaria,                  
                        Ros_fr_Gloria,
                        Ros_fr_Mystere_Portement,
                        Ros_fr_pater,
                        Ros_fr_AveMaria,                  
                        Ros_fr_AveMaria,                  
                        Ros_fr_AveMaria,                  
                        Ros_fr_AveMaria,                  
                        Ros_fr_AveMaria,                  
                        Ros_fr_AveMaria,                  
                        Ros_fr_AveMaria,                  
                        Ros_fr_AveMaria,                  
                        Ros_fr_AveMaria,                  
                        Ros_fr_AveMaria,                  
                        Ros_fr_Gloria,
                        Ros_fr_Mystere_Crucifixion,
                        Ros_fr_pater,
                        Ros_fr_AveMaria,                  
                        Ros_fr_AveMaria,                  
                        Ros_fr_AveMaria,                  
                        Ros_fr_AveMaria,                  
                        Ros_fr_AveMaria,                  
                        Ros_fr_AveMaria,                  
                        Ros_fr_AveMaria,                  
                        Ros_fr_AveMaria,                  
                        Ros_fr_AveMaria,                  
                        Ros_fr_AveMaria,                  
                        Ros_fr_Gloria,
                        Ros_fr_Mystere_Mon_bon_Jesus,
                        Ros_fr_Mystere_S_Michel,                    
                        Ros_fr_Mystere_Fideles_defunts]; 
      curOffice = 0;
      var officePlayer2 = document.getElementById('officePlayer');  
      officePlayer2.onended = function(){
            ++curOffice;
            if(curOffice < nextOffice.length){
                officePlayer2.src = nextOffice[curOffice];
                var p2 = document.getElementById('officePlayer');
                var source = p2.src;
                var res = source.split("/");
                $("#fichiernom").append("<strong>"+ res[res.length-1] + "</strong><br/>" );
            }
      }      
  }else if(mystere == "lumineux"){
  	var p2 = document.getElementById('officePlayer');  
    p2.src = Ros_fr_mys_lumineux;
    var source = p2.src;    
    var res = source.split("/");
    $("#fichiernom").append("<strong>"+ res[res.length-1] + "</strong><br/>" );
     nextOffice = [Ros_fr_mys_lumineux,  
                      Ros_fr_credo,                  
                      Ros_fr_pater,                  
                      Ros_fr_AveMaria_bvm_1,                  
                      Ros_fr_AveMaria_bvm_2,                  
                      Ros_fr_AveMaria_bvm_3,                  
                      Ros_fr_Gloria,                  
                      Ros_fr_Mystere_Mystere_Bapteme,                  
                      Ros_fr_pater,                  
                      Ros_fr_AveMaria,                  
                      Ros_fr_AveMaria,                  
                      Ros_fr_AveMaria,                  
                      Ros_fr_AveMaria,                  
                      Ros_fr_AveMaria,                  
                      Ros_fr_AveMaria,                  
                      Ros_fr_AveMaria,                  
                      Ros_fr_AveMaria,                  
                      Ros_fr_AveMaria,                  
                      Ros_fr_AveMaria,                  
                      Ros_fr_Gloria,                  
                      Ros_fr_Mystere_Cana,                  
                      Ros_fr_pater,                  
                      Ros_fr_AveMaria,                  
                      Ros_fr_AveMaria,                  
                      Ros_fr_AveMaria,                  
                      Ros_fr_AveMaria,                  
                      Ros_fr_AveMaria,                  
                      Ros_fr_AveMaria,                  
                      Ros_fr_AveMaria,                  
                      Ros_fr_AveMaria,                  
                      Ros_fr_AveMaria,                  
                      Ros_fr_AveMaria,                  
                      Ros_fr_Gloria,                  
                      Ros_fr_Mystere_Proclamation,
                      Ros_fr_pater,
                      Ros_fr_AveMaria,                  
                      Ros_fr_AveMaria,                  
                      Ros_fr_AveMaria,                  
                      Ros_fr_AveMaria,                  
                      Ros_fr_AveMaria,                  
                      Ros_fr_AveMaria,                  
                      Ros_fr_AveMaria,                  
                      Ros_fr_AveMaria,                  
                      Ros_fr_AveMaria,                  
                      Ros_fr_AveMaria,                  
                      Ros_fr_Gloria,
                      Ros_fr_Mystere_Transfiguration,
                      Ros_fr_pater,
                      Ros_fr_AveMaria,                  
                      Ros_fr_AveMaria,                  
                      Ros_fr_AveMaria,                  
                      Ros_fr_AveMaria,                  
                      Ros_fr_AveMaria,                  
                      Ros_fr_AveMaria,                  
                      Ros_fr_AveMaria,                  
                      Ros_fr_AveMaria,                  
                      Ros_fr_AveMaria,                  
                      Ros_fr_AveMaria,                  
                      Ros_fr_Gloria,
                      Ros_fr_Mystere_Eucharistie,
                      Ros_fr_pater,
                      Ros_fr_AveMaria,                  
                      Ros_fr_AveMaria,                  
                      Ros_fr_AveMaria,                  
                      Ros_fr_AveMaria,                  
                      Ros_fr_AveMaria,                  
                      Ros_fr_AveMaria,                  
                      Ros_fr_AveMaria,                  
                      Ros_fr_AveMaria,                  
                      Ros_fr_AveMaria,                  
                      Ros_fr_AveMaria,                  
                      Ros_fr_Gloria,
                      Ros_fr_Mystere_Mon_bon_Jesus,
                      Ros_fr_Mystere_S_Michel,                    
                      Ros_fr_Mystere_Fideles_defunts]; 
       curOffice = 0;
       var officePlayer2 = document.getElementById('officePlayer');  
       officePlayer2.onended = function(){
         ++curOffice;
         if(curOffice < nextOffice.length){
             officePlayer2.src = nextOffice[curOffice];
             var p2 = document.getElementById('officePlayer');
             var source = p2.src;
             var res = source.split("/");
             $("#fichiernom").append("<strong>"+ res[res.length-1] + "</strong><br/>" );
         }
      }
  }

                                else if(mystere == "rose"){
                                    var p2 = document.getElementById('officePlayer');
                                    p2.src = Ros_fr_AveMaria;
                                    var source = p2.src;
                                    var res = source.split("/");
                                    $("#fichiernom").append("<strong>"+ res[res.length-1] + "</strong><br/>" );
                                    nextOffice = [
                                                  Ros_fr_AveMaria,
                                                  Ros_fr_AveMaria,
                                                  Ros_fr_AveMaria
                                                  ];
                                    curOffice = 0;
                                    var officePlayer2 = document.getElementById('officePlayer');
                                    officePlayer2.onended = function(){
                                    ++curOffice;
                                    if(curOffice < nextOffice.length){
                                    officePlayer2.src = nextOffice[curOffice];
                                    var p2 = document.getElementById('officePlayer');
                                    var source = p2.src;
                                    var res = source.split("/");
                                    $("#fichiernom").append("<strong>"+ res[res.length-1] + "</strong><br/>" );
                                    }
                                    }
                                }
                                    
                                    
                                else if(mystere == "dizaine"){
                                    var p2 = document.getElementById('officePlayer');
                                    p2.src = Ros_fr_pater;
                                    var source = p2.src;
                                    var res = source.split("/");
                                    $("#fichiernom").append("<strong>"+ res[res.length-1] + "</strong><br/>" );
                                    nextOffice = [
                                                  Ros_fr_pater,   
                                                  Ros_fr_AveMaria,
                                                  Ros_fr_AveMaria,
                                                  Ros_fr_AveMaria,
                                                  Ros_fr_AveMaria,
                                                  Ros_fr_AveMaria,
                                                  Ros_fr_AveMaria,
                                                  Ros_fr_AveMaria,
                                                  Ros_fr_AveMaria,
                                                  Ros_fr_AveMaria,
                                                  Ros_fr_AveMaria,
                                                  Ros_fr_Gloria
                                                  ];
                                    curOffice = 0;
                                    var officePlayer2 = document.getElementById('officePlayer');
                                    officePlayer2.onended = function(){
                                    ++curOffice;
                                    if(curOffice < nextOffice.length){
                                    officePlayer2.src = nextOffice[curOffice];
                                    var p2 = document.getElementById('officePlayer');
                                    var source = p2.src;
                                    var res = source.split("/");
                                    $("#fichiernom").append("<strong>"+ res[res.length-1] + "</strong><br/>" );
                                    }
                                    }
                                }
                                   

  else if(mystere == "glorieux"){
  	var p2 = document.getElementById('officePlayer');  
  p2.src = Ros_fr_mys_glorieux;
  var source = p2.src;    
  var res = source.split("/");
  $("#fichiernom").append("<strong>"+ res[res.length-1] + "</strong><br/>" );
   nextOffice = [Ros_fr_mys_glorieux,
                    Ros_fr_credo,                  
                    Ros_fr_pater,                  
                    Ros_fr_AveMaria_bvm_1,                  
                    Ros_fr_AveMaria_bvm_2,                  
                    Ros_fr_AveMaria_bvm_3,                  
                    Ros_fr_Gloria,                  
                    Ros_fr_Mystere_Resurrection,                  
                    Ros_fr_pater,                  
                    Ros_fr_AveMaria,                  
                    Ros_fr_AveMaria,                  
                    Ros_fr_AveMaria,                  
                    Ros_fr_AveMaria,                  
                    Ros_fr_AveMaria,                  
                    Ros_fr_AveMaria,                  
                    Ros_fr_AveMaria,                  
                    Ros_fr_AveMaria,                  
                    Ros_fr_AveMaria,                  
                    Ros_fr_AveMaria,                  
                    Ros_fr_Gloria,                  
                    Ros_fr_Mystere_Ascension,                  
                    Ros_fr_pater,                  
                    Ros_fr_AveMaria,                  
                    Ros_fr_AveMaria,                  
                    Ros_fr_AveMaria,                  
                    Ros_fr_AveMaria,                  
                    Ros_fr_AveMaria,                  
                    Ros_fr_AveMaria,                  
                    Ros_fr_AveMaria,                  
                    Ros_fr_AveMaria,                  
                    Ros_fr_AveMaria,                  
                    Ros_fr_AveMaria,                  
                    Ros_fr_Gloria,                  
                    Ros_fr_Mystere_Pentecote,
                    Ros_fr_pater,
                    Ros_fr_AveMaria,                  
                    Ros_fr_AveMaria,                  
                    Ros_fr_AveMaria,                  
                    Ros_fr_AveMaria,                  
                    Ros_fr_AveMaria,                  
                    Ros_fr_AveMaria,                  
                    Ros_fr_AveMaria,                  
                    Ros_fr_AveMaria,                  
                    Ros_fr_AveMaria,                  
                    Ros_fr_AveMaria,                  
                    Ros_fr_Gloria,
                    Ros_fr_Mystere_Assomption,
                    Ros_fr_pater,
                    Ros_fr_AveMaria,                  
                    Ros_fr_AveMaria,                  
                    Ros_fr_AveMaria,                  
                    Ros_fr_AveMaria,                  
                    Ros_fr_AveMaria,                  
                    Ros_fr_AveMaria,                  
                    Ros_fr_AveMaria,                  
                    Ros_fr_AveMaria,                  
                    Ros_fr_AveMaria,                  
                    Ros_fr_AveMaria,                  
                    Ros_fr_Gloria,
                    Ros_fr_Mystere_Couronnement_BVM,
                    Ros_fr_pater,
                    Ros_fr_AveMaria,                  
                    Ros_fr_AveMaria,                  
                    Ros_fr_AveMaria,                  
                    Ros_fr_AveMaria,                  
                    Ros_fr_AveMaria,                  
                    Ros_fr_AveMaria,                  
                    Ros_fr_AveMaria,                  
                    Ros_fr_AveMaria,                  
                    Ros_fr_AveMaria,                  
                    Ros_fr_AveMaria,                  
                    Ros_fr_Gloria,
                    Ros_fr_Mystere_Mon_bon_Jesus,
                    Ros_fr_Mystere_S_Michel,                    
                    Ros_fr_Mystere_Fideles_defunts]; 
     curOffice = 0;
     var officePlayer2 = document.getElementById('officePlayer');  
     officePlayer2.onended = function(){
       ++curOffice;
       if(curOffice < nextOffice.length){
           officePlayer2.src = nextOffice[curOffice];
           var p2 = document.getElementById('officePlayer');
           var source = p2.src;
           var res = source.split("/");
           $("#fichiernom").append("<strong>"+ res[res.length-1] + "</strong><br/>" );
       }
     }
  }
 }


  var full = 0;
  $(document).keyup(function(e) {     
      if(e.keyCode== 27) {
         escKey();
      } 
  });
  function escKey(){
    $('#marqueur').css({'font-size': '18px'});
    $('#diapo_fr').css({'font-size': '18px'});

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
        $('#content-ecran').css({'position': 'relative'});
        $('#content-ecran').css({'top': '0px'});
        $('#content-ecran').css({'left': '0px'});
        $('#content-ecran').css({'height':'auto'});
        $('#content-ecran').css({'width':'auto'});
        $('#marqueur').css({'font-size': '18px'});
        $('#diapo_fr').css({'font-size': '18px'});
        $('#content-ecran').css({'line-height': '1.5' });
      });
     $('#content-ecran').css({'position': 'relative'});
     $('#content-ecran').css({'top': '0px'});
     $('#content-ecran').css({'left': '0px'});
     $('#content-ecran').css({'height':'auto'});
     $('#content-ecran').css({'width':'auto'});             
     full = 0;
  }
  var i = document.getElementById('content-ecran');
  $scope.fullScreen = function(){  
    if(full==0){    
      console.log($(window).width());
      if($(window).width()< 400 && $(window).width()>= 0){
        $('#marqueur').css({'font-size': '18px'});
        $('#diapo_fr').css({'font-size': '18px'});
      }else if($(window).width()<= 800 && $(window).width()>= 400){
        $('#marqueur').css({'font-size': '30px'});
        $('#diapo_fr').css({'font-size': '30px'});
      }else if($(window).width()<= 1000 && $(window).width()>= 800){
        $('#marqueur').css({'font-size': '40px'});
        $('#diapo_fr').css({'font-size': '40px'});
      }else if($(window).width()> 1000){
        $('#marqueur').css({'font-size': '60px'});
        $('#diapo_fr').css({'font-size': '60px'});
      }

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
        $('#content-ecran').css({'position': 'fixed'});
        $('#content-ecran').css({'top': '-10px'});
        $('#content-ecran').css({'left': '0px'});
        $('#content-ecran').css({'display': 'flex'});
        $('#content-ecran').css({'flex-direction': 'column'});
        $('#content-ecran').css({'justify-content': 'center'});
        $('#content-ecran').css({'align-items': 'center'});
        $('#content-ecran').css({'z-index': '2'});
        $('#content-ecran').css({'height':($(window).height())+'px'});
        $('#content-ecran').css({'width':($(window).width())+'px'});
        $('#content-ecran').css({'line-height': '1' });
        $('#ecran').css({'width':'100%'});
        $('#ecran').css({'height':'100%'});
        if($(window).width()< 400 && $(window).width()>= 0){
          $('#marqueur').css({'font-size': '18px'});
          $('#diapo_fr').css({'font-size': '60px'});
        }else if($(window).width()<= 800 && $(window).width()>= 400){
          $('#marqueur').css({'font-size': '30px'});
          $('#diapo_fr').css({'font-size': '30px'});
        }else if($(window).width()<= 1000 && $(window).width()>= 800){
          $('#marqueur').css({'font-size': '40px'});
          $('#diapo_fr').css({'font-size': '40px'});
        }else if($(window).width()> 1000){
          $('#marqueur').css({'font-size': '60px'});
          $('#diapo_fr').css({'font-size': '60px'});
        }

      });
     $('#content-ecran').css({'position': 'fixed'});
     $('#content-ecran').css({'top': '-20px'});
     $('#content-ecran').css({'left': '0px'});
     $('#content-ecran').css({'display': 'flex'});
     $('#content-ecran').css({'flex-direction': 'column'});
     $('#content-ecran').css({'justify-content': 'center'});
     $('#content-ecran').css({'align-items': 'center'});
     $('#content-ecran').css({'z-index': '2'});
     $('#content-ecran').css({'height':($(window).height())+'px'});
     $('#content-ecran').css({'width':($(window).width())+'px'});     
     $('#content-ecran').css({'line-height': '1' });
     $('#ecran').css({'width':'100%'});                     
     $('#ecran').css({'height':'100%'});                     
     full = 1;
    }else{
      escKey();
    }            
  }          

}]);