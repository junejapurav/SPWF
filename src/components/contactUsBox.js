import ContactUsRight from '../components/ContactUsRight';
import './contactUsBox.css';

function ContactUsBox(){
    return(
        <div className="ContactUsBox">
            <div className="ContactUsBoxLeft">
                <h4 id='orange'>Contact Us</h4>
                <h1>Feel Free To Contact & Reach Us!</h1>
                <p>Just send us your questions or concerns by filling out the form and we will give you the help you need.<br></br> Or contact us from below details for all general queries or donation related queries</p>
                <div className="contactAdress">
                    <i class="fa-solid fa-location-dot"></i>
                    <div className="desc">
                        <h4>Head Office Address:</h4>
                        <p>4671 Sugar Camp Road, Rock Street, San Francisco, United States America</p>
                    </div>
                </div>
                <div className="contactAdress">
                <i class="fa-solid fa-phone-volume"></i>
                    <div className='desc'>
                        <h4>Toll Free Number:</h4>
                        <p>4671 Sugar Camp Road, Rock Street, San Francisco, United States America</p>
                    </div>
                </div>
                <div className="contactAdress">
                <i class="fa-solid fa-envelope-open-text"></i>
                    <div className='desc'>
                        <h4>Email Address:</h4>
                        <p>4671 Sugar Camp Road, Rock Street, San Francisco, United States America</p>
                    </div>
                </div>
            </div>
            <div className="ContactUsBoxRight">
                <ContactUsRight/>
            </div>
        </div>
    )
}

export default ContactUsBox;