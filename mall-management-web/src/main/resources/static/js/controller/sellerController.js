app.controller("sellerController", function ($scope, sellerService, $controller) {
    $controller("baseController", {$scope: $scope});
    $scope.sellerList = [];

    // 查询封装
    $scope.query = {};
    // 该页面显示的都是未审核状态的订单
    $scope.query.status = "0";

    $scope.search = function (page, rows) {
        sellerService.search(page, rows, $scope.query).success(function (response) {
            $scope.sellerList = response.rows;

        })
    };

    // 详情页显示的列表的index
    $scope.currentClickIndex = 0;

    $scope.currentSeller={};

    $scope.currentClickUserId = "";


    $scope.updateStatus = function (status) {
        sellerService.updateStatus( $scope.currentClickUserId,status).success(function (response) {
            if (response.success) {
                $scope.reloadList();
            } else {
                alert(response.message);
            }
        });
    };

    $scope.findCurrentSeller = function (sellerId) {
        for (var i = 0;i<$scope.sellerList.length;i++){
            if ($scope.sellerList[i].sellerId === sellerId){
                $scope.currentSeller = $scope.sellerList[i];
            }
        }
    }
});