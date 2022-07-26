import AboutUsImage from '../components/AboutUsImage'
import Header from '../components/header';
import Footer from '../components/footer';
import ContactUsBox from '../components/contactUsBox';
import Shiksharth from '../components/shiksharth';

const ContactUsPage = ()=>{
    return(
        <div className="ContactUsPage">
            <Header />
            <AboutUsImage heading="CONTACT US"/>
            <ContactUsBox/>
            <Footer/>
        </div>

    )
}
export default ContactUsPage;