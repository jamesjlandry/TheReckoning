import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import EquipmentOptionModal from '../containers/EquipmentOptionModal'

function CharacterWeapon() {
    let weapons = useSelector(state => state.weapons)
    let dispatch = useDispatch()
    let selectOptions = 'SELECT_WEAPON'
    let coins = useSelector(state => state.coins)

  
    
  
    return (
      <div className="selection_options">
             <div className="character_box ">
             <div>Coins: {coins}</div>
                 {weapons.map(weapon=> <EquipmentOptionModal option={weapon} selectOptions={selectOptions}/>)}
              
          </div>

        </div>
    );
  }
  
  export default CharacterWeapon;