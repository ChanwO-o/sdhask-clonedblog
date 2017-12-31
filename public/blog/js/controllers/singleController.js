app.controller("singleController", function($scope, $http, sharedata) {
    
    function init() {
        var post = sharedata.getViewBlog();
        $scope.singlepost = post;
        
        console.log(post.posted);
    }
    
    
    init();
});