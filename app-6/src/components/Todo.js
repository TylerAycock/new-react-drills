const Todo = (props) => {
  return (
      props.list.map(item=>{
        return(
        <p>{item}</p>
        )
      })
  );
};

export default Todo;
