import AboutUsImage from '../components/AboutUsImage'
import Header from '../components/header';
import Footer from '../components/footer';
import ContactUsBox from '../components/contactUsBox';
import aboutUsImage from '../img/IMG-20200118-WA0022.jpg'
import Whatsapp from "../components/Whatsapp";

const ContactUsPage = ()=>{
    return(
        <div className="ContactUsPage">
            <Header />
            <AboutUsImage heading="CONTACT US" image={aboutUsImage}/>
            <br/>
            <br/>
            <ContactUsBox/>
            <Whatsapp/>
            <Footer/>
        </div>

    )
}
export default ContactUsPage;