import React from 'react'
import { Button, Icon, Image, Modal } from 'semantic-ui-react'
import { useSelector, useDispatch } from 'react-redux';

const EquipmentOptionModal = (props) => {
  const [open, setOpen] = React.useState(false)
  const dispatch = useDispatch()
  const selectOptions = props.selectOptions
  let availableCoins = useSelector(state => state.coins)
  


  return (
    <Modal
    basic
    size='mini'
      open={open}
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
  trigger={<Button>{props.option.name}</Button>}
    >
   
      <Modal.Content image scrolling>

        <Modal.Description>
        <div> <strong>{props.option.name}</strong></div>
          <p >
            {props.option.text}
          </p>
          <p>
              Cost: {props.option.cost} coins
          </p>
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
      { availableCoins >= props.option.cost ? 
        <Button  basic 
        color='red' onClick={() => {
          setOpen(false)
           dispatch({type: selectOptions, option: props.option, cost: props.option.cost})
           }} primary>
          Add Item <Icon name='chevron right' />
        </Button>
        :
        <Button 
        basic 
        color='red'
        type='button'
          disabled>
            Add Item
        </Button>
        }
        <Button basic color='red' onClick={() => setOpen(false)} >
          Close <Icon name='chevron right' />
        </Button>
      </Modal.Actions>
    </Modal>
  )
}

export default EquipmentOptionModal