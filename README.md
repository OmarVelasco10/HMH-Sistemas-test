# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
## Project status
This project shows the development of the tasks described later in the document. It contains a user login that encrypts the password with MD5 and based on the response from an API verifies whether the user has access or not. Once they have access, the user can access a panel where different tasks are displayed, such as: using a TODO List, using a timer or searching for a profile on Github, the relevant validations were carried out for each action.


## steps development

1.- Run "npm i" in the terminal to get all.
2.- Rename file .env.template to .env
3.- Do the respective changes in environment variables (if necessary).


```
REACT_APP_HMH_API_URL=https://mocki.io/v1/3e408794-39ed-4c75-bb6e-c49c578de293

REACT_APP_GIT_API_URL= https://api.github.com/users


```

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `Description project`
For this exercise you will need to complete a series of components to demonstrate your logical and creative skills. You will have to make a proposal with a good presentation that is attractive to users.

Each of the components must be on an independent path, accessible through a main menu.

1.- Login
2.- TODO List
3.- Timer
4.- Git profile

### `List of technologies used within the project:`
    "@fortawesome/react-fontawesome": "^0.2.0",
    "@reduxjs/toolkit": "^1.9.5",
    "@testing-library/jest-dom": "^5.17.0",
    "@testing-library/react": "^13.4.0",
    "@testing-library/user-event": "^13.5.0",
    "@types/jest": "^27.5.2",
    "@types/node": "^16.18.48",
    "@types/react": "^18.2.21",
    "@types/react-dom": "^18.2.7",
    "axios": "^1.5.0",
    "dotenv": "^16.3.1",
    "js-cookie": "^3.0.5",
    "md5": "^2.3.0",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-redux": "^8.1.2",
    "react-router-dom": "^6.15.0",
    "react-scripts": "5.0.1",
    "styled-components": "^5.3.10",
    "sweetalert2": "^11.7.27",
    "typescript": "^4.9.5",
    "uuid": "^9.0.0",
### `The development environment requirements for integration`
This project was developed with:
Node: v19.5.0

## Possibles changes
1.- Verify all the possibilities of the system, to add a validation to each of them.
2.- Carry out unit tests to guarantee the correct functioning of each component.
3.- Give users the opportunity to identify improvements.
