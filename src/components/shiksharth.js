import './shiksharth.css';
import Pic1 from '../img/shiksharth.jpg';

function Shiksharth(){
    return(
        <div className="shiksharth">
            <div className="shikleft">
                <h1>Shiksharth</h1>
                <img src={Pic1}></img>
                <br/>
                <p>The Shakuntala Poddar Welfare Foundation's "Shiksharth" programme aims to teach underprivileged children who have been denied access to education or have missed school due to unforeseen circumstances. Shiksharth's main goal is to provide students with high-quality education by using approaches that are tailored to each child's needs. Students who are already enrolled in higher secondary schools but lacked a solid foundation from the start are provided suitable resources and tuition. We strive to reintegrate children who have had to leave school for a variety of reasons by offering instructional facilities and aid with school enrollment. Apart from child-centered interventions, we also hope to raise awareness among parents about the value of education and to persuade them to pay attention to their children's growth and good schooling so that they can realise their dreams.</p>            
                </div>
            <div className="shikright">
                <div className="eventDetails">
                    <h3>eventDetails</h3>
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
    )
}

export default Shiksharth;