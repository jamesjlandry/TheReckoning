import React from 'react'
import {Icon, Modal, Button } from 'semantic-ui-react'

const CharacterSheetClickableOptionModal = (props) => {
  const [open, setOpen] = React.useState(false)
  

  return (
    <Modal
      open={open}
      size="mini"
      basic
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
          {props.option.damage ?
          <div> Damage: 1d6 + {props.option.damage}</div>
          : null
          }
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
        <Button basic  color="red"  onClick={() => setOpen(false)} >
          Close <Icon name='chevron right' />
        </Button >
      </Modal.Actions>
    </Modal>
  )
}

export default CharacterSheetClickableOptionModal