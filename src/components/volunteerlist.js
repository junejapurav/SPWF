import Volunteershower from "./volunteershower"
import pic16 from "../images/Picture16.jpeg"
import pic17 from "../images/Picture17.jpeg"
import pic18 from "../images/Picture18 (2).jpeg"
import pic19 from "../images/Picture19.jpeg"
import pic20 from "../images/Picture20.jpeg"


const Volunteerlist = ()=>{
    const voldesc = [
        {
            imgsrc: pic20,
            position: "Director",
            name: "Ratna",
            desc: "I am an active Social Worker, a Youtuber/Singer by Profession. "
        },
        {
            imgsrc: pic16,
            position: "Manager",
            name: "Shraddha Suman",
            desc: "Graduated (BBA)"
        },
        {
            imgsrc: pic19,
            position: "Consultant",
            name: "Anil Verma",
            desc: "Service: 38 years (IPGCL) Pragati Power Station"
        },
        {
            imgsrc: pic17,
            position: "Volunteer",
            name: "Rashi",
            desc: "Bachelor's in Fine arts with Painting from College of Art, Delhi University."
        },
        {
            imgsrc: pic18,
            position: "Volunteer",
            name: "Purav Juneja",
            desc: "A Software Engineering student at GGSIPU"
        }
    ]
    return (
        <div className="volunteerlist">
            {voldesc.map((each)=><Volunteershower event={each}/>)}
        </div>
    )
}

export default Volunteerlist