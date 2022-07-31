# City - weather API
An api to store capital cities of country in the database locally. It search the database locally, country detials from RESTCountiries AP and weather forecase from open weather API. 

## set up

Following setup is required to run the API locally.

1. Downlaod the repo
2. `npm install` to install the npm packages
3. `npm run migrate` to create database in the mysql database. Please make sure the mysql database is running & `creditsafe-database` schema/database exists. It uses sequelize to create database tables in the database. Also check username and password for database & update in `data/config/config.json` file. 
4. `npm run start` to start the server locally. Its uses nodemon as development server to watch the changes in the the code


### routes
you can see the swagger api documentation at `http://localhost:5000/api-docs`
