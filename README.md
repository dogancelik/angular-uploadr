*Uploadr* is an Angular module for uploading files easily. Uploadr has **no dependencies** (no jQuery).

Uploadr supports Firefox 4+, Chrome 7+, IE 10+, Opera 12+. [Check this Can I Use page for more details.](http://caniuse.com/xhr2)

## How to use
Download `angular-uploadr.js` and include it in your page.

If you are using a directive, load uploadr like this:

    angular.directive('myExample', function (uploadr)
      return function (scope, el, attrs) {
        // your code
      };
    );

If it's a controller:

    angular.controller('MyController', function ($scope, uploadr) {
      // your code
    });

[Here's an example using a directive for file input.](http://jsbin.com/idepoq/6/edit)