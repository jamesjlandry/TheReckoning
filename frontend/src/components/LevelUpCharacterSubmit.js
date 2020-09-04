import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import {useState} from 'react';
import {Button} from 'semantic-ui-react'



function LevelUpCharacterSubmit() {
    let dispatch = useDispatch()
    let characterXP = useSelector(state => state.characterXP)
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
    let characterTypeLevel = useSelector(state => state.characterTypeLevel)
    let strengthPool = Math.floor(characterStats.strength / 2)
    let dexterityPool = Math.floor(characterStats.dexterity / 2)
    let charismaPool = Math.floor(characterStats.charisma / 2)
    let wisdomPool = Math.floor(characterStats.wisdom / 2)
    let magicPool = Math.floor(characterStats.magic / 2)
    let characterSkills = useSelector(state => state.characterSkills)
    let selectedCharacter = useSelector(state => state.selectedCharacter)
    let armorIds = characterArmor.map(armor => armor.id)
    let skillIds = characterSkills.map(skill => skill.id)
    let curseLevelIds = characterCurseLevel.map(curse => curse.id)
    let typeLevelIds = characterTypeLevel.map(type => type.id)
    let blessingLevelIds = characterBlessingLevel.map(blessing => blessing.id)
    let equipmentIds = characterEquipment.map(equipment => equipment.id)
    let weaponIds = characterWeapons.map(weapon => weapon.id)
    const [name, setName] = useState('');
    
    let handleUpdate = async (e) => {
        e.preventDefault()
        let character = {
            name: name,
            level: characterLevel,
            image: selectedCharacter.image,
            coins: coins,
            background: selectedCharacter.background,
            notes: selectedCharacter.notes,
            strength: characterStats.strength,
            charisma: characterStats.charisma,
            wisdom: characterStats.wisdom,
            dexterity: characterStats.dexterity,
            magic: characterStats.magic,
            recovery: selectedCharacter.recovery,
            strength_pool: strengthPool,
            dexterity_pool: dexterityPool,
            wisdom_pool: wisdomPool,
            charisma_pool: charismaPool,
            magic_pool: magicPool,
            xp: characterXP,
            hp: selectedCharacter.hp,
            status: selectedCharacter.status,
            recovery_pool: selectedCharacter.recovery_pool,
            armor_cost: selectedCharacter.armor_cost,
            armor_ids: armorIds,
            weapon_ids: weaponIds,
            equipment_ids: equipmentIds,
            type_level_ids: typeLevelIds,
            blessing_level_ids: blessingLevelIds,
            curse_level_ids: curseLevelIds,
            skill_ids: skillIds,
        }
   
        let response = await fetch(`http://localhost:3000/characters/${selectedCharacter.id}`, {
            method: "PATCH", 
            headers: {
                accept: 'application/json',
                'content-type': 'application/json'
            },
            body: JSON.stringify(character)
        })
        let updatedCharacter = await response.json()
        if (updatedCharacter.errors) {
        } 
        dispatch({type: 'UPDATE_CHARACTERS', selectedCharacter: updatedCharacter})
        }

    
  
    return (
        <div className="selection_options">
             <div className="character_box ">
             <div> </div>
             
                    <form onSubmit={event => handleUpdate(event)}>
                        <label> Name: </label>
                        <input
                        className="input" 
                        onChange={(event) => setName(event.target.value)} 
                        id="name"
                        name="name" 
                        placeholder={selectedCharacter.name}
                        type="text" 
                        value={name}
                        />
                        {name !== '' ? 
                        <Button type='submit'>
                            Level Up
                        </Button>
                        :
                        <Button type='button' disabled>
                            Level Up
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
  
  export default LevelUpCharacterSubmit;