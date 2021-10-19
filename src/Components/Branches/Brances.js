import React from 'react';
import { Carousel } from 'react-bootstrap';
import slider1 from '../../Img/slider-1.jpg'
import slider2 from '../../Img/slider-2.jpg'
import slider3 from '../../Img/slider-3.png'

const Brances = () => {
    return (
        <div>
            <h1 className="bg-light bg-gradient fw-bolder ">Some of Our Hospitals</h1>
            <Carousel>
                <Carousel.Item>
                    
                    <img
                        
                        className="d-block w-100"
                        
                        src={slider3}
                        
                        alt="First slide"
                        
                    />
                    
                    <Carousel.Caption>
                        
                        <h3 className="fw-bold text-dark">Mirpur Hospital</h3>
                        
                        <p className="fw-bold text-dark">Contact Number : 000000000</p>
                        
                    </Carousel.Caption>
                    
                </Carousel.Item>
                
                <Carousel.Item>
                    
    
                    <img
      
                        className="d-block w-100"
      
                        src={slider1}
      
                        alt="Second slide"
                    />
                    

                    
    
                    <Carousel.Caption>
      
                        <h3 className="fw-bold text-dark">Mohammadpur Hospital</h3>
      
                        <p className="fw-bold text-dark" >Contact Number :000000</p>
    
                    </Carousel.Caption>
  
                </Carousel.Item>
  
                <Carousel.Item>
    
                    <img
      
                        className="d-block w-100"
      
                        src={slider2}
      
                        alt="Third slide"    
                    />
                    

    
                    <Carousel.Caption>
      
                        <h3 className="fw-bold text-dark">Arambag Hospital</h3>
      
                        <p className="fw-bold text-dark">Contact Number :0000000</p>
    
                    </Carousel.Caption>
  
                
                </Carousel.Item>

            </Carousel>
        
        </div>
    );
};

export default Brances;