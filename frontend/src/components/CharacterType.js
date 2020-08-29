import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import CharacterOptionModal from '../components/CharacterOptionModal'

function CharacterType() {
    let dispatch = useDispatch()
    let types = useSelector(state => state.types)
    let selectOptions = 'SELECT_TYPE'
    
  
    return (
        <div className="selection_options">
             <div className="character_box ">
                 {types.map(type=> <CharacterOptionModal option={type} selectOptions={selectOptions}/>)}
              
          </div>

        </div>
      );
  }
  
  export default CharacterType;