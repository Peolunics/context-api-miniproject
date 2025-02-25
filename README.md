# React Mini Project - User Authentication

## Overview
This is a simple React mini-project that demonstrates user authentication using React Context API. The application allows users to log in with a username and password, which are then stored in the global context and displayed on the profile page.

## Features
- User authentication using React Context API
- Login form with username and password input fields
- Profile page that displays the logged-in user's details
- Context provider to manage global state

## Project Structure
```
react-mini-project/
│── src/
│   ├── components/
│   │   ├── Login.js
│   │   ├── Profile.js
│   ├── context/
│   │   ├── userContext.js
│   │   ├── userContextProvider.js
│   ├── App.js
│   ├── index.js
│── package.json
│── README.md
```

## Installation and Setup
1. Clone the repository:
   ```bash
   git clone https://github.com/your-repo/react-mini-project.git
   ```
2. Navigate to the project directory:
   ```bash
   cd react-mini-project
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Run the application:
   ```bash
   npm start
   ```

## Components
### 1. `Login.js`
- Contains an input form for users to enter their credentials.
- Updates the global user state upon submission.

### 2. `Profile.js`
- Displays the logged-in user's details.
- Shows a message prompting users to log in if no user is detected.

## Context API Implementation
### 1. `userContext.js`
- Creates a React context for user authentication.

### 2. `userContextProvider.js`
- Manages the user state and provides it to the entire application.

## Usage
- Open the application in the browser.
- Enter a username and password in the login form.
- Click the "Submit" button to log in.
- The profile page will display the entered username and password.

## Technologies Used
- React.js
- React Context API
- JavaScript
- JSX

## Future Enhancements
- Implement proper authentication with backend integration.
- Add logout functionality.
- Secure the password field to avoid displaying it on the profile page.
- Improve UI/UX with better styling.

## License
This project is open-source and available under the MIT License.

