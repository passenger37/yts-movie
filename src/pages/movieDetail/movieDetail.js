import React  from 'react';
import axios from 'axios';
import './movieDetail.css';



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
                console.log('--------------------------------');
                console.log(res);
                    this.setState({movieDetail:res.data.results});
            });}

        else if  (this.props.location.state.val.media_type =='movie'){
            axios.get(`https://api.themoviedb.org/3/movie/${this.props.match.params.id}}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`)
            .then(res=>{
                console.log('--------------------------------');
                console.log(res);
                    this.setState({movieDetail:res.data.results});
            });
        }
    }
    render() {
        
        return (
            <div>
                <h1>Movie deatials</h1>
                <h3>{this.props.match.params.id}</h3>
                
            </div>
        )
    }
}

export default movieDetail;
