/// <reference path="../references.ts" />
class AuthService {
    static $inject: string[] = ['$http'];
    constructor(private $http) {
        
    }

    login(user:IUserLogin) {
        this.$http.post(App.webApiUrl + 'Account/Register', user).success(() => {
            alert('success msg');
        }).error(function (data, status, headers, config) {

                // called asynchronously if an error occurs
                // or server returns response with an error status.
            }); 
    }

    signup(user: IUser) {
        this.$http.post(App.webApiUrl+'Account/Register', user).success(() => {
            alert('success msg');
        }).error(function (data, status, headers, config) {

            // called asynchronously if an error occurs
            // or server returns response with an error status.
        });
        
    }
} 

App.app.service("AuthService", AuthService)