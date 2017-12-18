import * as types from '../constants/ActionTypes'

export default function movieDetails(state = {
  isFetching: false,
  item: []
}, action) {
  switch(action.type) {
    case types.RECEIVE_MOVIE_DETAILS:
      return Object.assign({}, state, {
        isFetching: false,
        item: [...state.item, action.movieDetails]
      })

    case types.REQUEST_MOVIE_DETAILS:
      return Object.assign({}, state, {
        isFetching: true
      })

    default:
      return state
  }
}