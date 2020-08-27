import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';


function ProfileBox() {
    let user = useSelector(state => state.currentUser)
    let dispatch = useDispatch()
    return (
        <div className="profile_box">
               
            {user = {} ? 
            <div>log in</div>
            :
            <div>{user.username}</div>}
            
        </div>
    );
}

export default ProfileBox;