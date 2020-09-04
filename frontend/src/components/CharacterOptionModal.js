import React from 'react'
import { Button, Icon, Image, Modal } from 'semantic-ui-react'
import { useSelector, useDispatch } from 'react-redux';

const CharacterOptionModal = (props) => {
  const [open, setOpen] = React.useState(false)
  const dispatch = useDispatch()
  const selectOptions = props.selectOptions

  return (
    <Modal
      open={open}
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
  trigger={<Button>{props.option.name}</Button>}
    >
      <Modal.Header>{props.option.name}</Modal.Header>
      <Modal.Content image scrolling>

        <Modal.Description>
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
        <Button onClick={() => {setOpen(false)
           dispatch({type: selectOptions, option: props.option})}} primary>
          Choose this Option <Icon name='chevron right' />
        </Button>
        <Button onClick={() => setOpen(false)} primary>
          Close <Icon name='chevron right' />
        </Button>
      </Modal.Actions>
    </Modal>
  )
}

export default CharacterOptionModal