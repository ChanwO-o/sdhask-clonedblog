angular.module("WebsiteApp").controller("singleController", function($scope, $http, sharedata) {
    
    function init() {
        // console.log("singleController.js init()");
        
        $scope.schedulecart = [];
        $scope.remaindercart = {"monday" : [44,55]};
    }
    
    $scope.addSchedule = function() {
        var dayselected = angular.element(document.getElementById("day")).val(); // raw strings (monday, 14:00, etc)
        var starttimeselected = angular.element(document.getElementById("starttime")).val();
        var endtimeselected = angular.element(document.getElementById("endtime")).val();
        
        var starttimetotalmins = timeStringToInt(starttimeselected); // total number of minutes in int
        var endtimetotalmins = timeStringToInt(endtimeselected);
        
        
        // console.log("day: ", dayselected);
        // console.log("starttime: ", starttimetotalmins);
        // console.log("endtimeselected: ", endtimetotalmins);
        
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
            // console.log("value of schedule json obj: ", schedule);
            
            $scope.schedulecart.push(schedule);
            console.log("schedulecart: ", $scope.schedulecart);
        }
    }
    
    $scope.scheduleToTableString = function(schedule) {
        var key = Object.keys(schedule)[0];
        // console.log("key is: ", key);
        var value = schedule[key];
        // console.log("value of first: ", value);
        return key.toUpperCase() + "   " + value;
    }
    
    
    $scope.calculateRemainders = function() {
        // displaySchedulecart();
        var readyToMerge = changeSchedulecartFormat();
        // displayBeforeMerging(readyToMerge);
        
        var merged = merge_schedule(readyToMerge);
        // console.log('merge_schedule', merged);
        var remains = remaining_schedule(merged);
        
        console.log("REMAINDERS:", remains);
        
        // var text = '{ "monday" : [ [1,2],[3,4] ] }';
        
        $scope.remaindercart = remains;
        // $scope.remaindercart.push(JSON.parse(text));
        // $scope.remaindercart["wednesday"] = [[1,2,3,4]];
        
        angular.element(document.getElementById("remaindertextinfo")).text("Your time to meet:");
        angular.element(document.getElementById("remaindertext")).text("asdfasdf");
    }
    
    
    function changeSchedulecartFormat() {
        var result = {};
        for (var i = 0; i < $scope.schedulecart.length; ++i) {
            var json = $scope.schedulecart[i];
            var key = Object.keys(json)[0];
            var value = json[Object.keys(json)[0]];
            // console.log("key: ", key);
            // console.log("value: ", value);
            
            if (key in result) { // key already in result, add it to the existing list
                // console.log(key, " is already a key, add to existing list");
                result[key].push(value);
            }
            else { // key does not exist, add new element
                result[key] = [value];
            }
        }
        return result;
    }
    
    
    function timeStringToInt(timestr) {
        var hour = timestr.split(":")[0];
        var minute = timestr.split(":")[1];
        
        return parseInt(hour, 10) * 60 + parseInt(minute, 10);
    }
    
    
    
    function displaySchedulecart() {
        console.log("====display SC==");
        for (var i = 0; i < $scope.schedulecart.length; i++) {
            var json = $scope.schedulecart[i];
            console.log("key: ", Object.keys(json)[0]);
            console.log("value: ", json[Object.keys(json)[0]]);
        }
    }
    
    function displayBeforeMerging(result) {
        console.log("====displayResult==");
        for (var key in result) {
            console.log("key: ", key);
            console.log("value: ", result[key]);
        }
    }
    
    function resultTextDisplay() {
        for (var key in $scope.remaindercart) {
            
        }
    }
    
    init();
});