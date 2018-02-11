app.controller("blogMainController", function($scope, $http, sharedata) {
        
        var getAllPostsRequest = $http.get("/api/blogposts")
            .then(function (allBlogPosts) {
                $scope.blogpostlist = allBlogPosts.data;
                return allBlogPosts.data;
            });
        
        function init() {
        }
        
        
        $scope.readPost = function(blogpost) {
            console.log("setting viewBlog as: " + blogpost);
            sharedata.setViewBlog(blogpost);
        }
        
        $scope.summarizePost = function(blogpost) {
            var words = 5;
            var body = blogpost.body;
            var summary = "";
            
            // assume html is in correct format
            var pStart = body.search('<p>');
            
            if (pStart != -1) {
                var pEnd = body.search('</p>');
                var text = body.substring(pStart + 3, pEnd).split();
                
                // add n words as summary
                // while (words > 0) {
                    
                //     words--;
                // }
            }
            summary += text;
            return summary;
        }
        
        // $scope.testIndex = function(index) {
        //     console.log("index is " + index);
        // }
        
        init();
    });