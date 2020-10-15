import React from 'react'
import { useSelector } from 'react-redux';
import BlessingOptionModal from '../SharedComponents/BlessingOptionModal'

function CharacterBlessingLevel() {
    let currentEligibleLevel = useSelector(state => state.currentEligibleLevel)
    let level = useSelector(state => state.currentEligibleLevel)
    let blessingLevels = useSelector(state => state.blessingLevels)
    let selectedBlessing = useSelector(state => state.characterBlessing)
    let filteredLevels = blessingLevels.filter(blessingLevel => blessingLevel.level === level && blessingLevel.blessing_id === selectedBlessing.id)
    let curseLevels = useSelector(state => state.curseLevels)
    let selectedCurses = curseLevels.filter(curse => curse.blessing_id === selectedBlessing.id)
    let curseLevel = selectedCurses.filter(curse => curse.level === currentEligibleLevel)
    let thisCurse = curseLevel[0]
    
    
  
    return (
        <div className="selection_options">
          
             <div className="character_box ">
             <div>Choose One of the following Abilities:</div>
                 {filteredLevels.map(blessingLevel=> <BlessingOptionModal blessingOption={blessingLevel} curseLevel={thisCurse} />)}
              
          </div>

        </div>
      );
  }
  
  export default CharacterBlessingLevel;