import Carousel from 'react-bootstrap/Carousel';
import './slider.css';
import pic1 from '../images/Picture1.png';
import pic3 from '../images/Picture2.jpg';
import pic2 from '../img/pic1.jpg';
import pic4 from '../images/Picture4.png';

function Slider() {
  return (
    <Carousel>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100 mypics"
          src={pic1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h1 className='let'>Let's Build A Better World Together</h1>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="d-block w-100 mypics"
          src={pic2}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h1 className='let'>Let's Build A Better World Together</h1>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 mypics"
          src={pic4}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h1 className='let'>Let's Build A Better World Together</h1>
          <p>
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Slider;