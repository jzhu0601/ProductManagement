/**
 * Created by jzhu on 11/6/2015.
 */
(function(){
    "use strict";
    angular
        .module("productManagement")
        .controller("ProductListCtrl", ProductListCtrl);

    function ProductListCtrl($scope, $http) {

        $http.get("https://raw.githubusercontent.com/DeborahK/AngularLOB/master/product.json").success(function (data) {
            $scope.products = data;
        });

        $scope.showImage = false;

        $scope.toogleImage = function () {
            $scope.showImage = !$scope.showImage;
        }
    }
})();


