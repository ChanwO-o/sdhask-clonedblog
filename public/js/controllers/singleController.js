angular.module("WebsiteApp").controller("singleController", function($scope, $http, sharedata) {
    
    function init() {
        console.log("singleController.js init()");
        var post = sharedata.getViewBlog();
        $scope.singlepost = post;
        $scope.singlepostbody = post.body;
        
        console.log(post.posted);
    }
    
    
    init();
});