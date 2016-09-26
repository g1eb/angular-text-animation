'use strict';

/**
 * Floating text animation (random)
 */
angular.module('g1b.text-animation', []).
directive('textAnimation', ['$document', '$interval', '$timeout', function ($document, $interval, $timeout) {
  return {
    restrict: 'E',
    replace: true,
    templateUrl: './text-animation.html',
    compile: function () {
      return {
        pre: function () {},
        post: function (scope, element) {
          var chars = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
          $interval(function () {
            for ( var i = 0; i < Math.floor(Math.random() * 5); i++ ) {
              var character = chars[Math.floor(Math.random() * chars.length)];
              var duration = Math.floor(Math.random() * 15);
              var offset = Math.floor(Math.random() * (45 - duration * 3)) + 3;
              var size = 12 + (15 - duration);
              var span = angular.element('<span class="animated-text" style="right:'+offset+'vw; font-size: '+size+'px; animation-duration:'+duration+'s">'+character+'</span>');
              element.append(span);
              $timeout(function (span) {
                span.remove();
              }, duration * 1000, false, span);
            }
          }, 250);
        }
      };
    }
  };
}]);
