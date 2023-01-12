import Volunteershower from "./volunteershower"
import pic16 from "../images/Picture16.jpeg"
import pic17 from "../images/Picture17.jpeg"
import pic18 from "../images/Picture18 (2).jpeg"
import pic19 from "../images/Picture19.jpeg"
import pic20 from "../images/Picture20.jpeg"
import pic21 from "../images/Picture35.jpeg"


const Volunteerlist = ()=>{
    const voldesc = [
        {
            imgsrc: pic20,
            position: "President/Founder",
            name: "Mrs. Ratna",
            desc: "Profession: Social Worker, Youtuber and Singer",
            area: "Qualification: M.A. (Psycology)",
            location: "Location: Delhi"
        },
        {
            imgsrc: pic16,
            position: "Trustee",
            name: "Ms. Shraddha Suman",
            desc: "Qualification: Graduated (BBA)",
            area: "Area: Teaching/Management",
            location: "Location: Delhi"
        }
    ]

    const voldesc2 = [
        {
            imgsrc: pic19,
            position: "Volunteer",
            name: "Er. Anil Verma",
            desc: `Profession: Retired Deputy Manager`,
            area: "Area: Education/Activity",
            location: "Location: Delhi"
        },
        {
            imgsrc: pic17,
            position: "Volunteer",
            name: "Ms. Rashi Verma",
            desc: "Qualification: Bachelor's in Fine arts",
            area: "Area: Fine arts/Management",
            location: "Location: Delhi"
        },
        {
            imgsrc: pic18,
            position: "Volunteer",
            name: "Mr. Purav Juneja",
            desc: "Qualification: BTECH student",
            area: "Area: Website Design",
            location: "Location: Delhi"
        },
        {
            imgsrc: pic21,
            position: "Volunteer",
            name: "Mr. Saksham Nagar",
            desc: "Qualification: BA Political Science Hons",
            area: "Area: Content Writing",
            location: "Location: Varanasi"
        }
    ]
    return (
        <div className="volunteerlist">
            <div className="Directorrow">
                {voldesc.map((each)=><Volunteershower event={each}/>)}
            </div>
            <div className="volrow">
                {voldesc2.map((each)=><Volunteershower event={each}/>)}
            </div>
        </div>
    )
}

export default Volunteerlist