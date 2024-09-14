import React, { useEffect, useState } from 'react'
import "./row.css"
import axios from "../../../utils/axios";
import YouTube from 'react-youtube';
import movieTrailer from "movie-trailer"


const Row = ({title, fetchUrl, isLargeRow}) => {
    let [movies, setMovies] = useState([]);
    let [trailerUrl, setTrailerUrl] = useState("");
    let baseUrl = "https://image.tmdb.org/t/p/original";

    useEffect(() => {
        async function fetchData() {
        const request = await axios.get(fetchUrl);
            console.log(request);
            setMovies(request.data.results);
            return request;
        }
        fetchData();      //invoke the function
    }, [fetchUrl]);       // dependencies 

    const opts = {
        height: "390",
        width: "100%",
        playerVars: {
            autoplay: 1,
        },
    }

    const handleClick = (movie) => {
        if (trailerUrl) {
            setTrailerUrl("");
        } else {
            movieTrailer(movie?.title || movie?.name || movie?.original_name)
                .then((url) => {
                    const urlParams = new URLSearchParams(new URL(url).search);
                    setTrailerUrl(urlParams.get('v'));

                }).catch(error => console.log(error))
        }
    };

    return (
        <div className="row">
        <h2>{title}</h2>
        <div className="row_posters">
            {movies?.map((movie, index) => (
            <img
                key={index}
                onClick={() => handleClick(movie)}
                className = {`row_poster  ${isLargeRow && "row_posterLarge"} `}
                src={`${baseUrl}${isLargeRow ? movie?.poster_path : movie?.backdrop_path}`}
                alt={movie.name}
            />
            ) )}
        </div>
        {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
        </div>
    );
}

export default Row
