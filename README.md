*Uploadr* is an Angular module for uploading files easily. Uploadr has **no dependencies** (no jQuery).

Uploadr supports Firefox 4+, Chrome 7+, IE 10+, Opera 12+. [Check this Can I Use page for more details.](http://caniuse.com/xhr2)

Tested with Angular 1.1.

## How to use
Download `angular-uploadr.js` and include it in your page.

### Example 1
[Here's an example using a directive for file input.](http://jsbin.com/idepoq/6/edit)

### Example 2
If you are using a controller, load uploadr like this:

    angular.controller('MyController', function ($scope, uploadr) {
      // your code
    });

## API

### uploadr.url(*string* url)
Sets the upload URL.

**Returns:** *uploadr*

### uploadr.clear()
Clears all fields including files.

**Returns:** *uploadr*

### uploadr.field(*string* name, *string* data)
Adds a field to the form.

**Returns:** *uploadr*

### uploadr.files(*File* files[, *string* name])
### uploadr.files(*File[]* files[, *string* name])
Adds a [file](https://developer.mozilla.org/en-US/docs/Web/API/File) or a file array to the form. *name* is field name and optional, defaults to "files".

**Returns:** *uploadr*

### uploadr.config(*object* config)
Overrides default uploadr $http options.

**Returns:** *uploadr*

### uploadr.upload()
Starts the upload.

**Returns:** *$http* (*promise*)

### $http.success(*function* callback)
"this callback will be called asynchronously when the response is available"

**Returns:** *promise*

### $http.error(*function* callback)
"called asynchronously if an error occurs or server returns response with an error status."

**Returns:** *promise*

* callback: function(data, status, headers, config), all are optional

## Links
* [Read docs for $http](http://docs.angularjs.org/api/ng.$http)
* [Read annotated source of uploadr](http://rawgithub.com/dogancelik/angular-uploadr/docs/angular-uploadr.html)