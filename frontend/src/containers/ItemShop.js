import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { Tab } from 'semantic-ui-react'
import CharacterArmor from '../components/CharacterArmor'
import CharacterWeapon from '../components/CharacterWeapon'
import CharacterEquipment from '../components/CharacterEquipment'
import MagicItems from '../components/MagicItems'
import Artifacts from '../components/Artifacts'

// currently the Item Shop is not being used. future update will add this to the character sheet
// in order to purchase or add items during game play

const itemShop = () => {

    const coins = useSelector(state => state.coins)


 const panes = [
   
    { menuItem: 'Armor', render: () => <Tab.Pane><CharacterArmor/></Tab.Pane> },
    { menuItem: 'Weapons', render: () => <Tab.Pane><CharacterWeapon/></Tab.Pane> },
    { menuItem: 'Equipment', render: () => <Tab.Pane><CharacterEquipment/></Tab.Pane> },
    { menuItem: 'Magic Items', render: () => <Tab.Pane><MagicItems/></Tab.Pane> },
    { menuItem: 'Artifacts', render: () => <Tab.Pane><Artifacts/></Tab.Pane> },
  ]

  return (
    <React.Fragment>
    <Tab panes={panes} />
    </React.Fragment>
    )

  }

  export default itemShop