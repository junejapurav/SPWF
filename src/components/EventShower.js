import { useState } from "react";

const EventShower = (props)=>{
   
    const [showData,showDataHandler] = useState(false);

    const showEventData = ()=>{
            showDataHandler(true);
    }
    return(
        
       
        <div>
            {!showData && <img src={props.event.image} style={{filter:"brightness(80%)"}} />}
            {showData &&  <img src={props.event.image} style={{filter:"brightness(30%)"}}/>}
            
            <div className="recentEventContent">
                {!showData && <div><h3>{props.event.event_name}</h3><button onClick={showEventData}>View Details</button></div> }
                {showData && <p>{props.event.eventDetail}</p>}
            </div>
            
        </div>
    )
    
}
export default EventShower;