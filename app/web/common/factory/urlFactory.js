angular.module('xzzt',[]).factory('urlFactory',function ($http) {
    var factory = {};
  /*  $http({
        method: 'GET',
        url:'../../xzzt/dateUrl.json'
    }).then(function success(response) {
        console.info("success")
    },function error(response) {
        console.info(error);
    });*/
    $http({
        method: 'GET',
        url: 'http://www.runoob.com/try/angularjs/data/sites.php'
    }).then(function successCallback(response) {
        //$scope.names = response.data.sites;
    }, function errorCallback(response) {
        // 请求失败执行代码
    });
    return factory;
})