    var app = angular.module("WebsiteApp", ['ngRoute'] );
    
    app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
        $routeProvider
            .when('/blog', {
                templateUrl: 'partials/blogMain.html',
                controller: 'blogMainController'
            })
            .when('/blog/single', {
                templateUrl: 'partials/single.html',
                controller: 'singleController'
            });
        
        $locationProvider.html5Mode({enabled: true, requireBase: false});
    }]);
    
    
    app.service('sharedata', function() {
        
        // this.testfunc = function() { console.log("from sharedata service"); }
        
        var viewBlogId = 'DEFAULT_ID';
        
        this.getViewBlogId = function() { return viewBlogId; }
        this.setViewBlogId = function(id) { viewBlogId = id; }
    });