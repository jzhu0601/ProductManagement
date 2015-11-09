/**
 * Created by jzhu on 11/9/2015.
 */
(function () {
    "use strict";

    angular
        .module("productManagement")
        .controller("ProductDetailCtrl", ProductDetailCtrl);

    function ProductDetailCtrl($scope, $http) {

        $http.get("https://raw.githubusercontent.com/DeborahK/AngularLOB/master/product.json").success(function (data) {
            $scope.products = data;
        });


        $scope.title = 'Product Detail ' + $scope.product.productName;

        if ($scope.product.tags) {
            $scope.product.tagList = $scope.product.tags.toString();
        }
    }
})();