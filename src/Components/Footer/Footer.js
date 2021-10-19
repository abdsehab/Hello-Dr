import React from 'react';
import { Col, Row } from 'react-bootstrap';
import './Footer.css'


const Footer = () => {
    return (
        <div className=" container-fluid position-relative bottom-0 custom-margin bg-dark bg-gradient">
            <div className='row'>
                <div className="col">
                        <h1 className="fs-5 text-warning ">© 2021 <span className="fw-bold">Hello Dr</span> Private Hospital Limited. All rights reserved</h1>
                </div>
        </div>
            
        </div>
        
    );
};

export default Footer;