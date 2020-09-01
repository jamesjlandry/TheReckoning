import React from 'react'
import { Button, Icon, Image, Modal } from 'semantic-ui-react'
import { useSelector, useDispatch } from 'react-redux';

const BlessingOptionModal = (props) => {
  const [open, setOpen] = React.useState(false)
  const dispatch = useDispatch()
 

  return (
    <Modal
      open={open}
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      trigger={<Button>{props.blessingOption.name}</Button>}
    >
      <Modal.Header>{props.blessingOption.name}</Modal.Header>
      <Modal.Content image scrolling>

        <Modal.Description>
          <p >
           {props.blessingOption.text}
          </p>
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button onClick={() => {setOpen(false)
           dispatch({type: "SELECT_BLESSING_LEVEL", option: {
               blessing: props.blessingOption, 
               curse: props.curseLevel
               }})
               }} primary>
          Choose this Option <Icon name='chevron right' />
        </Button>
        <Button onClick={() => setOpen(false)} primary>
          Close <Icon name='chevron right' />
        </Button>
      </Modal.Actions>
    </Modal>
  )
}

export default BlessingOptionModal