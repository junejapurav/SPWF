import Carousel from 'react-bootstrap/Carousel';
import './slider.css';
import pic1 from '../img/Picture12.jpg';
import pic3 from '../img/Picture14.jpg';
import pic2 from '../img/shiksharth.jpg';
import pic4 from '../img/Picture13.jpg';
import pic5 from '../images/Picture12.JPG'
import pic6 from '../images/Picture21.jpg'
import pic7 from '../images/Picture14.JPG'
import pic8 from '../images/Picture15.JPG'
import pic9 from '../images/Picture24.jpg'
import pic10 from '../images/Picture27.jpg'
import pic11 from '../images/Picture29.jpg'
import pic12 from '../images/Picture28.jpg'
import pic13 from '../images/Picture30.jpg'
import pic14 from "../images/Picture36.JPG"
import pic15 from "../images/Picture37.JPG"
import pic16 from "../images/Picture38.JPG"
import pic17 from "../images/Picture39.JPG"


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
          src={pic14}
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
          src={pic6}
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
          src={pic10}
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
          src={pic13}
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