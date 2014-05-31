var JoinGroupFactory = (function () {
    function JoinGroupFactory($, $rootScope) {
        this.$ = $;
        this.$rootScope = $rootScope;
    }
    JoinGroupFactory.prototype.initialize = function () {
        return this;
    };

    JoinGroupFactory.prototype.addNote = function (name, message) {
    };
    JoinGroupFactory.prototype.sendRequest = function () {
    };
    JoinGroupFactory.$inject = ['$', '$rootScope', 'JoinGroupFactory'];
    return JoinGroupFactory;
})();

App.app.factory("JoinGroupFactory", function () {
    return new JoinGroupFactory("$", "$rootScope");
});
