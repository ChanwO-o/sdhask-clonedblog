    var app = angular.module("WebsiteApp", ['ngRoute', 'ngSanitize'] );
    
    app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'partials/blogMain.html',
                controller: 'blogMainController'
            })
            .when('/blog', {
                templateUrl: 'partials/single.html',
                controller: 'singleController'
            })
            .when('/singlesample', {
                templateUrl: 'partials/singlesample.html'
            })
            .otherwise({
                redirectTo: '/'
            });
        
        $locationProvider.html5Mode({enabled: true, requireBase: false});
    }]);
    
    
    /**
     * Hide blogpost elements from blogMain after ng-repeat finishes rendering
     */
    app.directive("repeatEnd", function() {
        return function(scope, element, attrs) {
            if (scope.$last) {
                var list = document.getElementsByClassName("blog-post");
                console.log(list.length);
                
                for (var i = 4; i < list.length; ++i) {
                    console.log('hiding post#' + i);
                    list.item(i).style.display = "none";
                }
            }
        };
    });
    
    
    app.service('sharedata', function() {
        
        // this.testfunc = function() { console.log("from sharedata service"); }
        
        var viewBlog = {};
        
        this.getViewBlog = function() { return viewBlog; }
        this.setViewBlog = function(bp) { viewBlog = bp; }
    });