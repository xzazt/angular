/* 此处定义模块，由于需要设定路由，所以要注入ngRoute */
//var xzzt = angular.module('xzzt',['ui.router']);
var xzzt = angular.module('xzzt',[
    'ui.router',
    'oc.lazyLoad',
    'ngCookies'
]);
xzzt.config(['$stateProvider', '$urlRouterProvider','$ocLazyLoadProvider','xzztConfig',
    function($stateProvider, $urlRouterProvider,$ocLazyLoadProvider,xzztConfig)
{

    //没有路由配置，跳转默认路由
    $urlRouterProvider.otherwise("/login");

    //全局配置
    $ocLazyLoadProvider.config({
        debug: false, //知否启用调试模式
        events:false  //事件绑定是否启用
    });

    //var page = location.href.split('#')[1].replace('/', '').split('?')[0];
    //console.info(page);

    $stateProvider.state('login', {
        url: "/login",
        templateUrl: "login/login.html",
        controller:"loginController",//这里定义了，不用ng-controller再定义了，不然会运行2次了
        resolve:{
            loadConfig:['$ocLazyLoad','$cookies',function ($ocLazyLoad, $cookies) {
                var skipTemlpateConf = $cookies.get("skipTemlpateConf");
                if(skipTemlpateConf == null){
                    skipTemlpateConf = 'default';
                    $cookies.put("skipTemlpateConf",skipTemlpateConf);
                };
                return $ocLazyLoad.load({
                    name : "loginConfig",
                    files : [
                        'login/resource/js/controller.js',
                        'login/resource/js/service.js',
                        'login/resource/skip/'+ skipTemlpateConf +'/css/all.css'
                    ]

                });
            }]
        }
    }).state('main', {
        url: "/main",
        templateUrl: "main/main.html",
        controller:"mainController",
        resolve:{
            loadConfig:['$ocLazyLoad','$cookies',function ($ocLazyLoad,$cookies) {
                var skipTemlpateConf = $cookies.get("skipTemlpateConf");
                if(skipTemlpateConf == null){
                    skipTemlpateConf = 'default';
                    $cookies.put("skipTemlpateConf",skipTemlpateConf);
                };
                return $ocLazyLoad.load({
                    name : "mainConfig",
                    files : [
                        'main/resource/js/controller.js',
                        'main/resource/skip/'+ skipTemlpateConf +'/css/all.css',
                        'main/resource/js/service.js'
                    ]

                });
            }],
            isLogin:['$state','$cookies',function ($state,$cookies) {
                var isLogin = $cookies.get("isLogin");
                if(!isLogin){
                    $state.go('login',{})
                }
            }],
            loadFactory : ['$ocLazyLoad',function ($ocLazyLoad) {
                return $ocLazyLoad.load({
                    name:"loadFactoryName",
                    files : getLoadFactory(xzztConfig,['DataFactory'])
                });
            }]
        }
    }).state('default', {
        url: "/",
        templateUrl: "login/login.html",
        controller:"loginController",
        resolve:{
            loadConfig:['$ocLazyLoad','$cookies',function ($ocLazyLoad, $cookies) {
                var skipTemlpateConf = $cookies.get("skipTemlpateConf");
                if(skipTemlpateConf == null){
                    skipTemlpateConf = 'default';
                    $cookies.put("skipTemlpateConf",skipTemlpateConf);
                };
                return $ocLazyLoad.load({
                    name : "loginConfig",
                    files : [
                        'login/resource/js/controller.js',
                        'login/resource/skip/'+ skipTemlpateConf +'/css/all.css'
                    ]

                });
            }]
        }
    });


    initRoute();

    /**
     * 初始化路由
     */
    function initRoute(){
        var rs = pro.getRouteUrl();
        angular.forEach(rs,function (data, index, arrar) {
            $stateProvider.state(data.state,{
                url : data.url,
                templateUrl : data.templateUrl,
                controller : data.controller,
                resolve : {
                    loadConfig : ['$ocLazyLoad',function ($ocLazyLoad) {
                        return $ocLazyLoad.load({
                            name:data.name,
                            files:data.files
                        });
                    }]
                }
            });
        })

    };


    /**
     * 加载factory服务
     */
    function getLoadFactory(xzztConfig,keys) {
        var result = [];
        if(keys.length === 0){
            result = [];
        }else{
           angular.forEach(keys,function (data, index, array) {
               result = addFile(result,xzztConfig[data].files);
           })
        }
        return result;
    }

    function addFile(list1, list2) {
        angular.forEach(list2,function (data, index, array) {
            list1.push(data);
        })
        return list1;
    }

}]);




