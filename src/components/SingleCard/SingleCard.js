import React ,{Fragment} from 'react';
import './SingleCard.css';

import {image_300} from '../../util/image_config';

const SingleCard = (props) => {
    return (
        <Fragment >
            <div className='movie-card'>
                <img src={`${image_300}/${props.poster}`} alt="movie_poster" width="180" height="250"/> <br/>
                <strong>{props.title}</strong> <br />
                <small>{props.release_date}</small>
            </div>
        </Fragment>
    );
}

export default SingleCard;
