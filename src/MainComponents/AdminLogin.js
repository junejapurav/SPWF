import { useState } from "react"
import styles from './login.module.css'
import Admin from "../components/Admin/admin";
import {useNavigate} from 'react-router-dom';

import ShowContactUsDataMain from '../components/Admin/ShowContactUsDataMain'
import LoadingSpinner from "../UI/Loading";
import Header from "../components/header";
import Footer from "../components/footer";

function AdminLogin(){
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isLoggedIn, setLogin] = useState(false);
    const [usernameCheck,falseUsername] = useState(null);
    const [passwordCheck,falsePassword] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);


    const usernameHandler = (event)=>{
        falseUsername(null);
        falsePassword(null);
        setUsername(event.target.value);
    }
    const passwordHandler = (event)=>{
        falseUsername(null);
        falsePassword(null);
        setPassword(event.target.value);
    }

    // async function dummy(obj){

    //     const response= await fetch('https://spwf-8a8c4-default-rtdb.firebaseio.com/login.json',{
    //         method: 'POST',
    //         body:JSON.stringify(obj),
    //         headers:{
    //             'Content-Type': 'application/json'
    //         }
    //     });
    //     const data= await response.json();
    // }
    async function LoginSubmitHandler (event){
        event.preventDefault();
        setIsLoading(true);
        setError(null);
        // const obj = {
        //     username: username,
        //     password:password
        // }
        // dummy(obj);
        try{
            const response = await fetch("/getUser");
            // const response= await fetch('https://spwf-8a8c4-default-rtdb.firebaseio.com/login.json');
            if(!response.ok){
                throw new Error('Something Went Wrong!');
            }
        const data= await response.json();

        for(let key in data){
            if(data[key].username === username){
                if(data[key].password === password){
                    setLogin(true);    
                }
                else{
                    
                    falsePassword(true);
                    setPassword('');
                }
            }
            else{
                falseUsername(true);
                setUsername('');
                setPassword('');
            }
        }
        }
        catch{
            setError(error.message)
        }
        
        setIsLoading(false);
        
        
    }
    
     
    return(
        <div className={styles.main}>
            <Header/>
            {!isLoggedIn && <form onSubmit={LoginSubmitHandler}>
                <input type="text" placeholder="Username" onChange={usernameHandler} className={usernameCheck && styles.error} value={username}/>
                <input type="text" placeholder="password" onChange={passwordHandler} className={passwordCheck && styles.error} value={password}/>
                <button type="submit" >Login</button>
            </form> }
            {isLoading && <LoadingSpinner/>}
            {error && <p>Error</p>}
             {isLoggedIn && <Admin checkLogin={isLoggedIn}/>}
             {/* <Footer/> */}
        </div>
    )
}
export default AdminLogin;