import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import CharacterOptionModal from '../SharedComponents/CharacterOptionModal'

function CharacterRace() {
    let races = useSelector(state => state.races)
    let dispatch = useDispatch()
    let selectOptions = 'SELECT_RACE'

  
    
  
    return (
      <div className="selection_options">
             <div className="character_box ">
               <div>Choose one of the following Races: </div>
                 {races.map(race=> <CharacterOptionModal option={race} selectOptions={selectOptions}/>)}
              
          </div>

        </div>
    );
  }
  
  export default CharacterRace;