/**
 * Created by jzhu on 11/9/2015.
 */
(function () {
    "use strict";
    angular
        .module("productManagement")
        .controller("ProductEditCtrl", ProductEditCtrl);

    function ProductEditCtrl($scope, $http, productWithSpecificId, $state) {

        $scope.product;
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

        $scope.open = function ($event) {
            $event.preventDefault();
            $event.stopPropagation();
            $scope.opened = !$scope.opened;
        };

        $scope.submit = function () {
            //Here I do not have anything to save. Will update this later.
            //$scope.product.$save();
        };

        $scope.cancel = function () {
            $state.go('productList');
        };

        $scope.addTags = function (tags) {
            if (tags) {
                var array = tags.split(',');
                $scope.product.tags = $scope.product.tags ? $scope.product.tags.concat(array) : array;
                $scope.newTags = "";
            } else {
                alert("Enter tags separated by commas");
            }
        };

        $scope.removeTag = function (idx) {
            $scope.product.tags.splice(idx, 1);
        }

    }
})();
