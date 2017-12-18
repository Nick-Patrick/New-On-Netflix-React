import * as config from '../constants/Config'
import * as types from '../constants/ActionTypes'

const api = 'https://stream-sidekick-app-api.herokuapp.com/api/'
const tmdbUrl = config.TMDB_URL
const tmdbApiKey = 'api_key=' + config.TMDB_API_KEY

function receiveNew (newTitles) {
  return {
    type: types.RECEIVE_NEW,
    newTitles
  }
}

function requestNew () {
  return {
    type: types.REQUEST_NEW
  }
}

function requestMovieDetails (movie) {
  return {
    type: types.REQUEST_MOVIE_DETAILS
  }
}

function receiveMovieDetails (movieDetails) {
  return {
    type: types.RECEIVE_MOVIE_DETAILS,
    movieDetails
  }
}

export function fetchNewIfNeeded (options, refreshCallback) {
  const { page, days } = options
  return (dispatch, getState) => {
    return dispatch(fetchNew(page, days, refreshCallback))
  }
}

export function fetchMovieDetails (movie, titleType = 'movie') {
  const movieId = movie.imdb || movie.id
  let mediaType = movie.media_type || titleType

  if (movie.episode_count || movie.original_name) mediaType = 'tv'

  return (dispatch, getState) => {
    dispatch(requestMovieDetails())
    return fetch(tmdbUrl + mediaType + '/' + movieId + '?' + tmdbApiKey + '&append_to_response=videos,images,credits,similar', { method: 'GET' })
      .then(response => response.json())
      .then(json => {
        if (json) dispatch(receiveMovieDetails(json))
      })
      .catch(error => console.log('Fetch Movie error: ', error))
  }
}

function fetchNew (page = 1 , days = 7 , refreshCallback) {
  return (dispatch, getState) => {
    dispatch(requestNew())
    const apiEndpoint = api + 'more/3/1/' + page + '/' + 'US' + '/' + days

    fetch(apiEndpoint, {
      method: 'GET',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      }
    }).then(resp => {
      return resp.json()
    }).then(json => {
      if (json) dispatch(receiveNew(json))
      if (refreshCallback) refreshCallback()
    })
      .catch(err => {
        console.error('New error', err)
        if (refreshCallback) refreshCallback()
      })
  }
}
