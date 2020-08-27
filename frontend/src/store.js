import {createStore, bindActionCreators} from 'redux';



const reducer = (currentState, action) => {
  if (action.type === 'SELECT_CHARACTER') {
    return {
      ...currentState, 
      selectedCharacter: action.selectedCharacter,
      editCharacter: true,
      createCharacter: false,    
    }
   }
   else if (action.type === 'SET_USER'){
     return {...currentState, 
      currentUser: action.currentUser,
      loggedIn: true
      }
   }
   else if (action.type === 'CREATE_CHARACTER_MODE'){
    return {...currentState, 
     createCharacter: true,
     editCharacter: false,
     }
  }

  else if (action.type === 'SELECT_RACE_MODAL'){
    return {...currentState, 
      raceModal: true,
      typeModal: false,
      blessingModal: false,
      equipmentModal: false,
      characterSheet: false,

     }
  }

  else if (action.type === 'SELECT_TYPE_MODAL'){
    return {...currentState, 
      raceModal: false,
      typeModal: true,
      blessingModal: false,
      equipmentModal: false,
      characterSheet: false,

     }
  }

  else if (action.type === 'SELECT_BLESSING_MODAL'){
    return {...currentState, 
      raceModal: false,
      typeModal: false,
      blessingModal: true,
      equipmentModal: false,
      characterSheet: false,

     }
  }

  else if (action.type === 'SELECT_EQUIPMENT_MODAL'){
    return {...currentState, 
      raceModal: false,
      typeModal: false,
      blessingModal: false,
      equipmentModal: true,
      characterSheet: false,

     }
  }

  else if (action.type === 'SELECT_CHARACTER_SHEET_MODAL'){
    return {...currentState, 
      raceModal: false,
      typeModal: false,
      blessingModal: false,
      equipmentModal: false,
      characterSheet: true,

     }
  }

  else if (action.type === 'LOG_OUT'){
    return {...currentState, 
     loggedIn: false,
     currentUser: {}
     }
  }

  else if (action.type === 'SELECT_BLESSING'){
    return {...currentState, 
     characterBlessing: action.blessing
     }
  }

  else if (action.type === 'SET_OPTIONS'){
    return {...currentState, 
     blessings: action.options.blessings,
     curses: action.options.curses,
     types: action.options.types,
     races: action.options.races
     }
  }
  
    return currentState
}



let initialState = {
    currentUser: null,
    loggedIn: false,
    createCharacter: false,
    editCharacter: false,
    characters: [],
    blessings: [],
    curses: [],
    types: [],
    races: [],
    equipments: [],
    users: [],
    selectedCharacter: null,
    raceModal: false,
    typeModal: false,
    blessingModal: false,
    equipmentModal: false,
    characterSheet: false,
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