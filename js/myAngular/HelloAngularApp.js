/*
    Initialize the Angular module
    The [] in the second argument specifies dependent modules

    The ngSanitize module is included from angular-sanitize.js

    We need this so we can create an angular filter that returns HTML (the image)
 */
var TheApp = angular
    .module('TheApp', ['CustomFilters', 'ngSanitize', 'ngRoute'])
    .config(function($routeProvider)
    {
        $routeProvider
            .when("/names",
            {
                templateUrl: "names.html",
                controller: "NamesController"
            })
            .when("/families",
            {
                templateUrl: "families.html",
                controller: "FamiliesController"
            })
            .when("/names/:username",
            {
                templateUrl: "user.html",
                controller: "UserController"
            })
    });