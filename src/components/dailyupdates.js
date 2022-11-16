import { Fragment } from "react";
import './dailyupdates.css';
import pic from "../images/Picture34.jpg";
import pic2 from "../images/Picture31.jpg";
import { Link } from "react-router-dom";

const Dailyupdate = () =>{

    return(
        <>
        <div className = "fundRaising2">
            <div className="fundLeft2">
                <h5>Daily Updates</h5>
                <h1>Sweaters Distribution</h1>
                <p>Your each and every cooperation is no less than gold for us. In this direction, on November 10, 10 retired engineers from DDA Engineers Club, Dwarka donated sweaters to our children. These sweaters given to children have become a part of our uniform and are a very valuable donation considering the cold weather.</p>
                <Link to='/competition'><button>COMPETITIONS</button></Link>
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
                <p>Shakuntala Poddar Welfare Foundation is making various efforts for the upliftment of the children living in slums. In this episode, on the coming 20th of November, we are organizing a Camel ride on the occasion of Children's Day program to increase the enthusiasm of the children.</p>
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