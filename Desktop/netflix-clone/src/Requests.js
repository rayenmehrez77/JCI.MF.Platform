const APIKEY = "5872a43fdbd6de633beb8966d354c6a6";

const requests = {
  fetchTrending: `/trending/all/week?api_key=${APIKEY}&language
    =en-US`,
  fetchNetflixOriginals: `/discover/tv?api_key=${APIKEY}&with_networks=213`,
  fetchTopRated: `/movie/top_rated?api_key=${APIKEY}&language
    =en-US`,
  fetchActionMovies: `/discover/movie?api_key=${APIKEY}&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${APIKEY}&with_genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${APIKEY}&with_genres=27`,
  fetchDocumentaries: `/discover/movie?api_key=${APIKEY}&with_genres=99`,
};

export default requests;
