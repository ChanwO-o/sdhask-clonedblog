(function () {
    var app = angular.module("PortfolioApp", [] );
    
    /**
     * Portfolio-related controllers
     */
    app.controller("PortfolioController", function($scope) {
        console.log("PortfolioController app.js 1");
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