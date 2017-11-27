'use strict'; 

var askitApp = angular.module('askitApp', ["ngRoute", "ui.router", "ngCordova"])
  .config(['$routeProvider', '$stateProvider', function($routeProvider, $stateProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
      })
      .when('/info', {
        templateUrl: 'views/info.html',
        controller: 'MainCtrl'
      })
      .when('/bible', {
        templateUrl: 'views/bible.html',
        controller: 'bibleCtrl'
      })
      .when('/chapitre/livre=:livre/nbchap=:nbchap', {
        templateUrl: 'views/chapitre.html',
        controller: 'chapitreCtrl'
      })  
      .when('/versets/livre=:livre/livre_long=:livre_long/chapitre=:chapitre', {
        templateUrl: 'views/versets.html',
        controller: 'versetsCtrl'
      })     
      .when('/livre/livre=:livre', {
        templateUrl: 'views/livre.html',
        controller: 'livreCtrl'
      })      
      .when('/dons', {
        templateUrl: 'views/dons.html',
        controller: 'DonsCtrl'
      })
      .when('/inscription', {
        templateUrl: 'views/inscription.html',
        controller: 'inscriptionCtrl'
      })
      .when('/lectures', {
        templateUrl: 'views/lectures.html',
        controller: 'lecturesCtrl'
      })
      .when('/rosaire', {
        templateUrl: 'views/rosaire.html',
        controller: 'rosaireCtrl'
      })
      .when('/breviarium-dwn', {
            templateUrl: 'views/breviarium-dwn.html',
            controller: 'breviariumDwnCtrl'
      })
      .when('/liturgia-dwn', {
                 templateUrl: 'views/liturgia-dwn.html',
                 controller: 'liturgiaDwnCtrl'
      })
      .when('/espace-personnel', {
        templateUrl: 'views/espace-personnel.html',
        controller: 'espacePersonnelCtrl'
      })      
      .when('/accueil', {
        templateUrl: 'views/accueil.html',
        controller: 'accueilCtrl'
      })
      .when('/veilleur', {
        templateUrl: 'views/veilleur.html',
        controller: 'veilleurCtrl'
      })
      .when('/luciolle', {
        templateUrl: 'views/luciolle.html',
        controller: 'veilleurCtrl'
      })
      .when('/papillon', {
        templateUrl: 'views/papillon.html',
        controller: 'veilleurCtrl'
      })
      .when('/abeille', {
        templateUrl: 'views/abeille.html',
        controller: 'veilleurCtrl'
      })
      .when('/temoin', {
        templateUrl: 'views/temoin.html',
        controller: 'temoinCtrl'
      })
      .when('/engage', {
        templateUrl: 'views/engage.html',
        controller: 'engageCtrl'
      })
      .when('/entrainement', {
        templateUrl: 'views/entrainement.html',
        controller: 'entrainementCtrl'
      })
      .when('/entrainement-chinois', {
        templateUrl: 'views/entrainement-chinois.html',
        controller: 'entrainementChinoisCtrl'
      })
      .when('/entrainement-litanies', {
        templateUrl: 'views/entrainement-litanies.html',
        controller: 'entrainementCtrl'
      })
      .when('/entrainement-latin', {
        templateUrl: 'views/entrainement-latin.html',
        controller: 'entrainementLatinCtrl'
      })
      .when('/entrainement-grec', {
        templateUrl: 'views/entrainement-grec.html',
        controller: 'entrainementGrecCtrl'
      })
      .when('/entrainement-copte', {
        templateUrl: 'views/entrainement-copte.html',
        controller: 'entrainementCopteCtrl'
      })
      .when('/entrainement-arameen', {
        templateUrl: 'views/entrainement-arameen.html',
        controller: 'entrainementArameenCtrl'
      })
      .when('/entrainement-aram', {
        templateUrl: 'views/entrainement-aram.html',
        controller: 'entrainementAramCtrl'
      })
      .when('/entrainement-slavon', {
        templateUrl: 'views/entrainement-si.html',
        controller: 'entrainementSlavonCtrl'
      })
      .when('/entrainement-arabe', {
        templateUrl: 'views/entrainement-arabe.html',
        controller: 'entrainementArabeCtrl'
      })
      .when('/entrainement-salut', {
        templateUrl: 'views/entrainement-salut.html',
        controller: 'entrainementSalutCtrl'
      })
      .when('/entrainement-chaldeen', {
        templateUrl: 'views/entrainement-chaldeen.html',
        controller: 'entrainementChaldeenCtrl'
      })
      .when('/calendrier', {
        templateUrl: 'views/calendrier.html',
        controller: 'calendrierCtrl'
      })
      .when('/geolocalisation', {
        templateUrl: 'views/geolocalisation.html',
        controller: 'geolocalisationCtrl'
      })     
      .when('/carte', {
        templateUrl: 'views/carte.html',
        controller: 'geolocalisationCtrl'
      })  
      .when('/breviarium', {
        templateUrl: 'views/breviarium.html',
        controller: 'calendrierCtrl'
      })
      .when('/liturgia-horarum', {
        templateUrl: 'views/liturgia-horarum.html',
        controller: 'calendrierCtrl'
      })
      .when('/sign-in', {
        templateUrl: 'views/sign-in.html',
        controller: 'SignInCtrl'
      })
      .when('/consecration', {
        templateUrl: 'views/consecration.html',
        controller: 'MainCtrl'
      })
      // .when('/devotions', {
      //   templateUrl: 'views/menu-devotion.html',
      //   controller: 'DevotionCtrl'
      // })
      .when('/devotions', {
        templateUrl: 'views/menu-devotion.html',
        controller: 'MenuDevotionCtrl'
      })
      .when('/page-devotions', {
        templateUrl: 'views/devotions.html',
        controller: 'DevotionCtrl'
      })
      .when('/autres', {
        templateUrl: 'views/autres.html',
        controller: 'autresCtrl'
      })            
      .otherwise({
        redirectTo: '/'
      });

      $stateProvider
      .state('consecration', {
        url: "/consecration",
        templateUrl: "views/consecration.html",
        controller: "MainCtrl"
      })
      .state('abeille', {
                  url: "/abeille",
                  templateUrl: "views/abeille.html",
                  controller: "veilleurCtrl"
      })
      .state('liturgia-dwn', {
                  url: "/liturgia-dwn",
                  templateUrl: "views/liturgia-dwn.html",
                  controller: "liturgiaDwnCtrl"
      })
      .state('breviarium-dwn', {
                  url: "/breviarium-dwn",
                  templateUrl: "views/breviarium-dwn.html",
                  controller: "breviariumDwnCtrl"
      })
     .state('papillon', {
                  url: "/papillon",
                  templateUrl: "views/papillon.html",
                  controller: "veilleurCtrl"
      })
      .state('luciolle', {
                  url: "/luciolle",
                  templateUrl: "views/luciolle.html",
                  controller: "veilleurCtrl"
      })
      .state('inscription', {
        url: "/inscription",
        templateUrl: "views/inscription.html",
        controller: "inscriptionCtrl"
      })         
      .state('accueil', {
        url: "/accueil",
        templateUrl: "views/accueil.html",
        controller: "accueilCtrl"
      })
      .state('carte', {
        url: "/carte",
        templateUrl: "views/carte.html",
        controller: "geolocalisationCtrl"
      })
      .state('rosaire', {
        url: "/rosaire",
        templateUrl: "views/rosaire.html",
        controller: "rosaireCtrl"
      })
      .state('autres', {
        url: "/autres",
        templateUrl: "views/autres.html",
        controller: "autresCtrl"
      }) 
      .state('page-devotions', {
        url: "/page-devotions",
        templateUrl: "views/devotions.html",
        controller: "DevotionCtrl"
      })                           

  }]);

  // var service = "http://localhost/hicvox/bonnes-nouvelles/class.user.php";   
  var service = "https://hicvox.org/bonnes-nouvelles/class.user.php"; 
  document.addEventListener("backbutton", doNothing, false);
  function doNothing() {}
  document.addEventListener("deviceready", onDeviceReady, false);
  function onDeviceReady() {    
    StatusBar.hide();
    screen.orientation.lock('portrait');
  }
