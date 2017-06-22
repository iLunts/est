app.config(["$routeProvider", function ($routeProvider) {
        $routeProvider.when("/rent/flat", {
            templateUrl: "view/rent/flat/index.html",
            controller: "rentFlatCtrl"
        });
    }
]);

app.controller('rentFlatCtrl', function($scope){

});