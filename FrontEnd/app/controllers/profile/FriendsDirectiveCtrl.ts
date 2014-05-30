class FriendsDirectiveCtrl {
    friendsDirectiveField = 'fdf';
    static $inject: string[] = ['$scope', 'FriendsService'];
    constructor(private $scope, private friendsService:FriendsService) {
        $scope.model = this;
    }

    unfriend() {
        this.friendsService.unfriend();
    }

    hideFromFeed() {
        this.friendsService.hideFromFeed();
    }
}

App.app.controller("FriendsDirectiveCtrl", FriendsDirectiveCtrl);