var pro = {
    _routeList : [],
    init : function () {
        this.load();
    },
    getRouteUrl : function () {
        return this._routeList;
    },
    addRouteUrl : function (routeUrlList) {
        this._routeList = routeUrlList;
    },
    load : function () {
        var script = '<script src="xzzt/route.js"></script>';
        $('head').append(script);
    }
};
pro.init();
