angular.module("WebsiteApp").controller("singleController", function($scope, $http, sharedata) {
    
    function init() {
        console.log("singleController.js init()");
        
    }
    
    $scope.addSchedule = function() {
            var dayselected = angular.element(document.getElementById("day")).val();
            var starttimeselected = angular.element(document.getElementById("starttime")).val();
            var endtimeselected = angular.element(document.getElementById("endtime")).val();
            
            console.log("day: ", dayselected);
            console.log("starttime: ", starttimeselected);
            console.log("endtimeselected: ", endtimeselected);
            
            if (starttimeselected == "") {
                console.log("did not enter start time");
                angular.element(document.getElementById("warningtext")).text("Enter start time!");
            }
            else if (endtimeselected == "") {
                console.log("did not enter end time");
                angular.element(document.getElementById("warningtext")).text("Enter end time!");
            }
        }
    
    
    init();
});