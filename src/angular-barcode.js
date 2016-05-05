(function (angular) {
    'use strict';

    /*
     * @ngdoc function
     * @name angular barcode
     * @description
     * angular barcode directive
     */
    angular
        .module('angular-barcode', [])
        .directive('barcode', barcode);

    barcode.$inject = [];

    function barcode() {

        return {
            scope: {
                value: '@',
                type: '@'
            },
            restrict: 'EA',
            link: link
        };

        function link(scope, element, attrs) {

            var value = scope.value;
            var type = angular.lowercase(scope.type);

            console.log(element.barcode);
            element.barcode(value, type, {
                barWidth: parseInt(attrs.barWidth) || 2,
                barHeight: parseInt(attrs.barHeight) || 45
            }).css({
                'margin': '0 auto'
            });

        }
    }
})(angular);