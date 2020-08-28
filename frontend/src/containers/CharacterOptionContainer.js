import React from 'react'
import { Tab } from 'semantic-ui-react'
import CharacterBlessing from '../components/CharacterBlessing'

const panes = [
    { menuItem: 'Blessing', render: () => <Tab.Pane><CharacterBlessing/></Tab.Pane> },
    { menuItem: 'Tab 2', render: () => <Tab.Pane>Tab 2 Content</Tab.Pane> },
    { menuItem: 'Tab 3', render: () => <Tab.Pane>Tab 3 Content</Tab.Pane> },
  ]
  
  const CharacterOptionContainer = () => <Tab panes={panes} />

export default CharacterOptionContainer