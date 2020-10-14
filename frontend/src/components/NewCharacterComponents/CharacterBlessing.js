import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import CharacterOptionModal from '../SharedComponents/CharacterOptionModal'

function CharacterBlessing() {
    
    let blessings = useSelector(state => state.blessings)
    let selectOptions = 'SELECT_BLESSING'
    
  
    return (
        <div className="selection_options">
             <div className="character_box ">
             <div>Choose from following Blessings: </div>
                 {blessings.map(blessing=> <CharacterOptionModal option={blessing} selectOptions={selectOptions}/>)}
              
          </div>

        </div>
      );
  }
  
  export default CharacterBlessing;