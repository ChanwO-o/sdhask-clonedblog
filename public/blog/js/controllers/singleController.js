app.controller("singleController", function($scope, $http, sharedata) {
    
    function init() {
        var post = sharedata.getViewBlog();
        console.log("from single init():");
        console.log(post);
        
        // console.log($http({
        //   url: "/api/blogposts",
        //   method: "GET",
        //   params: {_id: postId}
        // }));
    }
    
    
    init();
});