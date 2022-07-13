import { Fragment } from "react";
import './fundraising.css';

const Fundraising = () =>{
    return(
        <div className = "fundRaising">
            <div className="fundLeft">
                <h5>Call To Action</h5>
                <h1>Fundraising For The People And Causes You Care About</h1>
                <p>Our motto is to strengthen the roots of society by uplifting the lives of underprivileged children and empowering women, enabling them to stand on their own feet and contribute to the community.</p>
                <div className="playButton">
                <i class="fa-solid fa-circle-play"></i>
                    <p>PLAY DOCUMENTRY</p>
                </div>
            </div>
            <div className="fundRight">
                <h5>Impact </h5>
                <h1>Fundraising For The People And Causes You Care About</h1>
                <p>Our motto is to strengthen the roots of society by uplifting the lives of underprivileged children and empowering women, enabling them to stand on their own feet and contribute to the community.</p>
                <div className="playButton">
                    <button></button>
                    <p>PLAY DOCUMENTRY</p>
                </div>
            </div>
        </div>
    )
}
export default Fundraising;