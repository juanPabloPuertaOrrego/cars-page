import React, {useState} from 'react';
import InputGroup from 'react-bootstrap/InputGroup'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

import dataCars from '../dataCars.json'
import CarView from './CarView';
import CarouselView from './CarouselView';

const AllCars = () => {
    const [searchCars, setSearchCars] = useState(dataCars);
    const carImages =dataCars.map(element =>element.image)

    const handleOnSearch =(e)=>{
      const newSearch=dataCars.filter((item)=>{
        const matchItem=item.categorie.toUpperCase()
        const inputItem=e.target.value.toUpperCase()
        return matchItem.indexOf(inputItem)>-1
      })
      setSearchCars(newSearch)
    }

    const handleClickSearch =()=>{

    }

    return (
        <>
        <div>
        <CarouselView carImages={carImages}/>
        </div>
        <div>
        <InputGroup onChange={handleOnSearch} className="mb-3">
        <Button onClick={handleClickSearch} variant="outline-secondary" id="button-addon1">
          Search car
        </Button>
        <Form.Control
          aria-label="Example text with button addon"
          aria-describedby="basic-addon1"
        />
        </InputGroup>      
        </div>
        <div style={{
            display:'flex',
            flex:'wrap',
            justifyContent:'space-around'}}>
        {searchCars.map(
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
