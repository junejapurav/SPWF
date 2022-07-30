import React from "react";
import EventLeft from "./EventLeft";
import EventRight from "./EventsRight";
import Footer from "./footer";
import Header from "./header";
function Event(props){

    return(
        <React.Fragment>
        <Header/>
        <br/>
        <br/>
        <div style={{display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            gap: "50px"}}>
        <EventLeft current={props.current}/>
        <EventRight current={props.current}/>
        </div>
        <Footer/>
        </React.Fragment>
    )
}
export default Event;