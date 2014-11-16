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
    $scope.count = 0;

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
            jsonFamilyReaderService3.countdown().then(
                function(response) { $scope.count = response.foo;},
                function(error) {},
                function (notifyData) { $scope.count =  notifyData;});
        });
});

