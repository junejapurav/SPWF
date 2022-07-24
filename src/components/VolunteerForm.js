import { useState } from "react";

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
        addContactUsData(obj);

    }
    async function addContactUsData(obj){
        const response= await fetch('https://spwf-8a8c4-default-rtdb.firebaseio.com/Volunteer.json',{
            method: 'POST',
            body:JSON.stringify(obj),
            headers:{
                'Content-Type': 'application/json'
            }
        });
        const data= await response.json();
        console.log(data);
    }

    return(
        <div>
            <form  onSubmit={volunteerFormSubmitHandler}>  
                <input type="text" placeholder="Enter Name" onChange={nameHandler} value={Name} />
                <input type="text" placeholder="Enter Email" onChange={emailHandler} value={Email}/>
                <input type="text" placeholder="Enter Phone*" onChange={phoneHandler} value={Phone}/>
                <input type="text" placeholder="Zip Code*" onChange={zipHandler} value={ZipCode}/>
                <button type="submit">Submit</button>
            </form>
        </div>

    )
}

export default VolunteerForm