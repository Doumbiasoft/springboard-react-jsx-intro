const Tweet = ({username, name, date, message}) => {

    return (
        <div>
            <p><b>{name}</b></p>
            <p><b>@{username}</b> - <small>{date}</small></p>
            <p>{message}</p>
            <hr/>
        </div>
    )
};
const App = () => {
    return (
        <div>
            <Tweet 
                username="momo" 
                name="Mouhamed Doumbia" 
                date="07/22/2023" 
                message="Git is a version control system that allows multiple developers to work on the same project while tracking changes and revisions."/>
            <Tweet 
                username="timmy" 
                name="Tim Cook" 
                date="06/15/2023" 
                message="Apple Inc. is an American multinational technology company headquartered in Cupertino, California."/>
        <Tweet 
                username="pichai" 
                name="Sundar Pichai" 
                date="06/05/2023" 
                message="Comprehensive up-to-date news coverage, aggregated from sources all over the world by Google News."/>
        
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById("root"));