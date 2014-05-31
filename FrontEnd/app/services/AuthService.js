/// <reference path="../references.ts" />
var AuthService = (function () {
    function AuthService($http) {
        this.$http = $http;
    }
    AuthService.prototype.login = function (user) {
    };

    AuthService.prototype.signup = function (user) {
        this.$http.post(App.webApiURLForAccountRegister, user).success().error(function (data, status, headers, config) {
            // called asynchronously if an error occurs
            // or server returns response with an error status.
        });
    };
    AuthService.$inject = ['$http'];
    return AuthService;
})();

App.app.service("AuthService", AuthService);
//# sourceMappingURL=AuthService.js.map
