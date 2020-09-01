import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import {useState} from 'react';
import {Button} from 'semantic-ui-react'
import BlessingOptionModal from './BlessingOptionModal';


function CharacterBuild() {
    let dispatch = useDispatch()
    let currentUser = useSelector(state => state.currentUser)
    let characterStats = useSelector(state => state.characterStats)
    let characterType = useSelector(state => state.characterType)
    let characterRace = useSelector(state => state.characterRace)
    let characterBlessing = useSelector(state => state.characterBlessing)
    let characterEquipment = useSelector(state => state.characterEquipment)
    let characterArmor = useSelector(state => state.characterArmor)
    let characterWeapons = useSelector(state => state.characterWeapons)
    let characterLevel = useSelector(state => state.characterLevel)
    let coins = useSelector(state => state.coins)
    let characterBlessingLevel = useSelector(state => state.characterBlessingLevel)
    let characterCurseLevel = useSelector(state => state.characterCurseLevel)
    let strengthPool = Math.floor(characterStats.strength / 2)
    let dexterityPool = Math.floor(characterStats.dexterity / 2)
    let charismaPool = Math.floor(characterStats.charisma / 2)
    let wisdomPool = Math.floor(characterStats.wisdom / 2)
    let magicPool = Math.floor(characterStats.magic / 2)
    const [name, setName] = useState('');


    let handleSubmit = async (e) => {
        e.preventDefault();
        let newCharacter = {
            name: name,
            type_id: characterType.id,
            blessing_id: characterBlessing.id,
            race_id: characterRace.id,
            user_id: currentUser.id,
            level: 1,
            image: '',
            coins: coins,
            background: '',
            notes: '',
            strength: characterStats.strength,
            charisma: characterStats.charisma,
            wisdom: characterStats.wisdom,
            dexterity: characterStats.dexterity,
            magic: characterStats.magic,
            recovery: 4,
            strength_pool: strengthPool,
            dexterity_pool: dexterityPool,
            wisdom_pool: wisdomPool,
            charisma_pool: charismaPool,
            magic_pool: magicPool,
            starting_stat_id: 1,
            xp: 0,
            hp: 20,
            status: '',
            recovery_pool: 4,
            armor_cost: 0,
            equipped_armor_id: null,
        }
        let response = await fetch('http://localhost:3000/characters', {
            'credentials': 'include',
            method: "POST", 
            headers: {
                accept: 'application/json',
                'content-type': 'application/json'
            },
            body: JSON.stringify(newCharacter)
        })
        let selectedCharacter= await response.json()
        if (selectedCharacter !== null) {
            dispatch({type: "SELECT_CHARACTER", selectedCharacter: selectedCharacter})
        } 
        }

    
  
    return (
        <div className="selection_options">
             <div className="character_box ">
             <div> </div>
                <form onSubmit={event => handleSubmit(event)}>
                    <label>Name: </label>
                    <input
                    className="input" 
                    onChange={(event) => setName(event.target.value)} 
                    id="name"
                    name="name" 
                    placeholder="name"
                    type="text" 
                    value={name}
                    />
                    {name !== '' ? 
                    <Button type='submit'>
                        Create Character
                    </Button>
                    :
                    <Button type='button' disabled>
                        Create Character
                    </Button>} 
                </form>  
                    <div>Race: {characterRace.name}</div>
                    <div>Type: {characterType.name}</div>
                    <div>Blessing: {characterBlessing.name}</div>
                    <div>Blessing Abilities: {characterBlessingLevel.map(blessing => <div>{blessing.name}</div>)}</div>
                    <div>Curse: {characterBlessing.curse_name}</div>
                    <div>Curse Effects: {characterCurseLevel.map(curse => <div>{curse.name}</div>)}</div>
                    <div></div>
                    <div>Strength: {characterStats.strength} Strength Pool: {strengthPool}</div>
                    <div>Dexterity: {characterStats.dexterity} Dexterity Pool: {dexterityPool}</div>
                    <div>Wisdom: {characterStats.wisdom} Wisdom Pool: {wisdomPool}</div>
                    <div>Charisma: {characterStats.charisma} Charisma Pool: {charismaPool}</div>
                    <div>Magic: {characterStats.magic} Magic Pool: {magicPool}</div>
                    <div></div>
                    <div>Armor:<div></div> {characterArmor.map(armor => <div>{armor.name}</div>)}</div>
                    <div>Weapons:<div></div> {characterWeapons.map(weapon => <div>{weapon.name}</div>)}</div>
                    <div>Equipment:<div></div> {characterEquipment.map(equipment => <div>{equipment.name}</div>)}</div>
                    <div></div>
              
          </div>

        </div>
      );
  }
  
  export default CharacterBuild;