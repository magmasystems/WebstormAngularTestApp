/**
 * Created by madler2 on 10/19/2014.
 */

TheApp.controller('FamiliesController', function($scope, jsonFamilyReaderService3)
{
    $scope.onError = function(reason)
    {
       $scope.error = "We got an error";
    };

    $scope.families = null;

/*
    jsonFamilyReaderService.getData(function(response)
    {
        $scope.families = response;
    });
*/

//    $scope.families = jsonFamilyReaderService2.getData();

    jsonFamilyReaderService3.getData()
        .then(function(response)
        {
            $scope.families = response.data;
        });
});

