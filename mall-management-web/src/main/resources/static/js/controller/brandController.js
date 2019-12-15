// 自定义控制器(品牌相关)
app.controller("brandController", function ($scope, $controller, brandService) {// 注入自定义的Service

    $controller('baseController', {$scope: $scope}); // 继承(子控制器可以使用父控制器中的内容,需要在在html中显示引入)
    //查询品牌列表(分页)
    $scope.query = {};//定义条件查询的条件封装对象
    // 分页查询
    $scope.search = function (page, rows) {
        brandService.search(page, rows, $scope.query).success(function (response) {
            $scope.list = response.rows;
            $scope.paginationConf.totalItems = response.total; // 更新记录总数
        })
    };

    $scope.findById = function (id) {
        brandService.findById(id).success(function (response) {
            // 准备被更新的TbBrand
            $scope.entity = response;
        })
    };

    $scope.save = function () {
        var method = "../brand/add.do";
        // 如果entity的id不为空,则为更新
        if ($scope.entity.id != null) {
            method = "../brand/update.do";
        }

        brandService.save(method, $scope.entity).success(function (response) {
            if (response.success) {
                // 刷新页面
                $scope.reloadList();
            } else {
                alert(response.message);
            }
        })
    };

    // 删除
    $scope.delete = function () {
        brandService.delete($scope.selectIds).success(function (response) {
            if (response.success) {
                // 刷新列表
                $scope.reloadList();
            } else {
                alert(response.message);
            }
        })
    };


})