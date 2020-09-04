import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import EquipmentOptionModal from '../containers/EquipmentOptionModal'

function Artifacts() {
    let artifacts = useSelector(state => state.artifacts)
    let dispatch = useDispatch()
    let selectOptions = 'SELECT_ARTIFACT'
  
    
  
    return (
      <div className="selection_options">
             <div className="character_box ">
             <div> </div>
                 {artifacts.map(artifact=> <EquipmentOptionModal option={artifact} selectOptions={selectOptions}/>)}
              
          </div>

        </div>
    );
  }
  
  export default Artifacts;