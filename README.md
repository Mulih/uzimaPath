# UzimaPath Health and Fitness Tracker
## Project Overview
UzimaPath is a comprehensive health and fitness tracker designed to help users manage and achieve their fitness goals. The platform allows users to log exercises, set goals, track progress over time, and visualize their achievements through an intuitive interface. This project is built with a focus on providing a seamless experience for users to stay on top of their fitness journey.

## Problem Statement
Many individuals struggle to maintain consistency in their fitness routines due to a lack of proper tracking and motivation. Existing fitness apps often fail to provide a cohesive and personalized experience, leading to decreased user engagement and progress.

## Solution
UzimaPath addresses these challenges by providing users with:

**Exercise Logging**: Users can log various exercises and track their performance over time.
**Goal Setting**: Set specific fitness goals and monitor progress toward achieving them.
**Progress Tracking**: Visualize progress through charts and summaries, helping users stay motivated.
**User Management**: Simple admin interface for managing users and application features.
**Database Design**
The database is designed using MongoDB to store user data, exercises, and goals efficiently. The schema is optimized to handle the dynamic nature of fitness tracking, allowing for flexibility in data storage and retrieval.

## System Architecture
The UzimaPath system architecture is built on the MERN stack, consisting of:

**Frontend**: React.js is used for building the user interface, providing a responsive and dynamic user experience.
**Backend**: Node.js and Express.js serve as the backend, handling API requests and business logic.
**Database**: MongoDB is used for data storage, with Mongoose as the ORM for interacting with the database.
**Authentication**: JWT (JSON Web Tokens) is used for secure user authentication.
**State Management**: React Context API is used for managing global state across the application.
Dependencies
**React.js**: For building the frontend interface.
**Node.js & Express.js**: Backend framework for handling requests and responses.
**MongoDB & Mongoose**: Database and ORM for data persistence.
**JWT (JSON Web Tokens)**: Used for secure authentication.
**date-fns**: Library for date manipulation, particularly for formatting time in user-friendly ways.
**CSS Modules**: For styling components with modular and reusable styles.

## How to Use
### Setup
#### Clone the Repository
```
git clone https://github.com/yourusername/uzimapath.git
cd uzimapath
```

#### Install Dependencies
```
npm install
```

#### Configure Environment Variables 
Create a .env file in the root directory and add the following configuration:
```
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
```

#### Start the Application
```
npm start
```
By default, the application will be available at http://localhost:3000.

## Features
*Exercise Logging*: Track various exercises, including details such as type, duration, and intensity.
*Goal Setting*: Create and manage fitness goals with specific targets and deadlines.
*Progress Tracking*: View progress through charts and statistics.
*User Management*: Admin interface for managing user accounts and permissions.
## Testing the Application
To ensure the integrity of the application, run the test suite using:
```
npm test
```

## Deployment

1. Build for Production
```
npm run build
```

3. Deploy to Your Hosting Provider Follow the deployment instructions specific to your hosting provider, ensuring that environment variables are correctly configured.

## Contributing
1. Fork the Repository Create your own fork on GitHub and clone it to your local machine.
2. Create a Branch
```
git checkout -b feature-branch
```

4. Make Changes Implement your changes or features.
5. Submit a Pull Request Push your changes and submit a pull request on GitHub.

link to the Live Demo
https://youtu.be/RKr-L1DkSng
