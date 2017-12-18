import * as types from '../constants/ActionTypes'

export default function castDetails(state = {
  isFetching: false,
  item: []
}, action) {
  switch(action.type) {
    case types.RECEIVE_CAST_DETAILS:
      return Object.assign({}, state, {
        isFetching: false,
        item: [...state.item, action.castDetails]
      })

    case types.REQUEST_CAST_DETAILS:
      return Object.assign({}, state, {
        isFetching: true
      })

    default:
      return state
  }
}