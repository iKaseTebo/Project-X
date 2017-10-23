/**
 * Created by iKase on 10/10/2017.
 */
myApp.controller('mainController', ['$scope', '$http', '$filter', function ($scope, $http, $filter) {
	$scope.gmail = {
		username: "",
		email: ""
	};

	$scope.onGoogleLogin = function() {
		gapi.client.load('plus', 'v1',function(){}); 
		var params = {
			'clientid': '1020720557495-77q2bro5446gtjtnv3dnmqp7iq853q0q.apps.googleusercontent.com',
			'cookiepolicy': 'single_host_origin',
			'callback': function(result){
				if(result['status']['signed_in']) {
					var request = gapi.client.plus.people.get(
					{
						'userId': 'me'
					}
				);
				request.execute(function(resp) {
					console.log(resp);
					// $scope.$apply(function() {
					// 	$scope.gmail.username = resp.displayName;
					// 	$scope.gmail.email = resp.emails[0].value;
					// });
				});
			} 
        },
        
        'approvalprompt': 'force',
        'scope': 'https://www.googleapis.com/auth/plus.login https://www.googleapis.com/auth/userinfo.email' 
	};

		gapi.auth.signIn(params);
	}

	$scope.facebook = {
		username: "",
		email: ""
	};

	$scope.onFBLogin = function() {
		FB.login(function(response) {
			if(response.authResponse) {
				FB.api('/me', 'GET', {fields: 'email, first_name, name, id, picture, gender'}, function(response) {
					console.log(response);
					$scope.$apply(function() {
						$scope.facebook.username = response.name;
						$scope.facebook.email = response.email;
					});
				});
			} else {

			}
		}, {
			scope: 'email, user_likes',
			return_scopes: true
		});
	}

}]);