import React from 'react'
import { useSelector } from 'react-redux';

import CharacterSkillsNew from '../components/NewCharacterComponents/CharacterSkillsNew';
import CharacterSkillsLevelUp from '../components/EditCharacterComponents/CharacterSkillsLevelUp';




function CharacterSkill() {
    
    let currentEligibleLevel = useSelector(state => state.currentEligibleLevel)
    
    console.log(currentEligibleLevel)
    
    return (
      <div className="selection_options">
             <div className="character_box ">
             
                {currentEligibleLevel === 1 
                ? 
                <CharacterSkillsNew />
                :
                <CharacterSkillsLevelUp />
                } 
             
              
          </div>

        </div>
    );
  }
  
  
  export default CharacterSkill;

 