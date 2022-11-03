import { Fragment } from "react";
import './dailyupdates.css';
import pic from "../images/Picture22.jpg";

const Dailyupdate = () =>{

    return(
        <div className = "fundRaising2">
            <div className="fundLeft2">
                <h5>Daily updates</h5>
                <h1>Diwali event</h1>
                <p>SPWF set up its Diwali Stall in collaboration with Netaji Subhash Apartments, Dwarka RWA. On this occasion we presented & promoted out students handmade crafts, their talents. People out there supported our cause and appreciated our students as well. </p>
                <div className="playButton">
                <a  style={{color:"white"}} href="https://youtu.be/dB33mlhTm2s" ><i class="fa-solid fa-circle-play"></i></a>
                    <p>NGO's DOCUMENTRY</p>
                </div>
            </div>
            <div className="fundRight2">
                <h5>Update of the day</h5>
                <img src={pic}></img>
            </div>
        </div>
    )
}
export default Dailyupdate;