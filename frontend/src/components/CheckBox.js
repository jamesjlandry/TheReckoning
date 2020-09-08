import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import {useState} from 'react';
import {Button} from 'semantic-ui-react'

function CheckBox(props) {
    const characterSkills = useSelector(state => state.characterSkills)
    const checkedSkill = characterSkills.find(skill => skill.id === props.skill.id)
    const [checked, setChecked] = useState(checkedSkill != null ? true : false)

    return(
        <div>
             <label>{props.skill.name}: </label>
                    <div>{props.skill.text}</div>
                    <input
                        onChange={event => {
                            props.handleChange(event, props.skill)
                            setChecked( !checked )
                        }}
                        checked={checked}
                        id={props.skill.name}
                        name={props.skill.name}
                        placeholder={props.skill.name}
                        type="checkbox" 
                        value={props.skill.id}
                        disabled={!checked && props.count === 0}
                    />
        </div>

    )

                   


}

export default CheckBox;