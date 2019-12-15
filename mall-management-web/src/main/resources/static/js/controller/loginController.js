app.controller("loginController", function ($scope, loginService) {
    $scope.loadLoginUserInfo = function () {
        loginService.loadLoginUserInfo().success(function (response) {
            $scope.loginUserInfo = response;
        })
    }
});