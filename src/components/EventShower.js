import { useState } from "react";

const EventShower = (props)=>{
   
    const [showData,showDataHandler] = useState(false);

    const showEventData = ()=>{
            showDataHandler(true);
    }
    return( 
            <div className="recentEventContent" style={{ 
                backgroundImage: `url(${props.event.image})`,backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat' 
            }}>
                 <div><h3>{props.event.event_name}</h3><button onClick={showEventData}>View Details</button></div> 
                
            </div>
    )
    
}
export default EventShower;