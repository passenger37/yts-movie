import Trending from '../../containers/Trending/Trending';
import './Home.css';


const home=()=>{
    // 
https://api.themoviedb.org/3/search/company?api_key=ba21b5373a69c95d62db0cbfd7d4b67d&query=sucide&page=1
    return(
        <div className="home">
            <Trending/>
        </div>
    )
}

export default home;

