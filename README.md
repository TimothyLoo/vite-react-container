# vite-react-container
This repo is to practice setting up a vite react app in a docker container, with a mysql backend also in a docker container

### Initial Set-up
run `npm init vite my-vite`

choose React
choose TypeScript

`cd my-vite`
`npm install`

create Dockerfile

update vite.config.ts to include server config

### Create Docker Container
create a docker-compose.yml file
define build in yml file

alternatively, use following commands:
`docker build -t my-vite .`
`docker run -p 3000:3000 my-vite`

### Run Docker
make sure your terminal profile allows docker executables

run `docker-compose up`

if you can't connect to the mysql docker database, you may have a db_data already in docker
run `docker-compose down -v`