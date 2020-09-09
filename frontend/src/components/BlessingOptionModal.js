import React from 'react'
import { Button, Icon, Image, Modal } from 'semantic-ui-react'
import { useSelector, useDispatch } from 'react-redux';

const BlessingOptionModal = (props) => {
  const [open, setOpen] = React.useState(false)
  const dispatch = useDispatch()
 

  return (
    <Modal
    basic
      open={open}
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      trigger={<div className="clickable_option">{props.blessingOption.name}</div>}
    >
     
      <Modal.Content  scrolling>

        <Modal.Description>
        <div> <strong>{props.blessingOption.name}</strong></div>
        <br></br>
        <br></br>
          <p >
           {props.blessingOption.text}
          </p>
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button basic
        color='red'
        onClick={() => {setOpen(false)
           dispatch({type: "SELECT_BLESSING_LEVEL", option: {
               blessing: props.blessingOption, 
               curse: props.curseLevel
               }})
               }} >
          Choose this Option <Icon name='chevron right' />
        </Button>
        <Button 
        basic
        color='red'
        onClick={() => setOpen(false)} >
          Close <Icon name='chevron right' />
        </Button>
      </Modal.Actions>
    </Modal>
  )
}

export default BlessingOptionModal