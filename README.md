# NUXT-ADONIS-WEB
Project consists of AdonisJS API server and Nuxt on frontend in Typescript. Server connects to the MySQL database, hosted locally as Docker container. 

## Run app
Application can run server and client separately. Install dependencies for both client and server
with npm install. Then navigate to the main folder.

## Server
Run server
```
npm run server
```

## Run client
Run server
```
npm run client
```

## MySQL db
You can create MySQL container by using docker-compose.yml
### Docker
```
docker-compose build mysql
```

Shut down the container. You need to set up the container first in order to set up 
connection with the server.

Run the container again:
```
docker run -p 3306:3306 --name=mysql_db -d mysql/mysql-server
```   
Get the generated password for root
```
docker logs mysql_db 2>&1 | grep GENERATED
```
Invoke mysql bash within the running container. When prompt ask you for password
type in the string from previous step.
```
docker exec -it mysql_db mysql -uroot -p
```
Change the password for root user
```
ALTER USER 'root'@'localhost' IDENTIFIED BY 'NewPassword';
```
```
update mysql.user set host = '%' where user='root';
```
```
FLUSH PRIVILEGES;
```
```
quit mysql
```
```
docker restart mysql_db
```

## Tests

For server
```
cd server
```
For server
```
node ace test
```