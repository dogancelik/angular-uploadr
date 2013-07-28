/**
 * angular-uploadr v1.0.0
 * (c) 2013 Doğan Çelik http://dogancelik.com
 * License: MIT
 */
angular.module('ngUploadr', []).service('uploadr', function ($http, $q, $rootScope) {
  var _url,
      _success,
      _error,
      _data = new FormData(),
      _defaultConfig = {
        method: 'POST',
        headers: {
          'Content-Type': undefined
        },
        transformRequest: angular.identity
      },
      _config = {},
      _empty = true;
  
  // Resets all fields
  this.clear = function () {
    _data = new FormData();
    _empty = true;

    return this;
  };

  // Sets upload URL
  this.url = function (url) {
    _url = url;
    _empty = false;

    return this;
  };

  // Adds a field to form
  //
  // Use this for non-file fields
  this.field = function (name, data) {
    _data.append(name, data);
    _empty = false;

    return this;
  };

  // Adds a file to form. Use this for files *only*.
  //
  // Optionally use second argument name for custom field name
  this.files = function (files, name) {
    name = name || "files";

    // If it's a single file add it to an array for iteration
    if (files instanceof File) {
      files = [files];
    }

    for (index in files) {
      file = files[index]
      _data.append(name, file)
    }
    _empty = false;

    return this;
  };

  // Gets final config for $http
  function config() {
    var url_and_data = {
      url: _url,
      data: _data
    };

    return angular.extend({}, _defaultConfig, url_and_data, _config);
  }

  // Sets options for $http
  this.config = function (config) {
    _config = config;

    return this;
  };

  // Starts the upload
  this.upload = function () {
    if (_empty == true) {
      throw "Data is empty; use field() or files().";
    }

    if (_url == null) {
      throw "URL is empty; use url().";
    }

    // If rootScope is not in a digest cycle, trigger one
    if($rootScope.$$phase) {
      return $http(config());
    } else {
      return $rootScope.$apply(function () {
        return $http(config());
      });
    }
  };
});