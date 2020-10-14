import React from 'react'
import { useSelector } from 'react-redux';
import EquipmentOptionModal from '../../containers/EquipmentOptionModal'

function CharacterArmor() {
    let armors = useSelector(state => state.armors)
    let coins = useSelector(state => state.coins)
    let selectOptions = 'SELECT_ARMOR'
  
    
  
    return (
      <div className="selection_options">
             <div className="character_box ">
            <div> Coins: {coins}</div>
                 {armors.map(armor=> <EquipmentOptionModal option={armor} selectOptions={selectOptions}/>)}
              
          </div>

        </div>
    );
  }
  
  export default CharacterArmor;