import { useState } from "react";
import './Form.css'

const Form = () => {
  const [input, setInput] = useState("");

  const typeHandler = (event) => {
    // console.log(event.target.value);
    setInput(event.target.value);
  };

  return (
    <div>
      <input type="text" onChange={typeHandler} />
      <p className="output">{input}</p>
    </div>
  );
};

export default Form;
