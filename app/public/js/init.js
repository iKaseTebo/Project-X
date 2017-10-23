window.fbAsyncInit = function() {
    FB.init({ 
      appId: '306120856461069',
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

(function($){
  $(function(){

    $('.button-collapse').sideNav();
    $('.parallax').parallax();

  }); // end of document ready
})(jQuery); // end of jQuery name space