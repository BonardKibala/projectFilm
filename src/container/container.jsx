
import { Route, Switch } from 'react-router-dom';
import Home from './home'
import MenuSite from './menu'
import MoviesList from './movies/moviesList';
import SeriesList from './series/seiesList';
const PrincipalContainer = ()=>{

    return (
<div className='principalcontainer'>
<MenuSite />
<Switch>
    <Route exact path="/" component={Home} />
    <Route path="/movies" component={MoviesList} />
    <Route  path="/series" component={SeriesList} />
</Switch>
</div>
    )
}
export default PrincipalContainer;