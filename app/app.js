/**
 * Created by jzhu on 11/6/2015.
 */
//IIFE
(function () {
    "use strict";
    var app = angular.module('productManagement', ["ui.router"]);

    app.config(["$stateProvider", "$urlRouterProvider", function ($stateProvider, $urlRouterProvider) {

        //default url when first loading the page
        $urlRouterProvider.otherwise("/");

        $stateProvider

            .state("home", {
                url: "/",
                templateUrl: "app/welcomeView.html"
            })

            .state("productList", {
                url: "/products",
                templateUrl: "app/products/productListView.html",
                controller: "ProductListCtrl"
            })

            .state("productEdit", {
                //:productId changes based on actual
                url: "/products/edit/:productId",
                templateUrl: "app/products/productEditView.html",
                controller: "ProductEditCtrl"
            })

            .state("productDetail", {
                //:productId changes based on actual
                url: "/products/:productId",
                templateUrl: "app/products/productDetailView.html",
                controller: "ProductDetailCtrl"
            })
    }]);

})();