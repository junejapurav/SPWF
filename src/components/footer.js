import { Fragment, useEffect } from "react"
import { Link } from "react-router-dom"
import logo from '../images/spwf logo2.png'

import axios from 'axios'
import './footer.css'
const Footer  = () =>{
   

    return (
        <footer> 
            <div className="upperFooter">
                <div className="about-footer">
                    <h2>About Us</h2>
                    <p>
                    Shakuntala Poddar Welfare Foundation (SPWF) is a non-governmental organisation, working towards child upliftment and women empowerment. It provides quality education and nutrition to underprivileged children and generates employment for women.
                    </p>
                </div>
                <div className="contactinfo-footer">
                    <h2>Contact Us</h2>
                    <div id="headerPhone hi"><i className="fa-solid fa-phone-flip"> <a href="tel:885-175-5256"></a></i> 885-175-5256</div>
                    <div id="headerMail hi"><i className="fa-solid fa-envelope"></i> <a href="mailto:spwf.ngo@gmail.com" style={{color:"#656565",textDecoration:"none"}}>spwf.ngo@gmail.com</a></div>
                    <div id="headerLoc hi"><i className="fa-solid fa-location-dot"></i> Uttam Nagar,New delhi</div>
                    
                </div>
               
                <div className="social-media-footer">
                    <h2>Social Media</h2>
                    <div className="socialMedia-footer">
                        <a href="https://www.instagram.com/shakuntalapoddar_ngo/"><i className="fa-brands fa-instagram"></i></a>
                        <a href="https://www.facebook.com/shakuntalapoddarngo"><i className="fa-brands fa-facebook"></i></a>
                       <a href="https://twitter.com/shakuntalango"> <i className="fa-brands fa-twitter"></i></a>
                       <a href="https://www.linkedin.com/company/shakuntala-poddar-welfare-foundation/"><i className="fa-brands fa-linkedin"></i></a> 
                    </div>
                </div>
                <div className="tags-footer">
                    <h2>Useful Links</h2>
                    <div>

                    {/* <Link to={'/aboutUs'}></Link> */}
                    <Link to={'/aboutUs'}><button className="footerButtons">About Us</button></Link>
                    <Link to={'/contactUs'}><button className="footerButtons">Contact Us</button></Link>
                  
                    <Link to={'/volunteer'}><button className="footerButtons">Volunteer</button></Link>
                    <Link to={'/donation'}><button className="footerButtons">Donation</button></Link>
                    <Link to={'/login'}><button className="footerButtons">Admin Login</button></Link>

                    </div>
                    
                </div>
                
            </div>
            <div className="lowerFooter">
            <div className="lfcol1">
            <div className="lfooterrow1">
                    <a class="button" href="#popup1">Privacy Policy</a>
                    <div id="popup1" class="overlay">
	                <div class="popup">
		                    <h2>Privacy Policy</h2>
		                    <a class="close" href="#">&times;</a>
		                    <div class="content">
			                <p>We at shakuntala poddar welfare foundation respect the information that is provided to us and ensure that the information does not go in wrong hands. Also, it is necessary for the person to provide correct verification source to be a volunteer or to provide donation</p>
		                    </div>
	                    </div>
                    </div>
                    <p>|</p>
                    <a class="button" href="#popup2">Terms & Condition</a>
                    <div id="popup2" class="overlay">
	                <div class="popup">
		                    <h2>Terms & Condition</h2>
		                    <a class="close" href="#">&times;</a>
		                    <div class="content">
			                <p>We at shakuntala poddar welfare foundation work for the welfare of underprivileged people and children. We make sure that they a a proper meal and ensure there skill development.<br/> How do we collect information-Basically we have three mediums of collecting information Donation form :<br/> People donating any amount need to fill like their names, address, phone number, Pan number Contact form : People can leave their message through this portal Volunteer form : People wishing to volunteer for our NGO can fill this form  including details like name, qualification, area of interest, address, Phone number</p>
		                    </div>
	                    </div>
                    </div>
                </div>
                <div className="lfooterrow2">
                    <p>Copyright © 2022 Shakuntala poddar welfare foundation.</p>
            </div>
            </div>
            <div className="lfcol2">
                <Link to='/'><img className="footerlogo" src={logo}/></Link>
            </div>
            </div>
        </footer>
    )
}
export default Footer;