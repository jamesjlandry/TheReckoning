import {useDispatch} from 'react-redux';




  dispatch = useDispatch()
  
  export const logIn = async (user) => {
    let response = await fetch('http://localhost:3000/login', {
        'credentials': 'include',
        method: "POST",
        headers: {
            accept: 'application/json',
            'content-type': 'application/json'
        },
        body: JSON.stringify(user)
    })
    let currentUser = await response.json()
    if (currentUser.username === user.username) {
       dispatch( { type: "SET_USER", user: currentUser  })
    } else {
        alert("username or password incorrect")
    }
  }
  

  export const handleLogout = async () => {
    let response = await fetch('http://localhost:3000/log_out', {
        credentials: 'include',
        method: 'DELETE'
    })
    let loggedOut = await response.json()
    useDispatch({type: "LOG_OUT" })
}

export const createUser = (user) => {
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
        .then(user => {
            this.setState({ currentUser: user, loggedIn: true })

        })
}

export const loggedIn = async () => {
    let response = await fetch('http://localhost:3000/logged_in', {
        'credentials': 'include'
    })
    let currentUser = await response.json()
    if (currentUser !== null) {
        this.setState({
            currentUser,
            loggedIn: true
        })
    }
}