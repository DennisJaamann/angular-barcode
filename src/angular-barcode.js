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

            var options = {
                output: attrs.output || 'css',
                bgColor: attrs.bgColor || '#FFF',
                color: attrs.color || '#000',
                barWidth: parseInt(attrs.barWidth) || 1,
                barHeight: parseInt(attrs.barHeight) || 50,
                moduleSize: parseInt(attrs.barHeight) || 5,
                posX: parseInt(attrs.posX) || 0,
                posY: parseInt(attrs.posY) || 0,
                addQuietZone: attrs.addQuietZone || false
            };

            if (options.output === 'canvas') {
                console.log("implement this");
            }
            else {
                element.barcode(value, type, options)
                    .css({
                        'margin': '0 auto'
                    });
            }


        }
    }
})(angular);