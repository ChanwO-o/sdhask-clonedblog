angular.module("WebsiteApp").controller("blogMainController", function($scope, $http, sharedata) {
        
        
        function init() {
            // createTestJson();
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
            console.log(text);
            var obj = JSON.parse(text);
            
            $http
                .post("/api/schedules", obj) // where I'm listening for incoming requests
                .then(console.log("post request made to /api/schedules for ", obj));
            
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