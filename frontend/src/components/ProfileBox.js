import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
// import handleLogout from '../actions'


function ProfileBox() {
    let user = useSelector(state => state.currentUser)
    let dispatch = useDispatch()
   const handleLogout = async () => {
        let response = await fetch('http://localhost:3000/log_out', {
            credentials: 'include',
            method: 'DELETE'
        })
        let loggedOut = await response.json()
        dispatch({type: "LOG_OUT" })
    }

    
    return (
        <div className="profile_box">
            {user = null ? 
            <div>
            <div>log in</div>
            </div>
            :
            <div>
            <div>Welcome {user.username}</div>
            <div onClick={() => handleLogout()}>Log Out</div>
            </div>
            }
            
        </div>
    );
}

export default ProfileBox;