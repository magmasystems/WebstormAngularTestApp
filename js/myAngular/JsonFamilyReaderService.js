/**
 * Created by madler2 on 11/1/2014.
 */
TheApp.service('jsonFamilyReaderService', function($http)
{
    this.getData = function(callback)
    {
        $http.get("http://localhost:63342/WebstormAngularTestApp/data/families.json")
            .success(function (response) {  callback(response); })
            .error(function(e) { alert(e); })
    };
});
