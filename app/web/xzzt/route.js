var xzzrRoute = [
    {
        "state" : "user",
        "url" : "/user",
        "templateUrl" : "/xzzt/page/user/html/template.html",
        "controller" : "userController"
    },{
        "state" : "bbb",
        "url" : "bbb",
        "templateUrl" : "/page/user/html/template1.html",
        "controller" : "userController1"
    }
];
if(pro.getRouteUrl().length == 0){
    pro.addRouteUrl(xzzrRoute);
}
