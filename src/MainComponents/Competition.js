import Footer from "../components/footer";
import Header from "../components/header";
import Slider from "../components/slider";
import './competition.css'

function Competition(){
    return(
        <div className="competition">
            <Header/>
            <Slider/>
            <h1 className="competitionheading">JOIN US IN OUR UPCOMING COMPETITIONS</h1>
            <div>
                <img></img>
                <img></img>
            </div>
            <h2 className="competitionheading">Online Painting Competition '22</h2>
            <div className="compdesc">
                <div className="compdescleft">
                    <div>
                        <h3>Categories</h3>
                        <ul>
                            <li>Group A Painting Theme: MY FAVORITE CHRISTMAS GIFT (Kindergarten - Below 1st Grade/Class)</li>
                            <li>Group B Theme: YOUR SANTA CLAUS (Grade/Class 1st & 2nd )</li>
                            <li>Group C Theme: CHRISTMAS DECORATION AT YOUR PLACE (Grade/Class 3rd, 4th & 5th)</li>
                            <li>Group D Theme: CHRISTMAS THEME (Grade/Class 6th to 8th)</li>
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
                    <img></img>
                    <div>
                        <h3>How to Participate:</h3>
                        <ul>
                            <li>Step 1: Complete your painting on relevant topic</li>
                            <li>Step 2: Click 2 clear photographs, one of your painting and another one of your child holding the painting in his/her hand</li>
                            <li>Step 3: Register on the link given below to pay the Fee and Upload your photographs.</li>
                        </ul>
                        <h3>FEE- Rs. 100</h3>
                        <p>To Register for the competition click Below</p>
                        <a href="https://forms.gle/TnUGfRs6rzoV37PF8"><button>Register</button></a>
                    </div>
                </div>
            </div>
            <div className="compimpnote">
                <p>Dear Students,</p>
                <p>the results of Online Painting Competition '22 will be announced on 31 December,2022.</p>
                <p>If you don't see your name in the list, don't be disappointed, work harder next time, and To us all of you are Winners! </p>
                <br></br>
                <p>We Thank all Students, Parents, Teachers and School Authorities for Extending their Unconditional Support to the</p>
                <p>Online Painting Competition '22 making it a Success!</p>
            </div>
            <Footer></Footer>
        </div>
    )
}

export default Competition;