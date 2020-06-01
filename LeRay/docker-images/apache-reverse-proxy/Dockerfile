FROM php:7.4.6-apache

RUN apt update && apt install -y nano

COPY conf/ /etc/apache2

RUN a2enmod proxy proxy_http
RUN a2ensite 000-* 001-*
