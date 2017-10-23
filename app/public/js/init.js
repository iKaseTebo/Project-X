(function($){
    $(function(){

        $('.button-collapse').sideNav();
        $('.parallax').parallax();

    }); // end of document ready
})(jQuery); // end of jQuery name space

function onLoadFunction(){
    gapi.client.setApiKey('AIzaSyC1JAsVigMIGJzoU4WM1ilUAr728mJn9CM');
    gapi.client.load('plus', 'v1', function () {});
}

window.fbAsyncInit = function() {
    FB.init({
      appId: '1482714641849052',
      status: true,
      cookie: true,
      xfbml: true,
      version: 'v2.8'
    });



    FB.getLoginStatus(function(response) {
    	if(response.status === 'connected') {
    		// Connected
		} else if(response.status === 'not_authorized') {
			// Not authorized
		} else {
			// Not logged in
		}
    });
};

  (function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     js.src = "https://connect.facebook.net/en_US/sdk.js";
     fjs.parentNode.insertBefore(js, fjs);
   }(document, 'script', 'facebook-jssdk'));



