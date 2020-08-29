import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { Tab } from 'semantic-ui-react'
import CharacterBlessing from '../components/CharacterBlessing'
import CharacterEquipment from '../components/CharacterEquipment'
import CharacterRace from '../components/CharacterRace'
import CharacterType from '../components/CharacterType'
import CharacterArmor from '../components/CharacterArmor'
import CharacterWeapon from '../components/CharacterWeapon'
import CharacterTypeLevel from '../components/CharacterTypeLevel'
import CharacterBlessingLevel from '../components/CharacterBlessingLevel'


  
  const CharacterOptionContainer = () => {

    const selectedType = useSelector(state => state.characterType)
    const selectedBlessing = useSelector(state => state.characterBlessing)
    const selectedCurse = useSelector(state => state.characterCurse)
    const selectedRace = useSelector(state => state.characterRace)
    const currentUser = useSelector(state => state.currentUser)
    const selectedTypeLevels = useSelector(state => state.characterTypeLevel)
    const coins = useSelector(state => state.coins)
    
    
    const selectedCharacter = {
        name: '',
        type_id: selectedType?.id,
        blessing_id: selectedBlessing?.id,
        // curse_id: selectedCurse?.id,
        race_id: selectedRace?.id,
        user_id: currentUser?.id,
        level: 1, 
        image: "",
        coins: coins,
        background: "",
        notes: "",
    }

   
    
    const panes = [
        { menuItem: 'Race', render: () => <Tab.Pane><CharacterRace/></Tab.Pane> },
        { menuItem: 'Type', render: () => <Tab.Pane><CharacterType/></Tab.Pane> },
        // { menuItem: 'Type Level Options', render: () => <Tab.Pane><CharacterTypeLevel/></Tab.Pane> },
        { menuItem: 'Blessing', render: () => <Tab.Pane><CharacterBlessing/></Tab.Pane> },
        // { menuItem: 'Blessing Level Options', render: () => <Tab.Pane><CharacterBlessingLevel/></Tab.Pane> },
        { menuItem: 'Armor', render: () => <Tab.Pane><CharacterArmor/></Tab.Pane> },
        { menuItem: 'Weapons', render: () => <Tab.Pane><CharacterWeapon/></Tab.Pane> },
        { menuItem: 'Equipment', render: () => <Tab.Pane><CharacterEquipment/></Tab.Pane> },
      ]

    if(selectedType) {
        if(selectedTypeLevels.length === 0)
            panes.push({ menuItem: 'Type Level Options', render: () => <Tab.Pane><CharacterTypeLevel/></Tab.Pane> })
        else if (selectedTypeLevels.length === 1) 
            panes.push({ menuItem: 'Type Level Options 2', render: () => <Tab.Pane><CharacterTypeLevel/></Tab.Pane> })
    }
    if(selectedBlessing) panes.push({ menuItem: 'Blessing Level Options', render: () => <Tab.Pane><CharacterBlessingLevel/></Tab.Pane> })
    let createCharacter = () => {

    }
    console.log(Object.values(selectedCharacter))
    return (
        <React.Fragment>
        <Tab panes={panes} />
        {/* {Object.values(selectedCharacter).every( property => property !== undefined) ? <button>Create Character</button> : null} */}
        </React.Fragment>
    )
  }
export default CharacterOptionContainer