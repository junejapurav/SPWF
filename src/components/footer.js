import { Fragment } from "react"
import { Link } from "react-router-dom"
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
                    <div id="headerPhone hi"><i className="fa-solid fa-phone-flip"></i> +23456789345</div>
                    <div id="headerMail hi"><i className="fa-solid fa-envelope"></i> erghjlkjghjkn</div>
                    <div id="headerLoc hi"><i className="fa-solid fa-location-dot"></i> Uttam Nagar,New delhi</div>
                    
                </div>
               
                <div className="social-media-footer">
                    <h2>Social Media</h2>
                    <div className="socialMedia-footer">
                        <i className="fa-brands fa-instagram"></i>
                        <i className="fa-brands fa-facebook"></i>
                        <i className="fa-brands fa-twitter"></i>
                        <i className="fa-brands fa-google"></i>
                    </div>
                </div>
                <div className="tags-footer">
                    <h2>Useful Links</h2>
                    <div>

                    {/* <Link to={'/aboutUs'}></Link> */}
                    <Link to={'/aboutUs'}><button className="footerButtons">About Us</button></Link>
                    <Link to={'/contactUs'}><button className="footerButtons">Contact Us</button></Link>
                    <Link to={'/events'}><button className="footerButtons">Events</button></Link>
                    <Link to={'/volunteer'}><button className="footerButtons">Volunteer</button></Link>
                    <Link to={'/donation'}><button className="footerButtons">Donation</button></Link>
                    <Link to={'/login'}><button className="footerButtons">Admin Login</button></Link>

                    </div>
                    
                </div>

            </div>
            <div className="lowerfooter">

            </div>
        </footer>
    )
}
export default Footer;