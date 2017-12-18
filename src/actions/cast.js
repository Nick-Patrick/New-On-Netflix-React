import * as types from '../constants/ActionTypes'
import * as config from '../constants/Config'

const tmdbUrl = config.TMDB_URL + 'person/'
const tmdbApiKey = 'api_key=' + config.TMDB_API_KEY

function requestCastDetails(cast) {
  return {
    type: types.REQUEST_CAST_DETAILS
  }
}

function receiveCastDetails(castDetails) {
  return {
    type: types.RECEIVE_CAST_DETAILS,
    castDetails
  }
}

export function fetchCastDetails(cast) {
  const castId = cast.id

  return (dispatch, getState) => {
    dispatch(requestCastDetails())

    return fetch(tmdbUrl + castId + '?' + tmdbApiKey + '&append_to_response=images,movie_credits,tv_credits', { method: 'GET' })
      .then(response => response.json())
      .then(json => {
        dispatch(receiveCastDetails(json))
      })
      .catch(error => console.log('Fetch Cast error: ', error))
  }
}