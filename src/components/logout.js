import React from 'react';


const Logout = ({setAuth}) =>{
    
    const lout = () =>{
        setAuth(false)
        localStorage.setItem('auth','false')
    }

    return  <>
        {lout()}
        <h3>Logout Successfull</h3>
    </>
}

export default Logout;