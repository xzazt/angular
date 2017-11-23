angular.module("xzzt").factory('dataFactory',function ($http,$q) {
    var url = "";
    var apis = {};
    var subiff = "";
    $.ajax({
        type : "get",
        url : "xzzt/dateUrl.json",
        async : false,
        beforeSend:function(xhr){
            //console.log('发送前')
        },
        success : function (msg) {
            url = msg.api;
            subiff = msg.name;
        },
        error : function (e) {
            console.info(e);
        },
        complete:function(){
            //console.log('结束')
        }
    });
    angular.forEach(url,function (data, index, arrar) {
       /* var subiff = "http://localhost:8046/xzazt";*/
        subiff = "/xzazt";
        console.info(data.type);
        apis[index] = function (params) {
            var defer = $q.defer();
            $http({
                type : data.type,
                url : subiff + data.url,
                params : params
               /* headers : {'Content-Type':'application/x-www-form-urlencoded'}*/
            }).then(function success(response){
                //console.info("111"+response);
                defer.resolve(response.data);
            },function error(response) {
                //console.info("222"+response);
                defer.reject(response.data);
            });
            return defer.promise;
        }
    });
    return  apis;
});