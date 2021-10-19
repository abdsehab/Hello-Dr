import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import Service from '../Service/Service';
import img from '../../Img/ab-2.jpeg'



const Services = () => {
    const [datas, setDatas] = useState([]);
    useEffect(() => {
        fetch('./data.json')
            .then(res => res.json())
            .then(data => setDatas(data));
    
    },[])
    return (
        <div className="pt-4">
            <h1 className="my-3 bg-light bg-gradient fw-bolder">Our Heros</h1>
            <Row>
                <Col>
                    <Row>
                        {datas.map(data => <Col md={4}>
                            <Service Service={data} ></Service>
                        </Col>)}
                    </Row>
                        
                    
                    
                </Col>
                
            </Row>
            
            
            

        </div>
    );
};

export default Services;