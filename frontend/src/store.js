import {createStore} from 'redux';


const reducer = (currentState, action) => {
  if (action.type === 'SELECT_CHARACTER') {
    return {
      ...currentState, 
      selectedCharacter: action.selectedCharacter      
    }
   }
   else if (action.type === 'SET_USER'){
     return {...currentState, 
      // currentUser: user,
      loggedIn: true
      }
   }
    return currentState
}



let initialState = {
    currentUser: {},
    loggedIn: false,
    characters: [],
    blessings: [],
    curses: [],
    types: [],
    races: [],
    equipments: [],
    users: [],
    selectedCharacter: {},
    characterBlessing: {},
    characterCurse: {},
    characterType: {},
    characterRace: {},
    characterStats: {},
    characterEquipment: {},
    characterArmor: {},
    characterWeapons: {},
    characterLevel: 1
  }

const store = createStore(reducer, initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

window.store = store

export default store