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
            position: "President/Founder",
            name: "Ratna",
            desc: "Active Social Worker/Youtuber/Singer",
            area: ""
        },
        {
            imgsrc: pic16,
            position: "Trustee",
            name: "Shraddha Suman",
            desc: "Graduated (BBA)",
            area: "Area: Teaching/Management"
        }
    ]

    const voldesc2 = [
        {
            imgsrc: pic19,
            position: "Volunteer",
            name: "Anil Verma",
            desc: `Retired Deputy Manager`,
            area: "Area: Education/Activity"
        },
        {
            imgsrc: pic17,
            position: "Volunteer",
            name: "Rashi",
            desc: "Bachelor's in Fine arts",
            area: "Area: Fine arts/Management"
        },
        {
            imgsrc: pic18,
            position: "Volunteer",
            name: "Purav Juneja",
            desc: "Software Engineering student",
            area: "Area: Website Design"
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