import { Fragment } from "react";
import './dailyupdates.css';
import pic from "../images/Picture57.jpeg";
import pic2 from "../images/Picture58.jpg";
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
                <h1>Glass Painting</h1>
                <p>Watch our Saturday activity where children express their creativity through glass painting. This week's theme is fish in a fish tank, and you'll be amazed at how these young artists bring the  underwater world to life with vibrant colors and imaginative designs. Join us in supporting their love for art and imagination.
This activity provides an opportunity for them to showcase their artistic abilities and learn new skills while having fun. Our NGO is committed to empowering and nurturing these children through various programs and initiatives.</p>
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