/**
 * Created by iKase on 10/21/2017.
 */
myApp.directive('navigation', function(){
    return {
        templateUrl: 'templates/nav/navigation.html',
        // replace: true,
        scope: {
            logged: '@'
        }
    }
});
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
//# sourceMappingURL=directives.js.map
