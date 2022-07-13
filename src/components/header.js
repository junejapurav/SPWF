import { Fragment } from "react";
import  './header.css';
import logo from '../img/spwflogo2.png';

const Header = ()=>{
    return (
        <Fragment>
            <header>
        <div className="headerLeft">
        <div id="headerPhone"><i className="fa-solid fa-phone-flip"></i> +23456789345</div>
        <div id="headerMail"><i className="fa-solid fa-envelope"></i> erghjlkjghjkn</div>
        <div id="headerLoc"><i className="fa-solid fa-location-dot"></i> Uttam Nagar,New delhi</div>
        </div>
        <div className="headerRight">
        <i className="fa-brands fa-instagram"></i>
        <i className="fa-brands fa-facebook"></i>
        <i className="fa-brands fa-twitter"></i>
        <i className="fa-brands fa-google"></i>
        </div>
        <div className="topmenu">
            
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
    </nav>
        </Fragment>

    );
}
export default Header;