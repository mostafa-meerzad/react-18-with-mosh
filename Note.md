# React.js With Mosh

React is a JavaScript library for building dynamic and interactive User Interfaces.

It is build by a FaceBook software engineer Jordan Walke.

Initial release to the Public (version 0.3.0) was in July 2013. React.JS was first used in 2011 for Facebook's Newsfeed feature.

## How React Works

When a webpage is loaded in a browser, the browser takes the `HTML` and forms a tree like structure `Document Object Model` or `DOM` which then allows us to use `javascript` and change the page content based on user interactions. e.x: we can use `js` to hide an element when a button is clicked

```js
// Vanilla JavaScript
const btn = document.querySelector("#btn");
btn.addEventListener("click", () => {
  const div = document.querySelector("#div");
  div.style.display = "none";
});
```

as our application grows, dealing with the `DOM` cab become quite challenging and complex, and here is that `React` shines. With `React` we don't need to worry about querying and updating `DOM` elements 😎.

instead we describe the webpage as a group of small, reusable components and `React` takes care of creating and efficiently updating `DOM` elements.

so `Components` help us write **reusable**, **modular** and better **organized** code.

## Structure of a React App

Essentially a `React` app is a tree of components with the `APP` being the root, bringing everything together.

![react app structure](<./Screenshot%20(159).png>)

## Folder Structure in a React App

1. `node_modules`: where all dependency packages are installed.
2. `public`: where our app's public assets like **images**, **icons**, **video** files and etc. goes.
3. `src`: where all the our components and sub-components go.
4. `index.html`: a very basic **HTML** file with a **div** with id of **root** and a **script** mapped to our **main.tsx** file. the main entry point to our application. here we can change the **title**, **favicon** and **meta-data**.
5. `package.json`: where all the information about this project is stored, like **name**, **version**, **author**, **dependency packages** for development and production, **scripts** for running specific files/tasks.
6. `tsconfig.json`: configuration options for `TypeScript Compiler`, we don't need to touch it in most of the times.
7. `vite.config.ts`: configuration options for `Vite`, we don't need to do anything with it in most cases.

## Create a React Component

There are 2 ways to create a React component:

1. `class components`: old and not used as much these days.
2. `function components`: new and quite popular. considered best practice.

with `JSX` we can write dynamic content.

```jsx
// PascalCase
function Message() {
  const name = "John";

  // JSX: JavaScript XML
  // return <h1>Hello World</h1>
  // we can write any JS statements inside {} "a statement is a piece of code that produces a specific value"
  //   return <h1>Hello {name}</h1>;

  // or render elements conditionally
  if (name) return <h1>Hello {name}</h1>;
  return <h1>Hello World</h1>;
}
// export as default
export default Message;
// or
// export as named
export { Message };
```

## How React Works

![virtual dom](<./Screenshot%20(160).png>)
Currently we have a component tree with the `App` component being the `root` or `top level` component and `Message` being the `child` component, when the app start React takes that component tree and builds a JavaScript Data-structure called `Virtual DOM` which is different than the `Browser DOM`,

![component tree](<./Screenshot%20(162).png>)

it is a light-weight in-memory representation of the component tree in which each node represents a component and it's properties, when the `state` or data of a component changes React updated the corresponding node in the `Virtual DOM` to reflect the new changes.

![component tree](<./Screenshot%20(161).png>)

then it compares the current version of `Virtual DOM` with the previous version, to identify the nodes that should be updated, it will then update those nodes in the `Actual DOM`/`Browser DOM`

![component tree](<./Screenshot%20(163).png>)

in fact updating the `Browser DOM` is not done by React itself! but with a dependency package `react-dome`

```tsx
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
```

## React EcoSystem

Since React is just a library and not a framework like Angular or Vue, and `Libraries` tend to be smaller and focused on specific tasks, while `Frameworks` are larger and provide a more complete infrastructure for application development, we often
need other tools for concerns such as routing, state management,
internationalization, form validation, etc.

## Styling React Components with Bootstrap

first install bootstrap by running `npm i bootstrap@version-number` then remove all the default boilerplate styles from your app then import **bootstrap.css** into your **main.jsx** file

## How to Type Event Handlers

`MouseEvent` type from `React` is the type you need for the **event** parameter for your event-handler functions

```tsx
import React, { MouseEvent } from "react";

const ListGroup = () => {
  const list = ["item 1", "item 2", "item 3", "item 4"];
  const handleClick = (event: MouseEvent) => {
    console.log(event);
  };
  return (
    <>
      <h1>List</h1>
      <ul className="list-group">
        {list.map((item) => (
          <li key={item} onClick={handleClick} className="list-group-item">
            {item}
          </li>
        ))}
      </ul>
    </>
  );
};

export default ListGroup;
```

## Stage Management

to change state of components we need to use `useState` hook

```tsx
const ListGroup = () => {
  const list = ["item 1", "item 2", "item 3", "item 4"];
  let selectedIndex = 0;
  return (
    <>
      <h1>List</h1>
      <ul className="list-group">
        {list.map((item, index) => (
          <li
            key={item}
            onClick={() => (selectedIndex = index)}
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item "
            }
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
};

export default ListGroup;
```

if we define an ordinary variable that variable is local to the component it is defined in, **React** doesn't know about this variable to track it, so we need to tell react that this component is going to have data/state that will change over time

**Note**: each component has it's own state and they're not interfering with one another, even they are the same component but used in several places.

```tsx
import { useState } from "react";

const ListGroup = () => {
  const list = ["item 1", "item 2", "item 3", "item 4"];
  //   let selectedIndex = 0;
  const [selectedIndex, setSelectedIndex] = useState(-1);
  // destructure the array that useSate gives and use this naming convention

  //   const arr = useState(-1)
  // arr[0] // variable like "selectedIndex"
  // arr[1] // updater function

  return (
    <>
      <h1>List</h1>
      <ul className="list-group">
        {list.map((item, index) => (
          <li
            key={item}
            onClick={() => setSelectedIndex(index)}
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item "
            }
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
};

export default ListGroup;
```

## Passing Data via Props

use Ts `interface` to define the shape of the props for your component.

```tsx
import { useState } from "react";

interface Props {
  list: string[];
  title: string;
}
const ListGroup = ({ list, title }: Props) => {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h1>{title}</h1>
      <ul className="list-group">
        {list.map((item, index) => (
          <li
            key={item}
            onClick={() => setSelectedIndex(index)}
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item "
            }
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
};

export default ListGroup;
```

## Passing Functions via Props

In the real-world applications it's common that something should happen when we select and item, "in our case a city" and the parent component should be notified about it!, we can't implement the logic inside the component itself because the logic varies from application to application or even withing the same application!. so a better way is to pass functions from **parent** to **child** component so whenever the child component is selected the function from parent also gets called.


