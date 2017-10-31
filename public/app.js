(function () {
    var app = angular.module("WebsiteApp", [] );
    
    /**
     * Portfolio-related controllers
     */
    app.controller("PortfolioController", function($scope, $http) {
        
        function init() {
            console.log("PortfolioController app.js init()");
        }
        
        init();
    });
    
    /**
     * Blog-related controllers
     */
    app.controller("BlogMainController", function($scope, $http) {
        
        $scope.readMore = function() {
            alert("readMore() clicked");
            // $state.go("/tab/newpost");
        }
        
        function init() {
            console.log("BlogMainController app.js init()");
            createJson();
            loadPosts();
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
        
        /**
         * Load up to 3 recent blogposts on blog main
         */
        function loadPosts() {
            
        }
        
        init();
    });
    
    // app.controller("BlogAboutController", BlogAboutController);
    
    // app.controller("BlogVisitorsController", BlogVisitorsController);
    
    
    
}) ();