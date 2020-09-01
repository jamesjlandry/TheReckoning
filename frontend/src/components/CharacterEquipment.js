import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import EquipmentOptionModal from '../containers/EquipmentOptionModal'

function CharacterEquipment() {
    let equipments = useSelector(state => state.equipments)
    let dispatch = useDispatch()
    let selectOptions = 'SELECT_EQUIPMENT'
  
    
  
    return (
      <div className="selection_options">
             <div className="character_box ">
             <div> </div>
                 {equipments.map(equipment=> <EquipmentOptionModal option={equipment} selectOptions={selectOptions}/>)}
              
          </div>

        </div>
    );
  }
  
  export default CharacterEquipment;