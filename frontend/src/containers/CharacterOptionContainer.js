import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { Tab, Menu } from 'semantic-ui-react'
import CharacterBlessing from '../components/CharacterBlessing'
import CharacterEquipment from '../components/CharacterEquipment'
import CharacterRace from '../components/CharacterRace'
import CharacterType from '../components/CharacterType'
import CharacterArmor from '../components/CharacterArmor'
import CharacterWeapon from '../components/CharacterWeapon'
import CharacterTypeLevel from '../components/CharacterTypeLevel'
import CharacterBlessingLevel from '../components/CharacterBlessingLevel'
import CharacterStats from '../components/CharacterStats'
import CharacterBuild from '../components/CharacterBuild'
import CharacterSkills from '../components/CharacterSkills'


  
  const CharacterOptionContainer = () => {

    const selectedType = useSelector(state => state.characterType)
    const selectedBlessing = useSelector(state => state.characterBlessing)
    const selectedRace = useSelector(state => state.characterRace)
    const currentUser = useSelector(state => state.currentUser)
    const selectedTypeLevels = useSelector(state => state.characterTypeLevel)
    const selectedBlessingLevels = useSelector(state => state.characterBlessingLevel)
    const coins = useSelector(state => state.coins)
    const characterStats = useSelector(state => state.characterStats)
    const characterSkills = useSelector(state => state.characterSkills)
    const currentEligibleLevel = useSelector(state => state.currentEligibleLevel)
    const availableTypeAbilities = currentEligibleLevel * 2
    
    const selectedCharacter = {
        name: '',
        type_id: selectedType?.id,
        blessing_id: selectedBlessing?.id,
        race_id: selectedRace?.id,
        user_id: currentUser?.id,
        level: 1, 
        image: "",
        coins: coins,
        background: "",
        notes: "",
    }

   
    
    const panes = [
       
        // { menuItem: 'Type Level Options', render: () => <Tab.Pane><CharacterTypeLevel/></Tab.Pane> },
        
        // { menuItem: 'Blessing Level Options', render: () => <Tab.Pane><CharacterBlessingLevel/></Tab.Pane> },
        { menuItem: <Menu.Item>Armor <i className="check icon"></i></Menu.Item>, render: () => <Tab.Pane><CharacterArmor /></Tab.Pane> },
        { menuItem: 'Weapons', render: () => <Tab.Pane><CharacterWeapon /></Tab.Pane> },
        { menuItem: 'Equipment', render: () => <Tab.Pane><CharacterEquipment /></Tab.Pane> },
      ]

    if(currentEligibleLevel === 1) {
      panes.unshift({ menuItem: 'Race', render: () => <Tab.Pane><CharacterRace /></Tab.Pane>  }, 
      { menuItem: 'Type', render: () => <Tab.Pane><CharacterType /></Tab.Pane> }, 
      { menuItem: 'Blessing', render: () => <Tab.Pane><CharacterBlessing /></Tab.Pane>  } )
    }

    if(selectedType) {
        if(selectedTypeLevels.length < 2 && currentEligibleLevel === 1)
            panes.push({ menuItem: 'Type Level Options', render: () => <Tab.Pane><CharacterTypeLevel /></Tab.Pane> })
       
        else if (selectedTypeLevels.length < availableTypeAbilities && currentEligibleLevel !==1)
            panes.unshift({ menuItem: 'Type Level Options', render: () => <Tab.Pane><CharacterTypeLevel /></Tab.Pane> })
    }
    if(selectedBlessing) {
        if(selectedBlessingLevels.length === 0 && currentEligibleLevel === 1) {
        panes.push({ menuItem: 'Blessing Level Options', render: () => <Tab.Pane><CharacterBlessingLevel /></Tab.Pane> })
        } else if (selectedBlessingLevels.length < currentEligibleLevel) {
        panes.unshift({ menuItem: 'Blessing Level Options', render: () => <Tab.Pane><CharacterBlessingLevel /></Tab.Pane> })
        }
    } 

    if(selectedType && selectedRace && selectedBlessing) {

            panes.push({ menuItem: 'Stats', render: () => <Tab.Pane><CharacterStats /></Tab.Pane> })
    }

    if(selectedType && selectedRace && selectedBlessing && currentEligibleLevel === 1 || currentEligibleLevel === 2 || currentEligibleLevel === 4 || currentEligibleLevel === 6 ) {
    
      panes.push({ menuItem: 'Skills', render: () => <Tab.Pane><CharacterSkills /></Tab.Pane> })
}

    if(selectedType && selectedRace && selectedBlessing && characterStats && characterSkills || currentEligibleLevel >=2 && characterStats ) {
        
      panes.push({ menuItem: 'Review Character', render: () => <Tab.Pane><CharacterBuild /></Tab.Pane> })
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