import { useState } from 'react'
import style from './ContactUsForm.module.css'

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
        emailSetHandler(event.target.value)
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

    function onContactUsSubmitHandler(){
        const obj={
            name:contactUsName,
            email:contactUsEmail,
            phone:contactUsPhone,
            subject:contactUsSubject,
            message:contactUsMessage
        }
        console.log(obj);
    }
    return(
        <form onSubmit={onContactUsSubmitHandler}>
            <div className={style.ContactUsForm}>
            <input type="text" placeholder="Enter Name" onChange={nameHandler}/>
            <input type="text" placeholder="Enter Email" onChange={emailHandler}/>
            <input type="text" placeholder="Enter Phone" onChange={phoneHandler}/>
            <input type="text" placeholder="Enter Subject" onChange={subjectHandler}/>
            <textarea name="contactUsMessage" cols={40} rows={10} placeholder="Enter Message" onChange={messageHandler} />
            <button type="submit" style={{borderRadius:"20px",width:"30%"}}>Submit</button>
            </div>

        </form> 
    )
}
export default ContactUsRight;