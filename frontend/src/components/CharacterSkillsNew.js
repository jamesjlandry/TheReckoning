import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import {useState} from 'react';
import {Button} from 'semantic-ui-react'
import CheckBox from '../components/CheckBox'




function CharacterSkillsNew() {
    
    let skills = useSelector(state => state.skills)
    let filteredSkills = skills.filter(skill => skill.name !== "Light Blades" &&
    skill.name !== "Medium Blades" && skill.name !== "Heavy Blades" && skill.name !== "Light Bludgeon" && skill.name !== "Medium Bludgeon" 
    && skill.name !== "Heavy Bludgeon" && skill.name !== "Light Ranged" && skill.name !== "Medium Ranged" && skill.name !== "Heavy Ranged")
    let startingStats = useSelector(state => state.startingStats)
    let characterType = useSelector(state => state.characterType)
    let characterRace = useSelector(state => state.characterRace)
    let characterSkills = useSelector(state => state.characterSkills)
    let selectedCharacterAvailability = startingStats.filter(stat => stat.type_id === characterType.id && stat.race_id === characterRace.id)
    let availableSkills = selectedCharacterAvailability[0].skill_slots
    let dispatch = useDispatch()
    const [newCharacterSkills, setCharacterSkills] = useState([])
    const [remainingSkills, setRemainingSkills] = useState(availableSkills - characterSkills.length)
   
   
    let handleChange = (event, skill) => {
        if (event.target.checked && remainingSkills !== 0) {
       

               let skill = filteredSkills.find(e => parseInt(event.target.value) === e.id)
                console.log(characterSkills)
                setCharacterSkills(
                    
                        [...newCharacterSkills, skill]
                    
                )
                
                   
                setRemainingSkills(
                    remainingSkills - 1
                )
               
        } else if (!event.target.checked) {
            
                let skill = filteredSkills.find(e => parseInt(event.target.value) === e.id)
                    characterSkills.splice(newCharacterSkills.indexOf(skill), 1)
              
                setRemainingSkills(
                    remainingSkills + 1
                )
                
        }

    }
    let handleSubmit = (e) => {
        e.preventDefault();
            dispatch({type: "SET_SKILLS", characterSkills: newCharacterSkills})
        }
  
    return (
      <div className="selection_options">
             <div className="skill_select_box">
                 <div>
             {remainingSkills === 0 ? 
                <button className='test_button' type='submit'>
                    Select Skills
                </button>
                :
                <button className='test_button' type='button' disabled>
                    Select Skills
                </button>}
                </div>
             <form onSubmit={event => handleSubmit(event)}>
                <div>Available Skills: {remainingSkills}</div>
                 {filteredSkills.map(skill => 
                 <div className="skills_checkbox_options"><CheckBox handleChange={handleChange} count={remainingSkills}skill={skill}/>
                    
                
                    </div>)}
                   
              
                
                </form>
              
          </div>

        </div>
    );
  }
  
  
  export default CharacterSkillsNew;