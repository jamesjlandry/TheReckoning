import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import EquipmentOptionModal from '../containers/EquipmentOptionModal'

function CharacterEquipment() {
    let equipments = useSelector(state => state.equipments)
    let dispatch = useDispatch()
    let selectOptions = 'SELECT_EQUIPMENT'
    let coins = useSelector(state => state.coins)
  
    
  
    return (
      <div className="selection_options">
             <div className="character_box ">
             <div>Coins: {coins} </div>
                 {equipments.map(equipment=> <EquipmentOptionModal option={equipment} selectOptions={selectOptions}/>)}
              
          </div>

        </div>
    );
  }
  
  export default CharacterEquipment;