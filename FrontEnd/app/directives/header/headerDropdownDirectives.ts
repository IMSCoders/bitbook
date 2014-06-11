 class HeaderDropdownDirectives {
     
     static templatePath = 'app/directives/header/';

     static messagesDropdownDirective():ng.IDirective {
         var directive: ng.IDirective = {};

         directive.scope = { messages: '=' };
         directive.templateUrl = this.templatePath + 'messages/messagesDropdownTemplate.html'; 

         return directive;
     }

     static friendRequestsDropdownDirective(): ng.IDirective {
         var directive: ng.IDirective = {};

         directive.scope = { friendrequests: '=' };
         directive.templateUrl = this.templatePath + 'friendRequests/friendRequestsDropdownTemplate.html';

         return directive;
     }

     static notificationsDropdownDirective(): ng.IDirective {
         var directive: ng.IDirective = {};

         directive.scope = {notifications:'='}
         directive.templateUrl = this.templatePath + 'notifications/notificationsDropdownTemplate.html';

         return directive;
     }
 }

 App.app.directive('headerMessagesDropdownDirective', () => HeaderDropdownDirectives.messagesDropdownDirective());
 App.app.directive('headerFriendrequestsDropdownDirective', () => HeaderDropdownDirectives.friendRequestsDropdownDirective());
 App.app.directive('headerNotificationsDropdownDirective', () => HeaderDropdownDirectives.notificationsDropdownDirective());