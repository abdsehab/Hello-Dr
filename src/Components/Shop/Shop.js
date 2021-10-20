import React from 'react';
import { useState, useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import Singleshop from '../SingleShop/Singleshop';


const Shop = () => {
     const [datas, setDatas] = useState([]);
    useEffect(() => {
        fetch('./medicine.json')
            .then(res => res.json())
            .then(data => setDatas(data));
    
    },[])
    return (
        <div>
            <h1 className="my-3 bg-light bg-gradient fw-bolder">Medicines</h1>
            <Row>
                <Col>
                    <Row>
                        {datas.map(data => <Col md={4}>
                            <Singleshop medicine={data} ></Singleshop>
                        </Col>)}
                    </Row>
                        
                    
                    
                </Col>
                
            </Row>
        </div>
    );
};

export default Shop;