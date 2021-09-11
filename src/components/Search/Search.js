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
        // console.log('Search REasult..',this.props.searchResults);
        const Cards=(
            // <div className="movie-cards">
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
            <div className='search' style={{backgroundImage: 'url("../../assests/premium_1.jpg")'}}>
                <form onSubmit={this.FetchSearchData}>
                    <input type="search" onChange={this.props.remove} placeholder="Search" /> <br/>
                    <label>Search</label> 
                    {/* <Button class="btn" btnType="submit">Search</Button> */}
                </form>
                {Cards}
            </div>
        );
    }
}

export default Search
