interface IHeaderScope extends ng.IScope {
    name:string;
    model: HomeHeaderCtrl
}
class HomeHeaderCtrl {

    messages = ['msg a', 'msg b', 'msg c', 'msg  e'];
    friendrequests = ['friend a', 'friend b', 'friend d'];
    notifications = ['noti a', 'noti b', 'noti c'];

    static $inject: string[] = ['$scope'];
    constructor(private $scope : IHeaderScope) {
        $scope.model = this;
        
    }
}

App.app.controller("HomeHeaderCtrl", HomeHeaderCtrl);