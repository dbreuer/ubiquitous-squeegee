//aat-scrollr.js
/**
 * Created by David Breuer on 12/10/15.
 *
 * @file aat-scrollr.js
 * @description
 *
 */

function AATSkrollrController() {
    console.log("Angular you fckr");
    angular.element(window).ready(function() {
        document.body.setAttribute("class", "loaded");
    });
}


angular
    .module('aatScrollr', ['ngRoute', 'sn.skrollr'])
    .config(function(snSkrollrProvider, $routeProvider, $locationProvider) {
        snSkrollrProvider.config = { smoothScrolling: true};

        $routeProvider
            .when('/', {
                templateUrl: 'views/main.view.html',
                controller: 'AATSkrollrController',
                controllerAs: 'AATSC'
            })
            .otherwise('/');

        // configure html5 to get links working on jsfiddle
        $locationProvider.html5Mode(true);
    })

// 2. initialise skrollr at runtime
    .run(["snSkrollr", function(snSkrollr) {
        snSkrollr.init({
            edgeStrategy: 'set',
            easing: {
                WTF: Math.random,
                inverted: function(p) {
                    return 1-p;
                }
            }});
    }])
    .controller('AATSkrollrController', AATSkrollrController);


