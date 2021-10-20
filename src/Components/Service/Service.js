import React from 'react';
import './Service.css'


const Service = (props) => {
    const { thumbnail, name, Speciality } = props.Service;

    return(
        <div className="">
            
            <div className="my-4 set-box bg-primary " >
                <img src={thumbnail} alt=""  width="150px" className="my-3"/>
                <h1 className="fw-bold fs-5 ">Name :{name} </h1>
                <h3 className="fw-normal fs-6 text-light">Sepciality: {Speciality} </h3>
                <button className="bg-light fw-bolder text-dark">Connect</button>
            </div>
        </div>
    );
}

export default Service;