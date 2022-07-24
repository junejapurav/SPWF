import { useState } from "react";
import ShowContactUsData from './ShowContactUsData'
import styles from './admin.module.css'
import { useNavigate } from "react-router-dom";

const Admin = (props)=>{

    const [loadedData,setLoadedData] = useState([]);

   async function getData(){
        const response = await fetch('https://spwf-8a8c4-default-rtdb.firebaseio.com/contact.json');
        const data= await response.json();
        const LoadContactUs= [];

    for(let key in data){
        LoadContactUs.push({
            id:key,
            name:data[key].name,
            phone:data[key].phone,
            email:data[key].email,
            subject:data[key].subject,
            message:data[key].message
        })
        setLoadedData(LoadContactUs);
        }
        console.log(loadedData)
        return loadedData;
    }
      
  let navigate = useNavigate(); 
  const routeChange = (path) =>{
    navigate(path);
  }


    function showContactUsDataHandler(){
        routeChange('contact-us-data')
    }
    function showVolunteerDataHandler(){
        routeChange('volunteer-data')
    }
 
    return(
        // <div>
        //     {props.checkLogin && <div><button onClick={getData}>Get data</button>
        //     {loadedData.map((data)=><ShowContactUsData name= {data.name} phone={data.phone} email={data.email} subject={data.subject} message={data.message} />
        // )}</div> }
        //    {!props.checkLogin && <p>Unauthorized Access</p>}
            
            
        // </div>
        <div>
            {props.checkLogin && <div className={styles.main}>
                <h1>Welcome to the Admin Panel</h1>
                <h3>Which data do you want to access?</h3>
                <p onClick={showContactUsDataHandler}>Show contact us data</p>
                <p onClick={showVolunteerDataHandler}>Show Volunteer Applicants Data</p>

            </div>}
            {!props.checkLogin && <p>Unauthorized Access</p>}
        </div>
    )
}
export default Admin;