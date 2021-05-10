import React from 'react'
import { useState, useEffect } from "react"
import { Card, Image, Button, Icon, Modal, Table, Header, Rating } from 'semantic-ui-react'


const Image_Api = "https://image.tmdb.org/t/p/w500";

const ActorsCard = ({ id,name,profile_path}) => {
  const Details_Api = `http://api.themoviedb.org/3/movie/${id}?api_key=b8e4f457e57f8e0e1ed625b784a14f3b`
  const Videos_Api = `https://api.themoviedb.org/3/movie/${id}/videos?api_key=b8e4f457e57f8e0e1ed625b784a14f3b`

  const [videos, setVideos] = useState([])
  const [open, setOpen] = React.useState(false)
  const [details, setDetails] = useState([])

  useEffect(() => {
    fetch(Videos_Api).then(response => response.json())
      .then(data => {
        setVideos(data.results);
      })
  }, []);

  useEffect(() => {
    fetch(Details_Api).then(response => response.json())
      .then(data => {
        setDetails([data]);
        console.log(data)
      })
  }, []);

  return (

    <Modal
      basic
      dimmer='inverted blurring'
      centered
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      size='small'
      trigger={
        <Card color='red' raised >
          <Image src={Image_Api + profile_path} wrapped ui={false} className='cardImage' />
          <Card.Content className='cardContent'>
            <Card.Header className='filmTitle'>{name}</Card.Header>
            <Card.Meta>
              {/* <span className='releaseDate'>{release_date}</span> */}
            </Card.Meta>
          </Card.Content>
        </Card>
      }
      className='movieCard'
    >

      <Modal.Header className='modalTitle'>{name}</Modal.Header>
      <Modal.Content image>
        <Image size='huge' src={Image_Api + profile_path} wrapped />
        <Modal.Description>
          <p>
          </p>
          <div>
          </div>
            </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button color='red' inverted onClick={() => setOpen(false)}>
          <Icon name='remove' />Fermer
        </Button>
      </Modal.Actions>
      {/* {JSON.stringify(details)} */}
    </Modal>
  )
}
export default ActorsCard;