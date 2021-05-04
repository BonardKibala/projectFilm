import { Button, Segment, Grid,Icon } from 'semantic-ui-react'
const Home = () => {

    return (
        <>
            <Segment className='startSegment'>
                <Grid columns={1} >
                    <Grid.Column className='textStart'>
                        <div>
                        Avec <span className='head'>Biso</span><span className='span'>Film</span><Icon className='iconFilm1' name='film'/>, recherchez le film au choix et savourez-le avec le plaisir.
                        <br></br><br></br>
                        <span className='bienvenu'>
                            Vous êtes le(a) bienvenu(e)
                          </span>
                        </div>
                        <div><br></br>
                        <Button primary className='btnStart'>
                            Commencer
                        </Button>
                        </div>
                    </Grid.Column>
                    {/* <Grid.Column className='ContainerbtnStart'>
                        
                    </Grid.Column> */}
                </Grid>
            </Segment>
        </>
    )
}
export default Home;