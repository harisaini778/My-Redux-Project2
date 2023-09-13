import React from "react";
import { useSelector } from "react-redux";
export const Auth = () => {
     
    const isAuth = useSelector(state => state.auth.isAuthenticated);
   
    return (<div className="mt-5">
        {!isAuth && <h2 style={{color:"white"}}> User is not authenticated, login to validate.</h2>}
        {isAuth && <h1>User is authenticated</h1>}   
 </div>)
};

