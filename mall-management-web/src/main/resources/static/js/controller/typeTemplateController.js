app.controller("typeTemplateController", function ($controller, $scope, typeTemplateService, brandService, specificationService) {
    // 继承父类
    $controller("baseController", {$scope: $scope});

    // 所有的规格
    $scope.allSpecIdsData = {};

    // 所有的品牌
    $scope.allBrandIdsData = {};

    $scope.findAllBrandIds = function () {
        // 查询所有的品牌
        // 定义一个空对象,不用发起条件查询,是查询全部
        var query = {};
        var allBrandIds = [];
        brandService.search(1, 1000, query).success(function (response) {

            for (var i = 0; i < response.rows.length; i++) {
                var brand = {};
                brand.id = response.rows[i]["id"];
                brand.text = response.rows[i]["name"];
                allBrandIds.push(brand);
            }
            $scope.allBrandIdsData = {"data": allBrandIds};
        });
    };

    $scope.findAllSpecIds = function () {
        var query = {};

        // 查询所有的规格
        var allSpecIds = [];
        specificationService.search(1, 1000, query).success(function (response) {
            for (var i = 0; i < response.rows.length; i++) {
                var spec = {};
                spec.id = response.rows[i]["id"];
                spec.text = response.rows[i]["specName"];
                allSpecIds.push(spec);
            }
            $scope.allSpecIdsData = {"data": allSpecIds};
        });
    };


    $scope.typeTemplate = {specIds: [], brandIds: [], customAttributeItems: []};
    // 初始化页面绑定对象
    $scope.initTypeTemplate = function () {
        // specification和specificationOption的组合对象,并且初始化
        $scope.typeTemplate = {specIds: [], brandIds: [], customAttributeItems: []};
    };

    // 初始化
    $scope.initTypeTemplate();

    // 当在页面点击"新增规格选项"时,添加行
    $scope.addTableRow = function () {
        $scope.typeTemplate.customAttributeItems.push({});
    };

    // 当在页面添加规格选项页面点击"删除"时,删除行
    $scope.deleteTableRow = function (index) {
        $scope.typeTemplate.customAttributeItems.splice(index, 1);
    };

    // 初始化分页查询条件实体
    $scope.query = {};
    // 分页查询
    $scope.search = function (page, rows) {
        typeTemplateService.search(page, rows, $scope.query).success(function (response) {
            $scope.list = response.rows;
            $scope.paginationConf.totalItems = response.total; // 更新记录总数
        })
    };

    $scope.add = function () {
        typeTemplateService.add($scope.typeTemplate).success(function (response) {
            if (response.success) {
                $scope.reloadList();
            } else {
                alert(response.message);
            }
        })
    };

    $scope.findOne = function (selectedId) {
        typeTemplateService.findOne(selectedId).success(function (response) {
            $scope.typeTemplate = response;
            //先将页面返回的string字符串转化成json对象
            $scope.typeTemplate.brandIds = JSON.parse($scope.typeTemplate.brandIds);
            // 转化成回显的格式
            $scope.allBrandIdsData = {"data": $scope.typeTemplate.brandIds};

            $scope.typeTemplate.specIds = JSON.parse($scope.typeTemplate.specIds);
            $scope.allSpecIdsData = {"data": $scope.typeTemplate.specIds};
            $scope.typeTemplate.customAttributeItems = JSON.parse($scope.typeTemplate.customAttributeItems);
        })
    };

    $scope.update = function () {
        typeTemplateService.update($scope.typeTemplate).success(function (response) {
            if (response.success) {
                $scope.reloadList();
            } else {
                alert(response.message);
            }
        })
    };

    $scope.save = function () {
        if ($scope.typeTemplate.id == null) {
            $scope.add();
        } else {
            $scope.update();
        }
    };

    $scope.delete = function () {
        typeTemplateService.delete($scope.selectIds).success(function (response) {
            if (response.success) {
                $scope.reloadList();
            } else {
                alert(response.message);
            }
        })
    };

    // 优化表格中的json格式的数据显示
    $scope.formatJson = function (jsonStr,key) {
        var jsonObj = JSON.parse(jsonStr);
        var str = "";
        for (var i = 0; i < jsonObj.length; i++) {
            if (i>0){
                str+="，";
            }
            str += jsonObj[i][key];
        }

        return str;
    }

});