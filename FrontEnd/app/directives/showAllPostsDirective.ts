class ShowAllPostsDirective {
    static $inject: string[] = [];
    constructor() {
        
    }

    static directive():ng.IDirective {
        var directive: ng.IDirective = {};

        directive.scope = { data: '=' };
        directive.templateUrl = 'app/directives/all-posts.html';
        //directive.template = 'this is directive';
        
        return directive;
    }
}

App.app.directive("showAllPostsDirective",()=> ShowAllPostsDirective.directive());