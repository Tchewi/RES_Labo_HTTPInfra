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
 - at commit 972b23f2a68e1addbcb656083c48e401a6d1e2f2 and beyond (and some before too, isnt life generous?)
- [x] You can do a demo, where you build the image, run a container and access content from a browser.
 - with these commands: `docker build -t res/apache_php .` at the Dockerfile level I build the image, with `docker run -p 9090:80 res/apache_php` (note the absence of -d) I run the container for which I just build an image, and I access it in my browser at address `localhost:9090`.
- [x] You have used a nice looking web template, different from the one shown in the webcast.
 - If Le Ray had not done it before, I wouldn't have bothered.
- [x] You are able to explain what you do in the Dockerfile.
 - I did almost nothing in my docker file, I can easily explain what I did, here is the entire Dockerfile at the end of that step. (it loads the things from FROM and pass my local directory `src/` to the images `/var/www/html/`).
```shell
FROM php:7.4.6-apache

COPY src/ /var/www/html/
```
- [X] You are able to show where the apache config files are located (in a running container).
 - I suppose yes, its in `etc/apache2/apache2.conf` the files `etc/apache2/sites-available` and `etc/apache2/sites-enabled` also have some sort of significance.
- [x] You have documented your configuration in your report.
 - step by step and in English.


## step 2

- create dir express-image in docker-images/
- made a Dockerfile in docker-images/express-image
- FROM node:12.17, with a command line
- made a dir src/
- installed npm
- `npm init`
- filled json file
- moved json file to src
- `npm install --save chance`
- created index.js
- tested index.js with node index.js
- build the docker image with `docker build -t res/express_students .`, don't forget the `.`
- the image building took a lot of time
- we then docker run the image with `docker run res/express` it works, but the container automatically closes after executing its js code
- did `docker run -it res/express_students /bin/bash` to explore the container, it has node version 12.17, which is better than my computers 8.10 (i dont know why apt install got me this version, but that's not a problem)
- end of 2a
- did `npm install --save express`
- wrote mini code
- tested code with `node index.js`
- could access code with browser on `localhost:3000`
- made better code, which return a JSON
- build image with `docker build -t res/express_students .`
- run the container with `docker run -p 9090:3000 res/express_students`
- could access with browser in localhost:9090
- already have postman as an app on my computer for PRO
- could do get request with postman (got the JSON)
- end of step 2b.

### Check boxes

- [X] You have a GitHub repo with everything needed to build the Docker image.
 - at commit 8a0b62dc3058e8856a61ee0904111fc66acddb18 and beyond (and some before too, isnt life generous?)
- [X] You can do a demo, where you build the image, run a container and access content from a browser.
 - First I have to do: `npm init` and `npm install --save chance` to install dependency (as i did not put them in the repo) and then with these commands: `docker build -t res/express_students .` at the Dockerfile level I build the image, with `docker run -p 9090:3000 res/express_students` (note the absence of -d) I run the container for which I just build an image, and I access it in my browser at address `localhost:9090/2020`.
- [X] You generate dynamic, random content and return a JSON payload to the client.
 - It is on `localhost:9090/2020`
- [X] You cannot return the same content as the webcast (you cannot return a list of people).
- [X] You don't have to use express.js; if you want, you can use another JavaScript web framework or event another language.
 - I use express js.
- [X] You have documented your configuration in your report.
 - Step by step in this exact file.

## step 3

- nothing to do for 3a
- run first container with: `docker run -d --name apache_static res/apache_php`
- run second container with: `docker run -d --name express_dynamic res/express_students`
- dir `docker inspect apache_static | grep -i ipaddress` to get the first internal ip address
- dir `docker inspect express_dynamic | grep -i ipaddress` to get the second internal ip address
- I could access the ip with telnet directly (docker for linux), ex `telnet 172.17.0.3 3000`, then `GET /2020 HTTP/1.0` got me the JSON
- mkdir apache-reverse-proxy
- the video says we wont do a Dockerfile yet, that means that everithing that is said in that video is pointless
- end of 3b
- filled the Dockerfile in apache-reverse-proxy
- mkdir conf
- mkdir sites-available in conf
- touch 2 files 000-default.conf and 001-reverse-proxy.conf
- filled both files
- build image with `docker build -t res/apache_rp .`
- run container with `docker run -p 9090:80 res/apache_rp` (in the vido he does 8080 but here we are almost consistent)
- could go on reverse proxy, but got Forbidden 403 error as expected
- with telnet i send this load: 
```sh
GET /api/students/ HTTP/1.0
Host: demo.res.ch
```
which worked (got the JSON)(advice, copy past the load to avoid time out)
- changed my ubuntu files directly in /etc/hosts to map demo.res.ch to 127.0.0.1
- can ping demo.res.ch, which pings 127.0.0.1
- could access the site from browser on "demo.res.ch:9090" and http://demo.res.ch:9090/api/students/
- end of 3c

### Check boxes

- [x] You have a GitHub repo with everything needed to build the Docker image for the container.
 - at commit 00dd191aa5c38244321a2d5d00288180fca56194 and beyond (and some before too, isnt life generous?)
- [x] You can do a demo, where you start from an "empty" Docker environment (no container running) and where you start 3 containers: static server, dynamic server and reverse proxy; in the demo, you prove that the routing is done correctly by the reverse proxy.
 - yes, we have to run the 2 containers first with: `docker run -d --name apache_static res/apache_php` `docker run -d --name express_dynamic res/express_students`, then with the command `docker inspect CONTAINER NAME | grep -i ipaddress` we get the ip addresses, that we put in hard in `conf/sites-available/001-reverse-proxy.conf`, then we run the rp container with `docker run -p 9090:80 res/apache_rp` and access it in a browser at `demo.res.ch:9090`.
- [x] You can explain and prove that the static and dynamic servers cannot be reached directly (reverse proxy is a single entry point in the infra).
 - yes but actually no, you see, as I don't use docker-machine or vagrant, or docker-toolbox, I will always be able to access the container ip if I know them, there is no "gray box" with docker for windows.
- [x] You are able to explain why the static configuration is fragile and needs to be improved.
 - The ip addresses have to be entered manually each time the reverse proxy is set up, thats bad.
- [x] You have documented your configuration in your report.
 - step by step

## step 4
### Check boxes
## step 5

- Nothing to do for 5a
- `touch apache2-foreground` at Dockerfile level in proxy.reverse file
- filled the file
- chmod 755 the file
- edited the Dockerfile to COPY the "script"
- build the image with `docker build -t res/apache_rp .`
- run the container with `docker run -e STATIC_APP=172.17.0.2:80 -e DYNAMIC_APP=172.17.0.3:3000 -p 9090:80 res/apache_rp`
- the variables are good
- end of 3b
- mkdir templates at dockerfile level
- `touch templates/config-template.php`
- wrote first php script
- apt install php7.2-cli
- script worked with `php config-template.php`
- add weird env variable in script
-`export STATIC_APP=salut`
-`php config-template.php`
- export successfull
- change the script to support conf correctly
- tested and working
- end of 5c
- COPY the templates/ in Dockerfile
- built image with `docker build -t res/apache_rp .`
- run container `docker run -it res/apache_rp /bin/bash` to verify
- ok
- added new steps in `apache2-foreground` for dynamising
- buit new image with `docker build -t res/apache_rp .`
- run container with `docker run -e STATIC_APP=172.17.0.2:80 -e DYNAMIC_APP=172.17.0.3:3000 -p 9090:80 res/apache_rp`
- got an error
- end of the line
- the lab is over and is a failure
- can't find error.

```sh
[Mon Jun 01 21:38:07.813024 2020] [core:warn] [pid 1] AH00111: Config variable ${APACHE_RUN_DIR} is not defined
apache2: Syntax error on line 80 of /etc/apache2/apache2.conf: DefaultRuntimeDir must be a valid directory, absolute or relative to ServerRoot
```



### Check boxes


- [ ] You have a GitHub repo with everything needed to build the various images.
- [ ] You have found a way to replace the static configuration of the reverse proxy (hard-coded IP adresses) with a dynamic configuration.
- [ ] You may use the approach presented in the webcast (environment variables and PHP script executed when the reverse proxy container is started), or you may use another approach. The requirement is that you should not have to rebuild the reverse proxy Docker image when the IP addresses of the servers change.
- [ ] You are able to do an end-to-end demo with a well-prepared scenario. Make sure that you can demonstrate that everything works fine when the IP addresses change!
- [ ] You are able to explain how you have implemented the solution and walk us through the configuration and the code.
- [ ] You have documented your configuration in your report.

