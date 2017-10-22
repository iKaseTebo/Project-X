#!/bin/bash
# My first script


service php7.1-fpm start;
nginx -g "daemon off;";

mv composer /usr/local/bin/composer
chmod +x /usr/local/bin/composer

cd /usr/share/nginx/html
composer install
npm install

#chgrp -R www-data storage bootstrap/cache
#chmod -R ug+rwx storage bootstrap/cache

#npm install && composer install && chgrp -R www-data storage bootstrap/cache && chmod -R ug+rwx storage bootstrap/cache