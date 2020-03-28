# PYG Tracker Frontend



[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)



PYG is an application which provides users with the ability of creating a User Story (i.e ticket or card) which contains information about what kind of task needs to be performed and then the admin will review the User Story, make changes if required. Admin will be able to approve or reject the User story created by the user.

![Login](https://res.cloudinary.com/dvcaeuvee/image/upload/v1585409603/Screenshot_2020-03-28_at_4.33.06_PM.png)



![Dashboard](https://res.cloudinary.com/dvcaeuvee/image/upload/v1585409379/Screenshot_2020-03-28_at_4.28.30_PM.png)

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

To setup the following should be installed on your machine.

- [Node.js](https://nodejs.org/en/download/current/) 10 and above
- [Git](https://git-scm.com/downloads)

### Installing

If you have all the prerequisites you can use the steps below to setup locally

##### Set up Server
- Clone and install the server from [here](https://github.com/chukwuemekachm/pyg_backend).

When done with the server open your terminal and `cd` to the directory of this project and run the following commands

```bash
npm install yarn -g
```

```bash
yarn install
```

Now you've just successfully installed this project locally

## Running in Development mode

- Run

```bash
yarn dev
```
This should start the app in development mode on `http://localhost:8080` and launch your default browser.

## And coding style tests

To test if the code currently adheres to the coding/linting style guide adopted by it, run

```bash
yarn lint
```

## Deployment

To deploy the app to a live server, ensure the environmental variables outlined in the `.env` file is available in the environment (Node.js).

- Run

```bash
npm install yarn -g
```

```bash
yarn install
```

```bash
yarn build
```

```bash
yarn start
```

The app should be live on the `PORT` specified on the `.env` file or `http://localhost:4000`.

## Built With

* [Express](https://expressjs.com/) - Used for serving the app along with static files on a production server.
* [React](https://reactjs.org/) - The UI library adopted.
* [React-router-dom](https://reacttraining.com/react-router/web/guides/quick-start) - Used for routing.
* [Styled-components](styled-components.com) - Used to style components/UI.
* [Webpack](https://webpack.js.org/) - Used to bundle the project dependencies as well as for development serving.
* [Babel](https://babeljs.io/) - Used for transpiling ES2015/ES2017 code to ES5 which is supported by most modern browsers.
* [Eslint](https://eslint.org/) - Used to enforce a coding style in the codebase to ensure consistency.

Some other development dependencies are also used as well.
