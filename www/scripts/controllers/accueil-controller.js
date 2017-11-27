'use strict';

askitApp.controller('accueilCtrl', ['$scope', '$timeout', '$http', '$state', function($scope, $timeout, $http, $state) {				
	$scope.gotoCarte = function () {
        $state.go('carte', null, { reload: true });
    }    

    document.addEventListener('deviceready', function () {
        screen.orientation.lock('portrait');
    });

    $(".hvx-scroll1").click(function(){
        $("ul.hvx-scr1").toggleClass("hvx-dropdown");
    });

    $(".hvx-scroll2").click(function(){
        $("ul.hvx-scr2").toggleClass("hvx-dropdown");
    });

	$timeout(function() {
        // $.getScript("js/bootstrap-toggle.min.js"); 
        +function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.toggle"),f="object"==typeof b&&b;e||d.data("bs.toggle",e=new c(this,f)),"string"==typeof b&&e[b]&&e[b]()})}var c=function(b,c){this.$element=a(b),this.options=a.extend({},this.defaults(),c),this.render()};c.VERSION="2.2.0",c.DEFAULTS={on:"On",off:"Off",onstyle:"primary",offstyle:"default",size:"normal",style:"",width:null,height:null},c.prototype.defaults=function(){return{on:this.$element.attr("data-on")||c.DEFAULTS.on,off:this.$element.attr("data-off")||c.DEFAULTS.off,onstyle:this.$element.attr("data-onstyle")||c.DEFAULTS.onstyle,offstyle:this.$element.attr("data-offstyle")||c.DEFAULTS.offstyle,size:this.$element.attr("data-size")||c.DEFAULTS.size,style:this.$element.attr("data-style")||c.DEFAULTS.style,width:this.$element.attr("data-width")||c.DEFAULTS.width,height:this.$element.attr("data-height")||c.DEFAULTS.height}},c.prototype.render=function(){this._onstyle="btn-"+this.options.onstyle,this._offstyle="btn-"+this.options.offstyle;var b="large"===this.options.size?"btn-lg":"small"===this.options.size?"btn-sm":"mini"===this.options.size?"btn-xs":"",c=a('<label class="btn">').html(this.options.on).addClass(this._onstyle+" "+b),d=a('<label class="btn">').html(this.options.off).addClass(this._offstyle+" "+b+" active"),e=a('<span class="toggle-handle btn btn-default">').addClass(b),f=a('<div class="toggle-group">').append(c,d,e),g=a('<div class="toggle btn" data-toggle="toggle">').addClass(this.$element.prop("checked")?this._onstyle:this._offstyle+" off").addClass(b).addClass(this.options.style);this.$element.wrap(g),a.extend(this,{$toggle:this.$element.parent(),$toggleOn:c,$toggleOff:d,$toggleGroup:f}),this.$toggle.append(f);var h=this.options.width||Math.max(c.outerWidth(),d.outerWidth())+e.outerWidth()/2,i=this.options.height||Math.max(c.outerHeight(),d.outerHeight());c.addClass("toggle-on"),d.addClass("toggle-off"),this.$toggle.css({width:h,height:i}),this.options.height&&(c.css("line-height",c.height()+"px"),d.css("line-height",d.height()+"px")),this.update(!0),this.trigger(!0)},c.prototype.toggle=function(){this.$element.prop("checked")?this.off():this.on()},c.prototype.on=function(a){return this.$element.prop("disabled")?!1:(this.$toggle.removeClass(this._offstyle+" off").addClass(this._onstyle),this.$element.prop("checked",!0),void(a||this.trigger()))},c.prototype.off=function(a){return this.$element.prop("disabled")?!1:(this.$toggle.removeClass(this._onstyle).addClass(this._offstyle+" off"),this.$element.prop("checked",!1),void(a||this.trigger()))},c.prototype.enable=function(){this.$toggle.removeAttr("disabled"),this.$element.prop("disabled",!1)},c.prototype.disable=function(){this.$toggle.attr("disabled","disabled"),this.$element.prop("disabled",!0)},c.prototype.update=function(a){this.$element.prop("disabled")?this.disable():this.enable(),this.$element.prop("checked")?this.on(a):this.off(a)},c.prototype.trigger=function(b){this.$element.off("change.bs.toggle"),b||this.$element.change(),this.$element.on("change.bs.toggle",a.proxy(function(){this.update()},this))},c.prototype.destroy=function(){this.$element.off("change.bs.toggle"),this.$toggleGroup.remove(),this.$element.removeData("bs.toggle"),this.$element.unwrap()};var d=a.fn.bootstrapToggle;a.fn.bootstrapToggle=b,a.fn.bootstrapToggle.Constructor=c,a.fn.toggle.noConflict=function(){return a.fn.bootstrapToggle=d,this},a(function(){a("input[type=checkbox][data-toggle^=toggle]").bootstrapToggle()}),a(document).on("click.bs.toggle","div[data-toggle^=toggle]",function(b){var c=a(this).find("input[type=checkbox]");c.bootstrapToggle("toggle"),b.preventDefault()})}(jQuery); 
		$('#toggle-trigger').bootstrapToggle('on');
	});

	$scope.toogleIt = function () {		
		var toggle_value = $('#toggle-trigger').prop('checked');
		if(toggle_value == false){
			$('#toggle-trigger').bootstrapToggle('on');				
		}else{
			$('#toggle-trigger').bootstrapToggle('off');				
		}
	}	
	
	$scope.signout = function() {
		localStorage.setItem("userSession", null);
		$scope.log = "Connexion";	
	    document.getElementById('btn-log').onclick = function() {
            $("#connex-modal-btn").click();
        };
		$("#closeRightNav").click();
	}

	$scope.updateModal = function(newsID) {		          
        $http.get(service+"?action=getNbRose&newsID="+newsID).success(function(data)
        {
        	document.getElementById("nbRoseClickers").innerHTML = data.replace(/"/g , "");         	     	        	 
        });
        $http.get(service+"?action=getNbDizainer&newsID="+newsID).success(function(data)
        {
        	 document.getElementById("nbDizainierClickers").innerHTML = data.replace(/"/g , "");	        	  
        });
        $http.get(service+"?action=getNbChapelet&newsID="+newsID).success(function(data)
        {
        	 document.getElementById("nbChapeletClickers").innerHTML = data.replace(/"/g , "");
        });
        $http.get(service+"?action=get_rose_clickers&newsID="+newsID).success(function(data)
        {
        	 document.getElementById("roseClickers").innerHTML = data.replace(/"/g , "");        	 
        });
        $http.get(service+"?action=get_dizainier_clickers&newsID="+newsID).success(function(data)
        {
        	 document.getElementById("dizainierClickers").innerHTML = data.replace(/"/g , "");
        });
        $http.get(service+"?action=get_chapelet_clickers&newsID="+newsID).success(function(data)
        {
        	 document.getElementById("chapeletClickers").innerHTML = data.replace(/"/g , "");
        });
	}
	
	$scope.publish = function() {	
		var news_text = $("#news_text").val();
		var userID = localStorage.getItem("userSession"); 
		$http.get(service+"?action=add_news&userID="+userID+"&news_text="+news_text).success(function(data)
        {        	
        	if(data == "succes"){
        		$http.get(service+"?action=get_all_news").success(function(data)
		        {
		        	$scope.news = data;
		        	$("#partageClose").click();
		        });
        	}
        });
	}

	$scope.addRose = function(user_ID, nouvelle_ID) {
        var ID = localStorage.getItem("userSession");
        $http.get(service+"?action=add_rose&userID="+ID+"&nouvelleID="+nouvelle_ID).success(function(data)
        {           
            if(data == "succes"){
                $http.get(service+"?action=get_all_news").success(function(data)
                {
                    $scope.news = data;
                });
            }
        });
    }

    $scope.addDizainier = function(user_ID, nouvelle_ID) {
        var ID = localStorage.getItem("userSession");
        $http.get(service+"?action=addDizainier&userID="+ID+"&nouvelleID="+nouvelle_ID).success(function(data)
        {                       
            if(data == "succes"){
                $http.get(service+"?action=get_all_news").success(function(data)
                {           
                    $scope.news = data;
                });
            }
        });
    }

    $scope.addChapelet = function(user_ID, nouvelle_ID) {
        var ID = localStorage.getItem("userSession");
        $http.get(service+"?action=addChapelet&userID="+ID+"&nouvelleID="+nouvelle_ID).success(function(data)
        {           
            if(data == "succes"){
                $http.get(service+"?action=get_all_news").success(function(data)
                {           
                    $scope.news = data;
                });
            }
        });
    }

	$scope.getNewsPublisher = function(userID, key) {		
		$http.get(service+"?action=getNewsPublisher&userID="+userID).success(function(data)
        {        	 
        	 document.getElementById('name'+key).innerHTML = data.userName;        	
        	 document.getElementById('ville'+key).innerHTML = data.userVille;        	
        });		
	}

	$scope.getNbRose = function(newsID, key) {
		$http.get(service+"?action=getNbRose&newsID="+newsID).success(function(data)
        {
        	 document.getElementById('rose'+key).innerHTML = data;     	        	  
        });
	}
	$scope.getNbDizainer = function(newsID, key) {
		$http.get(service+"?action=getNbDizainer&newsID="+newsID).success(function(data)
        {
        	 document.getElementById('dizainer'+key).innerHTML = data;     	        	  
        });
	}
	$scope.getNbChapelet = function(newsID, key) {
		$http.get(service+"?action=getNbChapelet&newsID="+newsID).success(function(data)
        {
        	 document.getElementById('chapelet'+key).innerHTML = data;     	        	  
        });
	}

	$scope.logged = function() {
    	$scope.log = localStorage.getItem("userName");
	    document.getElementById('btn-log').onclick = function() {
            openRightNav();
        };
        $http.get(service+"?action=get_all_news").success(function(data)
        {
        	// console.log(data);
        	$scope.news = data;
        });
    }
	
    if(localStorage.getItem("userSession") == null || localStorage.getItem("userSession") == "null"){
    	$scope.log = "Connexion";	
	    document.getElementById('btn-log').onclick = function() {
            $("#connex-modal-btn").click();
        };
    }else{
    	$scope.logged();
    }    

	$scope.login = function() {
		var email = document.getElementById('txtemail').value;
		var pwd = document.getElementById('txtupass').value;
        $http.get(service+"?action=login&email="+email+"&pwd="+pwd).success(function(data)
        {
            if(data == "error"){
				document.getElementById("alert-error").style.display = "inline-block";
				document.getElementById("alert-inactive").style.display = "none";
            }else if(data == "inactive"){
            	document.getElementById("alert-error").style.display = "none";
				document.getElementById("alert-inactive").style.display = "inline-block";
            }else{
            	document.getElementById("alert-error").style.display = "none";
				document.getElementById("alert-inactive").style.display = "none";
	  			localStorage.setItem("userSession", data.userID);
	  			localStorage.setItem("userName", data.userName);
    			$scope.logged();    			
    			$("#closeSignIn").click();
    			$("#closeRightNav").click();
            }
        });
    }

	$scope.gotoInscription = function() {		
		$("#closeLogModal").click();		
		$state.go('inscription', null, { reload: true });
    }
    
    $scope.gotoConsecration = function () {        
        $state.go('consecration', null, { reload: true });
    }

}]);