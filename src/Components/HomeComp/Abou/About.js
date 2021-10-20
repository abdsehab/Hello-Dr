import React from 'react';
import { Carousel } from 'react-bootstrap';
import slider1 from '../../../Img/slider-1.jpg'
import slider2 from '../../../Img/slider-2.jpg'
import slider3 from '../../../Img/slider-3.png'

import './About.css'

const About = () => {
    return (
        <div className="mb-4 pb-4">
            <div className="mb-4 py-2 bg-light bg-gradient">
                <h1>About Us</h1>
            </div>
            <div className="row">
                <div className="col-md-6">
                    <h1>Hello Dr.</h1>
                    <h5>A hospital is a health care institution providing patient treatment with specialized medical and nursing staff and medical equipment</h5>
                </div>
                <div className="col-md-6 set-min-hight">
                    <Carousel>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={slider1}
                                alt="First slide"
                            />
                            
                            <Carousel.Caption>
                                
                                <h3 className="text-danger">Our Main Brunch</h3>
                                
                               
                                
                            </Carousel.Caption>
                            
                        </Carousel.Item>
                        
                        <Carousel.Item>
                            
    
                            <img
      
                                className="d-block w-100"
      
                                src={slider2}
     
                                alt="Second slide"
                            />
                            

    
                            <Carousel.Caption>
      
                                <h3 className="text-primary">Mirpur Hospital</h3>
      
                               
    
                            </Carousel.Caption>
  
                        </Carousel.Item>
  
                        <Carousel.Item>
    
                            <img
     
                                className="d-block w-100"
      
                                src={slider3}
      
                                alt="Third slide"
                                
                                />

    
                            <Carousel.Caption>
      
                                <h3 className="text-dark">Rajshahi Hospital</h3>
     
                                
    
                            </Carousel.Caption>
  
                        </Carousel.Item>

                    </Carousel>
                    
                        
                    
                </div>
            </div>
            
        </div>

    )};
export default About;