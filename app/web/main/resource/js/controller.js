angular.module("xzzt").controller('mainController',function ($scope,mainService) {

    //console.info(mainService.getMenu());
    $scope.aaa = 123;
    mainService.getUser().then(function success(data) {
        console.info(data);
    },function error(data) {
        console.info(data);
    });
    $scope.$on('$destroy', function () {
        alert('page1');
    });
});