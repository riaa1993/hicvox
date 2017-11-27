'use strict';

askitApp.controller('espacePersonnelCtrl', ['$scope', '$http', '$state', function($scope, $http, $state) {
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
    
	var userID = localStorage.getItem("userSession");		
	$http.get( service+"?action=getUserInfo&userID="+userID ).success(function(data){
        $scope.userName = data.userName;
        $scope.userVille = data.userVille;
        $scope.userPays = data.userPays;
        $scope.userEmail = data.userEmail;
    });
    
    $scope.updateInfo = function(){
    	var txtuname = document.getElementById("txtuname").value;  	
    	var txtemail = document.getElementById("txtemail").value;  	
    	var ville = document.getElementById("ville").value;  	
    	var pays = document.getElementById("pays").value;  
    	if(txtuname !='' && txtemail !='' && ville !='' && pays !=''){
    		$http.get( service+"?action=updateInfo&userID="+userID+"&txtuname="+txtuname+"&txtemail="+txtemail+"&ville="+ville+"&pays="+pays ).success(function(data){	        
		        if (data == "succes") {
		        	localStorage.setItem("userName", txtuname);	        	
		        	document.getElementById("success").style.display = "block";
		        }
		    });
    	}
    }
    $scope.updatePwd = function(){  
    	var new_txtpass = document.getElementById("new_txtpass").value;       
    	if(new_txtpass !=''){
    		$http.get( service+"?action=updatePwd&userID="+userID+"&new_txtpass="+new_txtpass ).success(function(data){	        
		        if (data == "succes") {
		        	document.getElementById("success-pwd").style.display = "block";
		        }
		    });
    	}
    }
}]);