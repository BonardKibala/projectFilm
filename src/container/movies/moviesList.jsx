import React from "react";
import ReactDOM from "react-dom";
import { useEffect, useState } from "react";
import { Grid, Pagination } from "semantic-ui-react";
import MenuSite from "../menu";
import LoaderPage from "./loader";
import MoviesCard from "./movieCard";


const MoviesList = () => {
    const [movies, setMovies] = useState([])

    const Featured_Api = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=b8e4f457e57f8e0e1ed625b784a14f3b&language=fr-FR&page=`;
    const [activePage, setActivePage] = useState(1);
    const search_Api = `https://api.themoviedb.org/3/search/movie?&api_key=b8e4f457e57f8e0e1ed625b784a14f3b&page=${activePage}&query=`;
    const [searchValue, setSearchValue] = useState('')
    const [searchQuery, setSearchQuery] = useState(search_Api + searchValue)
    const [apiUrl, setApiUrl] = useState(Featured_Api + activePage);
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        fetch_api(apiUrl)
    }, [apiUrl]);

    const fetch_api = (api) => {
        fetch(api).then(response => response.json())
            .then(data => {
                setLoading(false)
                console.log(data);
                setMovies(data.results);
            });
    }
    const handlechange = (e) => {
        const value = e.target.value
        setSearchValue(value)
    }
    const handlesubmit = (e) => {
        e.preventDefault()
        if (searchValue) {
            fetch_api(search_Api +searchValue)
        }
    }


    const pageChange = (e, pageInfo) => {
        e.preventDefault()
        setActivePage(pageInfo.activePage);
        setApiUrl(Featured_Api + pageInfo.activePage.toString());
        // setSearchQuery(search_Api + pageInfo.activePage.toString() + query + searchValue)
    };

    return (
        <div >
            <MenuSite onChange={(e) => handlechange(e)} onSubmit={(e) => handlesubmit(e)} value={searchValue} />
            <Grid >
                <div className='movieTitle'><h1>Tous les Films </h1><div className='redBorder'></div></div><br></br><br></br>
            </Grid>
            {
                loading ? <div><LoaderPage /></div> :
                    <Grid container >

                        {
                            movies.length > 0 && movies.map(movie => <Grid.Column mobile={16} tablet={8} computer={4} className="cardColumn"><MoviesCard key={movie.id} {...movie} /></Grid.Column>)
                        }
                        <br></br>
                        <Pagination
                            activePage={activePage}
                            onPageChange={pageChange}
                            totalPages={100}
                            ellipsisItem={null}
                            secondary
                            inverted
                        />
                    </Grid>

            }
        </div>
    )
}
export default MoviesList;