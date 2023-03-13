import Footer from "../components/footer";

import pic4 from '../images/Picture45.jpeg'
import pic5 from '../images/Picture46.jpeg'
import pic6 from '../images/Picture55.jpeg'
import pic7 from '../images/Picture56.jpeg'
import './competition.css'
import Whatsapp from "../components/Whatsapp";
import { useState } from "react";
import JSConfetti from "js-confetti";
import Result from "./Result";


function Competition() {

    const [showComponent, setShowComponent] = useState(false);
    const [buttonClicked, setButtonClicked] = useState(false);

    function showing() {

        const jsConfetti = new JSConfetti()

        jsConfetti.addConfetti({
            emojis: ['✨'],

            emojiSize: 50,
            confettiNumber: 100,
        })

        setShowComponent(true);
        setButtonClicked(true);
    }



    return (
        <div className="competition">

            <h2 className="judgeheading">Judges Panel</h2>
            <div className="judgeposters">
                <img src={pic4}></img>
                <img src={pic5}></img>
                <img src={pic6}></img>
                <img src={pic7}></img>
            </div>


            <div className="result-div">
                {!buttonClicked && <button className="result-button" onClick={showing}>Click me</button>}
                {showComponent && <Result />}
            </div>

            <Whatsapp />
            <Footer></Footer>
        </div>
    )
}

export default Competition;