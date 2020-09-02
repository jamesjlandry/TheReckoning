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
import CharacterStats from '../components/CharacterStats'
import CharacterBuild from '../components/CharacterBuild'
import CharacterSkills from '../components/CharacterSkills'


  
  const SelectedCharacterOptionContainer = () => {

    const character = useSelector(state => state.selectedCharacter)
    const currentUser = useSelector(state => state.currentUser)
    const coins = useSelector(state => state.coins)
    

   
    
    const panes = [
        // { menuItem: 'Type Level Options', render: () => <Tab.Pane><CharacterTypeLevel/></Tab.Pane> },
        // { menuItem: 'Blessing Level Options', render: () => <Tab.Pane><CharacterBlessingLevel/></Tab.Pane> },
        // { menuItem: 'Armor', render: () => <Tab.Pane><CharacterArmor/></Tab.Pane> },
        // { menuItem: 'Weapons', render: () => <Tab.Pane><CharacterWeapon/></Tab.Pane> },
        // { menuItem: 'Equipment', render: () => <Tab.Pane><CharacterEquipment/></Tab.Pane> },
        // { menuItem: 'Skills', render: () => <Tab.Pane><CharacterSkills/></Tab.Pane> },
        // { menuItem: 'Stats', render: () => <Tab.Pane><CharacterStats/></Tab.Pane> }
      ]

//     if(selectedType) {
//         if(selectedTypeLevels.length === 0)
//             panes.push({ menuItem: 'Type Level Options', render: () => <Tab.Pane><CharacterTypeLevel/></Tab.Pane> })
//         else if (selectedTypeLevels.length === 1) 
//             panes.push({ menuItem: 'Type Level Options 2', render: () => <Tab.Pane><CharacterTypeLevel/></Tab.Pane> })
//     }
//     if(selectedBlessing) {
//         if(selectedBlessingLevels.length === 0)
//         panes.push({ menuItem: 'Blessing Level Options', render: () => <Tab.Pane><CharacterBlessingLevel/></Tab.Pane> })
//     } 

//     if(selectedType && selectedRace && selectedBlessing) {
        
//             panes.push({ menuItem: 'Stats', render: () => <Tab.Pane><CharacterStats/></Tab.Pane> })
//     }

//     if(selectedType && selectedRace && selectedBlessing) {
        
//       panes.push({ menuItem: 'Skills', render: () => <Tab.Pane><CharacterSkills/></Tab.Pane> })
// }

//     if(selectedType && selectedRace && selectedBlessing && characterStats && characterSkills) {
        
//       panes.push({ menuItem: 'Review Character', render: () => <Tab.Pane><CharacterBuild/></Tab.Pane> })
// }
//     let createCharacter = () => {

//     }
    
    return (
        <React.Fragment>
        <Tab panes={panes} />
        {/* {Object.values(selectedCharacter).every( property => property !== undefined) ? <button>Create Character</button> : null} */}
        </React.Fragment>
    )
  }
export default SelectedCharacterOptionContainer