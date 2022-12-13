import React from "react";
import EventLeft from "./EventLeft";
import EventRight from "./EventsRight";
import Footer from "./footer";
import Header from "./header";
import './Event.css'
import Whatsapp from "../components/Whatsapp";

function Event(props){

    return(
        <React.Fragment>
        <Header/>
        <br/>
        <br/>
        <div className="Event">
        <EventLeft current={props.current}/>
        <EventRight current={props.current}/>
        </div>
        <Whatsapp/>
        <Footer/>
        </React.Fragment>
    )
}
export default Event;