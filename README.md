# Weather App

A full-stack app that allows the user to create their own recipes, store them, and delete them. This app makes use of Node.js as the backend to store these recipes.

For this project, I built a fully-functional back-end that can perform all the CRUD operations on recipe data. This involved creating a router to handle requests and responses, and created endpoints for all CRUD operations. These endpoints were tested using Thunder Client and served as responses to HTTP requests. I also created helper functions that interact with a recipes collection and manipulated the data stored in a JSON file. Finally, I imported these helper functions into the app.js file and connected them to the API endpoints. I then hooked up the backend functionality to the frontend.

## Installation and Setup Instructions

You will need `node` and `npm` installed on your machine.

Clone the repo:

`https://github.com/usama-asghar1/recipe-library`

Install the required npm modules:

`npm install`

Start the application:

`npm start`

## Usage

1. Fill in all the fields to add a recipe.
2. Click on the 'Get recipes' button to make sure all the recipes are loaded
3. Delete a recipe by clicking on the recipe's delete button

## Tech Stack

**Client:** Node, Express, JavaScript, HTML, CSS, (Testing with Thunder Client)

## Improvements

Potential future improvements:

- Add the ability to edit recipes - The back-end functionality but have not hooked it up to the front as of yet
- Move the data storage from the REST API to a database
- Improve the user-experience on the front-end
- Make the app responsive for mobile and tablet viewing
## Challenge

Build a weather checker app using TypeScript and React that satisfies all of the requirements below. Initialise your TypeScript project in this repo. (Remember that Create React App provides a TypeScript template, which makes it easy to get started with TypeScript and React.)

## Core Requirements

### Planning and documentation

- Before coding your app, you should create a component tree diagram within this repository.
- Each component in the diagram should have details on:

  - state (if it has any)
  - props (if it has any)
  - what it should render

- It's worth planning out your day into mini-sprints/chunks and collectively agree on what work can be completed during each sprint. That way if you spend too long on a particular problem, you can re-evaluate things as a team and course correct earlier.

### Code and functionality

- Your app should be in TypeScript! Some resources that might be helpful as a starting point:

  - https://github.com/typescript-cheatsheets/react#reacttypescript-cheatsheets
  - https://profy.dev/article/react-typescript
  - https://www.carlrippon.com/React-event-handlers-with-typescript/

- The user should be able to input the name of a city and have weather information about that city added to the page. Use the following API to get your weather information: https://openweathermap.org/api. You'll need to sign up for the free tier to get an API key.
- Your app should have at least one other function/feature in addition to being able to check weather information about a city. Be creative!

## Optional bonuses:

Explore (and possibly use) any of the below.

- CSS modules

  - A handy, low-effort feature supported by Create React App, which allows you to scope CSS rules to just a component: https://create-react-app.dev/docs/adding-a-css-modules-stylesheet/
  - This is a good idea, as it ensures that one component's CSS rules don't affect another, even if they happen to use the same class names

- Conditional CSS classes

  - A handy way of conditionally applying CSS classes (without having to resort to messy conditional string concatenation/interpolation in JS/TS): https://www.npmjs.com/package/clsx

- React Router

  - A way to add multiple pages to your app: https://reactrouter.com/en/main

- A CSS framework

  - A CSS framework that comes with small utility classes that you can use to style your UI/JSX: https://tailwindcss.com/
  - Makes it easier to achieve common tasks on the frontend (e.g. vertically/horizontally center an element)

- Forms

  - A way to add forms to an app and simplify many of the details: https://react-hook-form.com/

- Animation libraries

  - A way to add animation and motion to your app: https://blog.logrocket.com/best-react-animation-library-top-7-libraries-compared/
  - It's also a good idea to read up motion/animation from an accessibility perspective too: https://web.dev/prefers-reduced-motion/

- Tests

  - Practice writing tests in TypeScript whilst also getting some confidence that the important parts of your app behave correctly.
  - Might be helpful (starting from "Testing a Basic Component"): https://www.pluralsight.com/guides/how-to-test-react-components-in-typescript#module-testingabasiccomponent

- Documentation

  - Create a readme for your app that describes its functionality and how it should be used. You can use a tool like [Readme.so](https://readme.so/editor) to help do this.

---

If you get errors regarding missing types for the NPM packages that you're trying to use in your TypeScript application, use these as a starting point:

- https://www.w3schools.com/typescript/typescript_definitely_typed.php

- https://stackoverflow.com/a/39907679

It's also worth searching that package's documentation/website for "TypeScript", in case it contains any direct guidance on how to use their package with TypeScript.
