# Infra Quentin Le Ray

1. ### Configuration de l'image docker

   Afin de démarrer l'installation de notre infrastructure docker nous avons créé un début d'arborescence : "docker-images\apache-php-image" dans laquelle nous avons mis le Dockerfile.

   Nous avons ensuite été chercher sur Docker Hub une image avec Apache et PHP. Contrairement aux webcast nous avons pris l'image "php:7.4.6-apache", quitte a créer une infra de 0 autant qu'elle soit le plus à jour possible.

   A noter qu'en utilisant telnet sur Windows, la console n'affichait pas ce que nous tapions. Nous avons donc utiliser netcat afin de vérifier que le container fonctionnais bien et qu'un serveur HTTP répondait aux requêtes.

   Nous n'avons pas modifié le nom du dossier contenant nos sources, le nom "src" étant très bien.

# Step 4

- Add "RUN apt update && apt install -y nano" into the Dockerfile of all images (nano is simple as VIM).
- Build and run all containers in order : res/apache_php → res/express_students → res/apache_rp
- Verify that all containers have the good ip adress by using "docker inspect container_name | grep -i ipadd" (normally res/apache_php has 172.17.0.2 and res/express_students has 172.17.0.3)
- Modify host file if it doesn't have been done for adding conversion of demo.res.ch into 192.168.99.100 (i'm using docker toolbox and it's the adress of the virtual box machine (docker-machine) that run docker)
- Access to http://demo.res.ch:9090/ (yes, we still use 9090 instead of 8080 in the videos)
- Run "docker exec -it apache_static /bin/bash" to enter into the container (apache_static is the name that we have give to the container because he run a static site)
- Normally you should be in the place where all files of the website are stored (/var/www/html). Do a save of the file index.html. Then modify the file and reload the website on your browser, the site should have change with your mofifications.
- We have add a script named "students.js" and load it into the index.html

