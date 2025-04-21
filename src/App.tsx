import React from "react";
import ListGroup from "./components/ListGroup";

const cities = ["London", "New York", "Paris", "Tokyo"];
const App = () => {
  const handleSelectItem = (item: string) => {
    console.log(item);
  }; // "handle<EventName>"" naming convention for eventHandlers
  return (
    <div>
      <ListGroup list={cities} title="Cities" onSelectItem={handleSelectItem} />
    </div>
  );
};

export default App;
