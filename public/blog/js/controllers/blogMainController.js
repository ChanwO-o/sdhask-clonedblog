app.controller("blogMainController", function($scope, $http, sharedata) {
        
        var getAllPostsRequest = $http.get("/api/blogposts")
            .then(function (allBlogPosts) {
                $scope.blogpostlist = allBlogPosts.data;
                return allBlogPosts.data;
            });
        
        getAllPostsRequest.then(function (allBlogPosts) {
            console.log(allBlogPosts);
            // console.log("bp length is: " + angular.element("#div.blog-post").length);
        });
        
        
        
        
        
        
        
        function init() {
        }
        
        
        $scope.readPost = function(id) {
            console.log("setting viewBlogId as: " + id);
            sharedata.setViewBlogId(id);
        }
        
        init();
    });