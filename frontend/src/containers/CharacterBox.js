import React from 'react';
import {useState} from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import NewCharacter from '../components/NewCharacter'
import SelectedCharacter from '../components/SelectedCharacter'



function CharacterBox() {
    let character = useSelector(state => state.selectedCharacter)
    let createCharacter = useSelector(state => state.createCharacter)
    let dispatch = useDispatch()
    return (
        <div className="character_box">
            {createCharacter ? <NewCharacter/> : <SelectedCharacter/>}
                
        </div>
    );
}

export default CharacterBox;