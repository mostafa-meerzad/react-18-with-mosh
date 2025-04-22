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

## Props vs State

### Props

1. input passed to a component
2. similar to function args
3. immutable "you should treat them as immutable values"
4. causes a re-render

### State

1. data managed by a component
2. similar to local variables
3. mutable "can change anytime"
4. causes a re-render

## Styling React Apps

### Vanilla CSS

you can simple create a css files preferably with the same name as your component, then import that file into your component file.

you can also take it to the next level by:

1. create a folder with the same name as your component
2. put the component itself and the css files inside it
3. create an index files that import and export the component

```txt
components/
  TextInput/
    TextInput.css
    TextInput.tsx
    index.ts
```

### CSS Modules

CSS Modules is a way to **write CSS that is scoped locally to the component**, rather than globally like traditional CSS. It helps you avoid naming conflicts and keeps styles organized in component-based applications—especially useful in frameworks like **React**, **Next.js**, and others.

---

### 🔧 How CSS Modules Work

When you use a `.module.css` file, the class names you write are automatically transformed into **unique** names during build time. So styles are applied only to the component that imports them.

---

### 🧠 Example:

**styles.module.css**

```css
.button {
  background-color: blue;
  color: white;
}
```

**MyComponent.jsx**

```jsx
import styles from "./styles.module.css";

function MyComponent() {
  return <button className={styles.button}>Click Me</button>;
}
```

**Compiled HTML (behind the scenes):**

```html
<button class="styles_button__3H1j2">Click Me</button>
```

- That `styles_button__3H1j2` is a **hashed version** of your class name.
- It ensures that no other component can accidentally use or override your `.button` class.

---

### ✅ Benefits

- **Scoped styles**: No clashes between components.
- **Autocompletion** and **type safety** (if using TypeScript).
- Easier to maintain in large projects.

---

### 📦 Usage in Next.js (already supported out of the box)

Just name your file like `ComponentName.module.css`, import it into your component, and you're good to go.

Let me know if you want to see how this fits into a Next.js page or component.

**Note**:
you should use **camelNotation** for naming classes like **listGroup** instead of **list-group**.

and in cases you need to apply multiple classes do this:

```tsx
import styles from "./styles.module.css";

function MyComponent() {
  return (
    <button className={[styles.button, styles.glass, styles.shadow].join(" ")}>
      Click Me
    </button>
  );
}
```

`className={[styles.button, styles.glass, styles.shadow].join(" ")}`

put them inside an array and join them with a space.

## CSS in Js

Great question! Let's break it down:

---

### 💡 What is **CSS-in-JS**?

**CSS-in-JS** is a styling technique where you **write CSS styles inside your JavaScript (or TypeScript) code**. Instead of keeping styles in `.css` files, you're writing them directly inside components using JavaScript objects or template literals.

---

### 🧪 Example (Styled Components — one of the most popular CSS-in-JS libraries):

```jsx
import styled from "styled-components";

const Button = styled.button`
  background-color: blue;
  color: white;
  padding: 8px 16px;
`;

function MyComponent() {
  return <Button>Click Me</Button>;
}
```

✔️ The `Button` here is a React component with styles attached to it.

---

### 🔥 Popular CSS-in-JS Libraries

- **styled-components**
- **emotion**
- **@mui/system** (used in Material UI)
- **Stitches** (used in Radix UI themes)
- **vanilla-extract**

---

### 🧠 Benefits

- **Scoped styles by default** (like CSS Modules).
- **Dynamic styling**: You can use props, state, or themes to conditionally style elements.
- All your **logic + styles are in one file**, which can improve component encapsulation.
- Works really well with **design systems** and **theming**.

---

### 🆚 CSS Modules vs CSS-in-JS

| Feature         | CSS Modules              | CSS-in-JS                                    |
| --------------- | ------------------------ | -------------------------------------------- |
| Style location  | `.module.css` files      | Inside JS/TS files                           |
| Scoped styles   | ✅ Yes                   | ✅ Yes                                       |
| Dynamic styles  | 🚫 Limited (via classes) | ✅ Easily with props/state                   |
| Theming support | 🚫 Manual setup          | ✅ Built-in with many libraries              |
| Tooling/Setup   | Simple in frameworks     | Requires a library (e.g., styled-components) |

### Passing Props to Styled-Component

```tsx
import styled from "styled-components";

// define the shape of props for this component
interface ButtonProps {
  active: boolean;
}

// give the component props type to styled-component
const Button = styled.button<ButtonProps>`
  background-color: blue;
  color: white;
  padding: 8px 16px;

  // use ${(props) => props.propName} to access the prop passed from parent
  background-color: ${(props) => (props.active ? "blue" : "transparent=8")};
`;

function MyComponent() {
  return <Button>Click Me</Button>;
}
```

## Adding Icons

Use `react-icons` library to include icons into your components.

this library gives you icons in the form of react components, so no additional configurations needed.

## Understand State Hook

### React updates state asynchronously not immediately

```tsx
import React, { useState } from "react";

const App = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleClick = () => {
    // react updates state Asynchronously
    setIsVisible(true);

    // if we check the value of state here we see the old value
    console.log(isVisible);
  };
  return (
    <div>
      <h1>App</h1>
      <button onClick={handleClick}>show</button>
    </div>
  );
};

export default App;
```

this is done for performance reasons, if we were calling multiple set functions in an event handler and and react were updating the DOM for each one of them we would end up with an infinite-loop of re-rendering.

for that reason react stores all the state updates somewhere and applies them later when the event-handler finishes execution, then react applies all the state changes and re-renders the component with the updated state.

### State is stored outside of the components

variables declared within a component is local to that component and will be re-declared/re-initialized to the initial value every time the component is re-rendered "because of a state/prop change"

```tsx
import React from "react";

const Button = () => {
  const [isVisible, setIsVisible] = React.useState(false);
  let count = 0; //  this local var will be initialized to 0 every-time the state changes
  const handleClick = () => {
    setIsVisible(!isVisible);
    count++;
    console.log(count);
  };
  return (
    <button
      onClick={handleClick}
      className={isVisible ? "btn btn-primary" : "btn btn-danger"}
    >
      Button
    </button>
  );
};

export default Button;
```

that is why we need to store state in a proper way, the `useState` hook, and the sate value is not stored inside the component itself! and those values will be remove once the component is not visible to the screen.

### Use hooks at the top level of your components

## Choosing the State Structure

1. Avoid redundant state variables.
2. group related variables inside an object
3. avoid deeply nested structures.

## Updating State

### Updating Objects

```tsx
export const Component = () => {
  const [customer, setCustomer] = useSate({
    name: "John",
    address: {
      city: "San Francisco",
      zipcode: 94111,
    },
  });

  handleClick = () => {
    // update a nested object
    // first copy all the properties using "spread operator", then select the address property and again "spread operator" to get all the other properties and select the one you want and update the value
    setTags({ ...customer, address: { ...customer.address, zipcode: 89111 } });
  };

  return <div>Component</div>;
};
```

### Updating arrays

```tsx
export const Component = () => {
  const [tags, setTags] = useSate(["happy", "cheerful"]);

  handleClick = () => {
    // ADD
    setTags([...tags, "exciting"]);

    // Remove
    setTags(tags.filter((tag) => tag !== "happy"));

    // Update
    setTags(tags.map(tag=>tag === "happy" ? "happiness": tag)
  };

  return (
    <div>Component</div>
  )
};
```

### Updating an Array of Objects

```tsx
export const Component = () => {
  const [bugs, setBugs] = useSate([
    {id: 1, title: "bug 1", fixed: false},
    {id: 2, title: "bug 2", fixed: false},
    ]);

  handleClick = () => {
    
    setBugs(bugs.map(bug=> bug.id === 1 ? {...bug, fixed: true}: bug))

  };

  return (
    <div>Component</div>
  )
};
```
