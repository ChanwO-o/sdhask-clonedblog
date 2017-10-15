(function () {
    var app = angular.module("WebsiteApp", [] );
    
    /**
     * Portfolio-related controllers
     */
    app.controller("PortfolioController", function($scope, $http) {
        
        function init() {
            console.log("PortfolioController app.js init()");
        }
        
        function createJson() {
            var text = '{ "title" : "t1", "body" : "b1"}';
            var obj = JSON.parse(text);
            console.log("created JSON obj @ createJson()");
            console.log(obj);
            $http
                .post("/api/blogposts", obj) // where I'm listening for incoming requests
                .then(console.log("post request made to /api/blogposts @ createJson()"));
        }
        
        init();
        createJson();
    });
    
    /**
     * Blog-related controllers
     */
    app.controller("BlogMainController", function($scope) {
        console.log("BlogMainController app.js 2");
    });
    
    // app.controller("BlogAboutController", BlogAboutController);
    
    // app.controller("BlogVisitorsController", BlogVisitorsController);
    
    
    
}) ();