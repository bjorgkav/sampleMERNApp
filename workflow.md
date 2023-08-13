# Getting Started
Starting a new MERN project involves starting a new node.js application using the Express.js framework.

## Steps for setup (Will be done using Visual Studio Code)
- Make a project folder
- create a folder for your backend (can be named 'server' etc. basta backend folder siya)
- create a "server.js" file (can be empty for now, will be assigned as the starting script when using npm)
- "cd" to the backend folder
- Use "npm init -y" to initiate your package.json (-y flag for auto-yes). This will use the "server.js" file as your start script.
- Inside your backend folder, use "npm install express" to install the express package (will also need to be imported).
- "npm install -g nodemon" to install a package that automatically restarts the server when a change to the code is made (-g for global installation).

## Starting the app
- "node server.js" to start the app without nodemon
- "nodemon server.js" to start the app with nodemon

## Adding a dev script to your app
- Inside the package.json, add the following to create a new "dev" command for your app
                "dev": "nodemon server.js"
- After that, you can run "npm run dev" to execute the commands you set there


## Storing environment variables such as the port
- Create a ".env" file for your project in the backend folder
- Add whatever variables you want to set (for example, "PORT=8080")
- Be sure to install the node package "dotenv" ("npm install dotenv")

## Using the Postman app to simulate various requests
- Install postman
- Run your server
- Simulate various requests to test your API

## Route Handling
- Can be done via "server.js" but sub-optimal
- Make a new .js file for your routes (see "workouts.js")
- Set up your routes in the new .js file, then set those to exports
- Import/require your new .js file in the server.js file

## MongoDB Atlas Setup
- Can be done by installing MongoDB locally and running it that way
- MongoDB Atlas lets us spin up a database that is configured and hosted for us. (https://youtu.be/s0anSjEeua8?list=PL4cUxeGkcC9iJ_KkrkBZWZRHVwnzLIoUE)
  - Requires an account (Google or GitHub allowed)
- Create a free database for learning
  - Shared cluster (free)
  - Choose a cloud provider (linked video went with AWS)
  - Select a region
    - Selecting a tag is optional 
- While the database is being created, we can create an admin username and password
- After creating an account, we can add allowed IP addresses or allow access from any computer
  - Safer to only allow your IP address but the option is there
- To connect, click on "Connect" and use the connection string in your node app
  - ensure "npm install mongoose" or "npm install mongodb" (use mongoose if following guide)