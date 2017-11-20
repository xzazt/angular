angular.module("xzzt",[]).controller('mainController',function ($scope,$state) {

    $scope.clickMenu = function(obj){
        console.info(obj)
        //location.href = obj;
        $state.go('main.user',{

        });
    }

    $scope.$on('$destroy', function () {
        alert('page1');
    });
});