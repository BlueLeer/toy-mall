app.service("typeTemplateService", function ($http) {
    this.search = function (page, rows,query) {
        return $http.post("../typeTemplate/search.do?page=" + page + "&rows=" + rows,query);
    };

    this.add=function (typeTemplate) {
        return $http.post("../typeTemplate/add.do",typeTemplate);
    };

    this.findOne=function (id) {
        return $http.get("../typeTemplate/findOne.do?id="+id);
    };

    this.update = function (typeTemplate) {
        return $http.post("../typeTemplate/update.do",typeTemplate);
    };

    this.delete = function (ids) {
        return $http.get("../typeTemplate/delete.do?ids="+ids);
    }
});