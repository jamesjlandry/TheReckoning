import React from 'react'
import { Button, Icon, Image, Modal } from 'semantic-ui-react'
import { useSelector, useDispatch } from 'react-redux';

const CharacterOptionModal = (props) => {
  const [open, setOpen] = React.useState(false)
  const dispatch = useDispatch()
  const selectOptions = props.selectOptions

  return (
    <Modal
    basic
    size='mini'
      open={open}
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      trigger={<div className="clickable_option" >{props.option.name}</div>}
    >
      <Modal.Content  scrolling>

        <Modal.Description>
          <div> <strong>{props.option.name}</strong></div>
          <br></br>
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
        <Button basic 
        color='red' onClick={() => {setOpen(false)
           dispatch({type: selectOptions, option: props.option})}} primary>
          Choose this Option <Icon name='chevron right' />
        </Button>
        <Button  basic 
        color='red' onClick={() => setOpen(false)} >
          Close <Icon name='chevron right' />
        </Button>
      </Modal.Actions>
    </Modal>
  )
}

export default CharacterOptionModal