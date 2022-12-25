import { Fragment } from "react";
import './dailyupdates.css';
import pic from "../images/Picture42.jpeg";
import pic2 from "../images/Picture40.jpg";
import { Link } from "react-router-dom";

const Dailyupdate = () =>{

    return(
        <>
        <div className = "fundRaising2">
            <div className="fundLeft2">
                <h5>Daily Updates</h5>
                <h1>Shoes Distribution</h1>
                <p>On 16th December 2022, DDA ENGINEERS CLUB distributed snacks, eatables, school shoes and socks to the students of our organization. They've not only helped students of our NGO with this generous act but also put a smile on the faces of more than hundreds of students that were part of this distribution event. We're utterly grateful to DDA ENGINEERS CLUB for their constant humble support to our organization. Our NGO will always be grateful for their generosity towards our children.</p>
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
                <p>Shakuntala Poddar Welfare Foundation is making various efforts for the upliftment of the children living in slums. In this episode, we are organizing an Online Painting Competition on the occasion of Christmas to increase the enthusiasm of the children. The last day of submission is 26th of January.</p>
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