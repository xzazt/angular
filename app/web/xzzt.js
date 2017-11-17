/* 此处定义模块，由于需要设定路由，所以要注入ngRoute */
//var xzzt = angular.module('xzzt',['ui.router']);
var xzzt = angular.module('xzzt',[
    'ui.router',
    'oc.lazyLoad',
    'ngCookies'
]);
xzzt.config(['$stateProvider', '$urlRouterProvider','$ocLazyLoadProvider',
    function($stateProvider, $urlRouterProvider,$ocLazyLoadProvider)
{
    //没有路由配置，跳转默认路由
    $urlRouterProvider.otherwise("/");

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
                        '../bower_components/bootstrap/dist/css/bootstrap.css',
                        'main/resource/skip/'+ skipTemlpateConf +'/css/all.css'
                    ]

                });
            }],
            isLogin:['$state','$cookies',function ($state,$cookies) {
                /*var isLogin = $cookies.get("isLogin");
                if(!isLogin){
                    $state.go('login',{

                    })
                }*/
            }],
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

    $stateProvider.state('user', {
        url: "/user",
        /*templateUrl : "xzzt/page/user/html/template.html"*/
        views:{
            'main':{
                template:"xzzt/page/user/html/template.html"
            }
        }
    });

    /*initRoute();

    function initRoute(){
        var rs = pro.getRouteUrl();
        angular.forEach(rs,function (data, index, arrar) {
            console.info(data);
            $stateProvider.state(data.state,{
                url : data.url,
                /!*templateUrl : data.templateUrl,*!/
                views:{
                    'main':{
                        template:data.templateUrl
                    }
                }
            });
        })

    };*/
}]);
/* 定义路由表（路由规则）*/
/*xzzt.config(function($stateProvider , $urlRouterProvider) {
    console.info("xzzt config...")
    $stateProvider.state('index',{
        url:"/",
        template:"index"
    }).state('web',{
        url:"web",
        template:"aaa"    }).state('login',{
        url:"login",
        template:"login"
    })
});*/
/*
xzzt.config(['$routeProvider',function ($routeProvider) {
    console.info("app config");
    /!* $routeProvider 就相当于交通警察，根据when和otherwise指挥路由走向 *!/
    $routeProvider
        .when("/",{
            // 当请求的“URL” / , 找当前定义控制器和视图
            controller: 'loginController',
            /!* template: '<h1>{{hello}}</h1>' *!/
            templateUrl: 'login/login.html',
            resolve:{
                "skipTemplate" : function(){
                   return [{
                           "name":"默认",
                           "value":"default"
                       },{
                           "name":"蓝色",
                           "value":"zt"
                   }]
               }
            }
        })
        .otherwise({
            /!* 都不匹配，定向到根目录 *!/
            redirectTo: 'main'
        })
}]);*/

