import { useState } from "react";

interface Props {
  list: string[];
  title: string;
  onSelectItem: (item: string) => void; // naming-convention "on<EventName>" for eventHandler which is passed through props
}
const ListGroup = ({ list, title, onSelectItem }: Props) => {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h1>{title}</h1>
      <ul className="list-group">
        {list.map((item, index) => (
          <li
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
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
