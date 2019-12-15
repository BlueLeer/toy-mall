app.service("specificationService", function ($http) {
    this.search = function (page, rows,query) {
        return $http.post("../specification/search.do?page=" + page + "&rows=" + rows,query);
    };

    this.add=function (specCom) {
        return $http.post("../specification/add.do",specCom);
    };

    this.findOne=function (id) {
        return $http.get("../specification/findOne.do?id="+id);
    };

    this.update = function (specfCom) {
        return $http.post("../specification/update.do",specfCom);
    };

    this.delete = function (ids) {
        return $http.get("../specification/delete.do?ids="+ids);
    }
});