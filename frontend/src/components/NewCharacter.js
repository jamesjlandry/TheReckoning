import React from 'react';
import {useState} from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import CharacterBlessing from '../components/CharacterBlessing'



function NewCharacter() {
    const [name, setName] = useState('')
    const [type, setType] = useState({})
    const [blessing, setBlessing] = useState({})
    const [curse, setCurse] = useState({})
    const [image, setImage] = useState('')
    const [coins, setCoins] = useState(10)
    const [background, setBackground] = useState('')
    const [notes, setNotes] = useState('')
    let characterSheet = useSelector(state => state.characterSheet)
    let raceModal = useSelector(state => state.raceModal)
    let typeModal = useSelector(state => state.typeModal)
    let blessingModal = useSelector(state => state.blessingModal)
    let equipmentModal = useSelector(state => state.equipmentModal)
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
            <div>
                {blessingModal ? <CharacterBlessing/> : null }
            </div>
        </div>
    );
}

export default NewCharacter;