import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import EquipmentOptionModal from '../containers/EquipmentOptionModal'

function CharacterArmor() {
    let armors = useSelector(state => state.armors)
    let dispatch = useDispatch()
    let selectOptions = 'SELECT_ARMOR'
  
    
  
    return (
      <div className="selection_options">
             <div className="character_box ">
             <div> </div>
                 {armors.map(armor=> <EquipmentOptionModal option={armor} selectOptions={selectOptions}/>)}
              
          </div>

        </div>
    );
  }
  
  export default CharacterArmor;