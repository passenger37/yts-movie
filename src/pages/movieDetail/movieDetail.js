import React  from 'react';
import axios from 'axios';
import './movieDetail.css';

// util
import {image_500} from '../../util/image_config';

class movieDetail extends React.Component {

    state={
        movieDetail:[],
        props:this.props.location.state.val,
    }

    componentDidMount(){
        if (this.props.location.state.val.media_type =='movie'){
            axios.get(`https://api.themoviedb.org/3/movie/${this.props.match.params.id}}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`)
            .then(res=>{
                    this.setState({movieDetail:res.data});
            });}

        else if  (this.props.location.state.val.media_type =='tv'){
            axios.get(`https://api.themoviedb.org/3/tv/${this.props.match.params.id}}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`)
            .then(res=>{
                    this.setState({movieDetail:res.data});
            });
        }
    }
    render() {

        var genres={...this.state.movieDetail.genres};
        var genre=[];

        for(let res in genres){
            genre.push(genres[res].name);
        }
        
        const genreName=(
            <div className='genre'>
                {
                    genre.map(val=>{
                        return(
                        <small key={val}>{val}</small>
                        )
                    })
                }
            </div>
        )
        return (
            <div className ='details'>
                <img src={`${image_500}/${this.state.props.poster_path}`} alt="movie_poster"/> <br/>
                <div className='details_name'>
                    <h1>{this.state.props.name ||this.state.props.original_title ||this.state.props.title}</h1>
                    <div>
                        <small>{this.state.props.vote_average} ({this.state.props.vote_count}) </small>
                        <small>{genreName}</small>
                    </div>
                </div>
                <small>{this.state.props.overview}</small>    
            </div>
        )
    }
}

export default movieDetail;
