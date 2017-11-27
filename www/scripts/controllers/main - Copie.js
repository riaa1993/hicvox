'use strict';

askitApp.controller('calendrierCtrl', ['$scope', '$timeout', '$http', '$cordovaFile', '$cordovaFileTransfer', function($scope, $timeout, $http, $cordovaFile, $cordovaFileTransfer) {  	  		

	// document.addEventListener('deviceready', function () {
	// 		cordova.file.externalRootDirectory = cordova.file.externalRootDirectory;
	// });
	
	var dwn_brevarium = [ 'Vigile.mp3', 'eFr-InA-v0.mp3', 'eFr-InL-v0.mp3', 'eLa-AnB-Ord-01-t7-v0.mp3', 'eLa-AnB-Ord-02-t7-v0.mp3', 'eLa-AnB-Ord-03-t7-v0.mp3', 'eLa-AnB-Ord-04-t7-v0.mp3', 'eLa-AnB-Ord-05-t7-v0.mp3', 'eLa-AnB-Ord-06-t7-v0.mp3', 'eLa-AnB-Ord-07-t7-v0.mp3', 'eLa-AnM-Ord-017-t7-v0.mp3', 'eLa-AnM-Ord-027-t7-v0.mp3', 'eLa-AnM-Ord-037-t7-v0.mp3', 'eLa-AnM-Ord-047-t7-v0.mp3', 'eLa-AnM-Ord-057-t7-v0.mp3', 'eLa-AnM-Ord-067-t7-v0.mp3', 'eLa-AnM-Ord-077-t7-v0.mp3', 'eLa-AnP-Ord-0111-v0.mp3', 'eLa-AnP-Ord-0112-v0.mp3', 'eLa-AnP-Ord-0113-v0.mp3', 'eLa-AnP-Ord-0114-v0.mp3', 'eLa-AnP-Ord-0115-v0.mp3', 'eLa-AnP-Ord-0116-v0.mp3', 'eLa-AnP-Ord-0117-v0.mp3', 'eLa-AnP-Ord-0118-v0.mp3', 'eLa-AnP-Ord-0119-v0.mp3', 'eLa-AnP-Ord-0121-v0.mp3', 'eLa-AnP-Ord-0122-v0.mp3', 'eLa-AnP-Ord-0123-v0.mp3', 'eLa-AnP-Ord-0124-v0.mp3', 'eLa-AnP-Ord-0125-v0.mp3', 'eLa-AnP-Ord-0131-v0.mp3', 'eLa-AnP-Ord-0141-v0.mp3', 'eLa-AnP-Ord-0151-v0.mp3', 'eLa-AnP-Ord-0161-v0.mp3', 'eLa-AnP-Ord-0171-v0.mp3', 'eLa-AnP-Ord-0172-v0.mp3', 'eLa-AnP-Ord-0173-v0.mp3', 'eLa-AnP-Ord-0174-v0.mp3', 'eLa-AnP-Ord-0175-v0.mp3', 'eLa-AnP-Ord-0181-v0.mp3', 'eLa-AnP-Ord-0211-v0.mp3', 'eLa-AnP-Ord-0212-v0.mp3', 'eLa-AnP-Ord-0213-v0.mp3', 'eLa-AnP-Ord-0214-v0.mp3', 'eLa-AnP-Ord-0215-v0.mp3', 'eLa-AnP-Ord-0216-v0.mp3', 'eLa-AnP-Ord-0217-v0.mp3', 'eLa-AnP-Ord-0218-v0.mp3', 'eLa-AnP-Ord-0219-v0.mp3', 'eLa-AnP-Ord-0221-v0.mp3', 'eLa-AnP-Ord-0222-v0.mp3', 'eLa-AnP-Ord-0223-v0.mp3', 'eLa-AnP-Ord-0224-v0.mp3', 'eLa-AnP-Ord-0225-v0.mp3', 'eLa-AnP-Ord-0231-v0.mp3', 'eLa-AnP-Ord-0241-v0.mp3', 'eLa-AnP-Ord-0251-v0.mp3', 'eLa-AnP-Ord-0261-v0.mp3', 'eLa-AnP-Ord-0271-v0.mp3', 'eLa-AnP-Ord-0272-v0.mp3', 'eLa-AnP-Ord-0273-v0.mp3', 'eLa-AnP-Ord-0274-v0.mp3', 'eLa-AnP-Ord-0275-v0.mp3', 'eLa-AnP-Ord-0281-v0.mp3', 'eLa-AnP-Ord-0311-v0.mp3', 'eLa-AnP-Ord-0312-v0.mp3', 'eLa-AnP-Ord-0313-v0.mp3', 'eLa-AnP-Ord-0314-v0.mp3', 'eLa-AnP-Ord-0315-v0.mp3', 'eLa-AnP-Ord-0316-v0.mp3', 'eLa-AnP-Ord-0317-v0.mp3', 'eLa-AnP-Ord-0318-v0.mp3', 'eLa-AnP-Ord-0319-v0.mp3', 'eLa-AnP-Ord-0321-v0.mp3', 'eLa-AnP-Ord-0322-v0.mp3', 'eLa-AnP-Ord-0323-v0.mp3', 'eLa-AnP-Ord-0324-v0.mp3', 'eLa-AnP-Ord-0325-v0.mp3', 'eLa-AnP-Ord-0331-v0.mp3', 'eLa-AnP-Ord-0341-v0.mp3', 'eLa-AnP-Ord-0351-v0.mp3', 'eLa-AnP-Ord-0361-v0.mp3', 'eLa-AnP-Ord-0371-v0.mp3', 'eLa-AnP-Ord-0372-v0.mp3', 'eLa-AnP-Ord-0373-v0.mp3', 'eLa-AnP-Ord-0374-v0.mp3', 'eLa-AnP-Ord-0375-v0.mp3', 'eLa-AnP-Ord-0381-v0.mp3', 'eLa-AnP-Ord-0411-v0.mp3', 'eLa-AnP-Ord-0412-v0.mp3', 'eLa-AnP-Ord-0413-v0.mp3', 'eLa-AnP-Ord-0414-v0.mp3', 'eLa-AnP-Ord-0415-v0.mp3', 'eLa-AnP-Ord-0416-v0.mp3', 'eLa-AnP-Ord-0417-v0.mp3', 'eLa-AnP-Ord-0418-v0.mp3', 'eLa-AnP-Ord-0419-v0.mp3', 'eLa-AnP-Ord-0421-v0.mp3', 'eLa-AnP-Ord-0422-v0.mp3', 'eLa-AnP-Ord-0423-v0.mp3', 'eLa-AnP-Ord-0424-v0.mp3', 'eLa-AnP-Ord-0425-v0.mp3', 'eLa-AnP-Ord-0431-v0.mp3', 'eLa-AnP-Ord-0441-v0.mp3', 'eLa-AnP-Ord-0451-v0.mp3', 'eLa-AnP-Ord-0461-v0.mp3', 'eLa-AnP-Ord-0471-v0.mp3', 'eLa-AnP-Ord-0472-v0.mp3', 'eLa-AnP-Ord-0473-v0.mp3', 'eLa-AnP-Ord-0474-v0.mp3', 'eLa-AnP-Ord-0475-v0.mp3', 'eLa-AnP-Ord-0481-v0.mp3', 'eLa-AnP-Ord-0511-v0.mp3', 'eLa-AnP-Ord-0512-v0.mp3', 'eLa-AnP-Ord-0513-v0.mp3', 'eLa-AnP-Ord-0514-v0.mp3', 'eLa-AnP-Ord-0515-v0.mp3', 'eLa-AnP-Ord-0516-v0.mp3', 'eLa-AnP-Ord-0517-v0.mp3', 'eLa-AnP-Ord-0518-v0.mp3', 'eLa-AnP-Ord-0519-v0.mp3', 'eLa-AnP-Ord-0521-v0.mp3', 'eLa-AnP-Ord-0522-v0.mp3', 'eLa-AnP-Ord-0523-v0.mp3', 'eLa-AnP-Ord-0524-v0.mp3', 'eLa-AnP-Ord-0525-v0.mp3', 'eLa-AnP-Ord-0531-v0.mp3', 'eLa-AnP-Ord-0541-v0.mp3', 'eLa-AnP-Ord-0551-v0.mp3', 'eLa-AnP-Ord-0561-v0.mp3', 'eLa-AnP-Ord-0571-v0.mp3', 'eLa-AnP-Ord-0572-v0.mp3', 'eLa-AnP-Ord-0573-v0.mp3', 'eLa-AnP-Ord-0574-v0.mp3', 'eLa-AnP-Ord-0575-v0.mp3', 'eLa-AnP-Ord-0581-v0.mp3', 'eLa-AnP-Ord-0611-v0.mp3', 'eLa-AnP-Ord-0612-v0.mp3', 'eLa-AnP-Ord-0613-v0.mp3', 'eLa-AnP-Ord-0614-v0.mp3', 'eLa-AnP-Ord-0615-v0.mp3', 'eLa-AnP-Ord-0616-v0.mp3', 'eLa-AnP-Ord-0617-v0.mp3', 'eLa-AnP-Ord-0618-v0.mp3', 'eLa-AnP-Ord-0619-v0.mp3', 'eLa-AnP-Ord-0621-v0.mp3', 'eLa-AnP-Ord-0622-v0.mp3', 'eLa-AnP-Ord-0623-v0.mp3', 'eLa-AnP-Ord-0624-v0.mp3', 'eLa-AnP-Ord-0625-v0.mp3', 'eLa-AnP-Ord-0631-v0.mp3', 'eLa-AnP-Ord-0641-v0.mp3', 'eLa-AnP-Ord-0651-v0.mp3', 'eLa-AnP-Ord-0661-v0.mp3', 'eLa-AnP-Ord-0671-v0.mp3', 'eLa-AnP-Ord-0672-v0.mp3', 'eLa-AnP-Ord-0673-v0.mp3', 'eLa-AnP-Ord-0674-v0.mp3', 'eLa-AnP-Ord-0675-v0.mp3', 'eLa-AnP-Ord-0681-v0.mp3', 'eLa-AnP-Ord-0711-v0.mp3', 'eLa-AnP-Ord-0712-v0.mp3', 'eLa-AnP-Ord-0713-v0.mp3', 'eLa-AnP-Ord-0714-v0.mp3', 'eLa-AnP-Ord-0715-v0.mp3', 'eLa-AnP-Ord-0716-v0.mp3', 'eLa-AnP-Ord-0717-v0.mp3', 'eLa-AnP-Ord-0718-v0.mp3', 'eLa-AnP-Ord-0719-v0.mp3', 'eLa-AnP-Ord-0721-v0.mp3', 'eLa-AnP-Ord-0722-v0.mp3', 'eLa-AnP-Ord-0723-v0.mp3', 'eLa-AnP-Ord-0724-v0.mp3', 'eLa-AnP-Ord-0725-v0.mp3', 'eLa-AnP-Ord-0731-v0.mp3', 'eLa-AnP-Ord-0741-v0.mp3', 'eLa-AnP-Ord-0751-v0.mp3', 'eLa-AnP-Ord-0761-v0.mp3', 'eLa-AnP-Ord-0771-v0.mp3', 'eLa-AnP-Ord-0772-v0.mp3', 'eLa-AnP-Ord-0773-v0.mp3', 'eLa-AnP-Ord-0774-v0.mp3', 'eLa-AnP-Ord-0775-v0.mp3', 'eLa-AnP-Ord-0781-v0.mp3', 'eLa-Ant-TRe-00-v0.mp3', 'eLa-Ant-TRe-01-v0.mp3', 'eLa-CCo-4C-V0.mp3', 'eLa-CCo-4F-V0.mp3', 'eLa-CaB-Ord-t7-v0.mp3', 'eLa-CaM-Ord-t7-v0.mp3', 'eLa-Cap-Ord-012-v0.mp3', 'eLa-Cap-Ord-013-v0.mp3', 'eLa-Cap-Ord-014-v0.mp3', 'eLa-Cap-Ord-015-v0.mp3', 'eLa-Cap-Ord-016-v0.mp3', 'eLa-Cap-Ord-017-v0.mp3', 'eLa-Cap-Ord-018-v0.mp3', 'eLa-Cap-Ord-0f2-v0.mp3', 'eLa-Cap-Ord-0f3-v0.mp3', 'eLa-Cap-Ord-0f4-v0.mp3', 'eLa-Cap-Ord-0f5-v0.mp3', 'eLa-Cap-Ord-0f6-v0.mp3', 'eLa-Cap-Ord-0f7-v0.mp3', 'eLa-Cap-Ord-0f8-v0.mp3', 'eLa-Cap-TRe-002-v0.mp3', 'eLa-Cap-TRe-004-v0.mp3', 'eLa-Cap-TRe-005-v0.mp3', 'eLa-Cap-TRe-006-v0.mp3', 'eLa-Cap-TRe-007-v0.mp3', 'eLa-Deo-1cO-v0.mp3', 'eLa-Deo-1cP-v0.mp3', 'eLa-Deo-2cO-v0.mp3', 'eLa-Deo-3cO-v0.mp3', 'eLa-Deo-4cO-v0.mp3', 'eLa-Hym-011-v0.mp3', 'eLa-Hym-013-v0.mp3', 'eLa-Hym-014-v0.mp3', 'eLa-Hym-015-v0.mp3', 'eLa-Hym-016-v0.mp3', 'eLa-Hym-018-v0.mp3', 'eLa-Hym-021-v0.mp3', 'eLa-Hym-031-v0.mp3', 'eLa-Hym-03C-v0.mp3', 'eLa-Hym-040d-v0.mp3', 'eLa-Hym-040f-v0.mp3', 'eLa-Hym-040s-v0.mp3', 'eLa-Hym-041-v0.mp3', 'eLa-Hym-04C-v0.mp3', 'eLa-Hym-051-v0.mp3', 'eLa-Hym-05C-v0.mp3', 'eLa-Hym-061-v0.mp3', 'eLa-Hym-06C-v0.mp3', 'eLa-Hym-071-v0.mp3', 'eLa-Hym-08C-v0.mp3', 'eLa-Hym-0f3-v0.mp3', 'eLa-Hym-0f4-v0.mp3', 'eLa-Hym-0f5-v0.mp3', 'eLa-Hym-0f6-v0.mp3', 'eLa-Hym-0f8-v0.mp3', 'eLa-Hym-0s3-v0.mp3', 'eLa-Hym-0s4-v0.mp3', 'eLa-Hym-0s5-v0.mp3', 'eLa-Hym-0s6-v0.mp3', 'eLa-Hym-0s8-v0.mp3', 'eLa-Hym-CAp-hp0-v0.mp3', 'eLa-Hym-CAp-hp1-v0.mp3', 'eLa-Hym-CAp-hp2-v0.mp3', 'eLa-Hym-CAp-hp7-v0.mp3', 'eLa-Hym-CBV-tt1-v0.mp3', 'eLa-Hym-CBV-tt2-v0.mp3', 'eLa-Hym-CBV-tt7-v0.mp3', 'eLa-Hym-CCn-hp0-v0.mp3', 'eLa-Hym-CCn-hp2-v0.mp3', 'eLa-Hym-CCn-hp7-v0.mp3', 'eLa-Hym-CCn-tt1-v0.mp3', 'eLa-Hym-CCp-hp0-v0.mp3', 'eLa-Hym-CCp-hp2-v0.mp3', 'eLa-Hym-CCp-hp7-v0.mp3', 'eLa-Hym-CCp-tt1-v0.mp3', 'eLa-Hym-CMm-hp1-v0.mp3', 'eLa-Hym-CMm-hp2-v0.mp3', 'eLa-Hym-CMu-hp0-v0.mp3', 'eLa-Hym-CMu-hp1-v0.mp3', 'eLa-Hym-CMu-hp7-v0.mp3', 'eLa-Hym-CVi-tt1-v0.mp3', 'eLa-Hym-Ord-012-v0.mp3', 'eLa-Hym-Ord-017-v0.mp3', 'eLa-Hym-Ord-021-v0.mp3', 'eLa-Hym-Ord-022-v0.mp3', 'eLa-Hym-Ord-027-v0.mp3', 'eLa-Hym-Ord-031-v0.mp3', 'eLa-Hym-Ord-032-v0.mp3', 'eLa-Hym-Ord-037-v0.mp3', 'eLa-Hym-Ord-041-v0.mp3', 'eLa-Hym-Ord-042-v0.mp3', 'eLa-Hym-Ord-047-v0.mp3', 'eLa-Hym-Ord-051-v0.mp3', 'eLa-Hym-Ord-052-v0.mp3', 'eLa-Hym-Ord-057-v0.mp3', 'eLa-Hym-Ord-061-v0.mp3', 'eLa-Hym-Ord-062-v0.mp3', 'eLa-Hym-Ord-067-v0.mp3', 'eLa-Hym-Ord-072-v0.mp3', 'eLa-Hym-Ord-077-v0.mp3', 'eLa-Hym-Ord-a11-v0.mp3', 'eLa-Hym-Ord-a71-v0.mp3', 'eLa-Hym-Ord-a72-v0.mp3', 'eLa-Hym-Ord-b11-v0.mp3', 'eLa-Hym-Ord-b12-v0.mp3', 'eLa-Hym-TRe-001-v0.mp3', 'eLa-Hym-TRe-002-v0.mp3', 'eLa-Hym-TRe-007-v0.mp3', 'eLa-Hym-a11-v0.mp3', 'eLa-InA-v0.mp3', 'eLa-InL-v0.mp3', 'eLa-Inv-CAp-ht1-t6-v0.mp3', 'eLa-Inv-CAp-ht2-t6-v0.mp3', 'eLa-Inv-CAp-tp1-t6-v0.mp3', 'eLa-Inv-CAp-tp2-t6-v0.mp3', 'eLa-Inv-CBV-tp1-t6-v0.mp3', 'eLa-Inv-CBV-tp2-t6-v0.mp3', 'eLa-Inv-CBV-tt1-t6-v0.mp3', 'eLa-Inv-CBV-tt2-t6-v0.mp3', 'eLa-Inv-CCn-ht1-t6-v0.mp3', 'eLa-Inv-CCn-ht2-t6-v0.mp3', 'eLa-Inv-CCn-tp1-t6-v0.mp3', 'eLa-Inv-CCn-tp2-t6-v0.mp3', 'eLa-Inv-CCp-ht1-t6-v0.mp3', 'eLa-Inv-CCp-ht2-t6-v0.mp3', 'eLa-Inv-CCp-tp1-t6-v0.mp3', 'eLa-Inv-CCp-tp2-t6-v0.mp3', 'eLa-Inv-CDe-tp1-t6-v0.mp3', 'eLa-Inv-CDe-tp2-t6-v0.mp3', 'eLa-Inv-CDe-tt1-t6-v0.mp3', 'eLa-Inv-CDe-tt2-t6-v0.mp3', 'eLa-Inv-CMm-ht1-t6-v0.mp3', 'eLa-Inv-CMm-ht2-t6-v0.mp3', 'eLa-Inv-CMm-tp1-t6-v0.mp3', 'eLa-Inv-CMm-tp2-t6-v0.mp3', 'eLa-Inv-CMu-ht1-t6-v0.mp3', 'eLa-Inv-CMu-ht2-t6-v0.mp3', 'eLa-Inv-CMu-tp1-t6-v0.mp3', 'eLa-Inv-CMu-tp2-t6-v0.mp3', 'eLa-Inv-CSf-tp1-t6-v0.mp3', 'eLa-Inv-CSf-tp2-t6-v0.mp3', 'eLa-Inv-CSf-tt1-t6-v0.mp3', 'eLa-Inv-CSf-tt2-t6-v0.mp3', 'eLa-Inv-CVi-ht1-t6-v0.mp3', 'eLa-Inv-CVi-ht2-t6-v0.mp3', 'eLa-Inv-CVi-tp1-t6-v0.mp3', 'eLa-Inv-CVi-tp2-t6-v0.mp3', 'eLa-Inv-Ord-0111-t7-v0.mp3', 'eLa-Inv-Ord-0112-t7-v0.mp3', 'eLa-Inv-Ord-0211-t6-v0.mp3', 'eLa-Inv-Ord-0212-t6-v0.mp3', 'eLa-Inv-Ord-0311-t6-v0.mp3', 'eLa-Inv-Ord-0312-t6-v0.mp3', 'eLa-Inv-Ord-0411-t6-v0.mp3', 'eLa-Inv-Ord-0412-t6-v0.mp3', 'eLa-Inv-Ord-0511-t6-v0.mp3', 'eLa-Inv-Ord-0512-t6-v0.mp3', 'eLa-Inv-Ord-0611-t6-v0.mp3', 'eLa-Inv-Ord-0612-t6-v0.mp3', 'eLa-Inv-Ord-0711-t6-v0.mp3', 'eLa-Inv-Ord-0712-t6-v0.mp3', 'eLa-Inv-TRe-0001-v0.mp3', 'eLa-Inv-TRe-0002-v0.mp3', 'eLa-Ora-TE031.mp3', 'eLa-Ora-TE03f.mp3', 'eLa-Ora-TE041.mp3', 'eLa-Ora-TE04f.mp3', 'eLa-Ora-TE051.mp3', 'eLa-Ora-TE05f.mp3', 'eLa-Ora-TE061.mp3', 'eLa-Ora-TE06f.mp3', 'eLa-Ora-TP001.mp3', 'eLa-Ora-TP002.mp3', 'eLa-Ora-TP003.mp3', 'eLa-Ora-TP004.mp3', 'eLa-Ora-TP006.mp3', 'eLa-Ora-TP007.mp3', 'eLa-Ora-TP00f.mp3', 'eLa-Ora-TP011.mp3', 'eLa-Ora-TP015.mp3', 'eLa-Ora-TP01f.mp3', 'eLa-Ora-TP02f.mp3', 'eLa-Ora-TP03f.mp3', 'eLa-Ora-TP04f.mp3', 'eLa-Ora-TP051.mp3', 'eLa-Ora-TP05f.mp3', 'eLa-Ora-TP061.mp3', 'eLa-Ora-TP06f.mp3', 'eLa-Ora-TP071.mp3', 'eLa-Ora-TP07f.mp3', 'eLa-Ora-TP081.mp3', 'eLa-Ora-TP08f.mp3', 'eLa-Ora-TP091.mp3', 'eLa-Ora-TP09f.mp3', 'eLa-Ora-TP0CR.mp3', 'eLa-Ora-TP101.mp3', 'eLa-Ora-TP10f.mp3', 'eLa-Ora-TP111.mp3', 'eLa-Ora-TP11f.mp3', 'eLa-Ora-TP121.mp3', 'eLa-Ora-TP12f.mp3', 'eLa-Ora-TP131.mp3', 'eLa-Ora-TP13f.mp3', 'eLa-Ora-TP141.mp3', 'eLa-Ora-TP14f.mp3', 'eLa-Ora-TP151.mp3', 'eLa-Ora-TP15f.mp3', 'eLa-Ora-TP161.mp3', 'eLa-Ora-TP16f.mp3', 'eLa-Ora-TP171.mp3', 'eLa-Ora-TP174.mp3', 'eLa-Ora-TP176.mp3', 'eLa-Ora-TP177.mp3', 'eLa-Ora-TP17f.mp3', 'eLa-Ora-TP181.mp3', 'eLa-Ora-TP18f.mp3', 'eLa-Ora-TP191.mp3', 'eLa-Ora-TP19f.mp3', 'eLa-Ora-TP201.mp3', 'eLa-Ora-TP20f.mp3', 'eLa-Ora-TP211.mp3', 'eLa-Ora-TP21f.mp3', 'eLa-Ora-TP221.mp3', 'eLa-Ora-TP22f.mp3', 'eLa-Ora-TP231.mp3', 'eLa-Ora-TP23f.mp3', 'eLa-Ora-TP241.mp3', 'eLa-Ora-TP24f.mp3', 'eLa-Ora-TR001.mp3', 'eLa-Ora-TR002.mp3', 'eLa-Ora-TR003.mp3', 'eLa-Ora-TR004.mp3', 'eLa-Ora-TR005.mp3', 'eLa-Ora-TR006.mp3', 'eLa-Ora-TR007.mp3', 'eLa-Ora-TR011.mp3', 'eLa-Ora-TR01f.mp3', 'eLa-Ora-TR021.mp3', 'eLa-Ora-TR02f.mp3', 'eLa-Ora-TR031.mp3', 'eLa-Ora-TR03f.mp3', 'eLa-Ora-TR041.mp3', 'eLa-Ora-TR04f.mp3', 'eLa-Ora-TR051.mp3', 'eLa-Ora-TR054.mp3', 'eLa-Ora-TR055.mp3', 'eLa-Ora-TR05f.mp3', 'eLa-Ora-TR061.mp3', 'eLa-Ora-TR067.mp3', 'eLa-Ora-TR06f.mp3', 'eLa-P94-1-t6-v0.mp3', 'eLa-P94-1-t7-v0.mp3', 'eLa-P94-2-t6-v0.mp3', 'eLa-P94-2-t7-v0.mp3', 'eLa-P94-3-t6-v0.mp3', 'eLa-P94-3-t7-v0.mp3', 'eLa-P94-4-t6-v0.mp3', 'eLa-P94-4-t7-v0.mp3', 'eLa-P94-5-t6-v0.mp3', 'eLa-P94-5-t7-v0.mp3', 'eLa-P94-6-t6-v0.mp3', 'eLa-P94-6-t7-v0.mp3', 'eLa-PrI-Com-v0.mp3', 'eLa-PrI-Mat-v0.mp3', 'eLa-Psa-Ord-0111-v0.mp3', 'eLa-Psa-Ord-0112-v0.mp3', 'eLa-Psa-Ord-0113-v0.mp3', 'eLa-Psa-Ord-0114-v0.mp3', 'eLa-Psa-Ord-0115-v0.mp3', 'eLa-Psa-Ord-0116-v0.mp3', 'eLa-Psa-Ord-0117-v0.mp3', 'eLa-Psa-Ord-0118-v0.mp3', 'eLa-Psa-Ord-0119-v0.mp3', 'eLa-Psa-Ord-0121-v0.mp3', 'eLa-Psa-Ord-0122-v0.mp3', 'eLa-Psa-Ord-0123-v0.mp3', 'eLa-Psa-Ord-0124-v0.mp3', 'eLa-Psa-Ord-0125-v0.mp3', 'eLa-Psa-Ord-0131-v0.mp3', 'eLa-Psa-Ord-0132-v0.mp3', 'eLa-Psa-Ord-0133-v0.mp3', 'eLa-Psa-Ord-0141-v0.mp3', 'eLa-Psa-Ord-0142-v0.mp3', 'eLa-Psa-Ord-0143-v0.mp3', 'eLa-Psa-Ord-0151-v0.mp3', 'eLa-Psa-Ord-0152-v0.mp3', 'eLa-Psa-Ord-0153-v0.mp3', 'eLa-Psa-Ord-0161-v0.mp3', 'eLa-Psa-Ord-0162-v0.mp3', 'eLa-Psa-Ord-0163-v0.mp3', 'eLa-Psa-Ord-0171-v0.mp3', 'eLa-Psa-Ord-0172-v0.mp3', 'eLa-Psa-Ord-0173-v0.mp3', 'eLa-Psa-Ord-0174-v0.mp3', 'eLa-Psa-Ord-0175-v0.mp3', 'eLa-Psa-Ord-0181-v0.mp3', 'eLa-Psa-Ord-0182-v0.mp3', 'eLa-Psa-Ord-0183-v0.mp3', 'eLa-Psa-Ord-0211-v0.mp3', 'eLa-Psa-Ord-0212-v0.mp3', 'eLa-Psa-Ord-0213-v0.mp3', 'eLa-Psa-Ord-0214-v0.mp3', 'eLa-Psa-Ord-0215-v0.mp3', 'eLa-Psa-Ord-0216-v0.mp3', 'eLa-Psa-Ord-0217-v0.mp3', 'eLa-Psa-Ord-0218-v0.mp3', 'eLa-Psa-Ord-0219-v0.mp3', 'eLa-Psa-Ord-0221-v0.mp3', 'eLa-Psa-Ord-0222-v0.mp3', 'eLa-Psa-Ord-0223-v0.mp3', 'eLa-Psa-Ord-0224-v0.mp3', 'eLa-Psa-Ord-0225-v0.mp3', 'eLa-Psa-Ord-0231-v0.mp3', 'eLa-Psa-Ord-0232-v0.mp3', 'eLa-Psa-Ord-0233-v0.mp3', 'eLa-Psa-Ord-0241-v0.mp3', 'eLa-Psa-Ord-0242-v0.mp3', 'eLa-Psa-Ord-0243-v0.mp3', 'eLa-Psa-Ord-0251-v0.mp3', 'eLa-Psa-Ord-0252-v0.mp3', 'eLa-Psa-Ord-0253-v0.mp3', 'eLa-Psa-Ord-0261-v0.mp3', 'eLa-Psa-Ord-0262-v0.mp3', 'eLa-Psa-Ord-0263-v0.mp3', 'eLa-Psa-Ord-0271-v0.mp3', 'eLa-Psa-Ord-0272-v0.mp3', 'eLa-Psa-Ord-0273-v0.mp3', 'eLa-Psa-Ord-0274-v0.mp3', 'eLa-Psa-Ord-0275-v0.mp3', 'eLa-Psa-Ord-0281-v0.mp3', 'eLa-Psa-Ord-0282-v0.mp3', 'eLa-Psa-Ord-0283-v0.mp3', 'eLa-Psa-Ord-0311-v0.mp3', 'eLa-Psa-Ord-0312-v0.mp3', 'eLa-Psa-Ord-0313-v0.mp3', 'eLa-Psa-Ord-0314-v0.mp3', 'eLa-Psa-Ord-0315-v0.mp3', 'eLa-Psa-Ord-0316-v0.mp3', 'eLa-Psa-Ord-0317-v0.mp3', 'eLa-Psa-Ord-0318-v0.mp3', 'eLa-Psa-Ord-0319-v0.mp3', 'eLa-Psa-Ord-0321-v0.mp3', 'eLa-Psa-Ord-0322-v0.mp3', 'eLa-Psa-Ord-0323-v0.mp3', 'eLa-Psa-Ord-0324-v0.mp3', 'eLa-Psa-Ord-0325-v0.mp3', 'eLa-Psa-Ord-0331-v0.mp3', 'eLa-Psa-Ord-0332-v0.mp3', 'eLa-Psa-Ord-0333-v0.mp3', 'eLa-Psa-Ord-0341-v0.mp3', 'eLa-Psa-Ord-0342-v0.mp3', 'eLa-Psa-Ord-0343-v0.mp3', 'eLa-Psa-Ord-0351-v0.mp3', 'eLa-Psa-Ord-0352-v0.mp3', 'eLa-Psa-Ord-0353-v0.mp3', 'eLa-Psa-Ord-0361-v0.mp3', 'eLa-Psa-Ord-0362-v0.mp3', 'eLa-Psa-Ord-0363-v0.mp3', 'eLa-Psa-Ord-0371-v0.mp3', 'eLa-Psa-Ord-0372-v0.mp3', 'eLa-Psa-Ord-0373-v0.mp3', 'eLa-Psa-Ord-0374-v0.mp3', 'eLa-Psa-Ord-0381-v0.mp3', 'eLa-Psa-Ord-0382-v0.mp3', 'eLa-Psa-Ord-0383-v0.mp3', 'eLa-Psa-Ord-0411-v0.mp3', 'eLa-Psa-Ord-0412-v0.mp3', 'eLa-Psa-Ord-0413-v0.mp3', 'eLa-Psa-Ord-0414-v0.mp3', 'eLa-Psa-Ord-0415-v0.mp3', 'eLa-Psa-Ord-0416-v0.mp3', 'eLa-Psa-Ord-0417-v0.mp3', 'eLa-Psa-Ord-0418-v0.mp3', 'eLa-Psa-Ord-0419-v0.mp3', 'eLa-Psa-Ord-0421-v0.mp3', 'eLa-Psa-Ord-0422-v0.mp3', 'eLa-Psa-Ord-0423-v0.mp3', 'eLa-Psa-Ord-0424-v0.mp3', 'eLa-Psa-Ord-0425-v0.mp3', 'eLa-Psa-Ord-0431-v0.mp3', 'eLa-Psa-Ord-0432-v0.mp3', 'eLa-Psa-Ord-0433-v0.mp3', 'eLa-Psa-Ord-0441-v0.mp3', 'eLa-Psa-Ord-0442-v0.mp3', 'eLa-Psa-Ord-0443-v0.mp3', 'eLa-Psa-Ord-0451-v0.mp3', 'eLa-Psa-Ord-0452-v0.mp3', 'eLa-Psa-Ord-0453-v0.mp3', 'eLa-Psa-Ord-0461-v0.mp3', 'eLa-Psa-Ord-0462-v0.mp3', 'eLa-Psa-Ord-0463-v0.mp3', 'eLa-Psa-Ord-0471-v0.mp3', 'eLa-Psa-Ord-0472-v0.mp3', 'eLa-Psa-Ord-0473-v0.mp3', 'eLa-Psa-Ord-0474-v0.mp3', 'eLa-Psa-Ord-0475-v0.mp3', 'eLa-Psa-Ord-0481-v0.mp3', 'eLa-Psa-Ord-0482-v0.mp3', 'eLa-Psa-Ord-0483-v0.mp3', 'eLa-Psa-Ord-0511-v0.mp3', 'eLa-Psa-Ord-0512-v0.mp3', 'eLa-Psa-Ord-0513-v0.mp3', 'eLa-Psa-Ord-0514-v0.mp3', 'eLa-Psa-Ord-0515-v0.mp3', 'eLa-Psa-Ord-0516-v0.mp3', 'eLa-Psa-Ord-0517-v0.mp3', 'eLa-Psa-Ord-0518-v0.mp3', 'eLa-Psa-Ord-0519-v0.mp3', 'eLa-Psa-Ord-0521-v0.mp3', 'eLa-Psa-Ord-0522-v0.mp3', 'eLa-Psa-Ord-0523-v0.mp3', 'eLa-Psa-Ord-0524-v0.mp3', 'eLa-Psa-Ord-0525-v0.mp3', 'eLa-Psa-Ord-0531-v0.mp3', 'eLa-Psa-Ord-0532-v0.mp3', 'eLa-Psa-Ord-0533-v0.mp3', 'eLa-Psa-Ord-0541-v0.mp3', 'eLa-Psa-Ord-0542-v0.mp3', 'eLa-Psa-Ord-0543-v0.mp3', 'eLa-Psa-Ord-0551-v0.mp3', 'eLa-Psa-Ord-0552-v0.mp3', 'eLa-Psa-Ord-0553-v0.mp3', 'eLa-Psa-Ord-0561-v0.mp3', 'eLa-Psa-Ord-0562-v0.mp3', 'eLa-Psa-Ord-0563-v0.mp3', 'eLa-Psa-Ord-0571-v0.mp3', 'eLa-Psa-Ord-0572-v0.mp3', 'eLa-Psa-Ord-0573-v0.mp3', 'eLa-Psa-Ord-0574-v0.mp3', 'eLa-Psa-Ord-0575-v0.mp3', 'eLa-Psa-Ord-0581-v0.mp3', 'eLa-Psa-Ord-0582-v0.mp3', 'eLa-Psa-Ord-0583-v0.mp3', 'eLa-Psa-Ord-0611-v0.mp3', 'eLa-Psa-Ord-0612-v0.mp3', 'eLa-Psa-Ord-0613-v0.mp3', 'eLa-Psa-Ord-0614-v0.mp3', 'eLa-Psa-Ord-0615-v0.mp3', 'eLa-Psa-Ord-0616-v0.mp3', 'eLa-Psa-Ord-0617-v0.mp3', 'eLa-Psa-Ord-0618-v0.mp3', 'eLa-Psa-Ord-0619-v0.mp3', 'eLa-Psa-Ord-0621-v0.mp3', 'eLa-Psa-Ord-0622-v0.mp3', 'eLa-Psa-Ord-0623-v0.mp3', 'eLa-Psa-Ord-0624-v0.mp3', 'eLa-Psa-Ord-0625-v0.mp3', 'eLa-Psa-Ord-0631-v0.mp3', 'eLa-Psa-Ord-0632-v0.mp3', 'eLa-Psa-Ord-0633-v0.mp3', 'eLa-Psa-Ord-0641-v0.mp3', 'eLa-Psa-Ord-0642-v0.mp3', 'eLa-Psa-Ord-0643-v0.mp3', 'eLa-Psa-Ord-0651-v0.mp3', 'eLa-Psa-Ord-0652-v0.mp3', 'eLa-Psa-Ord-0653-v0.mp3', 'eLa-Psa-Ord-0661-v0.mp3', 'eLa-Psa-Ord-0662-v0.mp3', 'eLa-Psa-Ord-0663-v0.mp3', 'eLa-Psa-Ord-0671-v0.mp3', 'eLa-Psa-Ord-0672-v0.mp3', 'eLa-Psa-Ord-0673-v0.mp3', 'eLa-Psa-Ord-0674-v0.mp3', 'eLa-Psa-Ord-0675-v0.mp3', 'eLa-Psa-Ord-0681-v0.mp3', 'eLa-Psa-Ord-0682-v0.mp3', 'eLa-Psa-Ord-0683-v0.mp3', 'eLa-Psa-Ord-0711-v0.mp3', 'eLa-Psa-Ord-0712-v0.mp3', 'eLa-Psa-Ord-0713-v0.mp3', 'eLa-Psa-Ord-0714-v0.mp3', 'eLa-Psa-Ord-0715-v0.mp3', 'eLa-Psa-Ord-0716-v0.mp3', 'eLa-Psa-Ord-0717-v0.mp3', 'eLa-Psa-Ord-0718-v0.mp3', 'eLa-Psa-Ord-0719-v0.mp3', 'eLa-Psa-Ord-0721-v0.mp3', 'eLa-Psa-Ord-0722-v0.mp3', 'eLa-Psa-Ord-0723-v0.mp3', 'eLa-Psa-Ord-0724-v0.mp3', 'eLa-Psa-Ord-0725-v0.mp3', 'eLa-Psa-Ord-0731-v0.mp3', 'eLa-Psa-Ord-0732-v0.mp3', 'eLa-Psa-Ord-0733-v0.mp3', 'eLa-Psa-Ord-0741-v0.mp3', 'eLa-Psa-Ord-0742-v0.mp3', 'eLa-Psa-Ord-0743-v0.mp3', 'eLa-Psa-Ord-0751-v0.mp3', 'eLa-Psa-Ord-0752-v0.mp3', 'eLa-Psa-Ord-0753-v0.mp3', 'eLa-Psa-Ord-0761-v0.mp3', 'eLa-Psa-Ord-0762-v0.mp3', 'eLa-Psa-Ord-0763-v0.mp3', 'eLa-Psa-Ord-0771-v0.mp3', 'eLa-Psa-Ord-0772-v0.mp3', 'eLa-Psa-Ord-0773-v0.mp3', 'eLa-Psa-Ord-0774-v0.mp3', 'eLa-Psa-Ord-0775-v0.mp3', 'eLa-Psa-Ord-0781-v0.mp3', 'eLa-Psa-Ord-0782-v0.mp3', 'eLa-Psa-Ord-0783-v0.mp3', 'eLa-Re1-Ord-013-v0.mp3', 'eLa-Re1-Ord-0f3-v0.mp3', 'eLa-Re2-Ord-013-v0.mp3', 'eLa-Re2-Ord-0f3-v0.mp3', 'eLa-Rep-Ord-013-v0.mp3', 'eLa-Rep-Ord-014-v0.mp3', 'eLa-Rep-Ord-015-v0.mp3', 'eLa-Rep-Ord-016-v0.mp3', 'eLa-Rep-Ord-018-v0.mp3', 'eLa-Rep-Ord-0f3-v0.mp3', 'eLa-Rep-Ord-0f4-v0.mp3', 'eLa-Rep-Ord-0f5-v0.mp3', 'eLa-Rep-Ord-0f6-v0.mp3', 'eLa-Rep-Ord-0f8-v0.mp3', 'eLa-Rep-TRe-004-v0.mp3', 'eLa-Rep-TRe-005-v0.mp3', 'eLa-Rep-TRe-006-v0.mp3', 'eLa-TeDeum-v0.mp3', 'eLa-Ver-CMm-hp7-v0.mp3', 'oFr-InA-v0.mp3'];
  	var dwn_brevarium = [ 'Vigile.mp3', 'eFr-InA-v0.mp3', 'eFr-InL-v0.mp3'];
  	var dwn_lh = ['oLa-InA-v0.mp3', 'oFr-Rep-Ord-018-v0.mp3', 'oFr-PsI-Com-v0.mp3', 'oFr-Psa-Ord-0782-v0.mp3', 'oFr-Psa-Ord-0781-v0.mp3', 'oFr-Psa-Ord-0681-v0.mp3', 'oFr-Psa-Ord-0581-v0.mp3', 'oFr-Psa-Ord-0482-v0.mp3', 'oFr-Psa-Ord-0481-v0.mp3', 'oFr-Psa-Ord-0381-v0.mp3', 'oFr-Psa-Ord-0281-v0.mp3', 'oFr-Psa-Ord-0181-v0.mp3', 'oFr-Ora-Co078-v0.mp3', 'oFr-Ora-Co068-v0.mp3', 'oFr-Ora-Co058-v0.mp3', 'oFr-Ora-Co048-v0.mp3', 'oFr-Ora-Co038-v0.mp3', 'oFr-Ora-Co028-v0.mp3', 'oFr-Ora-Co018-v0.mp3', 'oFr-Noc-v0.mp3', 'oFr-InA-v0.mp3', 'oFr-Hym-Ord-018-v0.mp3', 'oFr-Hym-Ord-0f8-v0.mp3', 'oFr-CCo-4C-V0.mp3', 'oFr-CCo-3F-v0.mp3', 'oFr-CCo-3C-v0.mp3', 'oFr-Cap-Ord-078-v0.mp3', 'oFr-Cap-Ord-068-v0.mp3', 'oFr-Cap-Ord-058-v0.mp3', 'oFr-Cap-Ord-048-v0.mp3', 'oFr-Cap-Ord-038-v0.mp3', 'oFr-Cap-Ord-028-v0.mp3', 'oFr-Cap-Ord-018-v0.mp3', 'oFr-CaN-Ord-00-v0.mp3', 'oFr-AnP-Ord-0782-v0.mp3', 'oFr-AnP-Ord-0781-v0.mp3', 'oFr-AnP-Ord-0681-v0.mp3', 'oFr-AnP-Ord-0581-v0.mp3', 'oFr-AnP-Ord-0482-v0.mp3', 'oFr-AnP-Ord-0481-v0.mp3', 'oFr-AnP-Ord-0381-v0.mp3', 'oFr-AnP-Ord-0281-v0.mp3', 'oFr-AnP-Ord-0181-v0.mp3'];    
    $scope.tousAudio = dwn_lh.length;
    $scope.restantAudio = dwn_lh.length;
    $scope.tousAudioBrevarium = dwn_brevarium.length;
    $scope.restantAudioBrevarium = dwn_brevarium.length;
    var trustHosts = true;
	var options = {};
  	var url, targetPath;
  	$("#downloadBtn").click();
  	 document.addEventListener('deviceready', function () {
      $cordovaFile.getFreeDiskSpace()
        .then(function (success) {
           $scope.freeSpace = parseInt(success / 1024);
        }, function (error) {});
      // for (var rs = 0; rs <= dwn_lh.length -1; rs++) {
      //     $cordovaFile.checkFile("Hicvox/Audio/", dwn_lh[rs])
      //     .then(function (success) {
      //         if($scope.restantAudio <= 0){
      //             $scope.restantAudio = 0;
      //         }else{
      //             $scope.restantAudio--;
      //         }
      //     }, function (error) {});
      // }      
	});

  	$scope.stopDownloadAudio = function(){
	    i = dwn_lh.length;
	}
	$scope.stopDownloadAudioBr = function(){
	    x = dwn_brevarium.length;
	}
  $scope.downloadAudio = function(){
    var i = 0;
    $scope.loopAudio(i);
  }
  $scope.downloadAudioBr = function(){
    var x = 0;
    $scope.loopAudioBr(x);
  }
  $scope.loopAudioBr = function (x) {
    if(x < dwn_brevarium.length){
        var url = "https://hicvox.org/admin/Media/Audio/BR/"+dwn_brevarium[x]; 
        var targetPath = "cdvfile://localhost/persistent/Hicvox/Audio/"+dwn_brevarium[x];        
        $cordovaFile.checkFile(cordova.file.externalRootDirectory+"Hicvox/Audio/", dwn_brevarium[x])
          .then(function (success) {
            x++;
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
                if($scope.restantAudioBrevarium <= 0){
                    $scope.restantAudioBrevarium = 0;
                }else{
                    $scope.restantAudioBrevarium--;
                }
                $scope.loopAudioBr(x);
              }, function (progress) {
                $timeout(function () {
                  $scope.downloadProgressAudio = parseInt((progress.loaded/progress.total)*100);
                });
            });
        });                    
    }
  }

  $scope.loopAudio = function (i) {
    if(i < dwn_lh.length){
        var url = "https://hicvox.org/admin/Media/Audio/LH/"+dwn_lh[i]; 
        var targetPath = "cdvfile://localhost/persistent/Hicvox/Audio/"+dwn_lh[i];        
        $cordovaFile.checkFile(cordova.file.externalRootDirectory+"Hicvox/Audio/", dwn_lh[i])
          .then(function (success) {
            i++;
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
                if($scope.restantAudio <= 0){
                    $scope.restantAudio = 0;
                }else{
                    $scope.restantAudio--;
                }
                $scope.loopAudio(i);
              }, function (progress) {
                $timeout(function () {
                  $scope.downloadProgressAudio = parseInt((progress.loaded/progress.total)*100);
                });
            });
        });                    
    }
  }

  	var officePlayer = document.getElementById('officePlayer');	

	$scope.range = function(min, max, step) {
	    step = step || 1;
	    var input = [];
	    for (var i = min; i <= max; i += step) {
	        input.push(i);
	    }
	    return input;
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

  $scope.monthString = function(month) {  
    var result;    
    if(month <= 9){
      result = "0"+month;
    }else{
      result = month;
    }
    return result;
  }

  $scope.theDayString = function(day) {  
    var result;        
    if(day <= 9){
      result = "0"+day;
    }else{
      result = day;
    }
    return result;
  }

  $scope.getTheMD = function(day) {      
    return $scope.theMonth+"/"+day;
  }  

	var sanctoral_data = getJson("json/meta_data_ex_sanctoral.json");
	// console.log(sanctoral_data);
	var todayDate = new Date();
	// var d2 = new Date(2020, 4, 12);
	var todayDay = todayDate.getDate();
	var dayNum = todayDate.getDay();
	$scope.dayNum = dayNum;
	var dayString;
	var todayMonth = todayDate.getMonth() + 1;
	var todayYear = todayDate.getFullYear();
	var todayMonthString = $scope.monthString(todayMonth);
	var todayDayString = $scope.theDayString(todayDay);
	$scope.theMonth = todayDate.getMonth() + 1;
	$scope.theYear = todayDate.getFullYear();
	$scope.day = todayDay;	

	$scope.theDayStr = function(dayStr) { 
		if(dayStr == "undefined" || dayStr == undefined){
		}else{
			// console.log("dayString: "+dayStr);
			$scope.dayString = dayStr;
		}
		// return roman;
	}

	$scope.theRoman = function(roman) {  
		if(roman == "undefined" || roman == undefined){
		}else{
			// console.log("roman: "+roman);
			$scope.roman = roman;	
		}
		// return roman;
	}

	$scope.theLunar = function(lunar) {
		if(lunar == "undefined" || lunar == undefined){
		}else{
			// console.log("lunar: "+lunar);
			$scope.lunar = lunar;						
		}
		// return roman;
	}

	$scope.theSanctoral = function(sanctoral) {  		
		if(sanctoral == "undefined" || sanctoral == undefined){
		}else{
			// console.log("sanctoral: "+sanctoral);		
			$scope.sanctoral = sanctoral;									
		}
		// return roman;
	}

	$scope.theTemporal = function(temporal) {  
		if(temporal == "undefined" || temporal == undefined){
		}else{
			// console.log("temporal: "+temporal);	
			$scope.temporal = temporal;													
		}
		// return roman;
	}

	// var customSanctoral = $scope.getObjects(sanctoral_data, 'S_Date', 'S'+todayMonthString+todayDayString);

	var fete_mobile_data = getJson("json/meta_data_fete_mobile.json");
	var feteMobile = $scope.getObjects(fete_mobile_data, 'annee', $scope.theYear);
	$scope.TA011 = feteMobile['TA011'];
	$scope.TN0do = feteMobile['TN0do'];
	$scope.TN0sn = feteMobile['TN0sn'];
	$scope.TS011 = feteMobile['TS011'];
	$scope.TS034 = feteMobile['TS034'];
	$scope.TP011 = feteMobile['TP001_paque'];
	$scope.TP055 = feteMobile['TP055'];
	$scope.TP001 = feteMobile['Tp001_pentecote'];
	$scope.TE001 = feteMobile['TE001'];
	$scope.nbE1 = feteMobile['nbE1'];
	$scope.nbP1 = feteMobile['nbP1'];
	$scope.Tpn02 = feteMobile['Tpn02'];
	$scope.TEn02 = feteMobile['TEn02'];
	$scope.IDE2 = feteMobile['IDE2'];
	$scope.IDP2 = feteMobile['IDP2'];
	$scope.T0CR = feteMobile['T0CR'];	
	
	var calendrier_romain_data = getJson("json/meta_romain.json");
	$scope.getTheRoman = function(day) {
		var todayMonthString = $scope.monthString($scope.theMonth);
		var todayDayString = $scope.theDayString(day);
		var customRoman = $scope.getObjects(calendrier_romain_data, 'R_date', 'S'+todayMonthString+todayDayString);
		var theRoman = customRoman["romain"];
		var roman;
		if(theRoman == 'K'){
	      roman = 'Kalendis';
	    }else if (theRoman == 'v') {
	      roman = 'pridie';
	    }else if (theRoman == 'N') {
	      roman = 'Nonis';
	    }else if (theRoman == 'Id') {
	      roman = 'Idibus';
	    }else{
	      roman = theRoman;
	    }  
		return roman;
	}	

	var lunar_data = getJson("json/meta_lunaire.json");
	$scope.getLunar = function(day) {
		var todayMonthString = $scope.monthString($scope.theMonth);
		var todayDayString = $scope.theDayString(day);
		var customLunar = $scope.getObjects(lunar_data, 'L_date', 'S'+todayMonthString+todayDayString);	
		var lune;
		$.each(lunar_data, function(i, obj) {
			if(obj.L_date == 'S'+todayMonthString+todayDayString){
				if(obj.annee == $scope.theYear){
					lune = obj.lune;
				}
			}
		});
		return lune;
	}

	$scope.getTheLune = function(sdate, year) {
		var customLunar = $scope.getObjects(lunar_data, 'L_date', sdate);	
		var lune;
		$.each(lunar_data, function(i, obj) {
			if(obj.L_date == sdate){			
				if(obj.annee == year){					
					lune = obj.lune;
				}
			}
		});
		return lune;
	}

	$scope.getTheSanctoral = function(day) {
		var todayMonthString = $scope.monthString($scope.theMonth);
		var todayDayString = $scope.theDayString(day);
		var customSanctoral = $scope.getObjects(sanctoral_data, 'S_Date', 'S'+todayMonthString+todayDayString);
		var theSanctoral = customSanctoral["Se-F-La"];
		return theSanctoral;
	}	

	// console.log(customSanctoral);
	function daysInMonth(month,year) {
		return new Date(year, month, 0).getDate();
	}
	// console.log(daysInMonth(todayMonth,todayYear));
	// console.log(dayNum);
		
		
	var psaume_fr = getJson("json/psaume_fr_gall_v2.json");	
	var psaume_la = getJson("json/psaume_la_gall_.json");
	var marqueur = getJson("json/marqueur.json");
	
	var psaume_la_lh = getJson("json/psaume_lh_v2.json");
  	var psaume_fr_lh = getJson("json/psaume_fr_gall_v2.json");
  	var marqueur_lh = getJson("json/marqueur_lh_v2.json");

	$scope.office = "matines";
	$scope.officeSelected = false;

	var clé = 0;
	var cleA = 0;
	$scope.play = function() {
	    cleA = 0;
		officePlayer = document.getElementById('officePlayer');    
	    officePlayer.play();    
	    console.log(officePlayer.src);
	    document.getElementById('pause').style.display = "inline-block";
	    document.getElementById('play').style.display = "none";
	}

	$scope.pause = function() {
	    cleA = 1;
	    officePlayer.pause();
	    document.getElementById('pause').style.display = "none";
	    document.getElementById('play').style.display = "inline-block";
	}

	$scope.next = function() {
		cleA = 0;
	    console.log(nextOffice[curOffice+1]);
	    var source = nextOffice[curOffice+1];
	    var res = source.split("/");
	    $("#fichiernom").append("<strong>"+ res[res.length-1] + "</strong><br/>" );     
	    officePlayer.src = nextOffice[curOffice+1];
	    curOffice++;
	}

	$scope.prev = function() {
		cleA = 0;
	    console.log(nextOffice[curOffice-1]);
	    officePlayer.src = nextOffice[curOffice-1];
	    curOffice--;
	}

	$scope.wait = function(ms) {
	    var start = new Date().getTime();
	    var end = start;
	    while(end < start + ms) {
	       end = new Date().getTime();
	    }
	}
	  
	$scope.showMoteurRecherche = function() {		  
		clé = 1;
		$scope.pause();
		$scope.wait(500);    
		document.getElementById('moteurRecherche').style.display = "inline-block";
	}

	var cleB = 0;	

	$scope.imageExists = function(url, callback) {
	    var img = new Image();
	    img.onload = function() { callback(true); };
	    img.onerror = function() { callback(false); };
	    img.src = url;
	
	}

	$scope.rangeCSS = function() {	  
	    var val = $('.range').val();
	    var max = $('.range').attr('max');
	    var current = val * 100 / max;
	    $('.range').css(
	      'background',
	      'linear-gradient(to right, #0275d8 ' + current + '%, #777 ' + 10 + '%)'       
	    );
	}

	function imageExists(url, callback) {
	    var img = new Image();
	    img.onload = function() { callback(true); };
	    img.onerror = function() { callback(false); };
	    img.src = url;
	}
	
	var range = document.getElementById('range');
	range.onchange=function(){
		cleB = 1;
	    var audio = document.getElementById('officePlayer');
	    audio.currentTime = range.value;
	}

	function throttle(fn, threshhold, scope) {
	  threshhold || (threshhold = 250);
	  var last,
	      deferTimer;
	  return function () {
	    var context = scope || this;

	    var now = +new Date,
	        args = arguments;
	    if (last && now < last + threshhold) {
	      // hold on to it
	      clearTimeout(deferTimer);
	      deferTimer = setTimeout(function () {
	        last = now;
	        fn.apply(context, args);
	      }, threshhold);
	    } else {
	      last = now;
	      fn.apply(context, args);
	    }
	  };
	}
 
 function padoutdouble(number) { return (number < 10) ? '00' + number : '0' + number; } 
 
 // $('#officePlayer').on('timeupdate', throttle(function (event) { 	
 // }, 1000));	

	officePlayer.ontimeupdate=function(){
    	$scope.rangeCSS();
		var currentTime = officePlayer.currentTime;
		var audio = document.getElementById('officePlayer');
	    document.getElementById('range').setAttribute("max", audio.duration);
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
	    var mp3 = string.substring(0, string.length-4);	   
	    var key, subkey;

	    if($scope.office == "complies-lh"){
  		   var marqueur = getJson("json/marqueur_lh_v2.json");
	    }else{
	    	var marqueur = getJson("json/marqueur.json");
	    }

	    if(marqueur[mp3] == undefined){
	      document.getElementById('diapo_fr').style.display = "none"; 
	      document.getElementById('marqueur').style.display = "none";	      
	      var mp3_ = string[0]+string[1]+string[2]+string[3]+string[4]+string[5]+string[6];
	      if(mp3_ == "eLa-AnP"){            
	        var imageUrl = "Media/Images/"+mp3+".gif";
	        var imageUrl2 = "Media/Images/"+mp3+".GIF";
	        imageExists(imageUrl, function(exists) {
	          if(exists == true){
	            document.getElementById('antienne').style.display = "inline-block";    
	            document.getElementById('antienne').src = imageUrl;
	          }else{
	            imageExists(imageUrl2, function(exists) {
	              if(exists == true){
	                document.getElementById('antienne').style.display = "inline-block";    
	                document.getElementById('antienne').src = imageUrl2;
	              }else{
	                document.getElementById('antienne').style.display = "none";    
	              }
	            }); 
	          }
	        });
	      }else{
	        document.getElementById('antienne').style.display = "none";
	      }   
	    }else{ 
	    	document.getElementById('marqueur').style.display = "inline-block";
			document.getElementById('diapo_fr').style.display = "inline-block";
			document.getElementById('antienne').style.display = "none";
			if($scope.office == "complies-lh"){
				var marqueur_mp3 = marqueur_lh[mp3];
				var m_psaume = marqueur_mp3["psaume"];
				var m_psaume_ = m_psaume;	 
				if(m_psaume[0]+m_psaume[1]+m_psaume[2] == "Psa"){
					var m_psaume_ = "Fr-CIm-"+m_psaume;
				}else if(m_psaume[0]+m_psaume[1]+m_psaume[2] == "Can"){
					var m_psaume_ = "Fr-CIm-"+m_psaume;            
				}else if(m_psaume[0]+m_psaume[1]+m_psaume[2]+m_psaume[3]+m_psaume[4]+m_psaume[5]+m_psaume[6] == "eLa-P94"){
					var m_psaume_ = "eFr-CIm-P94-"+m_psaume[8];
				}else if(m_psaume[0]+m_psaume[1]+m_psaume[2]+m_psaume[3]+m_psaume[4]+m_psaume[5]+m_psaume[6] == "eLa-Hym"){
					var m_psaume_ = m_psaume.replace("La", "Fr");
				}
				else{
					var m_psaume_ = m_psaume;
				}				
			    for (var i = 1 ; i <= Object.keys(marqueur_mp3).length - 1; i++) {
			    	if( currentTime >= parseFloat(marqueur_lh[mp3][padoutdouble(i)]) - 1 ){		    		
			    		document.getElementById('marqueur').innerHTML = psaume_la_lh[m_psaume][padoutdouble(i)] ;		            
			    		if(psaume_fr_lh[m_psaume_] == undefined){
			            	document.getElementById('diapo_fr').innerHTML = "";	              
			            }else{
			            	document.getElementById('diapo_fr').innerHTML = psaume_fr_lh[m_psaume_][padoutdouble(i)];	              
			            }
			    	}
			    }
			}else{
				var marqueur_mp3 = marqueur[mp3];
				var m_psaume = marqueur_mp3["psaume"];
				var m_psaume_ = m_psaume;	 
				if(m_psaume[0]+m_psaume[1]+m_psaume[2] == "Psa"){
					var m_psaume_ = "Fr-CIm-"+m_psaume;
				}else if(m_psaume[0]+m_psaume[1]+m_psaume[2] == "Can"){
					var m_psaume_ = "Fr-CIm-"+m_psaume;            
				}else if(m_psaume[0]+m_psaume[1]+m_psaume[2]+m_psaume[3]+m_psaume[4]+m_psaume[5]+m_psaume[6] == "eLa-P94"){
					var m_psaume_ = "eFr-CIm-P94-"+m_psaume[8];
				}else if(m_psaume[0]+m_psaume[1]+m_psaume[2]+m_psaume[3]+m_psaume[4]+m_psaume[5]+m_psaume[6] == "eLa-Hym"){
					var m_psaume_ = m_psaume.replace("La", "Fr");
				}
				else{
					var m_psaume_ = m_psaume;
				}				
			    for (var i = 1 ; i <= Object.keys(marqueur_mp3).length - 1; i++) {
			    	if( currentTime >= parseFloat(marqueur[mp3][padoutdouble(i)]) - 1 ){		    		
			    		document.getElementById('marqueur').innerHTML = psaume_la[m_psaume][padoutdouble(i)] ;		            
			    		if(psaume_fr[m_psaume_] == undefined){
			            	document.getElementById('diapo_fr').innerHTML = "";	              
			            }else{
			            	document.getElementById('diapo_fr').innerHTML = psaume_fr[m_psaume_][padoutdouble(i)];	              
			            }
			    	}
			    }
			}			
	    }
	    clé = 0;        
    	cleB = 0;
	};	

	var nextOffice, curOffice;
	var numday, hymne_tierces, hymne, capitule_repond, hymne_lh, inv, matines_pascal, matines_hymnes, complies_cco;
	var classe = 4;
	
	$scope.download = function() {
		var first = document.getElementById('begin-date').value;
        var second = document.getElementById('end-date').value;
        var start = new Date(first);
        var end = new Date(second);
        if(first != "" || second != ""){
        	if(start <= end){
	            var theEnd = end.setDate(end.getDate() + 1);
	            while(start < theEnd){	               
	               var dwn_day = start.getDate();
	               var dwn_month = start.getMonth() + 1;
	               var dwn_year = start.getFullYear();
	               var dwn_date = dwn_day+"-"+dwn_month+"-"+dwn_year;
	               console.log(dwn_date);
	               var newDate = start.setDate(start.getDate() + 1);
	               start = new Date(newDate);
	            }
	        }
	        if(start > end){
	            var theEnd = end.setDate(end.getDate() - 1);                
	            while(start > theEnd){
	               var dwn_day = start.getDate();
	               var dwn_month = start.getMonth() + 1;
	               var dwn_year = start.getFullYear();
	               var dwn_date = dwn_day+"-"+dwn_month+"-"+dwn_year;
	               console.log(dwn_date);
	               var newDate = start.setDate(start.getDate() - 1);
	               start = new Date(newDate);
	            }  
	        }
        }
	}

	$scope.showCalendar = function() {
		$scope.officeSelected = true;
		$scope.theMonth = document.getElementById("select-month").value;		
		$scope.theYear = document.getElementById("select-year").value;
		$scope.day = document.getElementById("select-day").value;
		$scope.office = document.getElementById("select-office").value;		

		var newDate = new Date(parseInt($scope.theYear), parseInt($scope.theMonth)-1, parseInt($scope.day));		
		$scope.dayNum = newDate.getDay();		

		$scope.monthDayNumber = daysInMonth($scope.theMonth,$scope.theYear);
		var feteMobile = $scope.getObjects(fete_mobile_data, 'annee', $scope.theYear);
		$scope.TA011 = feteMobile['TA011'];
		$scope.TN0do = feteMobile['TN0do'];
		$scope.TN0sn = feteMobile['TN0sn'];
		$scope.TS011 = feteMobile['TS011'];
		$scope.TS034 = feteMobile['TS034'];
		$scope.TP011 = feteMobile['TP001_paque'];
		$scope.TP055 = feteMobile['TP055'];
		$scope.TP001 = feteMobile['Tp001_pentecote'];
		$scope.TE001 = feteMobile['TE001'];
		$scope.nbE1 = feteMobile['nbE1'];
		$scope.nbP1 = feteMobile['nbP1'];
		$scope.Tpn02 = feteMobile['Tpn02'];
		$scope.TEn02 = feteMobile['TEn02'];
		$scope.IDE2 = feteMobile['IDE2'];
		$scope.IDP2 = feteMobile['IDP2'];
		$scope.T0CR = feteMobile['T0CR'];		
		
		// Temps des avent
		$scope.TA011_split = $scope.TA011.split("/");
		$scope.TA011_mois = parseInt($scope.TA011_split[0]);
		$scope.TA011_jour = parseInt($scope.TA011_split[1]);

		// Temps des Septuagésime
		$scope.TS011_split = $scope.TS011.split("/");
		$scope.TS011_mois = parseInt($scope.TS011_split[0]);
		$scope.TS011_jour = parseInt($scope.TS011_split[1]);

		// Temps des carêmes
		$scope.TS034_split = $scope.TS034.split("/");
		$scope.TS034_mois = parseInt($scope.TS034_split[0]);
		$scope.TS034_jour = parseInt($scope.TS034_split[1]);

		// Temps des paques		
		$scope.TP011_split = $scope.TP011.split("/");
		$scope.TP011_mois = parseInt($scope.TP011_split[0]);
		$scope.TP011_jour = parseInt($scope.TP011_split[1]);

		// Temps des ascencions
		$scope.TP055_split = $scope.TP055.split("/");
		$scope.TP055_mois = parseInt($scope.TP055_split[0]);
		$scope.TP055_jour = parseInt($scope.TP055_split[1])

		//pentecote		
	    $scope.TP001_split = $scope.TP001.split("/");
		$scope.TP001_mois = parseInt($scope.TP001_split[0]);
		$scope.TP001_jour = parseInt($scope.TP001_split[1]);

	    $scope.Tpn02_split = $scope.Tpn02.split("/");
		$scope.Tpn02_mois = parseInt($scope.Tpn02_split[0]);
		$scope.Tpn02_jour = parseInt($scope.Tpn02_split[1]);
		
		// temps epiphanie 1
		$scope.TE001_split = $scope.TE001.split("/");
		$scope.TE001_mois = parseInt($scope.TE001_split[0]);
		$scope.TE001_jour = parseInt($scope.TE001_split[1]);

		// LIST THE MP3
		var theMp3Office = getMp3Office($scope.theYear, $scope.theMonth, $scope.day, $scope.office);
		if(theMp3Office == null){
			$scope.theMp3Office = "Media/Audio/eLa-InA-v0.mp3";
		}else{
			$scope.theMp3Office = theMp3Office;
		}		

		$scope.getMp3Office();	
		
	}
	
	var temporal_data = getJson("json/meta_data_ex_temporal.json");		
	
	// temps epiphanie 1
	$scope.TE001_split = $scope.TE001.split("/");
	$scope.TE001_mois = parseInt($scope.TE001_split[0]);
	$scope.TE001_jour = parseInt($scope.TE001_split[1]);
    $scope.epiphanie = function(day) {
		var TE001_inc = $scope.nbE1;
		var TE001_id = 36;
		if((TE001_inc - day + $scope.TE001_jour) > 0 && (TE001_inc - day + $scope.TE001_jour) <= TE001_inc){			
			var theTemporal_epiphanie = $scope.getObjects(temporal_data, 'id', (TE001_inc - (TE001_inc - day + $scope.TE001_jour) + 1+ TE001_id));			
			return theTemporal_epiphanie["Te-La"];
		}
	}

	$scope.epiphanieMois1 = function(day) {
		var TE001_inc = $scope.nbE1 - (daysInMonth($scope.TE001_mois,$scope.theYear) - $scope.TE001_jour);		
		var TE001_id = 36 + (daysInMonth($scope.TE001_mois,$scope.theYear) - $scope.TE001_jour);		
		if(TE001_inc > 0){
			if(TE001_inc - day > 0){
				if((TE001_inc - day + $scope.TE001_jour) > 0){
					var theTemporal_epiphanie = $scope.getObjects(temporal_data, 'id', (TE001_id + day + 1));																				
					return theTemporal_epiphanie["Te-La"];
				}
			}			
		}
	}

	// temps epiphanie2
	$scope.TEn02_split = $scope.TEn02.split("/");
	$scope.TEn02_mois = parseInt($scope.TEn02_split[0]);
	$scope.TEn02_jour = parseInt($scope.TEn02_split[1]);
	if($scope.theYear == 2019 || $scope.theYear == 2022 || $scope.theYear == 2030){
    }else{
    	$scope.epiphanie2 = function(day) {

			var TEn02_inc = 42 - $scope.nbE1;
			var TEn02_id = $scope.IDE2 - 1;
			if((TEn02_inc - day + $scope.TEn02_jour) > 0 && (TEn02_inc - day + $scope.TEn02_jour) <= TEn02_inc){			
				var theTemporal_epiphanie2 = $scope.getObjects(temporal_data, 'id', (TEn02_inc - (TEn02_inc - day + $scope.TEn02_jour) + 1+ TEn02_id));			
				return theTemporal_epiphanie2["Te-La"];
			}
		}

		$scope.epiphanie2Mois1 = function(day) {
			var TEn02_inc = (42 - $scope.nbE1) - (daysInMonth($scope.TEn02_mois,$scope.theYear) - $scope.TEn02_jour);		
			var TEn02_id = ($scope.IDE2 - 1) + (daysInMonth($scope.TEn02_mois,$scope.theYear) - $scope.TEn02_jour);		
			if(TEn02_inc > 0){
				if(TEn02_inc - day > 0){
					if((TEn02_inc - day + $scope.TEn02_jour) > 0){
						var theTemporal_epiphanie2 = $scope.getObjects(temporal_data, 'id', (TEn02_id + day + 1));																				
						return theTemporal_epiphanie2["Te-La"];
					}
				}			
			}
		}
    }

	// Temps des avent
	$scope.TA011_split = $scope.TA011.split("/");
	$scope.TA011_mois = parseInt($scope.TA011_split[0]);
	$scope.TA011_jour = parseInt($scope.TA011_split[1]);
	$scope.avent = function(day) {
		var TA011_inc = 28;		
		if((TA011_inc - day + $scope.TA011_jour) > 0 && (TA011_inc - day + $scope.TA011_jour) <= TA011_inc){			
			var theTemporal = $scope.getObjects(temporal_data, 'id', (TA011_inc - (TA011_inc - day + $scope.TA011_jour) + 1));
			return theTemporal["Te-La"];
		}
	}
	
	$scope.aventMois1 = function(day) {
		var TA011_inc = 28 - (daysInMonth($scope.TA011_mois,$scope.theYear) - $scope.TA011_jour);
		if(TA011_inc > 0){
			if(TA011_inc - day > 0){
				if((TA011_inc - day + $scope.TA011_jour) > 0){								
					var theTemporal = $scope.getObjects(temporal_data, 'id', (28 - (TA011_inc - day) + 1));					
					return theTemporal["Te-La"];
				}
			}			
		}		
	}

	// Temps des Septuagésime
	$scope.TS011_split = $scope.TS011.split("/");
	$scope.TS011_mois = parseInt($scope.TS011_split[0]);
	$scope.TS011_jour = parseInt($scope.TS011_split[1]);
	$scope.septuagesime = function(day) {
		var TS011_inc = 17;
		var TS011_id = 78;
		if((TS011_inc - day + $scope.TS011_jour) > 0 && (TS011_inc - day + $scope.TS011_jour) <= TS011_inc){			
			var theTemporal_septuagesime = $scope.getObjects(temporal_data, 'id', (TS011_inc - (TS011_inc - day + $scope.TS011_jour) + 1+ TS011_id));
			return theTemporal_septuagesime["Te-La"];
		}
	}

	$scope.septuagesimeMois1 = function(day) {		
		var TS011_inc = 17 - (daysInMonth($scope.TS011_mois,$scope.theYear) - $scope.TS011_jour);		
		var TS011_id = 78 + (daysInMonth($scope.TS011_mois,$scope.theYear) - $scope.TS011_jour);		
		if(TS011_inc > 0){
			if(TS011_inc - day > 0){
				if((TS011_inc - day + $scope.TS011_jour) > 0){
					var theTemporal_septuagesime = $scope.getObjects(temporal_data, 'id', (TS011_id + day + 1));										
					return theTemporal_septuagesime["Te-La"];
				}
			}			
		}
	}

	// Temps des carêmes
	$scope.TS034_split = $scope.TS034.split("/");
	$scope.TS034_mois = parseInt($scope.TS034_split[0]);
	$scope.TS034_jour = parseInt($scope.TS034_split[1]);
	$scope.caremes = function(day) {
		var TS034_inc = 46;
		var TS034_id = 95;
		if((TS034_inc - day + $scope.TS034_jour) > 0 && (TS034_inc - day + $scope.TS034_jour) <= TS034_inc){			
			var theTemporal_caremes = $scope.getObjects(temporal_data, 'id', (TS034_inc - (TS034_inc - day + $scope.TS034_jour) + 1+ TS034_id));			
			return theTemporal_caremes["Te-La"];
		}
	}

	$scope.caremesMois1 = function(day) {
		var TS034_inc = 46 - (daysInMonth($scope.TS034_mois,$scope.theYear) - $scope.TS034_jour);		
		var TS034_id = 95 + (daysInMonth($scope.TS034_mois,$scope.theYear) - $scope.TS034_jour);		
		if(TS034_inc > 0){
			if(TS034_inc - day > 0){
				if((TS034_inc - day + $scope.TS034_jour) > 0){
					var theTemporal_caremes = $scope.getObjects(temporal_data, 'id', (TS034_id + day + 1));										
					return theTemporal_caremes["Te-La"];					
				}
			}			
		}
	}

	$scope.caremesMois2 = function(day) {
		var TS034_inc = 46 - (daysInMonth($scope.TS034_mois,$scope.theYear) - $scope.TS034_jour) - daysInMonth($scope.TS034_mois + 1 ,$scope.theYear);		
		var TS034_id = 95 + (daysInMonth($scope.TS034_mois,$scope.theYear) - $scope.TS034_jour + daysInMonth($scope.TS034_mois + 1 ,$scope.theYear));		
		if(TS034_inc > 0){
			if(TS034_inc - day > 0){
				if((TS034_inc - day + $scope.TS034_jour) > 0){
					var theTemporal_caremes = $scope.getObjects(temporal_data, 'id', (TS034_id + day + 1));										
					return theTemporal_caremes["Te-La"];					
				}
			}			
		}
	}

	// Temps des paques
	$scope.TP011_split = $scope.TP011.split("/");
	$scope.TP011_mois = parseInt($scope.TP011_split[0]);
	$scope.TP011_jour = parseInt($scope.TP011_split[1]);
	$scope.paques = function(day) {
		var TP011_inc = 39;
		var TP011_id = 141;
		if((TP011_inc - day + $scope.TP011_jour) > 0 && (TP011_inc - day + $scope.TP011_jour) <= TP011_inc){			
			var theTemporal_paques = $scope.getObjects(temporal_data, 'id', (TP011_inc - (TP011_inc - day + $scope.TP011_jour) + 1+ TP011_id));			
			return theTemporal_paques["Te-La"];
		}
	}

	$scope.paquesMois1 = function(day) {
		var TP011_inc = 39 - (daysInMonth($scope.TP011_mois,$scope.theYear) - $scope.TP011_jour);		
		var TP011_id = 141 + (daysInMonth($scope.TP011_mois,$scope.theYear) - $scope.TP011_jour);		
		if(TP011_inc > 0){
			if(TP011_inc - day > 0){
				if((TP011_inc - day + $scope.TP011_jour) > 0){
					var theTemporal_paques = $scope.getObjects(temporal_data, 'id', (TP011_id + day + 1));																				
					return theTemporal_paques["Te-La"];
				}
			}			
		}
	}

	$scope.paquesMois2 = function(day) {
		var TP011_inc = 39 - (daysInMonth($scope.TP011_mois,$scope.theYear) - $scope.TP011_jour) - daysInMonth($scope.TP011_mois + 1 ,$scope.theYear);		
		var TP011_id = 141 + (daysInMonth($scope.TP011_mois,$scope.theYear) - $scope.TP011_jour + daysInMonth($scope.TP011_mois + 1 ,$scope.theYear));		
		if(TP011_inc > 0){
			if(TP011_inc - day > 0){
				if((TP011_inc - day + $scope.TP011_jour) > 0){
					var theTemporal_paques = $scope.getObjects(temporal_data, 'id', (TP011_id + day + 1));										
					return theTemporal_paques["Te-La"];					
				}
			}			
		}
	}
	// Temps des ascension
	$scope.TP055_split = $scope.TP055.split("/");
	$scope.TP055_mois = parseInt($scope.TP055_split[0]);
	$scope.TP055_jour = parseInt($scope.TP055_split[1]);
	$scope.ascension = function(day) {
		var TP055_inc = 10;
		var TP055_id = 180;
		if((TP055_inc - day + $scope.TP055_jour) > 0 && (TP055_inc - day + $scope.TP055_jour) <= TP055_inc){			
			var theTemporal_ascension = $scope.getObjects(temporal_data, 'id', (TP055_inc - (TP055_inc - day + $scope.TP055_jour) + 1+ TP055_id));			
			return theTemporal_ascension["Te-La"];
		}
	}

	$scope.ascensionMois1 = function(day) {
		var TP055_inc = 10 - (daysInMonth($scope.TP055_mois,$scope.theYear) - $scope.TP055_jour);		
		var TP055_id = 180 + (daysInMonth($scope.TP055_mois,$scope.theYear) - $scope.TP055_jour);		
		if(TP055_inc > 0){
			if(TP055_inc - day > 0){
				if((TP055_inc - day + $scope.TP055_jour) > 0){
					var theTemporal_ascension = $scope.getObjects(temporal_data, 'id', (TP055_id + day + 1));																				
					return theTemporal_ascension["Te-La"];
				}
			}			
		}
	}
	

	// Pentecote 1    
    var nbEvtPentecote;
    if($scope.theYear == 2019 || $scope.theYear == 2022 || $scope.theYear == 2030){
		nbEvtPentecote = 175;
    }else{
    	nbEvtPentecote = $scope.nbP1;
    }

    $scope.TP001_split = $scope.TP001.split("/");
	$scope.TP001_mois = parseInt($scope.TP001_split[0]);
	$scope.TP001_jour = parseInt($scope.TP001_split[1]);
    $scope.pentecote = function(day) {
		var TP001_inc = nbEvtPentecote;
		var TP001_id = 190;
		if((TP001_inc - day + $scope.TP001_jour) > 0 && (TP001_inc - day + $scope.TP001_jour) <= TP001_inc){			
			var theTemporal_pentecote = $scope.getObjects(temporal_data, 'id', (TP001_inc - (TP001_inc - day + $scope.TP001_jour) + 1+ TP001_id));			
			return theTemporal_pentecote["Te-La"];
		}
	}

	$scope.pentecoteMois1 = function(day) {
		var TP001_inc = nbEvtPentecote - (daysInMonth($scope.TP001_mois,$scope.theYear) - $scope.TP001_jour);		
		var TP001_id = 190 + (daysInMonth($scope.TP001_mois,$scope.theYear) - $scope.TP001_jour);		
		if(TP001_inc > 0){
			if(TP001_inc - day > 0){
				if((TP001_inc - day + $scope.TP001_jour) > 0){
					var theTemporal_pentecote = $scope.getObjects(temporal_data, 'id', (TP001_id + day + 1));																				
					return theTemporal_pentecote["Te-La"];
				}
			}			
		}
	}

	$scope.pentecoteMois2 = function(day) {
		var TP001_inc = nbEvtPentecote - (daysInMonth($scope.TP001_mois,$scope.theYear) - $scope.TP001_jour) - daysInMonth($scope.TP001_mois + 1 ,$scope.theYear);		
		var TP001_id = 190 + (daysInMonth($scope.TP001_mois,$scope.theYear) - $scope.TP001_jour + daysInMonth($scope.TP001_mois + 1 ,$scope.theYear));		
		if(TP001_inc > 0){
			if(TP001_inc - day > 0){
				if((TP001_inc - day + $scope.TP001_jour) > 0){
					var theTemporal_pentecote = $scope.getObjects(temporal_data, 'id', (TP001_id + day + 1));																				
					return theTemporal_pentecote["Te-La"];
				}
			}			
		}
	}

	$scope.pentecoteMois3 = function(day) {
		var TP001_inc = nbEvtPentecote - (daysInMonth($scope.TP001_mois,$scope.theYear) - $scope.TP001_jour) - daysInMonth($scope.TP001_mois + 1 ,$scope.theYear) - daysInMonth($scope.TP001_mois + 2 ,$scope.theYear);		
		var TP001_id = 190 + (daysInMonth($scope.TP001_mois,$scope.theYear) - $scope.TP001_jour + daysInMonth($scope.TP001_mois + 1 ,$scope.theYear) + daysInMonth($scope.TP001_mois + 2 ,$scope.theYear));		
		if(TP001_inc > 0){
			if(TP001_inc - day > 0){
				if((TP001_inc - day + $scope.TP001_jour) > 0){
					var theTemporal_pentecote = $scope.getObjects(temporal_data, 'id', (TP001_id + day + 1));																				
					return theTemporal_pentecote["Te-La"];
				}
			}			
		}
	}

	$scope.pentecoteMois4 = function(day) {
		var TP001_inc = nbEvtPentecote - (daysInMonth($scope.TP001_mois,$scope.theYear) - $scope.TP001_jour) - daysInMonth($scope.TP001_mois + 1 ,$scope.theYear) - daysInMonth($scope.TP001_mois + 2 ,$scope.theYear) - daysInMonth($scope.TP001_mois + 3 ,$scope.theYear);		
		var TP001_id = 190 + (daysInMonth($scope.TP001_mois,$scope.theYear) - $scope.TP001_jour + daysInMonth($scope.TP001_mois + 1 ,$scope.theYear) + daysInMonth($scope.TP001_mois + 2 ,$scope.theYear) + daysInMonth($scope.TP001_mois + 3 ,$scope.theYear));
		if(TP001_inc > 0){
			if(TP001_inc - day > 0){
				if((TP001_inc - day + $scope.TP001_jour) > 0){
					var theTemporal_pentecote = $scope.getObjects(temporal_data, 'id', (TP001_id + day + 1));																				
					return theTemporal_pentecote["Te-La"];
				}
			}			
		}
	}

	$scope.pentecoteMois5 = function(day) {
		var TP001_inc = nbEvtPentecote - (daysInMonth($scope.TP001_mois,$scope.theYear) - $scope.TP001_jour) - daysInMonth($scope.TP001_mois + 1 ,$scope.theYear) - daysInMonth($scope.TP001_mois + 2 ,$scope.theYear) - daysInMonth($scope.TP001_mois + 3 ,$scope.theYear) - daysInMonth($scope.TP001_mois + 4 ,$scope.theYear);
		var TP001_id = 190 + (daysInMonth($scope.TP001_mois,$scope.theYear) - $scope.TP001_jour + daysInMonth($scope.TP001_mois + 1 ,$scope.theYear) + daysInMonth($scope.TP001_mois + 2 ,$scope.theYear) + daysInMonth($scope.TP001_mois + 3 ,$scope.theYear) + daysInMonth($scope.TP001_mois + 4 ,$scope.theYear));
		if(TP001_inc > 0){
			if(TP001_inc - day > 0){
				if((TP001_inc - day + $scope.TP001_jour) > 0){
					var theTemporal_pentecote = $scope.getObjects(temporal_data, 'id', (TP001_id + day + 1));																				
					return theTemporal_pentecote["Te-La"];
				}
			}			
		}
	}

	$scope.pentecoteMois6 = function(day) {
		var TP001_inc = nbEvtPentecote - (daysInMonth($scope.TP001_mois,$scope.theYear) - $scope.TP001_jour) - daysInMonth($scope.TP001_mois + 1 ,$scope.theYear) - daysInMonth($scope.TP001_mois + 2 ,$scope.theYear) - daysInMonth($scope.TP001_mois + 3 ,$scope.theYear) - daysInMonth($scope.TP001_mois + 4 ,$scope.theYear) - daysInMonth($scope.TP001_mois + 5 ,$scope.theYear);
		var TP001_id = 190 + (daysInMonth($scope.TP001_mois,$scope.theYear) - $scope.TP001_jour + daysInMonth($scope.TP001_mois + 1 ,$scope.theYear) + daysInMonth($scope.TP001_mois + 2 ,$scope.theYear) + daysInMonth($scope.TP001_mois + 3 ,$scope.theYear) + daysInMonth($scope.TP001_mois + 4 ,$scope.theYear) + daysInMonth($scope.TP001_mois + 5 ,$scope.theYear));
		if(TP001_inc > 0){
			if(TP001_inc - day > 0){
				if((TP001_inc - day + $scope.TP001_jour) > 0){
					var theTemporal_pentecote = $scope.getObjects(temporal_data, 'id', (TP001_id + day + 1));																				
					return theTemporal_pentecote["Te-La"];
				}
			}			
		}
	}

	// pentecote 2
	$scope.Tpn02_split = $scope.Tpn02.split("/");
	$scope.Tpn02_mois = parseInt($scope.Tpn02_split[0]);
	$scope.Tpn02_jour = parseInt($scope.Tpn02_split[1]);	
	if($scope.theYear == 2019 || $scope.theYear == 2022 || $scope.theYear == 2030){
    }else{    	
		var nbEvtpentecote = 175 - $scope.nbP1;
		$scope.pentecote2 = function(day) {
			var Tpn02_inc = nbEvtpentecote;
			var Tpn02_id = $scope.IDP2 - 1;
			if((Tpn02_inc - day + $scope.Tpn02_jour) > 0 && (Tpn02_inc - day + $scope.Tpn02_jour) <= Tpn02_inc){			
				var theTemporal_pentecote2 = $scope.getObjects(temporal_data, 'id', (Tpn02_inc - (Tpn02_inc - day + $scope.Tpn02_jour) + 1+ Tpn02_id));			
				return theTemporal_pentecote2["Te-La"];
			}
		}

		$scope.pentecote2Mois1 = function(day) {
			var Tpn02_inc = nbEvtpentecote - (daysInMonth($scope.Tpn02_mois,$scope.theYear) - $scope.Tpn02_jour);		
			var Tpn02_id = ($scope.IDP2 - 1) + (daysInMonth($scope.Tpn02_mois,$scope.theYear) - $scope.Tpn02_jour);		
			if(Tpn02_inc > 0){
				if(Tpn02_inc - day > 0){
					if((Tpn02_inc - day + $scope.Tpn02_jour) > 0){
						var theTemporal_pentecote2 = $scope.getObjects(temporal_data, 'id', (Tpn02_id + day + 1));																				
						return theTemporal_pentecote2["Te-La"];
					}
				}			
			}
		}
    }


	$scope.getDayString = function(dayNum) {
		switch (dayNum) {
	      case 1:
	          dayString ='Lundi';
	          break;
	      case 2:
	          dayString ='Mardi';
	          break;
	      case 3:
	          dayString ='Mercredi';
	          break;
	      case 4:
	          dayString ='Jeudi';
	          break;
	      case 5:
	          dayString ='Vendredi';
	          break;
	      case 6:
	          dayString ='Samedi';
	          break;
	      case 0:
	          dayString ='Dimanche';
	          break;
	  	}
	  	return dayString;
  	}
	// console.log($scope.getDayString(dayNum));

	$scope.monthDayNumber = daysInMonth(todayMonth,todayYear);	

	$scope.getTheDayString = function(d, m, y) {
		var theDate = new Date(y, m-1, d);
		var dayNum = theDate.getDay();
		switch (dayNum) {
	      case 1:
	          dayString ='Lundi';
	          break;
	      case 2:
	          dayString ='Mardi';
	          break;
	      case 3:
	          dayString ='Mercredi';
	          break;
	      case 4:
	          dayString ='Jeudi';
	          break;
	      case 5:
	          dayString ='Vendredi';
	          break;
	      case 6:
	          dayString ='Samedi';
	          break;
	      case 0:
	          dayString ='Dimanche';
	          break;
	  	}
	  	return dayString;
  	}
	
	// ALL MP3 OFFICE
	var numoffice, fete, sanctoral_classe, temporal_classe, sancto, tempo, letter_classe, hymnes_pth, cco;
	var commun_data, commun, date_temporal;
	var mp3_inv, mp3_inv_2, mp3_inv_pascal_1, mp3_inv_pascal_2;
	var hymne_matines, hymne_matines_pascal;
	var mp3_hymne_laudes, mp3_hymne_vepres, mp3_hymne_complies, mp3_hymne_nones, mp3_hymne_primes, mp3_hymne_sextes;
	var mp3_hymne_tierces, mp3_hymne_laudes_pascal, mp3_hymne_vepres_pascal;
	var mp3_ant_matines_1, mp3_ant_matines_2, mp3_ant_matines_3, mp3_ant_matines_4, mp3_ant_matines_5;
	var mp3_ant_matines_6, mp3_ant_matines_7, mp3_ant_matines_8, mp3_ant_matines_9;
	var mp3_ant_matines_pascal, mp3_ant_pascal, mp3_ant_complies, mp3_ant_nones, mp3_ant_primes;
	var mp3_ant_sextes, mp3_ant_tierces, mp3_ant_laudes_1, mp3_ant_laudes_2, mp3_ant_laudes_3;
	var mp3_ant_laudes_4, mp3_ant_laudes_5;
	var mp3_ant_vepres_1, mp3_ant_vepres_2, mp3_ant_vepres_3, mp3_ant_vepres_4, mp3_ant_vepres_5;
	var mp3_Psaume94_1, mp3_Psaume94_2, mp3_Psaume94_3, mp3_Psaume94_4, mp3_Psaume94_5, mp3_Psaume94_6;
	var mp3_psaume_1_complies, mp3_psaume_2_complies, mp3_psaume_3_complies;
	var mp3_psaume_1_nones, mp3_psaume_2_nones, mp3_psaume_3_nones;
	var mp3_psaume_1_primes, mp3_psaume_2_primes, mp3_psaume_3_primes; 
	var mp3_psaume_1_sextes, mp3_psaume_2_sextes, mp3_psaume_3_sextes;
	var mp3_psaume_1_tierces, mp3_psaume_2_tierces, mp3_psaume_3_tierces;
	var mp3_psaume_matines_1, mp3_psaume_matines_2, mp3_psaume_matines_3,mp3_psaume_matines_4, mp3_psaume_matines_5, mp3_psaume_matines_6, mp3_psaume_matines_7, mp3_psaume_matines_8, mp3_psaume_matines_9;
	var mp3_psaume_laudes_1, mp3_psaume_laudes_2, mp3_psaume_laudes_3, mp3_psaume_laudes_4, mp3_psaume_laudes_5;
	var mp3_psaume_vepres_1, mp3_psaume_vepres_2, mp3_psaume_vepres_3, mp3_psaume_vepres_4, mp3_psaume_vepres_5;	
	var mp3_capitule_laudes, mp3_capitule_complies;
	var mp3_capitule_vepres, mp3_capitule_nones, mp3_capitule_primes, mp3_capitule_sextes, mp3_capitule_tierces;
	var mp3_capitule_laudes_pascal, mp3_capitule_tierces_pascal, mp3_capitule_sextes_pascal, mp3_capitule_nones_pascal, mp3_capitule_vepres_pascal;
	var mp3_repond_1, mp3_repond_2, mp3_repond_complies, mp3_repond_nones, mp3_repond_sextes, mp3_repond_tierces;
	var mp3_repond_tierces_pascal, mp3_repond_sextes_pascal, mp3_repond_nones_pascal;
	var mp3_antienne_benedictus, mp3_benedictus, mp3_antienne_magnificat, mp3_magnificat, mp3_cco;
	var mp3_lh_office, mp3_lh_office_complies, mp3_lh_hymne, mp3_lh_antienne, mp3_lh_antienne2, mp3_lh_psaume;
	var mp3_lh_psaume2, mp3_lh_capitule, mp3_lh_repond, mp3_lh_can, mp3_lh_ora, mp3_lh_noc, mp3_lh_cco, mp3_te_deum;
	var path_conclusion, conclusion, Sdate, path_oraison, filename, path_martyrologe;
	$scope.getMp3Office = function() {
		switch ($scope.getDayString($scope.dayNum)) {
		    case 'Lundi':
		        numday = "02";
		        hymne_tierces = 'f';
		        hymne = 'f';
		        capitule_repond = 'f';
		        hymne_lh = 'f';
		        inv = "t6";
		        matines_pascal = "00";
		        matines_hymnes = "02";
		        complies_cco = 'C';
		        break;
		    case 'Mardi':
		        numday = "03";
		        hymne_tierces = 'f';
		        hymne = 'f';
		        capitule_repond = 'f';
		        hymne_lh = 'f';
		        inv = "t6";
		        matines_pascal = "00";
		        complies_cco = 'C';
		        matines_hymnes = "03";
		        break;
		    case 'Mercredi':
		        numday = "04";
		        hymne_tierces = 'f';
		        hymne = 'f';
		        capitule_repond = 'f';
		        hymne_lh = 'f';
		        inv = "t6";
		        matines_pascal = "00";
		        complies_cco = 'C';
		        matines_hymnes = "04";
		        break;
		    case 'Jeudi':
		        numday = "05";
		        hymne_tierces = 'f';
		        hymne = 'f';
		        capitule_repond = 'f';
		        hymne_lh = 'f';
		        inv = "t6";
		        matines_pascal = "00";
		        complies_cco = 'C';
		        matines_hymnes = "05";
		        break;
		    case 'Vendredi':
		        numday = "06";
		        hymne_tierces = 'f';
		        hymne = 'f';
		        capitule_repond = 'f';
		        hymne_lh = 'f';
		        inv = "t6";
		        matines_pascal = "00";
		        complies_cco = 'C';
		        matines_hymnes = "06";
		        break;
		    case 'Samedi':
		        numday = "07";
		        hymne_tierces = 's';
		        hymne = 's';
		        capitule_repond = 'f';
		        hymne_lh = 'f';
		        inv = "t6";
		        matines_pascal = "00";
		        complies_cco = 'C';
		        matines_hymnes = "07";
		        break;
		    case 'Dimanche':
		        numday = "01";
		        hymne_tierces = 'd';
		        hymne = '1';
		        capitule_repond = '1';
		        hymne_lh = '1';
		        inv = "t7";
		        matines_pascal = "01";
		        complies_cco = 'F';
		        matines_hymnes = "a1";
		        break;
		}
				
		switch ($scope.office) {
		    case 'matines':
		        numoffice = "1";
		        break;
		    case 'laudes':
		        numoffice = "2";
		        break;
		    case 'prime':
		        numoffice = "3";
		        break;
		    case 'tierces':
		        numoffice = "4";
		        break;
		    case 'sexte':
		        numoffice = "5";
		        break;
		    case 'nones':
		        numoffice = "6";
		        break;
		    case 'vepres':
		        numoffice = "7";
		        break;
		    case 'complies':
		        numoffice = "8";
		        break;
		}

		$scope.sanctoral;
		$scope.temporal;
		fete = $scope.sanctoral;

		sancto = $scope.getObjects(sanctoral_data, 'S_Date', 'S'+ $scope.monthString($scope.theMonth)+$scope.theDayString($scope.day));
		sanctoral_classe = sancto["Se-classe"];

		$timeout(function() {
			tempo = $scope.getObjects(temporal_data, 'Te-La', $scope.temporal);
			temporal_classe = tempo["Te-classe"];				
			date_temporal = tempo["Te_Date"];			

			if(sanctoral_classe != "" && temporal_classe != ""){
			    if(sanctoral_classe < temporal_classe ){
			        classe = sanctoral_classe;
			        fete = $scope.sanctoral;
			    }else if(sanctoral_classe > temporal_classe){
			        classe = temporal_classe;
			        fete = $scope.temporal;
			    }else if(sanctoral_classe == temporal_classe){
			        classe = temporal_classe;
			        fete = $scope.sanctoral;
			    }
			}else if(sanctoral_classe != "" && temporal_classe == ""){
			    classe = sanctoral_classe;
			    fete = $scope.sanctoral;
			}else if(sanctoral_classe == "" && temporal_classe != ""){
			    classe = temporal_classe;
			    fete = $scope.temporal;
			}else if(sanctoral_classe == "" && temporal_classe == ""){
			    classe = 4;
			    fete = $scope.temporal;
			}			

			if(classe == 1){
			    letter_classe = "I cl";
			}
			else if(classe == 2){
			    letter_classe = "II cl";
			}
			else if(classe == 3){
			    letter_classe = "III cl";
			}
			else if(classe == 4){
			    letter_classe = "IV cl";
			}

			$scope.fete = fete;
			$scope.letter_classe = letter_classe;			
			
			if (classe == 1) {
			   hymnes_pth = "S";
			   cco = "F";
			} else if(classe == 2) {
			   hymnes_pth = "F";   
			   cco = "F";
			} else if(classe == 3) {
			   hymnes_pth = "C";           
			   cco = "C";
			}else if(classe == 4) {
			   hymnes_pth = "C";             
			   cco = "C";
			}else{
			   hymnes_pth = "C";             
			   cco = "C";
			}

			if(classe == 4){
				$scope.mp3_te_deum  = 'Media/Audio/silence.mp3';			
			}else{
				$scope.mp3_te_deum  = cordova.file.externalRootDirectory+'Hicvox/Audio/eLa-TeDeum-v0.mp3';
			}
			
			// #################################
			// - CONCLUSION -
			// #################################

			if (temporal_classe == 1) {     
	          if((date_temporal == 'TP001' || date_temporal == 'TP002' || date_temporal == 'TP003' || date_temporal == 'TP004' || date_temporal == 'TP005' || date_temporal == 'TP006' || date_temporal == 'TP007' || date_temporal == 'TP011')) {
	            conclusion = "eLa-Deo-1cP-v0.mp3";
	          }else{
	            conclusion = "eLa-Deo-1cO-v0.mp3"; 
	          }
	        } else if(temporal_classe == 2) {
	          if((date_temporal == 'TP001' || date_temporal == 'TP002' || date_temporal == 'TP003' || date_temporal == 'TP004' || date_temporal == 'TP005' || date_temporal == 'TP006' || date_temporal == 'TP007' || date_temporal == 'TP011')) {
	            conclusion = "eLa-Deo-1cP-v0.mp3";
	          }else{
	            conclusion = "eLa-Deo-2cO-v0.mp3";
	          }
	        } else if(temporal_classe == 3) {
	          if((date_temporal == 'TP001' || date_temporal == 'TP002' || date_temporal == 'TP003' || date_temporal == 'TP004' || date_temporal == 'TP005' || date_temporal == 'TP006' || date_temporal == 'TP007' || date_temporal == 'TP011')) {
	            conclusion = "eLa-Deo-1cP-v0.mp3";
	          }else{
	            conclusion = "eLa-Deo-3cO-v0.mp3";
	          }
	        }else if(temporal_classe == 4) {
	          if((date_temporal == 'TP001' || date_temporal == 'TP002' || date_temporal == 'TP003' || date_temporal == 'TP004' || date_temporal == 'TP005' || date_temporal == 'TP006' || date_temporal == 'TP007' || date_temporal == 'TP011')) {
	            conclusion = "eLa-Deo-1cP-v0.mp3";
	          }else{
	            conclusion = "eLa-Deo-4cO-v0.mp3";
	          }
	        }else{
	            conclusion = "eLa-Deo-4cO-v0.mp3";
	            date_temporal = null;
	        }
	        			
	        // #################################
			// - ORAISONS -
			// #################################

			if( date_temporal != null){
				if((date_temporal[3] != 0) && ( $scope.getDayString($scope.dayNum) != 'Dimanche')){
				  Sdate = date_temporal[0] + date_temporal[1] + date_temporal[2] + date_temporal[3] + 'f';
				}else{
				  Sdate = date_temporal;
				}	
			}	        

			$scope.oraison = path_oraison+"eLa-Ora-"+Sdate+".mp3";
			$scope.conclusion = path_conclusion+conclusion;			

		});
		
		// document.addEventListener('deviceready', function () {
		// 	cordova.file.externalRootDirectory = cordova.file.externalRootDirectory;
		// });

		path_conclusion = cordova.file.externalRootDirectory+"Hicvox/Audio/";
		path_oraison = cordova.file.externalRootDirectory+"Hicvox/Audio/";
		$scope.mp3_office_mat = cordova.file.externalRootDirectory+"Hicvox/Audio/eLa-PrI-Mat-v0.mp3";
		$scope.mp3_office_com = cordova.file.externalRootDirectory+"Hicvox/Audio/eLa-PrI-Com-v0.mp3";

		commun_data = $scope.getObjects(sanctoral_data, 'S_Date', 'S'+ $scope.monthString($scope.theMonth)+$scope.theDayString($scope.day));
		commun = sancto["Abr"];

		// #################################
		// - TEMPS PASCAL -
		// #################################
		function Easter(Y) {
		    var C = Math.floor(Y/100);
		    var N = Y - 19*Math.floor(Y/19);
		    var K = Math.floor((C - 17)/25);
		    var I = C - Math.floor(C/4) - Math.floor((C - K)/3) + 19*N + 15;
		    I = I - 30*Math.floor((I/30));
		    I = I - Math.floor(I/28)*(1 - Math.floor(I/28)*Math.floor(29/(I + 1))*Math.floor((21 - N)/11));
		    var J = Y + Math.floor(Y/4) + I + 2 - C + Math.floor(C/4);
		    J = J - 7*Math.floor(J/7);
		    var L = I - J;
		    var M = 3 + Math.floor((L + 40)/44);
		    var D = L + 28 - 31*Math.floor(M/4);

		    return M + '.' + D;
		}
		function padout(number) { return (number < 10) ? '0' + number : number; }
		var paquesSplit = Easter($scope.theYear).split(".");
		var paquesMois = parseInt(paquesSplit[0]);
		var paquesJour = parseInt(paquesSplit[1]);
		var paquesDate = new Date(parseInt($scope.theYear), parseInt(paquesMois)-1, parseInt(paquesJour));		
		var selectedDate = new Date(parseInt($scope.theYear), parseInt($scope.theMonth)-1, parseInt($scope.day));		
		var oneDay = 24*60*60*1000;
		var days_between = Math.round(Math.abs((paquesDate.getTime() - selectedDate.getTime())/(oneDay)));		
		var tempsPascal = false;
		if($scope.theMonth == parseInt(paquesMois) || $scope.theMonth == parseInt(paquesMois) + 1 || $scope.theMonth == parseInt(paquesMois) + 2){    
		    if($scope.theMonth == parseInt(paquesMois) && $scope.day >= parseInt(paquesJour)){
		      tempsPascal = true;
		    }
		    if($scope.theMonth != parseInt(paquesMois) && days_between < 50){
		      tempsPascal = true;
		    }
		}	    

		// #################################
		// - INVITATOIRES -
		// #################################

		if(commun == ""){
		    mp3_inv        = cordova.file.externalRootDirectory+'Hicvox/Audio/eLa-Inv-Ord-'+numday+''+numoffice+'1-'+inv+'-v0.mp3';
		    mp3_inv_2      = cordova.file.externalRootDirectory+'Hicvox/Audio/eLa-Inv-Ord-'+numday+''+numoffice+'2-'+inv+'-v0.mp3';
		    mp3_inv_pascal_1 = cordova.file.externalRootDirectory+'Hicvox/Audio/eLa-Inv-TRe-0001-v0.mp3';
		    mp3_inv_pascal_2 = cordova.file.externalRootDirectory+'Hicvox/Audio/eLa-Inv-TRe-0002-v0.mp3';
		}else{
		    mp3_inv        = cordova.file.externalRootDirectory+'Hicvox/Audio/eLa-Inv-'+commun+'-ht1-'+inv+'-v0.mp3';
		    mp3_inv_2      = cordova.file.externalRootDirectory+'Hicvox/Audio/eLa-Inv-'+commun+'-ht2-'+inv+'-v0.mp3';
		    mp3_inv_pascal_1 = cordova.file.externalRootDirectory+'Hicvox/Audio/eLa-Inv-'+commun+'-tp1-'+inv+'-v0.mp3';
		    mp3_inv_pascal_2 = cordova.file.externalRootDirectory+'Hicvox/Audio/eLa-Inv-'+commun+'-tp2-'+inv+'-v0.mp3';
		}

		// #################################
		// - HYMNES -
		// #################################

		if(commun == ""){
		    hymne_matines  = cordova.file.externalRootDirectory+'Hicvox/Audio/eLa-Hym-Ord-'+matines_hymnes+''+numoffice+'-v0.mp3';
		}else{
		    if(commun == "CAp" || commun == "CMu" || commun == "CMm"){
		        hymne_matines  = cordova.file.externalRootDirectory+'Hicvox/Audio/eLa-Hym-'+commun+'-hp'+numoffice+'-v0.mp3';
		        hymne_matines_pascal  = cordova.file.externalRootDirectory+'Hicvox/Audio/eLa-Hym-'+commun+'-tt'+numoffice+'-v0.mp3';
		    }else{
		        hymne_matines  = cordova.file.externalRootDirectory+'Hicvox/Audio/eLa-Hym-'+commun+'-hp'+numoffice+'-v0.mp3';
		        hymne_matines_pascal  = cordova.file.externalRootDirectory+'Hicvox/Audio/eLa-Hym-'+commun+'-tt'+numoffice+'-v0.mp3';
		    }
		}

		mp3_hymne_laudes  = cordova.file.externalRootDirectory+'Hicvox/Audio/eLa-Hym-Ord-'+numday+''+numoffice+'-v0.mp3';
		mp3_hymne_vepres  = cordova.file.externalRootDirectory+'Hicvox/Audio/eLa-Hym-Ord-'+numday+''+numoffice+'-v0.mp3';

		mp3_hymne_complies= cordova.file.externalRootDirectory+'Hicvox/Audio/eLa-Hym-0'+numoffice+''+hymnes_pth+'-v0.mp3';
		mp3_hymne_nones   = cordova.file.externalRootDirectory+'Hicvox/Audio/eLa-Hym-0'+numoffice+''+hymnes_pth+'-v0.mp3';
		mp3_hymne_primes  = cordova.file.externalRootDirectory+'Hicvox/Audio/eLa-Hym-0'+numoffice+''+hymnes_pth+'-v0.mp3';
		mp3_hymne_sextes  = cordova.file.externalRootDirectory+'Hicvox/Audio/eLa-Hym-0'+numoffice+''+hymnes_pth+'-v0.mp3';
		mp3_hymne_tierces = cordova.file.externalRootDirectory+'Hicvox/Audio/eLa-Hym-0'+numoffice+''+hymnes_pth+'-v0.mp3';

		mp3_hymne_laudes_pascal  = cordova.file.externalRootDirectory+'Hicvox/Audio/eLa-Hym-TRe-002-v0.mp3';
		mp3_hymne_vepres_pascal  = cordova.file.externalRootDirectory+'Hicvox/Audio/eLa-Hym-TRe-007-v0.mp3';

		// #################################
		// - ANTIENNE -
		// #################################
		
		mp3_ant_matines_1      = cordova.file.externalRootDirectory+'Hicvox/Audio/eLa-AnP-Ord-'+numday+''+numoffice+'1-v0.mp3';
		mp3_ant_matines_2      = cordova.file.externalRootDirectory+'Hicvox/Audio/eLa-AnP-Ord-'+numday+''+numoffice+'2-v0.mp3';
		mp3_ant_matines_3      = cordova.file.externalRootDirectory+'Hicvox/Audio/eLa-AnP-Ord-'+numday+''+numoffice+'3-v0.mp3';
		mp3_ant_matines_4      = cordova.file.externalRootDirectory+'Hicvox/Audio/eLa-AnP-Ord-'+numday+''+numoffice+'4-v0.mp3';
		mp3_ant_matines_5      = cordova.file.externalRootDirectory+'Hicvox/Audio/eLa-AnP-Ord-'+numday+''+numoffice+'5-v0.mp3';
		mp3_ant_matines_6      = cordova.file.externalRootDirectory+'Hicvox/Audio/eLa-AnP-Ord-'+numday+''+numoffice+'6-v0.mp3';
		mp3_ant_matines_7      = cordova.file.externalRootDirectory+'Hicvox/Audio/eLa-AnP-Ord-'+numday+''+numoffice+'7-v0.mp3';
		mp3_ant_matines_8      = cordova.file.externalRootDirectory+'Hicvox/Audio/eLa-AnP-Ord-'+numday+''+numoffice+'8-v0.mp3';
		mp3_ant_matines_9      = cordova.file.externalRootDirectory+'Hicvox/Audio/eLa-AnP-Ord-'+numday+''+numoffice+'9-v0.mp3';

		mp3_ant_matines_pascal = cordova.file.externalRootDirectory+'Hicvox/Audio/eLa-Ant-TRe-'+matines_pascal+'-v0.mp3';
		mp3_ant_pascal = cordova.file.externalRootDirectory+'Hicvox/Audio/eLa-Ant-TRe-00-v0.mp3';

		mp3_ant_complies       = cordova.file.externalRootDirectory+'Hicvox/Audio/eLa-AnP-Ord-'+numday+''+numoffice+'1-v0.mp3';
		mp3_ant_nones          = cordova.file.externalRootDirectory+'Hicvox/Audio/eLa-AnP-Ord-'+numday+''+numoffice+'1-v0.mp3';
		mp3_ant_primes         = cordova.file.externalRootDirectory+'Hicvox/Audio/eLa-AnP-Ord-'+numday+''+numoffice+'1-v0.mp3';
		mp3_ant_sextes         = cordova.file.externalRootDirectory+'Hicvox/Audio/eLa-AnP-Ord-'+numday+''+numoffice+'1-v0.mp3';
		mp3_ant_tierces        = cordova.file.externalRootDirectory+'Hicvox/Audio/eLa-AnP-Ord-'+numday+''+numoffice+'1-v0.mp3';

		mp3_ant_laudes_1      = cordova.file.externalRootDirectory+'Hicvox/Audio/eLa-AnP-Ord-'+numday+''+numoffice+'1-v0.mp3';
		mp3_ant_laudes_2      = cordova.file.externalRootDirectory+'Hicvox/Audio/eLa-AnP-Ord-'+numday+''+numoffice+'2-v0.mp3';
		mp3_ant_laudes_3      = cordova.file.externalRootDirectory+'Hicvox/Audio/eLa-AnP-Ord-'+numday+''+numoffice+'3-v0.mp3';
		mp3_ant_laudes_4      = cordova.file.externalRootDirectory+'Hicvox/Audio/eLa-AnP-Ord-'+numday+''+numoffice+'4-v0.mp3';
		mp3_ant_laudes_5      = cordova.file.externalRootDirectory+'Hicvox/Audio/eLa-AnP-Ord-'+numday+''+numoffice+'5-v0.mp3';

		mp3_ant_vepres_1      = cordova.file.externalRootDirectory+'Hicvox/Audio/eLa-AnP-Ord-'+numday+''+numoffice+'1-v0.mp3';
		mp3_ant_vepres_2      = cordova.file.externalRootDirectory+'Hicvox/Audio/eLa-AnP-Ord-'+numday+''+numoffice+'2-v0.mp3';
		mp3_ant_vepres_3      = cordova.file.externalRootDirectory+'Hicvox/Audio/eLa-AnP-Ord-'+numday+''+numoffice+'3-v0.mp3';
		mp3_ant_vepres_4      = cordova.file.externalRootDirectory+'Hicvox/Audio/eLa-AnP-Ord-'+numday+''+numoffice+'4-v0.mp3';
		mp3_ant_vepres_5      = cordova.file.externalRootDirectory+'Hicvox/Audio/eLa-AnP-Ord-'+numday+''+numoffice+'5-v0.mp3';

		// #################################
		// - PSAUME -
		// #################################		

		mp3_Psaume94_1 = cordova.file.externalRootDirectory+'Hicvox/Audio/eLa-P94-1-'+inv+'-v0.mp3';
		mp3_Psaume94_2 = cordova.file.externalRootDirectory+'Hicvox/Audio/eLa-P94-2-'+inv+'-v0.mp3';
		mp3_Psaume94_3 = cordova.file.externalRootDirectory+'Hicvox/Audio/eLa-P94-3-'+inv+'-v0.mp3';
		mp3_Psaume94_4 = cordova.file.externalRootDirectory+'Hicvox/Audio/eLa-P94-4-'+inv+'-v0.mp3';
		mp3_Psaume94_5 = cordova.file.externalRootDirectory+'Hicvox/Audio/eLa-P94-5-'+inv+'-v0.mp3';
		mp3_Psaume94_6 = cordova.file.externalRootDirectory+'Hicvox/Audio/eLa-P94-6-'+inv+'-v0.mp3';
		mp3_psaume_1_complies = cordova.file.externalRootDirectory+'Hicvox/Audio/eLa-Psa-Ord-'+numday+''+numoffice+'1-v0.mp3';
		mp3_psaume_2_complies = cordova.file.externalRootDirectory+'Hicvox/Audio/eLa-Psa-Ord-'+numday+''+numoffice+'2-v0.mp3';
		mp3_psaume_3_complies = cordova.file.externalRootDirectory+'Hicvox/Audio/eLa-Psa-Ord-'+numday+''+numoffice+'3-v0.mp3';

		mp3_psaume_1_nones = cordova.file.externalRootDirectory+'Hicvox/Audio/eLa-Psa-Ord-'+numday+''+numoffice+'1-v0.mp3';
		mp3_psaume_2_nones = cordova.file.externalRootDirectory+'Hicvox/Audio/eLa-Psa-Ord-'+numday+''+numoffice+'2-v0.mp3';
		mp3_psaume_3_nones = cordova.file.externalRootDirectory+'Hicvox/Audio/eLa-Psa-Ord-'+numday+''+numoffice+'3-v0.mp3';

		mp3_psaume_1_primes = cordova.file.externalRootDirectory+'Hicvox/Audio/eLa-Psa-Ord-'+numday+''+numoffice+'1-v0.mp3';
		mp3_psaume_2_primes = cordova.file.externalRootDirectory+'Hicvox/Audio/eLa-Psa-Ord-'+numday+''+numoffice+'2-v0.mp3';
		mp3_psaume_3_primes = cordova.file.externalRootDirectory+'Hicvox/Audio/eLa-Psa-Ord-'+numday+''+numoffice+'3-v0.mp3';

		mp3_psaume_1_sextes = cordova.file.externalRootDirectory+'Hicvox/Audio/eLa-Psa-Ord-'+numday+''+numoffice+'1-v0.mp3';
		mp3_psaume_2_sextes = cordova.file.externalRootDirectory+'Hicvox/Audio/eLa-Psa-Ord-'+numday+''+numoffice+'2-v0.mp3';
		mp3_psaume_3_sextes = cordova.file.externalRootDirectory+'Hicvox/Audio/eLa-Psa-Ord-'+numday+''+numoffice+'3-v0.mp3';

		mp3_psaume_1_tierces = cordova.file.externalRootDirectory+'Hicvox/Audio/eLa-Psa-Ord-'+numday+''+numoffice+'1-v0.mp3';
		mp3_psaume_2_tierces = cordova.file.externalRootDirectory+'Hicvox/Audio/eLa-Psa-Ord-'+numday+''+numoffice+'2-v0.mp3';
		mp3_psaume_3_tierces = cordova.file.externalRootDirectory+'Hicvox/Audio/eLa-Psa-Ord-'+numday+''+numoffice+'3-v0.mp3';

		mp3_psaume_matines_1 = cordova.file.externalRootDirectory+'Hicvox/Audio/eLa-Psa-Ord-'+numday+''+numoffice+'1-v0.mp3';
		mp3_psaume_matines_2 = cordova.file.externalRootDirectory+'Hicvox/Audio/eLa-Psa-Ord-'+numday+''+numoffice+'2-v0.mp3';
		mp3_psaume_matines_3 = cordova.file.externalRootDirectory+'Hicvox/Audio/eLa-Psa-Ord-'+numday+''+numoffice+'3-v0.mp3';
		mp3_psaume_matines_4 = cordova.file.externalRootDirectory+'Hicvox/Audio/eLa-Psa-Ord-'+numday+''+numoffice+'4-v0.mp3';
		mp3_psaume_matines_5 = cordova.file.externalRootDirectory+'Hicvox/Audio/eLa-Psa-Ord-'+numday+''+numoffice+'5-v0.mp3';
		mp3_psaume_matines_6 = cordova.file.externalRootDirectory+'Hicvox/Audio/eLa-Psa-Ord-'+numday+''+numoffice+'6-v0.mp3';
		mp3_psaume_matines_7 = cordova.file.externalRootDirectory+'Hicvox/Audio/eLa-Psa-Ord-'+numday+''+numoffice+'7-v0.mp3';
		mp3_psaume_matines_8 = cordova.file.externalRootDirectory+'Hicvox/Audio/eLa-Psa-Ord-'+numday+''+numoffice+'8-v0.mp3';
		mp3_psaume_matines_9 = cordova.file.externalRootDirectory+'Hicvox/Audio/eLa-Psa-Ord-'+numday+''+numoffice+'9-v0.mp3';

		mp3_psaume_laudes_1 = cordova.file.externalRootDirectory+'Hicvox/Audio/eLa-Psa-Ord-'+numday+''+numoffice+'1-v0.mp3';
		mp3_psaume_laudes_2 = cordova.file.externalRootDirectory+'Hicvox/Audio/eLa-Psa-Ord-'+numday+''+numoffice+'2-v0.mp3';
		mp3_psaume_laudes_3 = cordova.file.externalRootDirectory+'Hicvox/Audio/eLa-Psa-Ord-'+numday+''+numoffice+'3-v0.mp3';
		mp3_psaume_laudes_4 = cordova.file.externalRootDirectory+'Hicvox/Audio/eLa-Psa-Ord-'+numday+''+numoffice+'4-v0.mp3';
		mp3_psaume_laudes_5 = cordova.file.externalRootDirectory+'Hicvox/Audio/eLa-Psa-Ord-'+numday+''+numoffice+'5-v0.mp3';

		mp3_psaume_vepres_1 = cordova.file.externalRootDirectory+'Hicvox/Audio/eLa-Psa-Ord-'+numday+''+numoffice+'1-v0.mp3';
		mp3_psaume_vepres_2 = cordova.file.externalRootDirectory+'Hicvox/Audio/eLa-Psa-Ord-'+numday+''+numoffice+'2-v0.mp3';
		mp3_psaume_vepres_3 = cordova.file.externalRootDirectory+'Hicvox/Audio/eLa-Psa-Ord-'+numday+''+numoffice+'3-v0.mp3';
		mp3_psaume_vepres_4 = cordova.file.externalRootDirectory+'Hicvox/Audio/eLa-Psa-Ord-'+numday+''+numoffice+'4-v0.mp3';
		mp3_psaume_vepres_5 = cordova.file.externalRootDirectory+'Hicvox/Audio/eLa-Psa-Ord-'+numday+''+numoffice+'5-v0.mp3';
		

		if(commun == ""){
		    mp3_capitule_laudes = cordova.file.externalRootDirectory+'Hicvox/Audio/eLa-Cap-Ord-0'+capitule_repond+''+numoffice+'-v0.mp3';
		}else{
		    mp3_capitule_laudes  = cordova.file.externalRootDirectory+'Hicvox/Audio/eLa-Hym-'+commun+'-hp'+numoffice+'-v0.mp3';
		}

		mp3_capitule_complies= cordova.file.externalRootDirectory+'Hicvox/Audio/eLa-Cap-Ord-0'+capitule_repond+''+numoffice+'-v0.mp3';				

		mp3_capitule_vepres = cordova.file.externalRootDirectory+'Hicvox/Audio/eLa-Cap-Ord-0'+capitule_repond+''+numoffice+'-v0.mp3';
		mp3_capitule_nones = cordova.file.externalRootDirectory+'Hicvox/Audio/eLa-Cap-Ord-0'+capitule_repond+''+numoffice+'-v0.mp3';
		mp3_capitule_primes = cordova.file.externalRootDirectory+'Hicvox/Audio/eLa-Cap-Ord-0'+capitule_repond+''+numoffice+'-v0.mp3';
		mp3_capitule_sextes = cordova.file.externalRootDirectory+'Hicvox/Audio/eLa-Cap-Ord-0'+capitule_repond+''+numoffice+'-v0.mp3';
		mp3_capitule_tierces = cordova.file.externalRootDirectory+'Hicvox/Audio/eLa-Cap-Ord-0'+capitule_repond+''+numoffice+'-v0.mp3';

		mp3_capitule_laudes_pascal= cordova.file.externalRootDirectory+'Hicvox/Audio/eLa-Cap-TRe-002-v0.mp3';
		mp3_capitule_tierces_pascal= cordova.file.externalRootDirectory+'Hicvox/Audio/eLa-Cap-TRe-004-v0.mp3';
		mp3_capitule_sextes_pascal= cordova.file.externalRootDirectory+'Hicvox/Audio/eLa-Cap-TRe-005-v0.mp3';
		mp3_capitule_nones_pascal= cordova.file.externalRootDirectory+'Hicvox/Audio/eLa-Cap-TRe-006-v0.mp3';
		mp3_capitule_vepres_pascal= cordova.file.externalRootDirectory+'Hicvox/Audio/eLa-Cap-TRe-007-v0.mp3';

		// #################################
		// - REPONDS -
		// #################################

		mp3_repond_1 = cordova.file.externalRootDirectory+'Hicvox/Audio/eLa-Re1-Ord-0'+capitule_repond+''+numoffice+'-v0.mp3';
		mp3_repond_2 = cordova.file.externalRootDirectory+'Hicvox/Audio/eLa-Re2-Ord-0'+capitule_repond+''+numoffice+'-v0.mp3';
		mp3_repond_complies = cordova.file.externalRootDirectory+'Hicvox/Audio/eLa-Rep-Ord-0'+capitule_repond+''+numoffice+'-v0.mp3';
		mp3_repond_nones   = cordova.file.externalRootDirectory+'Hicvox/Audio/eLa-Rep-Ord-0'+capitule_repond+''+numoffice+'-v0.mp3';
		mp3_repond_sextes = cordova.file.externalRootDirectory+'Hicvox/Audio/eLa-Rep-Ord-0'+capitule_repond+''+numoffice+'-v0.mp3';
		mp3_repond_tierces = cordova.file.externalRootDirectory+'Hicvox/Audio/eLa-Rep-Ord-0'+capitule_repond+''+numoffice+'-v0.mp3';       

		mp3_repond_tierces_pascal = cordova.file.externalRootDirectory+'Hicvox/Audio/eLa-Rep-TRe-004-v0.mp3';       
		mp3_repond_sextes_pascal = cordova.file.externalRootDirectory+'Hicvox/Audio/eLa-Rep-TRe-005-v0.mp3';       
		mp3_repond_nones_pascal = cordova.file.externalRootDirectory+'Hicvox/Audio/eLa-Rep-TRe-006-v0.mp3';  

		// #################################
		// - BENEDICTUS -     
		// #################################

		mp3_antienne_benedictus = cordova.file.externalRootDirectory+'Hicvox/Audio/eLa-AnB-Ord-'+numday+'-t7-v0.mp3';
		mp3_benedictus = cordova.file.externalRootDirectory+'Hicvox/Audio/eLa-CaB-Ord-t7-v0.mp3';

		// #################################
		// - MAGNIFICIANT -
		// #################################

		mp3_antienne_magnificat = cordova.file.externalRootDirectory+'Hicvox/Audio/eLa-AnM-Ord-'+numday+'-t7-v0.mp3';
		mp3_magnificat = cordova.file.externalRootDirectory+'Hicvox/Audio/eLa-CaM-Ord-t7-v0.mp3';

		// #################################
		// - mp3 CCO -
		// #################################

		mp3_cco = cordova.file.externalRootDirectory+'Hicvox/Audio/eLa-CCo-4'+cco+'-V0.mp3'; 

		// #################################
		// - LITURGIES DES HEURES -
		// #################################		
		mp3_lh_office     = cordova.file.externalRootDirectory+"Hicvox/Audio/oLa-InA-v0.mp3";
		mp3_lh_office_complies     = cordova.file.externalRootDirectory+"Hicvox/Audio/oFr-PsI-Com-v0.mp3";
		mp3_lh_hymne     = cordova.file.externalRootDirectory+'Hicvox/Audio/oFr-Hym-Ord-0'+hymne_lh+''+numoffice+'-v0.mp3';
		mp3_lh_antienne     = cordova.file.externalRootDirectory+'Hicvox/Audio/oFr-AnP-Ord-'+numday+''+numoffice+'1-v0.mp3';
		mp3_lh_antienne2     = cordova.file.externalRootDirectory+'Hicvox/Audio/oFr-AnP-Ord-'+numday+''+numoffice+'2-v0.mp3';
		mp3_lh_psaume     = cordova.file.externalRootDirectory+'Hicvox/Audio/oFr-Psa-Ord-'+numday+''+numoffice+'1-v0.mp3';
		mp3_lh_psaume2     = cordova.file.externalRootDirectory+'Hicvox/Audio/oFr-Psa-Ord-'+numday+''+numoffice+'2-v0.mp3';		
		mp3_lh_capitule     = cordova.file.externalRootDirectory+'Hicvox/Audio/oFr-Cap-Ord-01'+numoffice+'-v0.mp3';
		mp3_lh_repond     = cordova.file.externalRootDirectory+'Hicvox/Audio/oFr-Rep-Ord-018-v0.mp3';
		mp3_lh_can     = cordova.file.externalRootDirectory+'Hicvox/Audio/oFr-CaN-Ord-00-v0.mp3';		
		mp3_lh_ora     = cordova.file.externalRootDirectory+'Hicvox/Audio/oFr-Ora-Co01'+numoffice+'-v0.mp3';
		mp3_lh_noc     = cordova.file.externalRootDirectory+'Hicvox/Audio/oFr-Noc-v0.mp3';
		mp3_lh_cco     = cordova.file.externalRootDirectory+'Hicvox/Audio/oFr-CCo-3'+complies_cco+'-v0.mp3';

		// #################################
		// - Te Deum -
		// #################################		

		if($scope.officeSelected == true){
			$("#fichiernom").html('');			
			if($scope.office == "matines"){
				if(tempsPascal == true){
					nextOffice = [$scope.mp3_office_mat,
								  $scope.theMp3Office,
								  mp3_inv_pascal_1,
								  mp3_inv_pascal_1,
								  mp3_Psaume94_1,
								  mp3_inv_pascal_1,
								  mp3_Psaume94_2,
								  mp3_inv_pascal_2,
								  mp3_Psaume94_3,
								  mp3_inv_pascal_1,
								  mp3_Psaume94_4,
								  mp3_inv_pascal_2,
								  mp3_Psaume94_5,
								  mp3_inv_pascal_1,
								  mp3_Psaume94_6,
								  mp3_inv_pascal_2,
								  mp3_inv_pascal_1,
								  hymne_matines_pascal,
								  mp3_ant_matines_pascal,
								  mp3_psaume_matines_1,
								  mp3_psaume_matines_2,
								  mp3_psaume_matines_3,
								  mp3_psaume_matines_4,
								  mp3_psaume_matines_5,
								  mp3_psaume_matines_6,
								  mp3_psaume_matines_7,
								  mp3_psaume_matines_8,
								  mp3_psaume_matines_9,
								  mp3_ant_matines_pascal,
								  $scope.mp3_te_deum,
								  $scope.oraison,
						      	  $scope.conclusion];
                                                                                    
				}else{
					nextOffice = [$scope.mp3_office_mat,
							      $scope.theMp3Office, 
							      mp3_inv,
							      mp3_inv,
							      mp3_Psaume94_1,
							      mp3_inv,
							      mp3_Psaume94_2,
							      mp3_inv_2,
							      mp3_Psaume94_3,
							      mp3_inv,
							      mp3_Psaume94_4,
							      mp3_inv_2,
							      mp3_Psaume94_5,
							      mp3_inv,
							      mp3_Psaume94_6,
							      mp3_inv_2,
							      mp3_inv,
							      hymne_matines,
							      mp3_ant_matines_1,
							      mp3_psaume_matines_1,
							      mp3_ant_matines_1,
							      mp3_ant_matines_2,
							      mp3_psaume_matines_2,
							      mp3_ant_matines_2,
							      mp3_ant_matines_3,
							      mp3_ant_matines_4,
							      mp3_ant_matines_5,
							      mp3_psaume_matines_5,
							      mp3_ant_matines_5,
							      mp3_ant_matines_6,
							      mp3_ant_matines_7,
							      mp3_psaume_matines_7,
							      mp3_ant_matines_7,
							      mp3_ant_matines_8,
							      mp3_ant_matines_9,
							      mp3_psaume_matines_9,
							      mp3_ant_matines_9,
							      $scope.mp3_te_deum,
							      $scope.oraison,
							      $scope.conclusion];
				}				
				curOffice = 0;
			    officePlayer = document.getElementById('officePlayer');	
			    officePlayer.src = $scope.mp3_office_mat;
				officePlayer.onended = function(){
					++curOffice;
					if(curOffice < nextOffice.length){
					    officePlayer.src = nextOffice[curOffice];
					    var p2 = document.getElementById('officePlayer');
					    var source = p2.src;
					    var res = source.split("/");
					    $("#fichiernom").append("<strong>"+ res[res.length-1] + "</strong><br/>" );
					}
				}
			}else if($scope.office == "prime"){			
				var nbJ, jour_next, jour_n, mois_next, mois_n, db_date, lunaire;
				nbJ = daysInMonth(parseInt($scope.theMonth), parseInt($scope.theYear));
				    if (parseInt($scope.day) >= nbJ && (parseInt($scope.theMonth) != 12)) {
				      jour_next = '01';
				      mois_n = parseInt($scope.theMonth) + 1;
				      mois_next = padout(mois_n);
				      db_date = 'S'+mois_next+jour_next;
				      lunaire =  $scope.getTheLune(db_date, parseInt($scope.theYear));				      
				    }else if ((parseInt($scope.day) >= nbJ) && (parseInt($scope.theMonth) == 12)) {
				      jour_next = '01';
				      mois_next = '01';
				      db_date = 'S'+mois_next+jour_next;
				      lunaire =  $scope.getTheLune(db_date, parseInt($scope.theYear) + 1);  
				    }else{
				      mois_next = padout(parseInt($scope.theMonth));
				      jour_n = parseInt($scope.day) + 1;
				      jour_next = padout(jour_n);
				      db_date = 'S'+mois_next+jour_next;
				      lunaire =  $scope.getTheLune(db_date, parseInt($scope.theYear));
				    }
				    lunaire = padout(lunaire);				    
				path_martyrologe = cordova.file.externalRootDirectory+'Hicvox/Audio';
				filename = path_martyrologe+'Fr-Mar-Int-'+db_date+'.mp3';
				if(tempsPascal == true){
					$.get(filename)
				    .done(function() {
				    	nextOffice  = 	[$scope.theMp3Office,
										mp3_hymne_primes,
										mp3_ant_pascal,
										mp3_psaume_1_primes,
										mp3_psaume_2_primes,
										mp3_psaume_3_primes,
										mp3_ant_pascal,
										mp3_capitule_primes,
										mp3_repond_1,
										path_martyrologe+"Fr-Mar-Int-"+db_date+".mp3",
										path_martyrologe+"Lune-"+lunaire+".mp3",
										path_martyrologe+"Fr-Mar-Txt-"+db_date+".mp3",
									 	mp3_repond_2];
				    }).fail(function() {
				        nextOffice  = 	[$scope.theMp3Office,
										mp3_hymne_primes,
										mp3_ant_pascal,
										mp3_psaume_1_primes,
										mp3_psaume_2_primes,
										mp3_psaume_3_primes,
										mp3_ant_pascal,
										mp3_capitule_primes,
										mp3_repond_1,										
									 	mp3_repond_2];
				    })
				}else{
					$.get(filename)
				    .done(function() { 
				        nextOffice  = 	[$scope.theMp3Office,
										mp3_hymne_primes,
										mp3_ant_primes,
										mp3_psaume_1_primes,
										mp3_psaume_2_primes,
										mp3_psaume_3_primes,
										mp3_ant_primes,
										mp3_capitule_primes,
										mp3_repond_1,
										path_martyrologe+"Fr-Mar-Int-"+db_date+".mp3",
										path_martyrologe+"Lune-"+lunaire+".mp3",
										path_martyrologe+"Fr-Mar-Txt-"+db_date+".mp3",								
									 	mp3_repond_2];														 	
				    }).fail(function() { 
				        nextOffice  = 	[$scope.theMp3Office,
										mp3_hymne_primes,
										mp3_ant_primes,
										mp3_psaume_1_primes,
										mp3_psaume_2_primes,
										mp3_psaume_3_primes,
										mp3_ant_primes,
										mp3_capitule_primes,
										mp3_repond_1,								
									 	mp3_repond_2];	       
				    })
				}
				curOffice = 0;
			    officePlayer = document.getElementById('officePlayer');	
			    officePlayer.src = $scope.theMp3Office;
				officePlayer.onended = function(){
					++curOffice;
					if(curOffice < nextOffice.length){
					    officePlayer.src = nextOffice[curOffice];
					    var p2 = document.getElementById('officePlayer');
					    var source = p2.src;
					    var res = source.split("/");
					    $("#fichiernom").append("<strong>"+ res[res.length-1] + "</strong><br/>" );
					}
				}			
			}else if($scope.office == "laudes"){
				if(tempsPascal == true){
					nextOffice  = 	[$scope.theMp3Office,
									mp3_ant_pascal,
									mp3_psaume_laudes_1,
									mp3_psaume_laudes_2,
									mp3_psaume_laudes_3,
									mp3_psaume_laudes_4,
									mp3_psaume_laudes_5,
									mp3_ant_pascal,
									mp3_capitule_laudes_pascal,
									mp3_hymne_laudes_pascal,
									mp3_antienne_benedictus,
									mp3_benedictus,
									mp3_antienne_benedictus,
									$scope.oraison,
								 	$scope.conclusion];
				}else{
					nextOffice  = 	[$scope.theMp3Office,
									mp3_ant_laudes_1,
									mp3_psaume_laudes_1,
									mp3_ant_laudes_1,
									mp3_ant_laudes_2,
									mp3_psaume_laudes_2,
									mp3_ant_laudes_2,
									mp3_ant_laudes_3,
									mp3_psaume_laudes_3,
									mp3_ant_laudes_3,
									mp3_ant_laudes_4,
									mp3_psaume_laudes_4,
									mp3_ant_laudes_4,
									mp3_ant_laudes_5,
									mp3_psaume_laudes_5,
									mp3_ant_laudes_5,
									mp3_capitule_laudes,
									mp3_hymne_laudes,
									mp3_antienne_benedictus,
									mp3_benedictus,
									mp3_antienne_benedictus,
									$scope.oraison,
								 	$scope.conclusion];								 	
				}
				curOffice = 0;
			    officePlayer = document.getElementById('officePlayer');	
			    officePlayer.src = $scope.theMp3Office;
				officePlayer.onended = function(){
					++curOffice;
					if(curOffice < nextOffice.length){
					    officePlayer.src = nextOffice[curOffice];
					    var p2 = document.getElementById('officePlayer');
					    var source = p2.src;
					    var res = source.split("/");
					    $("#fichiernom").append("<strong>"+ res[res.length-1] + "</strong><br/>" );
					}
				}
			}else if($scope.office == "tierces"){
				
				if(tempsPascal == true){
					nextOffice  = 	[$scope.theMp3Office,
									mp3_hymne_tierces,
									mp3_ant_pascal,
									mp3_psaume_1_tierces,
									mp3_psaume_2_tierces,
									mp3_psaume_3_tierces,
									mp3_ant_pascal,
									mp3_capitule_tierces_pascal,
									mp3_repond_tierces_pascal,
									$scope.oraison,
								 	$scope.conclusion];								 	
				}else{
					nextOffice  = 	[$scope.theMp3Office,
									mp3_hymne_tierces,
									mp3_ant_tierces,
									mp3_psaume_1_tierces,
									mp3_psaume_2_tierces,
									mp3_psaume_3_tierces,
									mp3_ant_tierces,
									mp3_capitule_tierces,
									mp3_repond_tierces,
									$scope.oraison,
								 	$scope.conclusion];							 								 	
				}
				curOffice = 0;
			    officePlayer = document.getElementById('officePlayer');	
			    officePlayer.src = $scope.theMp3Office;
				officePlayer.onended = function(){
					++curOffice;
					if(curOffice < nextOffice.length){
					    officePlayer.src = nextOffice[curOffice];
					    var p2 = document.getElementById('officePlayer');
					    var source = p2.src;
					    var res = source.split("/");
					    $("#fichiernom").append("<strong>"+ res[res.length-1] + "</strong><br/>" );
					}
				}
			}else if($scope.office == "sexte"){
				if(tempsPascal == true){
					nextOffice  = 	[$scope.theMp3Office,
									mp3_hymne_sextes,
									mp3_ant_pascal,
									mp3_psaume_1_sextes,
									mp3_psaume_2_sextes,
									mp3_psaume_3_sextes,
									mp3_ant_pascal,
									mp3_capitule_sextes_pascal,
									mp3_repond_sextes_pascal,
									$scope.oraison,
								 	$scope.conclusion];  								 								 
				}else{
					nextOffice  = 	[$scope.theMp3Office,
									mp3_hymne_sextes,
									mp3_ant_sextes,
									mp3_psaume_1_sextes,
									mp3_psaume_2_sextes,
									mp3_psaume_3_sextes,
									mp3_ant_sextes,
									mp3_capitule_sextes,
									mp3_repond_sextes,
									$scope.oraison,
								 	$scope.conclusion];								
				}
				curOffice = 0;
			    officePlayer = document.getElementById('officePlayer');	
			    officePlayer.src = $scope.theMp3Office;
				officePlayer.onended = function(){
					++curOffice;
					if(curOffice < nextOffice.length){
					    officePlayer.src = nextOffice[curOffice];
					    var p2 = document.getElementById('officePlayer');
					    var source = p2.src;
					    var res = source.split("/");
					    $("#fichiernom").append("<strong>"+ res[res.length-1] + "</strong><br/>" );
					}
				}
			}else if($scope.office == "nones"){				
				if(tempsPascal == true){
					nextOffice  = 	[$scope.theMp3Office,
									mp3_hymne_nones,
									mp3_ant_pascal,
									mp3_psaume_1_nones,
									mp3_psaume_2_nones,
									mp3_psaume_3_nones,
									mp3_ant_pascal,
									mp3_capitule_nones_pascal,
									mp3_repond_nones_pascal,
									$scope.oraison,
								 	$scope.conclusion];
				}else{
					nextOffice  = 	[$scope.theMp3Office,
									mp3_hymne_nones,
									mp3_ant_nones,
									mp3_psaume_1_nones,
									mp3_psaume_2_nones,
									mp3_psaume_3_nones,
									mp3_ant_nones,
									mp3_capitule_nones,
									mp3_repond_nones,
									$scope.oraison,
								 	$scope.conclusion];										
				}
				curOffice = 0;
			    officePlayer = document.getElementById('officePlayer');	
			    officePlayer.src = $scope.theMp3Office;
				officePlayer.onended = function(){
					++curOffice;
					if(curOffice < nextOffice.length){
					    officePlayer.src = nextOffice[curOffice];
					    var p2 = document.getElementById('officePlayer');
					    var source = p2.src;
					    var res = source.split("/");
					    $("#fichiernom").append("<strong>"+ res[res.length-1] + "</strong><br/>" );
					}
				}
			}else if($scope.office == "vepres"){				
				if(tempsPascal == true){
					nextOffice  = 	[$scope.theMp3Office,
									mp3_ant_pascal,
									mp3_psaume_vepres_1,
									mp3_psaume_vepres_2,
									mp3_psaume_vepres_3,
									mp3_psaume_vepres_4,
									mp3_psaume_vepres_5,
									mp3_ant_pascal,
									mp3_capitule_vepres,
									mp3_hymne_vepres_pascal,
									mp3_antienne_magnificat,
									mp3_magnificat,
									mp3_antienne_magnificat,
									$scope.oraison,
								 	$scope.conclusion];												 
				}else{
					nextOffice  = 	[$scope.theMp3Office,
									mp3_ant_vepres_1,
									mp3_psaume_vepres_1,
									mp3_ant_vepres_1,
									mp3_ant_vepres_2,
									mp3_psaume_vepres_2,
									mp3_ant_vepres_2,
									mp3_ant_vepres_3,
									mp3_psaume_vepres_3,
									mp3_ant_vepres_3,
									mp3_ant_vepres_4,
									mp3_psaume_vepres_4,
									mp3_ant_vepres_4,
									mp3_ant_vepres_5,
									mp3_psaume_vepres_5,
									mp3_ant_vepres_5,
									mp3_capitule_vepres,
									mp3_hymne_vepres,
									mp3_antienne_magnificat,
									mp3_magnificat,
									mp3_antienne_magnificat,
									$scope.oraison,
								 	$scope.conclusion];								 								
				}
				curOffice = 0;
			    officePlayer = document.getElementById('officePlayer');	
			    officePlayer.src = $scope.theMp3Office;
				officePlayer.onended = function(){
					++curOffice;
					if(curOffice < nextOffice.length){
					    officePlayer.src = nextOffice[curOffice];
					    var p2 = document.getElementById('officePlayer');
					    var source = p2.src;
					    var res = source.split("/");
					    $("#fichiernom").append("<strong>"+ res[res.length-1] + "</strong><br/>" );
					}
				}
			}else if($scope.office == "complies"){				
				if(tempsPascal == true){
					nextOffice  = 	[$scope.mp3_office_com,
									$scope.theMp3Office,
									mp3_ant_pascal,
									mp3_psaume_1_complies,
									mp3_psaume_2_complies,
									mp3_psaume_3_complies,
									mp3_ant_pascal,
									mp3_hymne_complies,
									mp3_capitule_complies,
									mp3_repond_complies,
								 	mp3_cco];
				}else{
					nextOffice  = 	[$scope.mp3_office_com,
									$scope.theMp3Office,
									mp3_ant_complies,
									mp3_psaume_1_complies,
									mp3_psaume_2_complies,
									mp3_psaume_3_complies,
									mp3_ant_complies,
									mp3_hymne_complies,
									mp3_capitule_complies,
									mp3_repond_complies,
								 	mp3_cco];
				}
				curOffice = 0;
			    officePlayer = document.getElementById('officePlayer');	
			    officePlayer.src = $scope.mp3_office_com;
				officePlayer.onended = function(){
					++curOffice;
					if(curOffice < nextOffice.length){
					    officePlayer.src = nextOffice[curOffice];
					    var p2 = document.getElementById('officePlayer');
					    var source = p2.src;
					    var res = source.split("/");
					    $("#fichiernom").append("<strong>"+ res[res.length-1] + "</strong><br/>" );
					}
				}
			}else if($scope.office == "complies-lh"){
				var jourEnLettre = $scope.getDayString($scope.dayNum);
				if(jourEnLettre == "Mercredi" || jourEnLettre == "Samedi"){
					nextOffice  = 	[mp3_lh_office,
									mp3_lh_office_complies,
									mp3_lh_hymne,
									mp3_lh_antienne,
									mp3_lh_psaume,
									mp3_lh_antienne,
									mp3_lh_antienne2,
									mp3_lh_psaume2,
									mp3_lh_antienne2,
									mp3_lh_capitule,
									mp3_lh_repond,
									mp3_lh_can,
									mp3_lh_ora,
									mp3_lh_noc,
								 	mp3_lh_cco];
				}else{
					nextOffice  = 	[mp3_lh_office,
									mp3_lh_office_complies,
									mp3_lh_hymne,
									mp3_lh_antienne,
									mp3_lh_psaume,
									mp3_lh_antienne,																		
									mp3_lh_capitule,
									mp3_lh_repond,
									mp3_lh_can,
									mp3_lh_ora,
									mp3_lh_noc,
								 	mp3_lh_cco];										 											
				}
				curOffice = 0;
			    officePlayer = document.getElementById('officePlayer');	
			    officePlayer.src = "Media/Audio/oLa-InA-v0.mp3";
				officePlayer.onended = function(){
					++curOffice;
					if(curOffice < nextOffice.length){
					    officePlayer.src = nextOffice[curOffice];
					    var p2 = document.getElementById('officePlayer');
					    var source = p2.src;
					    var res = source.split("/");
					    $("#fichiernom").append("<strong>"+ res[res.length-1] + "</strong><br/>" );
					}
				}
			}
		}

	}
	// $scope.getMp3Office();
	// console.log(mp3_lh_cco);

	// #################################
	// - FULL SCREEN MODE -
	// #################################

	var full = 0;
	$(document).keyup(function(e) {
	  if(e.keyCode== 27) {
	    $scope.escKey();	    
	  }
	});

	$scope.escKey = function() {
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

	$scope.fullScreen = function() {
		if(full==0){
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
		  $scope.escKey();
		}
	}  

}]);

askitApp.controller('breviariumCtrl', ['$scope', function($scope) {		
	
}]);

askitApp.controller('veilleurCtrl', ['$scope', function($scope) {		
	
}]);

askitApp.controller('temoinCtrl', ['$scope', function($scope) {		
	
}]);

askitApp.controller('engageCtrl', ['$scope', function($scope) {		
	
}]);

askitApp.controller('entrainementCtrl', ['$scope', function($scope) {		
	
}]);

function getMp3Office(annee, mois, jour, office){
	var mp3_office = null;
	if(annee == 2017 && mois == 3 && jour > 1 && (office == "matines" || office == "laudes" || office == "prime" || office == "tierces" || office == "sexte" || office == "vepres")){
	  mp3_office = cordova.file.externalRootDirectory+"Hicvox/Audio/eLa-InL-v0.mp3";
	}

	if(annee == 2017 && mois == 4 && jour < 16 && (office == "matines" || office == "laudes" || office == "prime" || office == "tierces" || office == "sexte" || office == "vepres")){
	  mp3_office = cordova.file.externalRootDirectory+"Hicvox/Audio/eLa-InL-v0.mp3";
	}

	if(annee == 2017 && mois == 4 && jour < 16 && office == "prime"){
	  mp3_office = cordova.file.externalRootDirectory+"Hicvox/Audio/eLa-InL-v0.mp3";
	}
	if(annee == 2017 && mois == 12 && jour > 3 && jour < 25 && (office == "matines" || office == "laudes" || office == "prime" || office == "tierces" || office == "sexte" || office == "vepres")){
	  mp3_office = cordova.file.externalRootDirectory+"Hicvox/Audio/eLa-InL-v0.mp3";
	}
	// #################################
	// - 2018 -
	// #################################
	if(annee == 2018 && mois == 3 && jour > 14 && (office == "matines" || office == "laudes" || office == "prime" || office == "tierces" || office == "sexte" || office == "vepres")){
	  mp3_office = cordova.file.externalRootDirectory+"Hicvox/Audio/eLa-InL-v0.mp3";
	}

	if(annee == 2018 && mois == 4 && jour < 1 && (office == "matines" || office == "laudes" || office == "prime" || office == "tierces" || office == "sexte" || office == "vepres")){
	  mp3_office = cordova.file.externalRootDirectory+"Hicvox/Audio/eLa-InL-v0.mp3";
	}
	if(annee == 2018 && mois == 12 && jour >= 2 && jour < 25 && (office == "matines" || office == "laudes" || office == "prime" || office == "tierces" || office == "sexte" || office == "vepres")){
	  mp3_office = cordova.file.externalRootDirectory+"Hicvox/Audio/eLa-InL-v0.mp3";
	}
	// #################################
	// - 2019 -
	// #################################
	if(annee == 2019 && mois == 3 && jour > 6 && (office == "matines" || office == "laudes" || office == "prime" || office == "tierces" || office == "sexte" || office == "vepres")){
	  mp3_office = cordova.file.externalRootDirectory+"Hicvox/Audio/eLa-InL-v0.mp3";
	}

	if(annee == 2019 && mois == 4 && jour < 21 && (office == "matines" || office == "laudes" || office == "prime" || office == "tierces" || office == "sexte" || office == "vepres")){
	  mp3_office = cordova.file.externalRootDirectory+"Hicvox/Audio/eLa-InL-v0.mp3";
	}
	if(annee == 2019 && mois == 12 && jour > 1 && jour < 25 && (office == "matines" || office == "laudes" || office == "prime" || office == "tierces" || office == "sexte" || office == "vepres")){
	  mp3_office = cordova.file.externalRootDirectory+"Hicvox/Audio/eLa-InL-v0.mp3";
	}
	// #################################
	// - 2020 -
	// #################################
	if(annee == 2020 && mois == 2 && jour > 26 && (office == "matines" || office == "laudes" || office == "prime" || office == "tierces" || office == "sexte" || office == "vepres")){
	  mp3_office = cordova.file.externalRootDirectory+"Hicvox/Audio/eLa-InL-v0.mp3";
	}

	if(annee == 2020 && mois == 4 && jour < 12 && (office == "matines" || office == "laudes" || office == "prime" || office == "tierces" || office == "sexte" || office == "vepres")){
	  mp3_office = cordova.file.externalRootDirectory+"Hicvox/Audio/eLa-InL-v0.mp3";
	}
	if(annee == 2020 && mois == 11 && jour > 29 && (office == "matines" || office == "laudes" || office == "prime" || office == "tierces" || office == "sexte" || office == "vepres")){
	  mp3_office = cordova.file.externalRootDirectory+"Hicvox/Audio/eLa-InL-v0.mp3";
	}


	if(annee == 2020 && mois == 12 && jour > 1 && jour < 25 && (office == "matines" || office == "laudes" || office == "prime" || office == "tierces" || office == "sexte" || office == "vepres")){
	  mp3_office = cordova.file.externalRootDirectory+"Hicvox/Audio/eLa-InL-v0.mp3";
	}
	// #################################
	// - 2021 -
	// #################################
	if(annee == 2018 && mois == 2 && jour > 21 && (office == "matines" || office == "laudes" || office == "prime" || office == "tierces" || office == "sexte" || office == "vepres")){
	  mp3_office = cordova.file.externalRootDirectory+"Hicvox/Audio/eLa-InL-v0.mp3";
	}

	if(annee == 2018 && mois == 4 && jour < 4 && (office == "matines" || office == "laudes" || office == "prime" || office == "tierces" || office == "sexte" || office == "vepres")){
	  mp3_office = cordova.file.externalRootDirectory+"Hicvox/Audio/eLa-InL-v0.mp3";
	}
	if(annee == 2021 && mois == 11 && jour > 28 && (office == "matines" || office == "laudes" || office == "prime" || office == "tierces" || office == "sexte" || office == "vepres")){
	  mp3_office = cordova.file.externalRootDirectory+"Hicvox/Audio/eLa-InL-v0.mp3";
	}


	if(annee == 2021 && mois == 12 && jour > 1 && jour < 25 && (office == "matines" || office == "laudes" || office == "prime" || office == "tierces" || office == "sexte" || office == "vepres")){
	  mp3_office = cordova.file.externalRootDirectory+"Hicvox/Audio/eLa-InL-v0.mp3";
	}
	// #################################
	// - 2022 -
	// #################################
	if(annee == 2022 && mois == 3 && jour > 2 && (office == "matines" || office == "laudes" || office == "prime" || office == "tierces" || office == "sexte" || office == "vepres")){
	  mp3_office = cordova.file.externalRootDirectory+"Hicvox/Audio/eLa-InL-v0.mp3";
	}

	if(annee == 2022 && mois == 4 && jour < 17 && (office == "matines" || office == "laudes" || office == "prime" || office == "tierces" || office == "sexte" || office == "vepres")){
	  mp3_office = cordova.file.externalRootDirectory+"Hicvox/Audio/eLa-InL-v0.mp3";
	}
	if(annee == 2021 && mois == 11 && jour > 27 && (office == "matines" || office == "laudes" || office == "prime" || office == "tierces" || office == "sexte" || office == "vepres")){
	  mp3_office = cordova.file.externalRootDirectory+"Hicvox/Audio/eLa-InL-v0.mp3";
	}


	if(annee == 2021 && mois == 12 && jour > 1 && jour < 25 && (office == "matines" || office == "laudes" || office == "prime" || office == "tierces" || office == "sexte" || office == "vepres")){
	  mp3_office = cordova.file.externalRootDirectory+"Hicvox/Audio/eLa-InL-v0.mp3";
	}
	// #################################
	// - 2023 -
	// #################################
	if(annee == 2023 && mois == 2 && jour > 22 && (office == "matines" || office == "laudes" || office == "prime" || office == "tierces" || office == "sexte" || office == "vepres")){
	  mp3_office = cordova.file.externalRootDirectory+"Hicvox/Audio/eLa-InL-v0.mp3";
	}

	if(annee == 2023 && mois == 3 && jour > 1 && (office == "matines" || office == "laudes" || office == "prime" || office == "tierces" || office == "sexte" || office == "vepres")){
	  mp3_office = cordova.file.externalRootDirectory+"Hicvox/Audio/eLa-InL-v0.mp3";
	}
	if(annee == 2023 && mois == 12 && jour > 3 && jour < 25 && (office == "matines" || office == "laudes" || office == "prime" || office == "tierces" || office == "sexte" || office == "vepres")){
	  mp3_office = cordova.file.externalRootDirectory+"Hicvox/Audio/eLa-InL-v0.mp3";
	}
	// #################################
	// - 2024 -
	// #################################
	if(annee == 2024 && mois == 2 && jour > 14 && (office == "matines" || office == "laudes" || office == "prime" || office == "tierces" || office == "sexte" || office == "vepres")){
	  mp3_office = cordova.file.externalRootDirectory+"Hicvox/Audio/eLa-InL-v0.mp3";
	}

	if(annee == 2024 && mois == 3 && jour > 31 && (office == "matines" || office == "laudes" || office == "prime" || office == "tierces" || office == "sexte" || office == "vepres")){
	  mp3_office = cordova.file.externalRootDirectory+"Hicvox/Audio/eLa-InL-v0.mp3";
	}
	if(annee == 2024 && mois == 12 && jour >= 1 && jour < 25 && (office == "matines" || office == "laudes" || office == "prime" || office == "tierces" || office == "sexte" || office == "vepres")){
	  mp3_office = cordova.file.externalRootDirectory+"Hicvox/Audio/eLa-InL-v0.mp3";
	}
	// #################################
	// - 2025 -
	// #################################
	if(annee == 2025 && mois == 3 && jour > 5 && (office == "matines" || office == "laudes" || office == "prime" || office == "tierces" || office == "sexte" || office == "vepres")){
	  mp3_office = cordova.file.externalRootDirectory+"Hicvox/Audio/eLa-InL-v0.mp3";
	}

	if(annee == 2025 && mois == 4 && jour < 20 && (office == "matines" || office == "laudes" || office == "prime" || office == "tierces" || office == "sexte" || office == "vepres")){
	  mp3_office = cordova.file.externalRootDirectory+"Hicvox/Audio/eLa-InL-v0.mp3";
	}
	if(annee == 2025 && mois == 11 && jour > 30 && (office == "matines" || office == "laudes" || office == "prime" || office == "tierces" || office == "sexte" || office == "vepres")){
	  mp3_office = cordova.file.externalRootDirectory+"Hicvox/Audio/eLa-InL-v0.mp3";
	}


	if(annee == 2025 && mois == 12 && jour > 1 && jour < 25 && (office == "matines" || office == "laudes" || office == "prime" || office == "tierces" || office == "sexte" || office == "vepres")){
	  mp3_office = cordova.file.externalRootDirectory+"Hicvox/Audio/eLa-InL-v0.mp3";
	}
	// #################################
	// - 2026 -
	// #################################
	if(annee == 2026 && mois == 2 && jour >= 18 && (office == "matines" || office == "laudes" || office == "prime" || office == "tierces" || office == "sexte" || office == "vepres")){
	  mp3_office = cordova.file.externalRootDirectory+"Hicvox/Audio/eLa-InL-v0.mp3";
	}

	if(annee == 2026 && mois == 3 && jour < 31 && (office == "matines" || office == "laudes" || office == "prime" || office == "tierces" || office == "sexte" || office == "vepres")){
	  mp3_office = cordova.file.externalRootDirectory+"Hicvox/Audio/eLa-InL-v0.mp3";
	}

	if(annee == 2026 && mois == 4 && jour < 5 && (office == "matines" || office == "laudes" || office == "prime" || office == "tierces" || office == "sexte" || office == "vepres")){
	  mp3_office = cordova.file.externalRootDirectory+"Hicvox/Audio/eLa-InL-v0.mp3";
	}
	if(annee == 2026 && mois == 11 && jour > 29 && (office == "matines" || office == "laudes" || office == "prime" || office == "tierces" || office == "sexte" || office == "vepres")){
	  mp3_office = cordova.file.externalRootDirectory+"Hicvox/Audio/eLa-InL-v0.mp3";
	}


	if(annee == 2026 && mois == 12 && jour > 1 && jour < 25 && (office == "matines" || office == "laudes" || office == "prime" || office == "tierces" || office == "sexte" || office == "vepres")){
	  mp3_office = cordova.file.externalRootDirectory+"Hicvox/Audio/eLa-InL-v0.mp3";
	}
	// #################################
	// - 2027 -
	// #################################
	if(annee == 2027 && mois == 2 && jour > 10 && (office == "matines" || office == "laudes" || office == "prime" || office == "tierces" || office == "sexte" || office == "vepres")){
	  mp3_office = cordova.file.externalRootDirectory+"Hicvox/Audio/eLa-InL-v0.mp3";
	}

	if(annee == 2027 && mois == 3 && jour < 28 && (office == "matines" || office == "laudes" || office == "prime" || office == "tierces" || office == "sexte" || office == "vepres")){
	  mp3_office = cordova.file.externalRootDirectory+"Hicvox/Audio/eLa-InL-v0.mp3";
	}
	if(annee == 2026 && mois == 11 && jour > 28 && (office == "matines" || office == "laudes" || office == "prime" || office == "tierces" || office == "sexte" || office == "vepres")){
	  mp3_office = cordova.file.externalRootDirectory+"Hicvox/Audio/eLa-InL-v0.mp3";
	}


	if(annee == 2026 && mois == 12 && jour > 1 && jour < 25 && (office == "matines" || office == "laudes" || office == "prime" || office == "tierces" || office == "sexte" || office == "vepres")){
	  mp3_office = cordova.file.externalRootDirectory+"Hicvox/Audio/eLa-InL-v0.mp3";
	}
	// #################################
	// - 2028 -
	// #################################
	if(annee == 2028 && mois == 3 && jour > 1 && (office == "matines" || office == "laudes" || office == "prime" || office == "tierces" || office == "sexte" || office == "vepres")){
	  mp3_office = cordova.file.externalRootDirectory+"Hicvox/Audio/eLa-InL-v0.mp3";
	}

	if(annee == 2028 && mois == 4 && jour < 16 && (office == "matines" || office == "laudes" || office == "prime" || office == "tierces" || office == "sexte" || office == "vepres")){
	  mp3_office = cordova.file.externalRootDirectory+"Hicvox/Audio/eLa-InL-v0.mp3";
	}
	if(annee == 2028 && mois == 12 && jour > 3 && jour < 25 && (office == "matines" || office == "laudes" || office == "prime" || office == "tierces" || office == "sexte" || office == "vepres")){
	  mp3_office = cordova.file.externalRootDirectory+"Hicvox/Audio/eLa-InL-v0.mp3";
	}
	// #################################
	// - 2029 -
	// #################################
	if(annee == 2029 && mois == 2 && jour > 14 && (office == "matines" || office == "laudes" || office == "prime" || office == "tierces" || office == "sexte" || office == "vepres")){
	  mp3_office = cordova.file.externalRootDirectory+"Hicvox/Audio/eLa-InL-v0.mp3";
	}

	if(annee == 2029 && mois == 3 && jour > 1 && (office == "matines" || office == "laudes" || office == "prime" || office == "tierces" || office == "sexte" || office == "vepres")){
	  mp3_office = cordova.file.externalRootDirectory+"Hicvox/Audio/eLa-InL-v0.mp3";
	}

	if(annee == 2029 && mois == 4 && jour < 1 && (office == "matines" || office == "laudes" || office == "prime" || office == "tierces" || office == "sexte" || office == "vepres")){
	  mp3_office = cordova.file.externalRootDirectory+"Hicvox/Audio/eLa-InL-v0.mp3";
	}
	if(annee == 2029 && mois == 12 && jour >= 2 && jour < 25 && (office == "matines" || office == "laudes" || office == "prime" || office == "tierces" || office == "sexte" || office == "vepres")){
	  mp3_office = cordova.file.externalRootDirectory+"Hicvox/Audio/eLa-InL-v0.mp3";
	}
	// #################################
	// - 2030 -
	// #################################
	if(annee == 2030 && mois == 3 && jour > 6 && (office == "matines" || office == "laudes" || office == "prime" || office == "tierces" || office == "sexte" || office == "vepres")){
	  mp3_office = cordova.file.externalRootDirectory+"Hicvox/Audio/eLa-InL-v0.mp3";
	}

	if(annee == 2030 && mois == 4 && jour < 21 && (office == "matines" || office == "laudes" || office == "prime" || office == "tierces" || office == "sexte" || office == "vepres")){
	  mp3_office = cordova.file.externalRootDirectory+"Hicvox/Audio/eLa-InL-v0.mp3";
	}
	if(annee == 2030 && mois == 12 && jour > 1 && jour < 25 && (office == "matines" || office == "laudes" || office == "prime" || office == "tierces" || office == "sexte" || office == "vepres")){
	  mp3_office = cordova.file.externalRootDirectory+"Hicvox/Audio/eLa-InL-v0.mp3";
	}

	return mp3_office;
}