import  './header.css';
import { useState } from "react";
import logo from '../img/spwflogo2.png';
import { Fragment } from 'react';
import {Link} from 'react-router-dom'

// document.getElementsByClassName('dropbtn')[0].innerHTML = 'Events<i class="fa-solid fa-sort-down"></i>';
// document.getElementsByClassName('dropbtn')[0]

var count = 0;

function slide(){
    document.getElementsByClassName('slidemenu')[0].style.top = "0px";
    document.getElementsByTagName('body').style.position = "fixed";
}
function slideup(){
    document.getElementsByClassName('slidemenu')[0].style.top = "-500px";

}
function slideright(){
    document.getElementsByClassName('slidemenu2')[0].style.left = "100%";
}
function sliderleft(){
    document.getElementsByClassName('slidemenu2')[0].style.left = "40%";
}


function mainmenuslide(){
    if(count%2==1){
        document.getElementsByClassName('slidemenu')[0].style.height = "auto";
        document.getElementsByClassName('slidedowncont')[0].style.display = "flex";
    }else{
        document.getElementsByClassName('slidedowncont')[0].style.display = "none";
    }
}
function counter(){
    count++;
    mainmenuslide();
    document.getElementById('toggle').toggleClass('fa-sort-down fa-caret-up');
}

const Header = ()=>{
    function run(){
        if(isHovering){
            document.getElementsByClassName('dropbtn')[0].innerHTML = 'Events<i class="fa-solid fa-sort-down"></i>';
        }else{
            document.getElementsByClassName('dropbtn')[0].innerHTML = 'Events<i class="fa-solid fa-caret-up"></i>';
        }
    }


    const [isHovering, setIsHovering] = useState(false);

    const handleMouseEnter = () => {
    setIsHovering(true);
    run();
    };

    const handleMouseLeave = () => {
    setIsHovering(false);
    run();
    };

    return (
        <Fragment>
            <header>
        <div className="headerLeft">
        <div id="headerPhone"><i className="fa-solid fa-phone-flip"></i> <a href="tel:885-175-5256">123-456-7890</a></div>
        <div id="headerMail"><i className="fa-solid fa-envelope"></i> <a href="mailto:spwf.ngo@gmail.com">spwf.ngo@gmail.com</a></div>
        <div id="headerLoc"><i className="fa-solid fa-location-dot"></i> Uttam Nagar,New delhi</div>
        </div>
        <div className="headerRight">
        <i className="fa-brands fa-instagram"></i>
        <i className="fa-brands fa-facebook"></i>
        <i className="fa-brands fa-twitter"></i>
        <i className="fa-brands fa-google"></i>
        </div>
        <div className="topmenu">
        <i class="fa-solid fa-bars" onClick={sliderleft}></i>
        <h2>TOP MENU</h2>
        <div className='slidemenu2'>
            <i class="fa-solid fa-xmark" onClick={slideright}></i>
            <br/>
            <button>Donate Now</button>
            <br/>
            <br/>
            <br/>
            <div className='topmenucontact'>
            <div id="headerPhone"><i className="fa-solid fa-phone-flip"></i> <a href="tel:885-175-5256">123-456-7890</a></div>
            <br/>
            <div id="headerMail"><i className="fa-solid fa-envelope"></i> <a href="mailto:spwf.ngo@gmail.com">spwf.ngo@gmail.com</a></div>
            <br/>
            <div id="headerLoc"><i className="fa-solid fa-location-dot"></i> Uttam Nagar,New delhi</div>
            </div>
            <br/>
            <br/>
            <br/>
            <div className='topmenusocialicons'>
                <i className="fa-brands fa-instagram"></i>
                <i className="fa-brands fa-facebook"></i>
                <i className="fa-brands fa-twitter"></i>
                <i className="fa-brands fa-google"></i>
            </div>
            <br/>
            <br/>
            <div className='categories'>
                <h4>Categories</h4>
                <a>Donation</a>
                <a>Volunteer</a>
            </div>
        </div>
        </div>
            </header>
            <nav>
        <div className="navLeft">
           <img src={logo} className="navbarLogo" alt="no img"/>
           </div>
        <div className="navRight">
        <Link to={'/'}><a>Home</a></Link>
        <Link to={'/aboutUs'}><a>About us</a></Link>
        <Link to={'/aboutUs'}><a>What We Do</a></Link>
        <div class="dropdown">
        <a class="dropbtn" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>Events<i class="fa-solid fa-sort-down"></i></a>
        <div class="dropdown-content" >
        <Link to={'/aboutUs'}><a href="#">Shiksharth</a></Link>
        <Link to={'/aboutUs'}><a href="#">Kaushal Uthan</a></Link>
        <Link to={'/aboutUs'}><a href="#">other</a></Link>
        </div>
        </div>
        <Link to={'/contactUs'}><a>Contact Us</a></Link>
        <button><Link to={'/donation'}>Donate Now</Link></button>
        </div>
        <div className="mainmenu">
        <i class="fa-solid fa-bars" onClick={slide}></i>
        <h2>MENU</h2>
        <div className='slidemenu'>
            <i class="fa-solid fa-xmark" onClick={slideup}></i>
            <div className='slidemenucontent'>
                <Link to={'/'}><a>Home</a></Link>
                <Link to={'/aboutUs'}><a>About us</a></Link>
                <Link to={'/aboutUs'}><a>What We Do</a></Link>
                <a className='slidemenuevents' onClick={counter}>Events<i class="fa-solid fa-sort-down" id='toggle'></i></a>
                    <div class="slidedowncont" >
                    <Link to={'/aboutUs'}><a href="#">Shiksharth</a></Link>
                    <Link to={'/aboutUs'}><a href="#">Kaushal Uthan</a></Link>
                    <Link to={'/aboutUs'}><a href="#">other</a></Link>
                    </div>
                <Link to={'/contactUs'}><a>Contact Us</a></Link>
                <button><Link to={'/donation'}>Donate Now</Link></button>
            </div> 
        </div>
        </div>
            </nav>
        </Fragment>
    );
}
export default Header;