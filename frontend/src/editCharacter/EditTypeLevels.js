import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import CharacterOptionModal from '../components/CharacterOptionModal'

function EditTypeLevel() {
    let dispatch = useDispatch()
    let character = useSelector(state => state.selectedCharacter)
    let typeLevels = useSelector(state => state.typeLevels)
    let selectedLevels = useSelector(state => state.characterTypeLevel)
    let filteredlevels = typeLevels.filter(typelevel => typelevel.level === character.level && typelevel.type_id === character.type_id && !selectedLevels.some(selectedLevel => selectedLevel === typelevel))
    let selectOptions = 'SELECT_TYPE_LEVEL'
  
    return (
        <div className="selection_options">
             <div className="character_box ">
                 {filteredlevels.map(typelevel=> <CharacterOptionModal option={typelevel} selectOptions={selectOptions}/>)}
              
          </div>

        </div>
      );
  }
  
  export default EditTypeLevel;