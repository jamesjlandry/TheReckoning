import React from 'react';
import './App.css';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import Header from './containers/Header';
import ProfileBox from './components/ProfileBox';
import CharacterIndex from './containers/CharacterIndex';
import LogIn from './containers/LogIn'

function App() {
  let loggedIn = useSelector(state => state.loggedIn)
  let dispatch = useDispatch()

  

  return (
    <div className="App">
      {loggedIn ? 
      <Header className="App-header" />
      :
      <LogIn />
        }   
    </div>
  );
}

export default App;
