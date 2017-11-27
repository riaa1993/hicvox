'use strict'; 

askitApp.controller('DonsCtrl', ['$scope', '$state', function($scope, $state) {
                                    $scope.gotoCarte = function () {
                                         $state.go('carte', null, { reload: true });
                                    }
                                 
                                 $('#merciDon').click(function(){
                                                      document.getElementById("donPlayer").pause();
                                  });

    document.addEventListener('deviceready', function () {
        screen.orientation.lock('portrait');
    });

}]);

askitApp.controller('MenuDevotionCtrl', ['$scope', '$http', '$timeout', '$cordovaFile', '$cordovaFileTransfer', '$state',   '$route', function($scope, $http, $timeout, $cordovaFile, $cordovaFileTransfer, $state, $route) {
      
        $scope.gotoCarte = function () {
            $state.go('carte', null, { reload: true });
        }

        document.addEventListener('deviceready', function () {
          screen.orientation.lock('portrait');
        });
                                    
}]);

askitApp.controller('DevotionCtrl', ['$scope', '$http', '$timeout', '$cordovaFile', '$cordovaFileTransfer', '$state', function($scope, $http, $timeout, $cordovaFile, $cordovaFileTransfer, $state) {
	   
     document.addEventListener('deviceready', function () {
        screen.orientation.lock('portrait');
     });

    var dwn_audio = ['litanies_des_saints.mp3', 'Requiem.mp3', 'Litanie-de-la-Sainte-Vierge-Pt.mp3', 'litanies_saint_Joseph.mp3', 'litanies_du_Sacre-Coeur.mp3', 'chemin_de_Croix.mp3', 'Litanies_de_la_Sainte_Vierge.mp3'];    
    $scope.tousAudio = dwn_audio.length;
  	$scope.restantAudio = dwn_audio.length;
    document.getElementById('litanies_des_saints').src = cordova.file.externalRootDirectory+"Hicvox/Audio/litanies_des_saints.mp3";
    document.getElementById('Requiem').src = cordova.file.externalRootDirectory+"Hicvox/Audio/Requiem.mp3";
    document.getElementById('Litanie-de-la-Sainte-Vierge-Pt').src = cordova.file.externalRootDirectory+"Hicvox/Audio/Litanie-de-la-Sainte-Vierge-Pt.mp3";
    document.getElementById('litanies_saint_Joseph').src = cordova.file.externalRootDirectory+"Hicvox/Audio/litanies_saint_Joseph.mp3";
    document.getElementById('litanies_du_Sacre-Coeur').src = cordova.file.externalRootDirectory+"Hicvox/Audio/litanies_du_Sacre-Coeur.mp3";
    document.getElementById('chemin_de_Croix').src = cordova.file.externalRootDirectory+"Hicvox/Audio/chemin_de_Croix.mp3";
    document.getElementById('Litanies_de_la_Sainte_Vierge').src = cordova.file.externalRootDirectory+"Hicvox/Audio/Litanies_de_la_Sainte_Vierge.mp3";
    
  	var trustHosts = true;
	  var options = {};
  	var url, targetPath;
  	
    if(localStorage.getItem("check-devotions") == null){
      $("#downloadBtn").click();
      localStorage.setItem("check-devotions", 1);
    }
    if(localStorage.getItem("check-download-devotions") == null){  }else{            
        document.getElementById('downloadBtn').style.display = "none";
    }

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
  $scope.downloadAudio = function(){
    var i = 0;
    $scope.loopAudio(i);
    $scope.restantAudio = dwn_audio.length;
  }
  $scope.loopAudio = function (i) {
    if(i > dwn_audio.length-1){
      document.getElementById('downloadBtn').style.display = "none";
      localStorage.setItem("check-download-devotions", 1);
      document.getElementById('litanies_des_saints').src = cordova.file.externalRootDirectory+"Hicvox/Audio/litanies_des_saints.mp3";
      document.getElementById('Requiem').src = cordova.file.externalRootDirectory+"Hicvox/Audio/Requiem.mp3";
      document.getElementById('Litanie-de-la-Sainte-Vierge-Pt').src = cordova.file.externalRootDirectory+"Hicvox/Audio/Litanie-de-la-Sainte-Vierge-Pt.mp3";
      document.getElementById('litanies_saint_Joseph').src = cordova.file.externalRootDirectory+"Hicvox/Audio/litanies_saint_Joseph.mp3";
      document.getElementById('litanies_du_Sacre-Coeur').src = cordova.file.externalRootDirectory+"Hicvox/Audio/litanies_du_Sacre-Coeur.mp3";
      document.getElementById('chemin_de_Croix').src = cordova.file.externalRootDirectory+"Hicvox/Audio/chemin_de_Croix.mp3";
      document.getElementById('Litanies_de_la_Sainte_Vierge').src = cordova.file.externalRootDirectory+"Hicvox/Audio/Litanies_de_la_Sainte_Vierge.mp3";
    }    
    if(i < dwn_audio.length){
        var url = "https://hicvox.org/admin/Media/Audio/Devotions/"+dwn_audio[i]; 
        var targetPath = "cdvfile://localhost/persistent/Hicvox/Audio/"+dwn_audio[i];        
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
}]);