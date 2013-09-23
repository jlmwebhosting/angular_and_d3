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
		compile: function( tElem ) {
			return {
				post: function( scope, iElement ) {
					scope.element = iElement;
					console.log( "in compile: " + scope.element[0].attributes["label"].value );
					return scope.element;
				}
			}
		},
		controller: function( $scope ) {
			console.log( "in controller: " + $scope.element );

			$scope.$watch( 'element', function() {
				if ( $scope.element && null == $scope.gauge )
					console.log( "ready: " + $scope.element[0].attributes["label"].value );
			} );
		}
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
