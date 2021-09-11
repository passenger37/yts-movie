import React from 'react';
import axios from 'axios';
require('dotenv').config();

import './Home.css';

// components
import Search from '../../components/Search/Search';
import Cards from '../../components/Cards/Cards';
// import UpcomingMovie from '../../components/Upcoming/Upcoming';

class Home extends React.Component{

    constructor(props){
        super(props);
        this.hideClassName=''
    }

    state = {
        UpcomingMovie:[],
        TrendingData:[],
        searchResults:[],
        tvToprated:[],
        tvPopular:[],
        typingTimeout: 0,
        typing:false,
    }
    

    componentDidMount(){
        axios.get(`https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`)
        .then(res=>{
            console.log(res);
                this.setState({
                    UpcomingMovie:res.data.results
                });
        });

        axios.get(`https://api.themoviedb.org/3/trending/all/week?api_key=${process.env.REACT_APP_API_KEY}`)
        .then(res=>{
            this.setState({
                TrendingData:res.data.results,
            });
        });

        axios.get(`https://api.themoviedb.org/3/tv/top_rated?api_key=${process.env.REACT_APP_API_KEY}`)
        .then(res=>{
            this.setState({
                tvToprated:res.data.results,
            });
        });

        axios.get(`https://api.themoviedb.org/3/tv/popular?api_key=${process.env.REACT_APP_API_KEY}`)
        .then(res=>{
            this.setState({
                tvPopular: res.data.results,
            });
        });
    }


    removeData=(event)=>{
        if(this.state.typingTimeout) clearTimeout(this.state.typingTimeout);
        this.state.typingTimeout= setTimeout(() => {
          axios.get(`https://api.themoviedb.org/3/search/multi?api_key=${process.env.REACT_APP_API_KEY}&query=${event.target.value}&page=1`)
          .then(res=>{
              this.setState({
                  searchResults: res.data.results,
                })
            })  
        }, 300);

        this.setState({typing:true});

        if(this.state.typing){
            this.hideClassName='hide';
        }
        if(event.target.value.length ==0){
            this.hideClassName='';
            this.setState({
                searchResults: [],
              });
        }
    }

    render(){


        // console.log('==============================');
        console.log(this.state.tvLatest);
        // console.log('==============================');
        console.log(this.state.tvToprated);
        
        return(
            <div className="home">
                <Search
                    searchResults={this.state.searchResults}
                    remove={this.removeData}/>
                <h1 className={this.hideClassName}>Trending</h1>
                <Cards
                    class={this.hideClassName}
                    data={this.state.TrendingData}/>
                <h1 className={this.hideClassName}>Upcoming</h1>
                <Cards
                    class={this.hideClassName}
                    data={this.state.UpcomingMovie}/>
                <h1 className={this.hideClassName}>Top rated Tv this week</h1>
                <Cards
                    class={this.hideClassName}
                    data={this.state.tvToprated}/>
                <h1 className={this.hideClassName}>Top Tv popular</h1>
                <Cards
                    class={this.hideClassName}
                    data={this.state.tvPopular}/>
            </div>
        )
    }
}

export default Home;

