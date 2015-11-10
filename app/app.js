/**
 * Created by jzhu on 11/6/2015.
 */
//IIFE
(function () {
    "use strict";
    var app = angular.module('productManagement', ["ui.router", "ui.mask", "ui.bootstrap"]);

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
                abstract: true,
                //:productId changes based on actual
                url: "/products/edit/:productId",
                templateUrl: "app/products/productEditView.html",
                controller: "ProductEditCtrl",
                resolve: {
                    productWithSpecificId: function ($stateParams) {
                        var productId = $stateParams.productId;
                        return productId;
                    }
                }
            })

            .state("productEdit.info", {
                //:productId changes based on actual
                url: "/",
                templateUrl: "app/products/productEditInfoView.html"
            })

            .state("productEdit.price", {
                //:productId changes based on actual
                url: "/price",
                templateUrl: "app/products/productEditPriceView.html"
            })

            .state("productEdit.tags", {
                //:productId changes based on actual
                url: "/tags",
                templateUrl: "app/products/productEditTagsView.html"
            })

            .state("productDetail", {
                //:productId changes based on actual
                url: "/products/:productId",
                templateUrl: "app/products/productDetailView.html",
                controller: "ProductDetailCtrl",
                resolve: {
                    productWithSpecificId: function ($stateParams) {
                        var productId = $stateParams.productId;
                        return productId;
                    }
                }
            })
    }]);

})();