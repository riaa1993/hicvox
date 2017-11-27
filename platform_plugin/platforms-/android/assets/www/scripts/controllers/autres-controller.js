'use strict';

askitApp.controller('autresCtrl', ['$scope', '$http', '$timeout', '$cordovaFile', '$cordovaFileTransfer', '$state', function($scope, $http, $timeout, $cordovaFile, $cordovaFileTransfer, $state) {
	  $scope.gotoCarte = function () {
      $state.go('carte', null, { reload: true });
    }

    document.addEventListener('deviceready', function () {
        screen.orientation.lock('portrait');
    });
    
    var dwn_audio = ['Prieres-du-matin.mp3', 'Priere-du-soir.mp3', 'Chapelet_misericorde.mp3', 'Priere_voyage.mp3', 'Acte_Esperance.mp3', 'Acte_Foi.mp3', 'Acte_Charite.mp3', 'Acte_Contrition.mp3'];    
    $scope.tousAudio = dwn_audio.length;
    $scope.restantAudio = dwn_audio.length;
    document.getElementById('acte_foi').src = cordova.file.externalRootDirectory+"Hicvox/Audio/Acte_Foi.mp3";
    document.getElementById('Prieres-du-matin').src = cordova.file.externalRootDirectory+"Hicvox/Audio/Prieres-du-matin.mp3";
    document.getElementById('Priere-du-soir').src = cordova.file.externalRootDirectory+"Hicvox/Audio/Priere-du-soir.mp3";
    document.getElementById('Chapelet_misericorde').src = cordova.file.externalRootDirectory+"Hicvox/Audio/Chapelet_misericorde.mp3";
    document.getElementById('Priere_voyage').src = cordova.file.externalRootDirectory+"Hicvox/Audio/Priere_voyage.mp3";
    document.getElementById('Acte_Esperance').src = cordova.file.externalRootDirectory+"Hicvox/Audio/Acte_Esperance.mp3";
    document.getElementById('Acte_Charite').src = cordova.file.externalRootDirectory+"Hicvox/Audio/Acte_Charite.mp3";
    document.getElementById('Acte_Contrition').src = cordova.file.externalRootDirectory+"Hicvox/Audio/Acte_Contrition.mp3";  	
  	var trustHosts = true;
	  var options = {};
  	var url, targetPath;

  	if(localStorage.getItem("check-autres") == null){
      $("#downloadBtn").click();
      localStorage.setItem("check-autres", 1);
    }
    if(localStorage.getItem("check-download-autres") == null){  }else{            
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
      localStorage.setItem("check-download-autres", 1);
      document.getElementById('acte_foi').src = cordova.file.externalRootDirectory+"Hicvox/Audio/Acte_Foi.mp3";
      document.getElementById('Prieres-du-matin').src = cordova.file.externalRootDirectory+"Hicvox/Audio/Prieres-du-matin.mp3";
      document.getElementById('Priere-du-soir').src = cordova.file.externalRootDirectory+"Hicvox/Audio/Priere-du-soir.mp3";
      document.getElementById('Chapelet_misericorde').src = cordova.file.externalRootDirectory+"Hicvox/Audio/Chapelet_misericorde.mp3";
      document.getElementById('Priere_voyage').src = cordova.file.externalRootDirectory+"Hicvox/Audio/Priere_voyage.mp3";
      document.getElementById('Acte_Esperance').src = cordova.file.externalRootDirectory+"Hicvox/Audio/Acte_Esperance.mp3";
      document.getElementById('Acte_Charite').src = cordova.file.externalRootDirectory+"Hicvox/Audio/Acte_Charite.mp3";
      document.getElementById('Acte_Contrition').src = cordova.file.externalRootDirectory+"Hicvox/Audio/Acte_Contrition.mp3";   
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