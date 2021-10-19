import React from 'react';
import { Nav, Navbar, Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

import useAuth from './../../Hooks/useAuth';


const Header = () => {

    const { user, Logout } = useAuth();

    return (
        <div>
            <div>
                <Navbar bg="primary" variant="dark">
                <Container>
                    <NavLink to="/home" className="fs-2 fw-bolder text-light text-decoration-none">Hello Dr</NavLink>

                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                            {
                                user.email ?
                                    <Navbar.Text> Signed in as: <h6>{user.displayName}</h6>  </Navbar.Text>
                                    
                                : <p></p>
                                
                            }
                    </Navbar.Collapse>
                </Container>
                </Navbar>
                
            </div>

            

            <div className="justify-content-center">
            <Nav className="justify-content-center bg-light p-4">
                <NavLink to="/home"
                    activeStyle={{
                        
                        fontWeight: "bold",
                        color: "black",
                        
                    
                    }} className="mx-4 text-decoration-none fs-4">Home
                </NavLink>

                
                
                <NavLink to="/Service" activeStyle={{
                        
                        fontWeight: "bold",
                        color: "black",
                        
                    
                }} className="mx-4 text-decoration-none fs-4">Service</NavLink>


                <NavLink to="/shop" activeStyle={{
                        
                        fontWeight: "bold",
                        color: "black",
                        
                    
                }} className="mx-4 text-decoration-none fs-4">MedShop</NavLink>


                <NavLink to="/blogs" activeStyle={{
                        
                        fontWeight: "bold",
                        color: "black",
                        
                    
                    }} className="mx-4 text-decoration-none fs-4">Blogs</NavLink>
                    
                <NavLink to="/contact" activeStyle={{
                        
                        fontWeight: "bold",
                        color: "black",
                        
                    
                    }} className="mx-4 text-decoration-none fs-4">Contact</NavLink>

                    {
                        user.email ?
                            <button onClick={Logout} className="bg-primary text-light">Logout</button>

                       : <NavLink to="/login" activeStyle={{
                        
                        fontWeight: "bold",
                        color: "black",
                        
                    
                        }} className="mx-4 text-decoration-none fs-4">login</NavLink>
                    }
                
                
            </Nav>

         
        </div>
        </div>
    );
};

export default Header;