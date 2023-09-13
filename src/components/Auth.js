import React from "react";
import { useSelector } from "react-redux";
export const Auth = () => {
     
    const isAuth = useSelector(state => state.auth.isAuthenticated);
   
    return (<div className="mt-5">
        {!isAuth && <h1> User is not authenticated, login to validate.</h1>}
        {isAuth && <h1>User is authenticated</h1>}   
 </div>)
};

