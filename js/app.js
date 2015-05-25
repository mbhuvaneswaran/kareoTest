var app=angular.module("App",[]);
app.controller("ModalController",["$scope",function($scope){

	$scope.openModal=true;
	$scope.closeModal=function(event){
		debugger;
		if(event.target==event.currentTarget){
			$scope.openModal=false;
		}
	}
}])