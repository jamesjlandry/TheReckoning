import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import CharacterOptionModal from '../SharedComponents/CharacterOptionModal'

function CharacterType() {
    let dispatch = useDispatch()
    let types = useSelector(state => state.types)
    let selectOptions = 'SELECT_TYPE'
    
  
    return (
        <div className="selection_options">
             <div className="character_box ">
             <div>Choose from the following Types: </div>
                 {types.map(type=> <CharacterOptionModal  option={type} selectOptions={selectOptions}/>)}
              
          </div>

        </div>
      );
  }
  
  export default CharacterType;