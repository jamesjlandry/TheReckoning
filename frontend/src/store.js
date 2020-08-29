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
     characterBlessing: action.option
     }
  }

  else if (action.type === 'SELECT_BLESSING_LEVEL'){
    return {...currentState, 
     characterBlessingLevel: [action.option, ...currentState.characterBlessingLevel]
     }
  }

  else if (action.type === 'SELECT_TYPE_LEVEL'){
    return {...currentState, 
     characterTypeLevel: [action.option, ...currentState.characterTypeLevel]
     }
  }

  else if (action.type === 'SELECT_TYPE'){
    return {...currentState, 
     characterType: action.option
     }
  }

  else if (action.type === 'SELECT_RACE'){
    return {...currentState, 
     characterRace: action.option
     }
  }

  else if (action.type === 'SELECT_EQUIPMENT'){
    return {...currentState, 
     characterEquipment: [action.option, ...currentState.characterEquipment]
     }
  }

  else if (action.type === 'SELECT_ARMOR'){
    return {...currentState, 
     characterArmor: [action.option, ...currentState.characterArmor]
     }
  }

  else if (action.type === 'SELECT_WEAPON'){
    return {...currentState, 
     characterWeapons: [action.option, ...currentState.characterWeapons]
     }
  }

  else if (action.type === 'SET_OPTIONS'){
    return {...currentState, 
     blessings: action.options.blessings,
     curses: action.options.curses,
     types: action.options.types,
     races: action.options.races,
     blessinglevels: action.options.blessinglevels,
     curselevels: action.options.curselevels,
     typelevels: action.options.typelevels,
     equipments: action.options.equipments,
     armors: action.options.armors,
     weapons: action.options.weapons
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
    blessinglevels: [],
    curses: [],
    curselevels: [],
    types: [],
    typelevels: [],
    races: [],
    equipments: [],
    armors: [],
    weapons: [],
    users: [],
    selectedCharacter: null,
    raceModal: false,
    typeModal: false,
    blessingModal: false,
    equipmentModal: false,
    characterSheet: false,
    characterBlessing: null,
    characterBlessingLevel: [],
    characterCurse: null,
    characterCurseLevel: [],
    characterType: null,
    characterTypeLevel: [],
    characterRace: null,
    characterStats: null,
    characterEquipment: [],
    characterArmor: [],
    characterWeapons: [],
    coins: 0,
    characterLevel: 1
  }

const store = createStore(reducer, initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

window.store = store

export default store