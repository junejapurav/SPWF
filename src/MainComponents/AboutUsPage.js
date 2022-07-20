import Header from "../components/header";
import Footer from "../components/footer";
import AboutUsDescription from '../components/AboutUsDescription'
import AboutUsGetInvloved from '../components/AboutUsGetInvolved'
import AboutUsImage from '../components/AboutUsImage'
import Aimbox from "../components/Aimbox";
import Goalbox from "../components/Goalbox";
import ContactUsRight from "../components/ContactUsRight";


function AboutUsPage(){
    return(
        <div>
            <Header/>
            <AboutUsImage heading="ABOUT US"/>
            <br/>
            <br/>
            <br/>
            <br/>
            <AboutUsDescription />
            <br/>
            <br/>
            <Aimbox />
            <br/>
            
            <Goalbox/>
            <br/>
            <br/>
            <AboutUsGetInvloved />
            <Footer/>
            <ContactUsRight/>
        </div>
    )
}
export default AboutUsPage;