import React from "react";

const Button = () => {
  const [isVisible, setIsVisible] = React.useState(false);
  let count = 0;
  const handleClick = () => {
    setIsVisible(!isVisible);
    count++;
    console.log(count)
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
