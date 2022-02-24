
# EDC Gear 

This is a clone of [Instagram](https://www.instagram.com/) project. 

## Table of Contents 

1. [General Info](#general-info)
2. [Wiki-Documentation](#wiki-documentation)
3. [Technologies](#technologies)
4. [Installation](#installation)
5. [Development](#development)
6. [Images](#images)



### General Info 
***
# EDC Gear
EDC Gear is an application where users can capture and share their favorite everyday carry gear.
Such as, watches, wallets, pocket knives ect. 
* Link to live  [EDCGear](https://edc-gear.herokuapp.com/) project. 


### EDC Gear Login page
![login]()

### EDC Gear Sign up page
![signup]()

### EDC Gear Home page
![home]()


### Post Detail Page / Post Comments
![postDetail]()

### Post Form
![postForm]()

### Profile page
![profile]()



## Wiki Documentation: 
***
* [Home](link)
* [Backend Routes](link)
* [Database Schema](link)
* [MVP Feature List](link)
* [Fronend Routes](link)
* [User Stories](link)
* [Redux State Shape](link)

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

## Future Features:

• Like that will allow users to like posts and comments. 

• Followers whta will allow users to follow other users on EDC Gear. 


## Development 
This project was developed by a single developer Eric Cortez. Below is a description of the top features of the project and a brief description of challenges faced during the two week development cycle. 

#### Highlight features: 

* 

* 


#### Challenges:   
*  

* 



#### Time elipsed calculator function for posts amd comments. 
![code1]()

#### : 
![code2]()

#### Local Storage 
![code3]()
