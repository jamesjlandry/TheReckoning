import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import {useState} from 'react';
import {Button} from 'semantic-ui-react'
import NewCharacterSubmit from '../components/NewCharacterSubmit';
import LevelUpCharacterSubmit from '../components/LevelUpCharacterSubmit'


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