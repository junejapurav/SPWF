import { Fragment } from "react";
import './dailyupdates.css';
import pic from "../images/Picture31.jpg";
import pic2 from "../images/Picture22.jpg";

const Dailyupdate = () =>{

    return(
        <>
        <div className = "fundRaising2">
            <div className="fundLeft2">
                <h5>Daily Updates</h5>
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
        <div className = "fundRaising3">
            <div className="fundLeft2">
                <h5>Upcoming Event</h5>
                <h1>Children's Day Event</h1>
                <p>Shakuntala Poddar Welfare Foundation is making various efforts for the upliftment of the children living in slums. In this episode, on the coming 20th of November, we are organizing Children's Day program to increase the enthusiasm of the children.</p>
                <div className="playButton">
                <a  style={{color:"white"}} href="https://youtu.be/dB33mlhTm2s" ><i class="fa-solid fa-circle-play"></i></a>
                    <p>NGO's DOCUMENTRY</p>
                </div>
            </div>
            <div className="fundRight2">
                <h5></h5>
                <img src={pic2}></img>
            </div>
        </div>
        </>
    )
}
export default Dailyupdate;