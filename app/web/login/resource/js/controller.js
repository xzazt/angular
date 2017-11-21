angular.module("xzzt").controller('loginController',['$scope','$cookies','$state','loginService',function ($scope,$cookies,$state,loginService) {
    loginService.isLogin();
    $scope.skipTemplate = [
        {
            "name":"默认",
            "value":"default"
        },
        {
            "name":"蓝色",
            "value":"zt"
        }
    ];
    var skipTemlpateConf = $cookies.get("skipTemlpateConf");
    for (var i = 0; i < $scope.skipTemplate.length; i++){
        if($scope.skipTemplate[i].value == skipTemlpateConf){
            $scope.skinSelectTemplate = $scope.skipTemplate[i];
        }
    }
    skipTemlpateConf = $scope.skinSelectTemplate.value;
    $cookies.put("skipTemlpateConf",skipTemlpateConf);
    
    $scope.skinSelectChange = function (skinSelectTemplate) {
        console.info(skinSelectTemplate.value);
        $cookies.put("skipTemlpateConf",skinSelectTemplate.value);
        window.location.reload();
    };
    $scope.login = function () {
        var username = $scope.userName;
        var password = $scope.passWord;
        if(username == undefined || username == ''){
            console.info('username must is not null');
            $scope.loginMessage = 'username must is not null';
            return;
        }
        if(password == undefined || password == ''){
            console.info('password must is not null');
            $scope.loginMessage = 'password must is not null';
            return;
        }
        $scope.loginMessage = '';

        $cookies.put("isLogin",true);
        $state.go('main',{

        });
        /*页面销毁触发方法*/
        $scope.$on('$destroy', function () {
            //alert('page1');
        });

    }
}]);