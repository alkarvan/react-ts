const baseURL = 'https://api.themoviedb.org/3'

const movies = '/discover/movie'

const genres = '/genre/movie/list'

const poster = 'https://image.tmdb.org/t/p/w500'

const urls = {
    movies,
    genres,
    poster: (posterPath:string): string => `${poster}${posterPath}`
}

export {
    baseURL,
    urls
}

