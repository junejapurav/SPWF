import Pic1 from '../img/shiksharth.jpg';
// import Map from '../components/Map';
import Pic5 from '../images/Picture5.jpg';
import Pic4 from '../images/Picture4.png';
import Pic2 from '../images/Picture2.jpg';
import './EventRight.css'
function EventRight(props){
    const Events= [
        {
            img:Pic5,
            name:"Kaushal Uthan",
            description:"Skill development is very important to polish the skills of brain"
        },
        {
            img:Pic4,
            name:"Chikitsa",
            description:"Good health facilities are necessary for a common man"
        },
        {
            img:Pic2,
            name:"Aahar",
            description:"Aahar is to provide nutritious and safe food to children."
        },
        {
            img:Pic1,
            name:"Shiksharth",
            description:"Shiksharth aims at providing health and medical benefits."
        }
    ]
  function eventFilter(){
   return Events.filter(manager);

  }
  function manager(event){
     return event.name!=props.current;
  }
    return(
        <div className="shikright">
                <div className="eventDetails">
                    <div className='innereventsdetails'>
                        <h3>More Events</h3>
                        {eventFilter().map((event)=><div><img src={event.img}/><div><b>{event.name}</b><p>{event.description}</p></div></div>)}

                    </div>
                   
                    <div className='eventJoin'>
                        <h2>Join Together For Charity</h2>
                        <br/>
                        <p>By using your time, money or voice to support charities and causes you love, you can make a difference to those who need it most every day of the year</p>
                        <br/>
                        <button>Donate Now</button>
                    </div>
                </div>
            </div>
    )
}
export default EventRight;
