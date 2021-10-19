import React from 'react';


import './Home.css'
import About from '../Abou/About';
import Services from '../../Services/Services';
import Brances from '../../Branches/Brances';


const Home = () => {

    
    return (
        <div className="container-fluid">
            <div className="row cover-background">
                <div className="col-md-9 center-align">
                    <div className="d-flex flex-column justify-content-center align-items-center mt-4">
                        <div className=" center-align">
                            <h1 className="mb-4">Welcome To <span className="fw-bolder fs-1 text-danger">Hello Dr.</span> </h1>
                            <h3 className="mb-4">24*7 Doctor Available</h3>
                        </div>
                        <div>
                            <button className="bg-primary px-4 py-2 text-light fw-bold">Call Now</button>
                        </div>
                    </div>
                    
                </div>
                <div className="col-md-3">
                    
                </div>
            </div>

            <div>
                <About></About>
                <Services></Services>
                <Brances></Brances>
            </div>
        </div>
    );
};

export default Home;