import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import {useState} from 'react';
import CharacterBox from '../containers/CharacterBox'


function CharacterIndex() {
    let createCharacter = useSelector(state => state.createCharacter)
    let editCharacter = useSelector(state => state.editCharacter)
    let defaultPage = useSelector(state => state.defaultPage)
    let characters = useSelector(state => state.characters.filter(character => character.user_id === state.currentUser.id))
    let dispatch = useDispatch()

  

    let getCharacter =  async (character) => {
        let response = await fetch(`http://localhost:3000/characters/${character.id}`)
        let selectedCharacter = await response.json()
        console.log(selectedCharacter)
        dispatch({ type: 'SELECT_CHARACTER', selectedCharacter: selectedCharacter})
    }
    return (
        <React.Fragment>
            <div className="sidenav">

            <a className='item' onClick={() => { dispatch({ type: 'CREATE_CHARACTER_MODE'}) }}>New Character   <i className='plus icon'></i></a>

            <br></br>
                    {characters.map(character => 
            
                    <a className='item' onClick={() => {getCharacter(character)}}>
                    {character.name}
                    </a>
                    )}
            
           
                </div>
               

                
                <div >
                {createCharacter ? <CharacterBox/> : null}
                {editCharacter ? <CharacterBox/> : null}
                {defaultPage ? <div className="edit_create_character_box"></div> : null}
                </div>
        </React.Fragment>
        
            
    );
}

export default CharacterIndex;