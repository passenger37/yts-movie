import React from 'react';
import {NavLink} from 'react-router-dom';
import './Search.css';

import Button from '../UI/Button/Button';
import SingleCard from '../SingleCard/SingleCard';

class Search extends React.Component{  
    
    FetchSearchData=(event)=>{
        event.preventDefault();
    }
    
    render() {
        const Cards=(
            <div>
                {
                   this.props.searchResults.map(val=>{
                        return( 
                            <NavLink exact to={{ 
                                pathname:'/media/'+val.id, 
                                state:{val:val}} }>
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
        return (
            <div className='search'>
                <form onSubmit={this.FetchSearchData}>
                    <input type="search" onChange={this.props.remove} placeholder="Search movies,tv series,etc." /> 
                    <br/>
                    <label>Search</label> 
                </form>
                {Cards}
            </div>
        );
    }
}

export default Search
