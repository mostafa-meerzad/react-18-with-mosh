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