import { useState } from "react";

const List = () => {
  const [filter, setFilter] = useState("");
  const [list, setList] = useState([
    "spaghetti",
    "lasagne",
    "sushi",
    "meat loaf",
    "chicken parm",
  ]);

  let items = list
    .filter((item) => {
      return item.includes(filter);
    })
    .map((item, index) => {
      return <h2 key={index}>{item}</h2>;
    });

  const changeHandler = (e) => {
    let search = e.target.value;
    setFilter(search.trim().toLowerCase());
  };

  return (
    <div>
      <input type="text" onChange={changeHandler} />
      {items}
    </div>
  );
};

export default List;
