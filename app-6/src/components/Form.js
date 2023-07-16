import { useState } from "react";
import Todo from "./Todo";

const Form = () => {
  const [todo, setTodo] = useState("");
  const [list, setList] = useState([]);

  const changeHandler = (e) => {
    setTodo(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setList(() => {
      return [...list, todo];
    });
    setTodo("");
  };
  return (
    <div>
      <form onSubmit={submitHandler}>
        <input type="text" onChange={changeHandler} value={todo} />
        <button type="submit">Add</button>
      </form>
        <Todo list={list} />
    </div>
  );
};

export default Form;
