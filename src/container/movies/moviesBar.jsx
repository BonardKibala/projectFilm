import React, { useState } from 'react'
import {Menu,Button } from 'semantic-ui-react'

const Moviesbar=()=> {
  const [activeItem,setAtiveItem]=useState('home')

  const handleItemClick = (e, { name }) => setAtiveItem(name)

    return (
      <Menu inverted>
        <Menu.Item>
        <Button centered color='green' basic>Comedy</Button>
        </Menu.Item>
        <Menu.Item>
        <Button centered color='green' basic>Top films</Button>
        </Menu.Item>
       <Menu.Item>
        <Button centered color='green' basic>Films populaires</Button>
        </Menu.Item>
        <Menu.Item>
        <Button centered color='green' basic>Séries</Button>
        </Menu.Item>
      </Menu>
    )
  }
  export default Moviesbar;