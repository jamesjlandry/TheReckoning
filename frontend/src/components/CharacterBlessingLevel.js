import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import CharacterOptionModal from '../components/CharacterOptionModal'

function CharacterBlessingLevel() {
    let dispatch = useDispatch()
    let level = useSelector(state => state.characterLevel)
    let blessinglevels = useSelector(state => state.blessinglevels)
    let selectedBlessing = useSelector(state => state.characterBlessing)
    let filteredlevels = blessinglevels.filter(blessinglevel => blessinglevel.level === level && blessinglevel.blessing_id === selectedBlessing.id)
    let selectOptions = 'SELECT_BLESSING_LEVEL'
    
  
    return (
        <div className="selection_options">
             <div className="character_box ">
                 {filteredlevels.map(blessinglevels=> <CharacterOptionModal option={blessinglevels} selectOptions={selectOptions} />)}
              
          </div>

        </div>
      );
  }
  
  export default CharacterBlessingLevel;