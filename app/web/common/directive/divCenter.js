xzzt.directive('divCenter',function ($window) {
    return {
        restrict:'A',
        scope:{},
        link:function ($scope,element,attr) {
            var w = angular.element($window);
            $scope.getMarginSize = function () {
                return {
                    'h' : (w[0].innerHeight - element[0].clientHeight)/2,
                    'w' : (w[0].innerWidth - element[0].clientWidth)/2
                }
            };
            $scope.$watch($scope.getMarginSize,function (newValue) {
                element.css('margin-top',newValue.h + 'px');
                element.css('margin-left',newValue.w + 'px');
            },true);
            w.bind('divCenter',function () {
                $scope.$apply();
            });
        }
    }

});