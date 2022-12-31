import Footer from "../components/footer";
import Header from "../components/header";
import Slider from "../components/slider";
import pic1 from '../images/Picture32.png'
import pic2 from '../images/Picture33.png'
import './competition.css'
import Whatsapp from "../components/Whatsapp";


function Competition(){
    return(
        <div className="competition">
            <Header/>
            <Slider/>
            <h1 className="competitionheading">JOIN US IN OUR UPCOMING COMPETITIONS</h1>
            <div className="compimages">
                <img src={pic2}></img>
                <img src={pic1}></img>
            </div>
            <h2 className="competitionheading">Online Painting Competition</h2>
            <div className="compregister">
            <a href="https://forms.gle/TnUGfRs6rzoV37PF8"><button>Register</button></a>
            </div>
            <div className="compdesc">
                <div className="compdescleft">
                    <div>
                        <h3>Categories</h3>
                        <ul>
                            <li>Group A Painting Theme: MY DREAM INDIA (Kindergarten - Below 1st Grade/Class)</li>
                            <li>Group B Theme: CLEAN INDIA GREEN INDIA (Grade/Class 1st & 2nd )</li>
                            <li>Group C Theme: SWACHH BHARAT (Grade/Class 3rd, 4th & 5th)</li>
                            <li>Group D Theme: MAKE IN INDIA (Grade/Class 6th to 8th)</li>
                            <li>Group E Theme: EK BHARAT SHRESHTHA BHARAT (Grade/Class 9th - 10th)</li>
                        </ul>
                        <br></br>
                        <h3>Guidelines</h3>
                        <ul>
                            <li>Paper size: A3/Quarter Imperial (297mm X 420mm to 279mm X 420mm)</li>
                            <li>Materials to be used for Group A & B - Oil Pastels/Wax Crayons/Plastic Crayons</li>
                            <li>Materials to be used for Group C & D - Oil Pastels/Water Colour/Colour Pencils/Poster Colours</li>
                        </ul>
                    </div>
                </div>
                <div className="compdescright">
                    <div>
                        <h3>How to Participate:</h3>
                        <ul>
                            <li>Step 1: Complete your painting on relevant topic</li>
                            <li>Step 2: Click 2 clear photographs, one of your painting and another one of your child holding the painting in his/her hand</li>
                            <li>Step 3: Register on the link given below to pay the Fee and Upload your photographs.</li>
                        </ul>
                        <h3>FEE- Rs. 100</h3>
                        <p>Registrations are open till 26th January, 2023. To register for the competition click Below</p>
                    </div>
                </div>
            </div>
            <div className="compimpnote">
                <p>Dear Students,</p>
                <p>the results of Online Painting Competition will be announced on 10 February, 2023.</p>
                <p>If you don't see your name in the list, don't be disappointed, work harder next time, and To us all of you are Winners! </p>
                <br></br>
                <p>We Thank all Students, Parents, Teachers and School Authorities for Extending their Unconditional Support to the</p>
                <p>Online Painting Competition making it a Success!</p>
            </div>
            <Whatsapp/>
            <Footer></Footer>
        </div>
    )
}

export default Competition;