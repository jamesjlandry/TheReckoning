import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import BlessingOptionModal from '../components/BlessingOptionModal'

function CharacterBlessingLevel() {
    let dispatch = useDispatch()
    let currentLevel = useSelector(state => state.characterLevel)
    let level = useSelector(state => state.characterLevel)
    let blessinglevels = useSelector(state => state.blessinglevels)
    let selectedBlessing = useSelector(state => state.characterBlessing)
    let filteredlevels = blessinglevels.filter(blessinglevel => blessinglevel.level === level && blessinglevel.blessing_id === selectedBlessing.id)
    let curselevels = useSelector(state => state.curselevels)
    let selectedCurses = curselevels.filter(curse => curse.blessing_id === selectedBlessing.id)
    let curselevel = selectedCurses.filter(curse => curse.level === currentLevel)
    let thisCurse = curselevel[0]
    
    
  
    return (
        <div className="selection_options">
             <div className="character_box ">
                 {filteredlevels.map(blessinglevel=> <BlessingOptionModal blessingOption={blessinglevel} curseLevel={thisCurse} />)}
              
          </div>

        </div>
      );
  }
  
  export default CharacterBlessingLevel;