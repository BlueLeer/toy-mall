app.service("uploadService",function ($http) {
    this.uploadFile = function () {
        var formData = new FormData();
        // 获取id为file的输入框中的文件,因为是multipart/form-data类型的,还包含有普通的表单项,所以是多个文件,通过[0]获取一个
        var file = document.getElementById("file").files[0];
        formData.append("file",file);

        return $http({
            method:'POST',
            url:'../upload.do',
            data:formData,
            headers:{'Content-Type':undefined},
            transformRequest:angular.identity
        });

        /**
         * anjularjs对于post和get请求默认的Content-Type header是application/json。
         * 通过设置‘Content-Type’: undefined，这样浏览器会帮我们把Content-Type设置为 multipart/form-data.
         * 通过设置 transformRequest: angular.identity ，
         * anjularjs transformRequest function将序列化我们的formdata object.
         */
    }
});