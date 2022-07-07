import counterPhoto from '../img/Picture2.jpg';
import './Counter.css';
const Counter= ()=>{

    return (
        <div className="counterBanner">
    <div className="bannerLeft">
      <img src={counterPhoto} alt=""/>
    </div>
    <div className="bannerRight">
      <h5>About Us</h5>
      <h1>Our Work Promise To Uphold The Trust Placed </h1>
      <p className="counterDesc">Our non-governmental organisation is working towards child upliftment and women empowerment. It provides quality education and nutrition to underprivileged children and generates employment for women.</p>
      <div className="counterExp">
        <ul>
          <li>creating an equitable society.</li>
          <li>uplifting the lives of underprivileged children</li>
          <li>empowering women</li>
          <li>providing quality education</li>
        </ul>
        <div className='yearExperience'><h2>4.5</h2>Years Of Experience</div>
      </div>
      <button>Learn More</button>
    </div>
  </div>
    )
}
export default Counter;
