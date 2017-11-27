'use strict';

askitApp.controller('bibleCtrl', ['$scope', '$timeout', '$http', '$state', function($scope, $timeout, $http, $state) {				
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

    var bible = getJson("Bible/NT.json");
    var data_bible = $scope.getObjects(bible, 'livre', 'Apoc');     
    function NTBookChapitre(livre, chapitre){
        var chapitre_array = [];
        $.each(bible, function(i, obj) {
            if(obj.livre == livre){
                if(obj.chapitre == chapitre){
                    chapitre_array.push(obj);
                }
            }
        });
        return chapitre_array;
    }
    console.log(NTBookChapitre("Apoc", 2));

}]);

askitApp.controller('livreCtrl', ['$scope', '$timeout', '$http', '$state', '$routeParams', function($scope, $timeout, $http, $state, $routeParams) {              
    $scope.gotoCarte = function () {
        $state.go('carte', null, { reload: true });
    }

    document.addEventListener('deviceready', function () {
        screen.orientation.lock('portrait');
    });

    var paramsLivre = $routeParams.livre;
    if(paramsLivre == "AT"){
        $scope.the_book = "ANCIEN TESTAMENT";
    }else{
        $scope.the_book = "NOUVEAU TESTAMENT";
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

    var livre = getJson("Bible/livre.json");    
    function NTBookLivre(bible){
        var livre_array = [];
        $.each(livre, function(i, obj) {
            if(obj.bible == bible){
                livre_array.push(obj);
            }
        });
        return livre_array;
    }
    $scope.bookLivre = NTBookLivre(paramsLivre);

}]);

askitApp.controller('chapitreCtrl', ['$scope', '$timeout', '$http', '$state', '$routeParams', '$rootScope', function($scope, $timeout, $http, $state, $routeParams, $rootScope) {              
    $scope.gotoCarte = function () {
        $state.go('carte', null, { reload: true });
    }

    document.addEventListener('deviceready', function () {
        screen.orientation.lock('portrait');
    });

    var paramsLivre = $routeParams.livre;    
    $scope.paramsLivre = $routeParams.livre;    
    $scope.paramsNbChap = $routeParams.nbchap;    

    $rootScope.range = function(min, max, step) {
        // parameters validation for method overloading
        if (max == undefined) {
            max = min;
            min = 0;
        }
        step = Math.abs(step) || 1;
        if (min > max) {
            step = -step;
        }
        // building the array
        var output = [];
        for (var value=min; value<max; value+=step) {
            output.push(value);
        }
        // returning the generated array
        return output;
    };

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

    var chapitre = getJson("Bible/chapitre.json");      
    var the_chapitre = $scope.getObjects(chapitre, 'livre', paramsLivre);
    var livre_chapitre = the_chapitre["chapitre"];
    var range = [];
    for(var i=1;i<=livre_chapitre;i++) {
      range.push(i);
    }
    $scope.bookChapitre = range;

}]);

askitApp.controller('versetsCtrl', ['$scope', '$timeout', '$http', '$state', '$routeParams', '$rootScope', function($scope, $timeout, $http, $state, $routeParams, $rootScope) {              
    $scope.gotoCarte = function () {
        $state.go('carte', null, { reload: true });
    }

    document.addEventListener('deviceready', function () {
        screen.orientation.lock('portrait');
    });

    var paramsLivre = $routeParams.livre;    
    var paramsChapitre = $routeParams.chapitre;    
    $scope.paramsLivre = $routeParams.livre;    
    $scope.paramsChapitre = $routeParams.chapitre;    
    $scope.paramsLivreLong = $routeParams.livre_long;    


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
    var bible;
    var AT = getJson("Bible/NT.json");
    var NT = getJson("Bible/AT.json");
    var data_bible = $scope.getObjects(AT, 'livre', paramsLivre);    
    if(data_bible == false){
        bible = NT;
    }else{
        bible = AT;
    }
    function NTBookChapitre(livre, chapitre){
        var chapitre_array = [];
        $.each(bible, function(i, obj) {
            if(obj.livre == livre){
                if(obj.chapitre == chapitre){
                    chapitre_array.push(obj);
                }
            }
        });
        return chapitre_array;
    }
    $scope.NTBookChapitre = NTBookChapitre(paramsLivre, paramsChapitre);    

}]);