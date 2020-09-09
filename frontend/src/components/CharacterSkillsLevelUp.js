  
import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import {useState} from 'react';
import {Button} from 'semantic-ui-react'
import LevelUpCheckBox from '../components/CheckBox'




function CharacterSkillsLevelUp() {
    
    let characterLevel = useSelector(state => state.characterLevel)
    let selectedCharacter = useSelector(state => state.selectedCharacter)
    let levelUpSkills = useSelector(state => state.levelUpSkills)
    let currentSkills = useSelector(state => state.characterSkills)
    let skills = useSelector(state => state.skills)
    const currentSkillIDs = levelUpSkills.map(skill => skill.id)

    let filteredSkills = skills.filter(skill => !currentSkillIDs.includes(skill.id) &&
    skill.name !== "Medium Blades" && skill.name !== "Heavy Blades" && skill.name !== "Medium Bludgeon" 
    && skill.name !== "Heavy Bludgeon" && skill.name !== "Medium Ranged" && skill.name !== "Heavy Ranged")
    let characterType = useSelector(state => state.characterType)
   
    let availableSkills = 2 - (currentSkills.length - levelUpSkills.length)
    

    let dispatch = useDispatch()
    const [characterSkills, setCharacterSkills] = useState([])
    const [remainingSkills, setRemainingSkills] = useState(availableSkills)
    

   
    let handleChange = (event, skill) => {
        if (event.target.checked && remainingSkills !== 0) {

               let skill = filteredSkills.find(e => parseInt(event.target.value) === e.id)
                console.log(characterSkills)
                setCharacterSkills(
                    
                        [...characterSkills, skill]
                    
                )
                
                   
                setRemainingSkills(
                    remainingSkills - 1
                )
           
        } else if (!event.target.checked) {
            
                let skill = filteredSkills.find(e => parseInt(event.target.value) === e.id)
                    characterSkills.splice(characterSkills.indexOf(skill), 1)
              
                setRemainingSkills(
                    remainingSkills + 1
                )
        }

    }
    let handleSubmit = (e) => {
        e.preventDefault();
            dispatch({type: "SET_SKILLS", characterSkills: characterSkills})
        }
  
    return (
      <div className="selection_options">
             <div className="skill_select_box">
             {remainingSkills === 0 ? 
                <button className='test_button' type='submit'>
                    Select Skills
                </button>
                :
                <button className='test_button' type='button' disabled>
                    Select Skills
                </button>}
             <form onSubmit={event => handleSubmit(event)}>
                <div>Available Skills: {remainingSkills}</div>
                 {filteredSkills.map(skill => 
                 <LevelUpCheckBox handleChange={handleChange} count={remainingSkills} skill={skill}/>
                    
                
                )}
                   
            
                
                </form>
              
          </div>

        </div>
    );
  }
  
  
  export default CharacterSkillsLevelUp;