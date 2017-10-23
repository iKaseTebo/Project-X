/**
 * Created by iKase on 10/10/2017.
 */
myApp.controller('mainController', ['$scope', '$http', '$filter', function ($scope, $http, $filter) {
	$scope.gmail = {
		username: "",
		email: ""
	};

	$scope.onGoogleLogin = function() {
		var params = {
			'clientid': '862262554506-mnr23l6d4tbm5atg5b72eo5df7b5p1ta.apps.googleusercontent.com',
			'cookiepolicy': 'single_host_origin',
			'callback': function(result){
				if(result['status']['signed_in']) {
					var request = gapi.client.plus.people.get(
					{
						'userId': 'me'
					}
				);
				request.execute(function(resp) {
					$scope.$apply(function() {
						$scope.gmail.username = resp.displayName;
						$scope.gmail.email = resp.emails[0].value;
					});
				});
			} 
        },
        
        'approvalprompt': 'force',
        'scope': 'https://www.googleapis.com/auth/plus.login https://www.googleapis.com/auth/plus.profile.emails.read' 
	};

	gapi.auth.signIn(params);
}
}]);
/**
 * Created by iKase on 10/10/2017.
 */
myApp.controller('signInController', ['$scope', '$http', '$filter', function ($scope, $http, $filter) {

}]);
//# sourceMappingURL=controllers.js.map
