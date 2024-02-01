import React from 'react'
import { Link } from 'react-router-dom';
import './../style/MovieList.css'
const MovieLists = ({ movie, setDetail }) => {
    const handleClick = () => {
        setDetail(movie)
    }
    return (
        <Link to="/details">
            <div className='movies__container' onClick={handleClick}>
                <div className="movies__box">
                    <img src={movie?.show?.image?.original} alt={movie?.show?.name} className='imag__movie' />
                </div>
                <div className="name__movies">
                    <h2>{movie?.show?.name}</h2>
                    <p>{movie?.show?.language}</p>
                </div>
            </div>
        </Link>
    )
}

export default MovieLists