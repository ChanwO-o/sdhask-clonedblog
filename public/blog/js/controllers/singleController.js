app.controller("singleController", function($scope, $http, sharedata) {
    
    function init() {
        console.log("from single init(): " + sharedata.getViewBlogId());
    }
    
    
    init();
});