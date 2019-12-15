// 公共的控制器,或者控制器相关的代码
app.controller("baseController",function ($scope) {

    //分页控件配置
    $scope.paginationConf = {
        currentPage: 1, // 当前页码
        totalItems: 10, // 总记录条数(调用findPage()方法以后就会更新)
        itemsPerPage: 10, // 每页显示的记录数
        perPageOptions: [10, 20, 30, 40, 50], // 页码选项
        // 进入页面,点击上一页,下一页都会触发这个方法
        onChange: function () {
            $scope.reloadList();//重新加载
        }
    };

    //重新加载列表 数据
    $scope.reloadList = function () {
        //切换页码
        $scope.search($scope.paginationConf.currentPage, $scope.paginationConf.itemsPerPage);
    };

    // 选中的id数组
    $scope.selectIds = [];

    // 根据checkBox的选中情况,更新数组
    $scope.updateSelection = function ($event, id) {
        if ($event.target.checked) { // 如果选中,就向数组中添加
            $scope.selectIds.push(id);
        } else {
            var index = $scope.selectIds.indexOf(id);
            $scope.selectIds.splice(index, 1); // 删除
        }
    };


});