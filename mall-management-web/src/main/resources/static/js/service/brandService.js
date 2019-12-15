// 自定义服务(品牌相关的服务)
app.service("brandService", function ($http) {
    this.search = function (page, rows, query) {
        return $http.post("../brand/findByPageWithCond.do?page=" + page + "&rows=" + rows, query);
    };

    this.findById = function (id) {
        return $http.get("../brand/findById.do?id=" + id);
    };

    this.save = function (method, entity) {
        return $http.post(method, entity);
    };

    this.delete = function (ids) {
        return $http.get("../brand/delete.do?ids=" + ids);
    };

});