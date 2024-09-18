# ReactJS MongoDB Atlas Movie Management App

This project is a Movie Management system built using ReactJS and Express.js, with a MongoDB Atlas database to store movie details such as image URL, movie name, theatre name, date, time, and number of seats.

## Features:
- Add new movies with details like image, movie name, theatre, date, time, and number of seats.
- View a list of all movies.
- Edit or delete movies.
- Store movie details in a MongoDB Atlas database.

## Tech Stack:
- **Frontend:** ReactJS, Bootstrap
- **Backend:** Express.js, Node.js
- **Database:** MongoDB Atlas

## Getting Started

### Prerequisites
To run this project, ensure you have the following installed:
- [Node.js](https://nodejs.org/en/download/)
- MongoDB Atlas account (for database)

### Installation Instructions

1. **Clone the Repository:**
   Open a terminal and run the following commands:
   ```bash
   git clone https://github.com/IamNaveen001/reactjs-mongoDB-Atlas
   cd reactjs-mongoDB-Atlas
2. **Set Up MongoDB Atlas:**

- Go to MongoDB Atlas and create a free cluster.
- Set up a database user and whitelist your IP address.
- Get the connection string for your cluster (replace <password> with your database user’s password).
3. **Set Up Backend (Express.js):**

- Navigate to the backend directory (if separated) or the main project folder and install the required dependencies:
-  ```bash
   npm install
  - Open server.js and replace the MongoDB connection string with your MongoDB Atlas connection string:
  - ```bash
    mongoose.connect('your-mongodb-connection-string', {
    useNewUrlParser: true,
    useUnifiedTopology: true
- Start the backend server:
- node server.js
- The server will be running on http://localhost:5000.
4. **Set Up Frontend (ReactJS):**
  - Navigate to the frontend folder
    ``` bash
    cd frontend
- Install React dependencies:
-  ``` bash
   npm install
- Start the React development server
- ```bash
  npm start
- The React app will be running on http://localhost:3000.
