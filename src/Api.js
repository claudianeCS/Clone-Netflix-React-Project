const API_KEY = "fbd6a973ca5cad8224b0b482825e77a0"

const categories = [
    {
        name: 'topRated',
        title: 'Em Alta',
        path: `/movie/top_rated?api_key=${API_KEY}&lenguage=pt-BR`,
        isLarge: true
    },
    {
        name:'originals',
        title: 'Originais do Netflix',
        path: `/discover/tv?api_key=${API_KEY}&with_networks=213&lenguage=pt-BR`,
        isLarge : false
    },
    {
        name:'trending',
        title: 'Recomendados para Voce',
        path: `/trending/all/week?api_key=${API_KEY}&language=pt-BR`,
        isLarge: false
    },
    {
        name:'action',
        title: 'Ação',
        path: `/discover/movie?api_key=${API_KEY}&with_genres=28&lenguage=pt-BR`,
        isLarge: false
    },
    {
        name:'comedy',
        title: 'Comedia',
        path:`/discover/movie?api_key=${API_KEY}&with_genres=35&lenguage=pt-BR`,
        isLarge: false
    },
    {
        name:'horror',
        title: 'Terror',
        path: `/discover/movie?api_key=${API_KEY}&with_genres=27&lenguage=pt-BR`,
        isLarge: false
    },
    {
        name:'romance',
        title: 'Romance',
        path: `/discover/movie?api_key=${API_KEY}&with_genres=10749&lenguage=pt-BR`,
        isLarge: false
    },
    {
        name:'documentary',
        title: 'Documentarios',
        path: `/discover/movie?api_key=${API_KEY}&with_genres=99&lenguage=pt-BR`,
        isLarge: false
    } 
];

export const getMovies = async (path) => {
    try {
        let url = `https://api.themoviedb.org/3${path}`
        const response = await fetch(url);
        return await response.json();

    } catch (error) {
        console.log("error getMovies:", error)
    }
}

export default categories;