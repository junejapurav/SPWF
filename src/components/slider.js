import Carousel from 'react-bootstrap/Carousel';
import './slider.css';
import pic1 from '../img/Picture12.jpg';
import pic3 from '../img/Picture14.jpg';
import pic2 from '../img/shiksharth.jpg';
import pic4 from '../img/Picture13.jpg';
import pic5 from '../images/Picture12.JPG'
import pic6 from '../images/Picture13.JPG'
import pic7 from '../images/Picture14.JPG'
import pic8 from '../images/Picture15.JPG'

function Slider() {
  return (
    <Carousel>
    <Carousel.Item>
        <img
          className="d-block w-100 mypics"
          src={pic5}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h1 className='let'>Let's Build A Better World Together</h1>
          <p>
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    <Carousel.Item>
        <img
          className="d-block w-100 mypics"
          src={pic7}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h1 className='let'>Let's Build A Better World Together</h1>
          <p>
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100 mypics"
          src={pic2}
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
          src={pic1}
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
      <Carousel.Item>
        <img
          className="d-block w-100 mypics"
          src={pic3}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h1 className='let'>Let's Build A Better World Together</h1>
          <p>
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 mypics"
          src={pic8}
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