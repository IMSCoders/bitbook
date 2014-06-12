module App {
    export var app = angular.module('app', ['ui.router', 'ui.bootstrap']);
    export var webApiUrl = 'http://localhost:14170/api/';
    //export var webApiURLForPostStatus = 'http://localhost:14170/api/Post/PostStatus';

    var appViewPath = 'app/views/';
    app.value('$', $);
    app.config([
        '$stateProvider', '$urlRouterProvider', ($stateProvider, $urlRouterProvider) => {

            $urlRouterProvider.otherwise('launchpad');
            $stateProvider
                .state('default', {
                    url: '/',
                    templateUrl: appViewPath + 'home/home-header.html',
                    controller:HomeHeaderCtrl
                })
                .state('default.home', {
                    url: 'home',
                    views: {
                        '': {
                            templateUrl: appViewPath + 'home/home.html',
                        },
                        'feed@default.home': {
                            templateUrl: appViewPath + 'home/home-newsfeed.html',
                            controller: NewsFeedCtrl
                        },
                        'ticker@default.home': {
                            //templateUrl: appViewPath + 'home/home-ticker.html',
                            controller: HomeTickerCtrl
                        }
                    }
                })
                .state('default.profile', {
                    url: 'profile',
                    views: {
                        '': {
                            templateUrl: appViewPath + 'profile/profile.html'
                        }
                    }
                })
                .state('default.profile.timeline', {
                    url:'/timeline',
                    views: {
                        '': {
                            templateUrl: appViewPath + 'profile/timeline.html'
                        },
                        'info@default.profile.timeline': {
                            templateUrl: appViewPath + 'profile/profile-info.html',
                            controller: ProfileInfoCtrl,
                            resolve: {
                                user: () => {
                                    var userService = new UsersService();
                                    //return userService.getUser("1");
                                    return {
                                        username: 'username',
                                        name: 'name',
                                        email: 'email'
                                    }
                                }
                            }
                        },
                        'userposts@default.profile.timeline': {
                            templateUrl: appViewPath + 'profile/profile-posts.html',
                            controller: ProfilePostsCtrl
                        },
                        'friends@default.profile.timeline': {
                            templateUrl: appViewPath + 'profile/profile-friends.html',
                            controller: ProfileFriendsCtrl
                        }
                    } 
                })

                .state('default.profile.photos', {
                    url: '/photos',
                    views: {
                        
                    }
                })
                .state('launchpad', {
                    url: '/launchpad',
                    allowAnonymous: true,
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

    app.run([
        '$rootScope', '$state', 'AuthService',
        ($rootScope, $state, authService: AuthService) => {
            var auth = authService.isAuthenticated();
            $rootScope.$on('$stateChangeStart', (event, toState, toParams, fromState, fromParams) => {
                if (!toState.allowAnonymous && !auth) {
                    $state.go('launchpad');
                    event.preventDefault();
                }
            });
        }
    ]);

    app.directive('match', function () {
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
}