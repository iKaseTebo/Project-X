/**
 * Created by iKase on 10/21/2017.
 */
myApp.directive('singleColumn', function(){
    return {
        templateUrl: 'templates/textContent/singleColumn.html',
        replace: true,
        scope: {
            iconText: '@',
            headerText: '@',
            contentText: '@'
        }
    }

});