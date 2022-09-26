import React, { useEffect } from 'react'
import { getMovies } from '../Api';
import "./Row.css";

const imageHost = "http://image.tmdb.org/t/p/original/"
function Row({ title, path, isLarge}) {

    const [movies, setMovies] = React.useState([]);
    const fetMovies = async (_path) => {
        try {
            const data = await getMovies(_path);
            console.log("data", data);
            setMovies(data?.results);
        } catch (error) {
            console.log("fetchMovies error", error);
        }
    };

    useEffect(() => {
      fetMovies(path);
    }, [path])
    
    
  return (
    <div className='row-container'>
        <h2 className='row-hearder'>{title}</h2>
        <div className='row-cards'>
            <p>Filmes da sua infancia</p>
            {movies?.map((movie) => {
                return <img 
                className={`movie-card ${isLarge && "movie-card-large"}`}       //operador ternario, e um nameClass, mas de for maior(isLarge = true) &&(se toda a condição for true) sera a className movie-card-large
                key={movie.id} 
                src={`${imageHost}${isLarge ? movie.backdrop_path : movie.poster_path}`} 
                alt={movie.title}></img>
            })}
        </div>
    </div>
  )
}

export default Row