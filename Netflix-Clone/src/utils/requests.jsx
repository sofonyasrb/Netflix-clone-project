const API_KEY = import.meta.env.VITE_TMDB_REACT_APP;

const requests = {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTopRatedMovies: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
    fetchDramaMovies: `/discover/movie?api_key=${API_KEY}&with_genres=18`,
    fetchWarMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10752`,
    fetchTvShow: `tv/popular?api_key=${API_KEY}&language=en-US&page=1`,
};
export default requests;


// https://api.themoviedb.org/3/discover/movie?api_key=ca4be19a26c629cc08f80eb64e91f069&with_networks=213  //http request