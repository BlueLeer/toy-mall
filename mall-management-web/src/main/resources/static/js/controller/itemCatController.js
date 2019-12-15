//控制层
app.controller('itemCatController', function ($scope, $controller, itemCatService) {

    $controller('baseController', {$scope: $scope});//继承

    //读取列表数据绑定到表单中  
    $scope.findAll = function () {
        itemCatService.findAll().success(
            function (response) {
                $scope.list = response;
            }
        );
    };

    //分页
    $scope.findPage = function (page, rows) {
        itemCatService.findPage(page, rows).success(
            function (response) {
                $scope.list = response.rows;
                $scope.paginationConf.totalItems = response.total;//更新总记录数
            }
        );
    };

    //查询实体
    $scope.findOne = function (id) {
        itemCatService.findOne(id).success(
            function (response) {
                $scope.entity = response;
            }
        );
    };

    //保存
    $scope.save = function () {
        var serviceObject;//服务层对象
        if ($scope.entity.id != null) {//如果有ID
            serviceObject = itemCatService.update($scope.entity); //修改
        } else {
            serviceObject = itemCatService.add($scope.entity);//增加
        }
        serviceObject.success(
            function (response) {
                if (response.success) {
                    //重新查询
                    $scope.reloadList();//重新加载
                } else {
                    alert(response.message);
                }
            }
        );
    };


    //批量删除
    $scope.dele = function () {
        //获取选中的复选框
        itemCatService.dele($scope.selectIds).success(
            function (response) {
                if (response.success) {
                    $scope.reloadList();//刷新列表
                    $scope.selectIds = [];
                }
            }
        );
    };

    $scope.searchEntity = {};//定义搜索对象

    //搜索
    $scope.search = function (page, rows) {
        itemCatService.search(page, rows, $scope.searchEntity).success(
            function (response) {
                $scope.list = response.rows;
                $scope.paginationConf.totalItems = response.total;//更新总记录数
            }
        );
    };

    // 根据父分类查询本级分类下的全部列表
    $scope.list = [];
    $scope.findByParentId = function (parentId) {
        itemCatService.findByParentId(parentId).success(function (response) {
            $scope.list = response;
        })
    };

    // 当前显示的页面级别(一级列表为1,二级列表2为2,三级列表为3)
    $scope.level = 1;
    $scope.setLevel = function (level) {
        $scope.level = level;
    };

    // 一级分类列表下的实体(点击查询下级的那个点击对象)
    $scope.entity_1 = null;
    // 二级分类列表下的实体(点击查询下级的那个点击对象)
    $scope.entity_2 = null;
    $scope.setEntity = function (entity) {
        if ($scope.level === 1) {
            $scope.entity_1 = null;
            $scope.entity_2 = null;
        }

        if ($scope.level === 2) {
            $scope.entity_1 = entity;
            $scope.entity_2 = null;
        }

        if ($scope.level === 3) {
            $scope.entity_2 = entity;
        }

        // 更新当前显示的列表
        $scope.findByParentId(entity.id);
    }

});	
