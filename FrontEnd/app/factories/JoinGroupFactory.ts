class JoinGroupFactory {
    private proxy: HubProxy;
    private connection: HubConnection;
    static $inject: string[] = ['$', '$rootScope', 'JoinGroupFactory'];
    constructor(private $, private $rootScope) {

    }

    initialize() {
        this.connection = $.hubConnection('http://localhost:5316/signalr/hubs');
        this.proxy = this.connection.createHubProxy('BitBookHub');
        var root = this;
        this.connection.start().done(() => {
            
            root.sendRequest();
        });

        //this.proxy.on('broadcastMessage', (name, message) => {
        //    this.$rootScope.$apply(() => {
        //        alert('in apply');
        //        functionCallBack(name, message);
        //    });
        //});
        return this;
    }

    addNote(name, message) {
        this.proxy.invoke('join');
    }
    sendRequest() {

        this.proxy.invoke('joinGroupByOwnName', 'amit').done(() => {
            alert('in join group by own name');
        });

    }
}

App.app.factory("JoinGroupFactory", () => new JoinGroupFactory("$", "$rootScope"));