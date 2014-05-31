var SignalRFactory = (function () {
    function SignalRFactory($, $rootScope) {
        this.$ = $;
        this.$rootScope = $rootScope;
    }
    SignalRFactory.prototype.initialize = function (functionCallBack) {
        //this.connection = $.hubConnection('http://localhost:5316/signalr/hubs');
        //this.proxy = this.connection.createHubProxy('BitBookHub');
        //this.connection.start();
        //this.proxy.on('broadcastMessage', (name, message) => {
        //    this.$rootScope.$apply(() => {
        //        alert('in apply');
        //        functionCallBack(name, message);
        //    });
        //});
    };

    SignalRFactory.prototype.addNote = function (name, message) {
        //this.proxy.invoke('send');
    };
    SignalRFactory.prototype.sendRequest = function () {
        //this.proxy.invoke('Send','a','b').done(() => {
        //    alert('in invoke success');
        //});
    };
    SignalRFactory.$inject = ['$', '$rootScope'];
    return SignalRFactory;
})();

App.app.factory("SignalRFactory", function () {
    return new SignalRFactory("$", "$rootScope");
});
//# sourceMappingURL=SignalRFactory.js.map
