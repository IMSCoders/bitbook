var JoinGroupFactory = (function () {
    function JoinGroupFactory($, $rootScope) {
        this.$ = $;
        this.$rootScope = $rootScope;
    }
    JoinGroupFactory.prototype.initialize = function () {
        this.connection = $.hubConnection('http://localhost:5316/signalr/hubs');
        this.proxy = this.connection.createHubProxy('BitBookHub');
        var root = this;
        this.connection.start().done(function () {
            root.sendRequest();
        });

        //this.proxy.on('broadcastMessage', (name, message) => {
        //    this.$rootScope.$apply(() => {
        //        alert('in apply');
        //        functionCallBack(name, message);
        //    });
        //});
        return this;
    };

    JoinGroupFactory.prototype.addNote = function (name, message) {
        this.proxy.invoke('join');
    };
    JoinGroupFactory.prototype.sendRequest = function () {
        this.proxy.invoke('joinGroupByOwnName', 'amit').done(function () {
            alert('in join group by own name');
        });
    };
    JoinGroupFactory.$inject = ['$', '$rootScope', 'JoinGroupFactory'];
    return JoinGroupFactory;
})();

App.app.factory("JoinGroupFactory", function () {
    return new JoinGroupFactory("$", "$rootScope");
});
//# sourceMappingURL=JoinGroupFactory.js.map
