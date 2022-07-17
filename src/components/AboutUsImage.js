import aboutUsImage from '../img/IMG-20200118-WA0022.jpg'
import './AboutUsImage.css'
function AboutUsImage(){

    return(
        <div className="AboutUsImage" style={{backgroundImage:`url(${aboutUsImage})`,backgroundSize: 'cover',backgroundRepeat:'no-repeat',textAlign:'center',height:'300px'}}>
            <h1 style={{color:'white',paddingTop:'100px',}}>ABOUT US</h1>
        </div>
    )
}
export default AboutUsImage;