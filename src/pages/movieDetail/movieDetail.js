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
        console.log('ID >>>',this.props.match.params.id);
        console.log('PROPS >>>>',this.state.props);
        if (this.props.location.state.val.media_type =='movie'){
            axios.get(`https://api.themoviedb.org/3/movie/${this.props.match.params.id}}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`)
            .then(res=>{
                console.log(res);
                    this.setState({movieDetail:res.data.results});
            });}

        else if  (this.props.location.state.val.media_type =='tv'){
            axios.get(`https://api.themoviedb.org/3/tv/${this.props.match.params.id}}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`)
            .then(res=>{
                console.log(res);
                    this.setState({movieDetail:res.data.results});
            });
        }
    }
    render() {
        
        console.log(this.state.props.poster_path)
        return (
            <div className ='details'>
                <h1>Movie/Tv deatials</h1>
                <img src={`${image_500}/${this.state.props.poster_path}`} alt="movie_poster" width="450" height="600"/> <br/>
                <h1>{this.state.props.name ||this.state.props.original_title ||this.state.props.title}</h1>
                <small>{this.state.props.overview}</small>
                
            </div>
        )
    }
}

export default movieDetail;
