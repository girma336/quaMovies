import React from 'react'
import MovieLists from './MovieLists'
import './../style/Movies.css';

const Movies = ({ movies, setDetail }) => {
    return (
        <div className='grid__movies'>
            {movies?.map((item, index) => (
                <MovieLists key={index} movie={item} setDetail={setDetail} />
            ))}
        </div>
    )
}

export default Movies