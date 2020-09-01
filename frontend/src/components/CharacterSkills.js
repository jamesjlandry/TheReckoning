import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import {useState} from 'react';
import {Button} from 'semantic-ui-react'


function CharacterSkill() {
    let skills = useSelector(state => state.skills)
    let race = useSelector(state => state.characterRace)
    let type = useSelector(state => state.characterType)
    let dispatch = useDispatch()
    let selectOptions = 'SELECT_SKILLS'
  
    const [characterSkills, setCharacterSkills] = useState(null)
   

    let handleSubmit = (e) => {
        e.preventDefault();
            dispatch({type: "SET_STATS", characterSkills: characterSkills})
        }
  
    return (
      <div className="selection_options">
             <div className="character_box ">
             <form onSubmit={event => handleSubmit(event)}>
                    <div>Available Skills: </div>
                 {skills.map(skill => <div>
                    <label>{skill.name}: </label>
                    <div>{skill.text}</div>
                    <input
                        className="input" 
                        onChange={(event) => 
                            setCharacterSkills(event.target.value) 
                            } 
                        id={skill.name}
                        name={skill.name}
                        placeholder={skill.name}
                        type="checkbox" 
                        value={skill}
                    /></div>
                )}
                   
               {characterSkills ? 
                <Button type='submit'>
                    Select Skills
                </Button>
                :
                <Button type='button' disabled>
                    Select Skills
                </Button>}
                
                </form>
              
          </div>

        </div>
    );
  }
  
  export default CharacterSkill;