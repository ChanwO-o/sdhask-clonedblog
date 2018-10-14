angular.module("WebsiteApp").controller("singleController", function($scope, $http, sharedata) {
    
    function init() {
        console.log("singleController.js init()");
        
        $scope.schedulecart = [];
    }
    
    $scope.addSchedule = function() {
        var dayselected = angular.element(document.getElementById("day")).val(); // raw strings (monday, 14:00, etc)
        var starttimeselected = angular.element(document.getElementById("starttime")).val();
        var endtimeselected = angular.element(document.getElementById("endtime")).val();
        
        var starttimetotalmins = timeStringToInt(starttimeselected); // total number of minutes in int
        var endtimetotalmins = timeStringToInt(endtimeselected);
        
        
        console.log("day: ", dayselected);
        console.log("starttime: ", starttimetotalmins);
        console.log("endtimeselected: ", endtimetotalmins);
        
        if (starttimeselected == "") {
            // console.log("did not enter start time");
            angular.element(document.getElementById("warningtext")).text("Enter start time!");
        }
        else if (endtimeselected == "") {
            // console.log("did not enter end time");
            angular.element(document.getElementById("warningtext")).text("Enter end time!");
        }
        else if (starttimetotalmins == endtimetotalmins) {
            // console.log("start time can't equal end time");
            angular.element(document.getElementById("warningtext")).text("Start and end time are equal!");
        }
        else if (starttimetotalmins > endtimetotalmins) {
            // console.log("can't end before you start");
            angular.element(document.getElementById("warningtext")).text("Can't end before you start.");
        }
        else {
            // console.log("PASS");
            angular.element(document.getElementById("warningtext")).text("Schedule added");
            
            
            var starttimehr = parseInt(starttimetotalmins / 60); // int values of four numbers
            var starttimemin = parseInt(starttimetotalmins % 60);
            var endtimehr = parseInt(endtimetotalmins / 60);
            var endtimemin = parseInt(endtimetotalmins % 60);
            
            var timearray = [starttimehr, starttimemin, endtimehr, endtimemin]; // array of four numbers
            
            var text = '{"' + dayselected + '" : [' + timearray + ']}';
            // console.log("value of text: ", text);
            var schedule = JSON.parse(text); // JSON object (e.g. {"monday" : [1, 2, 3, 4]} )
            console.log("value of schedule json obj: ", schedule);
            
            $scope.schedulecart.push(schedule);
            console.log("schedulecart: ", $scope.schedulecart);
        }
    }
    
    $scope.scheduleToTableString = function(schedule) {
        var key = Object.keys(schedule)[0];
        console.log("key is: ", key);
        var value = schedule[key];
        console.log("value of first: ", value);
        return key.toUpperCase() + "   " + value;
    }
    
    
    function timeStringToInt(timestr) {
        var hour = timestr.split(":")[0];
        var minute = timestr.split(":")[1];
        
        return parseInt(hour, 10) * 60 + parseInt(minute, 10);
    }
    
    
    
    init();
});