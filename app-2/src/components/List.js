import { useState } from "react";
import "./List.css";

const List = () => {
  const [list, setList] = useState([
    "spaghetti",
    "lasagna",
    "ice cream",
    "sushi",
    "bologna",
    "cheese",
  ]);
  return list.map((item) => {
    return <p className="item">{item.toUpperCase()}</p>;
  });
};

export default List;
