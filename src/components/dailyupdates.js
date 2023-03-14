import { Fragment } from "react";
import './dailyupdates.css';
import pic from "../images/Picture57.jpeg";
import pic2 from "../images/Picture54.png";
import { Link } from "react-router-dom";
import Ticker from "./ticker";

const Dailyupdate = () =>{

    return(
        <>
        <Link to='/competition' className="rednote"><Ticker/></Link>
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
                <h1>Painting Competition</h1>
                <p>Shakuntala Poddar Welfare Foundation is making various efforts for the upliftment of the children living in slums. In this episode, we are organizing an Online Painting Competition on the occasion of Republic day to increase the enthusiasm of the children. The last day of submission is 28th of February,2023.</p>
                <Link  to=''><button>COMPETITIONS</button></Link>
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