import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import {useState} from 'react';
import {Button} from 'semantic-ui-react'

function CharacterSheet() {

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


    return(
        <React.Fragment>
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
                    max={character.strength_pool}
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
                    max={character.dexterity_pool}
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
                    max={character.wisdom_pool}
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
                    max={character.charisma_pool}
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
                    max={character.magic_pool}
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
                    max={character.recovery_pool}
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
                    max={character.recovery_pool}
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
        
        <Button >
            Save Character
        </Button>
       
        
        </React.Fragment>

    )

                   


}

export default CharacterSheet;