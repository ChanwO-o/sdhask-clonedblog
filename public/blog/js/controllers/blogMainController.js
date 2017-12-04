angular.module("WebsiteApp").controller("blogMainController", function($scope, $http) {
        
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
            console.log("selected blog id is: " + id);
        }
        
        init();
    });