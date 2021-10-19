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
                    <h1>Heading</h1>
                    <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, aliquam ab facilis quod ad laborum repellendus quisquam eveniet animi magni, maxime explicabo amet nihil at. Quidem iure deserunt minima ut eveniet accusamus nobis quam quisquam aliquam impedit perferendis quasi eaque adipisci nam cupiditate fugiat temporibus doloremque, consectetur unde ipsam enim!</h5>
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