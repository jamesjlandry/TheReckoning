import React from 'react';
import { useSelector } from 'react-redux';
import CharacterOptionContainer from '../containers/CharacterOptionContainer'
import CharacterSheet from '../components/CharacterSheet'


function CharacterBox() {
    let createCharacter = useSelector(state => state.createCharacter)
    return (
        <div className="character_main_box">
            {createCharacter ? <CharacterOptionContainer/> : <CharacterSheet/>}      
        </div>
    );
}

export default CharacterBox;