const apiKey = "7e7d480a2f64d74d55ed00b491b707ee"

const requests = {
    fetchHeroMovies: `/discover/movie?api_key=${apiKey}&page=5`,
    fetchListMovies: `/discover/movie?api_key=${apiKey}&language=en-US`,
    fetchListTVShows: `/discover/tv?api_key=${apiKey}`,
    fetchNewAndPopular: `/movie/now_playing?api_key=${apiKey}&page=3`

}

export default requests