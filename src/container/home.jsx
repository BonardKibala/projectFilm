import { Button, Grid, Icon } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import NewsCard from './movies/newsCard'
import News from './news'
import CarousselHome from './movies/carousselHome'
import LastFilms from './movies/lastFilm'
import SeriesTV from './series/newsSeries'
import Footer from './footer'
import TopFilms from './movies/topFilms'

const Home = () => {

    return (
        <>
        <div className='HomeContainer'>
            <CarousselHome/>
            <News/><br></br>
            <div className='separeBlock'></div><br></br>
            <TopFilms/><br></br>
            <div className='separeBlock'></div><br></br>
            <LastFilms/><br></br>
            <div className='separeBlock'></div><br></br>
            <SeriesTV/><br></br>
            <div className='separeBlock'></div><br></br>
            <Footer/>
        </div>
        </>
    )
}
export default Home;