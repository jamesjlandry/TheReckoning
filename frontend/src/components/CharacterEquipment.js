import React from 'react'

function CharacterEquipment() {
    let loggedIn = useSelector(state => state.loggedIn)
    let dispatch = useDispatch()

  
    
  
    return (
      <div className="selection_options">
           <div className="character_box ">
            <button onClick={() => dispatch()}>New Character</button>
               {characters.map(character => <div onClick={() => { dispatch({ type: 'SELECT_CHARACTER', selectedCharacter: character }) }} >
            <h1>{character.name}</h1>
            </div>)}
            
        </div>
    );
      </div>
    );
  }
  
  export default CharacterEquipment;