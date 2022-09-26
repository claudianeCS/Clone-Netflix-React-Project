import React, {useEffect} from 'react'
import categories, { getMovies } from '../Api';
import './Banner.css'

function Banner() { //Filme destaque
    const [movie, setMovie] = React.useState({});
    const fetRandomMovie = async (_path) => {
        try {
            /*estou indo em getMovies e filtrando de categories para pegar somente da lista com o category.name === "originals" */
           // getMovies(categories.find(category => category.name === "originals")).path
           const netflixOriginalsCategories = categories.find((category) => category.name === "originals")
           const data = await  getMovies(netflixOriginalsCategories.path) //chamada na API paraa pegar esses filmes da categoria especifica
           const randomIndex = Math.floor(Math.random() * data.results.length) //calculando um valor aleatorio de index dentro da array
           const movies = data?.results;
           setMovie(movies[randomIndex]); //setando na variavel movie, o index aleatorio gerado dentro da array

        } catch (error) {
            console.log("Banner fetchRandomMovie error", error)
        }
    }

    useEffect(() => {
        fetRandomMovie();
    }, [])
    
  return (
    <header className='banner-container' style={{backgroundSize: "cover", 
    backgroundImage: `url("http://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
    roundPosition:"center-center"}}>
       <div className='banner-linear-blur'>
             <div className='banner-content'>
                <h1 className='banner-title'>
                    {movie?.title || movie?.name || movie?.original_title}
                </h1>
                <div className='banner-button1'></div>
                <div className='banner-description'></div>
            </div>
       </div>

    </header>
  )
}

export default Banner