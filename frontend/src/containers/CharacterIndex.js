import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import CharacterBox from '../containers/CharacterBox'


function CharacterIndex() {
    let createCharacter = useSelector(state => state.createCharacter)
    let editCharacter = useSelector(state => state.editCharacter)
    let characters = useSelector(state => state.characters.filter(character => character.user_id === state.currentUser.id))
    let dispatch = useDispatch()

  

    let getCharachter =  async (character) => {
        let response = await fetch(`http://localhost:3000/characters/${character.id}`)
        let selectedCharacter = await response.json()
        console.log(selectedCharacter)
        dispatch({ type: 'SELECT_CHARACTER', selectedCharacter: character })
    }
    return (
        <React.Fragment>
            <div className="ui inverted vertical menu">
            <a className ='active item'></a> 
                    {characters.map(character => 
            
                    <a className='item' onClick={() => {getCharachter(character)}}>
                    {character.name}
                    </a>
                    )}
            
            <a className='item' onClick={() => { dispatch({ type: 'CREATE_CHARACTER_MODE'}) }}>New Character</a>
                </div>
               

                
                <div className="edit_create_character_box">
                {createCharacter ? <CharacterBox/> : null}
                {editCharacter ? <CharacterBox/> : null}
                </div>
        </React.Fragment>
        
            
    );
}

export default CharacterIndex;