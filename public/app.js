(function () {
    var app = angular.module("WebsiteApp", ['ngRoute'] );
    
    app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'partials/blogMain.html',
                controller: 'blogMainController'
            });
        
        $locationProvider.html5Mode({enabled: true, requireBase: false});
    }]);

}) ();