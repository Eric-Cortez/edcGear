
# EDC Gear 

This is a clone of [Instagram](https://www.instagram.com/). 

## Table of Contents 

1. [General Info](#general-info)
2. [Wiki-Documentation](#wiki-documentation)
3. [Technologies](#technologies)
4. [Installation](#installation)
5. [Development](#development)
6. [Challenges & Highlights](#challenges-highlights)



### General Info 
***
# EDC Gear
EDC Gear is an application where users can capture and share their favorite everyday carry gear.
Such as, watches, wallets, pocket knives etc. 
* Link to live  [EDCGear](https://edc-gear.herokuapp.com/) project. 


### EDC Gear Login page 
![login](https://user-images.githubusercontent.com/80999718/155440810-5e345679-ba7a-4767-a893-611e9848c6d5.png)

### EDC Gear Sign up page
![sign-up](https://user-images.githubusercontent.com/80999718/155440847-988ba0e5-2bdd-4c01-ad34-e375981472da.png)

### EDC Gear
![home](https://user-images.githubusercontent.com/80999718/155441041-efa61d88-89b9-4308-a880-5911487ebb68.png)

### Post Detail Page / Post Comments (Modal)
![post-modal](https://user-images.githubusercontent.com/80999718/155440966-b0b60ae6-9ffa-4e96-80be-2fe239d9a555.png)

### Create Post Form (Modal)
![post-form](https://user-images.githubusercontent.com/80999718/155441200-03936408-1ddb-4a05-bd71-1a06da8e5107.png)

### User Profile page
![profile](https://user-images.githubusercontent.com/80999718/155441292-cf182a9a-acbc-4750-8e65-26740c2331a0.png)



## Wiki Documentation: 
***
* [Home](https://github.com/Eric-Cortez/edcGear/wiki)
* [Backend Routes](https://github.com/Eric-Cortez/edcGear/wiki/Backend-Routes)
* [Database Schema](https://github.com/Eric-Cortez/edcGear/wiki/Database-Schema)
* [MVP Feature List](https://github.com/Eric-Cortez/edcGear/wiki/Feature-List)
* [Frontend Routes](https://github.com/Eric-Cortez/edcGear/wiki/Frontend-Routes)
* [Redux State Shape](https://github.com/Eric-Cortez/edcGear/wiki/Redux-State-Shape)
* [User Stories](https://github.com/Eric-Cortez/edcGear/wiki/User-Stories)
* [Wireframes](https://github.com/Eric-Cortez/edcGear/wiki/Wireframes)

## Technologies 
***
EDC Gear was developed using the following Technologies: 

 Node.js | NPM | Flask | SQLAlchemy | Alembic | Git | HTML / JSX | CSS | React | Redux | Heroku

## Languages 
***
* JavaScript (frontend)
* Python (backend)


## Installation 

To install EDC Gear on your local machine please clone the project repository. 

1 )  `git clone https://github.com/Eric-Cortez/edcGear.git`

2 )  Install dependencies

     `pipenv install --dev -r dev-requirements.txt && pipenv install -r requirements.txt`

3 )  Create a .env file based on the example with proper settings for your development environment

4 )  Setup your PostgreSQL user, password and database and make sure it matches your .env file

5 ) To run the frontend react application...

  •  Change into the fonrend directory `cd edc-gear-starter/react-app/`

  •  Run `npm install` to install all dependencies from the package.json within the frontend directory 

6 ) To setup the backend application enter the pipenv shell, migrate your database, seed your database, and run the flask application 
     
  •  `cd edc-gear-starter/` change into the edc-gear-starter directory 

  •  `pipenv shell` to enter the pipenv shell 

  •  `flask db upgrade`

  •  `flask db seed all`

  •  `flask run` while in the shell and within the backend (edc-gear-starter/) directory under localhost:5000

  •  `npm start` within the frontend directory(edc-gear-starter/react-app) under localhost:3000


## Development 
This project was developed by a single developer Eric Cortez. Below is a description of the top features of the project and a brief description of challenges faced during the two week development cycle. 

#### Highlight features: 

* 

* 


#### Challenges:   
*  

* 



#### Time custome elipsed calculator function for posts amd comments. 
![code1](https://user-images.githubusercontent.com/80999718/155443033-bf620c04-5d7f-4d9b-8fe1-5032043dd5c3.png)

#### Layerd modals : 
![code2](https://user-images.githubusercontent.com/80999718/155443072-990382e1-096b-4867-931f-2a29b1275bee.png)



## Future Features:

• Like that will allow users to like posts and comments. 

• Followers whta will allow users to follow other users on EDC Gear. 

