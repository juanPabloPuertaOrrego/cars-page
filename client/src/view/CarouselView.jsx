import React, {useState} from 'react';
import Carousel from 'react-bootstrap/Carousel';

const CarouselView = (props) => {
  const {carImages, carCategorie, carDescription} = props

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
  
    return (
    <div>
        <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item interval={1000} >
          <img
            className="d-block w-50"
            src={carImages[0]}
            alt="First slide"
            style={{height: 300, maxWidth:500, objectFit:'cover'}}
          />
          <Carousel.Caption style={{color:"black", textAlign:"end"}}>
            <h3>{carCategorie[0]}</h3>
            <p>{carDescription[0]}</p>
          </Carousel.Caption>
        </Carousel.Item>

      <Carousel.Item interval={1000}>
        <img
          className="d-block w-50"
          src={carImages[1]}
          alt="Second slide"
          style={{height: 300, maxWidth:500, objectFit:'cover'}}

        />

        <Carousel.Caption style={{color:"black", textAlign:"end"}}>
        <h3>{carCategorie[2]}</h3>
            <p>{carDescription[2]}</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-50"
          src={carImages[2]}
          alt="Third slide"
          style={{height: 300, maxWidth:500, objectFit:'cover'}}

        />

        <Carousel.Caption style={{color:"black", textAlign:"end"}}>
        <h3>{carCategorie[2]}</h3>
            <p>{carDescription[2]}</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
            
    </div>
    );
}

export default CarouselView;
