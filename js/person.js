var person = angular.module('person', []);
		person.controller('personController', function($scope) {
		    $scope.firstName="John";
		    $scope.lastName="Doe";
		    $scope.fullName=function(){
		    	return $scope.firstName+", "+$scope.lastName;
		    };
});