import { useEffect, useState,useRef } from 'react';
import counterPhoto from '../img/Picture2.jpg';
import './Counter.css';
import { Waypoint } from 'react-waypoint';
const Counter= ()=>{

  let [peopleDisplayed, peopleDisplayedChanger] = useState(0);
  let [students, studentsChanger] =useState(0);
  let [sponsors,sponsorChanger] =useState(0);
  let [donors,donorChanger] =useState(0);


  const values = [13,300,10,5];
  const min =Math.min.apply(null, values);

 const newArr =  values.map((a)=> (a/min));

  const [didMount,didMountSet] =  useState(false);
  
 
  useEffect(()=>{
    if (didMount=== true) {
      setTimeout(()=>{
        counterUpdater();
      },200);

    } else {
      didMountSet(true);
    }
    
    

  },[peopleDisplayed,students,donors,sponsors])


  const counterUpdater = () =>{
    
        if(peopleDisplayed === values[0] && students=== values[1] && donors===values[2] && sponsors===values[3]){
          return;
        }
        if(students!==values[1])
          studentsChanger(students+newArr[1]);

         if(donors!==values[2]) 
          donorChanger(donors+newArr[2]);

        if(sponsors!==values[3])
          sponsorChanger(sponsors+newArr[3]);

         if(peopleDisplayed!== values[0]) 
          peopleDisplayedChanger(peopleDisplayed+newArr[0]);
       
     
  }

    return (
      
        <div className="counterBanner">
        <div className="bannerLeft">
        <img src={counterPhoto} alt=""/>
        <Waypoint onEnter={counterUpdater}  bottomOffset={'25%'}>
      <div className='counter' onClick={counterUpdater}>
        <div className='countercolomn'><h1>{parseInt(peopleDisplayed)}k+</h1><p>People Fed</p></div>
        <div className='countercolomn'><h1>{parseInt(students)}+</h1><p>students</p></div>
        <div className='countercolomn'><h1>{parseInt(donors)}</h1><p>donors</p></div>
        <div className='countercolomn'><h1>{parseInt(sponsors)}</h1><p>sponsors</p></div>
      </div>
      </Waypoint>
    </div>
    <div className="bannerRight">
      <h5>About Us</h5>
      <h1>Our Work Promise To Uphold The Trust Placed </h1>
      <p className="counterDesc">Our non-governmental organisation is working towards child upliftment and women empowerment. It provides quality education and nutrition to underprivileged children and generates employment for women.</p>
      <div className="counterExp">
        <ul>
          <li>creating an equitable society.</li>
          <li>uplifting the lives of underprivileged children</li>
          <li>empowering women</li>
          <li>providing quality education</li>
        </ul>
        <div className='yearExperience'><h2>4.5</h2>Years Of Experience</div>
      </div>
      <button>Read More</button>
    </div>
  </div>
  
    )
}
export default Counter;
