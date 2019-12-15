app.service("loginService",function ($http) {
    this.loadLoginUserInfo = function () {
        return $http.get("../login/loadLoginUserInfo.do");
    }
});