import { Fragment } from "react";
import './dailyupdates.css';
import pic from "../images/Picture36.JPG";
import pic2 from "../images/Picture40.jpg";
import { Link } from "react-router-dom";

const Dailyupdate = () =>{

    return(
        <>
        <div className = "fundRaising2">
            <div className="fundLeft2">
                <h5>Daily Updates</h5>
                <h1>Children's Day Event</h1>
                <p>On last 20 November 2022, we organized a Children's Day program for the children of our organization. The main point of this program is camel ride to bacchon and honoring them according to their achievements. Our NGO is always doing something new for the slum dwellers and this was also one of them.</p>
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
                <p>Shakuntala Poddar Welfare Foundation is making various efforts for the upliftment of the children living in slums. In this episode, we are organizing an Online Painting Competition on the occasion of Christmas to increase the enthusiasm of the children. The last day of submission is 25th of December.</p>
                <Link to='/competition'><button>COMPETITIONS</button></Link>
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