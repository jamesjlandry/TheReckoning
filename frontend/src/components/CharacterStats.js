import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import CharacterStatsNew from '../components/NewCharacterComponents/CharacterStatsNew';
import CharacterStatsLevelUp from '../components/EditCharacterComponents/CharacterStatsLevelUp'



function CharacterStats() {
    let dispatch = useDispatch()
    
    
    let currentEligibleLevel = useSelector(state => state.currentEligibleLevel)
    
    
  
    return (
        <div className="selection_options">
             <div className="character_box ">
             <div> </div>
               {currentEligibleLevel === 1 

              ? 
               <CharacterStatsNew/>
              :
              <CharacterStatsLevelUp/>
              }
              
          </div>

        </div>
      );
  }
  
  export default CharacterStats;