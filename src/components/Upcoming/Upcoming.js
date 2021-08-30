import React from 'react';
import {NavLink} from 'react-router-dom';
import './Upcoming.css';

// components
import SingleCard from '../SingleCard/SingleCard';

class Upcoming extends React.Component {

    render() {
        console.log('this is UPcomingMovie',this.props.UpcomingMovie);
        const Cards=(
            <div className="movie-cards">
                {
                    this.props.UpcomingMovie.map(val=>{
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
                            </NavLink>
                                    )
                    })
                }
            </div>
        );

        return (
            <div className={this.props.class}>
                <h1>Upcoming...</h1>
                {Cards}
            </div>
        );
    }
}

export default Upcoming;
