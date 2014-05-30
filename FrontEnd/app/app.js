﻿var App;
(function (App) {
    App.app = angular.module('app', ['ui.router', 'ui.bootstrap']);
    App.webApiURLForAccountRegister = 'http://localhost:14170/api/Account/Register';
    var appViewPath = 'app/views/';
    App.app.value('$', $);
    App.app.config([
        '$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
            $urlRouterProvider.otherwise('/home');
            $stateProvider.state('home', {
                url: '/home',
                views: {
                    '': {
                        templateUrl: appViewPath + 'home/home.html'
                    },
                    'header@home': {
                        templateUrl: appViewPath + 'home/home-header.html'
                    },
                    'feed@home': {
                        templateUrl: appViewPath + 'home/home-newsfeed.html',
                        controller: NewsFeedCtrl
                    },
                    'ticker@home': {
                        //templateUrl: appViewPath + 'home/home-ticker.html',
                        controller: HomeTickerCtrl
                    }
                }
            }).state('profile', {
                url: '/profile',
                views: {
                    '': {
                        templateUrl: appViewPath + '/profile/profile.html'
                    },
                    'info@profile': {
                        templateUrl: appViewPath + '/profile/profile-info.html',
                        controller: ProfileInfoCtrl,
                        resolve: {
                            user: function () {
                                var userService = new UsersService();

                                //return userService.getUser("1");
                                return {
                                    username: 'username',
                                    name: 'name',
                                    email: 'email'
                                };
                            }
                        }
                    },
                    'userposts@profile': {
                        templateUrl: appViewPath + 'profile/profile-posts.html',
                        controller: ProfilePostsCtrl
                    },
                    'friends@profile': {
                        templateUrl: appViewPath + 'profile/profile-friends.html',
                        controller: ProfileFriendsCtrl
                    }
                }
            }).state('launchpad', {
                url: '/',
                views: {
                    '': {
                        templateUrl: appViewPath + 'launchpad/launchpad.html'
                    },
                    'signup@launchpad': {
                        templateUrl: appViewPath + 'launchpad/signup.html',
                        controller: SignupCtrl
                    },
                    'login@launchpad': {
                        templateUrl: appViewPath + 'launchpad/login.html',
                        controller: LoginCtrl
                    }
                }
            });
        }
    ]);

    App.app.directive('match', function () {
        return {
            require: 'ngModel',
            restrict: 'A',
            scope: {
                match: '='
            },
            link: function (scope, elem, attrs, ctrl) {
                scope.$watch(function () {
                    return (ctrl.$pristine && angular.isUndefined(ctrl.$modelValue)) || scope.match === ctrl.$modelValue;
                }, function (currentValue) {
                    ctrl.$setValidity('match', currentValue);
                });
            }
        };
    });
})(App || (App = {}));
//# sourceMappingURL=app.js.map
