const ToDo = ({ list }) => {


    return (
        <div>
            {list.map((chore, index) => {
                return (
                    <h2 key={index}>
                        {chore}
                    </h2>
                )
            })}
        </div>
    )
}

export default ToDo