import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';


function CharacterIndex() {
    let characters = useSelector(state => state.characters.filter(character => character.user_id === state.currentUser.id))
    let dispatch = useDispatch()
    return (
        <div>
               {characters.map(character => <div onClick={() => { dispatch({ type: 'SELECT_CHARACTER', selectedCharacter: character }) }} >
            <h1>{character.name}</h1>
            </div>)}
            
        </div>
    );
}

export default CharacterIndex;