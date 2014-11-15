/**
 * Created by madler2 on 10/19/2014.
 */

TheApp.controller('UserController', function($scope, $routeParams, $location)
{
    $scope.onError = function(reason)
    {
       $scope.error = "We got an error";
    };

    $scope.onUserNameEntered = function(name)
    {
        $location.path("/names/" + name);
    };

    $scope.User = $routeParams.username;
});

