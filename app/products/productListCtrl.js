/**
 * Created by jzhu on 11/6/2015.
 */
(function(){
    "use strict";
    angular
        .module("productManagement")
        .controller("ProductListCtrl",ProductListCtrl);

    //function ProductListCtrl(productResource){
    //    var vm = this;
    //
    //    productResource.query(function(data){
    //        vm.products=data;
    //    });
    //
    //    vm.showImage=false;
    //
    //    vm.toogleImage=function(){
    //        vm.showImage=!vm.showImage;
    //    }
    //}


    function ProductListCtrl(){
        var vm = this;

        productResource.query(function(data){
            vm.products=data;
        });

        vm.showImage=false;

        vm.toogleImage=function(){
            vm.showImage=!vm.showImage;
        }
    }
}());