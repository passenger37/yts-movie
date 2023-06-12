import React ,{Fragment} from 'react';
import './SingleCard.css';

import {image_300} from '../../util/image_config';

const SingleCard = (props) => {
    return (
        <Fragment >
            <div className='movie-card'>
                <div className="progress-bar">
                    <span className="progress-value">{Math.round(props.rating)*10}%</span>
                </div>
                <img src={`${image_300}/${props.poster}`} alt="movie_poster" width="180" height="250"/> <br/>
                <h2>{props.title}</h2> <br />
                {/* <p>{props.release_date}</p> */}
            </div>
        </Fragment>
    );
}

export default SingleCard;
