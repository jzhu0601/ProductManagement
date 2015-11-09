/**
 * Created by jzhu on 11/9/2015.
 */
(function () {
    "use strict";
    angular
        .module("productManagement")
        .controller("ProductEditCtrl", ProductEditCtrl);

    function ProductEditCtrl($scope, $http, productWithSpecificId) {

        $http.get("https://raw.githubusercontent.com/DeborahK/AngularLOB/master/product.json").success(function (data) {

            for (var i = 0; i < data.length; i++) {
                var obj = data[i];
                if (obj.productId == productWithSpecificId) {
                    $scope.product = obj;
                    if ($scope.product && $scope.product.productId) {
                        $scope.title = "Edit: " + $scope.product.productName;
                    } else {
                        $scope.title = "New Product"
                    }
                    break;
                }
            }
        });
    }
})();
