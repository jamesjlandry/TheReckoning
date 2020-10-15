import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import NewCharacterSubmit from '../components/NewCharacterComponents/NewCharacterSubmit';
import LevelUpCharacterSubmit from '../components/EditCharacterComponents/LevelUpCharacterSubmit'


function CharacterBuild() {

   let currentEligibleLevel = useSelector(state => state.currentEligibleLevel)
    return (
        <div className="selection_options">
             <div className="character_box ">
            {
                currentEligibleLevel === 1 
                ?
                <NewCharacterSubmit/>
                :
                <LevelUpCharacterSubmit/>
            }
              
          </div>

        </div>
      );
  }
  
  export default CharacterBuild;