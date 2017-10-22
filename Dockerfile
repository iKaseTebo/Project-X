FROM ikasetebo/nginx-php7.1:v1.00

WORKDIR /
COPY ./entrypoint/entrypoint.sh /

RUN apt-get update && apt-get install -y nodejs \
    -y nodejs-legacy \
    -y build-essential \
    -y npm \
    && dos2unix ./entrypoint.sh


COPY ./nginx-conf/conf/conf.d/ /etc/nginx/conf.d/
COPY ./nginx-conf/sites-available/default /etc/nginx/sites-available/default
COPY ./app/ /usr/share/nginx/html/

WORKDIR /etc/php/7.1/fpm
COPY php-conf/fpm/php.ini php.ini

EXPOSE 80 443

VOLUME ["/shared/","/usr/share/nginx/html"]

WORKDIR /
ENTRYPOINT ["./entrypoint.sh"]

