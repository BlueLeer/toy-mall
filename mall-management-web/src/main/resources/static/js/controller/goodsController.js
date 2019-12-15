app.controller("goodsController", function ($scope, $controller, goodsService) {
    $controller("baseController", {$scope: $scope});
    // 条件查询对象
    $scope.query = {};
    $scope.search = function (page, rows) {
        goodsService.search(page, rows, $scope.query).success(function (response) {
            $scope.list = response.rows;
            $scope.paginationConf.totalItems = response.total; // 更新记录总数
        })
    };

    // 查询所有的分类
    $scope.categoryList = [];
    $scope.findCatList = function () {
        goodsService.findCatList().success(function (response) {
            // 以id作为集合的下标,name值作为对应项的值
            for (var i = 0; i < response.length; i++) {
                $scope.categoryList[response[i].id] = response[i].name;
            }
        })
    };

    //定义状态列表
    $scope.auditStatus = ["未审核", "已审核", "审核未通过", "已关闭"];

    $scope.updateStatus = function (status) {
        goodsService.updateStatus($scope.selectIds, status).success(function (response) {
            if (response.success) {
                alert(response.message);
            } else {
                alert(response.message);
            }
        })
    }

});