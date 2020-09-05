import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import {useState} from 'react';
import {Button} from 'semantic-ui-react'
import CheckBox from '../components/CheckBox'
import CharacterSkillsNew from '../components/CharacterSkillsNew';
import CharacterSkillsLevelUp from '../components/CharacterSkillsLevelUp';




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

 