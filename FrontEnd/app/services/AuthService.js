/// <reference path="../references.ts" />
var AuthService = (function () {
    function AuthService($http) {
        this.$http = $http;
    }
    AuthService.prototype.login = function (user) {
        this.$http.post(App.webApiUrl + 'Account/Register', user).success(function () {
            alert('success msg');
        }).error(function (data, status, headers, config) {
            // called asynchronously if an error occurs
            // or server returns response with an error status.
        });
    };

    AuthService.prototype.isAuthenticated = function () {
        return true;
    };

    AuthService.prototype.signup = function (user) {
        this.$http.post(App.webApiUrl + 'Account/Register', user).success(function () {
            alert('success msg');
        }).error(function (data, status, headers, config) {
            // called asynchronously if an error occurs
            // or server returns response with an error status.
        });
    };
    AuthService.$inject = ['$http'];
    return AuthService;
})();

App.app.service("AuthService", AuthService);
//# sourceMappingURL=AuthService.js.map
