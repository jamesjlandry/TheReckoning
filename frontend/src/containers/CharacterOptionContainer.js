import React from 'react'
import { useSelector } from 'react-redux';
import { Tab } from 'semantic-ui-react'
import CharacterBlessing from '../components/NewCharacterComponents/CharacterBlessing'
import CharacterEquipment from '../components/SharedComponents/CharacterEquipment'
import CharacterRace from '../components/NewCharacterComponents/CharacterRace'
import CharacterType from '../components/NewCharacterComponents/CharacterType'
import CharacterArmor from '../components/SharedComponents/CharacterArmor'
import CharacterWeapon from '../components/SharedComponents/CharacterWeapon'
import CharacterTypeLevel from '../components/SharedComponents/CharacterTypeLevel'
import CharacterBlessingLevel from '../components/SharedComponents/CharacterBlessingLevel'
import CharacterStats from '../components/CharacterStats'
import CharacterBuild from '../components/CharacterBuild'
import CharacterSkills from '../components/CharacterSkills'


  
  const CharacterOptionContainer = () => {

    const selectedType = useSelector(state => state.characterType)
    const selectedBlessing = useSelector(state => state.characterBlessing)
    const selectedRace = useSelector(state => state.characterRace)
    const currentUser = useSelector(state => state.currentUser)
    const selectedTypeLevels = useSelector(state => state.characterTypeLevel)
    const selectedblessingLevels = useSelector(state => state.characterBlessingLevel)
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

   
    // panes render conditionally in the Semantic tab based on selected choices that are updated in the store.
    const panes = [
        { menuItem: 'Armor', render: () => <Tab.Pane><CharacterArmor /></Tab.Pane> },
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
            panes.splice( 2, 0, { menuItem: 'Type Abilities', render: () => <Tab.Pane><CharacterTypeLevel /></Tab.Pane> })
       
        else if (selectedTypeLevels.length < availableTypeAbilities && currentEligibleLevel !==1)
            panes.splice(0, 0,  { menuItem: 'Type Abilities', render: () => <Tab.Pane><CharacterTypeLevel /></Tab.Pane> })
    }
    if(selectedBlessing) {
        if(selectedblessingLevels.length === 0 && currentEligibleLevel === 1) {
        panes.splice(2, 0, { menuItem: 'Blessing Abilities', render: () => <Tab.Pane><CharacterBlessingLevel /></Tab.Pane> })
        } else if (selectedblessingLevels.length < currentEligibleLevel) {
        panes.splice(1, 0, { menuItem: 'Blessing Abilities', render: () => <Tab.Pane><CharacterBlessingLevel /></Tab.Pane> })
        }
    } 

    if(selectedType && selectedRace && selectedBlessing) {

            panes.splice(3, 0, { menuItem: 'Stats', render: () => <Tab.Pane><CharacterStats /></Tab.Pane> })
    }

    if(selectedType && selectedRace && selectedBlessing && currentEligibleLevel === 1 || currentEligibleLevel === 2 || currentEligibleLevel === 4 || currentEligibleLevel === 6 ) {
    
      panes.splice(4, 0, { menuItem: 'Skills', render: () => <Tab.Pane><CharacterSkills /></Tab.Pane> })
}

    if(selectedType && selectedRace && selectedBlessing && characterStats && characterSkills || currentEligibleLevel >=2 && characterStats ) {
        
      panes.push({ menuItem: 'Review Character', render: () => <Tab.Pane><CharacterBuild /></Tab.Pane> })
}

    console.log(Object.values(selectedCharacter))
    return (
        <React.Fragment>
        <Tab panes={panes} />
        </React.Fragment>
    )
  }
export default CharacterOptionContainer