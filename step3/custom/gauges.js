'use strict';

angular.module( 'components', [] ).directive( 'gauge', function () {
	return {
		restrict: 'E',
		replace: true,
		scope: {
			label: "@",
			min: "=",
			max: "=",
			value: "="
		},
		template: "<div>{{label}}: {{min}} - {{value}} - {{max}}</div>"
	}
} );

function MyController( $scope ) {
	$scope.pval = 10;
	$scope.oval = 0;
	$scope.cval = -10;

	$scope.randomize = function() {
		$scope.pval = ( Math.random() * 100 ) - 50;
		$scope.oval = ( Math.random() * 100 ) - 50;
		$scope.cval = ( Math.random() * 100 ) - 50;
	}
}
