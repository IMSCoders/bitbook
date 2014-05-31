﻿var AuthService = (function () {
    function AuthService($http) {
        this.$http = $http;
    }
    AuthService.prototype.login = function (user) {
        this.$http.post(App.webApiUrl + 'Account/Register', user).success(function () {
            alert('success msg');
        }).error(function (data, status, headers, config) {
        });
    };

    AuthService.prototype.signup = function (user) {
        this.$http.post(App.webApiUrl + 'Account/Register', user).success(function () {
            alert('success msg');
        }).error(function (data, status, headers, config) {
        });
    };
    AuthService.$inject = ['$http'];
    return AuthService;
})();

App.app.service("AuthService", AuthService);
