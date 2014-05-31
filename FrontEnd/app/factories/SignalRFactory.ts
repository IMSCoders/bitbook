class SignalRFactory {
    private proxy:HubProxy;
    private connection :HubConnection;
    static $inject: string[] = ['$','$rootScope'];
    constructor(private $, private $rootScope) {
        
    }

    initialize(functionCallBack:Function) {
        //this.connection = $.hubConnection('http://localhost:5316/signalr/hubs');
        //this.proxy = this.connection.createHubProxy('BitBookHub');
        //this.connection.start();

        //this.proxy.on('broadcastMessage', (name, message) => {
        //    this.$rootScope.$apply(() => {
        //        alert('in apply');
        //        functionCallBack(name, message);
        //    });
        //});
    }

    addNote(name,message) {
        //this.proxy.invoke('send');
    }
    sendRequest() {
        
        //this.proxy.invoke('Send','a','b').done(() => {
        //    alert('in invoke success');
        //});
        
    }
}

App.app.factory("SignalRFactory", () => new SignalRFactory("$", "$rootScope"));