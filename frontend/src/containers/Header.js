import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import ProfileBox from '../components/ProfileBox'


function Header() {
    
    return (
        <div className="header">
            <h1>The Cursed</h1>  
            <div>
            <ProfileBox/>
            </div>
        </div>
    );
}

export default Header;