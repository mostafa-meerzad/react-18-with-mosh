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
