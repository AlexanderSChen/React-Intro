function Tweet(props) {
    return (
        <div>
            <h3>{props.username}</h3>
            <h6>{props.name}</h6>
            <p>{props.message}</p>
            <h5>{props.date}</h5>
        </div>
    );
}