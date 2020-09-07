import React from 'react'
import { Button, Icon, Image, Modal } from 'semantic-ui-react'
import { useSelector, useDispatch } from 'react-redux';

const SkillOptionModal = (props) => {
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
      
      <Modal.Content  scrolling>

        <Modal.Description>
        <div> <strong>{props.option.name}</strong></div>
          <p >
           {props.option.text}
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

export default SkillOptionModal