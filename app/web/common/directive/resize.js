xzzt.directive('resize',function ($window) {
    return function ($scope) {
        var w = angular.element($window);
        /*Scope提供$watch方法监视Model的变化。
        Scope提供$apply方法传播Model的变化。*/
        $scope.getWindowDimensions = function () {
            return { 'h': w[0].innerHeight, 'w': w[0].innerWidth };
        };
        $scope.$watch($scope.getWindowDimensions, function (newValue) {
            $scope.style = function () {
                return {
                    'height': (newValue.h) + 'px',
                    'width': (newValue.w) + 'px'
                };
            };
        }, true);
        w.bind('resize', function () {
            $scope.$apply();
        });
    }
});
