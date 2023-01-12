import Pic1 from '../img/shiksharth.jpg';
import Pic5 from '../images/Picture5.jpg';
import Pic4 from '../images/Picture4.png';
import Pic2 from '../images/Picture2.jpg';
import Pic3 from '../images/Picture47.jpeg';
import './EventLeft.css';
function EventLeft(props){
    const Events= [
        {
            img:Pic5,
            name:"Kaushal Uthan",
            description:"Skill development is very important to polish the skills of a common man. Today there is no shortage of jobs in our country but there is a shortage of skilled people to give those jobs. The Government of India is running many schemes for the skill development of the citizens, due to which many skilled people are also coming out. In many cases it happens that a common child who has some skillful talent hidden inside but he cannot come out without any guidance. Our program Kaushal Utthan provides this guidance to the children. Skill development activities are part of our regular curriculum for children. We also organize a grand program every year in which children are encouraged to bring out their hidden talents. The objective of this program is to provide training opportunities to rural women. We have conducted sessions on handicraft making and pottery design. It fostered creativity and a sense of freedom in them."
        },
        {
            img:Pic4,
            name:"Chikitsa",
            description:"Just as skill development and one-time diet are necessary for a common man, similarly good health facilities are also necessary. Today there are many underprivileged people in our country who do not have access to essential health facilities. Today, in the time of pandemic, where lakhs of people have lost their relatives, it becomes even more important that we provide health facilities to the needy. Our program chikitsa meets this need.In July 2019, the organization had treated 25 adults and 40 children free of cost along with some medical staff in the slums of Dwarka and they were also provided with free medicines."
            
        },
        {
            img:Pic2,
            name:"Aahar",
            description:`"Aahar" may be a small word, but the meaning it bears is worth more than four times the word itself.
            Just as a person cannot live without water or air, 'Aahar' or food is equally important for a human being
            to survive. Proper food and diet is an absolute necessity especially for the children because they are the
            foundation for a golden future of our country. However, in our society there is a certain section of the
            children who do not even get this "Aahar" at one time of the day. Our aim under Aahar is to provide
            nutritious and safe food to children. Many children crave one meal in today's era, so the organization
            takes special care that children get one meal at the time of school. We distributed relief material among
            the poor and helpless during the corona pandemic. The relief material included wheat, flour, pulses, rice,
            spices and other materials.`
        },
        {
            img:Pic1,
            name:"Shiksharth",
            description:"The Shakuntala Poddar Welfare Foundation's Shiksharth programme aims to teach underprivileged children who have been denied access to education or have missed school due to unforeseen circumstances. Shiksharth's main goal is to provide students with high-quality education by using approaches that are tailored to each child's needs. Students who are already enrolled in higher secondary schools but lacked a solid foundation from the start are provided suitable resources and tuition. We strive to reintegrate children who have had to leave school for a variety of reasons by offering instructional facilities and aid with school enrollment. Apart from child-centered interventions, we also hope to raise awareness among parents about the value of education and to persuade them to pay attention to their children's growth and good schooling so that they can realise their dreams.  Our project's core concept is education. Our main goal is to provide high-quality education to children who are disadvantaged.This includes putting in place a solid infrastructure to assure their overall development, which is critical to their health, character, and abilities.",
        }
    ]
    function fetchEvent(){
        for(let i in Events){
            if(Events[i].name==props.current){
                return Events[i];
            }
        }
    }
    function shikgraph(){
        if(props.current=="Shiksharth"){
            return <img src={Pic3} className='shikgraph'></img>
        }
    }
    return(       
            <div className="shikleft">
                <h1>{fetchEvent().name}</h1>
                <img src={fetchEvent().img}></img>
                <br/>
                <p>{fetchEvent().description}</p>
                {shikgraph()}
            </div>

    )
}

export default EventLeft;