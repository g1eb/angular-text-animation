'use strict';

/**
 * Floating text animation (random)
 */
angular.module('g1b.text-animation', []).
directive('textAnimation', function () {
  return {
    restrict: 'E',
    replace: true,
    templateUrl: './text-animation.html',
    compile: function () {
      return {
        pre: function () {},
        post: function (scope, element) {
        }
      };
    }
  };
});
