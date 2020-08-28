import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import CharacterBox from '../containers/CharacterBox'


function CharacterIndex() {
    let createCharacter = useSelector(state => state.createCharacter)
    let editCharacter = useSelector(state => state.editCharacter)
    let characters = useSelector(state => state.characters.filter(character => character.user_id === state.currentUser.id))
    let dispatch = useDispatch()
    return (
        <React.Fragment>
            <div class="ui inverted vertical menu">
            <a className ='active item'></a> 
                    {characters.map(character => 
            
                    <a className='item' onClick={() => { dispatch({ type: 'SELECT_CHARACTER', selectedCharacter: character }) }}>
                    {character.name}</a>
                    )}
            
    
                </div>
                <a className='item' onClick={() => { dispatch({ type: 'CREATE_CHARACTER_MODE'}) }}>New Character</a>

                
                <div className="edit_create_character_box">
                {createCharacter ? <CharacterBox/> : null}
                {editCharacter ? <CharacterBox/> : null}
                </div>
        </React.Fragment>
        
            
    );
}

export default CharacterIndex;