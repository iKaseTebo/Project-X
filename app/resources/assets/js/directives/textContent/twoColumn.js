/**
 * Created by iKase on 10/21/2017.
 */
/**
 * Created by iKase on 10/21/2017.
 */
myApp.directive('twoColumn', function(){
    return {
        templateUrl: 'templates/textContent/twoColumn.html',
        replace: true,
        scope: {
            iconText:  '@',
            headerText:  '@',
            contentText: '@'
        }
    }

});