import React from 'react';
import {useState} from 'react';
import { useDispatch } from 'react-redux';


function LogIn()  {


 const [username, setUsername] = useState('');
 const [password, setPassword] = useState('');
 const dispatch = useDispatch()

let logIn = async (user) => {
    console.log(user)
     let response = await fetch('http://localhost:3000/login', {
         credentials: 'include',
         method: "POST",
         headers: {
             accept: 'application/json',
             'content-type': 'application/json'
         },
         body: JSON.stringify(user)
     })
     let currentUser = await response.json()
     if (currentUser !== null) {
         dispatch({type: "SET_USER", currentUser: currentUser})
 }
 }

        const createUser = (user) => {
            fetch('http://localhost:3000/users', {
                credentials: 'include',
                method: 'POST',
                headers: {
                    accept: 'application/json',
                    'content-type': 'application/json'
                },
                body: JSON.stringify(user)
            })
                .then(res => res.json())
                .then(currentUser => {
                    dispatch({type: "SET_USER", currentUser: currentUser})
        
                })
            }

        let handleSubmit = (e) => {
            e.preventDefault();
            let user = {
                username: username,
                password: password,
            }
            logIn(user)
            }

     return (
        <div className="user_login">
            <form className="box" onSubmit={event => handleSubmit(event)}>
                <h1>The Cursed</h1>
                <input
                     
                    onChange={event => setUsername(event.target.value)} 
                    id="username"
                    name="username" 
                    placeholder="username"
                    type="text" 
                    value={username}
                />
                <input
                    onChange={event => setPassword(event.target.value)} 
                    id="password" 
                    name="password"
                    placeholder="password"
                    type="password" 
                    value={password}
                />
            <div>
                <button  type="submit">Log In</button>
            </div>

            <div>
                <button type="button" onClick={() => {dispatch({type: "SET_REGISTER"})}}>Register New Account</button>
            </div>

            </form>
          
            </div>
     )

 }

 export default LogIn;