import Carousel from 'react-bootstrap/Carousel';
import './slider.css';
import pic3 from '../img/Picture14.jpg';
import pic5 from '../images/Picture12.JPG'
import pic12 from '../images/Picture28.jpg'
import pic15 from "../images/Picture49.jpeg"
import pic16 from "../images/Picture38.JPG"
import pic17 from "../images/Picture51.jpeg"


function Slider() {
  return (
    <Carousel>
    <Carousel.Item>
        <img
          className="d-block w-100 mypics"
          src={pic15}
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
          src={pic17}
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
          src={pic16}
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
          src={pic12}
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
          src={pic3}
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