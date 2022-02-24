
# EDC Gear 

This is a clone of [Instagram](https://www.instagram.com/). 

## Table of Contents 

1. [General Info](#general-info)
2. [Wiki-Documentation](#wiki-documentation)
3. [Technologies](#technologies)
4. [Installation](#installation)
5. [Development](#development)



### General Info 
***
# EDC Gear
EDC Gear is an application where users can capture and share their favorite everyday carry gear.
Such as, watches, wallets, flashlights, pocket knives etc. 
* Link to live  [EDCGear](https://edc-gear.herokuapp.com/) project. 

## Key Functionalities 

Posts, Comments, and Search 
EDC Gear allows users to create posts to share images of there favorite everyday carry items. Users can also 
comment on posts. In additon, users can search for post captions and user profiles. 

  * Posts: Users can create, read, update, and delete posts.
  * Comment: Users can create, read, update, and delete comments.
   * Users can only edit/update and delete posts and comments that they have created. 
   
### EDC Gear Login page 
![login](https://user-images.githubusercontent.com/80999718/155440810-5e345679-ba7a-4767-a893-611e9848c6d5.png)

### EDC Gear Sign up page
![sign-up](https://user-images.githubusercontent.com/80999718/155440847-988ba0e5-2bdd-4c01-ad34-e375981472da.png)

### EDC Gear Profile page
![home](https://user-images.githubusercontent.com/80999718/155441041-efa61d88-89b9-4308-a880-5911487ebb68.png)

### Post Detail Page / Post Comments (Modal)
![post-modal](https://user-images.githubusercontent.com/80999718/155440966-b0b60ae6-9ffa-4e96-80be-2fe239d9a555.png)

### Create Post Form (Modal)
![post-form](https://user-images.githubusercontent.com/80999718/155441200-03936408-1ddb-4a05-bd71-1a06da8e5107.png)

### Main Feed
![profile](https://user-images.githubusercontent.com/80999718/155471285-a99f2d09-018a-413d-b1ce-34be9373b0f7.png)



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

<img 
src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" height=40/><img 
src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" height=40/><img 
src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg" height=40/><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg"  height=40/><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlalchemy/sqlalchemy-original.svg"  height=40/><img  
src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"  height=40/><img  
src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"  height=40/><img  
src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"  height=40/><img  
src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg"  height=40/>


 React | Redux | Flask | Postgres |SQLAlchemy | Alembic | CSS | Git | Node.js | NPM | HTML / JSX | Heroku

## Languages 
***

<img  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"  height=40/><img
src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" height=50/>
* JavaScript (frontend)
* Python (backend)


## Installation 

To install EDC Gear on your local machine please clone the project repository. 

1 )  `git clone https://github.com/Eric-Cortez/edcGear.git`

2 ) cd into edcGear and cd into edc-gear-starter
    `cd edcGear/`
    `cd edc-gear-starter/`

3 )  Install dependencies
     
     `pipenv install --dev -r dev-requirements.txt && pipenv install -r requirements.txt`

4 )  Create a .env file based on the example with proper settings for your development environment

5 )  Setup your PostgreSQL user, password, database, and make sure it matches your .env file

6 ) To run the frontend react application...

  •  Change into the frontend directory `cd edc-gear-starter/react-app/`

  •  Run `npm install` to install all dependencies from the package.json within the frontend directory 
  
  •  `npm start` within the frontend directory(edc-gear-starter/react-app) under localhost:3000
  
7 ) To setup the backend application...
   
   enter the pipenv shell, migrate your database, seed your database, and run the flask application 
     
  •  `cd edc-gear-starter/` 

  •  `pipenv shell` to enter the pipenv shell 

  •  `flask db upgrade`

  •  `flask db seed all`

  •  `flask run` while in the shell and within the backend (edc-gear-starter/) directory under localhost:5000
  

## Development 
This project was developed by a single developer (Eric Cortez). Below is a description of the top features of the project and a brief description of challenges faced during the two week development cycle. 

#### Highlight features: 

* Design: EDC Gear was designed to be an interactive website that focuses on user experience and incorporates modern design elements. This is accomplished through the use of modals to limit the need to redirect users to a new page. This functionality also gives the application a sleak design. 


* Post Details: Each post on the post feed page displays the comment count if there is at least one comment. In addition, posts and comments have a custom timestamp that displays the time that has passed since the post or comment was created. 


#### Challenges:   

*  Modals: When I began this project my goal was to incorporate modals for all of my forms although I did not have any experience working with modals in the past. During this project, I encountered challenges while incorporating modals. When I faced these challenges, I used my problem solving skills to break down the problem by following the flow of data to identify bugs. This was extremely helpful and allowed me to utilize prop threading to incorporate a layered modal for my edit post form which closes both the edit form and edit delete model if you click off of it. Although the use of modals was challenging at first, I am happy to have implemented them in this project as I have become very comfortable with using them to display components. I look forward to implementing them again in future projects. 

*  Timestamps: To mirror Instagram's timestamps, I created a function to convert the created_at  time for both posts and comments into a custom timestamp. This was challenging as I  had to create a new date object and use conversion methods. I was able to make the timestamp dynamic by converting them from UTC  to milliseconds along with the use of conditional statements so that the time elapsed for a post would be displayed as `1 HOUR AGO` and comments would be displayed as `1 h`.


#### Layered modals : 
![code2](https://user-images.githubusercontent.com/80999718/155443072-990382e1-096b-4867-931f-2a29b1275bee.png)

#### Time custom elapsed calculator function for posts and comments. 
![code1](https://user-images.githubusercontent.com/80999718/155443033-bf620c04-5d7f-4d9b-8fe1-5032043dd5c3.png)


## Future Features:

• Like that will allow users to like posts and comments. 

• Followers that will allow users to follow other users on EDC Gear. 

• Emoji button that will allow users to add emojis to their posts.

