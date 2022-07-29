import './volunteerBox.css'
import { useState } from "react";
import axios from 'axios';

const VolunteerForm = ()=>{
    const [Name,nameSetHandler]= useState('');
    const [Email,emailSetHandler]= useState('');
    const [Phone,phoneSetHandler]= useState('');
    const [ZipCode,zipSetHandler] =useState('');

    const nameHandler=(event)=>{
        nameSetHandler(event.target.value)
    }
    const emailHandler=(event)=>{
        emailSetHandler(event.target.value);      
    }
    const phoneHandler=(event)=>{
        phoneSetHandler(event.target.value)
    }
    const zipHandler= (event)=>{
        zipSetHandler(event.target.value);
    }

    function volunteerFormSubmitHandler(event){
        event.preventDefault();
        const obj = {
            name:Name,
            email:Email,
            phone:Phone,
            Zip:ZipCode
        }
        addVolunteerData(obj);

    }
    function addVolunteerData(obj){
        
        axios.post("/createVolunteer",obj)
    }

    return(
        <div className="volunteerBox">
            <div className="volunteerBoxLeft">
                <h4>JOIN WITH US</h4>
                <h1>Take One Step Further To Become A Proud Volunteer!</h1>
                <p>Wherever you turn, you can find someone who needs you. Even if it is a little thing, do something for which there is no selfishness but the privilege of doing it. Remember, you don’t live in the world all of your own.</p>
            </div>
            <form className="volunteerBoxRight" onSubmit={volunteerFormSubmitHandler}>  
                    <input type="text" placeholder="Enter Name" onChange={nameHandler} value={Name} />
                    <input type="text" placeholder="Enter Email" onChange={emailHandler} value={Email}/>
                    <div>
                        <input type="text" placeholder="Enter Phone*" onChange={phoneHandler} value={Phone}/>
                        <input type="text" placeholder="Zip Code*" onChange={zipHandler} value={ZipCode}/>
                    </div>
                    <div>
                    <div className='VolunteerType'>
                        <input type="radio" id="Teaching" name="volunteerType" value="Teaching" />
                        <label for="Teaching">Teaching </label><br/>
                        <input type="radio" id="WebDesigning" name="volunteerType" value="Web Designing" />
                        <label for="WebDesigning">Web Designing</label><br/>
                        <input type="radio" id="GraphicsDesigning" name="volunteerType" value="Graphics Designing" />
                        <label for="GraphicsDesigning">Graphics Designing</label><br/>
                        <input type="radio" id="ContentWriting" name="volunteerType" value="Content Writing" />
                        <label for="ContentWriting">Content Writing</label><br/>
                    </div>
                    </div>
                    <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default VolunteerForm;