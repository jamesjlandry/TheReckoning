import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import {useState} from 'react';
import {Button} from 'semantic-ui-react'


function CharacterStatsLevelUp() {
    let dispatch = useDispatch()
    let selectedCharacter = useSelector(state => state.selectedCharacter)
    let statPointsAvailable = 2
    const [remainingStats, setRemainingStats] = useState(statPointsAvailable);
    const [dexterity, setDexterity] = useState(selectedCharacter.dexterity)
    const [strength, setStrength] = useState(selectedCharacter.strength)
    const [wisdom, setWisdom] = useState(selectedCharacter.wisdom)
    const [charisma, setCharisma] = useState(selectedCharacter.charisma)
    const [magic, setMagic] = useState(selectedCharacter.magic)
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
                  min={selectedCharacter.strength}
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
                  min={selectedCharacter.dexterity}
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
                  min={selectedCharacter.wisdom}
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
                  min={selectedCharacter.charisma}
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
                  min={selectedCharacter.magic}
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
  
  export default CharacterStatsLevelUp;