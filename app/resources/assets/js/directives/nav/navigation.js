/**
 * Created by iKase on 10/21/2017.
 */
myApp.directive('navigation', function(){
    return {
        templateUrl: 'templates/nav/navigation.html',
        scope: {
            logged: '@'
        }
    }
});