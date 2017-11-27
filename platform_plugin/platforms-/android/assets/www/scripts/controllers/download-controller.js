'use strict'; 

askitApp.controller('breviariumDwnCtrl', ['$scope', '$timeout', '$http', '$cordovaFile', '$cordovaFileTransfer', '$state', function($scope, $timeout, $http, $cordovaFile, $cordovaFileTransfer, $state) {
       
$scope.gotoCarte = function () {
  $state.go('carte', null, { reload: true });
}
                                          
    var dwn_brevarium = [ 'eFr-InA-v0.mp3', 'eFr-InL-v0.mp3' , 'eLa-AnP-Ord-0181-v0.mp3',  'eLa-AnP-Ord-0281-v0.mp3', 'eLa-AnP-Ord-0381-v0.mp3',  'eLa-AnP-Ord-0481-v0.mp3', 'eLa-AnP-Ord-0581-v0.mp3',  'eLa-AnP-Ord-0681-v0.mp3', 'eLa-AnP-Ord-0781-v0.mp3', 'eLa-Ant-TRe-00-v0.mp3', 'eLa-Ant-TRe-01-v0.mp3', 'eLa-CCo-4C-V0.mp3', 'eLa-CCo-4F-V0.mp3', 'eLa-Cap-Ord-018-v0.mp3', 'eLa-Cap-Ord-0f8-v0.mp3',  'eLa-Hym-018-v0.mp3', 'eLa-Hym-08C-v0.mp3', 'eLa-Hym-0f8-v0.mp3', 'eLa-Hym-0s8-v0.mp3', 'eLa-Hym-CAp-hp0-v0.mp3', 'eLa-Hym-CAp-hp1-v0.mp3', 'eLa-Hym-CAp-hp2-v0.mp3', 'eLa-Hym-CAp-hp7-v0.mp3', 'eLa-Hym-CBV-tt1-v0.mp3', 'eLa-Hym-CBV-tt2-v0.mp3', 'eLa-Hym-CBV-tt7-v0.mp3', 'eLa-Hym-CCn-hp0-v0.mp3', 'eLa-Hym-CCn-hp2-v0.mp3', 'eLa-Hym-CCn-hp7-v0.mp3', 'eLa-Hym-CCn-tt1-v0.mp3', 'eLa-Hym-CCp-hp0-v0.mp3', 'eLa-Hym-CCp-hp2-v0.mp3', 'eLa-Hym-CCp-hp7-v0.mp3', 'eLa-Hym-CCp-tt1-v0.mp3', 'eLa-Hym-CMm-hp1-v0.mp3', 'eLa-Hym-CMm-hp2-v0.mp3', 'eLa-Hym-CMu-hp0-v0.mp3', 'eLa-Hym-CMu-hp1-v0.mp3', 'eLa-Hym-CMu-hp7-v0.mp3', 'eLa-Hym-CVi-tt1-v0.mp3', 'eLa-InA-v0.mp3', 'eLa-InL-v0.mp3', 'eLa-PrI-Com-v0.mp3', 'eLa-Psa-Ord-0181-v0.mp3', 'eLa-Psa-Ord-0182-v0.mp3', 'eLa-Psa-Ord-0183-v0.mp3', 'eLa-Psa-Ord-0281-v0.mp3', 'eLa-Psa-Ord-0282-v0.mp3', 'eLa-Psa-Ord-0283-v0.mp3', 'eLa-Psa-Ord-0381-v0.mp3', 'eLa-Psa-Ord-0382-v0.mp3', 'eLa-Psa-Ord-0383-v0.mp3', 'eLa-Psa-Ord-0481-v0.mp3', 'eLa-Psa-Ord-0482-v0.mp3', 'eLa-Psa-Ord-0483-v0.mp3', 'eLa-Psa-Ord-0581-v0.mp3', 'eLa-Psa-Ord-0582-v0.mp3', 'eLa-Psa-Ord-0583-v0.mp3', 'eLa-Psa-Ord-0681-v0.mp3', 'eLa-Psa-Ord-0682-v0.mp3', 'eLa-Psa-Ord-0683-v0.mp3', 'eLa-Psa-Ord-0711-v0.mp3', 'eLa-Psa-Ord-0712-v0.mp3', 'eLa-Psa-Ord-0713-v0.mp3', 'eLa-Psa-Ord-0781-v0.mp3', 'eLa-Psa-Ord-0782-v0.mp3', 'eLa-Psa-Ord-0783-v0.mp3', 'eLa-Re1-Ord-013-v0.mp3', 'eLa-Re1-Ord-0f3-v0.mp3', 'eLa-Re2-Ord-013-v0.mp3', 'eLa-Re2-Ord-0f3-v0.mp3', 'eLa-Rep-Ord-018-v0.mp3', 'eLa-Rep-Ord-0f8-v0.mp3', 'oFr-InA-v0.mp3'];
                                    
    $scope.tousAudioBrevarium = dwn_brevarium.length;
    $scope.restantAudioBrevarium = dwn_brevarium.length;
    var trustHosts = true;
    var options = {};
    var url, targetPath;

    document.addEventListener('deviceready', function () {
      $cordovaFile.getFreeDiskSpace()
      .then(function (success) {
            var free = ((success / 1024) / 1024) / 1024;
            $scope.freeSpace = free.toFixed(2);
            }, function (error) {});
    });
    
    $scope.stopDownloadAudio = function(){
    i = dwn_lh.length;
    }
    $scope.stopDownloadAudioBr = function(){
    x = dwn_brevarium.length;
    }
    $scope.downloadAudio = function(){
    var i = 0;
    $scope.restantAudio = dwn_lh.length;
    $scope.loopAudio(i);
    }
    $scope.downloadAudioBr = function(){
      var x = 0;
      $scope.restantAudioBrevarium = dwn_brevarium.length;
      $scope.loopAudioBr(x);
    }
  $scope.loopAudioBr = function (x) {
    if(x >= dwn_brevarium.length-1){
      localStorage.setItem("check-download-bervarium", 1);
    }
    if(x < dwn_brevarium.length){
    var url = "https://hicvox.org/admin/Media/Audio/BR/"+dwn_brevarium[x];
    var targetPath = cordova.file.externalRootDirectory+"Hicvox/Audio/"+dwn_brevarium[x];
    $cordovaFile.checkFile(cordova.file.externalRootDirectory+"Hicvox/Audio/", dwn_brevarium[x])
    .then(function (success) {
          x++;
          if($scope.restantAudioBrevarium <= 0){
              $scope.restantAudioBrevarium = 0;
          }else{
              $scope.restantAudioBrevarium--;
          }
          $scope.loopAudioBr(x);
          }, function (error) {
          $cordovaFileTransfer.download(url, targetPath, options, trustHosts)
          .then(function(result) {
              x++;
              if($scope.restantAudioBrevarium <= 0){
              $scope.restantAudioBrevarium = 0;
              }else{
              $scope.restantAudioBrevarium--;
              }
              $scope.loopAudioBr(x);
            }, function(err) {
              x++;
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

askitApp.controller('liturgiaDwnCtrl', ['$scope', '$timeout', '$http', '$cordovaFile', '$cordovaFileTransfer', '$state', function($scope, $timeout, $http, $cordovaFile, $cordovaFileTransfer, $state) {
    
    $scope.gotoCarte = function () {
    $state.go('carte', null, { reload: true });
    }
    
    var dwn_lh = ['oLa-InA-v0.mp3', 'oFr-Rep-Ord-018-v0.mp3', 'oFr-PsI-Com-v0.mp3', 'oFr-Psa-Ord-0782-v0.mp3', 'oFr-Psa-Ord-0781-v0.mp3', 'oFr-Psa-Ord-0681-v0.mp3', 'oFr-Psa-Ord-0581-v0.mp3', 'oFr-Psa-Ord-0482-v0.mp3', 'oFr-Psa-Ord-0481-v0.mp3', 'oFr-Psa-Ord-0381-v0.mp3', 'oFr-Psa-Ord-0281-v0.mp3', 'oFr-Psa-Ord-0181-v0.mp3', 'oFr-Ora-Co078-v0.mp3', 'oFr-Ora-Co068-v0.mp3', 'oFr-Ora-Co058-v0.mp3', 'oFr-Ora-Co048-v0.mp3', 'oFr-Ora-Co038-v0.mp3', 'oFr-Ora-Co028-v0.mp3', 'oFr-Ora-Co018-v0.mp3', 'oFr-Noc-v0.mp3', 'oFr-InA-v0.mp3', 'oFr-Hym-Ord-018-v0.mp3', 'oFr-Hym-Ord-0f8-v0.mp3', 'oFr-CCo-4C-V0.mp3', 'oFr-CCo-3F-v0.mp3', 'oFr-CCo-3C-v0.mp3', 'oFr-Cap-Ord-078-v0.mp3', 'oFr-Cap-Ord-068-v0.mp3', 'oFr-Cap-Ord-058-v0.mp3', 'oFr-Cap-Ord-048-v0.mp3', 'oFr-Cap-Ord-038-v0.mp3', 'oFr-Cap-Ord-028-v0.mp3', 'oFr-Cap-Ord-018-v0.mp3', 'oFr-CaN-Ord-00-v0.mp3', 'oFr-AnP-Ord-0782-v0.mp3', 'oFr-AnP-Ord-0781-v0.mp3', 'oFr-AnP-Ord-0681-v0.mp3', 'oFr-AnP-Ord-0581-v0.mp3', 'oFr-AnP-Ord-0482-v0.mp3', 'oFr-AnP-Ord-0481-v0.mp3', 'oFr-AnP-Ord-0381-v0.mp3', 'oFr-AnP-Ord-0281-v0.mp3', 'oFr-AnP-Ord-0181-v0.mp3'];
    
    
  $scope.tousAudio = dwn_lh.length;
  $scope.restantAudio = dwn_lh.length;
    var trustHosts = true;
    var options = {};
    var url, targetPath;
    
    document.addEventListener('deviceready', function () {
      $cordovaFile.getFreeDiskSpace()
      .then(function (success) {
            var free = ((success / 1024) / 1024) / 1024;
            $scope.freeSpace = free.toFixed(2);
            }, function (error) {});
      });
    
    $scope.stopDownloadAudio = function(){
    i = dwn_lh.length;
    }
    $scope.stopDownloadAudioBr = function(){
    x = dwn_brevarium.length;
    }
    $scope.downloadAudio = function(){
    var i = 0;
    $scope.restantAudio = dwn_lh.length;
    $scope.loopAudio(i);
    }
    $scope.downloadAudioBr = function(){
    var x = 0;
    $scope.restantAudioBrevarium = dwn_brevarium.length;
    $scope.loopAudioBr(x);
    }
  
  $scope.loopAudio = function (i) {
  if(i >= dwn_lh.length-1){   
    localStorage.setItem("check-download-liturgia", 1);
  }
  if(i < dwn_lh.length){
  var url = "https://hicvox.org/admin/Media/Audio/LH/"+dwn_lh[i];
  var targetPath = cordova.file.externalRootDirectory+"Hicvox/Audio/"+dwn_lh[i];
  $cordovaFile.checkFile(cordova.file.externalRootDirectory+"Hicvox/Audio/", dwn_lh[i])
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
            i++;
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
