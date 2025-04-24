import React, { useState } from "react";
import Button from "./Button";
import Form from "./components/Form";

const App = () => {
  const [isVisible, setIsVisible] = useState(false);
  let count = 0;

  const handleClick = () => {
    // react updates state Asynchronously
    setIsVisible(true);
    count++;

    // if we check the value of state here we see the old value
    console.log(isVisible);
    console.log(count)
  };
  return (
    <div>
      {/* <h1>App</h1> */}
      {/* <button onClick={handleClick}>show</button> */}
      {/* <Button/> */}
      <Form/>
    </div>
  );
};

export default App;
