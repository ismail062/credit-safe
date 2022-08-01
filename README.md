# City - weather API
An api to store capital cities of country in the database locally. It search the database locally, country detials from RESTCountiries AP and weather forecase from open weather API. 

## set up

Following setup is required to run the API locally.

1. Downlaod the repo
2. `npm install` to install the npm packages
3. `npm run migrate` to create database in the mysql database. Please make sure the mysql database is running & `creditsafe-database` schema/database exists. It uses sequelize to create database tables in the database. Also check username and password for database & update in `data/config/config.json` file. 
4. `npm run start` to start the server locally. Its uses nodemon as development server to watch the changes in the the code


## Swagger Documentation
you can see the swagger api documentation at `http://localhost:5000/api-docs`

## Key points
1. API developed in `ExpressJs`, a nodejs framework for backend development
2. `mysql` database is use to store data
3. `Sequelize ORM` is used to create the database schema. we can easily change the database provider if requires
4. `express-jsdoc-swagger` package is used to create the  api `swagger documentation`
5. code structure to create different versions of the api

#### Could be implemented to enhance api
1. security / authentication / authorization is missing at the moment. e.g. firebase authentication or oAuth can be used.
2. input validation is not implemented. Joi validation can be used to validate request parameters. 
3. Test are not written. different js libraries can be used such as TestCafe, ChaiJs and mochajs library

