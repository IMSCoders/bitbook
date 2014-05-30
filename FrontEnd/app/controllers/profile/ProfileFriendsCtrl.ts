class ProfileFriendsCtrl {
    friendsList:IUser[];
    status = { isopen: false };
    adib = 'adib';

    static $inject: string[] = ['$scope','FriendsService'];
    constructor(private $scope, private friendsService:FriendsService) {
        $scope.model = this;
    }
   
  

    getAllFriends() {
        //this.friendsList = this.friendsService.getAllFriends("1");
    }

    toggled (open ) {
        console.log('Dropdown is now: ', open);
    }

    toggleDropdown ($event){
        $event.preventDefault();
        $event.stopPropagation();
        this.$scope.status.isopen = !this.$scope.status.isopen;
    }

    
} 