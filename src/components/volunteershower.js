import "./volunteershower.css"
const Volunteershower = (props)=>{
    return (
        <div className="eachvol">
            <img src={props.event.imgsrc}/>
            <div className="voldescr">
                <h2>{props.event.position}</h2>
                <h1>{props.event.name}</h1>
                <p>{props.event.desc}</p>
            </div>
        </div>
    )
}

export default Volunteershower;