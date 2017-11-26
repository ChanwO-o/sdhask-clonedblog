angular.module("WebsiteApp").controller("blogMainController", function($scope, $http) {
        
        var getAllPostsRequest = $http.get("/api/blogposts")
            .then(function (allBlogPosts) {
                $scope.blogpostlist = allBlogPosts.data;
                return allBlogPosts.data;
            });
        
        getAllPostsRequest.then(function (allBlogPosts) {
            console.log(allBlogPosts);
            
        })
        
        
        
        
        
        
        
        function init() {
            console.log("blogMainController app.js init()");
            loadPosts(); // loads up to 3 blogposts initially
        }
        
        
        function loadPosts() {
            // get value from getAllPosts()
            // represent each data object as condensed blogpost
        }
        
        // init();
    });