import React from 'react'
import { useSelector } from 'react-redux';
import EquipmentOptionModal from '../../containers/EquipmentOptionModal'

function MagicItems() {
    let magicItems = useSelector(state => state.charms)
    let selectOptions = 'SELECT_MAGIC_ITEM'
  
    
  
    return (
      <div className="selection_options">
             <div className="character_box ">
             <div> </div>
                 {magicItems.map(magicItem=> <EquipmentOptionModal option={magicItem} selectOptions={selectOptions}/>)}
              
          </div>

        </div>
    );
  }
  
  export default MagicItems;