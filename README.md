# Adopt Me


A project taught by Brian Holt on [Frontend Masters' website](https://frontendmasters.com/courses/complete-react-v8/)

![complete intro react, v8](https://static.frontendmasters.com/assets/courses/2022-12-05-complete-react-v8/thumb.webp)

# React
React is a UI state library that changes or render the DOM base on the state of data

## formatting

### prettier

is a formatting tool for codes.

```
"format": "prettier --write \"src/\*_/_.{js,jsx}\"",
```

### eslint

is a linting tool

#### plugins needed to download

```npm
npm install -D eslint-plugin-import@2.26.0 eslint-plugin-jsx-a11y@6.6.1 eslint-plugin-react@7.31.8

```

<em>Why</em>

- to check import errors
- to check react is recommended

#### config to get react up and running in .eslintrc.json file

```json
{
  "extends": [
    "eslint:recommended",
    "plugin:import/errors",
    "plugin:react/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:react-hooks/recommended",
    "prettier"
  ],
  "rules": {
    "react/prop-types": 0,
    "react/react-in-jsx-scope": 0
  },
  "plugins": ["react", "import", "jsx-a11y"],
  "parserOptions": {
    "ecmaVersion": 2022,
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true
    }
  },
  "env": {
    "es6": true,
    "browser": true,
    "node": true
  },
  "settings": {
    "react": {
      "version": "detect"
    },
    "import/resolver": {
      "node": {
        "extensions": [".js", ".jsx"]
      }
    }
  }
}
```

## vite

is a build tool for building the configuration needed to setup frameworks like `react` up and running with ease.

 add these scripts command in the package.json

1.

```
"dev": "vite" - run the vite server
```

2.

```
"build": "vite build" - build for production
```

3.

```
"preview": "vite preview" - build and preview production.
```

## sample vite config for react in a vite.config.js file in the root of the app

```javascript
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  root: "src",
});
```

# react and react-dom

- install react as dependencies
- install react-dom as dependencies

# using react and react-dom in the main part of the application

- import the react and react-dom in the App.jsx file `the entry point`

## React Hooks

### useState

is a react hook that keeps or modify value.
this can be use in to change the values that appears in a dom element

```javascript
const [name, setName] = useState("");
```

### useEffect

is hook that accepts accept two parameters, a function and a dependency list []
using uesEffect with third parties API it should always be given an empty array.
why: useEffects runs the function every time the page re-renders and that is wrong behavior

## react capabilities

### react router dom

import <b>BrowserRouter,Routes and Route </b> from `react-router-dom`

### sample code

```javascript
import { BrowserRouter, Routes, Route } from "react-router-dom";
```

- Browser Router stores the current location in the browser's address bar using clean URLs and navigates using the browser's built-in history
  wraps the whole page application in 
  ```javascript
  <BrowserRouter></BrowserRouter>
  ```



- `<Routes></Routes>` wraps all `<Route>` tags in the BrowserRouter Tag.
- `<Route />` is self closing tag that contains other props that are useful,

  1.  `element` prop is used to direct to the page to be rendered
  2.  `path` is the address bar link that appears if the page is rendered

  - `useParams()` is similar to router params in express. <em>Ignore if not familiar with express</em>.
    the function imported from `react-router-dom` is readonly. it accesses the object name (parameter name) used in the `<Route />` path property
  - `Link` imported from `react-router-dom` is used for navigating to path (address link)

  #### why choose `<Link>` over `<a>`?

  `<a>` tag refreshes the whole page while Link tag does not

### react query

`npm install @tanstack/react-query@latest`
avoid or minimize `useEffect` in react app if <b>POSSIBLE</b>

- how to use `react query`
- `useQuery` accepts an array of two items and queryFunction = [`queryKey`, `initialData`] and `queryFunction`
- `queryKey` is the object key for caching the api response
- initialData, is used in the `queryFn`, the function accepts the initialData as a parameter. if the `queryKey` is not found in the cache.
- `queryFn` is function that is used to make an api call if the `queryKey` is not found

### class component

`rules`:

- when using class component do not use hooks {useEffect, useState, etc}
- always use `render` function even if not returning anything, just return `null` if <b>Possible</b>
- `this` is always and crucial in class component.
- `this` in a class component refers the component

### using class component

`code sample for useState in class component`

```javascript
state = {
  active: 0,
};

this.setState({
  active: `// value should be here`,
});
```

equals this 👇
`code sample for useState in functional component`

```
const [active,setActive] = useState(0)
```

### making error boundary in react

`rules`

- error component should be made in `class component` why? there's no replacer for `componentDidCatch` in function component yet.
- the same procedure of creating a `class component`. always remember the `render()`
- state should be `state = {hasError: false}`
- `componentDidCatch` takes two parameter : [`error`, `info`]. to send error message for tracking or sending to error service like [TRACK JS]('https://trackjs.com') or `new relic`
- if error, it should be processed in the `render` function
- for example:

```javascript
render() {
  if(this.state.hasError){
    // this should render a component if there's a function in the app.
  }
  return this.props.children // meaning it should the return values in the props
}
```

### how to use error boundary in react

`rules`

- make class component,
- Wrap around the component that can throw error with `error boundary component`

```javascript
 return (
 <ErrorBoundary> 
 // Component to be rendered //
 </ErrorBoundary> 
 )
```

### how to pass props to component wrapped with error component

`rules`

- props should be passed to the `error component`
- use spread operator to directly pass the props to the component

## create a modal

- do this later when you understand

## create a context (app level state)

### how to create a context provider in app state

- create a context js file
- import `createContext` from react
- ```javascript
  const AdoptedPetContext = createContext();
  export default AdoptedPetContext;
  ```

### how to use context in the app level

- import the context js file in the `component file`
- make a hook using `useState`
```javascript
 const AdoptedPet = useState(null) // passing the whole hook
```
- wrap the context provider around the whole components in the App.js
- pass the hook created to the `value` props of the `context provider`

### how to use the context in other component

- import `useContext` from `react`
- import the context file created

#### read only

- create a hook using the `useContext` passed the variable from the `context file` to the `useContext` as params
- from the hook, if [`value`,`setValue`] use only the `value` and replace the `setValue` with `_`
- do whatever you want to do with the `value` in the component

#### write only

- create a hook using the `useContext` passed the variable from the `context file` to the `useContext` as params
- from the hook, if [`value`,`setValue`] use only the `setValue` and replace the `value` with `_`
- do whatever you want to do with the `setValue` in the component

