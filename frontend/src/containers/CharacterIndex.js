import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import CharacterBox from '../containers/CharacterBox'


function CharacterIndex() {
    let createCharacter = useSelector(state => state.createCharacter)
    let editCharacter = useSelector(state => state.editCharacter)
    let characters = useSelector(state => state.characters.filter(character => character.user_id === state.currentUser.id))
    let dispatch = useDispatch()
    return (
        <div className="character_index">
            <button onClick={() => { dispatch({ type: 'CREATE_CHARACTER_MODE'}) }}>New Character</button>
               {characters.map(character => <div onClick={() => { dispatch({ type: 'SELECT_CHARACTER', selectedCharacter: character }) }} >
            <h1>{character.name}</h1>
            </div>)}
            <div className="edit_create_character_box">
            {createCharacter ? <CharacterBox/> : null}
            {editCharacter ? <CharacterBox/> : null}
            </div>
            
        </div>
    );
}

export default CharacterIndex;