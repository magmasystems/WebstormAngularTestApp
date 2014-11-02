/**
 * Created by madler2 on 10/19/2014.
 */

TheApp.controller('HelloAngularCtrl', function($scope, jsonFamilyReaderService)
{
    $scope.firstname2 = "geeta";
    $scope.lastname2 = "acharya";
    $scope.hideFirstName = false;

    $scope.onMouseClicked = function()
    {
        $scope.hideFirstName = !$scope.hideFirstName;
    };

    $scope.families = null;
    jsonFamilyReaderService.getData(function(response)
    {
        $scope.families = response;
    });
});

