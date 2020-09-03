import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import {useState} from 'react';
import {Button} from 'semantic-ui-react'
import NewCharacterSubmit from '../components/NewCharacterSubmit';
import LevelUpCharacterSubmit from '../components/LevelUpCharacterSubmit'


function CharacterBuild() {

   let characterLevel = useSelector(state => state.characterLevel)

    
  
    return (
        <div className="selection_options">
             <div className="character_box ">
            {
                characterLevel === 1 
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