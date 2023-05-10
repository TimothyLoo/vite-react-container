## Create mysql database container
FROM mysql:latest

ENV MYSQL_ROOT_PASSWORD=${DB_ROOT_PASS}
ENV MYSQL_DATABASE=${DB_NAME}
ENV MYSQL_USER=${DB_USER}
ENV MYSQL_PASSWORD=${DB_PASS}

COPY ./database/sql/ /docker-entrypoint-initdb.d/

EXPOSE ${DB_PORT}