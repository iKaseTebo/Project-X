var elixir = require('laravel-elixir');
var bowerDir = './bower_components/';

elixir(function (mix) {
    mix.sass('app.scss');
    mix.sass([ bowerDir+'materialize/sass/materialize.scss' ], 'public/css/materialize.css');

    mix.scripts([
        'app.js'
    ], 'public/js/app.js');

    mix.scripts([
        'controllers/*.js',
        'controllers/**/*.js'
    ], 'public/js/controllers.js');

    mix.scripts([
        'directives/*.js',
        'directives/**/*.js'
    ], 'public/js/directives.js');

    mix.scripts([
        'angular/angular.js',
        'angular-route/angular-route.js',
        'angular-cookies/angular-cookies.js'
    ], 'public/js/angular.js', bowerDir);

    mix.scripts([
        'jquery/dist/jquery.js'
    ], 'public/js/jquery.js', bowerDir);

    mix.scripts([
        'materialize/dist/js/materialize.js'
    ], 'public/js/materialize.js', bowerDir);
});