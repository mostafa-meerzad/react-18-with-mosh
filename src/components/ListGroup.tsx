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
