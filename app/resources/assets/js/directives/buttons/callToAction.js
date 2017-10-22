/**
 * Created by iKase on 10/21/2017.
 */
myApp.directive('callToAction', function(){
    return {
        templateUrl: 'templates/buttons/callToAction.html',
        replace: true,
        scope: {
            buttonText:  '@',
            anchorLink:  '@'
        }
    }

});