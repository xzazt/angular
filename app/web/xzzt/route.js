var xzzrRoute = [
    {
        "state" : "main.user",
        "url" : "/user",
        "templateUrl" : "xzzt/page/user/html/template.html",
        "controller" : "userController",
        "name" : "userConfig",
        "files" : [
            'xzzt/page/user/js/controller.js',
            'xzzt/page/user/skip/default/css/all.css'
        ]
    }
];
if(pro.getRouteUrl().length == 0){
    pro.addRouteUrl(xzzrRoute);
}
