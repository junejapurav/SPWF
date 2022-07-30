import './shiksharth.css';
import Pic1 from '../img/shiksharth.jpg';
// import Map from '../components/Map';
import Pic5 from '../images/Picture5.jpg';
import Pic4 from '../images/Picture4.png';
import Pic2 from '../images/Picture2.jpg';
// const location = {
//         address: 'shakuntala poddar welfare foundations',
//         lat: 28.61479585076701,
//         lng: 77.04177969736836,
// }

function Shiksharth(){
    return(
        <div>
            <div className="shiksharth">
            
            <div className="shikleft">
                <h1>Shiksharth</h1>
                <img src={Pic1}></img>
                <br/>
                <p>The Shakuntala Poddar Welfare Foundation's "Shiksharth" programme aims to teach underprivileged children who have been denied access to education or have missed school due to unforeseen circumstances. Shiksharth's main goal is to provide students with high-quality education by using approaches that are tailored to each child's needs. Students who are already enrolled in higher secondary schools but lacked a solid foundation from the start are provided suitable resources and tuition. We strive to reintegrate children who have had to leave school for a variety of reasons by offering instructional facilities and aid with school enrollment. Apart from child-centered interventions, we also hope to raise awareness among parents about the value of education and to persuade them to pay attention to their children's growth and good schooling so that they can realise their dreams.  Our project's core concept is education. Our main goal is to provide high-quality education to children who are disadvantaged.This includes putting in place a solid infrastructure to assure their overall development, which iscritical to their health, character, and abilities.</p>            
                </div>
            <div className="shikright">
                <div className="eventDetails">
                    <div className='innereventsdetails'>
                        <h3>More Events</h3>
                        <div><img src={Pic5}/> <div><b>Kaushal Uthan</b><p>Skill development is very important to polish the skills of brain</p></div></div>
                        <div><img src={Pic4}/> <div><b>Chikitsa</b><p>good health facilities are necessary for a common man</p></div></div>
                        <div><img src={Pic2}/> <div><b>Aahar</b><p>Aahar is to provide nutritious and safe food to children.</p></div></div>
                    </div>
                    {/* <Map location={location} zoomLevel={18}/> */}
                    <div className='eventJoin'>
                        <h2>Join Together For Charity</h2>
                        <br/>
                        <p>By using your time, money or voice to support charities and causes you love, you can make a difference to those who need it most every day of the year</p>
                        <br/>
                        <button>Donate Now</button>
                    </div>
                </div>
            </div>
            </div>
        </div>

    )
}

export default Shiksharth;