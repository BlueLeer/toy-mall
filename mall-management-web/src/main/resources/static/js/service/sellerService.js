app.service("sellerService", function ($http) {
    this.search = function (page, rows, query) {
        return $http.post("../seller/search.do?page=" + page + "&rows=" + rows, query);
    };

    this.updateStatus = function (sellerId, status) {
        return $http.get("../seller/updateStatus.do?sellerId=" + sellerId + "&status=" + status);
    };

});