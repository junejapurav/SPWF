import { useState } from 'react'
import style from './ContactUsForm.module.css'
import axios from 'axios';

const ContactUsRight = ()=>{
    const [contactUsName,nameSetHandler]= useState('');
    const [contactUsEmail,emailSetHandler]= useState('');
    const [contactUsPhone,phoneSetHandler]= useState('');
    const [contactUsSubject,subjectSetHandler]= useState('');
    const [contactUsMessage,messageSetHandler]= useState('');
   

    const nameHandler=(event)=>{
        nameSetHandler(event.target.value)
    }
    const emailHandler=(event)=>{
        
        emailSetHandler(event.target.value);
    }
    const phoneHandler=(event)=>{
        phoneSetHandler(event.target.value)
    }
    const subjectHandler=(event)=>{
        subjectSetHandler(event.target.value)
    }
    const messageHandler=(event)=>{
        messageSetHandler(event.target.value)
    }

    function onContactUsSubmitHandler(event){
        event.preventDefault();
        
            const obj={
                name:contactUsName,
                email:contactUsEmail,
                phone:contactUsPhone,
                subject:contactUsSubject,
                message:contactUsMessage
            }

    
            addContactUsData(obj);
      


        
        
    }
     function addContactUsData(obj){
        // const response= await fetch('https://spwf-8a8c4-default-rtdb.firebaseio.com/contact.json',{
        //     method: 'POST',
        //     body:JSON.stringify(obj),
        //     headers:{
        //         'Content-Type': 'application/json'
        //     }
        // });
        // const data= await response.json();
        // console.log(data);
        axios.post('https://spwf.herokuapp.com/createContactUs',obj);

        nameSetHandler('');
        phoneSetHandler('');
        emailSetHandler('');
        subjectSetHandler('');
        messageSetHandler('');

    }
    return(
        <form onSubmit={onContactUsSubmitHandler} style={{marginLeft:"0px"}}>
            <div className={style.ContactUsForm}>
                <div className={style.row1}>
                    <input type="text" placeholder="Enter Name" onChange={nameHandler} value={contactUsName} />
                    <input type="email" placeholder="Enter Email" onChange={emailHandler} value={contactUsEmail}/>
                </div>
                <div className={style.row2}>
                    <input type="text" placeholder="Enter Phone" onChange={phoneHandler} value={contactUsPhone}/>
                    <input type="text" placeholder="Enter Subject" onChange={subjectHandler} value={contactUsSubject}/>
                </div>
                <textarea name="contactUsMessage" cols={40} rows={10} placeholder="Enter Message" onChange={messageHandler} value={contactUsMessage} />
                <button type="submit" style={{borderRadius:"20px",width:"30%",fontSize:"130%"}}>Submit</button>
            </div>

        </form>  
    )
}
export default ContactUsRight;