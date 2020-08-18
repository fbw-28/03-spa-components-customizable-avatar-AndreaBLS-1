import React from "react";
import Avatar from "./Avatar";

function App() {
  const dummyData = [
    { size: "s", type: "square " },
    { size: "s", type: "rounded" },
    { size: "s", type: "circle" },
    { size: "m", type: "square" },
    { size: "m", type: "rounded" },
    { size: "m", type: "circle" },
    { size: "l", type: "square" },
    { size: "l", type: "rounded" },
    { size: "l", type: "circle" },
    { size: "xl", type: "square" },
    { size: "xl", type: "rounded" },
    { size: "xl", type: "circle" },
  ];
  return (
    <div className="bigContainer">
      {dummyData.map((item) => {
        return (
          <div className="container">
            <Avatar size={item.size} type={item.type} />
          </div>
        );
      })}
    </div>
  );
}

export default App;
