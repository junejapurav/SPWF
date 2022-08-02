import { useState } from 'react'
import style from './ContactUsForm.module.css'
import axios from 'axios';

const ContactUsRight = ()=>{
    const [contactUsName,nameSetHandler]= useState('');
    const [contactUsEmail,emailSetHandler]= useState('');
    const [contactUsPhone,phoneSetHandler]= useState('');
    const [contactUsSubject,subjectSetHandler]= useState('');
    const [contactUsMessage,messageSetHandler]= useState('');
    const [isValid,formValidator] =useState(true);
   

    const nameHandler=(event)=>{
        formValidator(true);
        nameSetHandler(event.target.value)
    }
    const emailHandler=(event)=>{
        formValidator(true);
        emailSetHandler(event.target.value);
    }
    const phoneHandler=(event)=>{
        formValidator(true);
        phoneSetHandler(event.target.value)
    }
    const subjectHandler=(event)=>{
        formValidator(true);
        subjectSetHandler(event.target.value)
    }
    const messageHandler=(event)=>{
        formValidator(true);
        messageSetHandler(event.target.value)
    }

    function onContactUsSubmitHandler(event){
        event.preventDefault();
        
        if(contactUsName.trim().length==0 || contactUsEmail.trim().length==0 || contactUsPhone.trim().length==0 || contactUsSubject.trim().length==0 ||contactUsMessage.trim().length==0){
            formValidator(false);
            return;
        }
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
            { !isValid && <div style={{backgroundColor:"rgb(248, 126, 126)",textAlign:"center",width:"35%",marginTop:"5%",marginLeft:"30%"}}>
                Please enter Valid Details
            </div>} 
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