'use strict';

askitApp.controller('MainCtrl', ['$scope', '$http', '$state', function($scope, $http, $state) {	
	$scope.gotoCarte = function () {
      $state.go('carte', null, { reload: true });
    }

    document.addEventListener('deviceready', function () {
		window.plugins.insomnia.keepAwake();
		screen.orientation.lock('portrait');
	});                                

	$scope.awesomeThings = [
		'HTML5 Boilerplate',
		'AngularJS',
		'Testacular'
	];		

	var items = Array(0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35);
	var rand = items[Math.floor(Math.random()*items.length)];
	var paroles = ["Bienheureux les pauvres en esprit, car le royaume des Cieux est à eux. Mt 5,3. ", "Bienheureux ceux qui sont doux, car ils possèderont la terre. Mt 5,4.", "Bienheureux ceux qui pleurent, car ils seront consolés. Mt 5,5. ", "Mt 5,6. Bienheureux ceux qui ont faim et soif de la justice, car ils seront rassasiés. Mt 5,6. ", "Bienheureux les miséricordieux, car ils obtiendront eux-mêmes miséricorde. Mt 5,7. ", "Bienheureux ceux qui ont le coeur pur, car ils verront Dieu. Mt 5,8. ", "Bienheureux les pacifiques, car ils seront appelés enfants de Dieu. Mt 5,9. ", "Bienheureux ceux qui souffrent persécution pour la justice, car le royaume des Cieux est à eux. Mt 5,10. ", "Bienheureux serez-vous lorsqu'on vous maudira, et qu'on vous persécutera, et qu'on dira faussement toute sorte de mal contre vous, à cause de Moi. Mt 5,11. ", "Réjouissez-vous alors, et tressaillez de joie, parce que votre récompense sera grande dans les Cieux, car c'est ainsi qu'on a persécuté les prophètes qui ont été avant vous. Mt 5,12. ", "Vous êtes le sel de la terre.  Mais si le sel s'affadit, avec quoi le salera-t-on?  Il n'est plus bon qu'à être jeté dehors, et foulé aux pieds par les hommes. Mt 5,13. ", "Vous êtes la lumière du monde. Une ville située sur une montagne ne peut être cachée, et on n'allume pas une lampe pour la mettre sous le boisseau, mais on la met sur le candélabre, afin qu'elle éclaire tous ceux qui sont dans la maison. Mt 5,14-15. ", "Que votre lumière luise ainsi devant les hommes, afin qu'ils voient vos bonnes oeuvres, et qu'ils glorifient votre Père qui est dans les Cieux. Mt 5,16. ", "Ne pensez pas que Je sois venu abolir la loi ou les prophètes, Je ne suis pas venu les abolir, mais les accomplir. Mt 5,17. ", "Car en vérité, Je vous le dis, jusqu'à ce que passent le ciel et la terre, un seul iota ou un seul trait ne disparaîtra pas de la loi, que tout ne soit accompli. Mt 5,18. ","Celui donc qui violera l'un de ces plus petits commandements, et qui enseignera les hommes à le faire, sera appelé le plus petit dans le royaume des Cieux, mais celui qui fera et enseignera, celui-là sera appelé grand dans le royaume des Cieux. Mt 5,19. ", "Car Je vous dis que si votre justice n'est pas plus abondante que celle des scribes et des pharisiens, vous n'entrerez pas dans le royaume des Cieux. Mt 5,20. ", "Vous avez appris qu'il a été dit aux anciens: Tu ne tueras point, et celui qui tuera méritera d'être condamné en jugement. Mais Moi Je vous dis que quiconque se met en colère contre son frère, méritera d'être condamné en jugement, et celui qui dira à son frère: Raca, méritera d'être condamné par le conseil, et celui qui lui dira: Fou, méritera d'être condamné au feu de la géhenne. Mt 5,21- 22. ", "Si donc tu présentes ton offrande à l'autel, et que là tu te souviens que ton frère a quelque chose contre toi, laisse là ton offrande devant l'autel, et va d'abord te réconcilier avec ton frère, et ensuite tu reviendras présenter ton offrande. Mt 5,23-24. ", "Accorde-toi au plus tôt avec ton adversaire, pendant que tu es en chemin avec lui, de peur que ton adversaire ne te livre au juge, et que le juge ne te livre au ministre de la justice, et que tu ne sois mis en prison. En vérité, Je te le dis, tu ne sortiras pas de là que tu n'aies payé jusqu'à la dernière obole. Mt 5,25-26. ", "Vous avez appris qu'il a été dit aux anciens: Tu ne commettras point d'adultère. Mais Moi Je vous dis que quiconque aura regardé une femme pour la convoiter, a déjà commis l'adultère avec elle dans son coeur. Mt 5,27-28. ", "Si ton oeil droit te scandalise, arrache-le, et jette-le loin de toi, car il vaut mieux pour toi qu'un de tes membres périsse, que si tout ton corps était jeté dans la géhenne. Mt 5,29. ", "Et si ta main droite te scandalise, coupe-la, et jette-la loin de toi, car il vaut mieux pour toi qu'un de tes membres périsse, que si tout ton corps allait dans la géhenne. Mt 5,30. ", "Et si ta main droite te scandalise, coupe-la, et jette-la loin de toi, car il vaut mieux pour toi qu'un de tes membres périsse, que si tout ton corps allait dans la géhenne. Mt 5,30. ", "Mais Moi Je vous dis de ne pas jurer du tout: ni par le Ciel, parce que c'est le trône de Dieu, ni par la terre, parce qu'elle est l'escabeau de Ses pieds, ni par Jérusalem, parce que c'est la ville du grand Roi. Mt 5,34-35. ", "Tu ne jureras pas non plus par ta tête, parce que tu ne peux rendre un seul de tes cheveux blanc ou noir. Mt 5,36. ", "Mais que votre langage soit: Oui, oui, Non, non, car ce         qu'on y ajoute vient du mal. Mt 5,37. ", "Vous avez appris qu'il a été dit: Oeil pour oeil, et dent pour dent. Mais Moi Je vous dis de ne point résister au méchant, mais si quelqu'un t'a frappé sur ta joue droite, présente-lui encore l'autre. Mt 5,38-39. ", "Et si quelqu'un veut t'appeler en jugement pour te prendre ta tunique, abandonne-lui encore ton manteau. Mt 5,40. ","Et si quelqu'un veut te contraindre de faire mille pas, va avec lui pendant deux autres mille. Mt 5,41. ", "Donne à celui qui te demande, et si quelqu'un veut emprunter de toi ne te détourne pas. Mt 5,42. ", "Vous avez appris qu'il a été dit: Tu aimeras ton prochain, et tu haïras ton ennemi. Mais Moi Je vous dis: Aimez vos ennemis, faites du bien à ceux qui vous haïssent, et priez pour ceux qui vous persécutent et qui vous calomnient, Mt 5,43-44. ", "Afin que vous soyez les enfants de votre Père qui est dans les Cieux, qui fait lever Son soleil sur les bons et sur les méchants, et qui fait pleuvoir sur les justes et sur les injustes. Mt 5,45. ", "Car si vous aimez ceux qui vous aiment, quelle récompense aurez-vous?  Les publicains ne le font-ils pas aussi? Mt 5,46. ", "Et si vous ne saluez que vos frères, que faites-vous d'extraordinaire?  Les païens ne le font-ils pas aussi ? Mt 5,47. ", "Soyez donc parfaits, vous, comme votre Père céleste est parfait. Mt 5,48. " ];           
	if(localStorage.getItem("userSession") == null || localStorage.getItem("userSession") == "null"){
    	$scope.userName = "";
    	$scope.parole = paroles[rand];
    }else{
    	$scope.userName = localStorage.getItem("userName");
    	$scope.parole = paroles[rand];    
    }

    function getRandomInteger(min, max) {
	  min = Math.ceil(min);
	  max = Math.floor(max);
	  return Math.floor(Math.random() * (max - min)) + min;
	}

	var numChild;
	var inc = 0;
	var exclude = [];
	var userID = localStorage.getItem("userSession");    	
    $http.get( service+"?action=selectParoles&userID="+userID ).success(function(data){ 
    	if(userID == '0' || userID == 0 || userID == 'null' || userID == 'undefined' || userID == undefined){
    		$scope.parole = paroles[rand];
    	}else{
    		if(data == "false"){
        	$http.get( service+"?action=getNbParole&userID="+userID ).success(function(nbParole){                	        		       
        		if(parseInt(nbParole) == 36){
        			$http.get( service+"?action=deleteAllParoles&userID="+userID ).success(function(supp){ 
    				});
    				$http.get( service+"?action=insertParoles&userID="+userID+"&rand="+rand ).success(function(add){ 
    				});
    				$scope.parole = paroles[rand];    				
        		}else{
        			$http.get( service+"?action=getParole&userID="+userID ).success(function(allParoles){        		
		    			numChild = allParoles.length;   
		    			console.log(allParoles);
		    			if(numChild == 0){
							rand = items[Math.floor(Math.random()*items.length)];							
							$http.get( service+"?action=insertParoles&userID="+userID+"&rand="+rand ).success(function(ajout){});		    				
		    				$scope.parole = paroles[rand];   				
				        }else{
				        	allParoles.forEach(function (paro) { 
								inc ++;							
								items.splice(parseInt(paro.parolesID));
								if(inc == numChild){
									rand = items[Math.floor(Math.random()*items.length)];
			    					$http.get( service+"?action=insertParoles&userID="+userID+"&rand="+rand ).success(function(ajout){});
			    					$scope.parole = paroles[rand]; 		    					
					            }		    			   		
		    				});	
				        }		    			
		    		});        				
        		}	    	
		    });		    
	        }else{
			    $scope.parole = paroles[data.parolesID];			    
	        }
    	}
    });
    
    document.addEventListener("deviceready", function(e){
        document.addEventListener("offline", function(e){
            $scope.parole = paroles[rand];
        }, false);
    }, false);
    
}]);