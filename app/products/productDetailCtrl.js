/**
 * Created by jzhu on 11/9/2015.
 */
(function () {
    "use strict";

    angular
        .module("productManagement")
        .controller("ProductDetailCtrl", ProductDetailCtrl);

    function ProductDetailCtrl($scope, $http, productWithSpecificId) {

        $http.get("https://raw.githubusercontent.com/DeborahK/AngularLOB/master/product.json").success(function (data) {

            for (var i = 0; i < data.length; i++) {
                var obj = data[i];
                if (obj.productId == productWithSpecificId) {
                    $scope.product = obj;
                    $scope.title = 'Product Detail: ' + $scope.product.productName;
                    if ($scope.product.tags) {
                        $scope.product.tagList = $scope.product.tags.toString();
                    }
                    break;
                }
            }
        });
    }
})();