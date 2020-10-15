import React, {useEffect} from 'react';
import './App.css';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import Header from './containers/Header';
import CharacterIndex from './containers/CharacterIndex';
import LogInMain from './containers/LogInMain'


function App() {
  
  let loggedIn = useSelector(state => state.loggedIn)
  let dispatch = useDispatch()

  useEffect( async () => {
   
      let response = await fetch('http://localhost:3000/logged_in', {
          'credentials': 'include'
      })
      let currentUser = await response.json()
      if (currentUser !== null) {
          dispatch({type: "SET_USER", currentUser: currentUser})
      } 
  }, [])




  useEffect( async () => {
    let response = await fetch('http://localhost:3000/character_options')
    let options = await response.json()
    dispatch({type: "SET_OPTIONS", options: options})

  },[])

  

  return (
    <div className="App">
      {loggedIn ? 
      <React.Fragment>
      <Header className="App-header" />
      <CharacterIndex />
      
      </React.Fragment>
      :
      <LogInMain />
        }   
    </div>
  );
}

export default App;
