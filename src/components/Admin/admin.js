import { useState } from "react";
import ShowContactUsData from './ShowContactUsData'
import styles from './admin.module.css'
import { useNavigate } from "react-router-dom";

const Admin = (props)=>{
      
  let navigate = useNavigate(); 
  const routeChange = (path) =>{
    navigate(path);
  }


    function showContactUsDataHandler(){
        routeChange('contact-us-data');
    }
    function showVolunteerDataHandler(){
        routeChange('volunteer-data');
    }
    function showDonationData(){
        routeChange('donation-data');
    }
 
    return(
       
        <div>
            {props.checkLogin && <div className={styles.main}>
                <h1>Welcome to the Admin Panel</h1>
                <h3>Which data do you want to access?</h3>
                <p onClick={showContactUsDataHandler}>Show contact us data</p>
                <p onClick={showVolunteerDataHandler}>Show Volunteer Applicants Data</p>
                <p onClick={showDonationData}>Show Donation Data</p>

            </div>}
            {!props.checkLogin && <p>Unauthorized Access</p>}
        </div>
    )
}
export default Admin;