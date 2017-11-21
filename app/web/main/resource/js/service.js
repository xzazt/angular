angular.module("xzzt").service('mainService',function (dataFactory) {
    return {
        getUser : function () {
            return dataFactory.getUser();
        }
    };
});