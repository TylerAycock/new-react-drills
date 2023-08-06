import './People.css'
const People = ({ characters }) => {

    let starWars = characters.map((person, index) => {
        return (
            <div key={index} className="character-card">
                <h1>{person.name}</h1>
                <p>Height:{person.height}</p>
                <p>eye color: {person.eye_color}</p>
                <p>gender: {person.gender}</p>
            </div>
        )
    })
    return (
        <div>{starWars}</div>
    )
}

export default People