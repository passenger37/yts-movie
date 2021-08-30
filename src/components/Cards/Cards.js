import React ,{Fragment} from 'react';
import {NavLink} from 'react-router-dom';
import './Cards.css';

// Components
import SingleCard from '../SingleCard/SingleCard';


class Trending extends React.Component{

    render(){
        const Cards=(
            <div className="movie-cards">
                    {
                        this.props.data.map(val=>{
                            return( 
                                <NavLink exact to={{ 
                                    pathname:'/media/'+val.id, 
                                    state:{val:val}} }
                                    key={val.id}>
                                    <SingleCard
                                        key={val.id}
                                        title={val.original_title || val.title}
                                        overview={val.overview}
                                        rating={val.vote_average}
                                        type={val.media_type}
                                        release_date={val.release_date}
                                        poster={val.poster_path} />
                                </NavLink>)
                            })
                    }
                </div>
        );

        console.log('this is Trending',this.props.TrendingData);
        return (
            <div className={this.props.class}>
                {Cards}
            </div>
        );
    }
}

export default Trending;