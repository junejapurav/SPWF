import "./volunteershower.css"
const Volunteershower = (props)=>{
    return (
        <div className="eachvol">
            <img src={props.event.imgsrc}/>
            <div className="voldescr">
                <h2>{props.event.position}</h2>
                <h1>{props.event.name}</h1>
                <ul>
                    <li>{props.event.desc}</li>
                    <li>{props.event.area}</li>
                    <li>{props.event.location}</li>
                </ul>
            </div>
        </div>
    )
}

export default Volunteershower;