import React from 'react';

const Singleshop = (props) => {
    const { name, Price ,img} = props.medicine;
    return (
        <div>
            <div className="my-4 set-box bg-secondary " >
                <img src={img} alt=""  width="150px" className="my-3"/>
                <h1 className="fw-bold fs-5 ">Name :{name} </h1>
                <h3 className="fw-normal fs-6 text-light">Price: {Price} </h3>
                <button className="bg-light fw-bolder text-dark">Buy</button>
            </div>
        </div>
    );
};

export default Singleshop;