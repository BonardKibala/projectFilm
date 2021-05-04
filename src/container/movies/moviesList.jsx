import { useEffect, useState } from "react";
import { Card, Grid, Pagination, Segment } from "semantic-ui-react";
import LoaderPage from "./loader";
import MoviesCard from "./movieCard";


const MoviesList = () => {
    const [movies, setMovies] = useState([])

    const Featured_Api = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=b8e4f457e57f8e0e1ed625b784a14f3b&page=`;

    const search_Api = "https://api.themoviedb.org/3/search/movie?&api_key=b8e4f457e57f8e0e1ed625b784a14f3b&query=";

    const [activePage, setActivePage] = useState(1);
    const [apiUrl, setApiUrl] = useState(Featured_Api + activePage);
    const [loading,setLoading] = useState(false)


    useEffect(() => {
        setLoading(true)
        fetch(apiUrl).then(response => response.json())
            .then(data => {
                setLoading(false)
                console.log(data);
                setMovies(data.results);
            })
    }, [apiUrl]);

    const onChange = (e, pageInfo) => {
        setActivePage(pageInfo.activePage);
        setApiUrl(Featured_Api + pageInfo.activePage.toString());
    };

    return (
        <div>
            <h1>Movies List</h1>
            {
            loading ?<div><LoaderPage/></div>:
            <Grid columns={1}>
                <Grid.Column stackable>
                    <Segment className='movieCards'>
                        <Card.Group itemsPerRow={7}>
                            {
                                movies.length > 0 && movies.map(movie => <MoviesCard key={movie.id} {...movie} />)
                            }
                        </Card.Group> <br></br>
                        <Pagination
                            activePage={activePage}
                            onPageChange={onChange}
                            totalPages={100}
                            ellipsisItem={null}
                            secondary
                            inverted
                        />
                    </Segment>
                </Grid.Column>
            </Grid>
            }
        </div>
    )
}
export default MoviesList;