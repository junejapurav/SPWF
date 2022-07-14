import { Fragment } from 'react';
import  './header.css';
import logo from '../img/spwflogo2.png';
import ImageSlider from './ImageSlider';
import { Fragment } from 'react';

const Header = ()=>{
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
        <i class="fa-solid fa-bars"></i>
        <h2>TOP MENU</h2>
        </div>
            </header>
            <nav>
        <div className="navLeft">
           <img src={logo} className="navbarLogo" alt="no img"/>
           </div>
        <div className="navRight">
        <a>Home</a>
        <a>About us</a>
        <a>What We Do</a>
        <a>events</a>
        <a>Contact Us</a>
        <button>Donate Now</button>
        </div>
        <div className="mainmenu">
        <i class="fa-solid fa-bars"></i>
        <h2>MENU</h2>
        </div>
            </nav>
        </Fragment>
    );
}
export default Header;