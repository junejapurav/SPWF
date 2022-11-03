import Header from "../components/header";
import Slider from "../components/slider";
import GetInvolved from "../components/getInvolved";
import Counter from "../components/counter";
import Fundraising from "../components/fundraising";
import RecentEvents from "../components/RecentEvents";
import Footer from "../components/footer";
import { Waypoint } from "react-waypoint";
import AboutUsGetInvolved from "../components/AboutUsGetInvolved";
import Feedback from "../components/feedback";
import Dailyupdate from "../components/dailyupdates";
function HomePage (){

    return(
        <div>
        <Header/>
        <Slider/>
        <Dailyupdate/>
        <GetInvolved/>
        <br/>
        <br/>
        
        <Counter/>
        <Fundraising/>
        <RecentEvents/>
        <br/>
        <br/>
        <AboutUsGetInvolved/>
        <Feedback/>
        <Footer/> 
        </div>
    )
}
export default HomePage;