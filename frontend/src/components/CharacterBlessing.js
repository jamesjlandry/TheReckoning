import React from 'react'
import { useSelector, useDispatch } from 'react-redux';

function CharacterBlessing() {
    let dispatch = useDispatch()
    let blessings = useSelector(state => state.blessings)
    
  
    return (
        <div className="selection_options">
             <div className="character_box ">
             
                 {blessings.map(blessing=> <div onClick={() => { dispatch({ type: 'SELECT_BLESSING', }) }} >
              <h1>{character.name}</h1>
              </div>)}
              
          </div>
      );
        </div>
      );
  }
  
  export default CharacterBlessing;