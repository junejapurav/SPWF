import { Fragment } from "react";
import './dailyupdates.css';
import pic from "../images/Picture60.jpeg";
import pic2 from "../images/Picture59.jpeg";
import { Link } from "react-router-dom";
import Ticker from "./ticker";

const Dailyupdate = () =>{

    return(
        <>
        {/* <a href='https://www.instagram.com/shakuntalapoddar_ngo/' className="rednote"><Ticker/></a> */}
        <div className = "fundRaising2">
            <div className="fundLeft2">
                <h5>Daily Updates</h5>
                <h1>Annual Day Event</h1>
                <p>'Sankalp’, the much awaited 5th annual day function of SPWF was held with much enthusiasm on 16th April 2023. Dr. Sangeeta Mutreja( MBBS) graced the occasion as the Chief Guest .The students enthralled the audience with their dance performances  like Ganesh vandana, fruit dance, bum bum bole, theme song , dance ka bhoot. The skit put up by them showed the remarkable impact SPWF had made on their lives. Towards the end there was the prize distribution ceremony for the students of the Ngo. A big round of applause for the students, the volunteers and also the sponsors for making the event a great success.</p>
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