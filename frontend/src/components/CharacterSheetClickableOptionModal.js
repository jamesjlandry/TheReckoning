import React from 'react'
import {Icon, Image, Modal } from 'semantic-ui-react'
import { useSelector, useDispatch } from 'react-redux';

const CharacterSheetClickableOptionModal = (props) => {
  const [open, setOpen] = React.useState(false)
  const dispatch = useDispatch()
  

  return (
    <Modal
      open={open}
      size="mini"

      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
  trigger={<div className="character_info_box_clickable">{props.option.name}</div>}
    >
      <Modal.Content  scrolling>

        <Modal.Description >
          <p >
           {props.option.text}
          </p>
          <br></br>
          <p>
            {props.option.curse_name ?
            <div>Along with  {props.option.name} you have the following Curse:<br></br>
            <br></br>
              <strong>{props.option.curse_name}</strong>
            <br></br>
            <br></br>
            {props.option.curse_text}
            </div>
            :
            null
            }
          </p>
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <button onClick={() => setOpen(false)} primary>
          Close <Icon name='chevron right' />
        </button>
      </Modal.Actions>
    </Modal>
  )
}

export default CharacterSheetClickableOptionModal