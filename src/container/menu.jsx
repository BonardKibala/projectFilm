import { Menu, Segment, Search, Header, Icon, Input } from 'semantic-ui-react'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import MoviesList from './movies/moviesList'


const MenuSite = ({ onChange }) => {
    const [activeItem, setActiveItem] = useState('movies')
    const handleItemClick = (name) => {
        setActiveItem(name)
    }
    return (
        <>
            <Segment inverted>
                <Header inverted className='header'>
                    <Link to='/'><h1 className='head'>Biso<span className='span'>Film</span></h1></Link><Icon className='iconFilm' name='film' />
                </Header>
                <Menu inverted pointing secondary >

                    {/* <Link to="/"><Menu.Item name='home' onClick={()=>handleItemClick('home')} active={activeItem === 'home'}/></Link>
                     */}
                    <Link to="/movies"><Menu.Item name='movies' onClick={() => handleItemClick('movies')} active={activeItem === 'movies'} /></Link>

                    <Link to="/series"><Menu.Item name='series' onClick={() => handleItemClick('series')} active={activeItem === 'series'} /></Link>

                    <Menu.Menu position='right' className='search'>
                        <Menu.Item>
                            <Input
                                icon={<Icon name='search' inverted circular link />}
                                placeholder='Rechercher'
                                onChange={onChange}
                            />
                        </Menu.Item>
                    </Menu.Menu>
                </Menu>
            </Segment>

        </>

    )
}
export default MenuSite;