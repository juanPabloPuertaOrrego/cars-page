import React from 'react';
import InputGroup from 'react-bootstrap/InputGroup'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

import dataCars from '../dataCars.json'
import CarView from './CarView';
import CarouselView from './CarouselView';

const AllCars = () => {
    //console.log(dataCars)
    const carImages =dataCars.map(element =>element.image)
    console.log(carImages)


    return (
        <>
        <div>
        <CarouselView carImages={carImages}/>
        </div>
        <div>
        <InputGroup className="mb-3">
        <Button variant="outline-secondary" id="button-addon1">
          Button
        </Button>
        <Form.Control
          aria-label="Example text with button addon"
          aria-describedby="basic-addon1"
        />
        </InputGroup>      
        </div>
        <div style={{
            display:'flex',
            justifyContent:'center'}}>
        {dataCars.map(
        car=>
        <CarView 
        key={car.id}
        categorie={car.categorie}
        image={car.image}
        description={car.description}
        />
        )} 
        </div>  
        </>

    );
}

export default AllCars;
