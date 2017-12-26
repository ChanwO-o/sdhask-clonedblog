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