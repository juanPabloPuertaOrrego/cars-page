import React, {useState} from 'react';
import Carousel from 'react-bootstrap/Carousel';

const CarouselView = (props) => {
  const {carImages} = props

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
  
    return (
    <div>
        <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item interval={500}>
          <img
            className="d-block w-50"
            src={carImages[0]}
            alt="First slide"
          />
          <Carousel.Caption style={{color:"black", textAlign:"end"}}>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>

      <Carousel.Item interval={500}>
        <img
          className="d-block w-50"
          src={carImages[1]}
          alt="Second slide"

        />

        <Carousel.Caption style={{color:"black", textAlign:"end"}}>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="d-block w-50"
          src={carImages[2]}
          alt="Third slide"

        />

        <Carousel.Caption style={{color:"black", textAlign:"end"}}>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
            
    </div>
    );
}

export default CarouselView;
