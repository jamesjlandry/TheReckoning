import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import {useState} from 'react';
import {Button} from 'semantic-ui-react'


function CharacterStats() {
    let dispatch = useDispatch()
    
    let startingStats = useSelector(state => state.startingStats)
    let characterType = useSelector(state => state.characterType)
    let characterRace = useSelector(state => state.characterRace)
    let statOptions = startingStats.filter(stat => stat.type_id === characterType.id && stat.race_id === characterRace.id)
    const [name, setName] = useState('');
    const [remainingStats, setRemainingStats] = useState(statOptions[0].remaining_stat_points);
    const [dexterity, setDexterity] = useState(statOptions[0].dexterity)
    const [strength, setStrength] = useState(statOptions[0].strength)
    const [wisdom, setWisdom] = useState(statOptions[0].wisdom)
    const [charisma, setCharisma] = useState(statOptions[0].charisma)
    const [magic, setMagic] = useState(statOptions[0].magic)
    let stats = {
        strength: strength,
        dexterity: dexterity,
        wisdom: wisdom,
        charisma: charisma,
        magic: magic
    }

    let handleSubmit = (e) => {
        e.preventDefault();
            dispatch({type: "SET_STATS", characterStats: stats})
        }
    
  
    return (
        <div className="selection_options">
             <div className="character_box ">
             <div> </div>
                <form onSubmit={event => handleSubmit(event)}>
                    <div>Available Stat Points: {remainingStats} </div>
                 <div></div>
                    <label>Strength: </label>
                 <input
                  className="input" 
                  onChange={(event) => {
                      setStrength(parseInt(event.target.value)) 
                      setRemainingStats(
                         remainingStats - (parseInt(event.target.value) - strength)
                        )
                    }} 
                  id="strength"
                  name="strength" 
                  placeholder={strength}
                  type="number" 
                  value={strength}
                  min={statOptions[0].strength}
                  max={strength + remainingStats}
                />
                    <div></div>
                    <label>Dexterity: </label>
                <input
                  className="input" 
                  onChange={(event) => {
                      setDexterity(parseInt(event.target.value)) 
                      setRemainingStats(
                        remainingStats - (parseInt(event.target.value) - dexterity)
                        )
                    }} 
                  id="dexterity"
                  name="dexterity" 
                  placeholder={dexterity}
                  type="number" 
                  value={dexterity}
                  min={statOptions[0].dexterity}
                  max={dexterity + remainingStats}
                />
                <div></div>
                    <label>Wisdom: </label>
                 <input
                  className="input" 
                  onChange={(event) => {
                      setWisdom(parseInt(event.target.value)) 
                      setRemainingStats(
                         remainingStats - (parseInt(event.target.value) - wisdom)
                        )
                    }} 
                  id="wisdom"
                  name="wisdom" 
                  placeholder={wisdom}
                  type="number" 
                  value={wisdom}
                  min={statOptions[0].wisdom}
                  max={wisdom + remainingStats}
                />
                 <div></div>
                    <label>Charisma: </label>
                 <input
                  className="input" 
                  onChange={(event) => {
                      setCharisma(parseInt(event.target.value)) 
                      setRemainingStats(
                         remainingStats - (parseInt(event.target.value) - charisma)
                        )
                    }} 
                  id="charisma"
                  name="charisma" 
                  placeholder={charisma}
                  type="number" 
                  value={charisma}
                  min={statOptions[0].charisma}
                  max={charisma + remainingStats}
                />
                 <div></div>
                    <label>Magic: </label>
                 <input
                  className="input" 
                  onChange={(event) => {
                      setMagic(parseInt(event.target.value)) 
                      setRemainingStats(
                         remainingStats - (parseInt(event.target.value) - magic)
                        )
                    }} 
                  id="magic"
                  name="magic" 
                  placeholder={magic}
                  type="number" 
                  value={magic}
                  min={statOptions[0].magic}
                  max={magic + remainingStats}
                />
                <div>
                </div>
               
                {remainingStats === 0 ? 
                <Button type='submit'>
                    Set Stats
                </Button>
                :
                <Button type='button' disabled>
                    Set Stats
                </Button>} 
                
                </form>    
              
          </div>

        </div>
      );
  }
  
  export default CharacterStats;