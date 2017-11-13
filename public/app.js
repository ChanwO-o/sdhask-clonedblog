(function () {
    var app = angular.module("WebsiteApp", ['ngRoute'] );
    
    app.config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/', {
            templateUrl: 'partials/blogMain.html',
            controller: 'blogMainController'
        });
    }]);

}) ();