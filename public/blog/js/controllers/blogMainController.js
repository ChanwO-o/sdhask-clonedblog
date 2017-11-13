angular.module("WebsiteApp").controller("blogMainController", function($scope, $http) {
        
        $scope.readMore = function() {
            alert("readMore() clicked");
            // $state.go("/tab/newpost");
        }
        
        function init() {
            console.log("blogMainController app.js init()");
            createJson();
            // loadPosts(); // loads up to 3 blogposts initially
        }
        
        function createJson() {
            var text = '{ "title" : "t1", "body" : "<h1>My First Heading</h1> <p>My first paragraph.</p>" }';
            var obj = JSON.parse(text);
            console.log("created JSON obj @ createJson()");
            console.log(obj);
            $http
                .post("/api/blogposts", obj) // where I'm listening for incoming requests
                .then(console.log("post request made to /api/blogposts @ createJson()"));
        }
        
        function getAllPosts() { // retrieve all latest blogposts in database and render on main page
            $http
                .get("/api/blogposts") // restful syntax interprets this as all blogposts // get() returns client-side promise object which expects response from server
                .then(
                    function (allBlogPosts) {
                        $scope.blogpostlist = allBlogPosts.data; // render post array (data portion of response) at {{blogpostlist}}
                    }
                );
        }
        
        init();
    });