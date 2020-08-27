import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';



function SelectedCharacter() {
    let character = useSelector(state => state.selectedCharacter)
    let dispatch = useDispatch()
    return (
        <div className="character_box">
            <span>
                <div onClick={() => dispatch({type: "SELECT_RACE_MODAL"})}>Race</div>
                <div onClick={() => dispatch({type: "SELECT_TYPE_MODAL"})} >Type</div>
                <div onClick={() => dispatch({type: "SELECT_BLESSING_MODAL"})}>Blessing</div>
                <div onClick={() => dispatch({type: "SELECT_EQUIPMENT_MODAL"})}>Equipment</div>
                <div onClick={() => dispatch({type: "SELECT_CHARACTER_SHEET_MODAL"})}>Character Sheet</div>
            </span>
                
        </div>
    );
}

export default SelectedCharacter;