angular.module("xzzt").factory('loginService',function (dataFactory) {
    return {
        isLogin : function () {
            console.info("islogin");
        },
        doLogin : function (params) {
            return dataFactory.doLogin(params);
        }
    }
})