import React from 'react'
import { Button, Icon, Image, Modal } from 'semantic-ui-react'
import CharacterBlessing from './CharacterBlessing'

const OptionModal = (props) => {
  const [open, setOpen] = React.useState(false)

  return (
    <Modal
      open={open}
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
  trigger={<Button>{props.blessing.name}</Button>}
    >
      <Modal.Header>{props.blessing.name}</Modal.Header>
      <Modal.Content image scrolling>

        <Modal.Description>
          <p >
            {props.blessing.text}
          </p>
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button onClick={() => setOpen(false)} primary>
          Proceed <Icon name='chevron right' />
        </Button>
      </Modal.Actions>
    </Modal>
  )
}

export default OptionModal