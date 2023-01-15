import { Fragment } from "react";
import './dailyupdates.css';
import pic from "../images/Picture48.jpg";
import pic2 from "../images/Picture40.jpg";
import { Link } from "react-router-dom";

const Dailyupdate = () =>{

    return(
        <>
        <div className = "fundRaising2">
            <div className="fundLeft2">
                <h5>Daily Updates</h5>
                <h1>Linocut Printing Workshop</h1>
                <p>Hobbies are the creative relief of our souls. Self-expression through a creative medium is something we teach the children at SPWF. In order to do just that, we recently organized an activity called Linocut Printing. Linocut, also known as linoleum art, is a printmaking technique, in which a sheet of linoleum is used as a relief surface. This activity was conducted to help the children learn important skills like teamwork, planning and time management. It also taught them the traditional newspaper printing techniques and how to make multiple prints of a single carved design. The activity inculcated a valuable art skill in our students.</p>
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