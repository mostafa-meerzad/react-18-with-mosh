import React, { useEffect, useRef } from "react";

const App = () => {
  const ref = useRef<HTMLInputElement>(null);
  useEffect(() => {
    document.title = "My App";
  });

  useEffect(() => {
    if (ref.current) ref.current.focus();
  });
  return (
    <div>
      <input type="text" className="form-control" ref={ref} />
    </div>
  );
};

export default App;
