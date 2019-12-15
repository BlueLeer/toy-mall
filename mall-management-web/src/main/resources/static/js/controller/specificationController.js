app.controller("specificationController", function ($controller, $scope, specificationService) {
    // 继承父类
    $controller("baseController", {$scope: $scope});

    // specification和specificationOption的组合对象,并且初始化
    $scope.specfCom = {"optionList": []};

    // 当在页面点击"新增规格选项"时,添加行
    $scope.addTableRow = function () {
        $scope.specfCom.optionList.push({});
    };

    // 当在页面添加规格选项页面点击"删除"时,删除行
    $scope.deleteTableRow = function (index) {
        $scope.specfCom.optionList.splice(index, 1);
    };

    // 初始化分页查询条件实体
    $scope.query = {};
    // 分页查询
    $scope.search = function (page, rows) {
        specificationService.search(page, rows, $scope.query).success(function (response) {
            $scope.list = response.rows;
            $scope.paginationConf.totalItems = response.total; // 更新记录总数
        })
    };

    $scope.add = function () {
        specificationService.add($scope.specfCom).success(function (response) {
            if (response.success) {
                $scope.reloadList();
            } else {
                alert(response.message);
            }
        })
    };

    $scope.findOne = function (selectedId) {
        specificationService.findOne(selectedId).success(function (response) {
            $scope.specfCom = response;
        })
    };

    $scope.update = function () {
        specificationService.update($scope.specfCom).success(function (response) {
            if (response.success) {
                $scope.reloadList();
            } else {
                alert(response.message);
            }
        })
    };

    $scope.save = function () {
        if ($scope.specfCom.id == null) {
            $scope.add();
        } else {
            $scope.update();
        }
    };


    $scope.delete = function () {
        specificationService.delete($scope.selectIds).success(function (response) {
            if (response.success) {
                $scope.reloadList();
            } else {
                alert(response.message);
            }
        })
    };
});