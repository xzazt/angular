angular.module("xzzt",[]).controller('mainController',function ($scope) {
    /*$scope.skipTemplate = [
        {
            "name":"默认",
            "value":"default"
        },
        {
            "name":"蓝色",
            "value":"zt"
        }
    ];*/
    //$scope.skinSelectTemplate = skipTemplate[0];
    $scope.ma = 123;

    $scope.$on('$destroy', function () {
        alert('page1');
    });
});