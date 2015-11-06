/**
 * Created by jzhu on 11/6/2015.
 */
//(function () {
//    "use strict";
//    angular
//        .module('common.services')
//        .factory("productResource",
//                ["$resource",
//                productResource]);
//
//    function productResource($resource){
//        return $resource("/api/products/:productId");
//    }
//})();


(function () {
    'use strict';

    angular
        .module('common.services')
        .factory('productResource',
        ['$resource',

            productResource]);

    function productResource($resource) {
        return $resource('/api/products/:id');
    }

})();