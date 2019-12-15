app.service("goodsService", function ($http) {
    this.search = function (page, rows, query) {
        return $http.post("../goods/search.do?page=" + page + "&rows=" + rows, query);
    };

    // 查询所有的分类
    this.findCatList = function () {
        return $http.get("../itemCat/findAll.do");
    };

    this.findOne = function (goodsId) {
        return $http.get("../goods/findOne.do?id=" + goodsId);
    };

    // 更改商品状态
    this.updateStatus = function (ids, status) {
        return $http.get("../goods/updateStatus.do?ids=" + ids + "&status=" + status);
    }

});