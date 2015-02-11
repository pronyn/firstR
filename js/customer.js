var customer = angular.module('customer', []);
		customer.controller('customerController', function($scope, $http) {
			$scope.master = {firstName: "John", lastName: "Doe"};
		    $scope.reset = function() {
		        $scope.user = angular.copy($scope.master);
		    };
		    $scope.reset();
			$scope.count = 0;
			$scope.myVar = true;
			$scope.toggle = function(){
				$scope.myVar = !$scope.myVar;
			};
		    $http.get("http://www.w3schools.com/website/Customers_JSON.php")
		    .success(function(response){
		    	$scope.names =response;
		    	});


});