# Infra Alban Favre

## step 1
- clone repo
- create dir docker-images
- create dir apache-php-image
- touch Dockerfile
- copy pasted Dockerfile php:7.4.6-apache from Quentin Le Ray because he's a cool dude
- create dir src
- did this: docker run -d -p 9090:80 php:7.4.6-apache
- it did not read my file it seems, but loaded from internet i suppose
- did docker inspect sweet_kepler to find the ip address of the container, it was 172.17.0.2
- I have no idea what ip address I must use for the telnet test
- did this: docker exec -it sweet_kepler /bin/bash to go on the container
- i have to use the localhost ip address, it's really fun to just try random addresses that may be the correct one.
- I dont even need to do the telnet test, as I know my server is up by looking localhost:9090 on my browser
- could test things as expected
- created index.html in src/
- kil last container
- create new image with docker build -t res/apache_php .
- run new one with docker run -p 9090:80 res/apache_php, forgot the -d but who really cares, I can just open a new tab in my terminal
- copied all the stuff from quentin's src/ because he's still cool so that things look pretty tm
- I wont customize more as it's a huge loss of time for absolutely no gain


### Check boxes

- [X] You have a GitHub repo with everything needed to build the Docker image.
- [x] You can do a demo, where you build the image, run a container and access content from a browser.
 - with these commands: `docker build -t res/apache_php .` at the Dockerfile level I build the image, with `docker run -p 9090:80 res/apache_php` (note the absence of -d) I run the container for which I just build an image, and I access it in my browser at address `localhost:9090`
- [x] You have used a nice looking web template, different from the one shown in the webcast.
 - If Le Ray had not done it before, I wouldn't have bothered
- [x] You are able to explain what you do in the Dockerfile.
 - I did almost nothing in my docker file, I can easily explain what I did
```bash
FROM php:7.4.6-apache

COPY src/ /var/www/html/
```
- [X] You are able to show where the apache config files are located (in a running container).
 - I suppose yes, its in `etc/apache2/apache2.conf` the files `etc/apache2/sites-available` and `etc/apache2/sites-enabled` also have some sort of significance
- [x] You have documented your configuration in your report.
 - step by step and in English


## step 2
### Check boxes
## step 3
### Check boxes
## step 4
### Check boxes
## step 5
### Check boxes
## Bonus steps
- [X] played donkey kong country 2 tm, the 1995 classic hit for the Super Nintendo Entertainement System tm
