/**
 * Created by madler2 on 10/19/2014.
 */

TheApp.controller('HelloAngularCtrl', function($scope, jsonFamilyReaderService)
{
    var colors = ["blue", "pink", "red", "yellow"];
    var idxColor = 0;

    $scope.firstname2 = "geeta";
    $scope.lastname2 = "acharya";
    $scope.hideFirstName = false;
    $scope.backcolor = colors[0];

    $scope.onMouseClicked = function()
    {
        $scope.hideFirstName = !$scope.hideFirstName;
        if (!$scope.hideFirstName)
            $scope.backcolor = colors[++idxColor % 4];
    };

    $scope.onError = function(reason)
    {
       $scope.error = "We got an error";
    };

    $scope.onSearch = function(s)
    {
       alert("searching for " + s);
    };

    $scope.families = null;
    jsonFamilyReaderService.getData(function(response)
    {
        $scope.families = response;
    });
});

