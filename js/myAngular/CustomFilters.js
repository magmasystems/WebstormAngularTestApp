/**
 * Created by magmasystems on 11/9/14.
 */

angular.module('CustomFilters', []).filter('indianize', function()
{
    return function(input)
    {
        if (input == "Geeta")
            return input + " <img src='http://freefavicons.org/download/indian-flag/indian-flag.png' />";
        else
            return input;
    };
});