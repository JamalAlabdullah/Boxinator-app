# Boxinator

## Description
Boxinator is a web application for shipment delivery to specific locations around the world. The application is a web application using a RESTful API to communicate with a server. The application handles two different types of user: registered user and administrator. Users will be able to create accounts to track ongoing and previous shipments. An administrator has access to a portal to change the metadata of the shipping process, this being the status of a package and the relative costs of shipping.

## Tech Stack
- Backend: Java (Gradle project), Hibernate, Spring Boot, Spring Security
- Frontend: React, CSS, React Bootstrap
- External service: Keycloak, Heroku

## Heroku
This application is deployed to Heroku at [https://boxinatorfrontendtest.herokuapp.com/](https://boxinatorfrontendtest.herokuapp.com/).

## Getting started
Database:

- Open PGAdmin4 
- Create a PostgreSQL database called "BoxinatorDb"
- Open the data.sql file in the resources folder of boxAPI and insert for some dummy data. 

Backend:
- Clone this repository and open the Boxinator/boxAPI in your IDE (IntelliJ, Eclipse etc.). 
- Navigate and change src/main/resources/application.properties
    - Replace strings as necessary
        - spring.datasource.username => Your PostgreSQL username
        - spring.datasourcepassword => Your PostgreSQL password
        - spring.datasource.url => your local database url

- From within your IDE, you can now run the project. The main method is in BoxApiApplication.
- The API should now be running on localhost:8080
- If necessarry, relbuild the build.gradle file to have all the correct dependencies. 

Keycloak:
- Have docker installed on your computer
- In your terminal, run: 
    - docker run -p 8083:8080 -e KEYCLOAK_USER=admin -e KEYCLOAK_PASSWORD=admin jboss/keycloak:latest
- go to localhost:8083, press "Administration console" and log in with:
    - username "admin" 
    - password "admin"
- create yourself a realm "Boxinator" and a client "boxinator-app" with Root URL "https://localhost:3000".
- go to "installation" and choose format option "Keycloak OIDC JSON" and copy the json to replace in the front-end application keycloak.json file. 
- you also need to replace REACT_APP_URL to "localhost:3000" and REACT_APP_API_URL to "localhost:8080"


Frontend:
The correct frontend, that is deployed to heroku is at its own [gitrepo](https://gitlab.com/Fredr9/testboxinatorfrontend). This was necesarry for the Heroku deployment. 

- Clone the repository linked above in your IDE (VS Code)
- Run the command "npm install --force" to install the dependencies. 
- Do the necessarry changes for keycloak. 
- Run "npm run dev" to run the project. 

## User Manual 

For screenshots of the project and a description of how to use the application please see the [User Manual](https://docs.google.com/document/d/1LV4pKgxJXP5eyoQJtXSAyqhTA6Zex6_mISA42QTl-cM/edit#heading=h.a56wxndf1c5l).

## API Documentation
We have documented all the endpoints of the API [here](https://docs.google.com/document/d/1eQyTdxrwyswH6cYn63r0N-Ls7-tyxGoWCH34TazgERw/edit).


## Authors
Fredrik Vogt, Pernille Ofte, Jamal Alabdullah, Ole Syverinsen and Thea Rime


