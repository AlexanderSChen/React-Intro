function Person(props) {
    let reply;
    if(props.age >= 18) {
        reply = <h3>please go vote!</h3>
    } else {
        reply = <h3>you must be 18</h3>
    }

    return (
        <div>
            <p>Learn some information about this person</p>
            {reply}
            <p>Name: {props.name.slice(0,6)}</p>
            <p>Age: {props.age}</p>
            <ul>{props.hobbies.map(h =>
                (
                    <li>
                    <b>{h}</b>
                    </li>
                ))}
            </ul>
        </div>
    )
}