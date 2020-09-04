import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import {useState} from 'react';
import {Button} from 'semantic-ui-react'

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
    let armorIds = armor.map(armor => armor.id)
    let skillIds = skills.map(skill => skill.id)
    let curseLevelIds = curseAbilities.map(curse => curse.id)
    let typeLevelIds = typeAbilities.map(type => type.id)
    let blessingLevelIds = blessingAbilities.map(blessing => blessing.id)
    let equipmentIds = equipment.map(equipment => equipment.id)
    let weaponIds = weapons.map(weapon => weapon.id)
    const characterStrength = useSelector(state => state.selectedCharacter.strength)
    const characterDexterity = useSelector(state => state.selectedCharacter.dexterity)
    const characterCharisma = useSelector(state => state.selectedCharacter.charisma)
    const characterWisdom = useSelector(state => state.selectedCharacter.wisdom)
    const characterMagic = useSelector(state => state.selectedCharacter.magic)
    const characterCurrentLevel = useSelector(state => state.selectedCharacter.level)
    const maxRecoveryPool = Math.floor(( 4 + characterCurrentLevel) / 2)
    const maxMagicPool = Math.floor(characterMagic / 2)
    const maxStrengthPool = Math.floor(characterStrength / 2)
    const maxCharismaPool = Math.floor(characterCharisma / 2)
    const maxWisdomPool = Math.floor(characterWisdom / 2)
    const maxDexterityPool = Math.floor(characterDexterity / 2)
    const [strength_pool, setStrengthPool] = useState(character.strength_pool)
    const [dexterity_pool, setDexterityPool] = useState(character.dexterity_pool)
    const [wisdom_pool, setWisdomPool] = useState(character.wisdom_pool)
    const [charisma_pool, setCharismaPool] = useState(character.charisma_pool)
    const [magic_pool, setMagicPool] = useState(character.magic_pool)
    const [recovery_pool, setRecoveryPool] = useState(character.recovery_pool)
    const [armor_cost, setArmorCost] = useState(character.armor_cost)
    const [XP, setXP] = useState(character.xp)
    const [HP, setHP] = useState(character.hp)
    const [coins, setCoins] = useState(character.coins)
    let levelUp = useSelector(state => state.levelUp)
    let characterLevel = useSelector(state => state.characterLevel)

   if(XP >= 100 &&  characterLevel === 1) {
       dispatch({type: "SET_LEVEL_UP", characterXP: XP})
   } 
   else if(XP >= 200 && characterLevel === 2) {
       dispatch({type: "SET_LEVEL_UP", characterXP: XP})
   }
   else if(XP >= 300  && characterLevel === 3) {
    dispatch({type: "SET_LEVEL_UP", characterXP: XP})
    }
    else if(XP >= 400  && characterLevel === 4) {
        dispatch({type: "SET_LEVEL_UP", characterXP: XP})
    }
    else if(XP >= 500  && characterLevel === 5) {
        dispatch({type: "SET_LEVEL_UP", characterXP: XP})
    }
    else if(XP >= 600  && characterLevel === 6) {
        dispatch({type: "SET_LEVEL_UP", characterXP: XP})
    }
    else if(XP >= 700 && characterLevel === 7) {
        dispatch({type: "SET_LEVEL_UP", characterXP: XP})
    }
    else if(XP >= 800 && characterLevel === 8) {
        dispatch({type: "SET_LEVEL_UP", characterXP: XP})
    }

    let handleUpdate = async (e) => {
        e.preventDefault();
        let updatedCharacter = {
            name: character.name,
            image: '',
            coins: coins,
            background: '',
            notes: '',
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
            xp: XP,
            hp: HP,
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
//     100: function() { if (characterLevel === 1)dispatch({type: "SET_LEVEL_UP"})},
//     200: function() { if (characterLevel === 2) dispatch({type: "SET_LEVEL_UP"})},
//     300: function() { if (characterLevel === 3) dispatch({type: "SET_LEVEL_UP"})},
//     400: function() { if (characterLevel === 4) dispatch({type: "SET_LEVEL_UP"})}
//    }

//  function processLevelUp(command)  {
//        levelUpTable[command]()
//    }

    return(
        <React.Fragment>
             {
                levelUp ?
            <Button onClick={() => {dispatch({type: "CREATE_CHARACTER_MODE" }) }}>
                Level Up
            </Button>
            :
            null
            }   
        <form>
            <div>
                Name: {character.name}
            </div>
            <div> 
            <label>XP: </label>
                <input
                  className="input" 
                  onChange={(event) => {
                      setXP(parseInt(event.target.value)) 
                    //   processLevelUp(event.target.value)
                    }} 
                  id="XP"
                  name="XP" 
                  placeholder={character.xp}
                  type="number" 
                  value={XP}
                  min='0'
                  max='900'
                /></div>
            <div>
                Level {character.level}
            </div>
            <div>
                Race {race.name}
            </div>
            <div>
                Type {type.name}
            </div>
            <div>
               {blessing.name}
            </div>
            <div>
                Curse {blessing.curse_name}
            </div>

            <div>
                <label>HP: </label>
                <input
                    className="input" 
                    onChange={(event) => {
                        setHP(parseInt(event.target.value)) 
                        }} 
                    id="HP"
                    name="HP" 
                    placeholder={character.hp}
                    type="number" 
                    value={HP}
                    min='0'
                    max={character.hp}
                    />
            </div>
            <div>
                <label>Coins: </label>
                <input
                  className="input" 
                  onChange={(event) => {
                      setCoins(parseInt(event.target.value)) 
                    }} 
                  id="coins"
                  name="coins" 
                  placeholder={character.coins}
                  type="number" 
                  value={coins}
                  min='0'
                  max='10000'
                /></div>
            <div>Strength {character.strength}</div>
            <div>Dexterity {character.dexterity}</div>
            <div>Charisma {character.charisma}</div>
            <div>Wisdom {character.wisdom}</div>
            <div>Magic {character.magic}</div>
            <div>Recovery {character.recovery}</div>
            
           
                    
                 <div>
                    <label>Strength Pool: </label>
                    <input
                    className="input" 
                    onChange={(event) => {
                        setStrengthPool(parseInt(event.target.value)) 
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
                <div>
                    <label>Dexterity Pool: </label>
                    <input
                    className="input" 
                    onChange={(event) => {
                        setDexterityPool(parseInt(event.target.value)) 
                        }} 
                    id="dexterity_pool"
                    name="dexterity_pool" 
                    placeholder={character.dexterity_pool}
                    type="number" 
                    value={dexterity_pool}
                    min='0'
                    max={maxDexterityPool}
                    />
                </div>

                <div>
                    <label>Wisdom Pool: </label>
                    <input
                    className="input" 
                    onChange={(event) => {
                        setWisdomPool(parseInt(event.target.value)) 
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
                <div>
                    <label>Charisma Pool: </label>
                    <input
                    className="input" 
                    onChange={(event) => {
                        setCharismaPool(parseInt(event.target.value)) 
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
                <div>
                    <label>Magic Pool: </label>
                    <input
                    className="input" 
                    onChange={(event) => {
                        setMagicPool(parseInt(event.target.value)) 
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
            
                <div>
                        <label>Recovery Pool: </label>
                    <input
                    className="input" 
                    onChange={(event) => {
                        setRecoveryPool(parseInt(event.target.value)) 
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
                <div>
                        <label>Armor Cost: </label>
                    <input
                    className="input" 
                    onChange={(event) => {
                        setArmorCost(parseInt(event.target.value)) 
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
                <div>
                    Skills: {skills.map(skill => <div>{skill.name}</div>)}
                </div>
                <div>
                    Armor: {armor.map(armor => <div>{armor.name}</div>)}
                </div>
                <div>
                    Weapons: {weapons.map(weapon => <div>{weapon.name}</div>)}
                </div>
                <div>
                    Equipment: {equipment.map(item => <div>{item.name}</div>)}
                </div>
                <div>
                    Magic Items: {charms.map(charm => <div>{charm.name}</div>)}
                </div>
                <div>
                    Artifacts: {artifacts.map(artifact => <div>{artifact.name}</div>)}
                </div>
                <div>
                    Abilities: 
                        <div>
                            {typeAbilities.map(ability => <div>{ability.name}</div>)}
                        </div>
                        <div>
                            {blessingAbilities.map(ability => <div>{ability.name}</div>)}
                        </div>
                </div>
                <div>
                    Curse effects: 
                        <div>
                            {curseAbilities.map(ability => <div>{ability.name}</div>)}
                        </div>
                </div>
        </form>  

        <Button>
            Ye Olde Item Shop
        </Button>
        
        <Button onClick={event => handleUpdate(event)}>
            Save and Close
        </Button>
       
        
        </React.Fragment>

    )

                   


}

export default CharacterSheet;