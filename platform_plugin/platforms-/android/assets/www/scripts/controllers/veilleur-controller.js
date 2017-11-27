'use strict';
askitApp.controller('veilleurCtrl', ['$scope', '$timeout', '$cordovaFile', '$state', function($scope, $timeout, $cordovaFile, $state) {
 $timeout(function() {                             
  +function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.toggle"),f="object"==typeof b&&b;e||d.data("bs.toggle",e=new c(this,f)),"string"==typeof b&&e[b]&&e[b]()})}var c=function(b,c){this.$element=a(b),this.options=a.extend({},this.defaults(),c),this.render()};c.VERSION="2.2.0",c.DEFAULTS={on:"On",off:"Off",onstyle:"primary",offstyle:"default",size:"normal",style:"",width:null,height:null},c.prototype.defaults=function(){return{on:this.$element.attr("data-on")||c.DEFAULTS.on,off:this.$element.attr("data-off")||c.DEFAULTS.off,onstyle:this.$element.attr("data-onstyle")||c.DEFAULTS.onstyle,offstyle:this.$element.attr("data-offstyle")||c.DEFAULTS.offstyle,size:this.$element.attr("data-size")||c.DEFAULTS.size,style:this.$element.attr("data-style")||c.DEFAULTS.style,width:this.$element.attr("data-width")||c.DEFAULTS.width,height:this.$element.attr("data-height")||c.DEFAULTS.height}},c.prototype.render=function(){this._onstyle="btn-"+this.options.onstyle,this._offstyle="btn-"+this.options.offstyle;var b="large"===this.options.size?"btn-lg":"small"===this.options.size?"btn-sm":"mini"===this.options.size?"btn-xs":"",c=a('<label class="btn">').html(this.options.on).addClass(this._onstyle+" "+b),d=a('<label class="btn">').html(this.options.off).addClass(this._offstyle+" "+b+" active"),e=a('<span class="toggle-handle btn btn-default">').addClass(b),f=a('<div class="toggle-group">').append(c,d,e),g=a('<div class="toggle btn" data-toggle="toggle">').addClass(this.$element.prop("checked")?this._onstyle:this._offstyle+" off").addClass(b).addClass(this.options.style);this.$element.wrap(g),a.extend(this,{$toggle:this.$element.parent(),$toggleOn:c,$toggleOff:d,$toggleGroup:f}),this.$toggle.append(f);var h=this.options.width||Math.max(c.outerWidth(),d.outerWidth())+e.outerWidth()/2,i=this.options.height||Math.max(c.outerHeight(),d.outerHeight());c.addClass("toggle-on"),d.addClass("toggle-off"),this.$toggle.css({width:h,height:i}),this.options.height&&(c.css("line-height",c.height()+"px"),d.css("line-height",d.height()+"px")),this.update(!0),this.trigger(!0)},c.prototype.toggle=function(){this.$element.prop("checked")?this.off():this.on()},c.prototype.on=function(a){return this.$element.prop("disabled")?!1:(this.$toggle.removeClass(this._offstyle+" off").addClass(this._onstyle),this.$element.prop("checked",!0),void(a||this.trigger()))},c.prototype.off=function(a){return this.$element.prop("disabled")?!1:(this.$toggle.removeClass(this._onstyle).addClass(this._offstyle+" off"),this.$element.prop("checked",!1),void(a||this.trigger()))},c.prototype.enable=function(){this.$toggle.removeAttr("disabled"),this.$element.prop("disabled",!1)},c.prototype.disable=function(){this.$toggle.attr("disabled","disabled"),this.$element.prop("disabled",!0)},c.prototype.update=function(a){this.$element.prop("disabled")?this.disable():this.enable(),this.$element.prop("checked")?this.on(a):this.off(a)},c.prototype.trigger=function(b){this.$element.off("change.bs.toggle"),b||this.$element.change(),this.$element.on("change.bs.toggle",a.proxy(function(){this.update()},this))},c.prototype.destroy=function(){this.$element.off("change.bs.toggle"),this.$toggleGroup.remove(),this.$element.removeData("bs.toggle"),this.$element.unwrap()};var d=a.fn.bootstrapToggle;a.fn.bootstrapToggle=b,a.fn.bootstrapToggle.Constructor=c,a.fn.toggle.noConflict=function(){return a.fn.bootstrapToggle=d,this},a(function(){a("input[type=checkbox][data-toggle^=toggle]").bootstrapToggle()}),a(document).on("click.bs.toggle","div[data-toggle^=toggle]",function(b){var c=a(this).find("input[type=checkbox]");c.bootstrapToggle("toggle"),b.preventDefault()})}(jQuery); 
  if(localStorage.getItem("flamme-toggle") == "true"){
    $('#flamme-toggle').bootstrapToggle('on');
  }else if(localStorage.getItem("flamme-toggle") == "false"){
    $('#flamme-toggle').bootstrapToggle('off'); 
  }else{
      localStorage.setItem("flamme-toggle", "false");
  } 

  if(localStorage.getItem("abeille-toggle") == "true"){
    $('#abeille-toggle').bootstrapToggle('on');
  }else if(localStorage.getItem("abeille-toggle") == "false"){
    $('#abeille-toggle').bootstrapToggle('off');
  }else{
      localStorage.setItem("abeille-toggle", "false");
  }

  if(localStorage.getItem("papillon-toggle") == "true"){
    $('#papillon-toggle').bootstrapToggle('on');
  }else if(localStorage.getItem("papillon-toggle") == "false"){
    $('#papillon-toggle').bootstrapToggle('off');
  }else{
      localStorage.setItem("papillon-toggle", "false");
  } 

});

$scope.flammeValue = function () {
  var toggle_value = $('#flamme-toggle').prop('checked');
  if(toggle_value == false){
    $('#flamme-toggle').bootstrapToggle('off');
    localStorage.setItem("flamme-toggle", "true");
    $scope.flammeDefault();
  }else{
    $('#flamme-toggle').bootstrapToggle('on');
    localStorage.setItem("flamme-toggle", "false");
    localStorage.setItem("abeille-toggle", "false");
    localStorage.setItem("papillon-toggle", "false");
    $scope.flammeCancelling();    
  }
}

$scope.abeilleValue = function () {
  var toggle_value = $('#abeille-toggle').prop('checked');
  if(localStorage.getItem("flamme-toggle") == "false"){    
    alert("Désolé, pour activer l'Office de l'Abeille, tu dois avoir activé l'Office de la Flamme qui va te permettre de choisir la prière à réciter");
    $('#abeille-toggle').bootstrapToggle('on');
  }else{
   if(toggle_value == false){
      $('#abeille-toggle').bootstrapToggle('off');
      localStorage.setItem("abeille-toggle", "true");
      $scope.abeilleDefault();
    }else{
      $('#abeille-toggle').bootstrapToggle('on');
      localStorage.setItem("abeille-toggle", "false");
      localStorage.setItem("papillon-toggle", "false");
      $scope.abeilleCancelling();      
    } 
  }  
}

$scope.papillonValue = function () {
  var toggle_value = $('#papillon-toggle').prop('checked');
  if(localStorage.getItem("abeille-toggle") == "false"){
    alert("Désolé, pour activer l'Office du Papillon, tu dois avoir activé l'Office de l'Abeille qui va te permettre de choisir les heures de prières");
    $('#papillon-toggle').bootstrapToggle('on');
  }else{
   if(toggle_value == false){
      $('#papillon-toggle').bootstrapToggle('off');
      localStorage.setItem("papillon-toggle", "true");
      $scope.papillonDefault();
    }else{
      $('#papillon-toggle').bootstrapToggle('on');
      localStorage.setItem("papillon-toggle", "false");
      $scope.papillonCancelling();
    } 
  }  
}

 $scope.gotoCarte = function () {
    $state.go('carte', null, { reload: true });
 }
 
document.addEventListener('deviceready', function () {
  screen.orientation.lock('portrait');
});

 $('#merci').click(function(){
    document.getElementById("Player").pause();
 });
 
 if(localStorage.getItem("ptk") == "lat"){
   $("#ptk-latin").prop("checked", true);
 }else if(localStorage.getItem("ptk") == "fr"){
   $("#ptk-fr-off").prop("checked", true);
 }else{}
 
 if(localStorage.getItem("angelus") == "angelus-sonnerie"){
 $("#angelus-sonnerie").prop("checked", true);
 }else if(localStorage.getItem("angelus") == "angelus-trad"){
 $("#angelus-trad").prop("checked", true);
 }else if(localStorage.getItem("angelus") == "angelus-communaute"){
 $("#angelus-communaute").prop("checked", true);
 }else{}

 $scope.latin = function () {
   localStorage.setItem("ptk", "lat");
 }
 $scope.francais = function () {
   localStorage.setItem("ptk", "fr");
 }
 $scope.angelusSonnerie = function () {
   localStorage.setItem("angelus", "angelus-sonnerie");
 }
 $scope.angelusTrad = function () {
   localStorage.setItem("angelus", "angelus-trad");
 }
 $scope.angelusCommunaute = function () {
   localStorage.setItem("angelus", "angelus-communaute");
 }

 document.addEventListener('deviceready', function () {
    screen.orientation.lock('portrait');
 });

 $scope.flammeCancelling = function () {
  cordova.plugins.notification.local.cancel([1, 3], function() {});
  $scope.abeilleCancelling();
  $scope.papillonCancelling();
 };

 $scope.abeilleCancelling = function () {
  cordova.plugins.notification.local.cancel([8, 10, 12, 14, 16, 18, 20], function() {});
  $scope.papillonCancelling();
 };

 $scope.papillonCancelling = function () {
  cordova.plugins.notification.local.cancel([24], function() {});
 };

 $scope.flammeDefault = function () {
  // PETITE PENTEKCOTE   
   var heure_petite_pentecote = 9;
   var minute_petite_pentecote = 0;
   var date = new Date();
   date.setDate(date.getDate());
   date.setHours(heure_petite_pentecote);
   date.setMinutes(minute_petite_pentecote);
   date.setSeconds(0);
   var date_petite_pentecote = new Date(date);
   var date_petite_pentecoteGetTime = date_petite_pentecote.getTime();
   var date_10_s_petite_pentecote = new Date(date_petite_pentecoteGetTime - 10 * 1000);
   var petite_ptk_mp3 = $('input[name="petite-ptk"]:checked').val();
   cordova.plugins.notification.local.schedule({
     id: 1,
     title: "Hicvox",
     message: "Prépare toi pour la prière de la petite pentecote. Mets en veille ton mobile!",
     firstAt: date_10_s_petite_pentecote,
     every: "day",
     sound: "file://Media/Alarm/alarme-cloches.mp3",
     icon: "res://icon.png",
     smallIcon: "res://icon.png"     
   });
   
   // VEILLE   
   var heure_petite_pentecote = 5;
   var minute_petite_pentecote = 15;
   var date = new Date();
   date.setDate(date.getDate());
   date.setHours(heure_petite_pentecote);
   date.setMinutes(minute_petite_pentecote);
   date.setSeconds(0);
   var date_petite_pentecote = new Date(date);
   var date_petite_pentecoteGetTime = date_petite_pentecote.getTime();
   var date_10_s_petite_pentecote = new Date(date_petite_pentecoteGetTime - 10 * 1000);   
   cordova.plugins.notification.local.schedule({
     id: 3,
     title: "Hicvox",
     message: "Prépare toi pour la prière de la petite pentecote. Mets en veille ton mobile!",
     firstAt: date_10_s_petite_pentecote,
     every: "day",
     sound: "file://Media/Alarm/alarme-cloches.mp3",
     icon: "res://icon.png",
     smallIcon: "res://icon.png"     
    });
  // CLICK EVENT
  cordova.plugins.notification.local.on("click", function (notification) {
     if(notification.id == 1 || notification.id == 3){
      $state.go('luciolle', null, { reload: true });
     }else if(notification.id == 6 || notification.id == 8 || notification.id == 10 || notification.id == 12 || notification.id == 14 || notification.id == 16 ){
      $state.go('abeille', null, { reload: true });
     }else{
      $state.go('rosaire', null, { reload: true });
     }
  });
 };
 
$scope.abeilleDefault = function () {
  // LAUDES   
   var heure_petite_pentecote = 8;
   var minute_petite_pentecote = 0;
   var date = new Date();
   date.setDate(date.getDate());
   date.setHours(heure_petite_pentecote);
   date.setMinutes(minute_petite_pentecote);
   date.setSeconds(0);
   var date_petite_pentecote = new Date(date);
   var date_petite_pentecoteGetTime = date_petite_pentecote.getTime();
   var date_10_s_petite_pentecote = new Date(date_petite_pentecoteGetTime - 10 * 1000);
   cordova.plugins.notification.local.schedule({
   id: 8,
   title: "Hicvox",
   message: "Prépare toi pour la prière des Laudes. Mets en veille ton mobile!",
   firstAt: date_10_s_petite_pentecote,
   every: "day",
   sound: "file://Media/Alarm/alarme-cloches.mp3",
   icon: "res://icon.png",
   smallIcon: "res://icon.png"
   });
  //TIERCE   
   var heure_petite_pentecote = 9;
   var minute_petite_pentecote = 0;
   var date = new Date();
   date.setDate(date.getDate());
   date.setHours(heure_petite_pentecote);
   date.setMinutes(minute_petite_pentecote);
   date.setSeconds(0);
   var date_petite_pentecote = new Date(date);
   var date_petite_pentecoteGetTime = date_petite_pentecote.getTime();
   var date_10_s_petite_pentecote = new Date(date_petite_pentecoteGetTime - 10 * 1000);
   cordova.plugins.notification.local.schedule({
     id: 10,
     title: "Hicvox",
     message: "Prépare toi pour la prière des Tierce. Mets en veille ton mobile!",
     firstAt: date_10_s_petite_pentecote,
     every: "day",
     sound: "file://Media/Alarm/alarme-cloches.mp3",
     icon: "res://icon.png",
     smallIcon: "res://icon.png"
   });
  //SEXTE   
   var heure_petite_pentecote = 12;
   var minute_petite_pentecote = 0;
   var date = new Date();
   date.setDate(date.getDate());
   date.setHours(heure_petite_pentecote);
   date.setMinutes(minute_petite_pentecote);
   date.setSeconds(0);
   var date_petite_pentecote = new Date(date);
   var date_petite_pentecoteGetTime = date_petite_pentecote.getTime();
   var date_10_s_petite_pentecote = new Date(date_petite_pentecoteGetTime - 10 * 1000);
   cordova.plugins.notification.local.schedule({
     id: 12,
     title: "Hicvox",
     message: "Prépare toi pour la prière des Sexte. Mets en veille ton mobile!",
     firstAt: date_10_s_petite_pentecote,
     every: "day",
     sound: "file://Media/Alarm/alarme-cloches.mp3",
     icon: "res://icon.png",
     smallIcon: "res://icon.png"
    });

   //NONES   
   var heure_petite_pentecote = 15;
   var minute_petite_pentecote = 0;
   var date = new Date();
   date.setDate(date.getDate());
   date.setHours(heure_petite_pentecote);
   date.setMinutes(minute_petite_pentecote);
   date.setSeconds(0);
   var date_petite_pentecote = new Date(date);
   var date_petite_pentecoteGetTime = date_petite_pentecote.getTime();
   var date_10_s_petite_pentecote = new Date(date_petite_pentecoteGetTime - 10 * 1000);
   cordova.plugins.notification.local.schedule({
     id: 14,
     title: "Hicvox",
     message: "Prépare toi pour la prière des Nones. Mets en veille ton mobile!",
     firstAt: date_10_s_petite_pentecote,
     every: "day",
     sound: "file://Media/Alarm/alarme-cloches.mp3",
     icon: "res://icon.png",
     smallIcon: "res://icon.png"   
   });

   //VEPRES            
   var heure_petite_pentecote = 18;
   var minute_petite_pentecote = 15;
   var date = new Date();
   date.setDate(date.getDate());
   date.setHours(heure_petite_pentecote);
   date.setMinutes(minute_petite_pentecote);
   date.setSeconds(0);
   var date_petite_pentecote = new Date(date);
   var date_petite_pentecoteGetTime = date_petite_pentecote.getTime();
   var date_10_s_petite_pentecote = new Date(date_petite_pentecoteGetTime - 10 * 1000);                 
   cordova.plugins.notification.local.schedule({
     id: 16,
     title: "Hicvox",
     message: "Prépare toi pour la prière des Vepres. Mets en veille ton mobile!",
     firstAt: date_10_s_petite_pentecote,
     every: "day",
     sound: "file://Media/Alarm/alarme-cloches.mp3",
     icon: "res://icon.png",
     smallIcon: "res://icon.png"
   });

   //COMPLIES   
   var heure_petite_pentecote = 21;
   var minute_petite_pentecote = 0;
   var date = new Date();
   date.setDate(date.getDate());
   date.setHours(heure_petite_pentecote);
   date.setMinutes(minute_petite_pentecote);
   date.setSeconds(0);
   var date_petite_pentecote = new Date(date);
   var date_petite_pentecoteGetTime = date_petite_pentecote.getTime();
   var date_10_s_petite_pentecote = new Date(date_petite_pentecoteGetTime - 10 * 1000);                 
   cordova.plugins.notification.local.schedule({
     id: 18,
     title: "Hicvox",
     message: "Prépare toi pour la prière des Complies. Mets en veille ton mobile!",
     firstAt: date_10_s_petite_pentecote,
     every: "day",
     sound: "file://Media/Alarm/alarme-cloches.mp3",
     icon: "res://icon.png",
     smallIcon: "res://icon.png"
   });
  //3 ROSES   
   var heure_petite_pentecote = 18;
   var minute_petite_pentecote = 0;
   var date = new Date();
   date.setDate(date.getDate());
   date.setHours(heure_petite_pentecote);
   date.setMinutes(minute_petite_pentecote);
   date.setSeconds(0);
   var date_petite_pentecote = new Date(date);
   var date_petite_pentecoteGetTime = date_petite_pentecote.getTime();
   var date_10_s_petite_pentecote = new Date(date_petite_pentecoteGetTime - 10 * 1000);
   cordova.plugins.notification.local.schedule({
       id: 20,
       title: "Hicvox",
       message: "Prépare toi pour trois Je vous salue Marie. Cliques sur cette notification ou rediriges toi vers la page Rosaire",
       firstAt: date_10_s_petite_pentecote,
       every: "day",
       sound: "file://Media/Alarm/alarme-cloches.mp3",
       icon: "res://icon.png",
       smallIcon: "res://icon.png"
    }); 
  // CLICK EVENT
  cordova.plugins.notification.local.on("click", function (notification) {
     if(notification.id == 1 || notification.id == 3){
      $state.go('luciolle', null, { reload: true });
     }else if(notification.id == 6 || notification.id == 8 || notification.id == 10 || notification.id == 12 || notification.id == 14 || notification.id == 16 ){
      $state.go('abeille', null, { reload: true });
     }else{
      $state.go('rosaire', null, { reload: true });
     }
  });
};

$scope.papillonDefault = function () { 
  //DIZAINIER
 var heure_petite_pentecote = 17;
 var minute_petite_pentecote = 0;
 var date = new Date();
 date.setDate(date.getDate());
 date.setHours(heure_petite_pentecote);
 date.setMinutes(minute_petite_pentecote);
 date.setSeconds(0);
 var date_petite_pentecote = new Date(date);
 var date_petite_pentecoteGetTime = date_petite_pentecote.getTime();
 var date_10_s_petite_pentecote = new Date(date_petite_pentecoteGetTime - 10 * 1000);
 cordova.plugins.notification.local.schedule({
   id: 24,
   title: "Hicvox",
   message: "Prépare toi pour un dizainier. Cliques sur cette notification ou rediriges toi vers la page Rosaire",
   firstAt: date_10_s_petite_pentecote,
   every: "day",
   sound: "file://Media/Alarm/alarme-cloches.mp3",
   icon: "res://icon.png",
   smallIcon: "res://icon.png"
 });
 // CLICK EVENT
  cordova.plugins.notification.local.on("click", function (notification) {
     if(notification.id == 1 || notification.id == 3){
      $state.go('luciolle', null, { reload: true });
     }else if(notification.id == 6 || notification.id == 10 || notification.id == 14 ){
      $state.go('abeille', null, { reload: true });
     }else if( notification.id == 8 || notification.id == 12 || notification.id == 16 ){
      $state.go('papillon', null, { reload: true });
     }
     else{
      $state.go('rosaire', null, { reload: true });
     }
  }); 
 };

 $scope.scheduleNotificationPetitePentecote = function () {
 var time_petite_pentecote = document.getElementById("time-petite-pentecote").value;
 var heure_petite_pentecote = time_petite_pentecote.split(':')[0];
 var minute_petite_pentecote = time_petite_pentecote.split(':')[1];
 var date = new Date();
 date.setDate(date.getDate());
 date.setHours(heure_petite_pentecote);
 date.setMinutes(minute_petite_pentecote);
 date.setSeconds(0);
 var date_petite_pentecote = new Date(date);
 var date_petite_pentecoteGetTime = date_petite_pentecote.getTime();
 var date_10_s_petite_pentecote = new Date(date_petite_pentecoteGetTime - 10 * 1000);
 var petite_ptk_mp3 = $('input[name="petite-ptk"]:checked').val();
 cordova.plugins.notification.local.schedule({
   id: 1,
   title: "Hicvox",
   message: "Prépare toi pour la prière de la petite pentecote. Mets en veille ton mobile!",
   firstAt: date_10_s_petite_pentecote,
   every: "day",
   sound: "file://Media/Alarm/alarme-cloches.mp3",
   icon: "res://icon.png",
   smallIcon: "res://icon.png",
   data: { dataId:"123" }
 });
 
 cordova.plugins.notification.local.on("click", function (notification) {
   if(notification.id == 1 || notification.id == 3){
    $state.go('luciolle', null, { reload: true });
   }else if(notification.id == 6 || notification.id == 8 || notification.id == 10 || notification.id == 12 || notification.id == 14 || notification.id == 16 ){
    $state.go('abeille', null, { reload: true });
   }else{
    $state.go('rosaire', null, { reload: true });
   }
 });
 alert('alarme enregistrée');
 };
 $scope.scheduleNotificationVeille = function () {
 var time_petite_pentecote = document.getElementById("time-veille").value;
 var heure_petite_pentecote = time_petite_pentecote.split(':')[0];
 var minute_petite_pentecote = time_petite_pentecote.split(':')[1];
 var date = new Date();
 date.setDate(date.getDate());
 date.setHours(heure_petite_pentecote);
 date.setMinutes(minute_petite_pentecote);
 date.setSeconds(0);
 var date_petite_pentecote = new Date(date);
 var date_petite_pentecoteGetTime = date_petite_pentecote.getTime();
 var date_10_s_petite_pentecote = new Date(date_petite_pentecoteGetTime - 10 * 1000);
 var petite_ptk_mp3 = $('input[name="petite-ptk"]:checked').val();
 var apr_sec = 40;
 if(petite_ptk_mp3 == "eLa-InA-v0"){
 apr_sec = 40;
 }else{
 apr_sec = 32;
 }
 var date_veille = new Date(date_petite_pentecoteGetTime + apr_sec * 1000);
 cordova.plugins.notification.local.schedule({
                                             id: 3,
                                             title: "Hicvox",
                                             message: "Prépare toi pour la prière de la petite pentecote. Mets en veille ton mobile!",
                                             firstAt: date_10_s_petite_pentecote,
                                             every: "day",
                                             sound: "file://Media/Alarm/alarme-cloches.mp3",
                                             icon: "res://icon.png",
                                             smallIcon: "res://icon.png",
                                             data: { dataId:"123" }
                                             });
 
 cordova.plugins.notification.local.on("click", function (notification) {
                                       if(notification.id == 1 || notification.id == 3){
                                       $state.go('luciolle', null, { reload: true });
                                       }else if(notification.id == 6 || notification.id == 8 || notification.id == 10 || notification.id == 12 || notification.id == 14 || notification.id == 16 ){
                                       $state.go('abeille', null, { reload: true });
                                       }else{
                                       $state.go('rosaire', null, { reload: true });
                                       }
                                       });
 alert('alarme enregistrée');
 };
 $scope.scheduleNotificationMatines = function () {
 var time_petite_pentecote = document.getElementById("time-matines").value;
 var heure_petite_pentecote = time_petite_pentecote.split(':')[0];
 var minute_petite_pentecote = time_petite_pentecote.split(':')[1];
 var date = new Date();
 date.setDate(date.getDate());
 date.setHours(heure_petite_pentecote);
 date.setMinutes(minute_petite_pentecote);
 date.setSeconds(0);
 var date_petite_pentecote = new Date(date);
 var date_petite_pentecoteGetTime = date_petite_pentecote.getTime();
 var date_10_s_petite_pentecote = new Date(date_petite_pentecoteGetTime - 10 * 1000);
 cordova.plugins.notification.local.schedule({
                                             id: 6,
                                             title: "Hicvox",
                                             message: "Prépare toi pour la prière des Matines. Mets en veille ton mobile!",
                                             firstAt: date_10_s_petite_pentecote,
                                             every: "day",
                                             sound: "file://Media/Alarm/alarme-cloches.mp3",
                                             icon: "res://icon.png",
                                             smallIcon: "res://icon.png",
                                             data: { dataId:"123" }
                                             });
 
 cordova.plugins.notification.local.on("click", function (notification) {
                                       if(notification.id == 1 || notification.id == 3){
                                       $state.go('luciolle', null, { reload: true });
                                       }else if(notification.id == 6 || notification.id == 8 || notification.id == 10 || notification.id == 12 || notification.id == 14 || notification.id == 16 ){
                                       $state.go('abeille', null, { reload: true });
                                       }else{
                                       $state.go('rosaire', null, { reload: true });
                                       }
                                       });
 alert('alarme enregistrée');
 };
 $scope.scheduleNotificationLaudes = function () {
 var time_petite_pentecote = document.getElementById("time-laudes").value;
 var heure_petite_pentecote = time_petite_pentecote.split(':')[0];
 var minute_petite_pentecote = time_petite_pentecote.split(':')[1];
 var date = new Date();
 date.setDate(date.getDate());
 date.setHours(heure_petite_pentecote);
 date.setMinutes(minute_petite_pentecote);
 date.setSeconds(0);
 var date_petite_pentecote = new Date(date);
 var date_petite_pentecoteGetTime = date_petite_pentecote.getTime();
 var date_10_s_petite_pentecote = new Date(date_petite_pentecoteGetTime - 10 * 1000);
 cordova.plugins.notification.local.schedule({
                                             id: 8,
                                             title: "Hicvox",
                                             message: "Prépare toi pour la prière des Laudes. Mets en veille ton mobile!",
                                             firstAt: date_10_s_petite_pentecote,
                                             every: "day",
                                             sound: "file://Media/Alarm/alarme-cloches.mp3",
                                             icon: "res://icon.png",
                                             smallIcon: "res://icon.png",
                                             data: { dataId:"123" }
                                             });
 
 cordova.plugins.notification.local.on("click", function (notification) {
                                       if(notification.id == 1 || notification.id == 3){
                                       $state.go('luciolle', null, { reload: true });
                                       }else if(notification.id == 6 || notification.id == 8 || notification.id == 10 || notification.id == 12 || notification.id == 14 || notification.id == 16 ){
                                       $state.go('abeille', null, { reload: true });
                                       }else{
                                       $state.go('rosaire', null, { reload: true });
                                       }
                                       });
 alert('alarme enregistrée');
 };
 $scope.scheduleNotificationTierce = function () {
 var time_petite_pentecote = document.getElementById("time-tierce").value;
 var heure_petite_pentecote = time_petite_pentecote.split(':')[0];
 var minute_petite_pentecote = time_petite_pentecote.split(':')[1];
 var date = new Date();
 date.setDate(date.getDate());
 date.setHours(heure_petite_pentecote);
 date.setMinutes(minute_petite_pentecote);
 date.setSeconds(0);
 var date_petite_pentecote = new Date(date);
 var date_petite_pentecoteGetTime = date_petite_pentecote.getTime();
 var date_10_s_petite_pentecote = new Date(date_petite_pentecoteGetTime - 10 * 1000);
 cordova.plugins.notification.local.schedule({
                                             id: 10,
                                             title: "Hicvox",
                                             message: "Prépare toi pour la prière des Tierce. Mets en veille ton mobile!",
                                             firstAt: date_10_s_petite_pentecote,
                                             every: "day",
                                             sound: "file://Media/Alarm/alarme-cloches.mp3",
                                             icon: "res://icon.png",
                                             smallIcon: "res://icon.png",
                                             data: { dataId:"123" }
                                             });
 
 cordova.plugins.notification.local.on("click", function (notification) {
                                       if(notification.id == 1 || notification.id == 3){
                                       $state.go('luciolle', null, { reload: true });
                                       }else if(notification.id == 6 || notification.id == 8 || notification.id == 10 || notification.id == 12 || notification.id == 14 || notification.id == 16 ){
                                       $state.go('abeille', null, { reload: true });
                                       }else{
                                       $state.go('rosaire', null, { reload: true });
                                       }
                                       });
 alert('alarme enregistrée');
 };
 $scope.scheduleNotificationSexte = function () {
 var time_petite_pentecote = document.getElementById("time-sexte").value;
 var heure_petite_pentecote = time_petite_pentecote.split(':')[0];
 var minute_petite_pentecote = time_petite_pentecote.split(':')[1];
 var date = new Date();
 date.setDate(date.getDate());
 date.setHours(heure_petite_pentecote);
 date.setMinutes(minute_petite_pentecote);
 date.setSeconds(0);
 var date_petite_pentecote = new Date(date);
 var date_petite_pentecoteGetTime = date_petite_pentecote.getTime();
 var date_10_s_petite_pentecote = new Date(date_petite_pentecoteGetTime - 10 * 1000);
 cordova.plugins.notification.local.schedule({
                                             id: 12,
                                             title: "Hicvox",
                                             message: "Prépare toi pour la prière des Sexte. Mets en veille ton mobile!",
                                             firstAt: date_10_s_petite_pentecote,
                                             every: "day",
                                             sound: "file://Media/Alarm/alarme-cloches.mp3",
                                             icon: "res://icon.png",
                                             smallIcon: "res://icon.png",
                                             data: { dataId:"123" }
                                             });
 
 cordova.plugins.notification.local.on("click", function (notification) {
                                       if(notification.id == 1 || notification.id == 3){
                                       $state.go('luciolle', null, { reload: true });
                                       }else if(notification.id == 6 || notification.id == 8 || notification.id == 10 || notification.id == 12 || notification.id == 14 || notification.id == 16 ){
                                       $state.go('abeille', null, { reload: true });
                                       }else{
                                       $state.go('rosaire', null, { reload: true });
                                       }
                                       });
 alert('alarme enregistrée');
 };
 $scope.scheduleNotificationNones = function () {
 var time_petite_pentecote = document.getElementById("time-nones").value;
 var heure_petite_pentecote = time_petite_pentecote.split(':')[0];
 var minute_petite_pentecote = time_petite_pentecote.split(':')[1];
 var date = new Date();
 date.setDate(date.getDate());
 date.setHours(heure_petite_pentecote);
 date.setMinutes(minute_petite_pentecote);
 date.setSeconds(0);
 var date_petite_pentecote = new Date(date);
 var date_petite_pentecoteGetTime = date_petite_pentecote.getTime();
 var date_10_s_petite_pentecote = new Date(date_petite_pentecoteGetTime - 10 * 1000);
 cordova.plugins.notification.local.schedule({
                                             id: 14,
                                             title: "Hicvox",
                                             message: "Prépare toi pour la prière des Nones. Mets en veille ton mobile!",
                                             firstAt: date_10_s_petite_pentecote,
                                             every: "day",
                                             sound: "file://Media/Alarm/alarme-cloches.mp3",
                                             icon: "res://icon.png",
                                             smallIcon: "res://icon.png",
                                             data: { dataId:"123" }
                                             });
 cordova.plugins.notification.local.on("click", function (notification) {
                                       if(notification.id == 1 || notification.id == 3){
                                       $state.go('luciolle', null, { reload: true });
                                       }else if(notification.id == 6 || notification.id == 8 || notification.id == 10 || notification.id == 12 || notification.id == 14 || notification.id == 16 ){
                                       $state.go('abeille', null, { reload: true });
                                       }else{
                                       $state.go('rosaire', null, { reload: true });
                                       }
  });
 alert('alarme enregistrée');
 };
 $scope.scheduleNotificationVepres = function () {
 var time_petite_pentecote = document.getElementById("time-vepres").value;               
 var heure_petite_pentecote = time_petite_pentecote.split(':')[0];
 var minute_petite_pentecote = time_petite_pentecote.split(':')[1];
 var date = new Date();
 date.setDate(date.getDate());
 date.setHours(heure_petite_pentecote);
 date.setMinutes(minute_petite_pentecote);
 date.setSeconds(0);
 var date_petite_pentecote = new Date(date);
 var date_petite_pentecoteGetTime = date_petite_pentecote.getTime();
 var date_10_s_petite_pentecote = new Date(date_petite_pentecoteGetTime - 10 * 1000);                 
 cordova.plugins.notification.local.schedule({
                                             id: 16,
                                             title: "Hicvox",
                                             message: "Prépare toi pour la prière des Vepres. Mets en veille ton mobile!",
                                             firstAt: date_10_s_petite_pentecote,
                                             every: "day",
                                             sound: "file://Media/Alarm/alarme-cloches.mp3",
                                             icon: "res://icon.png",
                                             smallIcon: "res://icon.png",
                                             data: { dataId:"123" }
                                             });
 alert('alarme enregistrée');
 };
 $scope.scheduleNotificationComplies = function () {
 var time_petite_pentecote = document.getElementById("time-complies").value;               
 var heure_petite_pentecote = time_petite_pentecote.split(':')[0];
 var minute_petite_pentecote = time_petite_pentecote.split(':')[1];
 var date = new Date();
 date.setDate(date.getDate());
 date.setHours(heure_petite_pentecote);
 date.setMinutes(minute_petite_pentecote);
 date.setSeconds(0);
 var date_petite_pentecote = new Date(date);
 var date_petite_pentecoteGetTime = date_petite_pentecote.getTime();
 var date_10_s_petite_pentecote = new Date(date_petite_pentecoteGetTime - 10 * 1000);                 
 cordova.plugins.notification.local.schedule({
                                             id: 18,
                                             title: "Hicvox",
                                             message: "Prépare toi pour la prière des Complies. Mets en veille ton mobile!",
                                             firstAt: date_10_s_petite_pentecote,
                                             every: "day",
                                             sound: "file://Media/Alarm/alarme-cloches.mp3",
                                             icon: "res://icon.png",
                                             smallIcon: "res://icon.png",
                                             data: { dataId:"123" }
                                             });
 cordova.plugins.notification.local.on("click", function (notification) {
                                       if(notification.id == 1 || notification.id == 3){
                                       $state.go('luciolle', null, { reload: true });
                                       }else if(notification.id == 6 || notification.id == 8 || notification.id == 10 || notification.id == 12 || notification.id == 14 || notification.id == 16 ){
                                       $state.go('abeille', null, { reload: true });
                                       }else{
                                       $state.go('rosaire', null, { reload: true });
                                       }
  });
 alert('alarme enregistrée');
 };
 $scope.scheduleNotificationRose = function () {
 var time_petite_pentecote = document.getElementById("time-rose").value;               
 var heure_petite_pentecote = time_petite_pentecote.split(':')[0];
 var minute_petite_pentecote = time_petite_pentecote.split(':')[1];
 var date = new Date();
 date.setDate(date.getDate());
 date.setHours(heure_petite_pentecote);
 date.setMinutes(minute_petite_pentecote);
 date.setSeconds(0);
 var date_petite_pentecote = new Date(date);
 var date_petite_pentecoteGetTime = date_petite_pentecote.getTime();
 var date_10_s_petite_pentecote = new Date(date_petite_pentecoteGetTime - 10 * 1000);
 var date_20_s_petite_pentecote = new Date(date_petite_pentecoteGetTime - 30 * 1000);
 var date_30_s_petite_pentecote = new Date(date_petite_pentecoteGetTime - 50 * 1000);
 
 
 cordova.plugins.notification.local.schedule({
                                             id: 20,
                                             title: "Hicvox",
                                             message: "Prépare toi pour trois Je vous salue Marie. Cliques sur cette notification ou rediriges toi vers la page Rosaire",
                                             firstAt: date_10_s_petite_pentecote,
                                             every: "day",
                                             sound: "file://Media/Alarm/alarme-cloches.mp3",
                                             icon: "res://icon.png",
                                             smallIcon: "res://icon.png"
                                             });
cordova.plugins.notification.local.on("click", function (notification) {
    if(notification.id == 1 || notification.id == 3){
      $state.go('luciolle', null, { reload: true });
    }else if(notification.id == 6 || notification.id == 8 || notification.id == 10 || notification.id == 12 || notification.id == 14 || notification.id == 16 ){
      $state.go('abeille', null, { reload: true });
    }else{
      $state.go('rosaire', null, { reload: true });
    }
});
 
 alert('alarme enregistrée');
 };
$scope.scheduleNotificationDizaine = function () {
 var time_petite_pentecote = document.getElementById("time-dizaine").value;
 var heure_petite_pentecote = time_petite_pentecote.split(':')[0];
 var minute_petite_pentecote = time_petite_pentecote.split(':')[1];
 var date = new Date();
 date.setDate(date.getDate());
 date.setHours(heure_petite_pentecote);
 date.setMinutes(minute_petite_pentecote);
 date.setSeconds(0);
 var date_petite_pentecote = new Date(date);
 var date_petite_pentecoteGetTime = date_petite_pentecote.getTime();
 var date_10_s_petite_pentecote = new Date(date_petite_pentecoteGetTime - 10 * 1000);
 cordova.plugins.notification.local.schedule({
                                             id: 24,
                                             title: "Hicvox",
                                             message: "Prépare toi pour un dizainier. Cliques sur cette notification ou rediriges toi vers la page Rosaire",
                                             firstAt: date_10_s_petite_pentecote,
                                             every: "day",
                                             sound: "file://Media/Alarm/alarme-cloches.mp3",
                                             icon: "res://icon.png",
                                             smallIcon: "res://icon.png"
                                             });

 
 cordova.plugins.notification.local.on("click", function (notification) {
                                       if(notification.id == 1 || notification.id == 3){
                                       $state.go('luciolle', null, { reload: true });
                                       }else if(notification.id == 6 || notification.id == 8 || notification.id == 10 || notification.id == 12 || notification.id == 14 || notification.id == 16 ){
                                       $state.go('abeille', null, { reload: true });
                                       }else{
                                       $state.go('rosaire', null, { reload: true });
                                       }
});
 
 alert('alarme enregistrée');
 
};

 $scope.scheduleNotificationLaudesPapillon = function () {
 var time_petite_pentecote = document.getElementById("time-laudes").value;
 var heure_petite_pentecote = time_petite_pentecote.split(':')[0];
 var minute_petite_pentecote = time_petite_pentecote.split(':')[1];
 var date = new Date();
 date.setDate(date.getDate());
 date.setHours(heure_petite_pentecote);
 date.setMinutes(minute_petite_pentecote);
 date.setSeconds(0);
 var date_petite_pentecote = new Date(date);
 var date_petite_pentecoteGetTime = date_petite_pentecote.getTime();
 var date_10_s_petite_pentecote = new Date(date_petite_pentecoteGetTime - 10 * 1000);
 var angelus = $('input[name="angelus"]:checked').val();
 cordova.plugins.notification.local.schedule({
                                             id: 8,
                                             title: "Hicvox",
                                             message: "Prépare toi pour la prière des Laudes. Mets en veille ton mobile!",
                                             firstAt: date_10_s_petite_pentecote,
                                             every: "day",
                                             sound: "file://Media/Alarm/alarme-cloches.mp3",
                                             icon: "res://icon.png",
                                             smallIcon: "res://icon.png",
                                             data: { dataId:"123" }
                                             });
 cordova.plugins.notification.local.on("click", function (notification) {
                                       if(notification.id == 1 || notification.id == 3){
                                       $state.go('luciolle', null, { reload: true });
                                       }else if(notification.id == 6 || notification.id == 8 || notification.id == 10 || notification.id == 12 || notification.id == 14 || notification.id == 16 ){
                                       $state.go('abeille', null, { reload: true });
                                       }else{
                                       $state.go('rosaire', null, { reload: true });
                                       }
                                       });
 alert('alarme enregistrée');
 };
 $scope.scheduleNotificationSextePapillon = function () {
 var time_petite_pentecote = document.getElementById("time-sexte").value;
 var heure_petite_pentecote = time_petite_pentecote.split(':')[0];
 var minute_petite_pentecote = time_petite_pentecote.split(':')[1];
 var date = new Date();
 date.setDate(date.getDate());
 date.setHours(heure_petite_pentecote);
 date.setMinutes(minute_petite_pentecote);
 date.setSeconds(0);
 var date_petite_pentecote = new Date(date);
 var date_petite_pentecoteGetTime = date_petite_pentecote.getTime();
 var date_10_s_petite_pentecote = new Date(date_petite_pentecoteGetTime - 10 * 1000);
 var angelus = $('input[name="angelus"]:checked').val();
 cordova.plugins.notification.local.schedule({
       id: 12,
       title: "Hicvox",
       message: "Prépare toi pour la prière des Sexte. Mets en veille ton mobile!",
       firstAt: date_10_s_petite_pentecote,
       every: "day",
       sound: "file://Media/Alarm/alarme-cloches.mp3",
       icon: "res://icon.png",
       smallIcon: "res://icon.png",
       data: { dataId:"123" }
 });
 cordova.plugins.notification.local.on("click", function (notification) {
       if(notification.id == 1 || notification.id == 3){
       $state.go('luciolle', null, { reload: true });
       }else if(notification.id == 6 || notification.id == 8 || notification.id == 10 || notification.id == 12 || notification.id == 14 || notification.id == 16 ){
       $state.go('abeille', null, { reload: true });
       }else{
       $state.go('rosaire', null, { reload: true });
       }
  });
 alert('alarme enregistrée');
 };
 
 $scope.scheduleNotificationVepresPapillon = function () {
 var time_petite_pentecote = document.getElementById("time-vepres").value;
 var heure_petite_pentecote = time_petite_pentecote.split(':')[0];
 var minute_petite_pentecote = time_petite_pentecote.split(':')[1];
 var date = new Date();
 date.setDate(date.getDate());
 date.setHours(heure_petite_pentecote);
 date.setMinutes(minute_petite_pentecote);
 date.setSeconds(0);
 var date_petite_pentecote = new Date(date);
 var date_petite_pentecoteGetTime = date_petite_pentecote.getTime();
 var date_10_s_petite_pentecote = new Date(date_petite_pentecoteGetTime - 10 * 1000);
 var angelus = $('input[name="angelus"]:checked').val();
 cordova.plugins.notification.local.schedule({
                                             id: 16,
                                             title: "Hicvox",
                                             message: "Prépare toi pour la prière des Vepres. Mets en veille ton mobile!",
                                             firstAt: date_10_s_petite_pentecote,
                                             every: "day",
                                             sound: "file://Media/Alarm/alarme-cloches.mp3",
                                             icon: "res://icon.png",
                                             smallIcon: "res://icon.png",
                                             data: { dataId:"123" }
 });
 
 alert('alarme enregistrée');
 };
                                     
}]);

