import {createStore, bindActionCreators} from 'redux';




const reducer = (currentState, action) => {
  if (action.type === 'SELECT_CHARACTER') {
    return {
      ...currentState, 
      selectedCharacter: action.selectedCharacter,
      editCharacter: true,
      createCharacter: false,
      coins: action.selectedCharacter.coins,   
      characterBlessing: action.selectedCharacter.blessing,
      characterType: action.selectedCharacter.type,
      characterRace: action.selectedCharacter.race,
      characterBlessingLevel: action.selectedCharacter.blessing_levels,
      characterCurseLevel: action.selectedCharacter.curse_levels,
      characterTypeLevel: action.selectedCharacter.type_levels,
      characterSkills: action.selectedCharacter.skills,
      characterArmor: action.selectedCharacter.armors,
      characterWeapons: action.selectedCharacter.weapons,
      characterEquipment: action.selectedCharacter.equipments,
      characterCharms: action.selectedCharacter.charms,
      characterArtifacts: action.selectedCharacter.artifacts,
      characterXP: action.selectedCharacter.xp,
      characterStrengthPool: action.selectedCharacter.strength_pool,
      characterDexterityPool: action.selectedCharacter.dexterity_pool,
      characterWisdomPool: action.selectedCharacter.wisdom_pool,
      characterCharismaPool: action.selectedCharacter.charisma_pool,
      characterMagicPool: action.selectedCharacter.magic_pool,
      characterArmorCost: action.selectedCharacter.armor_cost,
      characterRecoveryPool: action.selectedCharacter.recovery_pool,
      characterHP: action.selectedCharacter.hp,
      coins: action.selectedCharacter.coins,
      characterBackground: action.selectedCharacter.background,
      characterNotes: action.selectedCharacter.notes
    }
   }
   else if (action.type === 'SET_USER'){
     return {...currentState, 
      currentUser: action.currentUser,
      loggedIn: true
      }
   }

   else if (action.type === 'SET_LEVEL_UP'){
    return {...currentState, 
     levelUp: true,
     characterLevel: currentState.characterLevel + 1,
     characterXP: action.characterXP
     }
  }

 
   else if (action.type === 'SET_CHARACTERS') {
     return {...currentState,
     characters: [...currentState.characters, action.selectedCharacter] 
     }
   }

   else if (action.type === 'UPDATE_CHARACTERS') {
    return {...currentState,
    
    }
  }

   else if (action.type === 'SET_STATS'){
    return {...currentState, 
     characterStats: action.characterStats
     }
  }

  else if (action.type === 'SET_XP'){
    return {...currentState, 
     characterXP: action.xp
     }
  }

   else if (action.type === 'SET_HP'){
    return {...currentState, 
     characterHP: action.hp
     }
  }

  else if (action.type === 'SET_COINS'){
    return {...currentState, 
     coins: action.coins
     }
  }

  else if (action.type === 'SET_HP'){
    return {...currentState, 
     characterHP: action.hp
     }
  }

  else if (action.type === 'SET_ARMOR_COST'){
    return {...currentState, 
     characterArmorCost: action.armorCostPool
     }
  }

  else if (action.type === 'SET_STRENGTH_POOL'){
    return {...currentState, 
     characterStrengthPool: action.strengthPool
     }
  }

  else if (action.type === 'SET_DEXTERITY_POOL'){
    return {...currentState, 
     characterDexterityPool: action.dexterityPool
     }
  }

  else if (action.type === 'SET_WISDOM_POOL'){
    return {...currentState, 
     characterWisdomPool: action.wisdomPool
     }
  }

  else if (action.type === 'SET_CHARISMA_POOL'){
    return {...currentState, 
     characterCharismaPool: action.charismaPool
     }
  }

  else if (action.type === 'SET_MAGIC_POOL'){
    return {...currentState, 
     characterMagicPool: action.magicPool
     }
  }

  else if (action.type === 'SET_RECOVERY_POOL'){
    return {...currentState, 
     characterRecoveryPool: action.recoveryPool
     }
  }

  else if (action.type === 'SET_BACKGROUND'){
    return {...currentState, 
     characterBackground: action.characterBackground
     }
  }

  else if (action.type === 'SET_NOTES'){
    return {...currentState, 
     characterNotes: action.characterNotes
     }
  }

  else if (action.type === 'SET_SKILLS'){
    return {...currentState, 
     characterSkills: [...currentState.characterSkills, action.characterSkills]
     }
  }

   else if (action.type === 'CREATE_CHARACTER_MODE'){
    return {...currentState, 
     createCharacter: true,
     editCharacter: false,
     selectedCharacter: null,
     characterSkills: [],
    characterEquipment: [],
    characterArmor: [],
    characterWeapons: [],
    characterCharms: [],
    characterArtifacts: [],
    coins: 35,
    characterRace: null,
    characterStats: null,
    characterType: null,
    characterBlessing: null,
    characterBlessingLevel: [],
    characterCurseLevel: [],
    characterTypeLevel: [],
    characterLevel: 1
     }
  }

  else if (action.type === 'LEVEL_UP_MODE'){
    return {...currentState, 
     createCharacter: true,
     editCharacter: false
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
     characterBlessingLevel: [action.option.blessing, ...currentState.characterBlessingLevel],
     characterCurseLevel: [action.option.curse, ...currentState.characterCurseLevel]
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
     characterEquipment: [action.option, ...currentState.characterEquipment],
     coins: currentState.coins - action.option.cost
     }
  }

  else if (action.type === 'SELECT_ARMOR'){
    return {...currentState, 
     characterArmor: [action.option, ...currentState.characterArmor],
     coins: currentState.coins - action.option.cost
     }
  }

  else if (action.type === 'SELECT_WEAPON'){
    return {...currentState, 
     characterWeapons: [action.option, ...currentState.characterWeapons],
     coins: currentState.coins - action.option.cost
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
     weapons: action.options.weapons,
     skills: action.options.skills,
     startingStats: action.options.startingstats,
     characters: action.options.characters
     }
  }
  else if (action.type === "SET_REGISTER") {
    return { ...currentState,
    registerAccount: !currentState.registerAccount
    }
  }
  
    return currentState
}



let initialState = {
    currentUser: null,
    loggedIn: false,
    registerAccount: false,
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
    artifacts: [],
    charms: [],
    armors: [],
    weapons: [],
    skills: [],
    startingStats: [],
    users: [],
    selectedCharacter: null,
    raceModal: false,
    typeModal: false,
    blessingModal: false,
    equipmentModal: false,
    characterSheet: false,
    characterBlessing: null,
    characterBlessingLevel: [],
    characterCurseLevel: [],
    characterType: null,
    characterTypeLevel: [],
    characterRace: null,
    characterStats: null,
    characterSkills: [],
    characterEquipment: [],
    characterArmor: [],
    characterWeapons: [],
    characterCharms: [],
    characterArtifacts: [],
    coins: 35,
    characterLevel: 1,
    currentCharacterLevel: 1,
    characterXP: 0,
    characterHP: 0,
    characterStrengthPool: 0,
    characterDexterityPool: 0,
    characterWisdomPool: 0,
    characterCharismaPool: 0,
    characterMagicPool: 0,
    characterArmorCost: 0,
    characterRecoveryPool: 0,
    characterBackground: '',
    characterNotes: '',
   
  }

const store = createStore(reducer, initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

window.store = store

export default store