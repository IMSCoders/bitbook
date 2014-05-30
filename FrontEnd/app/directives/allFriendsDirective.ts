class AllFriendsDirective {
    static $inject: string[] = [];
    constructor() {
        
    }

    static friends(): ng.IDirective {
        var directive: ng.IDirective = {};

        directive.scope = { data: '=' };
        directive.templateUrl = 'app/directives/all-friends.html';
        directive.controller = FriendsDirectiveCtrl;
        return directive;
    }
}
App.app.directive("allFriendsDirective",()=> AllFriendsDirective.friends());