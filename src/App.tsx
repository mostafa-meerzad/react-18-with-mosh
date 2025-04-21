import React from "react";
import ListGroup from "./components/ListGroup";


const cities = ["London", "New York", "Paris", "Tokyo"]
const App = () => {
  return (
    <div>
      <ListGroup list={cities} title="Cities" />
    </div>
  );
};

export default App;
