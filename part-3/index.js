
const Person = ({name, age, hobbies}) => {
    return (
        <div>
            <p>Learn some information about this person</p>
            <h3>{age > 18 ? "please go vote!" : "you must be 18"}</h3>
            <p><b>Name:</b> {name.length > 8? name.substring(0,5) : name}</p>
            <p><b>Age:</b> {age}</p>
            <p><b>Hobbies:</b></p>
            <ul>
                { hobbies.map((hobby) => <li>{hobby}</li>) }
            </ul>
            <hr/>
        </div>
    )
};


const App = () => {
    return (
        <div>
           <Person name="Mouhammed" age={19} hobbies={["Movies", "Soccer", "Cars", "Music"]}/>
           <Person name="Johnathan" age={17} hobbies={["Food", "dance", "Cars"]}/>
           <Person name="Jenny" age={29} hobbies={["Shopping", "Soccer", "pets", "Traveling"]}/>
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById("root"));