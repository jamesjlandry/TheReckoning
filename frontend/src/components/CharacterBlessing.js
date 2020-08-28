import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import OptionModal from '../components/OptionModal'

function CharacterBlessing() {
    let dispatch = useDispatch()
    let blessings = useSelector(state => state.blessings)
    
  
    return (
        <div className="selection_options">
             <div className="character_box ">
                 {blessings.map(blessing=> <OptionModal blessing={blessing}/>)}
              
          </div>

        </div>
      );
  }
  
  export default CharacterBlessing;