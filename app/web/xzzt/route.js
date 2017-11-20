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
    },{
        "state" : "main.role",
        "url" : "/role",
        "templateUrl" : "xzzt/page/role/html/template.html",
        "controller" : "roleController",
        "name" : "roleConfig",
        "files" : [
            'xzzt/page/role/js/controller.js',
            'xzzt/page/role/skip/default/css/all.css'
        ]
    }
];
if(pro.getRouteUrl().length == 0){
    pro.addRouteUrl(xzzrRoute);
}
