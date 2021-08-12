import React ,{Fragment} from 'react';
import axios from 'axios';
import './Trending.css';
// Components
import SingleCard from '../../components/SingleCard/SingleCard';


class Trending extends React.Component{

    state={
        trendingData:[],
        loading:true,
    }

    componentDidMount(){
        axios.get(`https://api.themoviedb.org/3/trending/all/week?api_key=${process.env.REACT_APP_API_KEY}`)
            .then(res=>{
                this.setState({
                    trendingData:res.data.results,
                    loading:false
                });
            });
        }  
         
    render(){

        const Cards=(
            <div className="movie-cards">
                {
                    this.state.trendingData.map(val=>{
                        return <SingleCard
                                    key={val.id}
                                    title={val.original_title || val.title}
                                    overview={val.overview}
                                    rating={val.vote_average}
                                    type={val.media_type}
                                    release_date={val.release_date}
                                    poster={val.poster_path} />
                    })
                }
            </div>
        );

        console.log(this.state.trendingData);
        return (
            <Fragment>
                <h1>Trending Data...</h1>
                {Cards}
            </Fragment>
        );
    }
}

export default Trending;