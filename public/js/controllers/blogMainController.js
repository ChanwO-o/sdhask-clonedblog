angular.module("WebsiteApp").controller("blogMainController", function($scope, $http, sharedata) {
        
        
        function init() {
            // createTestJson();
            $scope.link = '';
        }
        
        $scope.checkLogin = function() {
            var idtextbot = angular.element(document.getElementById("logininput"));
            console.log("received input id as: " + idtextbot.val());
            
            // should check if id exists, but just add anyways
            // $http({
            //     url: "/api/blogposts",
            //     method: "GET",
            //     data: {monday: 1}
            // })
            // .then(function success(response) {
            //     console.log("success ", response);
            // }, function error(response) {
            //     console.log("error ", response);
            // });
            
            
        }
        
        $scope.createNewUser = function() {
            var idtextbot = angular.element(document.getElementById("logininput"));
            var text = '{ "userid" : "' + idtextbot.val() + '"}';
            // console.log("text is ", text);
            
            if (idtextbot.val() != "") {
                var obj = JSON.parse(text);
                $http
                    .post("/api/schedules", obj) // where I'm listening for incoming requests
                    .then(console.log("user created for ", obj));
                
                console.log("proceeding with login");
                $scope.link = '/blog';
                // window.location.href='https://chanwoopark-blog-cloned-chanw0o.c9users.io/blog';
                
            } else {
                console.log("id length is 0! user not created");
            }
            
            
            
        }
        
        
        function createTestJson() {
            var text = '{ "userid" : "id here", "monday" : 2 }';
            var obj = JSON.parse(text);
            console.log("created JSON obj @ createJson()", obj);
            
            $http
                .post("/api/schedules", obj) // where I'm listening for incoming requests
                .then(console.log("post request made to /api/schedules @ createJson()"));
        }
        
        
        
        init();
    });