import React from 'react';
import {Route,Redirect} from "react-router-dom";

import useAuth from './../../Hooks/useAuth';
import { render, } from '@testing-library/react';
import { Form } from 'react-bootstrap';


const Private = ({ children, ...rest }) => {
    const { user } = useAuth();
    return (
        <div>
           <Route
      {...rest}
      render={({ location }) =>
        user.email ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
        </div>
    );
};
        
        
    

export default Private;