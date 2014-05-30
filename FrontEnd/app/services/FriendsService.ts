class FriendsService {
    static $inject: string[] = [];
    constructor() {
        
    }

    getAllFriends(userId:string) {
        
    }

    unfriend() {
        alert('unfriend service');
    }

    hideFromFeed() {
        alert('hide from feed service');
    }
}

App.app.service("FriendsService", FriendsService);