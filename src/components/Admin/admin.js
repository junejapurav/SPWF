import { useState } from "react";
import ShowContactUsData from './ShowContactUsData'

const Admin = ()=>{

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
 
    return(
        <div>
            <button onClick={getData}>Get data</button>
            {loadedData.map((data)=><ShowContactUsData name= {data.name} phone={data.phone} email={data.email} subject={data.subject} message={data.message} />
        )}
            
        </div>
    )
}
export default Admin;