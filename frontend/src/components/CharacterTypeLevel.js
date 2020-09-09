import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import CharacterOptionModal from '../components/CharacterOptionModal'

function CharacterTypeLevel() {
    let dispatch = useDispatch()
    let level = useSelector(state => state.currentEligibleLevel)
    let typelevels = useSelector(state => state.typelevels)
    let selectedType = useSelector(state => state.characterType)
    let selectedLevels = useSelector(state => state.characterTypeLevel)
    let filteredlevels = typelevels.filter(typelevel => typelevel.level === level && typelevel.type_id === selectedType.id && !selectedLevels.some(selectedLevel => selectedLevel === typelevel))
    let selectOptions = 'SELECT_TYPE_LEVEL'
  
    return (
        <div className="selection_options">
          
             <div className="character_box ">
             <div>Choose Two of the following Abilities:</div>
                 {filteredlevels.map(typelevel=> <CharacterOptionModal option={typelevel} selectOptions={selectOptions}/>)}
              
          </div>

        </div>
      );
  }
  
  export default CharacterTypeLevel;