# Hotel Reservation App

This is a front-end application built in React currently under development.

## App Overview

React was used to create this project. The application focuses on letting users select a room (single or double) for a specific date range, and choices are presented for that scope based on the data provided. A local data object is being used to retrieve data and incorporate information into the app. 

To start you can simply [download](https://github.com/sharvin3007/HotelReservation/archive/master.zip) the boilerplate and unzip it into your working directory. You can also clone if you wish to contribute.

## Technology

* React (v.18.2.0)

## Usage

In the project directory, you can run:

### `npm install`

This is to ensure all dependencies are downloaded. 
After a fresh clone, there is likely to be no `node_modules` since that is `.gitignore`'d.

Alternately, if `node_modules` exists, remove it with `rm -rf node_modules` and then run `npm install`.

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Linting

ESLint is used to lint the application code. 
```
# Run Linter
npm run lint

# Auto-Fix ESLint Issues
npm run lint:fix
```

## Contributing

Suggestions or pull requests are welcome.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
