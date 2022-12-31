import { Fragment } from "react";
import './dailyupdates.css';
import pic from "../images/Picture43.jpg";
import pic2 from "../images/Picture40.jpg";
import { Link } from "react-router-dom";

const Dailyupdate = () =>{

    return(
        <>
        <div className = "fundRaising2">
            <div className="fundLeft2">
                <h5>Daily Updates</h5>
                <h1>Christmas Event</h1>
                <p>Another day of bringing joy to the 110 different students of our organization. It wasn't just Santa who visited this Christmas, he rekindled everyone's hopes for the approaching new year. The snacks and chocolates represented a joyous occasion celebrated with festive fervour.</p>
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