angular.module("WebsiteApp").controller("blogMainController", function($scope, $http, sharedata) {
        
        
        function init() {
            createTestJson();
        }
        
        $scope.checkLogin = function() {
            var idtextbot = angular.element(document.getElementById("logininput"));
            console.log("received input id as: " + idtextbot.val());
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