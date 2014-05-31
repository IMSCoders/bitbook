var SignalRFactory = (function () {
    function SignalRFactory($, $rootScope) {
        this.$ = $;
        this.$rootScope = $rootScope;
    }
    SignalRFactory.prototype.initialize = function (functionCallBack) {
    };

    SignalRFactory.prototype.addNote = function (name, message) {
    };
    SignalRFactory.prototype.sendRequest = function () {
    };
    SignalRFactory.$inject = ['$', '$rootScope'];
    return SignalRFactory;
})();

App.app.factory("SignalRFactory", function () {
    return new SignalRFactory("$", "$rootScope");
});
