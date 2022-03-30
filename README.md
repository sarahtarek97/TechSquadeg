Backend Node-JS
TechSquadeg

This simple project to show some basics on each and every project that show us how to intiate a Node project from scratch, use a 3rd party packages to do specific job and create the API.

————————————————————————————————————

What includes?
In this project we’re using some NPM packages to help us using Node functionalities and make our coding faster by using these 3rd part modules, There’re two types dependencies and devDependencies, the different is some of these packages we’re using them just on the developing process we actually don’t need them on the deploy phase but other packages we actually need them all the time.
We’re using for the Dependencies:
    dotenv ^16.0.0,
    express ^4.17.3,
    http-status-codes ^2.2.0,
    mongoose ^6.2.9,
    node-cron ^3.0.0
  
  devDependencies
    nodemon ^2.0.15

————————————————————————————————————

Usage for each NPM package?
 
    dotenv:
Some information should be secured and no one else know it like the port I’m working on it, the connection string that connect my project with DB local or global, if I’m using send email option I should save the email and the password and so on, So while I’m sharing my project with others they shouldn’t see these information that’s why I’m using .env file to store all the important information and once share it or upload it this file stay on my local computer
     express:
Writing vanilla node is really not helpful and take a lot of time that’s why when we’re using express we can easily build different kind of web apps in a short period of time, also providing us a simple routing for the http requests , also provide a very useful middlewares
    http-status-codes:
As we know each and every http request has status that shows us what happed to that request if it’s OK or there’s an error where’s the error is it on the server or authorization or what?, so using this npm package helps us to know what happed to that http request to know more from the user side what’s wrong or from our side as developer to resolve the issue
  mongoose:
When we want to use MongoDB as a database for our project we defiantly need this package to help us creating the connection, model our application data
    node-cron
If I want to create a job the will perform a task in scheduled time without any action from our side, as once we intiate it it's going to work
    nodemon:
In a real world when we make update on the backend the server should not stop and rerun it again, it’s not make sense so using nodemon in the developing process help us by automatically running the server when we made any change 



————————————————————————————————————

What are the Folders in this project…


In this projects there are 6 main files/folders and of course each folder include another files that what we are going to describe next…


package.json
The file that contain all the project data like the name, version, description, the main file and the scripts, also all the dependencies and dev dependencies packages that we’re using in the whole project
app.js
This is the main file that that connect and run everything, like running the server, initiate the database connection
node_modules
This is one of the most important folder in the project because it contains all libraries downloaded from NPM, but we shouldn’t push it on GitHub or when we share the project with anyone because it take a space, ok so how the project will run without these folders and files?? That’s why package.json is so important and powerful because when we run this comment in terminal “npm install” all the dependancies and dev dependancies will be installed all at once
Modules
This folder used to create all the modules we need like jobs, we can have as many modules as we the business need. Each model contain all what this module need building the schema and the model, routes with the APIs and how to handle them.

Here in our project there’s just one modules to perform all the CRUD operations we want which is “job” contains 4 folders ( Schema, Model, Route, Controller)
Schema: use it to create the schema 
Model: use to create a model from the created schema
Route: use to create the https requested which is the APIs 
Controller: use to handle the route APIs

Configuration
This folder we use to create the connection between the node(the backend) and the mongo database

CronJob
This folder used to create the scheduled job so I can import it on the POST API to intiate


————————————————————————————————————

APIs…

On this project we’re using POST API vary to provide us with what we need

In details:

Http POST request to intiate the cron job and gives a response directly without waiting for the job to finish. 
Video running the API: https://drive.google.com/file/d/1-XGQMTiEqcNoBbNgnXH3QfNdjRWC5jm9/view?usp=sharing

————————————————————————————————————

My way of thinking…

Any project I create from scratch I think about things in order like at first what I want to do what’s the output, So here I had four main goals:
creating APIs
build the Job needed
Get the current date
Save data to DataBase

So first thing I did is intiat the project by implementing the packages listen on the server declare the middleware the will deal with the data will return as a buffer and create my project folder then last thing connect all of that together
Second thing I thought about is the schema of my document and create a model from it to make it easy for me to use 
After that what APIs I need, Then how to handle these http request what packages I use and how
Then build the job and intiate it on the POST request handler
Test the result by calling that API
Finally save the needed data on the DataBase

————————————————————————————————————

Left outs?

As for each line of code we need to this about what we want to achieve, what’s the output and a lot of things and we prefer a good quality of the code not a huge project with missing functions and a lot of errors but as you can see in this project it’s just s simple CRUD operations for just one module connected with the database.
But the question here if we have an extra time what we’re going to add here??
There’re a lot of other logic, NPM packages and ideas not on this project like for example how while working on a collection reference on a value on another collection, How to create another APIs, Autherntication and authorization

————————————————————————————————————


