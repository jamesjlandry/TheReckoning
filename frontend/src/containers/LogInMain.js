import React from 'react';
import {useState} from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import Register from '../components/Register'
import LogIn from '../components/LogIn'

function LogInMain()  {

    

    const registerAccount = useSelector(state => state.registerAccount)
    
    return (
        <React.Fragment>
            <div className="box_background">
                {/* <img src='https://cdn.pixabay.com/photo/2019/04/05/17/48/fog-4105667_1280.jpg'></img> */}
            {registerAccount ? 
            <Register/>
            :
            <LogIn/>
            }
        </div>
        </React.Fragment>
           
            
    )
}

export default LogInMain;