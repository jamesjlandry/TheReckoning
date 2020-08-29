import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import EquipmentOptionModal from '../containers/EquipmentOptionModal'

function CharacterWeapon() {
    let weapons = useSelector(state => state.weapons)
    let dispatch = useDispatch()
    let selectOptions = 'SELECT_WEAPON'

  
    
  
    return (
      <div className="selection_options">
             <div className="character_box ">
                 {weapons.map(weapon=> <EquipmentOptionModal option={weapon} selectOptions={selectOptions}/>)}
              
          </div>

        </div>
    );
  }
  
  export default CharacterWeapon;