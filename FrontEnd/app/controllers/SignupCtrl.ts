class SignupCtrl {
    static $inject: string[] = ['$scope' , 'AuthService'];

    months: string[] = [
            'January', 'February', 'March', 'April', 'May', 'June',
            'July', 'August', 'September', 'October', 'November', 'December'
        ];
    day:number[] = [];
    year: number[] = [];

    constructor(private $scope, private authService: AuthService) {
        $scope.model = this;
        var i;
        
        for (i = 1; i <= 31; i++)
            this.day.push(i);

        for (i = new Date().getFullYear(); i > 1904; i--) {
            this.year.push(i);
        }
    }

    signup() {

        var username = this.$scope.newuser.username;
        var password = this.$scope.newuser.password;
        var email = this.$scope.newuser.email;

        var newuser: IUser = {
            UserName: username,
            Email: email,
            Password: password,
            ConfirmPassword: password
        };
        this.authService.signup(newuser);        
    }
} 