import { Fragment } from "react";
import './dailyupdates.css';
import pic from "../images/Picture57.jpeg";
import pic2 from "../images/Picture59.jpeg";
import { Link } from "react-router-dom";
import Ticker from "./ticker";

const Dailyupdate = () =>{

    return(
        <>
        <a href='https://www.instagram.com/shakuntalapoddar_ngo/' className="rednote"><Ticker/></a>
        <div className = "fundRaising2">
            <div className="fundLeft2">
                <h5>Daily Updates</h5>
                <h1>Republic Day Event</h1>
                <p>To celebrate the special occasion of 26th Jan SPWF had organized multiple programs. We were joined by around 120 students, our beloved chief guests and Founder Ratna ma'am along with Anil sir and all our staff. The first event was a Saraswati Puja. After prasad distribution, the Tiranga was unfurled by our dear Ratna ma'am. Many students performed onstage. The Sports Day was also conducted. Many exciting games and races were organized for the juniors as well as seniors.</p>
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
                <h1>Annual Day Celebration</h1>
                <p>You all are invited to our Annual Program 2023. Please do come to support underprivileged talents.
                <ul>
                    <li>Dated: 16th April, 2023</li>
                    <li>Timing: 9:30 am Onwards</li>
                    <li>Venue: Shaheed Bhagat Singh Apartments, Dwarka Sector 14, ND-110078</li>
                </ul>
                </p>
                {/* <Link  to='/competition'><button>COMPETITIONS</button></Link> */}
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