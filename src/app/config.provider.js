(function () {
  'use strict';

  angular.module("janusHangouts.config", [])
    .provider('jhConfig', function () {
      var config = {
        "janusServer"     : null,
        "janusServerSSL"  : null,
        "janusDebug"      : false,
        "httpsAvailable"  : true,
        "httpsUrl"        : null,
        "videoThumbnails" : true,
      };

      return {
        $get: function () {
          return config;
        },
        $set: function(k, v) {
          config[k] = v;
        }
      };
    });
})();
