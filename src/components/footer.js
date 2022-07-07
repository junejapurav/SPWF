import { Fragment } from "react"
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
                    <h3>Contact Us</h3>
                    <div id="headerPhone"><i className="fa-solid fa-phone-flip"></i> +23456789345</div>
                    <div id="headerMail"><i className="fa-solid fa-envelope"></i> erghjlkjghjkn</div>
                    <div id="headerLoc"><i className="fa-solid fa-location-dot"></i> Uttam Nagar,New delhi</div>
                    
                </div>
               
                <div className="social-media-footer">
                    <h3>Social Media</h3>
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
                    <button>About Us</button>
                    <button>Contact Us</button>
                    <button>Events</button>
                    <button>Volunteer</button>
                    <button>Donation</button>
                    </div>
                    
                </div>

            </div>
            <div className="lowerfooter">

            </div>
        </footer>
    )
}
export default Footer;