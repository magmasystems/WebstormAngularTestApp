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

TheApp.factory('jsonFamilyReaderService2', function($http)
{
    return {
        getData: function()
        {
            return [{
                "city": "Tucson",
                "people":
                [
                    {"firstname": "Ellen", "lastname": "Lerner"},
                    {"firstname": "Bonnie", "lastname": "Willax"}
                ]
            }];
        }
    };
});

TheApp.factory('jsonFamilyReaderService3', function($http, $q, $interval)
{
    return {
        getData: function () {
            return $http.get("http://localhost:63342/WebstormAngularTestApp/data/families.json")
                .success(function (response) {
                    return response;
                });
        },

        countdown: function () {
            var deferred = $q.defer();
            var i = 0;

            var timer = $interval(function ()
            {
                i = i + 1;
                deferred.notify(i);
                if (i > 300)
                {
                    deferred.resolve({foo: i});
                    $interval.cancel(timer);
                }
            }, 10);

            return deferred.promise;
        }
    };
});


