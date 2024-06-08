function Card(props) {
    return (
        <div className="card">
            <img src={props.url} />
            <p>{props.title}</p>
        </div>
    );
}

export default Card;
