import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import CharacterOptionModal from '../components/CharacterOptionModal'

function CharacterBlessing() {
    let dispatch = useDispatch()
    let blessings = useSelector(state => state.blessings)
    let selectOptions = 'SELECT_BLESSING'
    
  
    return (
        <div className="selection_options">
             <div className="character_box ">
                 {blessings.map(blessing=> <CharacterOptionModal option={blessing} selectOptions={selectOptions}/>)}
              
          </div>

        </div>
      );
  }
  
  export default CharacterBlessing;