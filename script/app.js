var compSol = angular.module( 'compSol' , [ 'ngRoute' ] );

compSol.config( [ '$routeProvider', function( $routeProvider ) {
	$routeProvider.
		when( '/home' , {
			templateUrl: 'home.html',
			controller: 'MainCtrl'
		}).
		when( '/about' , {
			templateUrl: 'about.html',
			controller: 'AboutCtrl'
		});
}]);

compSol.controller( 'MainCtrl' , [ function() {
	console.log( 'This is main controller' );
}]);