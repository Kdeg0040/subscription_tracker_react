# Subscription Tracker

[![Build Status](https://travis-ci.org/Kdeg0040/subscription_tracker_react.svg?branch=master)](https://travis-ci.org/Kdeg0040/subscription_tracker_react)
[![Maintainability](https://api.codeclimate.com/v1/badges/e3a7a8155159f18dea4f/maintainability)](https://codeclimate.com/github/Kdeg0040/subscription_tracker_react/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/e3a7a8155159f18dea4f/test_coverage)](https://codeclimate.com/github/Kdeg0040/subscription_tracker_react/test_coverage)

A responsive React app to keep track of your recurring payments.

![add_sub2](https://user-images.githubusercontent.com/51591680/84146859-42a05500-aa54-11ea-926c-686e3219aa2b.gif)

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

To get started, you will need [Node.js](https://nodejs.org/en/) and [npm](https://www.npmjs.com/) installed on your system. To see whether you already have these installed, run the following commands:

```
$ node -v
$ npm -v
```
If no version is detected visit the download pages as linked above to install.

### Installing

A step by step on how to get a development env running.

Clone this repository and `cd` into directory:

```
$ git clone git@github.com:Kdeg0040/subscription_tracker_react.git
$ cd subscription_tracker_react
```

Install node dependencies:

```
$ npm install
```

### Launch Application

To start the local development server and open the app in your browser, use:

```
$ npm run dev
```

If it doesn't open automatically in a new tab, it can be viewed on [http://localhost:3000](http://localhost:3000/) on your chosen browser.

## Running the tests

To run all the test suites, enter the following command:

```
$ npm test -- --watchAll=false
```

To display code coverage, use:

```
$ npm test -- --coverage --watchAll=false
```

## Built With

* [Clearbit API](https://clearbit.com/developers) - Logos and company search autocomplete made with `Clearbit`.
* [Create React App](https://github.com/facebook/create-react-app) - Written in React and created using `create-react-app`.
* [Jest](https://jestjs.io/) & [Enzyme](https://github.com/enzymejs/enzyme) - Tested with 100% coverage using `jest` and `enzyme`.
* [Bulma](https://bulma.io/) - Styled with `Bulma` a responsive, mobile first CSS framework.
* [Travis](https://travis-ci.org/) - `Travis` is used for continuous integration and deployment.
* [Heroku](https://www.heroku.com/) - Deployed on `Heroku`.
