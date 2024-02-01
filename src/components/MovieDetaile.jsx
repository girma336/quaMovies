import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './../style/MovieDetail.css';

const MovieDetail = ({ detail }) => {
    const [movie, setMovie] = useState(null);

    useEffect(() => {
        const storedMovie = JSON.parse(localStorage.getItem('movieDetail'));
        if (detail) {
            localStorage.setItem('movieDetail', JSON.stringify(detail));
            setMovie(detail);
        } else if (storedMovie) {
            setMovie(storedMovie);
        }
    }, [detail]);

    console.log(movie || detail);

    return (
        <div>
            <div className="grid__detail">
                <div className="grid__first">
                    <img src={movie?.show?.image?.medium} alt="" className="left_image" />
                    <div className="summary">
                        <div dangerouslySetInnerHTML={{ __html: movie?.show?.summary }} />
                        <a className='button' href={movie?.show?.url} target="_blank" rel="noreferrer">Visit site</a>
                    </div>
                </div>
                <div className="grid__second">
                    <h1 className='info-summary'>Show Info</h1>
                    <div className="more_detail">
                        <p>Network: <span>{movie?.show?.network?.name}</span> </p>
                        <p>Schedule: <span>{movie?.show?.schedule?.days && movie.show.schedule.days[0]}</span> </p>
                        <p>Status:<span>{movie?.show?.status}</span>  </p>
                        <p>Language: <span>{movie?.show?.language}</span>  </p>
                        <p>Show Type:<span>{movie?.show?.type} </span></p>
                        <p>Genres: <span>{movie?.show?.genres && movie.show.genres[0]} | {movie?.show?.genres && movie.show.genres[1]} | {movie?.show?.genres && movie.show.genres[2]} </span></p>
                        <p>Episodes ordered:<span>{movie?.show?.averageRuntime}</span></p>
                        <p>Official site: <span><a href={movie?.show?.officialsite} target="_blank" rel="noreferrer">Visit site</a></span></p>
                    </div>
                </div>
            </div>
            <div className='back_div'>
                <Link to="/" className='back'>
                    Back
                </Link>
            </div>
        </div>
    );
};

export default MovieDetail;