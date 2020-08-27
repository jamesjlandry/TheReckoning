import React from 'react';
import {useState} from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';


function LogIn()  {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [accountType, setAccountType] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [register, setRegister] = useState(false)
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

      let handleRegister = (e) => {
        e.preventDefault();
        let user = {
            username: username,
            password: password,
            email: email,
            accountType: accountType,
            firstName: firstName,
            lastName: lastName,
        }
        createUser(user)
      }

    
    return (
        <div className="user_login">{
            register ? 
            <form className="login_form" onSubmit={event => handleSubmit(event)}>
                <input
                  className="login_input" 
                  onChange={(event) => setUsername(event.target.value)} 
                  id="username"
                  name="username" 
                  placeholder="username"
                  type="text" 
                  value={username}
                />
                <input
                  className="login_input"
                  onChange={event => setFirstName(event.target.value)} 
                  id="firstName" 
                  name="firstName"
                  placeholder="firstName"
                  type="text" 
                  value={firstName}
                />
                 <input
                  className="login_input"
                  onChange={event => setLastName(event.target.value)} 
                  id="lastName" 
                  name="lastName"
                  placeholder="lastName"
                  type="text" 
                  value={lastName}
                />
                 <input
                  className="login_input"
                  onChange={event => setEmail(event.target.value)} 
                  id="email" 
                  name="email"
                  placeholder="email"
                  type="text" 
                  value={email}
                />
                <input
                  className="login_input"
                  onChange={event => setPassword(event.target.value)} 
                  id="password" 
                  name="password"
                  placeholder="password"
                  type="password" 
                  value={password}
                />
                <select className="login_input" onChange={event => setAccountType(event.target.value)} >
                    <option value='player'>Player Account</option>
                    <option value='gm'>Game Master Account</option>
                </select>
            <div>
              <button className="login_input" type="submit" onClick={(event) => handleRegister(event)}>Create Account</button>
            </div>

            <div>
                <button className="register_button" onClick={() => setRegister(!register)}>Back to Log In</button>
            </div>

          </form>
          
        :
            <form className="login_form" onSubmit={event => handleSubmit(event)}>
                <input
                    className="login_input" 
                    onChange={event => setUsername(event.target.value)} 
                    id="username"
                    name="username" 
                    placeholder="username"
                    type="text" 
                    value={username}
                />
                <input
                    className="login_input"
                    onChange={event => setPassword(event.target.value)} 
                    id="password" 
                    name="password"
                    placeholder="password"
                    type="password" 
                    value={password}
                />
            <div>
                <button className="login_input" type="submit">Log In</button>
            </div>

            <div>
                <button className="register_button" onClick={() => setRegister(!register)}>Register New Account</button>
            </div>

            </form>
            }
            </div>
    )
}

export default LogIn