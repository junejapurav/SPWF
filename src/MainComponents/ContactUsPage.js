import AboutUsImage from '../components/AboutUsImage'
import ContactUsRight from '../components/ContactUsRight';
import Header from '../components/header';
import Footer from '../components/footer';

const ContactUsPage = ()=>{
    return(
        <div className="ContactUsPage">
            <Header />
            <AboutUsImage heading="Contact Us"/>

            <ContactUsRight />

            <Footer/>
        </div>

    )
}
export default ContactUsPage;