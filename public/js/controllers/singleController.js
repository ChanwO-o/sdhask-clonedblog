angular.module("WebsiteApp").controller("singleController", function($scope, $http, sharedata) {
    
    function init() {
        console.log("singleController.js init()");
        
        $scope.schedulecart = [[]];
    }
    
    $scope.addSchedule = function() {
        var dayselected = angular.element(document.getElementById("day")).val();
        var starttimeselected = angular.element(document.getElementById("starttime")).val();
        var endtimeselected = angular.element(document.getElementById("endtime")).val();
        
        var starttimemins = timeStringToInt(starttimeselected);
        var endtimemins = timeStringToInt(endtimeselected);
        
        console.log("day: ", dayselected);
        console.log("starttime: ", starttimemins);
        console.log("endtimeselected: ", endtimemins);
        
        if (starttimeselected == "") {
            console.log("did not enter start time");
            angular.element(document.getElementById("warningtext")).text("Enter start time!");
        }
        else if (endtimeselected == "") {
            console.log("did not enter end time");
            angular.element(document.getElementById("warningtext")).text("Enter end time!");
        }
        else if (starttimemins == endtimemins) {
            console.log("start time can't equal end time");
            angular.element(document.getElementById("warningtext")).text("Start and end time are equal!");
        }
        else if (starttimemins > endtimemins) {
            console.log("can't end before you start");
            angular.element(document.getElementById("warningtext")).text("Can't end before you start.");
        }
        else {
            console.log("PASS");
            angular.element(document.getElementById("warningtext")).text("Schedule added");
            var schedarray = []; // array of four numbers
            $scope.schedulecart.push("");
        }
    }
        
        
    function timeStringToInt(timestr) {
        var hour = timestr.split(":")[0];
        var minute = timestr.split(":")[1];
        
        return parseInt(hour, 10) * 60 + parseInt(minute, 10);
    }
    
    function scheduleToTableString() {
        
    }
    
    init();
});