## Create mysql database container
FROM mysql:latest

ENV MYSQL_ROOT_PASSWORD=password
ENV MYSQL_DATABASE=tj_database
ENV MYSQL_USER=tj
ENV MYSQL_PASSWORD=password

COPY ./database/sql/ /docker-entrypoint-initdb.d/

EXPOSE 3306