function onLoadFunction(){
    gapi.client.setApiKey('AIzaSyC1JAsVigMIGJzoU4WM1ilUAr728mJn9CM');
    gapi.client.load('plus', 'v1', function () {});
}

(function($){
  $(function(){

    $('.button-collapse').sideNav();
    $('.parallax').parallax();

  }); // end of document ready
})(jQuery); // end of jQuery name space