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
                <img src='https://cdn.pixabay.com/photo/2017/04/06/09/37/toy-2207781_1280.jpg'></img>
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