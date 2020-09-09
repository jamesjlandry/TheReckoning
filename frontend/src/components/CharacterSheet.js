import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import {useState} from 'react';
import CharacterSheetClickableModal from '../components/CharacterSheetClickableOptionModal'
import CharacterSheetClickableOptionModal from '../components/CharacterSheetClickableOptionModal';

function CharacterSheet() {
    const dispatch = useDispatch()
    const character = useSelector(state => state.selectedCharacter)
    let race = useSelector(state => state.characterRace)
    let type = useSelector(state => state.characterType)
    let blessing = useSelector(state => state.characterBlessing)
    let skills = useSelector(state => state.characterSkills)
    let armor = useSelector(state => state.characterArmor)
    let weapons = useSelector(state => state.characterWeapons)
    let equipment = useSelector(state => state.characterEquipment)
    let charms = useSelector(state => state.characterCharms)
    let artifacts = useSelector(state => state.characterArtifacts)
    let typeAbilities = useSelector(state => state.characterTypeLevel)
    let blessingAbilities = useSelector(state => state.characterBlessingLevel)
    let curseAbilities = useSelector(state => state.characterCurseLevel)
    let strength_pool = useSelector(state => state.characterStrengthPool)
    let dexterity_pool = useSelector(state => state.characterDexterityPool)
    let wisdom_pool = useSelector(state => state.characterWisdomPool)
    let charisma_pool = useSelector(state => state.characterCharismaPool)
    let magic_pool = useSelector(state => state.characterMagicPool)
    let armor_cost = useSelector(state => state.characterArmorCost)
    let recovery_pool = useSelector(state => state.characterRecoveryPool)
    let characterHP = useSelector(state => state.characterHP)
    let characterCoins = useSelector(state => state.coins)
    let characterBackground = useSelector(state => state.characterBackground)
    let characterNotes = useSelector(state => state.characterNotes)
    let armorIds = armor.map(armor => armor.id)
    let skillIds = skills.map(skill => skill.id)
    let curseLevelIds = curseAbilities.map(curse => curse.id)
    let typeLevelIds = typeAbilities.map(type => type.id)
    let blessingLevelIds = blessingAbilities.map(blessing => blessing.id)
    let equipmentIds = equipment.map(equipment => equipment.id)
    let weaponIds = weapons.map(weapon => weapon.id)
    let characterXP = useSelector(state => state.characterXP)
    const characterStrength = useSelector(state => state.selectedCharacter.strength)
    const characterDexterity = useSelector(state => state.selectedCharacter.dexterity)
    const characterCharisma = useSelector(state => state.selectedCharacter.charisma)
    const characterWisdom = useSelector(state => state.selectedCharacter.wisdom)
    const characterMagic = useSelector(state => state.selectedCharacter.magic)
    const characterCurrentLevel = useSelector(state => state.selectedCharacter.level)
    const maxRecoveryPool = Math.floor(( 7 + characterCurrentLevel) / 2)
    const maxMagicPool = Math.floor(characterMagic / 2)
    const maxStrengthPool = Math.floor(characterStrength / 2)
    const maxCharismaPool = Math.floor(characterCharisma / 2)
    const maxWisdomPool = Math.floor(characterWisdom / 2)
    const maxDexterityPool = Math.floor(characterDexterity / 2)
    const maxHP = character.strength + 20
    
    let currentEligibleLevel = useSelector(state => state.currentEligibleLevel)
    let levelUp = currentEligibleLevel > character.level //useSelector(state => state.levelUp)

   if(characterXP >= 100 &&  currentEligibleLevel === 1 ) {
       dispatch({type: "SET_LEVEL_UP", characterXP: characterXP})
   } 
   else if(characterXP >= 200 && currentEligibleLevel === 2 && character.level === 2) {
       dispatch({type: "SET_LEVEL_UP", characterXP: characterXP})
   }
   else if(characterXP >= 300  && currentEligibleLevel === 3 && character.level === 3) {
    dispatch({type: "SET_LEVEL_UP", characterXP: characterXP})
    }
    else if(characterXP >= 400  && currentEligibleLevel === 4 && character.level === 4) {
        dispatch({type: "SET_LEVEL_UP", characterXP: characterXP})
    }
    else if(characterXP >= 500  && currentEligibleLevel === 5 && character.level === 5) {
        dispatch({type: "SET_LEVEL_UP", characterXP: characterXP})
    }
    else if(characterXP >= 600  && currentEligibleLevel === 6 && character.level === 6) {
        dispatch({type: "SET_LEVEL_UP", characterXP: characterXP})
    }
    else if(characterXP >= 700 && currentEligibleLevel === 7 && character.level === 7) {
        dispatch({type: "SET_LEVEL_UP", characterXP: characterXP})
    }
    else if(characterXP >= 800 && currentEligibleLevel === 8 && character.level === 8) {
        dispatch({type: "SET_LEVEL_UP", characterXP: characterXP})
    }

    let handleUpdate = async (e) => {
        e.preventDefault();
        let updatedCharacter = {
            name: character.name,
            image: '',
            level: character.level,
            coins: characterCoins,
            background: characterBackground,
            notes: characterNotes,
            strength: character.strength,
            charisma: character.charisma,
            wisdom: character.wisdom,
            dexterity: character.dexterity,
            magic: character.magic,
            recovery: 4,
            strength_pool: strength_pool,
            dexterity_pool: dexterity_pool,
            wisdom_pool: wisdom_pool,
            charisma_pool: charisma_pool,
            magic_pool: magic_pool,
            xp: characterXP,
            hp: characterHP,
            status: '',
            recovery_pool: recovery_pool,
            armor_cost: 0,
            armor_ids: armorIds,
            weapon_ids: weaponIds,
            equipment_ids: equipmentIds,
            type_level_ids: typeLevelIds,
            blessing_level_ids: blessingLevelIds,
            curse_level_ids: curseLevelIds,
            skill_ids: skillIds,
        }
        let response = await fetch(`http://localhost:3000/characters/${character.id}`, {
            method: "PATCH", 
            headers: {
                accept: 'application/json',
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedCharacter)
        })
        let selectedCharacter = await response.json()
        if (selectedCharacter.errors) {
            console.log(selectedCharacter)
        } 
        dispatch({type: 'UPDATE_CHARACTERS', selectedCharacter: selectedCharacter})
        }

//    let levelUpTable = { 
//     100: function() { if (currentEligibleLevel === 1)dispatch({type: "SET_LEVEL_UP"})},
//     200: function() { if (currentEligibleLevel === 2) dispatch({type: "SET_LEVEL_UP"})},
//     300: function() { if (currentEligibleLevel === 3) dispatch({type: "SET_LEVEL_UP"})},
//     400: function() { if (currentEligibleLevel === 4) dispatch({type: "SET_LEVEL_UP"})}
//    }

//  function processLevelUp(command)  {
//        levelUpTable[command]()
//    }


// Name Race Type as one line as description of character for the title.

    return(
        <div className='character_sheet_modal_impersonation_background'>
            <div className='character_sheet_modal_impersonation'>
             {
                levelUp ?
            <button 
            className="test_button" 
            onClick={() => {dispatch({type: "LEVEL_UP_MODE" }) }}>
                Level Up
            </button>
            :
            <button 
            className="test_button" 
            disabled>
            Level Up
            </button>
            }   
            {/* <button>
            Ye Olde Item Shop
            </button> */}
        
            <button className="test_button"onClick={event => handleUpdate(event)}>
                Save and Close
            </button>
            
        <form>
            <div className="character_sheet_container">
            <div className="character_info">
                <div className="character_main_info_box">
                {character.name}
                </div>
              
                <div className="character_main_info_box">
                Level {character.level}
                </div >
                <CharacterSheetClickableOptionModal option={race} /> 
                <CharacterSheetClickableOptionModal option={type} /> 
                <CharacterSheetClickableOptionModal option={blessing} /> 
                <div className="character_main_info_box">
                    Cursed with the {blessing.curse_name}
                </div>

               
                </div>
                
                <div className="stats_box">
                <div className="single_stat_box">
                <div className="character_info_box"> 
                    <label>XP: </label>
                    <input
                    className="input" 
                    onChange={(event) => {
                        dispatch({type: "SET_XP", xp: parseInt(event.target.value)})
                        //   setXP(parseInt(event.target.value)) 
                        //   processLevelUp(event.target.value)
                        }} 
                    id="XP"
                    name="XP" 
                    placeholder={character.xp}
                    type="number" 
                    value={characterXP}
                    min={character.xp}
                    max='900'
                    />
                    </div>
                </div>
                <div className="single_stat_box">
                 <div className="character_info_box">
                    <label>HP: </label>
                    <input
                        className="input" 
                        onChange={(event) => {
                            dispatch({type: "SET_HP", hp: parseInt(event.target.value)})
                            }} 
                        id="HP"
                        name="HP" 
                        placeholder={character.hp}
                        type="number" 
                        value={characterHP}
                        min='0'
                        max={maxHP}
                        />
                        </div>
                    </div>
                    <div className="single_stat_box">
                    <div className="character_info_box">Strength {character.strength}</div>
                    <div className="character_info_box">
                        <label>Pool: </label>
                        <input
                        className="input" 
                        onChange={(event) => {
                            dispatch({type: "SET_STRENGTH_POOL", strengthPool: parseInt(event.target.value)})
                            }} 
                        id="strength_pool"
                        name="strength_pool" 
                        placeholder={character.strength_pool}
                        type="number" 
                        value={strength_pool}
                        min='0'
                        max={maxStrengthPool}
                        />
                        </div>
                    </div>
                    <div className="single_stat_box">
                    <div className="character_info_box">Dexterity {character.dexterity}</div>
                        <div className="character_info_box">
                            <label>Pool: </label>
                            <input
                            className="input" 
                            onChange={(event) => {
                                dispatch({type: "SET_DEXTERITY_POOL", dexterityPool: parseInt(event.target.value)}) 
                                }} 
                            id="dexterity_pool"
                            name="dexterity_pool" 
                            placeholder={character.dexterity_pool}
                            type="number" 
                            defaultValue={dexterity_pool}
                            min='0'
                            max={maxDexterityPool}
                            />
                            </div>
                        </div>  
                        <div className="single_stat_box">
                    <div className="character_info_box">Charisma {character.charisma}</div>

                        <div className="character_info_box">
                            <label>Pool: </label>
                            <input
                            className="input" 
                            onChange={(event) => {
                                dispatch({type: "SET_CHARISMA_POOL", charismaPool: parseInt(event.target.value)}) 
                                }} 
                            id="charisma_pool"
                            name="charisma_pool" 
                            placeholder={character.charisma_pool}
                            type="number" 
                            value={charisma_pool}
                            min='0'
                            max={maxCharismaPool}
                            />
                        </div>
                        </div>
                        <div className="single_stat_box">
                    <div className="character_info_box">Wisdom {character.wisdom}</div>
                        <div className="character_info_box">
                            <label>Pool: </label>
                            <input
                            className="input" 
                            onChange={(event) => {
                                dispatch({type: "SET_WISDOM_POOL", wisdomPool: parseInt(event.target.value)}) 
                                }} 
                            id="wisdom_pool"
                            name="wisdom_pool" 
                            placeholder={character.wisdom_pool}
                            type="number" 
                            value={wisdom_pool}
                            min='0'
                            max={maxWisdomPool}
                            />
                        </div>
                        </div>
                        <div className="single_stat_box">
                    <div className="character_info_box">Magic {character.magic}</div>
                        <div className="character_info_box">
                            <label>Pool: </label>
                            <input
                            className="input" 
                            onChange={(event) => {
                                dispatch({type: "SET_MAGIC_POOL", magicPool: parseInt(event.target.value)}) 
                                }} 
                            id="magic_pool"
                            name="magic_pool" 
                            placeholder={character.magic_pool}
                            type="number" 
                            value={magic_pool}
                            min='0'
                            max={maxMagicPool}
                            />
                            </div>
                        </div>
                        <div className="single_stat_box">
                    <div className="character_info_box">Recovery {character.recovery}</div>
                        <div className="character_info_box">
                            <label>Pool: </label>
                            <input
                            className="input" 
                            onChange={(event) => {
                                dispatch({type: "SET_RECOVERY_POOL", recoveryPool: parseInt(event.target.value)}) 
                                }} 
                            id="recovery_pool"
                            name="recovery_pool" 
                            placeholder={character.recovery_pool}
                            type="number" 
                            value={recovery_pool}
                            min='0'
                            max={maxRecoveryPool}
                            />
                        </div>
                        </div>
                        <div className="character_info_box">
                            <label>Armor Cost: </label>
                            <input
                            className="input" 
                            onChange={(event) => {
                                dispatch({type: "SET_ARMOR_COST", armorCostPool: parseInt(event.target.value)})
                                }} 
                            id="armor_cost"
                            name="armor_cost" 
                            placeholder={character.armor_cost}
                            type="number" 
                            value={armor_cost}
                            min='0'
                            max='3'
                            />
                        </div>
                
                </div>
           
                <div className="skills_box">            
                    <div className="character_sheet_box">
                        Skills: {skills.map(skill => <CharacterSheetClickableOptionModal option={skill} /> )}
                    </div>
                </div>  
                <div className="items_box">
    

                   
                    <div className="item_middle_grid">
                        Armor: {armor.map(armor => <CharacterSheetClickableOptionModal option={armor} /> )}
                    </div>
                    <div className="item_middle_grid">
                        Weapons: {weapons.map(weapon => <CharacterSheetClickableOptionModal option={weapon} /> )}
                    </div>
                    <div>
                        Equipment: {equipment.map(equipment=> <CharacterSheetClickableOptionModal option={equipment} /> )}
                    </div>
                    {/* <div className="item_middle_grid">
                        Magic Items: {charms.map(charm => <CharacterSheetClickableOptionModal option={charm} /> )}
                    </div>
                    <div className="item_middle_grid">
                        Artifacts: {artifacts.map(artifact => <CharacterSheetClickableOptionModal option={artifact} /> )}
                    </div> */}
                    <div className="item_middle_grid">
                        <label>Coins: </label>
                        <input
                        className="input" 
                        onChange={(event) => {
                            dispatch({type: "SET_COINS", coins: parseInt(event.target.value)})
                            }} 
                        id="coins"
                        name="coins" 
                        placeholder={character.coins}
                        type="number" 
                        value={characterCoins}
                        min='0'
                        max='10000'
                        />
                    </div>
                </div>
                <div className="abilities_box">
                <div className="character_sheet_box">
                    Abilities: 
                        <div>
                            {typeAbilities.map(ability => <CharacterSheetClickableOptionModal option={ability} /> )}
                        </div>
                        <div>
                            {blessingAbilities.map(ability => <CharacterSheetClickableOptionModal option={ability} /> )}
                        </div>
                </div>
                <div className="character_sheet_box">
                    Curse effects: 
                        <div>
                            {curseAbilities.map(ability => <CharacterSheetClickableOptionModal option={ability} /> )}
                        </div>
                </div>
                </div>
                <div className="notes_box">
                <div className="character_sheet_box">
                    Background: <div></div>
                        <textarea
                            className="notes"
                            
                            name={character.background}
                            value={characterBackground}
                            rows='990'
                            cols='600'

                            onChange={(event) => dispatch({type: "SET_BACKGROUND", characterBackground: event.target.value})}
                        >

                            
                        </textarea>
                </div>

                <div className="character_sheet_box">
                    Notes: <div></div>
                        <textarea
                            className="notes"
                            name={character.notes}
                            value={characterNotes}
                            onChange={(event) => dispatch({type: "SET_NOTES", characterNotes: event.target.value})}
                        >

                            
                        </textarea>
                        </div>
                </div>
                </div>
                
        </form>  

       
       
        </div>
        </div>

    )

                   


}

export default CharacterSheet;