import { useState } from 'react'
import style from './ContactUsForm.module.css'

const ContactUsRight = ()=>{
    const [contactUsName,nameSetHandler]= useState('');
    const [contactUsEmail,emailSetHandler]= useState('');
    const [contactUsPhone,phoneSetHandler]= useState('');
    const [contactUsSubject,subjectSetHandler]= useState('');
    const [contactUsMessage,messageSetHandler]= useState('');
    const [emailIsValid,emailValidator] = useState(null);

    const nameHandler=(event)=>{
        nameSetHandler(event.target.value)
    }
    const emailHandler=(event)=>{
        if(event.target.value.includes('@')){
            emailSetHandler(event.target.value);
            
        }
        
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
        // console.log(obj);

        addContactUsData(obj);
    }
    async function addContactUsData(obj){
        // const response= await fetch('https://console.firebase.google.com/project/spwf-8a8c4/firestore/data/~2Fcontactus~2Fq9NbrnmC9gs9x6MDGtvx/data.json',{
        //     method: 'POST',
        //     body:JSON.stringify(obj),
        //     headers:{
        //         'Content-Type': 'application/json'
        //     }
        // });
        // const data= await response.json();
        // console.log(data);
    }
    return(
        <form onSubmit={onContactUsSubmitHandler}>
            <div className={style.ContactUsForm}>
                <div className={style.row1}>
                    <input type="text" placeholder="Enter Name" onChange={nameHandler}/>
                    <input type="text" placeholder="Enter Email" onChange={emailHandler}/>
                </div>
                <div className={style.row2}>
                    <input type="text" placeholder="Enter Phone" onChange={phoneHandler}/>
                    <input type="text" placeholder="Enter Subject" onChange={subjectHandler}/>
                </div>
                <textarea name="contactUsMessage" cols={40} rows={10} placeholder="Enter Message" onChange={messageHandler} />
                <button type="submit" style={{borderRadius:"20px",width:"30%",fontSize:"130%"}}>Submit</button>
            </div>

        </form> 
    )
}
export default ContactUsRight;