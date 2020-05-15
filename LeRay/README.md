# Infra Quentin Le Ray

1. ### Configuration de l'image docker

   Afin de démarrer l'installation de notre infrastructure docker nous avons créé un début d'arborescence : "docker-images\apache-php-image" dans laquelle nous avons mis le Dockerfile.

   Nous avons ensuite été chercher sur Docker Hub une image avec Apache et PHP. Contrairement aux webcast nous avons pris l'image "php:7.4.6-apache", quitte a créer une infra de 0 autant qu'elle soit le plus à jour possible.

   A noter qu'en utilisant telnet sur Windows, la console n'affichait pas ce que nous tapions. Nous avons donc utiliser netcat afin de vérifier que le container fonctionnais bien et qu'un serveur HTTP répondait aux requêtes.

   Nous n'avons pas modifié le nom du dossier contenant nos sources, le nom "src" étant très bien.